import { afterEach, beforeEach, expect, it, vi } from 'vitest'

beforeEach(() => {
  vi.resetModules()
  localStorage.clear()
})

afterEach(() => {
  vi.restoreAllMocks()
  vi.doUnmock('./locales/ko')
})

it('initially includes only Chinese and loads other languages on demand', async () => {
  const { default: i18n, setLocale } = await import('./index')
  expect(i18n.global.availableLocales).toEqual(['zh-CN'])
  await setLocale('en')
  expect(i18n.global.availableLocales).toEqual(['en', 'zh-CN'])
  expect(i18n.global.t('common.learnMore')).toBe('Learn More')
  const english = i18n.global.getLocaleMessage('en')
  await setLocale('ja')
  expect(i18n.global.t('common.close')).toBe('閉じる')
  await setLocale('en')
  expect(i18n.global.getLocaleMessage('en')).toBe(english)
  await setLocale('ko')
  expect(i18n.global.t('common.close')).toBe('닫기')
})

it('keeps the existing locale when a language chunk fails', async () => {
  vi.doMock('./locales/ko', () => { throw new Error('Language chunk unavailable') })
  const { default: i18n, setLocale } = await import('./index')
  await expect(setLocale('ko')).rejects.toThrow()
  expect(i18n.global.locale.value).toBe('zh-CN')
  expect(i18n.global.availableLocales).toEqual(['zh-CN'])
})

it('preserves saved preferences and browser-language detection', async () => {
  const { getInitialLocale } = await import('./index')
  vi.spyOn(navigator, 'language', 'get').mockReturnValue('ja-JP')
  expect(getInitialLocale()).toBe('ja')
  localStorage.setItem('locale', 'en')
  expect(getInitialLocale()).toBe('en')
  localStorage.setItem('locale', 'invalid')
  expect(getInitialLocale()).toBe('ja')
})
