<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'
import gsap from 'gsap'
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'
import CasesHero from '../sections/cases/CasesHero.vue'
import CasesCTA from '../sections/cases/CasesCTA.vue'
import BrandButton from '../components/BrandButton.vue'
import CaseDetailModal from '../components/CaseDetailModal.vue'
import { cases } from '../data/cases'
import type { CaseItem, Category } from '../data/cases'

const { t } = useI18n()

const clientLogosRow1 = [
  'bjyz.webp', 'chjh.webp', 'dyck.webp', 'gzlgxy.webp', 'hjcm.webp',
  'jy.webp', 'lseg.webp', 'mbkj.webp', 'mjtq.webp', 'pkz.webp',
]

const clientLogosRow2 = [
  'qhdx.webp', 'qmzx.webp', 'wksgj.webp', 'xnsd.webp', 'zgc.webp',
  'zgdx.webp', 'zglt.webp', 'zgyd.webp', 'zjxx.webp', 'zjzy.webp',
]

function getLogoUrl(name: string) {
  return new URL(`../assets/kh/${name}`, import.meta.url).href
}

const categories = computed<Category[]>(() => [
  { id: 'all', label: t('cases.tabs.all') },
  { id: 'enterprise', label: t('cases.tabs.enterprise') },
  { id: 'opc', label: t('cases.tabs.opc') },
  { id: 'training', label: t('cases.tabs.training') },
  { id: 'other', label: t('cases.tabs.other') },
])

const activeCat = ref('all')
const selectedCase = ref<CaseItem | null>(null)
const isModalOpen = ref(false)

const filteredCases = computed(() => {
  if (activeCat.value === 'all') return cases
  return cases.filter((c) => c.category === activeCat.value)
})

function switchCategory(id: string) {
  activeCat.value = id
}

function openModal(c: CaseItem) {
  selectedCase.value = c
  isModalOpen.value = true
}

watch(filteredCases, () => {
  nextTick(() => {
    gsap.fromTo(
      '.case-card',
      { opacity: 0, x: 40 },
      { opacity: 1, x: 0, duration: 0.45, stagger: 0.1, ease: 'power2.out' }
    )
  })
})

// 初始动画
nextTick(() => {
  gsap.fromTo(
    '.case-card',
    { opacity: 0, x: 40 },
    { opacity: 1, x: 0, duration: 0.45, stagger: 0.1, ease: 'power2.out', delay: 0.2 }
  )
})
</script>

