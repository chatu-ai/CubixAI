<script setup lang="ts">
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import { useContent } from '@/i18n/useContent'
import { chatuContent } from '@/content/chatu'

const c = useContent(chatuContent)

const titleRef = ref<HTMLElement | null>(null)
const tagsRef = ref<HTMLElement | null>(null)
const cardsRef = ref<HTMLElement | null>(null)

useScrollReveal(titleRef, { y: 30 })
useScrollReveal(tagsRef, { y: 20, delay: 0.1 })
useScrollReveal(cardsRef, { y: 30, delay: 0.2 })

const FEATURE_ICONS = ['lucide:user-cog', 'lucide:network', 'lucide:folder-lock', 'lucide:shield-check']

const features = computed(() =>
  c.value.ecosystem.features.map((f, i) => ({ ...f, icon: FEATURE_ICONS[i] ?? '' })),
)
</script>

<template>
  <section class="py-10 md:py-16 bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref="titleRef" class="text-center mb-8">
        <h2
          class="section-title"
        >
          {{ c.ecosystem.title }}
        </h2>
        <p class="section-subtitle">
          {{ c.ecosystem.subtitle }}
        </p>
      </div>

      <!-- 8 大分类标签 -->
      <div
        ref="tagsRef"
        class="flex flex-wrap justify-center gap-3 mb-8"
      >
        <span
          v-for="cat in c.ecosystem.categories"
          :key="cat"
          class="px-4 py-2 rounded-full text-sm font-medium bg-surface-muted text-ink-secondary border border-line/50 hover:bg-surface-muted/80 transition-colors cursor-default"
        >
          {{ cat }}
        </span>
      </div>

      <!-- 4 个特性卡 -->
      <div
        ref="cardsRef"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        <div
          v-for="feat in features"
          :key="feat.title"
          class="p-6 rounded-2xl bg-white border border-line/50 shadow-sm hover:shadow-card hover:border-[#433487]/20 transition-all duration-300"
        >
          <span class="mb-4 w-10 h-10 rounded-xl bg-[#433487]/10 text-[#433487] flex items-center justify-center">
            <Icon :icon="feat.icon" class="w-5 h-5" aria-hidden="true" />
          </span>
          <h4 class="text-base font-semibold text-ink-primary mb-1">
            {{ feat.title }}
          </h4>
          <p class="text-sm text-ink-secondary">{{ feat.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
