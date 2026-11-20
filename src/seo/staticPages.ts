/**
 * 构建时为每个页面地址生成一份网页文件（只在构建脚本和测试里用，不打包进网站）。
 *
 * 为什么需要：网站放在腾讯云 COS 静态网站上，COS 里只有 index.html，
 * 访问 /products/chatu、/en/cases 这类地址时 COS 找不到同名文件，会把 index.html 当「错误页」返回，
 * 页面能正常显示，但 HTTP 状态码是 404，搜索引擎一般不收录。
 * 构建后把 index.html 按每个地址复制一份（写好该页面的语言、标题、描述、各语言版本链接），
 * 部署时上传到 COS 里和地址同名的位置（见 scripts/upload_route_pages.py），这些地址就返回 200。
 */
import router, { SITE_ORIGIN, pageHead } from '@/router'
import { paidInsights } from '@/data/paidInsights'
import { HREFLANG, SUPPORTED_LOCALES, localeFromPath, localizePath, stripLocale } from '@/i18n/paths'
import type { SupportedLocale } from '@/i18n'
import zhCN from '@/i18n/locales/zh-CN'
import en from '@/i18n/locales/en'
import ja from '@/i18n/locales/ja'
import ko from '@/i18n/locales/ko'

const TAGLINES: Record<SupportedLocale, string> = {
  'zh-CN': zhCN.common.siteTagline,
  en: en.common.siteTagline,
  ja: ja.common.siteTagline,
  ko: ko.common.siteTagline,
}

const OG_LOCALE: Record<SupportedLocale, string> = { 'zh-CN': 'zh_CN', en: 'en_US', ja: 'ja_JP', ko: 'ko_KR' }

export interface StaticPage {
  /** 网址路径，如 /en/products/chatu */
  path: string
  /** COS 里的文件名（路径去掉开头的 /），如 en/products/chatu */
  key: string
  locale: SupportedLocale
  title: string
  description: string
  ogTitle: string
  ogDescription: string
}

/**
 * 所有需要单独生成网页文件的地址：每个页面的中、英、日、韩版本，旧地址跳转不生成。
 * 首页 / 的 key 为空字符串：构建脚本把它写回 dist/index.html（COS 的首页和「错误页」都是它）。
 */
export function staticPages(): StaticPage[] {
  const pages: StaticPage[] = []
  for (const route of router.getRoutes()) {
    if (route.redirect) continue
    // 有偿资讯详情页 /paid-insight/:id 按已有的文章逐篇生成
    const paths = route.path.includes(':id') ? paidInsights.map((p) => route.path.replace(':id', p.id)) : [route.path]
    for (const path of paths) {
      if (path.includes(':')) continue
      const locale = localeFromPath(path)
      pages.push({
        path,
        key: path.slice(1),
        locale,
        ...pageHead(route.meta, route.name, locale, TAGLINES[locale]),
      })
    }
  }
  return pages.sort((a, b) => a.path.localeCompare(b.path))
}

function escapeAttr(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}
function escapeText(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

/** 把构建出的 index.html 改成某个页面的版本：语言、标题、描述、正式网址、各语言版本链接、分享信息 */
export function renderPage(indexHtml: string, page: StaticPage): string {
  let html = indexHtml
  const replace = (pattern: RegExp, replacement: string) => {
    if (!pattern.test(html)) throw new Error(`index.html 里找不到 ${pattern}，生成页面 ${page.path} 失败`)
    html = html.replace(pattern, replacement)
  }
  const url = `${SITE_ORIGIN}${page.path}`
  const meta = (attr: 'name' | 'property', key: string, content: string) =>
    replace(new RegExp(`<meta ${attr}="${key}" content="[^"]*"\\s*/?>`), `<meta ${attr}="${key}" content="${escapeAttr(content)}" />`)

  replace(/<html lang="[^"]*">/, `<html lang="${page.locale}">`)
  replace(/<title>[^<]*<\/title>/, `<title>${escapeText(page.title)}</title>`)
  meta('name', 'description', page.description)
  meta('property', 'og:title', page.ogTitle)
  meta('property', 'og:description', page.ogDescription)
  meta('property', 'og:url', url)
  meta('property', 'og:locale', OG_LOCALE[page.locale])
  meta('name', 'twitter:title', page.ogTitle)
  meta('name', 'twitter:description', page.ogDescription)

  const base = stripLocale(page.path)
  const alternates = [
    ...SUPPORTED_LOCALES.map((l) => [HREFLANG[l], `${SITE_ORIGIN}${localizePath(base, l)}`]),
    ['x-default', `${SITE_ORIGIN}${base}`],
  ]
    .map(([lang, href]) => `\n    <link rel="alternate" hreflang="${lang}" href="${escapeAttr(href)}" />`)
    .join('')
  replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${escapeAttr(url)}" />${alternates}`)
  return html
}
