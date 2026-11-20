import type { SupportedLocale } from './index'

/**
 * 多语言网址：中文不带前缀（/products/chatu），英文、日文、韩文加前缀（/en/products/chatu、/ja/…、/ko/…）。
 * 网址决定页面语言；这里是网址和语言之间互相换算的纯函数。
 */
export const LOCALE_PREFIXES: Record<SupportedLocale, string> = {
  'zh-CN': '',
  en: '/en',
  ja: '/ja',
  ko: '/ko',
}

export const SUPPORTED_LOCALES = Object.keys(LOCALE_PREFIXES) as SupportedLocale[]

/** hreflang 用的语言代码 */
export const HREFLANG: Record<SupportedLocale, string> = {
  'zh-CN': 'zh-CN',
  en: 'en',
  ja: 'ja',
  ko: 'ko',
}

const PREFIX_RE = /^\/(en|ja|ko)(?=\/|$)/

/** 网址属于哪种语言：/en、/en/… 是英文，其余（不带前缀）是中文 */
export function localeFromPath(path: string): SupportedLocale {
  const m = PREFIX_RE.exec(path)
  return m ? (m[1] as SupportedLocale) : 'zh-CN'
}

/** 去掉语言前缀：/en/products/chatu → /products/chatu，/en → / */
export function stripLocale(path: string): string {
  const rest = path.replace(PREFIX_RE, '')
  return rest === '' ? '/' : rest.startsWith('/') ? rest : `/${rest}`
}

/**
 * 换成指定语言的网址（可带 ?query 和 #hash）：
 * localizePath('/products/chatu', 'en') → '/en/products/chatu'；localizePath('/en/cases', 'zh-CN') → '/cases'
 */
export function localizePath(path: string, locale: SupportedLocale): string {
  const m = /^([^?#]*)(.*)$/.exec(path)!
  const base = stripLocale(m[1] || '/')
  const prefix = LOCALE_PREFIXES[locale]
  const localized = prefix ? (base === '/' ? prefix : prefix + base) : base
  return localized + m[2]
}

/** 以前的单语言联系页地址，换成新的语言前缀地址 */
export const LEGACY_REDIRECTS: Record<string, string> = {
  '/jp/contact': '/ja/contact',
  '/hg/contact': '/ko/contact',
}

/** 搜索引擎、链接预览等爬虫：不按浏览器语言自动跳转，让它们按网址收录各语言版本 */
export function isBot(userAgent: string): boolean {
  return /bot|crawl|spider|slurp|bingpreview|facebookexternalhit|embedly|quora link preview|whatsapp|telegram|baidu|sogou|yandex|bytespider|petalbot|360spider/i.test(
    userAgent,
  )
}
