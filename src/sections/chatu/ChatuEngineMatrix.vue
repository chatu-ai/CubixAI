<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { useScrollReveal } from '../../composables/useScrollReveal'

const titleRef = ref<HTMLElement | null>(null)
const gridRef = ref<HTMLElement | null>(null)

useScrollReveal(titleRef, { y: 30 })
useScrollReveal(gridRef, { y: 30, delay: 0.15 })

const engines = [
  { name: 'Claude', url: new URL('@/assets/icon/claude.webp', import.meta.url).href, color: '#412991' },
  { name: 'ChatGPT', url: new URL('@/assets/icon/ChatGPT2.webp', import.meta.url).href, color: '#D4A574' },
  { name: 'Gemini', url: new URL('@/assets/icon/Gemini.webp', import.meta.url).href, color: '#4285F4' },
  { name: 'Qwen', url: new URL('@/assets/icon/alty.webp', import.meta.url).href, color: '#12B7F5' },
  { name: 'DeepSeek', url: new URL('@/assets/icon/deepseek1.webp', import.meta.url).href, color: '#FF6A00' },
  { name: 'Kimi', url: new URL('@/assets/icon/kimi.webp', import.meta.url).href, color: '#2932E1' },
  { name: 'Minimax', url: new URL('@/assets/icon/minimax.webp', import.meta.url).href, color: '#3C8CFF' },
  { name: 'GLM', url: new URL('@/assets/icon/GLM.webp', import.meta.url).href, color: '#FF6B35' },
  { name: 'Step', url: new URL('@/assets/icon/jyxc.webp', import.meta.url).href, color: '#8B5CF6' },
  { name: 'Baichuan', url: new URL('@/assets/icon/Baichuan.webp', import.meta.url).href, color: '#4D6BFA' },
  { name: 'Taichu', url: new URL('@/assets/icon/Taichu.webp', import.meta.url).href, color: '#10B981' },
  { name: 'Doubao', url: new URL('@/assets/icon/hsyq.webp', import.meta.url).href, color: '#FF4500' },
  { name: 'Llama', url: new URL('@/assets/icon/meta.webp', import.meta.url).href, color: '#0668E1' },
  { name: 'Tencent HY', url: new URL('@/assets/icon/txhy.webp', import.meta.url).href, color: '#6366F1' },
  { name: 'ERNIE', url: new URL('@/assets/icon/wenxin.webp', import.meta.url).href, color: '#F59E0B' },
  { name: 'More...', icon: 'lucide:plus', color: '#9CA3AF' },
]
</script>

<template>
  <section class="py-10 md:py-16 bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref="titleRef" class="text-center mb-6 md:mb-8">
        <h2
          class="section-title"
        >
          不依赖特定模型，可随心切换
        </h2>
        <p
          class="mt-4 text-lg text-ink-secondary leading-relaxed max-w-3xl mx-auto"
        >
          对接全球 16+ 主流大模型，按场景自动路由最优引擎
        </p>
      </div>

      <div
        ref="gridRef"
        class="grid grid-cols-4 md:grid-cols-8 gap-3 md:gap-4"
      >
        <div
          v-for="e in engines"
          :key="e.name"
          class="flex flex-col items-center justify-center gap-1.5 h-20 md:h-24 rounded-xl bg-white border border-line/50 text-xs md:text-sm font-medium text-ink-tertiary hover:text-ink-primary hover:border-[#433487]/30 hover:-translate-y-0.5 transition-all duration-300"
        >
          <img
            v-if="e.url"
            :src="e.url"
            :alt="e.name"
            class="w-6 h-6 md:w-7 md:h-7 object-contain"
          />
          <Icon
            v-else-if="e.icon"
            :icon="e.icon"
            class="w-6 h-6 md:w-7 md:h-7"
            :style="{ color: e.color }"
          />
          <span>{{ e.name }}</span>
        </div>
      </div>


    </div>
  </section>
</template>
