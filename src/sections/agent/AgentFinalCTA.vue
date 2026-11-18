<script setup lang="ts">
import { ref, computed, inject } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import { useContent } from '@/i18n/useContent'
import { agentStationContent } from '@/content/agentstation'
import AppImage from '../../components/AppImage.vue'
import BrandButton from '../../components/BrandButton.vue'
import jszcImg from '@/assets/jszc.webp'
import lxhsqImg from '@/assets/lxwm.webp'
import wjhImg from '@/assets/wjh.webp'

const c = useContent(agentStationContent)

const openModal = inject<() => void>('agentStationOpenModal')
const BOOKING_URL = 'https://ruanjimu.feishu.cn/share/base/form/shrcnO4m2xMY6ma9mnYSuAkSSKg'
const goBooking = () => window.open(BOOKING_URL, '_blank')

const contentRef = ref<HTMLElement | null>(null)
const cardsRef = ref<HTMLElement | null>(null)

useScrollReveal(contentRef, { y: 30 })
useScrollReveal(cardsRef, { y: 30, delay: 0.2 })

const ITEM_IMAGES = [lxhsqImg, jszcImg, wjhImg]

const items = computed(() => c.value.finalCta.items.map((item, i) => ({ ...item, image: ITEM_IMAGES[i] })))
</script>

<template>
  <section class="relative overflow-hidden py-10 md:py-16 bg-white">
    <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref="contentRef" class="text-center mb-8">
        <h2
          class="text-4xl md:text-5xl lg:text-[64px] font-semibold text-ink-primary tracking-tight leading-tight"
        >
          {{ c.finalCta.title }}
        </h2>
        <p class="mt-4 text-sm text-ink-tertiary tracking-wide uppercase">
          {{ c.finalCta.eyebrow }}
        </p>
        <p class="mt-4 text-xl text-ink-secondary">
          {{ c.finalCta.subtitle }}
        </p>
        <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
          <BrandButton class="!bg-none !bg-[#2DB4E6]" @click="goBooking">{{ c.finalCta.bookCta }}</BrandButton>
          <BrandButton variant="ghost" class="hover:!border-[#2DB4E6] hover:!text-[#2DB4E6]" @click="openModal">
            {{ c.finalCta.partnerCta }}
          </BrandButton>
        </div>
      </div>

      <div ref="cardsRef" class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          v-for="item in items"
          :key="item.title"
          class="flex flex-col items-center text-center rounded-2xl bg-surface-base border border-line overflow-hidden"
        >
          <!-- 图片 -->
          <div class="w-36 h-36 md:w-40 md:h-40 bg-white flex items-center justify-center overflow-hidden p-3 mt-6 rounded-xl">
            <AppImage
              v-if="item.image"
              :src="item.image"
              :alt="item.title"
              class="w-full h-full object-contain"
            />
            <span v-else class="text-sm text-ink-tertiary">{{ item.title }}{{ c.finalCta.imagePlaceholder }}</span>
          </div>

          <div class="p-6 flex flex-col items-center">
            <h3 class="text-lg font-semibold text-ink-primary">{{ item.title }}</h3>
            <p class="mt-2 text-sm text-ink-secondary leading-relaxed">{{ item.desc }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
