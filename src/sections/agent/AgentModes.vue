<script setup lang="ts">
import { ref, computed } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import { useContent } from '@/i18n/useContent'
import { agentStationContent } from '@/content/agentstation'
import AppImage from '../../components/AppImage.vue'

const bottomRef = ref<HTMLElement | null>(null)
useScrollReveal(bottomRef, { y: 30, delay: 0.15 })

const c = useContent(agentStationContent)

// 文案按顺序取自 agentStationContent.modes.items；compact 表示图片需要限高居中（指尖触屏、手机远程）
const MODE_MEDIA = [
  {
    icon: 'lucide:pointer',
    compact: true,
    images: [
      new URL('@/assets/sb/手指触控.webp', import.meta.url).href,
    ],
  },
  {
    icon: 'lucide:keyboard',
    compact: false,
    images: [new URL('@/assets/sb/jp.webp', import.meta.url).href],
  },
  {
    icon: 'lucide:monitor',
    compact: false,
    images: [new URL('@/assets/sb/显示屏.webp', import.meta.url).href],
  },
  {
    icon: 'lucide:smartphone',
    compact: true,
    images: [new URL('@/assets/sb/sj.webp', import.meta.url).href],
  },
]

const modes = computed(() => c.value.modes.items.map((item, i) => ({ ...MODE_MEDIA[i], ...item })))
</script>

<template>
  <section class="py-10 md:py-16 bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref="bottomRef">
        <p
          class="text-center text-lg md:text-xl font-semibold text-[#2DB4E6] uppercase tracking-wide mb-4"
        >
          {{ c.modes.title }}
        </p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div
            v-for="mode in modes"
            :key="mode.title"
            class="flex flex-col items-center text-center p-5 md:p-6 rounded-2xl bg-surface-card border border-line/50 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <!-- Images -->
            <div
              class="w-full mb-4 rounded-xl overflow-hidden bg-white border border-line/30"
              :class="mode.images.length > 1 ? 'flex items-center justify-center p-2' : 'h-28 md:h-32'"
            >
              <AppImage
                v-for="(img, idx) in mode.images"
                :key="img"
                :src="img"
                :alt="mode.title"
                class="object-contain"
                :class="[
                  mode.images.length > 1
                    ? 'w-1/2 h-24 md:h-28 rounded-lg bg-white'
                    : 'w-full h-full',
                  mode.images.length > 1 && idx === 1 ? '-ml-6 md:-ml-8' : '',
                  mode.compact ? 'max-h-20 md:max-h-24 mx-auto' : '',
                ]"
              />
            </div>

            <!-- <div
              class="w-12 h-12 rounded-xl bg-[#E6F5FB] flex items-center justify-center mb-3"
            >
              <Icon :icon="mode.icon" class="w-6 h-6 text-[#2DB4E6]" />
            </div> -->
            <h3 class="text-base font-semibold text-ink-primary">
              {{ mode.title }}
            </h3>
            <p class="mt-1 text-sm text-ink-secondary">{{ mode.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
