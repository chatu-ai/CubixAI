import { computed, type ComputedRef } from 'vue'
import { useI18n } from 'vue-i18n'

/** 页面正文的两个语言版本：zh 为中文原文，en 为英文译文 */
export interface LocalizedContent<T> {
  zh: T
  en: T
}

/**
 * 按当前语言取页面正文：中文访客看 zh，其他语言（英文、日文、韩文）看 en。
 * 在模板里直接用 `c.xxx`（顶层 computed 会自动解包）。
 */
export function useContent<T>(content: LocalizedContent<T>): ComputedRef<T> {
  const { locale } = useI18n()
  return computed(() => (locale.value === 'zh-CN' ? content.zh : content.en))
}
