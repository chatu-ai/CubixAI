<script setup lang="ts">
import { ref, computed } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import { useContent } from '@/i18n/useContent'
import { chatuContent } from '@/content/chatu'

const c = useContent(chatuContent)

const titleRef = ref<HTMLElement | null>(null)
const gridRef = ref<HTMLElement | null>(null)

useScrollReveal(titleRef, { y: 30 })
useScrollReveal(gridRef, { y: 30, delay: 0.15 })

const ITEM_IMAGES = [
  new URL('../../assets/ChatU/12.webp', import.meta.url).href,
  new URL('../../assets/ChatU/13.webp', import.meta.url).href,
  new URL('../../assets/ChatU/14.webp', import.meta.url).href,
  new URL('../../assets/ChatU/15.webp', import.meta.url).href,
  new URL('../../assets/ChatU/16.webp', import.meta.url).href,
  new URL('../../assets/ChatU/17.webp', import.meta.url).href,
]

const items = computed(() =>
  c.value.deployment.items.map((item, i) => ({ ...item, image: ITEM_IMAGES[i] ?? '' })),
)
</script>

<template>
  <section class="py-10 md:py-16 bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref="titleRef" class="text-center mb-6 md:mb-8">
        <h2
          class="section-title"
        >
          {{ c.deployment.title }}
        </h2>
      </div>

      <div ref="gridRef" class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div
          v-for="item in items"
          :key="item.title"
          class="flex flex-col p-6 rounded-2xl bg-surface-card border border-line/50 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          <div class="aspect-video rounded-xl overflow-hidden mb-4">
            <img
              :src="item.image"
              :alt="item.title"
              class="w-full h-full object-cover"
            />
          </div>
          <h3 class="text-base font-semibold text-ink-primary">
            {{ item.title }}
          </h3>
          <p class="mt-1 text-sm text-ink-secondary">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
