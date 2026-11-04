<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import AppImage from './AppImage.vue'
import rjmBanana from '@/assets/rjm_banana.webp'
import chatuBanana from '@/assets/ChatU_banana.webp'

const { t } = useI18n()

const slides = [
  { src: rjmBanana, alt: '软积木' },
  { src: chatuBanana, alt: 'ChatU' },
  // { src: zftBanana, alt: '智方体' },
]

const current = ref(0)
let autoTimer: ReturnType<typeof setInterval> | null = null
let manualDelayTimer: ReturnType<typeof setTimeout> | null = null
const AUTOPLAY_DELAY = 3000
const AUTOPLAY_INTERVAL = 3000

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
    current.value = (current.value + 1) % slides.length
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
    current.value = (current.value + 1) % slides.length
  } else if (dragDelta.value > DRAG_THRESHOLD) {
    current.value = (current.value - 1 + slides.length) % slides.length
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
      class="relative w-full h-[220px] sm:aspect-[3392/1120] sm:h-auto overflow-hidden cursor-grab active:cursor-grabbing select-none touch-pan-y"
      @pointerdown="onPointerDown"
      @pointermove="onPointerMove"
      @pointerup="onPointerUp"
      @pointercancel="onPointerCancel"
      @dragstart.prevent
    >
      <!-- Slides track -->
      <div class="grid h-full w-full" style="grid-template-columns: 100%; grid-template-rows: 100%;">
        <div
          v-for="(slide, i) in slides"
          :key="i"
          class="relative col-start-1 row-start-1 h-full w-full"
          :class="isDragging ? '' : 'transition-transform duration-500 ease-out'"
          :style="{
            transform: `translateX(calc(${(i - current) * 100}% + ${dragOffset}px))`
          }"
        >
          <AppImage
            :src="slide.src"
            :alt="slide.alt"
            class="w-full h-full object-cover"
            :priority="i === 0"
            draggable="false"
          />
          <!-- Slide 1 (rjm_banana) text -->
          <!-- <div
            v-if="i === 0"
            class="absolute inset-0 flex items-center"
          >
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div class="max-w-xl">
                <p class="text-4xl md:text-5xl lg:text-6xZl font-bold text-[#55AD73] drop-shadow-lg tracking-widest">{{ t('home.hero.slide1Title') }}</p>
                <p class="mt-8 text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] drop-shadow-lg tracking-wider">{{ t('home.hero.slide1Sub') }}</p>
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
              <div class="max-w-xl">
                <p class="text-4xl md:text-5xl lg:text-6xl font-bold text-[#433487] drop-shadow-lg tracking-widest">{{ t('home.hero.slide2Title') }}</p>
                <p class="mt-6 text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A1A1A] drop-shadow-lg tracking-wider">{{ t('home.hero.slide2Sub') }}</p>
                <p class="mt-6 text-lg md:text-xl lg:text-2xl font-semibold text-ink-secondary drop-shadow-lg tracking-wide">{{ t('home.hero.slide2Desc1') }}</p>
                <p class="mt-6 text-lg md:text-xl lg:text-2xl font-semibold text-[#1A1A1A] drop-shadow-lg tracking-wide">{{ t('home.hero.slide2Desc2') }}</p>
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
                <p class="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A8BC4] drop-shadow-lg tracking-widest">{{ t('home.hero.slide3Title') }}</p>
                <p class="mt-6 text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A1A1A] drop-shadow-lg tracking-wider">{{ t('home.hero.slide3Sub') }}</p>
                <p class="mt-6 text-lg md:text-xl lg:text-2xl font-semibold text-ink-secondary drop-shadow-lg tracking-wide">{{ t('home.hero.slide3Desc1') }}</p>
                <p class="mt-6 text-lg md:text-xl lg:text-2xl font-semibold text-[#1A1A1A] drop-shadow-lg tracking-wide">{{ t('home.hero.slide3Desc2') }}</p>
              </div>
            </div>
          </div> -->
        </div>
      </div>

      <!-- Indicators -->
      <div class="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 md:gap-3">
        <button
          v-for="(_, i) in slides"
          :key="i"
          class="transition-all duration-300 rounded-full"
          :class="
            i === current
              ? 'w-6 md:w-8 h-2 md:h-2.5 bg-white'
              : 'w-2 md:w-2.5 h-2 md:h-2.5 bg-white/50 hover:bg-white/70'
          "
          @click="go(i)"
          :aria-label="`切换到第 ${i + 1} 张`"
        />
      </div>
    </div>
  </section>
</template>
