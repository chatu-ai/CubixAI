<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute, useRouter, isNavigationFailure, NavigationFailureType } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'
import i18n, { localeMap, localeLabels } from '../i18n'
import { localizePath, stripLocale } from '../i18n/paths'
import { useLocalePath } from '../composables/useLocalePath'
import logoZh from '@/assets/logo.webp'
import logoEn from '@/assets/logo-en.webp'

const { t, locale } = useI18n()
const route = useRoute()
const router = useRouter()
const lp = useLocalePath()
/** 去掉语言前缀后的当前页面路径（/en/cases → /cases），用来判断导航高亮 */
const basePath = computed(() => stripLocale(route.path))

// 中文用「软积木」logo，其他语言用英文 CubixAI logo，随当前语言自动切换
const isChinese = computed(() => locale.value === 'zh-CN')
const logoSrc = computed(() => (isChinese.value ? logoZh : logoEn))
const logoAlt = computed(() => (isChinese.value ? '软积木' : 'CubixAI'))

const showProductMenu = ref(false)
const showLangMenu = ref(false)
const mobileOpen = ref(false)
const productMenuRef = ref<HTMLElement | null>(null)
const langMenuRef = ref<HTMLElement | null>(null)

// 控制左侧全局 i18n 语言切换按钮显示/隐藏
const SHOW_GLOBAL_LANG_SWITCHER = true
const languageLoading = ref(false)
const languageError = ref('')

const currentLangLabel = computed(() => {
  const key = i18n.global.locale.value
  return (localeLabels as Record<string, string>)[key] || '中文'
})

const langList: string[] = ['中文', 'English', '한국어', '日本語']

async function selectLang(lang: string) {
  const newLocale = localeMap[lang]
  if (!newLocale || languageLoading.value) return
  languageError.value = ''
  languageLoading.value = true
  try {
    // 换到同一页面的另一语言网址（/cases → /en/cases）；语言包在路由守卫里加载
    try {
      localStorage.setItem('locale', newLocale)
    } catch {
      // 浏览器禁用存储时只是记不住选择，不影响切换
    }
    const failure = await router.push(localizePath(route.fullPath, newLocale))
    if (failure && !isNavigationFailure(failure, NavigationFailureType.duplicated)) throw failure
    showLangMenu.value = false
    mobileOpen.value = false
  } catch (error) {
    console.error('[i18n] Failed to switch language', error)
    languageError.value = t('common.languageLoadError')
  } finally {
    languageLoading.value = false
  }
}

// path 是不带语言前缀的页面路径，渲染链接时用 lp() 加上当前语言前缀
const navItems = computed(() => [
  { label: t('header.solutions'), path: '/solutions' },
  { label: t('header.cases'), path: '/cases' },
])

const moreNavItems = computed(() => [
  { label: t('header.ecosystem'), path: '/ecosystem' },
  { label: t('header.aiInsight'), path: '/ai-insight' },
  { label: t('header.aboutUs'), path: '/contact' },
  { label: t('header.paidInsights'), path: '/paid-insights' },
])

const mobileProductItems = computed(() => [
  { label: 'ChatU', path: '/products/chatu' },
  { label: t('header.agentName'), path: '/products/agentstation' },
  { label: 'OPC Hub', path: '/opc-hub' },
  { label: t('header.trainingName'), path: '/training' },
])

function isActive(path: string): boolean {
  const current = basePath.value
  if (path === '/') {
    return current === '/'
  }
  if (path === '/paid-insights' && current.startsWith('/paid-insight/')) {
    return true
  }
  return current === path || current.startsWith(path + '/')
}

function isProductActive(): boolean {
  return ['/products/chatu', '/products/agentstation', '/opc-hub', '/training'].includes(basePath.value)
}

// 悬停菜单：延迟关闭，避免鼠标从按钮移向面板途中触发 mouseleave 导致菜单消失
const HOVER_CLOSE_DELAY = 150
let langMenuCloseTimer: ReturnType<typeof setTimeout> | null = null

function openLangMenu() {
  if (langMenuCloseTimer) clearTimeout(langMenuCloseTimer)
  langMenuCloseTimer = null
  showLangMenu.value = true
}

function scheduleCloseLangMenu() {
  if (langMenuCloseTimer) clearTimeout(langMenuCloseTimer)
  langMenuCloseTimer = setTimeout(() => {
    showLangMenu.value = false
    langMenuCloseTimer = null
  }, HOVER_CLOSE_DELAY)
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
}

// 页面滚动后页头背景更实、加一层淡阴影，和内容区分开
const scrolled = ref(false)
function onScroll() {
  scrolled.value = window.scrollY > 8
}