<template>
  <div class="min-h-screen bg-surface-base">
    <CasesHero />

    <!-- Tab -->
    <div class="sticky top-14 md:top-16 z-40 bg-surface-base/95 backdrop-blur-xl border-b border-line/30 py-3">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-center gap-2 overflow-x-auto" style="scrollbar-width: none;">
          <button
            v-for="item in categories"
            :key="item.id"
            class="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all shrink-0"
            :class="activeCat === item.id ? 'bg-brand text-white shadow-sm' : 'bg-[#F1F4F2] text-ink-secondary hover:text-ink-primary'"
            @click="switchCategory(item.id)"
          >
            {{ item.label }}
          </button>
        </div>
      </div>
    </div>

    <!-- Case Cards -->
    <section class="py-16 md:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-6">
          <div
            v-for="c in filteredCases"
            :key="c.id"
            class="case-card rounded-2xl overflow-hidden bg-white shadow-card border border-line/50 flex flex-col lg:flex-row"
          >
            <!-- Left: Text (60%) -->
            <div class="w-full lg:w-[60%] p-6 md:p-8 flex flex-col justify-center">
              <!-- Category Label -->
              <div class="mb-3">
                <span
                  class="px-3 py-1 rounded-md text-sm font-semibold bg-brand-soft text-brand"
                >
                  {{ categories.find(cat => cat.id === c.category)?.label }}
                </span>
              </div>

              <!-- Title -->
              <h2
                class="text-2xl md:text-[28px] font-semibold text-ink-primary leading-tight"
              >
                {{ c.client }}
              </h2>

              <p v-if="c.subtitle" class="mt-2 text-base text-ink-secondary">
                {{ c.subtitle }}
              </p>

              <p
                v-if="c.location"
                class="mt-2 text-sm text-ink-secondary border-l-2 border-brand pl-3"
              >
                {{ c.location }}
              </p>

              <!-- Metrics -->
              <div class="flex flex-wrap gap-6 md:gap-10 mt-6">
                <div v-for="m in c.metrics" :key="m.label">
                  <div
                    class="text-2xl md:text-3xl font-semibold text-brand tracking-tight"
                  >
                    {{ m.value }}
                  </div>
                  <div class="text-sm text-ink-secondary mt-1">
                    {{ m.label }}
                  </div>
                </div>
              </div>

              <!-- Button -->
              <div class="mt-8">
                <BrandButton size="sm" @click="openModal(c)">
                  {{ t('common.caseDetails') }}
                </BrandButton>
              </div>
            </div>

            <!-- Right: Visual (40%) with clip-path -->
            <div
              class="relative w-full lg:w-[40%] min-h-[200px] lg:min-h-[320px] overflow-hidden"
              :style="{
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
              }"
              :class="
                'lg:[clip-path:polygon(12%_0,100%_0,100%_100%,0%_100%)]'
              "
            >
              <template v-if="c.image">
                <template v-if="c.id === 'c9'">
                  <div class="absolute inset-0 bg-[#2563EB] flex items-center justify-center p-6">
                    <img
                      :src="c.image"
                      class="max-w-full max-h-full object-contain"
                      :alt="c.client"
                    />
                  </div>
                </template>
                <template v-else>
                  <img
                    :src="c.image"
                    class="absolute inset-0 w-full h-full object-cover"
                    :alt="c.client"
                  />
                </template>
              </template>
              <template v-else>
                <div
                  class="absolute inset-0 bg-gradient-to-br from-brand via-brand to-brand-deep"
                />
                <div
                  class="absolute inset-0 opacity-20"
                  style="
                    background: radial-gradient(
                      circle at 30% 30%,
                      rgba(255, 255, 255, 0.3),
                      transparent 60%
                    );
                  "
                />
                <div class="absolute inset-0 flex items-center justify-center">
                  <Icon
                    :icon="c.icon"
                    class="w-24 h-24 text-white/25"
                  />
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Case Modal -->
    <Teleport to="body">
      <div
        v-if="isModalOpen"
        class="case-modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4"
        style="background: rgba(0, 0, 0, 0.55); backdrop-filter: blur(8px)"
        @click.self=""
      >
        <div
          class="case-modal-content bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl"
        >
          <!-- Header -->
          <div
            class="sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-line/50 px-6 md:px-8 py-5 flex items-start justify-between gap-4"
          >
            <div>
              <div class="flex items-center gap-2 mb-2">
                <span
                  class="px-3 py-1 rounded-md text-sm font-semibold bg-brand-soft text-brand"
                >
                  {{ categories.find(cat => cat.id === selectedCase?.category)?.label }}
                </span>
                <span class="text-xs text-ink-tertiary">
                {{ selectedCase?.title }}
                </span>
              </div>
              <h3
                class="text-xl md:text-2xl font-semibold text-ink-primary leading-tight"
              >
                  {{ selectedCase?.client }}
              </h3>
            </div>
            <button
              class="shrink-0 w-10 h-10 rounded-full bg-surface-muted flex items-center justify-center text-ink-secondary hover:text-ink-primary hover:bg-surface-hover transition-colors"
              @click=""
            >
              <Icon icon="lucide:x" class="w-5 h-5" />
            </button>
          </div>

          <!-- Body -->
          <div class="px-6 md:px-8 py-6 space-y-6">
            <!-- 客户背景 -->
            <div>
              <h4
                class="flex items-center gap-2 text-sm font-semibold text-ink-primary mb-3"
              >
                <Icon icon="lucide:building" class="w-4 h-4 text-brand" />
                {{ t('common.customerBackground') }}
              </h4>
              <p class="text-base text-ink-secondary leading-relaxed">
                {{ selectedCase?.background || selectedCase?.client }}
              </p>
            </div>

            <!-- 核心痛点 -->
            <div
              class="rounded-2xl bg-[#FEF2F2] border border-[#FECACA] p-5 md:p-6"
            >
              <h4
                class="flex items-center gap-2 text-sm font-semibold text-[#991B1B] mb-4"
              >
                <Icon icon="lucide:alert-circle" class="w-4 h-4" />
                {{ t('common.corePainPoints') }}
              </h4>
              <ul class="space-y-3">
                <li
                  v-for="(p, idx) in selectedCase?.pain"
                  :key="idx"
                  class="text-sm md:text-base text-[#7F1D1D] leading-relaxed flex items-start gap-2.5"
                >
                  <span
                    class="mt-2 w-1.5 h-1.5 rounded-full bg-[#EF4444] shrink-0"
                  />
                  {{ p }}
                </li>
              </ul>
            </div>

            <!-- 方案细节 -->
            <div>
              <h4
                class="flex items-center gap-2 text-sm font-semibold text-brand mb-4"
              >
                <Icon icon="lucide:check-circle" class="w-4 h-4" />
                {{ t('common.schemeDetails') }}
              </h4>
              <ul class="space-y-3">
                <li
                  v-for="(s, idx) in selectedCase?.solution"
                  :key="idx"
                  class="text-base text-ink-secondary leading-relaxed flex items-start gap-2.5"
                >
                  <Icon
                    icon="lucide:check"
                    class="w-5 h-5 text-brand shrink-0 mt-0.5"
                  />
                  {{ s }}
                </li>
              </ul>
            </div>

            <!-- 解决了什么问题 -->
            <div v-if="selectedCase?.solved?.length">
              <h4
                class="flex items-center gap-2 text-sm font-semibold text-brand mb-4"
              >
                <Icon icon="lucide:check-circle" class="w-4 h-4" />
                {{ t('common.solveProblems') }}
              </h4>
              <ul class="space-y-3">
                <li
                  v-for="(s, idx) in selectedCase.solved"
                  :key="idx"
                  class="text-base text-ink-secondary leading-relaxed flex items-start gap-2.5"
                >
                  <Icon
                    icon="lucide:check"
                    class="w-5 h-5 text-brand shrink-0 mt-0.5"
                  />
                  {{ s }}
                </li>
              </ul>
            </div>

            <!-- 成效 -->
            <div
              v-if="selectedCase?.effect || selectedCase?.result"
              class="rounded-xl bg-brand-soft border border-brand/20 p-4 md:p-5"
            >
              <p class="text-sm md:text-base font-semibold text-brand">
                <span class="inline-flex items-center gap-2">
                  <Icon icon="lucide:trending-up" class="w-4 h-4" />
                  {{ t('common.effect') }}：
                </span>
                {{ selectedCase?.effect || selectedCase.result }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
    <CaseDetailModal v-model="isModalOpen" :case-item="selectedCase" />

    <!-- 签约客户 -->
    <section class="py-16 md:py-24 bg-surface-base overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-20 md:mb-28">
          <h2 class="section-title">
            {{ t('cases.clients.title') }}
          </h2>
          <p class="section-subtitle">
            {{ t('cases.clients.desc') }}
          </p>
        </div>
      </div>

      <!-- Marquee Row 1 -->
      <div class="relative w-full mb-16 md:mb-20">
        <div
          class="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10"
          style="background: linear-gradient(to right, #F8FAF9, transparent);"
        />
        <div
          class="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10"
          style="background: linear-gradient(to left, #F8FAF9, transparent);"
        />

        <div class="flex cases-marquee-track">
          <div
            v-for="logo in clientLogosRow1"
            :key="logo"
            class="flex-shrink-0 flex items-center justify-center w-32 md:w-40 px-2"
          >
            <img
              :src="getLogoUrl(logo)"
              :alt="logo.replace('.webp', '')"
              class="w-full h-8 md:h-10 object-contain transition-all duration-300"
              loading="lazy"
            />
          </div>
          <div
            v-for="logo in clientLogosRow1"
            :key="`${logo}-dup`"
            class="flex-shrink-0 flex items-center justify-center w-32 md:w-40 px-2"
          >
            <img
              :src="getLogoUrl(logo)"
              :alt="logo.replace('.webp', '')"
              class="w-full h-8 md:h-10 object-contain transition-all duration-300"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <!-- Marquee Row 2 (reverse) -->
      <div class="relative w-full">
        <div
          class="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10"
          style="background: linear-gradient(to right, #F8FAF9, transparent);"
        />
        <div
          class="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10"
          style="background: linear-gradient(to left, #F8FAF9, transparent);"
        />

        <div class="flex cases-marquee-track-reverse">
          <div
            v-for="logo in clientLogosRow2"
            :key="logo"
            class="flex-shrink-0 flex items-center justify-center w-32 md:w-40 px-2"
          >
            <img
              :src="getLogoUrl(logo)"
              :alt="logo.replace('.webp', '')"
              class="w-full h-8 md:h-10 object-contain transition-all duration-300"
              loading="lazy"
            />
          </div>
          <div
            v-for="logo in clientLogosRow2"
            :key="`${logo}-dup`"
            class="flex-shrink-0 flex items-center justify-center w-32 md:w-40 px-2"
          >
            <img
              :src="getLogoUrl(logo)"
              :alt="logo.replace('.webp', '')"
              class="w-full h-8 md:h-10 object-contain transition-all duration-300"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    <CasesCTA />
  </div>
</template>

<style scoped>
@keyframes cases-marquee-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes cases-marquee-scroll-reverse {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

.cases-marquee-track {
  animation: cases-marquee-scroll 40s linear infinite;
  width: max-content;
}

.cases-marquee-track-reverse {
  animation: cases-marquee-scroll-reverse 40s linear infinite;
  width: max-content;
}

.cases-marquee-track:hover,
.cases-marquee-track-reverse:hover {
  animation-play-state: paused;
}
</style>
