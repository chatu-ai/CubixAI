<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import Chip from '../../components/Chip.vue'
import { useContent } from '@/i18n/useContent'
import { chatuContent } from '@/content/chatu'

const c = useContent(chatuContent)

const leftRef = ref<HTMLElement | null>(null)
const rightRef = ref<HTMLElement | null>(null)

useScrollReveal(leftRef, { y: 30 })
useScrollReveal(rightRef, { y: 30, delay: 0.15 })
</script>

<template>
  <section class="py-10 md:py-16 bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center"
      >
        <!-- 左：文字 -->
        <div ref="leftRef">
          <h2
            class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight leading-tight"
          >
            {{ c.uppt.title }}
          </h2>
          <p class="section-subtitle">
            {{ c.uppt.subtitle }}
          </p>

          <div class="mt-8 space-y-4">
            <div
              v-for="(step, i) in c.uppt.steps"
              :key="step"
              class="flex items-center gap-4"
            >
              <div
                class="w-8 h-8 rounded-full bg-[#433487] text-white flex items-center justify-center text-sm font-semibold shrink-0"
              >
                {{ i + 1 }}
              </div>
              <span class="text-ink-primary font-medium">{{ step }}</span>
            </div>
          </div>

          <div class="flex flex-wrap gap-2 mt-8">
            <Chip v-for="chip in c.uppt.chips" :key="chip" variant="muted">{{ chip }}</Chip>
          </div>
        </div>

        <!-- 右：图 -->
        <div ref="rightRef">
          <div
            class="rounded-2xl border border-line shadow-card overflow-hidden"
          >
            <img src="@/assets/UPPT.webp" class="w-full" alt="UPPT" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
