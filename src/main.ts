import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n, { getInitialLocale, setLocale } from './i18n'
import './assets/main.css'

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
