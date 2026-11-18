<script setup lang="ts">
import { ref, computed } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import { Icon } from '@iconify/vue'
import { useContent } from '@/i18n/useContent'
import { agentStationContent } from '@/content/agentstation'

const c = useContent(agentStationContent)

const sectionRef = ref<HTMLElement | null>(null)
useScrollReveal(sectionRef, { y: 30 })

const CARD_ICONS = ['lucide:graduation-cap', 'lucide:presentation', 'lucide:map-pin', 'lucide:headset']

const cards = computed(() => c.value.pricing.cards.map((card, i) => ({ icon: CARD_ICONS[i], ...card })))
</script>

<template>
  <section ref="sectionRef" class="py-10 md:py-16 bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-6 md:mb-8">
        <h2
          class="section-title"
        >
          {{ c.pricing.title }}
        </h2>
        <p class="section-subtitle">
          {{ c.pricing.subtitle }}
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div
          v-for="card in cards"
          :key="card.title"
          class="flex flex-col p-7 rounded-2xl bg-surface-card border border-line/50 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          <div class="w-12 h-12 rounded-xl bg-[#E6F5FB] flex items-center justify-center mb-5">
            <Icon :icon="card.icon" class="w-6 h-6 text-[#2DB4E6]" />
          </div>
          <h3 class="text-lg font-semibold text-ink-primary">{{ card.title }}</h3>
          <p class="mt-2 text-sm text-ink-secondary leading-relaxed flex-1">{{ card.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
