import { beforeEach, expect, it, vi } from 'vitest'

beforeEach(() => {
  vi.resetModules()
  localStorage.clear()
  vi.restoreAllMocks()
})

it('prompts only overseas visitors who have not chosen yet', async () => {
  const { needsConsentPrompt } = await import('./cookieConsent')
  expect(needsConsentPrompt('zh-CN', null)).toBe(false)
  expect(needsConsentPrompt('en', null)).toBe(true)
  expect(needsConsentPrompt('ja', null)).toBe(true)
  expect(needsConsentPrompt('ko', null)).toBe(true)
  expect(needsConsentPrompt('en', 'accepted')).toBe(false)
  expect(needsConsentPrompt('en', 'rejected')).toBe(false)
})

it('loads analytics for Chinese by default and for overseas only after acceptance', async () => {
  const { shouldLoadAnalytics } = await import('./cookieConsent')
  expect(shouldLoadAnalytics('zh-CN', null)).toBe(true)
  expect(shouldLoadAnalytics('en', null)).toBe(false)
  expect(shouldLoadAnalytics('en', 'accepted')).toBe(true)
  expect(shouldLoadAnalytics('en', 'rejected')).toBe(false)
  expect(shouldLoadAnalytics('zh-CN', 'rejected')).toBe(false)
})

it('persists the choice and ignores unknown stored values', async () => {
  const { readConsent, saveConsent } = await import('./cookieConsent')
  expect(readConsent()).toBeNull()
  saveConsent('rejected')
  expect(readConsent()).toBe('rejected')
  localStorage.setItem('cookie-consent', 'maybe')
  expect(readConsent()).toBeNull()
})

it('injects the analytics script only once', async () => {
  const { loadBaiduAnalytics } = await import('./cookieConsent')
  // Capture the script instead of attaching it, so the test environment never tries to fetch it
  const appended: Node[] = []
  vi.spyOn(document.head, 'appendChild').mockImplementation((node) => {
    appended.push(node)
    return node
  })
  loadBaiduAnalytics()
  loadBaiduAnalytics()
  const scripts = appended.filter((n) => (n as HTMLScriptElement).src?.includes('hm.baidu.com'))
  expect(scripts.length).toBe(1)
})
