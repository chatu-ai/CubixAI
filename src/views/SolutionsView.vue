<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'
import { useRoute } from 'vue-router'
import { useScrollReveal } from '../composables/useScrollReveal'
import { useLocalizedSolutions } from '../content/solutions'
import EnterpriseModal from '../components/EnterpriseModal.vue'
import AppImage from '../components/AppImage.vue'

const { t, locale } = useI18n()
// 方案文字跟随语言：中文为原始数据（src/data/solutions.ts），其他语言为英文（src/content/solutions.ts）
const solutions = useLocalizedSolutions()
gsap.registerPlugin(ScrollTrigger)

const heroRef = ref<HTMLElement | null>(null)
useScrollReveal(heroRef, { y: 30 })

const categoryTabs = computed(() => [
  { id: 'all', label: t('solutions.tabs.all') },
  { id: 'tech', label: t('solutions.tabs.tech') },
  { id: 'creative', label: t('solutions.tabs.creative') },
  { id: 'service', label: t('solutions.tabs.service') },
  { id: 'industry', label: t('solutions.tabs.industry') },
  { id: 'gov', label: t('solutions.tabs.gov') },
  { id: 'solo', label: t('solutions.tabs.solo') },
])

const catMap: Record<string, string[]> = {
  all: ['telecom', 'itdev', 'media', 'design', 'edu', 'psych', 'fin_ins', 'enterprise-service', 'agri', 'health', 'ecommerce', 'park_opc', 'university'],
  tech: ['telecom', 'itdev'],
  creative: ['media', 'design'],
  service: ['edu', 'psych', 'fin_ins', 'enterprise-service', 'university'],
  industry: ['agri', 'health', 'ecommerce', 'park_opc'],
  gov: ['enterprise-service'],
  solo: ['park_opc'],
}

const route = useRoute()
const activeCategory = ref('all')
const showModal = ref(false)
const activeIndex = ref(0)
const containerRef = ref<HTMLElement | null>(null)
let triggers: ScrollTrigger[] = []

const filteredSolutions = computed(() => {
  return solutions.value.filter((s) => catMap[activeCategory.value]?.includes(s.id))
})

function scrollToSection(index: number) {
  const sections = containerRef.value?.querySelectorAll('.solution-screen')
  if (sections?.[index]) {
    sections[index].scrollIntoView({ behavior: 'smooth' })
  }
}

function initScrollTriggers() {
  triggers.forEach((st) => st.kill())
  triggers = []
  ScrollTrigger.getAll().forEach((st) => st.kill())

  const sections = containerRef.value?.querySelectorAll('.solution-screen')
  if (!sections) return

  sections.forEach((section, i) => {
    const textEl = section.querySelector('.anim-text')
    const imgEl = section.querySelector('.anim-img')

    // 清理旧动画、重置元素状态
    if (textEl) {
      gsap.killTweensOf(textEl)
      gsap.set(textEl, { clearProps: 'all' })
    }
    if (imgEl) {
      gsap.killTweensOf(imgEl)
      gsap.set(imgEl, { clearProps: 'all' })
    }

    // ScrollTrigger 仅用于更新 activeIndex
    const st = ScrollTrigger.create({
      trigger: section,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => { activeIndex.value = i },
      onEnterBack: () => { activeIndex.value = i },
    })
    triggers.push(st)

    // 直接播放入场动画，不依赖 scrollTrigger 触发时机，避免切换分类后元素不可见
    if (textEl) {
      gsap.from(textEl, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        delay: i * 0.12,
      })
    }

    if (imgEl) {
      const xFrom = i % 2 === 0 ? 80 : -80
      gsap.from(imgEl, {
        x: xFrom,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        delay: i * 0.12 + 0.05,
      })
    }
  })
}

function switchCategory(id: string) {
  activeCategory.value = id
  activeIndex.value = 0
  nextTick(() => {
    // 先瞬间滚动到第一个可见 section，避免平滑滚动期间 DOM/ScrollTrigger 位置计算错乱
    const firstSection = containerRef.value?.querySelector('.solution-screen')
    if (firstSection) {
      firstSection.scrollIntoView({ behavior: 'auto', block: 'start' })
    }
    // 延迟初始化，确保滚动完成且 DOM 完全稳定
    setTimeout(() => {
      initScrollTriggers()
    }, 50)
  })
}

