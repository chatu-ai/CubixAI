import { ref } from 'vue'
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

/** 访客当前的 Cookie 选择：Cookie 弹窗和隐私政策页的 Cookie 设置共用这一份状态 */
export const consentStatus = ref<ConsentStatus | null>(readConsent())

export function setConsent(status: ConsentStatus) {
  consentStatus.value = status
  saveConsent(status)
  if (status === 'rejected') clearAnalyticsCookies()
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
let analyticsEnabled = false

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

/** 按当前语言和访客选择开启或停止统计；语言切换或选择改变时调用 */
export function syncAnalytics(locale: SupportedLocale) {
  analyticsEnabled = shouldLoadAnalytics(locale, consentStatus.value)
  if (analyticsEnabled) loadBaiduAnalytics()
}

/** 单页应用切换路由时上报页面浏览；统计未开启（包括访客撤回同意后）不上报 */
export function trackPageview(path: string) {
  if (!analyticsEnabled) return
  const w = window as unknown as { _hmt?: unknown[] }
  w._hmt?.push(['_trackPageview', path])
}

/**
 * 撤回同意时删除本站域名下的百度统计 Cookie（Hm_ 开头）。
 * 百度设在自己域名（hm.baidu.com）下的 Cookie 网页无法删除，需要访客在浏览器里清除。
 */
export function clearAnalyticsCookies() {
  const names = document.cookie
    .split(';')
    .map((c) => c.split('=')[0].trim())
    .filter((name) => name.startsWith('Hm_'))
  const host = location.hostname
  const labels = host.split('.')
  const domains = ['', host, `.${host}`]
  if (labels.length > 2) domains.push(`.${labels.slice(-2).join('.')}`)
  for (const name of names) {
    for (const domain of domains) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain ? `; domain=${domain}` : ''}`
    }
  }
}
