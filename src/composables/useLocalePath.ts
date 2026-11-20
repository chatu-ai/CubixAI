import i18n, { type SupportedLocale } from '../i18n'
import { localizePath } from '../i18n/paths'

/**
 * 站内链接带上当前语言的前缀：在英文页面上 lp('/contact') 得到 '/en/contact'，中文页面上不变。
 * 页面语言由网址决定，切换语言时整页按新网址重新渲染，所以这里直接读当前语言即可。
 */
export function localePath(path: string): string {
  return localizePath(path, i18n.global.locale.value as SupportedLocale)
}

export function useLocalePath() {
  return localePath
}
