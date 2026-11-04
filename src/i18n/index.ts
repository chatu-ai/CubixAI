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

export function getInitialLocale(): SupportedLocale {
  // 1. Check localStorage
  const stored = localStorage.getItem('locale')
  if (stored && ['zh-CN', 'en', 'ja', 'ko'].includes(stored)) {
    return stored as SupportedLocale
  }
  // 2. Check browser language
  const navLang = navigator.language
  if (navLang.startsWith('zh')) return 'zh-CN'
  if (navLang.startsWith('ja')) return 'ja'
  if (navLang.startsWith('ko')) return 'ko'
  if (navLang.startsWith('en')) return 'en'
  // 3. Default to Chinese
  return 'zh-CN'
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
