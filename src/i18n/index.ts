import { createI18n } from 'vue-i18n'
import zhCN from './locales/zh-CN'

export type SupportedLocale = 'zh-CN' | 'en' | 'ja' | 'ko'

export const localeMap: Record<string, SupportedLocale> = {
  '中文': 'zh-CN',
  'English': 'en',
  '日本語': 'ja',
  '한국어': 'ko',
}

export const localeLabels: Record<SupportedLocale, string> = {
  'zh-CN': '中文',
  'en': 'English',
  'ja': '日本語',
  'ko': '한국어',
}

function matchLocale(lang: string): SupportedLocale | null {
  const l = lang.toLowerCase()
  if (l.startsWith('zh')) return 'zh-CN'
  if (l.startsWith('ja')) return 'ja'
  if (l.startsWith('ko')) return 'ko'
  if (l.startsWith('en')) return 'en'
  return null
}

export function getInitialLocale(): SupportedLocale {
  // 1. Check localStorage
  const stored = localStorage.getItem('locale')
  if (stored && ['zh-CN', 'en', 'ja', 'ko'].includes(stored)) {
    return stored as SupportedLocale
  }
  // 2. Check browser languages in the visitor's order of preference
  const preferred = [navigator.language, ...(navigator.languages ?? [])].filter(Boolean)
  for (const lang of preferred) {
    const matched = matchLocale(lang)
    if (matched) return matched
  }
  // 3. Other languages (French, German, ...) fall back to English;
  //    no language information at all falls back to Chinese
  return preferred.length > 0 ? 'en' : 'zh-CN'
}

const initialMessages: Record<string, typeof zhCN> = { 'zh-CN': zhCN }

const i18n = createI18n({
  legacy: false,
  locale: 'zh-CN',
  fallbackLocale: 'zh-CN',
  messages: initialMessages,
})

const localeLoaders = {
  en: () => import('./locales/en'),
  ja: () => import('./locales/ja'),
  ko: () => import('./locales/ko'),
}

export async function setLocale(locale: SupportedLocale) {
  if (locale !== 'zh-CN' && !i18n.global.availableLocales.includes(locale)) {
    const messages = await localeLoaders[locale]()
    i18n.global.setLocaleMessage(locale, messages.default)
  }
  i18n.global.locale.value = locale
}

export default i18n
