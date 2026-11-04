<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'
import i18n, { localeMap, localeLabels, setLocale } from '../i18n'

const { t } = useI18n()
const route = useRoute()
const router = useRouter()

const showProductMenu = ref(false)
const showLangMenu = ref(false)
const showContactLangMenu = ref(false)
const mobileOpen = ref(false)
const productMenuRef = ref<HTMLElement | null>(null)
const langMenuRef = ref<HTMLElement | null>(null)
const contactLangMenuRef = ref<HTMLElement | null>(null)

const SHOW_CONTACT_LANG_SWITCHER = true

// 控制左侧全局 i18n 语言切换按钮显示/隐藏
const SHOW_GLOBAL_LANG_SWITCHER = true
const languageLoading = ref(false)
const languageError = ref('')

const contactLangRoutes: Record<string, string> = {
  'zh-CN': '/contact',
  'en': '/en/contact',
  'ko': '/hg/contact',
  'ja': '/jp/contact',
}

const contactPaths = ['/contact', '/en/contact', '/hg/contact', '/jp/contact']
const isContactPage = computed(() => contactPaths.includes(route.path))

const currentLangLabel = computed(() => {
  const key = i18n.global.locale.value
  return (localeLabels as Record<string, string>)[key] || '中文'
})

const currentContactLangLabel = computed(() => {
  if (route.path === '/en/contact') return 'English'
  if (route.path === '/hg/contact') return '한국어'
  if (route.path === '/jp/contact') return '日本語'
  return '中文'
})

const langList: string[] = ['中文', 'English', '한국어', '日本語']

async function selectLang(lang: string) {
  const newLocale = localeMap[lang]
  if (!newLocale || languageLoading.value) return
  languageError.value = ''
  languageLoading.value = true
  try {
    await setLocale(newLocale)
    localStorage.setItem('locale', newLocale)
    showLangMenu.value = false
    mobileOpen.value = false
  } catch (error) {
    console.error('[i18n] Failed to switch language', error)
    languageError.value = t('common.languageLoadError')
  } finally {
    languageLoading.value = false
  }
}

function selectContactLang(lang: string) {
  const newLocale = localeMap[lang]
  if (!newLocale) return

  if (isContactPage.value) {
    router.replace(contactLangRoutes[newLocale])
  }

  showContactLangMenu.value = false
  mobileOpen.value = false
}

const navItems = computed(() => [
  { label: t('header.solutions'), to: '/solutions' },
  { label: t('header.cases'), to: '/cases' },
])

const moreNavItems = computed(() => [
  { label: t('header.ecosystem'), to: '/ecosystem' },
  { label: t('header.aiInsight'), to: '/ai-insight' },
  { label: t('header.aboutUs'), to: '/contact' },
  { label: t('header.paidInsights'), to: '/paid-insights' },
])

const mobileProductItems = computed(() => [
  { label: 'ChatU', to: '/products/chatu' },
  { label: t('header.agentName'), to: '/products/agentstation' },
  { label: 'OPC Hub', to: '/opc-hub' },
  { label: t('header.trainingName'), to: '/training' },
])

function isActive(path: string): boolean {
  if (path === '/') {
    return route.path === '/'
  }
  if (path === '/paid-insights' && route.path.startsWith('/paid-insight/')) {
    return true
  }
  return route.path === path || route.path.startsWith(path + '/')
}

function isProductActive(): boolean {
  return ['/products/chatu', '/products/agentstation', '/opc-hub', '/training'].includes(route.path)
}

function toggleProductMenu() {
  showProductMenu.value = !showProductMenu.value
}

function closeProductMenu() {
  showProductMenu.value = false
}

function onDocumentClick(event: MouseEvent) {
  if (productMenuRef.value && !productMenuRef.value.contains(event.target as Node)) {
    showProductMenu.value = false
  }
  if (langMenuRef.value && !langMenuRef.value.contains(event.target as Node)) {
    showLangMenu.value = false
  }
  if (contactLangMenuRef.value && !contactLangMenuRef.value.contains(event.target as Node)) {
    showContactLangMenu.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', onDocumentClick)
})

