import { computed, type ComputedRef } from 'vue'
import { useI18n } from 'vue-i18n'

/** 页面正文的四个语言版本：zh 为中文原文，en / ja / ko 为英文、日文、韩文译文 */
export interface LocalizedContent<T> {
  zh: T
  en: T
  ja: T
  ko: T
}

/** 网站语言代码 → 正文版本 */
export function contentKey(locale: string): keyof LocalizedContent<unknown> {
  if (locale === 'zh-CN') return 'zh'
  if (locale === 'ja' || locale === 'ko') return locale
  return 'en'
}

/**
 * 按当前语言取页面正文：中文访客看 zh，英文看 en，日文看 ja，韩文看 ko。
 * 在模板里直接用 `c.xxx`（顶层 computed 会自动解包）。
 */
export function useContent<T>(content: LocalizedContent<T>): ComputedRef<T> {
  const { locale } = useI18n()
  return computed(() => content[contentKey(locale.value)])
}
