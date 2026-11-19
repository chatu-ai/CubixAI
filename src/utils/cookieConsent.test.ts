import { beforeEach, expect, it, vi } from 'vitest'

let appended: Node[] = []

beforeEach(() => {
  vi.resetModules()
  vi.restoreAllMocks()
  localStorage.clear()
  delete (window as unknown as { _hmt?: unknown[] })._hmt
  // Capture the analytics script instead of attaching it, so the test environment never tries to fetch it
  appended = []
  vi.spyOn(document.head, 'appendChild').mockImplementation((node) => {
    appended.push(node)
    return node
  })
})

const baiduScripts = () => appended.filter((n) => (n as HTMLScriptElement).src?.includes('hm.baidu.com'))
const hmt = () => (window as unknown as { _hmt?: unknown[][] })._hmt

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

it('shares the choice through consentStatus and restores it on reload', async () => {
  const first = await import('./cookieConsent')
  expect(first.consentStatus.value).toBeNull()
  first.setConsent('accepted')
  expect(first.consentStatus.value).toBe('accepted')
  vi.resetModules()
  const reloaded = await import('./cookieConsent')
  expect(reloaded.consentStatus.value).toBe('accepted')
})

it('injects the analytics script only once', async () => {
  const { loadBaiduAnalytics } = await import('./cookieConsent')
  loadBaiduAnalytics()
  loadBaiduAnalytics()
  expect(baiduScripts().length).toBe(1)
})

it('tracks route changes only while analytics is allowed', async () => {
  const { setConsent, syncAnalytics, trackPageview } = await import('./cookieConsent')

  // Overseas visitor who has not chosen: nothing is loaded or tracked
  syncAnalytics('en')
  trackPageview('/a')
  expect(baiduScripts().length).toBe(0)
  expect(hmt()).toBeUndefined()

  // After accepting, the script loads and page views are reported
  setConsent('accepted')
  syncAnalytics('en')
  trackPageview('/b')
  expect(baiduScripts().length).toBe(1)
  expect(hmt()).toEqual([['_trackPageview', '/b']])

  // After withdrawing consent, page views stop even though the script already ran
  setConsent('rejected')
  syncAnalytics('en')
  trackPageview('/c')
  expect(hmt()).toEqual([['_trackPageview', '/b']])
})

it('removes Baidu cookies on this site when consent is withdrawn', async () => {
  const { setConsent } = await import('./cookieConsent')
  document.cookie = 'Hm_lvt_abc=1; path=/'
  document.cookie = 'Hm_lpvt_abc=2; path=/'
  document.cookie = 'other=keep; path=/'
  setConsent('rejected')
  expect(document.cookie).not.toContain('Hm_')
  expect(document.cookie).toContain('other=keep')
})
