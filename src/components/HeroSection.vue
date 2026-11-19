<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'
import HeroArt from './HeroArt.vue'
import HeroChatuArt from './HeroChatuArt.vue'

const { t, locale } = useI18n()

// 第一张横幅是分层动画版（HeroArt）：标题和图标文字画在图里，中文版用中文文字层，其他语言用英文文字层
const isChinese = computed(() => locale.value === 'zh-CN')
const slides = computed(() => [
  // 手机上横幅比例比原图窄，左右会被裁掉：第一张的文字在左侧，所以手机上靠左显示，保证标题完整
  {
    art: true,
    chatu: false,
    src: '',
    alt: isChinese.value ? '软积木：打通企业 AI 落地最后三公里' : 'CubixAI: Bridging the Last Mile of Enterprise AI Adoption',
    position: '',
  },
  // 第二张 ChatU 横幅：标志外圈光环旋转（HeroChatuArt），文字为页面上叠加的多语言文字
  { art: false, chatu: true, src: '', alt: 'ChatU', position: '' },
  // { src: zftBanana, alt: '智方体' },
])

const current = ref(0)
let autoTimer: ReturnType<typeof setInterval> | null = null
let manualDelayTimer: ReturnType<typeof setTimeout> | null = null
// 第一张横幅有入场动画，每张停留 5 秒，让动画能完整看到
const AUTOPLAY_DELAY = 5000
const AUTOPLAY_INTERVAL = 5000

// Drag/swipe state
const isDragging = ref(false)
const dragStartX = ref(0)
const dragCurrentX = ref(0)
const dragDelta = ref(0)
const dragOffset = ref(0)
const currentPointerId = ref<number | null>(null)
const DRAG_THRESHOLD = 50

let windowPointerUpHandler: ((e: PointerEvent) => void) | null = null

function startAutoplay() {
  if (autoTimer) clearInterval(autoTimer)
  autoTimer = setInterval(() => {
    current.value = (current.value + 1) % slides.value.length
  }, AUTOPLAY_INTERVAL)
}

function stopAutoplay() {
  if (autoTimer) {
    clearInterval(autoTimer)
    autoTimer = null
  }
}

function scheduleAutoplayAfterInteraction() {
  if (manualDelayTimer) clearTimeout(manualDelayTimer)
  stopAutoplay()
  manualDelayTimer = setTimeout(() => {
    startAutoplay()
  }, AUTOPLAY_DELAY)
}

function handlePointerStart(clientX: number) {
  isDragging.value = true
  dragStartX.value = clientX
  dragCurrentX.value = clientX
  dragDelta.value = 0
  dragOffset.value = 0
  stopAutoplay()
}

function handlePointerMove(clientX: number) {
  if (!isDragging.value) return
  dragCurrentX.value = clientX
  dragDelta.value = dragCurrentX.value - dragStartX.value
  dragOffset.value = dragDelta.value
}

function handlePointerEnd() {
  if (!isDragging.value) return
  isDragging.value = false
  currentPointerId.value = null
  if (dragDelta.value < -DRAG_THRESHOLD) {
    current.value = (current.value + 1) % slides.value.length
  } else if (dragDelta.value > DRAG_THRESHOLD) {
    current.value = (current.value - 1 + slides.value.length) % slides.value.length
  }
  dragDelta.value = 0
  dragOffset.value = 0
  dragStartX.value = 0
  dragCurrentX.value = 0
  removeWindowPointerUpListener()
  scheduleAutoplayAfterInteraction()
}

function removeWindowPointerUpListener() {
  if (windowPointerUpHandler) {
    window.removeEventListener('pointerup', windowPointerUpHandler)
    windowPointerUpHandler = null
  }
}

function onPointerDown(e: PointerEvent) {
  if (isDragging.value) return
  // 按在底部圆点上时不进入拖动：否则容器捕获指针后，圆点按钮收不到 click，无法切换
  if ((e.target as HTMLElement | null)?.closest('button')) return
  const target = e.currentTarget as HTMLElement
  try {
    target.setPointerCapture(e.pointerId)
  } catch {
    // ignore if capture fails
  }
  currentPointerId.value = e.pointerId
  handlePointerStart(e.clientX)
  windowPointerUpHandler = (ev: PointerEvent) => {
    if (currentPointerId.value !== null && ev.pointerId !== currentPointerId.value) return
    handlePointerEnd()
  }
  window.addEventListener('pointerup', windowPointerUpHandler)
}

function onPointerMove(e: PointerEvent) {
  if (!isDragging.value || currentPointerId.value === null) return
  if (e.pointerId !== currentPointerId.value) return
  // Safety: if no button is pressed, the pointer was released without a pointerup event
  if (e.buttons === 0) {
    handlePointerEnd()
    return
  }
  handlePointerMove(e.clientX)
}

