<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, inject } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import { useContent } from '@/i18n/useContent'
import { agentStationContent } from '@/content/agentstation'
import BrandButton from '../../components/BrandButton.vue'
import AppImage from '../../components/AppImage.vue'

const c = useContent(agentStationContent)

const openModal = inject<() => void>('agentStationOpenModal')
const BOOKING_URL = 'https://ruanjimu.feishu.cn/share/base/form/shrcnO4m2xMY6ma9mnYSuAkSSKg'
const goBooking = () => window.open(BOOKING_URL, '_blank')

const leftRef = ref<HTMLElement | null>(null)
const rightRef = ref<HTMLElement | null>(null)

useScrollReveal(leftRef, { y: 30 })
useScrollReveal(rightRef, { y: 30, delay: 0.15 })

const HERO_IMAGE_SRCS = [
  new URL('@/assets/zft/hero1.webp', import.meta.url).href,
  new URL('@/assets/zft/hero2.webp', import.meta.url).href,
  new URL('@/assets/zft/hero3.webp', import.meta.url).href,
]
const heroImages = computed(() => HERO_IMAGE_SRCS.map((src) => ({ src, alt: c.value.hero.imageAlt })))

const currentIndex = ref(0)
let timer: ReturnType<typeof setInterval> | null = null

function startCarousel() {
  timer = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % HERO_IMAGE_SRCS.length
  }, 3000)
}

function stopCarousel() {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

onMounted(startCarousel)
onUnmounted(stopCarousel)
</script>

<template>
  <section
    class="relative overflow-hidden bg-surface-base pt-8 md:pt-12 pb-8 md:pb-12"
  >
    <!-- 右上绿色光晕 -->
    <div
      class="absolute -top-40 -right-40 w-[500px] h-[500px] md:w-[600px] md:h-[600px] rounded-full pointer-events-none"
      style="
        background: radial-gradient(
          circle,
          rgba(85, 173, 115, 0.18) 0%,
          transparent 70%
        );
        filter: blur(60px);
      "
    />

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24 items-center"
      >
        <!-- 左侧 -->
        <div ref="leftRef">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6F5FB] text-[#1A8BC4] text-xs font-medium tracking-wide">
            {{ c.hero.badge }}
          </div>

          <h1
            class="mt-5 page-title sm:whitespace-nowrap"
          >
            {{ c.hero.title }}
          </h1>

          <p
            class="mt-3 text-[26px] md:text-[34px] lg:text-[40px] font-semibold bg-gradient-to-br from-[#2DB4E6] to-[#1A8BC4] bg-clip-text text-transparent leading-tight"
          >
            {{ c.hero.tagline }}
          </p>

          <p class="mt-2 text-sm text-ink-tertiary tracking-wide uppercase">
            {{ c.hero.taglineCaps }}
          </p>

          <p
            class="page-subtitle max-w-lg"
          >
            {{ c.hero.subtitle }}
          </p>

          <div
            class="flex flex-wrap items-center gap-3 mt-6 text-sm text-ink-tertiary"
          >
            <span>{{ c.hero.features[0] }}</span>
            <span class="w-1 h-1 rounded-full bg-ink-tertiary" />
            <span>{{ c.hero.features[1] }}</span>
            <span class="w-1 h-1 rounded-full bg-ink-tertiary" />
            <span>{{ c.hero.features[2] }}</span>
            <span class="w-1 h-1 rounded-full bg-ink-tertiary" />
            <span>{{ c.hero.features[3] }}</span>
          </div>

          <div class="mt-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E6F5FB] text-xs font-medium text-[#1A8BC4]">
            <span>{{ c.hero.badges[0] }}</span>
            <span class="w-1.5 h-1.5 rounded-full bg-[#2DB4E6]"></span>
            <span>{{ c.hero.badges[1] }}</span>
            <span class="w-1.5 h-1.5 rounded-full bg-[#2DB4E6]"></span>
            <span>{{ c.hero.badges[2] }}</span>
          </div>
          <div class="mt-5 flex flex-wrap items-center gap-4">
            <BrandButton class="!bg-none !bg-[#2DB4E6]" @click="goBooking">{{ c.hero.bookCta }}</BrandButton>
            <BrandButton variant="ghost" class="hover:!border-[#2DB4E6] hover:!text-[#2DB4E6]" arrow @click="openModal">
              {{ c.hero.versionsCta }}
            </BrandButton>
          </div>
        </div>

        <!-- 右侧 -->
        <div ref="rightRef" class="flex justify-center">
          <div
            class="relative w-full max-w-md aspect-square rounded-2xl bg-surface-muted border border-line shadow-[0_20px_60px_rgba(15,31,23,0.12)] overflow-hidden"
          >
            <div class="flex h-full transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
              <AppImage
                v-for="(img, i) in heroImages"
                :key="img.src"
                :src="img.src"
                :alt="img.alt"
                class="w-full h-full flex-shrink-0 object-contain rounded-2xl"
                :priority="i === 0"
              />
            </div>
            <!-- Dots -->
            <div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              <button
                v-for="(_, idx) in heroImages"
                :key="idx"
                class="w-2 h-2 rounded-full transition-all"
                :class="idx === currentIndex ? 'bg-[#2DB4E6] w-4' : 'bg-white/60'"
                @click="currentIndex = idx; stopCarousel(); startCarousel();"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
