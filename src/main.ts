import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n, { landingLocale, setLocale } from './i18n'
import { LEGACY_REDIRECTS } from './i18n/paths'
// Inter 字体随网站一起打包、从自己的服务器加载，不再请求 Google Fonts（访客 IP 不会发给 Google）
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import './assets/main.css'
import './icons'

async function bootstrap() {
  // 先加载进入时的语言包（旧地址 /jp/contact 等按跳转后的地址算），页头页脚一出来就是对应语言；
  // 不带前缀的网址需要换语言时，路由第一次导航会跳到 /en/… 等（见 router 的 beforeEach）
  const path = window.location.pathname
  await setLocale(landingLocale(LEGACY_REDIRECTS[path.replace(/\/$/, '')] ?? path))
  const app = createApp(App)
  app.use(router)
  app.use(i18n)
  await router.isReady()
  app.mount('#app')
}

bootstrap().catch((error: unknown) => {
  console.error('[i18n] Failed to initialize language', error)
  const root = document.getElementById('app')
  if (root) {
    root.setAttribute('role', 'alert')
    root.textContent = i18n.global.t('common.languageLoadError')
  }
})
