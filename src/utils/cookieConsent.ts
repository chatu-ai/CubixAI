import type { SupportedLocale } from '@/i18n'

export type ConsentStatus = 'accepted' | 'rejected'

const STORAGE_KEY = 'cookie-consent'
const BAIDU_ANALYTICS_SRC = 'https://hm.baidu.com/hm.js?2ab65ac8a06a0fbecf8d3a225b29bcf2'

export function readConsent(): ConsentStatus | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value === 'accepted' || value === 'rejected' ? value : null
  } catch {
    return null
  }
}

export function saveConsent(status: ConsentStatus) {
  try {
    localStorage.setItem(STORAGE_KEY, status)
  } catch {
    // Storage unavailable (private mode etc.): the choice still applies for this visit
  }
}

/** 海外版本（非中文）需要访客确认后才弹出/加载；中文版保持原有行为 */
export function needsConsentPrompt(locale: SupportedLocale, consent: ConsentStatus | null) {
  return locale !== 'zh-CN' && consent === null
}

/** 中文版默认加载统计；海外版只有访客点了「接受」才加载；任何语言下拒绝过都不加载 */
export function shouldLoadAnalytics(locale: SupportedLocale, consent: ConsentStatus | null) {
  if (consent === 'accepted') return true
  if (consent === 'rejected') return false
  return locale === 'zh-CN'
}

let analyticsLoaded = false

/** 百度统计（会写入 Hm_lvt_* 等 Cookie），整个页面生命周期只加载一次 */
export function loadBaiduAnalytics() {
  if (analyticsLoaded) return
  analyticsLoaded = true
  const w = window as unknown as { _hmt?: unknown[] }
  w._hmt = w._hmt || []
  const script = document.createElement('script')
  script.src = BAIDU_ANALYTICS_SRC
  script.async = true
  document.head.appendChild(script)
}