function onPointerUp(e: PointerEvent) {
  if (!isDragging.value || currentPointerId.value === null) return
  if (e.pointerId !== currentPointerId.value) return
  handlePointerEnd()
}

function onPointerCancel(e: PointerEvent) {
  if (!isDragging.value || currentPointerId.value === null) return
  if (e.pointerId !== currentPointerId.value) return
  handlePointerEnd()
}

const go = (index: number) => {
  current.value = index
  scheduleAutoplayAfterInteraction()
}
// 手动切换：左右箭头按钮、键盘左右方向键（焦点在横幅内时），切换后自动轮播暂停一会儿
const prev = () => go((current.value - 1 + slides.value.length) % slides.value.length)
const next = () => go((current.value + 1) % slides.value.length)
function onKeydown(e: KeyboardEvent) {
  if (e.key === 'ArrowLeft') {
    e.preventDefault()
    prev()
  } else if (e.key === 'ArrowRight') {
    e.preventDefault()
    next()
  }
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
  if (manualDelayTimer) clearTimeout(manualDelayTimer)
  removeWindowPointerUpListener()
})
</script>

<template>
  <section class="relative w-full overflow-hidden bg-surface-base">
    <div
      class="group relative w-full aspect-[7/4] sm:aspect-[3392/1120] overflow-hidden [container-type:inline-size] cursor-grab active:cursor-grabbing select-none touch-pan-y"
      role="region"
      aria-roledescription="carousel"
      :aria-label="t('home.hero.carousel')"
      @keydown="onKeydown"
      @pointerdown="onPointerDown"
      @pointermove="onPointerMove"
      @pointerup="onPointerUp"
      @pointercancel="onPointerCancel"
      @dragstart.prevent
    >
      <!-- Slides track -->
      <div class="grid h-full w-full" style="grid-template-columns: 100%; grid-template-rows: 100%;">
        <!-- 每张横幅裁到自己的范围：手机上横幅图比屏幕宽，不裁的话第二张会盖住第一张的右侧 -->
        <div
          v-for="(slide, i) in slides"
          :key="i"
          class="relative col-start-1 row-start-1 h-full w-full overflow-hidden"
          :class="isDragging ? '' : 'transition-transform duration-500 ease-out'"
          :style="{
            transform: `translateX(calc(${(i - current) * 100}% + ${dragOffset}px))`
          }"
        >
          <HeroArt
            v-if="slide.art"
            :lang="isChinese ? 'zh' : 'en'"
            :active="current === i"
            :alt="slide.alt"
          />
          <HeroChatuArt v-else-if="slide.chatu" :alt="slide.alt" />
          <!-- Slide 1 (rjm_banana) text -->
          <!-- <div
            v-if="i === 0"
            class="absolute inset-0 flex items-center"
          >
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div class="max-w-xl">
                <p class="text-4xl md:text-5xl lg:text-6xZl font-semibold text-[#55AD73] drop-shadow-lg tracking-wide">{{ t('home.hero.slide1Title') }}</p>
                <p class="mt-8 text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] drop-shadow-lg tracking-wide">{{ t('home.hero.slide1Sub') }}</p>
                <p class="mt-8 text-xl md:text-2xl lg:text-3xl font-semibold text-[#1A1A1A] drop-shadow-lg tracking-wide">{{ t('home.hero.slide1Desc') }}</p>
              </div>
            </div>
          </div> -->
          <!-- Slide 2 (ChatU_banana) text -->
          <div
            v-if="i === 1"
            class="absolute inset-0 flex items-center"
          >
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <!-- 文字按横幅宽度（cqw）等比缩放，保证任何屏幕宽度下都完整落在横幅内；宽屏下不超过原来的 lg 尺寸 -->
              <div class="max-w-[68cqw] sm:max-w-[min(40cqw,36rem)]">
                <p class="text-[length:7cqw] sm:text-[length:min(4.2cqw,3.75rem)] leading-none font-semibold text-[#433487]">{{ t('home.hero.slide2Title') }}</p>
                <p class="mt-[2.4cqw] sm:mt-[min(1.67cqw,1.5rem)] text-[length:4.4cqw] sm:text-[length:min(2.5cqw,2.25rem)] leading-[1.15] font-semibold text-[#1A1A1A]">{{ t('home.hero.slide2Sub') }}</p>
                <p class="mt-[2.4cqw] sm:mt-[min(1.67cqw,1.5rem)] text-[length:3.2cqw] sm:text-[length:min(1.67cqw,1.5rem)] leading-[1.35] font-semibold text-ink-secondary">{{ t('home.hero.slide2Desc1') }}</p>
                <p class="mt-[2.4cqw] sm:mt-[min(1.67cqw,1.5rem)] text-[length:3.2cqw] sm:text-[length:min(1.67cqw,1.5rem)] leading-[1.35] font-semibold text-[#1A1A1A]">{{ t('home.hero.slide2Desc2') }}</p>
              </div>
            </div>
          </div>
          <!-- Slide 3 (zft_banana1) text -->
          <!-- <div
            v-if="i === 2"
            class="absolute inset-0 flex items-center"
          >
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div class="max-w-xl">
                <p class="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1A8BC4] drop-shadow-lg tracking-wide">{{ t('home.hero.slide3Title') }}</p>
                <p class="mt-6 text-2xl md:text-3xl lg:text-4xl font-semibold text-[#1A1A1A] drop-shadow-lg tracking-wide">{{ t('home.hero.slide3Sub') }}</p>
                <p class="mt-6 text-lg md:text-xl lg:text-2xl font-semibold text-ink-secondary drop-shadow-lg tracking-wide">{{ t('home.hero.slide3Desc1') }}</p>
                <p class="mt-6 text-lg md:text-xl lg:text-2xl font-semibold text-[#1A1A1A] drop-shadow-lg tracking-wide">{{ t('home.hero.slide3Desc2') }}</p>
              </div>
            </div>
          </div> -->
        </div>
      </div>

      <!-- 两侧大箭头（大屏）：鼠标移到横幅上时出现，触屏设备上一直显示；放在横幅左右边缘，不压住文字 -->
      <button
        v-for="dir in (['prev', 'next'] as const)"
        :key="dir"
        type="button"
        class="hero-arrow absolute top-1/2 -translate-y-1/2 z-20 hidden lg:flex items-center justify-center w-9 h-9 xl:w-10 xl:h-10 2xl:w-11 2xl:h-11 rounded-full bg-white/80 backdrop-blur-md text-ink-primary shadow-[0_4px_16px_rgba(15,31,23,0.12)] ring-1 ring-black/5 transition-all duration-300 [@media(hover:hover)]:hover:bg-white [@media(hover:hover)]:hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-deep"
        :class="dir === 'prev' ? 'left-2 xl:left-3 2xl:left-5' : 'right-2 xl:right-3 2xl:right-5'"
        :aria-label="t(`home.hero.${dir}`)"
        @click="dir === 'prev' ? prev() : next()"
      >
        <Icon :icon="dir === 'prev' ? 'lucide:chevron-left' : 'lucide:chevron-right'" class="w-5 h-5 2xl:w-6 2xl:h-6" />
      </button>

      <!-- 底部控制条：上一张 / 指示点 / 下一张，所有屏幕都显示 -->
      <div
        class="absolute bottom-1.5 sm:bottom-3 md:bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-0.5 sm:gap-1 rounded-full bg-white/75 backdrop-blur-md p-0.5 sm:p-1 shadow-[0_2px_10px_rgba(15,31,23,0.10)] ring-1 ring-black/5"
      >
        <button
          type="button"
          class="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full text-ink-secondary transition-colors [@media(hover:hover)]:hover:bg-black/5 [@media(hover:hover)]:hover:text-ink-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-deep"
          :aria-label="t('home.hero.prev')"
          @click="prev"
        >
          <Icon icon="lucide:chevron-left" class="w-4 h-4" />
        </button>
        <div class="flex items-center gap-1.5 px-1">
          <button
            v-for="(_, i) in slides"
            :key="i"
            type="button"
            class="h-1.5 sm:h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-deep focus-visible:ring-offset-1"
            :class="i === current ? 'w-5 sm:w-6 bg-brand-deep' : 'w-1.5 sm:w-2 bg-ink-primary/20 [@media(hover:hover)]:hover:bg-ink-primary/40'"
            :aria-label="t('home.hero.goTo', { n: i + 1 })"
            :aria-current="i === current ? 'true' : undefined"
            @click="go(i)"
          />
        </div>
        <button
          type="button"
          class="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full text-ink-secondary transition-colors [@media(hover:hover)]:hover:bg-black/5 [@media(hover:hover)]:hover:text-ink-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-deep"
          :aria-label="t('home.hero.next')"
          @click="next"
        >
          <Icon icon="lucide:chevron-right" class="w-4 h-4" />
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* 有鼠标的设备上，两侧箭头平时隐藏，鼠标移到横幅上或键盘聚焦时出现；触屏设备上一直显示 */
@media (hover: hover) {
  .hero-arrow {
    opacity: 0;
  }
  .group:hover .hero-arrow,
  .hero-arrow:focus-visible {
    opacity: 1;
  }
}
</style>
