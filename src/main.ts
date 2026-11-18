import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n, { getInitialLocale, setLocale } from './i18n'
// Inter 字体随网站一起打包、从自己的服务器加载，不再请求 Google Fonts（访客 IP 不会发给 Google）
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import './assets/main.css'
import './icons'

async function bootstrap() {
  await setLocale(getInitialLocale())
  const app = createApp(App)
  app.use(router)
  app.use(i18n)
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
