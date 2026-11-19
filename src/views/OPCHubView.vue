<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { Icon } from '@iconify/vue'
import { useI18n } from 'vue-i18n'
import { useContent } from '@/i18n/useContent'
import { opcHubContent } from '@/content/opcHub'
import { useScrollReveal } from '../composables/useScrollReveal'

import { useCountUp } from '../composables/useCountUp'
import { getImageUrl } from '../utils/image'

import Chip from '../components/Chip.vue'
import BrandButton from '../components/BrandButton.vue'
import EnterpriseModal from '../components/EnterpriseModal.vue'
import AppImage from '../components/AppImage.vue'

const c = useContent(opcHubContent)
const { locale } = useI18n()

// 生态示意图上有文字：非中文访客显示英文版
const opc1ImgZh = getImageUrl('opc1.webp')
const opc1ImgEn = getImageUrl('opc1_en.webp')

const leftRef = ref(null)
const rightRef = ref(null)

const showModal = ref(false)

const heroImages = [
  { src: getImageUrl('opchub/opchub.webp'), alt: 'OPC Hub' },
  { src: getImageUrl('opchub/OPCHub1.webp'), alt: 'OPC Hub 1' },
]

const heroIndex = ref(0)
let heroTimer: ReturnType<typeof setInterval> | null = null

function startHeroCarousel() {
  heroTimer = setInterval(() => {
    heroIndex.value = (heroIndex.value + 1) % heroImages.length
  }, 3000)
}

function stopHeroCarousel() {
  if (heroTimer) {
    clearInterval(heroTimer)
    heroTimer = null
  }
}

onMounted(() => {
  startHeroCarousel()
})

onUnmounted(() => {
  stopHeroCarousel()
})

useScrollReveal(leftRef, { y: 30 })
useScrollReveal(rightRef, { y: 30, delay: 0.15 })

function observeFadeIn() {
  const sections = document.querySelectorAll('.fade-in-section')
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )
  sections.forEach((s) => observer.observe(s))
}

const agentCount = ref(1483)
const agentKey = ref(0)
const AGENT_BASE = 1483
const AGENT_INTERVAL = 2000
const AGENT_CYCLE = 30000

let agentTimer: ReturnType<typeof setInterval> | null = null
let agentResetTimer: ReturnType<typeof setTimeout> | null = null

watch(agentCount, () => {
  agentKey.value++
})

function startAgentCountAnimation() {
  agentCount.value = AGENT_BASE

  agentTimer = setInterval(() => {
    agentCount.value += Math.floor(Math.random() * 9) + 1
  }, AGENT_INTERVAL)

  agentResetTimer = setTimeout(() => {
    if (agentTimer) {
      clearInterval(agentTimer)
      agentTimer = null
    }
    startAgentCountAnimation()
  }, AGENT_CYCLE)
}

onMounted(() => {
  observeFadeIn()
  startAgentCountAnimation()
})

onUnmounted(() => {
  if (agentTimer) {
    clearInterval(agentTimer)
    agentTimer = null
  }
  if (agentResetTimer) {
    clearTimeout(agentResetTimer)
    agentResetTimer = null
  }
})

// 文案与数字格式见 content/opcHub.ts（platform.stats），按顺序对应
const statTargets = [48326, 25, 120, 987]
const statItems = computed(() =>
  c.value.platform.stats.map((s, i) => ({ ...s, target: statTargets[i] }))
)

const statRefs = [
  ref<HTMLElement | null>(null),
  ref<HTMLElement | null>(null),
  ref<HTMLElement | null>(null),
  ref<HTMLElement | null>(null),
]

const countUps = statTargets.map((target, i) => useCountUp(statRefs[i], target))

const pTitleRef = ref<HTMLElement | null>(null)
const pCardsRef = ref<HTMLElement | null>(null)
const pBottomRef = ref<HTMLElement | null>(null)

useScrollReveal(pTitleRef, { y: 30 })
useScrollReveal(pCardsRef, { y: 30, delay: 0.15 })
useScrollReveal(pBottomRef, { y: 20, delay: 0.25 })

const vpTitleRef = ref<HTMLElement | null>(null)
const vpColumnsRef = ref<HTMLElement | null>(null)
const vpBottomRef = ref<HTMLElement | null>(null)

useScrollReveal(vpTitleRef, { y: 30 })
useScrollReveal(vpColumnsRef, { y: 30, delay: 0.15 })
useScrollReveal(vpBottomRef, { y: 30, delay: 0.25 })

