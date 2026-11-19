<script setup lang="ts">
import { ref, computed } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import { useContent } from '@/i18n/useContent'
import { agentStationContent } from '@/content/agentstation'

const c = useContent(agentStationContent)

const topRef = ref<HTMLElement | null>(null)
useScrollReveal(topRef, { y: 30 })

const STEP_NUMS = ['01', '02', '03']
const steps = computed(() => c.value.simplicity.steps.map((step, i) => ({ num: STEP_NUMS[i], ...step })))
</script>

<template>
  <section class="py-10 md:py-16 bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref="topRef">
        <p
          class="text-center text-sm font-semibold text-[#2DB4E6] tracking-wide mb-4"
        >
          {{ c.simplicity.eyebrow }}
        </p>
        <h2
          class="text-center text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight mb-8"
        >
          {{ c.simplicity.title }}
        </h2>

        <div class="flex flex-col md:flex-row items-center justify-center gap-4">
          <template v-for="(step, i) in steps" :key="step.num">
            <div class="text-center w-full md:w-48">
              <div
                class="text-[72px] font-semibold bg-gradient-to-br from-[#2DB4E6] to-[#1A8BC4] bg-clip-text text-transparent leading-none"
              >
                {{ step.num }}
              </div>
              <h3 class="mt-4 text-xl font-semibold text-ink-primary">
                {{ step.title }}
              </h3>
              <p class="mt-2 text-sm text-ink-secondary leading-relaxed">{{ step.desc }}</p>
            </div>
            <div v-if="i < steps.length - 1" class="hidden md:block">
              <svg class="w-6 h-6 text-[#2DB4E6]/30" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>