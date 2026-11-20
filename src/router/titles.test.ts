import { expect, it } from 'vitest'

it('localizes page titles for overseas visitors and keeps Chinese for zh-CN', async () => {
  const { resolveTitle } = await import('./index')
  const meta = { title: '行业解决方案 | 软积木 CubixAI', titles: { en: 'Industry Solutions | CubixAI', ja: '業界別ソリューション | CubixAI', ko: '산업별 솔루션 | CubixAI' } }
  expect(resolveTitle(meta, 'zh-CN')).toBe('行业解决方案 | 软积木 CubixAI')
  expect(resolveTitle(meta, 'en')).toBe('Industry Solutions | CubixAI')
  expect(resolveTitle(meta, 'ja')).toBe('業界別ソリューション | CubixAI')
  expect(resolveTitle(meta, 'ko')).toBe('산업별 솔루션 | CubixAI')
})

it('keeps the fixed title of single-language pages such as /en/contact', async () => {
  const { resolveTitle } = await import('./index')
  expect(resolveTitle({ title: 'Contact Us | CubixAI' }, 'zh-CN')).toBe('Contact Us | CubixAI')
  expect(resolveTitle({ title: 'お問い合わせ | CubixAI' }, 'en')).toBe('お問い合わせ | CubixAI')
})

it('every page with a Chinese title also has English, Japanese and Korean titles', async () => {
  const { default: router } = await import('./index')
  const fixedLanguagePages = ['/en/contact', '/ja/contact', '/ko/contact']
  const missing = router
    .getRoutes()
    .filter((r) => r.meta.title && !fixedLanguagePages.includes(r.path))
    .filter((r) => !r.meta.titles?.en || !r.meta.titles?.ja || !r.meta.titles?.ko)
    .map((r) => r.path)
  expect(missing).toEqual([])
})
