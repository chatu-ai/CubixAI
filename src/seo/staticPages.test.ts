import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import router from '@/router'
import { paidInsights } from '@/data/paidInsights'
import { localeFromPath } from '@/i18n/paths'
import { renderPage, staticPages } from './staticPages'

const indexHtml = readFileSync('index.html', 'utf8')
const KANA = /[぀-ヿ]/
const HANGUL = /[가-힯]/

describe('staticPages', () => {
  const pages = staticPages()
  const byPath = new Map(pages.map((p) => [p.path, p]))

  it('covers every page in every language, plus each paid insight article', () => {
    const routePaths = router
      .getRoutes()
      .filter((r) => !r.redirect)
      .flatMap((r) => (r.path.includes(':id') ? paidInsights.map((p) => r.path.replace(':id', p.id)) : [r.path]))
    expect(pages.map((p) => p.path).sort()).toEqual([...new Set(routePaths)].sort())
    for (const path of ['/', '/products/chatu', '/en', '/ja/solutions', '/ko/cases', '/en/contact', '/ja/contact', '/ko/contact']) {
      expect(byPath.has(path), path).toBe(true)
    }
    expect(byPath.has(`/ko/paid-insight/${paidInsights[0].id}`)).toBe(true)
    // 旧地址只是跳转，不生成文件
    expect(byPath.has('/jp/contact')).toBe(false)
    expect(byPath.has('/hg/contact')).toBe(false)
  })

  it('uses the URL path without the leading slash as the COS file name', () => {
    for (const p of pages) {
      expect(p.key).toBe(p.path.slice(1))
      expect(p.locale).toBe(localeFromPath(p.path))
    }
    expect(byPath.get('/')!.key).toBe('')
  })

  it('gives each language version its own title and description', () => {
    expect(byPath.get('/products/chatu')!.title).toContain('ChatU 企业大模型平台')
    expect(byPath.get('/en/products/chatu')!.title).toBe('ChatU Enterprise LLM Platform | CubixAI')
    const ja = byPath.get('/ja/products/agentstation')!
    expect(KANA.test(ja.title) || /AgentStation/.test(ja.title)).toBe(true)
    expect(KANA.test(ja.description)).toBe(true)
    expect(HANGUL.test(byPath.get('/ko/cases')!.description)).toBe(true)
    // 英文页面不配中文描述
    expect(/[一-鿿]/.test(byPath.get('/en/solutions')!.description)).toBe(false)
    // 单独做的各语言联系页用它们自己的描述
    expect(byPath.get('/ja/contact')!.description).toContain('CubixAIへのお問い合わせ')
  })
})

describe('renderPage', () => {
  const page = staticPages().find((p) => p.path === '/ja/products/agentstation')!
  const html = renderPage(indexHtml, page)

  it('sets the language, title, description, canonical URL and share info', () => {
    expect(html).toContain('<html lang="ja">')
    expect(html).toContain(`<title>${page.title}</title>`)
    expect(html).toContain(`<meta name="description" content="${page.description}" />`)
    expect(html).toContain('<link rel="canonical" href="https://www.cubixai.com/ja/products/agentstation" />')
    expect(html).toContain('<meta property="og:url" content="https://www.cubixai.com/ja/products/agentstation" />')
    expect(html).toContain('<meta property="og:locale" content="ja_JP" />')
    // 其他内容（脚本入口、图标等）原样保留
    expect(html).toContain('<div id="app"></div>')
    expect(html).toContain('/src/main.ts')
  })

  it('lists every language version of the page for search engines', () => {
    const alternates = [...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)" \/>/g)].map((m) => [m[1], m[2]])
    expect(alternates).toEqual([
      ['zh-CN', 'https://www.cubixai.com/products/agentstation'],
      ['en', 'https://www.cubixai.com/en/products/agentstation'],
      ['ja', 'https://www.cubixai.com/ja/products/agentstation'],
      ['ko', 'https://www.cubixai.com/ko/products/agentstation'],
      ['x-default', 'https://www.cubixai.com/products/agentstation'],
    ])
  })

  it('escapes text so titles cannot break the page', () => {
    const out = renderPage(indexHtml, { ...page, title: 'A & B <x>', description: 'say "hi"' })
    expect(out).toContain('<title>A &amp; B &lt;x&gt;</title>')
    expect(out).toContain('content="say &quot;hi&quot;"')
  })

  it('fails loudly if index.html no longer has the tags it fills in', () => {
    expect(() => renderPage(indexHtml.replace(/<title>[^<]*<\/title>/, ''), page)).toThrow(/title/)
  })
})
