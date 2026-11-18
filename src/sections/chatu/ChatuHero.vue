<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useScrollReveal } from '../../composables/useScrollReveal'
import Chip from '../../components/Chip.vue'
import BrandButton from '../../components/BrandButton.vue'
import AppImage from '../../components/AppImage.vue'
import { useContent } from '@/i18n/useContent'
import { chatuContent } from '@/content/chatu'

const c = useContent(chatuContent)

const leftRef = ref<HTMLElement | null>(null)
const rightRef = ref<HTMLElement | null>(null)

useScrollReveal(leftRef, { y: 30 })
useScrollReveal(rightRef, { y: 30, delay: 0.15 })

const IMAGE_SRCS = [
  new URL('@/assets/chatUqd.webp', import.meta.url).href,
  new URL('@/assets/zkht.webp', import.meta.url).href,
  new URL('@/assets/ChatU/banner3.webp', import.meta.url).href,
]
// 宣传图里有文字：非中文访客显示英文版
const BANNER3_EN = new URL('@/assets/ChatU/banner3_en.webp', import.meta.url).href
const { locale } = useI18n()

const images = computed(() =>
  IMAGE_SRCS.map((src, i) => ({
    src: i === 2 && locale.value !== 'zh-CN' ? BANNER3_EN : src,
    alt: c.value.hero.imageAlts[i] ?? '',
  })),
)

const currentIndex = ref(0)
let timer: ReturnType<typeof setInterval> | null = null

function startCarousel() {
  timer = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % IMAGE_SRCS.length
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
        class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center"
      >
        <!-- 左侧 -->
        <div ref="leftRef">
          <!-- <Chip class="!bg-[#433487]/10 !text-[#433487]">SOFTWARE · AI AGENT OS</Chip> -->

          <h1
            class="mt-2 page-title"
          >
            {{ c.hero.title }}<br />
            <span
              class="inline-block mt-2 text-[22px] md:text-[28px] lg:text-[32px] font-semibold text-ink-primary"
            >
              {{ c.hero.subtitle }}
            </span>
          </h1>

          <p class="page-subtitle max-w-xl">
            {{ c.hero.desc }}
          </p>

          <div class="flex flex-wrap gap-2 mt-6">
            <Chip v-for="chip in c.hero.chips" :key="chip" variant="muted">{{ chip }}</Chip>
          </div>

          <div class="mt-8 flex flex-wrap items-center gap-4">
            <BrandButton href="https://admin.chatu.pro/" target="_blank" class="!bg-none !bg-[#433487]">{{ c.hero.cta }}</BrandButton>
            <!-- <BrandButton variant="ghost" to="/contact" class="hover:!border-[#433487] hover:!text-[#433487]" arrow>
              查看演示
            </BrandButton> -->
          </div>
        </div>

        <!-- 右侧轮播 -->
        <div ref="rightRef" class="relative scale-105" @mouseenter="stopCarousel" @mouseleave="startCarousel">
          <div
            class="aspect-[2/1] rounded-2xl bg-surface-muted border border-line shadow-card overflow-hidden"
          >
            <div class="flex h-full transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
              <AppImage
                v-for="(img, i) in images"
                :key="img.src"
                :src="img.src"
                :alt="img.alt"
                class="w-full h-full flex-shrink-0 object-contain"
                :priority="i === 0"
              />
            </div>
          </div>
          <!-- Dots -->
          <div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            <button
              v-for="(_, idx) in images"
              :key="idx"
              class="w-2 h-2 rounded-full transition-all"
              :class="idx === currentIndex ? 'bg-[#433487] w-4' : 'bg-white/60'"
              @click="currentIndex = idx; stopCarousel(); startCarousel();"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