const kcImages = [
  getImageUrl('kc/微信图片_20260602122120_485_111.webp'),
  getImageUrl('kc/微信图片_20260602122135_486_111.webp'),
  getImageUrl('kc/微信图片_20260602122148_487_111.webp'),
  getImageUrl('kc/微信图片_20260602122353_488_111.webp'),
]

const serviceColors = ['#F04045', '#F04045', '#F04045', '#F04045', '#F04045', '#F04045']

// 文案见 content/opcHub.ts（services.items），按顺序对应
const serviceImages = [
  getImageUrl('opchub/11.webp'),
  getImageUrl('opchub/22.webp'),
  getImageUrl('opchub/33.webp'),
  getImageUrl('opchub/44.webp'),
  getImageUrl('opchub/55.webp'),
  getImageUrl('opchub/66.webp'),
]

const services = computed(() =>
  c.value.services.items.map((s, i) => ({ ...s, image: serviceImages[i] }))
)

// 文案见 content/opcHub.ts（conditions.groups），按顺序对应
const conditionImages = [
  getImageUrl('opchub/yq.webp'),
  getImageUrl('opchub/qy.webp'),
  getImageUrl('opchub/gx.webp'),
]

const conditionGroups = computed(() =>
  c.value.conditions.groups.map((g, i) => ({ ...g, image: conditionImages[i] }))
)

// 专利名称见 content/opcHub.ts（security.patentTitles），按顺序对应
const patentData = [
  { no: 'CN202511402564.2', date: '2025-09-28', pub: '2026-01-13', inventor: '刘海峰' },
  { no: 'CN202511435621.7', date: '2025-10-09', pub: '2025-12-30', inventor: '刘海峰' },
]

const patents = computed(() =>
  patentData.map((p, i) => ({ ...p, title: c.value.security.patentTitles[i] }))
)

// 文案见 content/opcHub.ts（security.items），按顺序对应
const securityImages = [
  getImageUrl('opchub/1.webp'),
  getImageUrl('opchub/2.webp'),
  getImageUrl('opchub/3.webp'),
  getImageUrl('opchub/4.webp'),
]

const securities = computed(() =>
  c.value.security.items.map((s, i) => ({ ...s, image: securityImages[i] }))
)

const caseImgBwsq1 = getImageUrl('al/bwsq1.webp')
const caseImgBwsq = getImageUrl('al/bwsq.webp')
const caseImgCycyy1 = getImageUrl('al/cycyy1.webp')
const caseImgCycyy = getImageUrl('al/cycyy.webp')

// 文案见 content/opcHub.ts（cases.items），按顺序对应
const caseImages = [
  [caseImgBwsq1, caseImgBwsq],
  [caseImgCycyy, caseImgCycyy1],
]

const cases = computed(() =>
  c.value.cases.items.map((item, i) => ({ ...item, images: caseImages[i] }))
)
</script>

