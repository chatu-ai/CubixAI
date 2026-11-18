<script setup lang="ts">
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import { useContent } from '@/i18n/useContent'
import { agentStationContent } from '@/content/agentstation'
import AppImage from '../../components/AppImage.vue'

const sectionRef = ref<HTMLElement | null>(null)
useScrollReveal(sectionRef, { y: 30 })

const c = useContent(agentStationContent)

const SCENARIO_IMAGES = [
  new URL('../../assets/zft/cj1.webp', import.meta.url).href,
  new URL('../../assets/zft/cj2.webp', import.meta.url).href,
  new URL('../../assets/zft/cj3.webp', import.meta.url).href,
  new URL('../../assets/zft/cj4.webp', import.meta.url).href,
  new URL('../../assets/zft/cj5.webp', import.meta.url).href,
  new URL('../../assets/zft/cj6.webp', import.meta.url).href,
]

const AUDIENCE_ICONS = ['lucide:pen-line', 'lucide:briefcase', 'lucide:graduation-cap', 'lucide:users']

const scenarios = computed(() =>
  c.value.scenarios.items.map((s, i) => ({ image: SCENARIO_IMAGES[i], ...s })),
)

const audiences = computed(() =>
  c.value.scenarios.audiences.map((a, i) => ({ ...a, icon: AUDIENCE_ICONS[i] })),
)
</script>

<template>
  <section ref="sectionRef" class="py-10 md:py-16 bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-6 md:mb-8">
        <h2
          class="section-title"
        >
          {{ c.scenarios.title }}
        </h2>
        <p class="section-subtitle">
          {{ c.scenarios.subtitle }}
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div
          v-for="s in scenarios"
          :key="s.title"
          class="flex flex-col p-6 rounded-2xl bg-surface-card border border-line/50 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          <div class="aspect-video rounded-xl overflow-hidden mb-4">
            <AppImage
              :src="s.image"
              :alt="s.title"
              class="w-full h-full object-cover"
            />
          </div>
          <h3 class="text-lg font-semibold text-ink-primary">{{ s.title }}</h3>
          <p class="mt-2 text-sm text-ink-secondary flex-1">{{ s.desc }}</p>
        </div>
      </div>

      <!-- 适用人群 -->
      <div class="mt-12 md:mt-20">
        <h3 class="text-center text-xl md:text-2xl font-semibold text-ink-primary tracking-tight mb-8">
          {{ c.scenarios.audienceTitle }}
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            v-for="a in audiences"
            :key="a.title"
            class="p-6 rounded-2xl bg-surface-card border border-line/50 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <span class="mb-4 w-10 h-10 rounded-xl bg-[#E6F5FB] text-[#2DB4E6] flex items-center justify-center">
              <Icon :icon="a.icon" class="w-5 h-5" aria-hidden="true" />
            </span>
            <h4 class="text-base font-semibold text-ink-primary">{{ a.title }}</h4>
            <p class="mt-2 text-sm text-ink-secondary leading-relaxed">{{ a.desc }}</p>
          </div>
        </div>
      </div>

      <!-- 底部条 -->
      <div class="mt-10 p-5 rounded-2xl bg-[#E6F5FB] border border-[#2DB4E6]/20 text-center text-base md:text-lg font-medium text-[#1A8BC4] leading-relaxed">
        {{ c.scenarios.banner }}
      </div>
    </div>
  </section>
</template>