onUnmounted(() => {
  document.removeEventListener('click', onDocumentClick)
})
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-surface-base/80 backdrop-blur-xl border-b border-line/50"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- 左中右三栏：左右两栏等宽伸缩，保证导航在任何页面都居中 -->
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo -->
        <div class="flex-1 basis-0 min-w-0 flex items-center">
          <RouterLink to="/" class="flex items-center gap-2.5">
            <img
              src="@/assets/logo.webp"
              alt="软积木"
              class="h-[84px] w-[84px] md:h-[108px] md:w-[108px] rounded-2xl object-contain"
            />
          </RouterLink>
        </div>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex shrink-0 items-center justify-center gap-0.5">
          <RouterLink
            to="/"
            class="px-3 py-2 text-sm font-medium transition-colors rounded-lg"
            :class="isActive('/') ? 'bg-brand-soft text-brand' : 'text-ink-secondary hover:text-ink-primary hover:bg-surface-muted'"
          >
            {{ t('header.home') }}
          </RouterLink>

          <!-- Products dropdown -->
          <div ref="productMenuRef" class="relative">
            <button
              class="flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-lg"
              :class="isProductActive() ? 'bg-brand-soft text-brand' : 'text-ink-secondary hover:text-ink-primary hover:bg-surface-muted'"
              @click.stop="toggleProductMenu"
            >
              {{ t('header.products') }}
              <Icon
                icon="lucide:chevron-down"
                class="w-4 h-4 transition-transform"
                :class="showProductMenu && 'rotate-180'"
              />
            </button>
            <div
              v-show="showProductMenu"
              class="absolute top-full left-0 mt-1 w-80 bg-surface-card rounded-2xl shadow-card border border-line/50 p-2"
            >
              <RouterLink
                to="/products/chatu"
                class="flex items-start gap-3 p-3 rounded-xl hover:bg-surface-muted transition-colors"
                @click="closeProductMenu"
              >
                <div
                  class="w-10 h-10 rounded-lg bg-brand-soft flex items-center justify-center shrink-0"
                >
                  <Icon icon="lucide:message-square" class="w-5 h-5 text-brand" />
                </div>
                <div>
                  <div class="font-semibold text-ink-primary">{{ t('header.chatuName') }}</div>
                  <div class="text-sm text-ink-secondary mt-0.5">
                    {{ t('header.chatuDesc') }}
                  </div>
                </div>
              </RouterLink>
              <RouterLink
                to="/products/agentstation"
                class="flex items-start gap-3 p-3 rounded-xl hover:bg-surface-muted transition-colors mt-1"
                @click="closeProductMenu"
              >
                <div
                  class="w-10 h-10 rounded-lg bg-brand-soft flex items-center justify-center shrink-0"
                >
                  <Icon icon="lucide:cpu" class="w-5 h-5 text-brand" />
                </div>
                <div>
                  <div class="font-semibold text-ink-primary">{{ t('header.agentName') }}</div>
                  <div class="text-sm text-ink-secondary mt-0.5">
                    {{ t('header.agentDesc') }}
                  </div>
                </div>
              </RouterLink>
              <RouterLink
                to="/opc-hub"
                class="flex items-start gap-3 p-3 rounded-xl hover:bg-surface-muted transition-colors mt-1"
                @click="closeProductMenu"
              >
                <div
                  class="w-10 h-10 rounded-lg bg-brand-soft flex items-center justify-center shrink-0"
                >
                  <Icon icon="lucide:building-2" class="w-5 h-5 text-brand" />
                </div>
                <div>
                  <div class="font-semibold text-ink-primary">{{ t('header.opcHubName') }}</div>
                  <div class="text-sm text-ink-secondary mt-0.5">
                    {{ t('header.opcHubDesc') }}
                  </div>
                </div>
              </RouterLink>
              <RouterLink
                to="/training"
                class="flex items-start gap-3 p-3 rounded-xl hover:bg-surface-muted transition-colors mt-1"
                @click="closeProductMenu"
              >
                <div
                  class="w-10 h-10 rounded-lg bg-brand-soft flex items-center justify-center shrink-0"
                >
                  <Icon icon="lucide:book-open" class="w-5 h-5 text-brand" />
                </div>
                <div>
                  <div class="font-semibold text-ink-primary">{{ t('header.trainingName') }}</div>
                  <div class="text-sm text-ink-secondary mt-0.5">
                    {{ t('header.trainingDesc') }}
                  </div>
                </div>
              </RouterLink>
            </div>
          </div>

          <RouterLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="px-3 py-2 text-sm font-medium transition-colors rounded-lg"
            :class="isActive(item.to) ? 'bg-brand-soft text-brand' : 'text-ink-secondary hover:text-ink-primary hover:bg-surface-muted'"
          >
            {{ item.label }}
          </RouterLink>

          <RouterLink
            v-for="item in moreNavItems"
            :key="item.to"
            :to="item.to"
            class="px-3 py-2 text-sm font-medium transition-colors rounded-lg"
            :class="isActive(item.to) ? 'bg-brand-soft text-brand' : 'text-ink-secondary hover:text-ink-primary hover:bg-surface-muted'"
          >
            {{ item.label }}
          </RouterLink>
        </nav>

        <!-- Right controls -->
        <div class="flex-1 basis-0 min-w-0 flex items-center justify-end gap-1">
        <!-- Language Switcher -->
        <div
          v-if="SHOW_GLOBAL_LANG_SWITCHER && !isContactPage"
          ref="langMenuRef"
          data-lang-switcher="global"
          class="hidden md:block relative"
          @mouseenter="showLangMenu = true"
          @mouseleave="showLangMenu = false"
        >
          <button
            class="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-ink-secondary hover:text-ink-primary transition-colors rounded-lg hover:bg-surface-muted"
            @click.stop="showLangMenu = !showLangMenu"
          >
            <Icon icon="lucide:globe" class="w-4 h-4" />
            <span>{{ currentLangLabel }}</span>
            <Icon
              icon="lucide:chevron-down"
              class="w-3.5 h-3.5 transition-transform"
              :class="showLangMenu && 'rotate-180'"
            />
          </button>
          <div
            v-show="showLangMenu"
            class="absolute top-full right-0 mt-1 w-36 bg-surface-card rounded-2xl shadow-card border border-line/50 p-1.5"
          >
            <button
              v-for="l in langList"
              :key="l"
              :disabled="languageLoading"
              class="w-full flex items-center gap-2 px-3 py-2 text-sm rounded-xl transition-colors"
              :class="currentLangLabel === l ? 'bg-brand-soft text-brand font-medium' : 'text-ink-secondary hover:bg-surface-muted'"
              @click="selectLang(l)"
            >
              <span class="w-2 h-2 rounded-full" :class="currentLangLabel === l ? 'bg-brand' : 'bg-line'"></span>
              {{ l }}
            </button>
          </div>
        </div>

        <!-- Contact Language Switcher -->
        <div
          v-if="SHOW_CONTACT_LANG_SWITCHER && isContactPage"
          ref="contactLangMenuRef"
          data-lang-switcher="contact"
          class="hidden md:block relative"
          @mouseenter="showContactLangMenu = true"
          @mouseleave="showContactLangMenu = false"
        >
          <button
            class="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-ink-secondary hover:text-ink-primary transition-colors rounded-lg hover:bg-surface-muted"
            @click.stop="showContactLangMenu = !showContactLangMenu"
          >
            <Icon icon="lucide:globe" class="w-4 h-4" />
            <span>{{ currentContactLangLabel }}</span>
            <Icon
              icon="lucide:chevron-down"
              class="w-3.5 h-3.5 transition-transform"
              :class="showContactLangMenu && 'rotate-180'"
            />
          </button>
          <div
            v-show="showContactLangMenu"
            class="absolute top-full right-0 mt-1 w-36 bg-surface-card rounded-2xl shadow-card border border-line/50 p-1.5"
          >
            <button
              v-for="l in langList"
              :key="l"
              class="w-full flex items-center gap-2 px-3 py-2 text-sm rounded-xl transition-colors"
              :class="currentContactLangLabel === l ? 'bg-brand-soft text-brand font-medium' : 'text-ink-secondary hover:bg-surface-muted'"
              @click="selectContactLang(l)"
            >
              <span class="w-2 h-2 rounded-full" :class="currentContactLangLabel === l ? 'bg-brand' : 'bg-line'"></span>
              {{ l }}
            </button>
          </div>
        </div>

        <!-- Mobile toggle -->
        <button class="md:hidden p-2 -mr-2" @click="mobileOpen = !mobileOpen">
          <Icon
            :icon="mobileOpen ? 'lucide:x' : 'lucide:menu'"
            class="w-6 h-6 text-ink-primary"
          />
        </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-show="mobileOpen"
      class="md:hidden bg-surface-card border-t border-line/50 px-4 py-4 space-y-1"
    >
      <RouterLink
        to="/"
        class="block px-3 py-2 text-sm font-medium rounded-lg"
        :class="isActive('/') ? 'bg-brand-soft text-brand' : 'text-ink-secondary hover:text-ink-primary hover:bg-surface-muted'"
        @click="mobileOpen = false"
      >
        {{ t('header.home') }}
      </RouterLink>
      <div class="border-t border-line/50 my-2" />
      <div class="px-3 py-2 text-xs font-semibold text-ink-tertiary uppercase tracking-wider">
        {{ t('header.products') }}
      </div>
      <RouterLink
        v-for="item in mobileProductItems"
        :key="item.to"
        :to="item.to"
        class="block px-3 py-2 text-sm font-medium rounded-lg"
        :class="isActive(item.to) ? 'bg-brand-soft text-brand' : 'text-ink-secondary hover:text-ink-primary hover:bg-surface-muted'"
        @click="mobileOpen = false"
      >
        {{ item.label }}
      </RouterLink>
      <div class="border-t border-line/50 my-2" />
      <RouterLink
        v-for="item in [
          ...navItems,
          ...moreNavItems,
        ]"
        :key="item.to"
        :to="item.to"
        class="block px-3 py-2 text-sm font-medium rounded-lg"
        :class="isActive(item.to) ? 'bg-brand-soft text-brand' : 'text-ink-secondary hover:text-ink-primary hover:bg-surface-muted'"
        @click="mobileOpen = false"
      >
        {{ item.label }}
      </RouterLink>
      <template v-if="SHOW_GLOBAL_LANG_SWITCHER && !isContactPage">
        <div class="border-t border-line/50 my-2" />
        <div class="px-3 py-2 text-xs font-semibold text-ink-tertiary uppercase tracking-wider">
          {{ t('header.language') }}
        </div>
        <div class="flex gap-2 px-3 py-2">
          <button
            v-for="l in langList"
            :key="l"
            class="px-3 py-1.5 text-sm rounded-lg border transition-colors"
            :class="currentLangLabel === l ? 'border-brand bg-brand-soft text-brand font-medium' : 'border-line text-ink-secondary hover:bg-surface-muted'"
            :disabled="languageLoading"
            @click="selectLang(l)"
          >
            {{ l }}
          </button>
        </div>
      </template>
      <template v-if="SHOW_CONTACT_LANG_SWITCHER && isContactPage">
        <div class="border-t border-line/50 my-2" />
        <div class="px-3 py-2 text-xs font-semibold text-ink-tertiary uppercase tracking-wider">
          Contact {{ t('header.language') }}
        </div>
        <div class="flex gap-2 px-3 py-2" data-lang-switcher="contact">
          <button
            v-for="l in langList"
            :key="l"
            class="px-3 py-1.5 text-sm rounded-lg border transition-colors"
            :class="currentContactLangLabel === l ? 'border-brand bg-brand-soft text-brand font-medium' : 'border-line text-ink-secondary hover:bg-surface-muted'"
            @click="selectContactLang(l)"
          >
            {{ l }}
          </button>
        </div>
      </template>
    </div>
    <p v-if="languageError" role="alert" class="px-4 py-2 text-sm text-red-700">
      {{ languageError }}
    </p>
  </header>
</template>