<template>
  <div class="min-h-screen bg-white font-sans text-[#1A1A1A]">

    <!-- ==================== Hero Section ==================== -->
    <section class="relative overflow-hidden bg-gradient-to-br from-white via-[#FFF5F5] to-white pt-8 md:pt-12 pb-8 md:pb-12 fade-in-section">
      <!-- 右上红色光晕 -->
      <div class="absolute -top-40 -right-40 w-[500px] h-[500px] md:w-[600px] md:h-[600px] rounded-full pointer-events-none" style="background: radial-gradient(circle, rgba(240, 64, 69, 0.18) 0%, transparent 70%); filter: blur(60px);" />

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">

          <!-- 左侧 -->
          <div ref="leftRef">
            <!-- <Chip class="!bg-[#F04045]/10 !text-[#F04045]">PLATFORM · OPC HUB</Chip> -->

            <h1 class="mt-5 page-title">
              OPC Hub<br />
              <span class="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1A1A1A]">
                {{ c.hero.titleLine1 }}<br />
                {{ c.hero.titleLine2 }}
              </span>
            </h1>

            <p class="mt-6 text-lg text-[#666666] leading-relaxed max-w-xl">
              {{ c.hero.subtitle }}

            </p>

            <div class="flex flex-wrap gap-2 mt-6">
              <Chip class="!bg-[#F5F5F7] !text-[#666666]">{{ c.hero.chips[0] }}</Chip>
              <Chip class="!bg-[#F5F5F7] !text-[#666666]">{{ c.hero.chips[1] }}</Chip>
              <Chip class="!bg-[#F5F5F7] !text-[#666666]">{{ c.hero.chips[2] }}</Chip>
              <Chip class="!bg-[#F5F5F7] !text-[#666666]">{{ c.hero.chips[3] }}</Chip>
            </div>

            <div class="mt-8 flex flex-wrap items-center gap-4">
              <button
                class="px-6 py-2.5 rounded-lg bg-[#F04045] text-white font-medium hover:opacity-90 transition-opacity"
                @click="showModal = true"
              >
                {{ c.hero.consult }}
              </button>
              <BrandButton variant="ghost" to="/solutions?tab=solo" class="hover:!border-[#F04045] hover:!text-[#F04045]" arrow>
                {{ c.hero.learnMore }}
              </BrandButton>
            </div>
          </div>

          <!-- 右侧：轮播 -->
          <div ref="rightRef" class="relative" @mouseenter="stopHeroCarousel" @mouseleave="startHeroCarousel">
            <div
              class="aspect-[16/10] rounded-2xl bg-[#F5F5F7] border border-[#E5E5E5] shadow-sm overflow-hidden"
            >
              <div class="flex h-full transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${heroIndex * 100}%)` }">
                <AppImage
                  v-for="(img, i) in heroImages"
                  :key="img.src"
                  :src="img.src"
                  :alt="img.alt"
                  class="w-full h-full flex-shrink-0 object-cover"
                  :priority="i === 0"
                />
              </div>
            </div>
            <!-- Dots -->
            <div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              <button
                v-for="(_, idx) in heroImages"
                :key="idx"
                class="w-2 h-2 rounded-full transition-all"
                :class="idx === heroIndex ? 'bg-[#F04045] w-4' : 'bg-white/60'"
                @click="heroIndex = idx; stopHeroCarousel(); startHeroCarousel();"
              />
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ==================== Section: 三大服务方向 ==================== -->
    <section class="py-10 md:py-16 bg-white fade-in-section">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-10 items-stretch">
          <!-- 左侧：图片 -->
          <div class="flex items-center justify-center">
            <div class="w-full rounded-2xl overflow-hidden border border-[#E5E5E5] shadow-sm">
              <AppImage
                :src="locale === 'zh-CN' ? opc1ImgZh : opc1ImgEn"
                :alt="c.audiences.sceneAlt"
                class="w-full h-auto object-contain"
              />
            </div>
          </div>

          <!-- 右侧：三个卡片 -->
          <div class="flex flex-col gap-4">
            <!-- 面向园区 -->
            <div class="flex-1 p-6 md:p-7 rounded-2xl bg-[#F5F5F7] border border-[#E5E5E5] hover:shadow-lg transition-all duration-300">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 rounded-xl bg-[#F04045]/10 flex items-center justify-center">
                  <Icon icon="lucide:user" class="w-5 h-5 text-[#F04045]" />
                </div>
                <h3 class="text-xl font-semibold text-[#1A1A1A]">{{ c.audiences.campus.title }}</h3>
              </div>
              <p class="text-sm text-[#666666] leading-relaxed">
                {{ c.audiences.campus.pain }}
              </p>
              <p class="text-sm text-[#666666] leading-relaxed">
                {{ c.audiences.campus.solution }}
              </p>
            </div>

            <!-- 面向企业 -->
            <div class="flex-1 p-6 md:p-7 rounded-2xl bg-[#F5F5F7] border border-[#E5E5E5] hover:shadow-lg transition-all duration-300">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 rounded-xl bg-[#F04045]/10 flex items-center justify-center">
                  <Icon icon="lucide:building-2" class="w-5 h-5 text-[#F04045]" />
                </div>
                <h3 class="text-xl font-semibold text-[#1A1A1A]">{{ c.audiences.enterprise.title }}</h3>
              </div>
              <p class="text-sm text-[#666666] leading-relaxed">
                {{ c.audiences.enterprise.pain }}
              </p>
              <p class="text-sm text-[#666666] leading-relaxed">
                {{ c.audiences.enterprise.solution }}
              </p>
            </div>

            <!-- 面向学校 -->
            <div class="flex-1 p-6 md:p-7 rounded-2xl bg-[#F5F5F7] border border-[#E5E5E5] hover:shadow-lg transition-all duration-300">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 rounded-xl bg-[#F04045]/10 flex items-center justify-center">
                  <Icon icon="lucide:graduation-cap" class="w-5 h-5 text-[#F04045]" />
                </div>
                <h3 class="text-xl font-semibold text-[#1A1A1A]">{{ c.audiences.university.title }}</h3>
              </div>
              <p class="text-sm text-[#666666] leading-relaxed">
               {{ c.audiences.university.pain }}
              </p>
              <p class="text-sm text-[#666666] leading-relaxed">
               {{ c.audiences.university.solution }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Dark Platform Section -->
    <section class="py-10 md:py-16 bg-white text-[#1A1A1A] fade-in-section">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="section-title text-center mb-2">
          {{ c.platform.title }}
        </h2>
        <p class="text-center text-[#666666] mb-10"></p>

        <div class="text-center mb-8">
          <p class="text-4xl md:text-5xl font-semibold text-[#F04045] flex items-center justify-center">
            <span class="inline-flex items-baseline">
              <span
                v-for="(digit, i) in String(agentCount)"
                :key="`pos-${i}`"
                class="inline-block overflow-hidden relative text-center"
                style="height: 1em; width: 0.65em; line-height: 1em;"
              >
                <Transition name="scroll-up" mode="out-in">
                  <span :key="digit" class="inline-block w-full">{{ digit }}</span>
                </Transition>
              </span>
            </span>
            <span>&nbsp;{{ c.platform.agentsRunning }}</span>
          </p>
        </div>

        <div class="space-y-3 text-center text-[#666666] mb-10">
          <p>{{ c.platform.taglines[0] }}</p>
          <p>{{ c.platform.taglines[1] }}</p>
        </div>

        <div class="flex flex-wrap justify-center gap-4 mb-16">
          <a
            href="http://opc.chatu.plus"
            target="_blank"
            rel="noopener noreferrer"
            class="px-8 py-3 rounded-lg bg-[#F04045] text-white font-semibold hover:opacity-90 transition-opacity inline-block"
          >
            {{ c.platform.tryNow }}
          </a>
          <button
            class="px-8 py-3 rounded-lg border border-[#1A1A1A] text-[#1A1A1A] font-semibold hover:bg-[#1A1A1A]/5 transition-colors"
            @click="showModal = true"
          >
            {{ c.platform.contactUs }}
          </button>
          <EnterpriseModal v-model="showModal" />
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-4 gap-4 md:gap-6 my-10">
          <div v-for="(item, i) in statItems" :key="item.target" :ref="(el) => { if (el) statRefs[i].value = el as HTMLElement }" class="stat-card text-center p-5 md:p-6 rounded-xl bg-white border border-[#E5E5E5] shadow-sm transition-all duration-300" >
            <div class="text-2xl md:text-3xl font-semibold text-[#F04045]">
              {{ item.format(countUps[i].displayValue.value) }}
            </div>
            <div class="text-sm text-[#666666] mt-1.5">{{ item.label }}</div>
          </div>
        </div>


        <!-- Screenshots -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:auto-rows-fr items-stretch">
          <div class="rounded-xl border border-[#E5E5E5] overflow-hidden aspect-[16/9]">
            <AppImage :src="heroImages[0].src" class="w-full h-full object-cover" alt="OPC Hub" />
          </div>
          <div class="rounded-xl border border-[#E5E5E5] overflow-hidden aspect-[16/9]">
            <AppImage :src="heroImages[1].src" class="w-full h-full object-cover" :alt="c.platform.consoleAlt" />
          </div>
        </div>

        <!-- Core capabilities -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div class="p-6 rounded-xl bg-[#F5F5F7] border border-[#E5E5E5]">
            <h4 class="text-lg font-semibold mb-2">{{ c.platform.capabilities[0].title }}</h4>
            <p class="text-sm text-[#666666]">{{ c.platform.capabilities[0].desc }}</p>
          </div>
          <div class="p-6 rounded-xl bg-[#F5F5F7] border border-[#E5E5E5]">
            <h4 class="text-lg font-semibold mb-2">{{ c.platform.capabilities[1].title }}</h4>
            <p class="text-sm text-[#666666]">{{ c.platform.capabilities[1].desc }}</p>
          </div>
          <div class="p-6 rounded-xl bg-[#F5F5F7] border border-[#E5E5E5]">
            <h4 class="text-lg font-semibold mb-2">{{ c.platform.capabilities[2].title }}</h4>
            <p class="text-sm text-[#666666]">{{ c.platform.capabilities[2].desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== Section 6: Rent Model ==================== -->
    <section class="py-10 md:py-16 bg-[#F5F5F7] fade-in-section">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center mb-8">
          <div class="flex flex-wrap justify-center gap-3 text-sm text-[#666666]">
            <span class="px-3 py-1 rounded-full bg-white border border-[#E5E5E5]">{{ c.conditions.tags[0] }}</span>
            <span class="px-3 py-1 rounded-full bg-white border border-[#E5E5E5]">{{ c.conditions.tags[1] }}</span>
            <span class="px-3 py-1 rounded-full bg-white border border-[#E5E5E5]">{{ c.conditions.tags[2] }}</span>
          </div>
          <p class="mt-4 text-lg font-semibold text-[#F04045]">{{ c.conditions.tagline }}</p>
        </div>

        <!-- Conditions -->
        <h3 class="section-title text-center mb-2">{{ c.conditions.title }}</h3>
        <p class="text-center text-[#666666] mb-8">{{ c.conditions.subtitle }}</p>

        <div v-for="group in conditionGroups" :key="group.category" class="mb-16 last:mb-0">
          <!-- <div class="text-center mb-4">
            <span class="inline-block px-8 py-3 rounded-full bg-[#F04045] text-white text-lg font-semibold shadow-md">
              {{ group.category }}
            </span>
          </div> -->

          <div class="relative mb-8 rounded-xl overflow-hidden h-[140px]">
            <AppImage
              v-if="group.image"
              :src="group.image"
              :alt="group.category"
              class="absolute inset-0 w-full h-full object-cover object-center blur-sm"
            />
            <div class="absolute inset-0 bg-black/30 flex flex-col items-center justify-center px-6 text-center">
              <span class="text-white text-2xl font-semibold tracking-wide">
                {{ group.category }}
              </span>
              <span class="mt-2 text-white/90 text-base md:text-lg leading-relaxed max-w-2xl">
                {{ group.subtitle }}
              </span>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="cond in group.items" :key="cond.title" class="p-6 rounded-xl bg-white border border-[#E5E5E5]">
              <h4 class="text-lg font-semibold mb-3 text-[#F04045]">{{ cond.title }}</h4>
              <ul class="space-y-2 text-sm text-[#666666]">
                <li v-for="item in cond.items" :key="item">· {{ item }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== Section 7: Six Services ==================== -->
    <section class="py-10 md:py-16 bg-white fade-in-section">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="section-title text-center mb-2">
          {{ c.services.title }}
        </h2>
        <p class="text-center font-semibold text-[#1A1A1A] mb-2">
          {{ c.services.subtitle }}
        </p>
        <p class="text-center text-sm text-[#666666] mb-8">
          <!-- 支撑方：软积木，提供完善的 AI 体系化能力 -->
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div
            v-for="(s, i) in services"
            :key="s.title"
            class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-[#F8FAFC] border border-[#E5E5E5] p-5 hover:-translate-y-1 transition-transform duration-300"
          >
            <!-- Header -->
            <div class="flex items-start gap-3">
              <div
                class="w-14 h-14 rounded-br-2xl flex items-center justify-center text-white text-xl font-semibold shrink-0"
                :style="{ backgroundColor: serviceColors[i] }"
              >
                {{ String(i + 1).padStart(2, '0') }}
              </div>
              <div class="pt-1">
                <h3 class="text-lg font-semibold text-[#1A1A1A]">{{ s.title }}</h3>
                <div
                  class="mt-2 w-8 h-1 rounded-full"
                  :style="{ backgroundColor: serviceColors[i] }"
                />
              </div>
            </div>

            <!-- Body -->
            <div class="flex items-end gap-4 mt-5">
              <ul class="flex-1 space-y-2 text-sm text-[#666666]">
                <li
                  v-for="item in s.items"
                  :key="item"
                  class="flex items-start gap-2"
                >
                  <span
                    class="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                    :style="{ backgroundColor: serviceColors[i] }"
                  />
                  {{ item }}
                </li>
              </ul>
              <AppImage
                :src="s.image"
                :alt="s.title"
                class="w-20 h-20 md:w-24 md:h-24 object-contain shrink-0"
              />
            </div>
          </div>
        </div>

        <div class="p-6 rounded-xl bg-[#F5F5F7] text-center">
          <p class="text-[#666666] leading-relaxed">
            {{ c.services.footer }}
          </p>
        </div>
      </div>
    </section>

    <!-- ==================== Section 8: Cases ==================== -->
    <section class="py-10 md:py-16 bg-[#F5F5F7] fade-in-section">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="section-title text-center mb-8">{{ c.cases.title }}</h2>
        <div class="space-y-8">
          <div
            v-for="caseItem in cases"
            :key="caseItem.tag"
            class="p-6 rounded-xl bg-white border border-[#E5E5E5]"
            :class="caseItem.images ? 'grid grid-cols-1 lg:grid-cols-2 gap-6 items-center' : ''"
          >
            <!-- 左侧文字 -->
            <div>
              <div class="flex flex-wrap items-center gap-3 mb-4">
                <span class="px-3 py-1 rounded-full text-xs font-semibold bg-[#F04045]/10 text-[#F04045]">
                  {{ caseItem.label }}
                </span>
              </div>
              <h3 class="text-xl font-semibold mb-2">{{ caseItem.tag }}</h3>
              <p class="text-[#F04045] font-medium mb-4">{{ caseItem.slogan }}</p>
              <ul class="space-y-2 text-[#666666] mb-4">
                <li v-for="r in caseItem.results" :key="r">· {{ r }}</li>
              </ul>
              <p class="text-sm font-semibold text-[#1A1A1A]">{{ c.cases.featureLabel }}{{ caseItem.feature }}</p>
            </div>

            <!-- 右侧图片 -->
            <div v-if="caseItem.images" class="relative hidden lg:block h-80">
              <AppImage
                :src="caseItem.images[0]"
                alt=""
                class="absolute top-0 left-0 w-64 h-48 rounded-xl shadow-lg z-10 object-cover"
              />
              <AppImage
                :src="caseItem.images[1]"
                alt=""
                class="absolute top-28 left-36 w-64 h-48 rounded-xl shadow-lg z-20 object-cover"
              />
            </div>
          </div>
        </div>

        <div class="mt-12 p-6 rounded-xl bg-white border border-[#E5E5E5] text-center">
          <p class="text-[#666666] leading-relaxed mb-4">
            {{ c.cases.closing }}
          </p>
          <p class="text-sm font-semibold text-[#F04045]">{{ c.cases.honor }}</p>
        </div>
      </div>
    </section>

    <!-- ==================== Section 9: Security ==================== -->
    <section class="py-10 md:py-16 bg-white fade-in-section">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="section-title text-center mb-4">
          <!-- 合规与安全：基石 -->
           {{ c.security.title }}
        </h2>
        <p class="text-center text-[#666666] mb-8">
          <!-- 软积木遵循国家监管，合规备案（拥有自有知识产权） -->
        </p>

        <!-- Patents -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div
            v-for="p in patents"
            :key="p.no"
            class="p-6 rounded-xl border border-[#E5E5E5]"
          >
            <h4 class="text-lg font-semibold mb-3">{{ p.title }}</h4>
            <div class="space-y-1 text-sm text-[#666666]">
              <p>{{ c.security.patentNoLabel }} {{ p.no }}</p>
              <p>{{ c.security.filedLabel }}{{ p.date }}{{ c.security.publishedLabel }}{{ p.pub }}</p>
            </div>
          </div>
        </div>

        <!-- Security -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="s in securities"
            :key="s.title"
            class="p-6 rounded-xl bg-[#F5F5F7] text-center"
          >
            <div class="aspect-video rounded-xl overflow-hidden mb-4">
              <AppImage
                :src="s.image"
                :alt="s.title"
                class="w-full h-full object-cover"
              />
            </div>
            <h4 class="font-semibold mb-2">{{ s.title }}</h4>
            <p class="text-sm text-[#666666]">{{ s.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== Section 5: Platform Value ==================== -->
    <section class="py-10 md:py-16 bg-white fade-in-section">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="section-title text-center mb-4">
          {{ c.value.title }}
        </h2>
        <p class="text-center text-[#666666] max-w-3xl mx-auto mb-8">
          {{ c.value.subtitle }}
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div class="p-6 rounded-xl bg-[#F5F5F7]">
            <h3 class="text-lg font-semibold mb-3">{{ c.value.cards[0].title }}</h3>
            <p class="text-[#666666]">{{ c.value.cards[0].desc }}</p>
          </div>
          <div class="p-6 rounded-xl bg-[#F5F5F7]">
            <h3 class="text-lg font-semibold mb-3">{{ c.value.cards[1].title }}</h3>
            <p class="text-[#666666]">{{ c.value.cards[1].desc }}</p>
          </div>
          <div class="p-6 rounded-xl bg-[#F5F5F7]">
            <h3 class="text-lg font-semibold mb-3">{{ c.value.cards[2].title }}</h3>
            <p class="text-[#666666]">{{ c.value.cards[2].desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== Section 10: AI Ecosystem ==================== -->
    <section class="py-10 md:py-16 bg-[#F5F5F7] fade-in-section">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="section-title text-center mb-4">{{ c.ecosystem.title }}</h2>
        <p class="text-center text-[#666666] max-w-3xl mx-auto mb-8">
          {{ c.ecosystem.subtitle }}

        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:auto-rows-fr items-stretch">
          <!-- 活动 -->
          <div class="p-6 rounded-xl bg-white border border-[#E5E5E5] h-full flex flex-col">
            <h4 class="text-base font-semibold text-[#F04045] mb-3">{{ c.ecosystem.events.title }}</h4>
            <p class="text-sm text-[#666666] mb-3">{{ c.ecosystem.events.desc }}</p>
            <div class="grid grid-cols-2 gap-2">
              <div class="rounded-lg overflow-hidden aspect-[11/5]">
                <img src="@/assets/st/hd/fh.webp" class="w-full h-full object-cover" alt="" />
              </div>
              <div class="rounded-lg overflow-hidden aspect-[11/5]">
                <img src="@/assets/st/hd/lt.webp" class="w-full h-full object-cover" alt="" />
              </div>
              <div class="rounded-lg overflow-hidden aspect-[11/5]">
                <img src="@/assets/st/hd/sl.webp" class="w-full h-full object-cover" alt="" />
              </div>
              <div class="rounded-lg overflow-hidden aspect-[11/5]">
                <img src="@/assets/st/hd/zt.webp" class="w-full h-full object-cover" alt="" />
              </div>
            </div>
          </div>
          <!-- 咨询与培训 -->
          <div class="p-6 rounded-xl bg-white border border-[#E5E5E5] h-full flex flex-col">
            <h4 class="text-base font-semibold text-[#F04045] mb-3">{{ c.ecosystem.consulting.title }}</h4>
            <p class="text-sm text-[#666666] mb-3">{{ c.ecosystem.consulting.desc }}</p>
            <div class="grid grid-cols-2 gap-3 items-stretch">
              <!-- 左侧：3 张竖向排列 -->
              <div class="flex flex-col gap-2">
                <div class="rounded-lg overflow-hidden h-24">
                  <img src="@/assets/st/zxpx/px.webp" class="w-full h-full object-cover" alt="" />
                </div>
                <div class="rounded-lg overflow-hidden h-24">
                  <img src="@/assets/st/zxpx/px1.webp" class="w-full h-full object-cover" alt="" />
                </div>
                <div class="rounded-lg overflow-hidden h-24">
                  <img src="@/assets/st/zxpx/px2.webp" class="w-full h-full object-cover" alt="" />
                </div>
              </div>
              <!-- 右侧：3.png -->
              <div class="rounded-lg overflow-hidden relative">
                <img src="@/assets/st/zxpx/3.webp" class="absolute inset-0 w-full h-full object-cover" alt="" />
              </div>
            </div>
          </div>
          <!-- 课程 -->
          <div class="p-6 rounded-xl bg-white border border-[#E5E5E5] h-full flex flex-col">
            <h4 class="text-base font-semibold text-[#F04045] mb-3">{{ c.ecosystem.courses.title }}</h4>
            <p class="text-sm text-[#666666] mb-3">{{ c.ecosystem.courses.desc }}</p>
            <div class="grid grid-cols-2 gap-3 flex-1 items-center">
              <div
                v-for="img in kcImages"
                :key="img"
                class="rounded-lg overflow-hidden bg-[#F5F5F7] h-24 md:h-28 flex items-center justify-center"
              >
                <img :src="img" :alt="c.ecosystem.courses.imageAlt" class="w-full h-full object-contain" />
              </div>
            </div>
          </div>
          <!-- 书籍 -->
          <div class="p-6 rounded-xl bg-white border border-[#E5E5E5] h-full flex flex-col">
            <h4 class="text-base font-semibold text-[#F04045] mb-4">{{ c.ecosystem.books.title }}</h4>
            <p class="text-sm text-[#666666]">{{ c.ecosystem.books.desc }}</p>
            <div class="grid grid-cols-3 gap-3 flex-1 items-center">
              <div class="text-center">
                <div class="rounded-lg overflow-hidden bg-[#F5F5F7] h-32 md:h-36 mb-2">
                  <img src="@/assets/st/sj/24xs.webp" class="w-full h-full object-contain" :alt="c.ecosystem.books.items[0].alt" />
                </div>
                <p class="text-xs font-semibold text-[#1A1A1A]">{{ c.ecosystem.books.items[0].title }}</p>
                <p class="text-[11px] text-[#666666] mt-1 leading-relaxed">{{ c.ecosystem.books.items[0].publisher }}</p>
                <p class="text-[11px] text-[#666666] mt-1 leading-relaxed">{{ c.ecosystem.books.items[0].desc }}</p>
              </div>
              <div class="text-center">
                <div class="rounded-lg overflow-hidden bg-[#F5F5F7] h-32 md:h-36 mb-2">
                  <img src="@/assets/st/sj/jsAI.webp" class="w-full h-full object-contain" :alt="c.ecosystem.books.items[1].alt" />
                </div>
                <p class="text-xs font-semibold text-[#1A1A1A]">{{ c.ecosystem.books.items[1].title }}</p>
                <p class="text-[11px] text-[#666666] mt-1 leading-relaxed">{{ c.ecosystem.books.items[1].publisher }}</p>
                <p class="text-[11px] text-[#666666] mt-1 leading-relaxed">{{ c.ecosystem.books.items[1].desc }}</p>
              </div>
              <div class="text-center">
                <div class="rounded-lg overflow-hidden bg-[#F5F5F7] h-32 md:h-36 mb-2">
                  <img src="@/assets/st/sj/opc.webp" class="w-full h-full object-contain object-bottom" :alt="c.ecosystem.books.items[2].alt" />
                </div>
                <p class="text-xs font-semibold text-[#1A1A1A]">{{ c.ecosystem.books.items[2].title }}</p>
                <p class="text-[11px] text-[#666666] mt-1 leading-relaxed">{{ c.ecosystem.books.items[2].publisher }}</p>
                <p class="text-[11px] text-[#666666] mt-1 leading-relaxed">{{ c.ecosystem.books.items[2].desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== Section 11: Ending ==================== -->
    <section class="py-10 md:py-16 bg-white text-[#1A1A1A] fade-in-section">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="section-title text-center mb-6">
          {{ c.ending.title }}
        </h2>
        <p class="text-center text-[#666666] max-w-3xl mx-auto mb-8 text-lg">
          {{ c.ending.subtitle }}
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div class="p-6 rounded-xl bg-[#F5F5F7] border border-[#E5E5E5]">
            <!-- <span class="text-[#F04045] font-semibold text-sm">01</span> -->
            <h4 class="font-semibold mt-2 mb-2">{{ c.ending.cards[0].title }}</h4>
            <p class="text-sm text-[#666666]">{{ c.ending.cards[0].desc }}</p>
          </div>
          <div class="p-6 rounded-xl bg-[#F5F5F7] border border-[#E5E5E5]">
            <!-- <span class="text-[#F04045] font-semibold text-sm">02</span> -->
            <h4 class="font-semibold mt-2 mb-2">{{ c.ending.cards[1].title }}</h4>
            <p class="text-sm text-[#666666]">{{ c.ending.cards[1].desc }}</p>
          </div>
          <div class="p-6 rounded-xl bg-[#F5F5F7] border border-[#E5E5E5]">
            <!-- <span class="text-[#F04045] font-semibold text-sm">03</span> -->
            <h4 class="font-semibold mt-2 mb-2">{{ c.ending.cards[2].title }}</h4>
            <p class="text-sm text-[#666666]">{{ c.ending.cards[2].desc }}</p>
          </div>
          <div class="p-6 rounded-xl bg-[#F5F5F7] border border-[#E5E5E5]">
            <!-- <span class="text-[#F04045] font-semibold text-sm">04</span> -->
            <h4 class="font-semibold mt-2 mb-2">{{ c.ending.cards[3].title }}</h4>
            <p class="text-sm text-[#666666]">{{ c.ending.cards[3].desc }}</p>
          </div>
        </div>

        <p class="text-center text-2xl md:text-3xl font-semibold text-[#F04045] mb-8">
          {{ c.ending.slogan }}
        </p>

        <div class="text-center">
          <!-- <p class="text-[#999999] text-sm mb-2">OPC Hub：园区级 AI 能力生产与交易平台</p> -->
          <p class="text-[#1A1A1A] text-lg font-semibold">{{ c.ending.contactPrompt }}</p>
          <div class="mt-6 flex justify-center">
            <div class="w-[160px] h-[160px] rounded-xl bg-white overflow-hidden border-2 border-[#E5E5E5] flex items-center justify-center">
              <img src="@/assets/lxwm.webp" :alt="c.ending.qrAlt" class="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>


  </div>
</template>

<style scoped>
.fade-in-section {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}
.fade-in-visible {
  opacity: 1;
  transform: translateY(0);
}

.stat-card {
  transition: all 0.3s ease;
}
.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(240, 64, 69, 0.12);
}

.scroll-up-enter-active,
.scroll-up-leave-active {
  transition: all 0.4s ease;
}
.scroll-up-enter-from {
  transform: translateY(100%);
  opacity: 0;
}
.scroll-up-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
