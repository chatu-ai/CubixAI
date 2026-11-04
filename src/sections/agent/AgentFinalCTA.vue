<script setup lang="ts">
import { ref, inject } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import AppImage from '../../components/AppImage.vue'
import BrandButton from '../../components/BrandButton.vue'
import jszcImg from '@/assets/jszc.webp'
import lxhsqImg from '@/assets/lxwm.webp'
import wjhImg from '@/assets/wjh.webp'

const openModal = inject<() => void>('agentStationOpenModal')
const BOOKING_URL = 'https://ruanjimu.feishu.cn/share/base/form/shrcnO4m2xMY6ma9mnYSuAkSSKg'
const goBooking = () => window.open(BOOKING_URL, '_blank')

const contentRef = ref<HTMLElement | null>(null)
const cardsRef = ref<HTMLElement | null>(null)

useScrollReveal(contentRef, { y: 30 })
useScrollReveal(cardsRef, { y: 30, delay: 0.2 })

const items = [
  {
    title: '加入社群',
    desc: '和 8 城用户交流经验，获取最新玩法',
    image: lxhsqImg,
  },
  {
    title: '技术支持',
    desc: '24 小时智能客服，遇到问题扫码即问',
    image: jszcImg,
  },
  {
    title: '渠道招募',
    desc: '成为智方体合作伙伴，共享 AI 工作站市场',
    image: wjhImg,
  },
]
</script>

<template>
  <section class="relative overflow-hidden py-20 md:py-[120px] bg-white">
    <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref="contentRef" class="text-center mb-12">
        <h2
          class="text-4xl md:text-5xl lg:text-[64px] font-semibold text-ink-primary tracking-tight leading-tight"
        >
          你可靠的 AI 工作站
        </h2>
        <p class="mt-4 text-sm text-ink-tertiary tracking-[0.2em] uppercase">
          WORK SMART · STAY SAFE
        </p>
        <p class="mt-4 text-xl text-ink-secondary">
          不用装、不用配，开箱 2 分钟，一台真正属于你的 AI。
        </p>
        <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
          <BrandButton class="!bg-none !bg-[#2DB4E6]" @click="goBooking">立即预订 ¥3,999</BrandButton>
          <BrandButton variant="ghost" class="hover:!border-[#2DB4E6] hover:!text-[#2DB4E6]" @click="openModal">
            商务合作 · 渠道加盟
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
            <span v-else class="text-sm text-ink-tertiary">{{ item.title }}图片占位</span>
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
