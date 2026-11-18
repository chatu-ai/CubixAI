<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useScrollReveal } from '../composables/useScrollReveal'

const { t } = useI18n()
const titleRef = ref<HTMLElement | null>(null)
useScrollReveal(titleRef, { y: 30 })

const partners = [
  { name: 'Microsoft', image: new URL('@/assets/hzhb/Microsoft-logo.webp', import.meta.url).href },
  { name: 'NVIDIA', image: new URL('@/assets/hzhb/nvidia.webp', import.meta.url).href },
  { name: 'OpenAI', image: new URL('@/assets/hzhb/OpenAI.webp', import.meta.url).href },
  { name: 'Google', image: new URL('@/assets/hzhb/Google.webp', import.meta.url).href },
  { name: 'Amazon', image: new URL('@/assets/hzhb/amazon.webp', import.meta.url).href },
  { name: 'Oracle', image: new URL('@/assets/hzhb/oracle.webp', import.meta.url).href },
  { name: 'MiniMax', image: new URL('@/assets/hzhb/minimax.webp', import.meta.url).href },
  { name: 'Alibaba', image: new URL('@/assets/hzhb/almm.webp', import.meta.url).href },
  { name: 'Moonshot AI', image: new URL('@/assets/hzhb/yzam.webp', import.meta.url).href },
  { name: 'Baidu', image: new URL('@/assets/hzhb/baidu.webp', import.meta.url).href },
  // { name: '百度智能云', image: new URL('@/assets/hzhb/baidu1.webp', import.meta.url).href },
  { name: 'DeepSeek', image: new URL('@/assets/hzhb/deepseek.webp', import.meta.url).href },
  // { name: '华为', image: new URL('@/assets/hzhb/huawei.webp', import.meta.url).href },
  { name: 'Volcano Engine', image: new URL('@/assets/hzhb/huoshan.webp', import.meta.url).href },
  { name: 'JD.com', image: new URL('@/assets/hzhb/jd.webp', import.meta.url).href },
  { name: 'ByteDance', image: new URL('@/assets/hzhb/zjtd.webp', import.meta.url).href },
  { name: 'Zhipu AI', image: new URL('@/assets/hzhb/zp.webp', import.meta.url).href },
]
</script>

<template>
  <section class="py-10 md:py-16 bg-surface-base overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref="titleRef" class="text-center mb-16 md:mb-24">
        <h2 class="section-title">
          {{ t('home.partners.title') }}
        </h2>
      </div>

      <div class="flex flex-wrap justify-center items-center gap-x-10 gap-y-10 md:gap-x-16 md:gap-y-12">
        <div
          v-for="p in partners"
          :key="p.name"
          class="w-28 h-14 md:w-36 md:h-16 lg:w-44 lg:h-20 flex items-center justify-center"
        >
          <img
            :src="p.image"
            :alt="p.name"
            class="max-w-full max-h-full object-contain opacity-100 transition-all duration-300"
            :class="(p.name === 'Amazon' || p.name === 'JD.com') ? 'max-h-[70%]' : ''"
          />
        </div>
      </div>
    </div>
  </section>
</template>
