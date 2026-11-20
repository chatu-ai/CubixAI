import { afterEach, describe, expect, it } from 'vitest'
import { isBot, localeFromPath, localizePath, stripLocale } from './paths'

describe('locale paths', () => {
  it('reads the language from the URL prefix; no prefix is Chinese', () => {
    expect(localeFromPath('/')).toBe('zh-CN')
    expect(localeFromPath('/products/chatu')).toBe('zh-CN')
    expect(localeFromPath('/en')).toBe('en')
    expect(localeFromPath('/en/')).toBe('en')
    expect(localeFromPath('/ja/cases')).toBe('ja')
    expect(localeFromPath('/ko/paid-insight/abc')).toBe('ko')
    // 只认整段前缀，/english、/jp/contact 之类不算
    expect(localeFromPath('/english')).toBe('zh-CN')
    expect(localeFromPath('/jp/contact')).toBe('zh-CN')
  })

  it('strips and adds prefixes, keeping query and hash', () => {
    expect(stripLocale('/en')).toBe('/')
    expect(stripLocale('/en/products/chatu')).toBe('/products/chatu')
    expect(stripLocale('/cases')).toBe('/cases')
    expect(localizePath('/', 'en')).toBe('/en')
    expect(localizePath('/products/chatu', 'ja')).toBe('/ja/products/chatu')
    expect(localizePath('/en/cases', 'zh-CN')).toBe('/cases')
    expect(localizePath('/en', 'zh-CN')).toBe('/')
    expect(localizePath('/ja/solutions?tab=solo#top', 'ko')).toBe('/ko/solutions?tab=solo#top')
    expect(localizePath('/?q=1', 'en')).toBe('/en?q=1')
  })

  it('recognises crawlers so they are not redirected by browser language', () => {
    expect(isBot('Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)')).toBe(true)
    expect(isBot('Mozilla/5.0 (compatible; Baiduspider/2.0; +http://www.baidu.com/search/spider.html)')).toBe(true)
    expect(isBot('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36')).toBe(false)
  })
})

describe('localized routes', () => {
  afterEach(async () => {
    const { setLocale } = await import('./index')
    await setLocale('zh-CN')
  })

  it('every Chinese page also exists under /en, /ja and /ko', async () => {
    const { default: router } = await import('../router')
    const paths = new Set(router.getRoutes().map((r) => r.path))
    const chinese = [...paths].filter((p) => localeFromPath(p) === 'zh-CN' && !['/jp/contact', '/hg/contact'].includes(p))
    const missing = chinese.flatMap((p) => (['en', 'ja', 'ko'] as const).map((l) => localizePath(p, l))).filter((p) => !paths.has(p))
    expect(missing).toEqual([])
  })

  it('switches the page language from the URL and links stay in that language', async () => {
    const { default: router } = await import('../router')
    const { default: i18n } = await import('./index')
    const { localePath } = await import('../composables/useLocalePath')
    await router.push('/en/cases')
    expect(i18n.global.locale.value).toBe('en')
    expect(localePath('/contact')).toBe('/en/contact')
    await router.push('/ko/contact')
    expect(i18n.global.locale.value).toBe('ko')
    expect(router.currentRoute.value.name).toBe('ContactHg')
    await router.push('/products/chatu')
    expect(i18n.global.locale.value).toBe('zh-CN')
    expect(localePath('/contact')).toBe('/contact')
  })

  it('sends the old single-language contact addresses to the new ones', async () => {
    const { default: router } = await import('../router')
    await router.push('/jp/contact')
    expect(router.currentRoute.value.path).toBe('/ja/contact')
    await router.push('/hg/contact')
    expect(router.currentRoute.value.path).toBe('/ko/contact')
  })

  it('points search engines at every language version of the page', async () => {
    const { default: router } = await import('../router')
    await router.push('/ja/products/agentstation')
    const alternates = [...document.head.querySelectorAll('link[rel="alternate"][hreflang]')].map((el) => [
      el.getAttribute('hreflang'),
      el.getAttribute('href'),
    ])
    expect(alternates).toEqual([
      ['zh-CN', 'https://www.cubixai.com/products/agentstation'],
      ['en', 'https://www.cubixai.com/en/products/agentstation'],
      ['ja', 'https://www.cubixai.com/ja/products/agentstation'],
      ['ko', 'https://www.cubixai.com/ko/products/agentstation'],
      ['x-default', 'https://www.cubixai.com/products/agentstation'],
    ])
    expect(document.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe('https://www.cubixai.com/ja/products/agentstation')
    expect(document.title).toBe('AgentStation AIワークステーション | CubixAI')
  })
})