onMounted(() => {
  const tab = route.query.tab
  if (tab && typeof tab === 'string' && categoryTabs.value.some((t) => t.id === tab)) {
    activeCategory.value = tab
  }
  nextTick(() => {
    initScrollTriggers()
  })
})

onUnmounted(() => {
  triggers.forEach((st) => st.kill())
  triggers = []
  ScrollTrigger.getAll().forEach((st) => st.kill())
})
</script>

<template>
  <div ref="containerRef" class="relative overflow-x-hidden">
    <!-- Hero -->
    <section id="solutions-hero" class="relative overflow-hidden bg-surface-base pt-10 md:pt-16 pb-6 md:pb-8"
      style="contain: paint;">
      <div
        class="absolute -top-40 -right-40 w-[500px] h-[500px] md:w-[600px] md:h-[600px] rounded-full pointer-events-none"
        style="background: radial-gradient(circle, rgba(85, 173, 115, 0.15) 0%, transparent 70%); filter: blur(60px);" />
      <div ref="heroRef" class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="page-title">
          {{ t('solutions.hero.title') }}
        </h1>
        <p class="page-subtitle">
          {{ t('solutions.hero.desc') }}
        </p>
      </div>

      <!-- Scroll hint -->
      <div class="mt-8 md:mt-12 flex justify-center">
        <div class="animate-bounce">
          <Icon icon="lucide:chevron-down" class="w-6 h-6 text-ink-tertiary" />
        </div>
      </div>
    </section>

    <!-- Category Nav -->
    <div class="z-40 sticky top-14 md:top-16 bg-surface-base/95 backdrop-blur-xl border-b border-line/30 py-3">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-center gap-2 md:gap-3 overflow-x-auto" style="scrollbar-width: none;">
          <button v-for="tab in categoryTabs" :key="tab.id"
            class="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all shrink-0"
            :class="activeCategory === tab.id ? 'bg-brand text-white shadow-sm' : 'bg-[#F1F4F2] text-ink-secondary hover:text-ink-primary'"
            @click="switchCategory(tab.id)">
            {{ tab.label }}
          </button>
        </div>
      </div>
    </div>

    <!-- Dot Navigation -->
    <div class="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-3">
      <button v-for="(s, i) in filteredSolutions" :key="s.id" class="group relative flex items-center justify-end"
        @click="scrollToSection(i)">
        <span class="mr-3 text-xs font-medium text-ink-secondary opacity-0 group-hover:opacity-100 transition-opacity">
          {{ s.title }}
        </span>
        <div class="w-2.5 h-2.5 rounded-full transition-all duration-300 border" :class="activeIndex === i
          ? 'bg-brand border-brand scale-125'
          : 'bg-transparent border-ink-tertiary hover:border-brand'
          " />
      </button>
    </div>

    <!-- Sections -->
    <section v-for="(s, i) in filteredSolutions" :id="s.id" :key="s.id"
      class="solution-screen relative min-h-[100dvh] flex items-center snap-start overflow-hidden"
      :class="i % 2 === 0 ? 'bg-surface-base' : 'bg-white'" style="contain: paint;">
      <!-- 装饰光晕 -->
      <div class="absolute -top-40 -right-40 w-[400px] h-[400px] rounded-full pointer-events-none opacity-30"
        :class="i % 2 === 0 ? 'opacity-20' : 'opacity-10'"
        style="background: radial-gradient(circle, rgba(85, 173, 115, 0.15) 0%, transparent 70%); filter: blur(80px);" />

      <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div class="flex flex-col lg:flex-row items-center gap-6 lg:gap-10"
          :class="i % 2 === 1 ? 'lg:flex-row-reverse' : ''">
          <!-- Text Content -->
          <div class="anim-text w-full lg:w-1/2">

            <h2 class="display-title">
              {{ s.title }}
            </h2>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mt-6">
              <span v-for="tag in s.tags" :key="tag"
                class="px-3 py-1.5 rounded-full text-xs font-semibold border border-brand/40 text-brand bg-brand-soft">
                {{ tag }}
              </span>
            </div>

            <!-- Scenes -->
            <div class="mt-8">
              <h3 class="text-sm font-semibold text-ink-tertiary uppercase tracking-wide mb-3">{{ t('common.applicableScenes') }}</h3>
              <div class="flex flex-wrap gap-2">
                <span v-for="scene in s.scenes" :key="scene"
                  class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-muted text-sm text-ink-secondary">
                  <Icon icon="lucide:check-circle" class="w-3.5 h-3.5 text-brand" />
                  {{ scene }}
                </span>
              </div>
            </div>
            <!-- 产品方案 -->
            <div class="mt-8 p-5 rounded-2xl bg-brand-soft/30 border border-brand/10">
              <div class="flex items-start gap-3">
                <Icon icon="lucide:briefcase" class="w-5 h-5 text-brand shrink-0 mt-0.5" />
                <div>
                  <h3 class="text-sm font-semibold text-ink-primary mb-1">{{ t('common.productScheme') }}</h3>
                  <p class="text-sm text-ink-secondary leading-relaxed">{{ s.cpsm }}</p>
                </div>
              </div>
            </div>

            <!-- Pain Point -->
            <div class="mt-8 p-5 rounded-2xl bg-surface-muted/50 border border-line/50">
              <div class="flex items-start gap-3">
                <Icon icon="lucide:lightbulb" class="w-5 h-5 text-brand shrink-0 mt-0.5" />
                <div>
                  <h3 class="text-sm font-semibold text-ink-primary mb-1">{{ t('common.solvePainPoints') }}</h3>
                  <p class="text-sm text-ink-secondary leading-relaxed">{{ s.pain }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Image / Mockup -->
          <div class="anim-img w-full lg:w-1/2 flex items-center justify-center overflow-hidden">
            <div
              class="w-full max-w-lg aspect-[16/10] rounded-2xl flex items-center justify-center relative overflow-hidden"
              :class="i % 2 === 0 ? 'bg-surface-muted' : 'bg-white'">
              <template v-if="s.url">
                <AppImage :src="s.url" :alt="s.title" class="w-full h-full object-cover" />
              </template>
              <template v-else>
                <div class="absolute inset-0 opacity-30"
                  style="background: radial-gradient(circle at 30% 30%, rgba(85, 173, 115, 0.15), transparent 60%);" />
                <div class="relative text-center p-6">
                  <div class="w-20 h-20 rounded-2xl bg-brand-gradient flex items-center justify-center mx-auto mb-4">
                    <Icon :icon="s.icon" class="w-10 h-10 text-white" />
                  </div>
                  <p class="text-lg font-semibold text-ink-primary">{{ s.title }}</p>
                  <p class="mt-2 text-sm text-ink-tertiary">{{ locale === 'zh-CN' ? '产品 Mockup 占位' : 'Product mockup placeholder' }}</p>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="relative py-10 md:py-16 bg-white overflow-hidden" style="contain: paint;">
      <div
        class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full pointer-events-none"
        style="background: radial-gradient(circle, rgba(85, 173, 115, 0.15) 0%, transparent 70%); filter: blur(80px);" />
      <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-xl md:text-2xl lg:text-3xl font-semibold text-ink-primary tracking-tight leading-tight">
          {{ t('solutions.finalCta.title') }}
        </h2>
        <p class="section-subtitle max-w-2xl mx-auto">
          {{ t('solutions.finalCta.desc') }}
        </p>
        <div class="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            class="inline-flex items-center px-6 py-3 rounded-full bg-[#55AD73] text-white font-semibold hover:bg-[#2E8B57] transition-colors"
            @click="showModal = true"
          >
            {{ t('common.contactUs') }}
          </button>
        </div>
      </div>
    </section>

    <EnterpriseModal v-model="showModal" />
  </div>
</template>