onMounted(() => {
  document.addEventListener('click', onDocumentClick)
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  document.removeEventListener('click', onDocumentClick)
  window.removeEventListener('scroll', onScroll)
  if (langMenuCloseTimer) clearTimeout(langMenuCloseTimer)
})
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-[background-color,box-shadow,border-color] duration-300"
    :class="scrolled
      ? 'bg-surface-card/90 border-line shadow-[0_1px_12px_rgba(15,31,23,0.06)]'
      : 'bg-surface-base/80 border-line/50'"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- 左中右三栏：左右两栏等宽伸缩，保证导航在任何页面都居中 -->
      <div class="flex items-center justify-between h-14 md:h-16">
        <!-- Logo -->
        <div class="flex-1 basis-0 min-w-0 flex items-center">
          <RouterLink :to="lp('/')" class="flex items-center gap-2.5">
            <img
              :src="logoSrc"
              :alt="logoAlt"
              class="h-9 md:h-11 w-auto object-contain"
            />
          </RouterLink>
        </div>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex shrink-0 items-center justify-center gap-0.5">
          <RouterLink
            :to="lp('/')"
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
                :to="lp('/products/chatu')"
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
                :to="lp('/products/agentstation')"
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
                :to="lp('/opc-hub')"
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
                :to="lp('/training')"
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
            :key="item.path"
            :to="lp(item.path)"
            class="px-3 py-2 text-sm font-medium transition-colors rounded-lg"
            :class="isActive(item.path) ? 'bg-brand-soft text-brand' : 'text-ink-secondary hover:text-ink-primary hover:bg-surface-muted'"
          >
            {{ item.label }}
          </RouterLink>

          <RouterLink
            v-for="item in moreNavItems"
            :key="item.path"
            :to="lp(item.path)"
            class="px-3 py-2 text-sm font-medium transition-colors rounded-lg"
            :class="isActive(item.path) ? 'bg-brand-soft text-brand' : 'text-ink-secondary hover:text-ink-primary hover:bg-surface-muted'"
          >
            {{ item.label }}
          </RouterLink>
        </nav>

        <!-- Right controls -->
        <div class="flex-1 basis-0 min-w-0 flex items-center justify-end gap-1">
        <!-- Language Switcher -->
        <div
          v-if="SHOW_GLOBAL_LANG_SWITCHER"
          ref="langMenuRef"
          data-lang-switcher="global"
          class="hidden md:block relative"
          @mouseenter="openLangMenu"
          @mouseleave="scheduleCloseLangMenu"
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
          <!-- pt-1 作为按钮与面板之间的悬停桥接区，避免出现空隙 -->
          <div v-show="showLangMenu" class="absolute top-full right-0 pt-1 w-36">
            <div class="bg-surface-card rounded-2xl shadow-card border border-line/50 p-1.5">
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
        :to="lp('/')"
        class="block px-3 py-2 text-sm font-medium rounded-lg"
        :class="isActive('/') ? 'bg-brand-soft text-brand' : 'text-ink-secondary hover:text-ink-primary hover:bg-surface-muted'"
        @click="mobileOpen = false"
      >
        {{ t('header.home') }}
      </RouterLink>
      <div class="border-t border-line/50 my-2" />
      <div class="px-3 py-2 text-xs font-semibold text-ink-tertiary uppercase tracking-wide">
        {{ t('header.products') }}
      </div>
      <RouterLink
        v-for="item in mobileProductItems"
        :key="item.path"
        :to="lp(item.path)"
        class="block px-3 py-2 text-sm font-medium rounded-lg"
        :class="isActive(item.path) ? 'bg-brand-soft text-brand' : 'text-ink-secondary hover:text-ink-primary hover:bg-surface-muted'"
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
        :key="item.path"
        :to="lp(item.path)"
        class="block px-3 py-2 text-sm font-medium rounded-lg"
        :class="isActive(item.path) ? 'bg-brand-soft text-brand' : 'text-ink-secondary hover:text-ink-primary hover:bg-surface-muted'"
        @click="mobileOpen = false"
      >
        {{ item.label }}
      </RouterLink>
      <template v-if="SHOW_GLOBAL_LANG_SWITCHER">
        <div class="border-t border-line/50 my-2" />
        <div class="px-3 py-2 text-xs font-semibold text-ink-tertiary uppercase tracking-wide">
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
    </div>
    <p v-if="languageError" role="alert" class="px-4 py-2 text-sm text-red-700">
      {{ languageError }}
    </p>
  </header>
</template>
