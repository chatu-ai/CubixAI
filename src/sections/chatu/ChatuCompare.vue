<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import Chip from '../../components/Chip.vue'
import { useContent } from '@/i18n/useContent'
import { chatuContent } from '@/content/chatu'

const c = useContent(chatuContent)

const titleRef = ref<HTMLElement | null>(null)
const tableRef = ref<HTMLElement | null>(null)

useScrollReveal(titleRef, { y: 30 })
useScrollReveal(tableRef, { y: 30, delay: 0.15 })
</script>

<template>
  <section class="py-10 md:py-16 bg-surface-base">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref="titleRef" class="text-center mb-6 md:mb-8">
        <h2
          class="section-title"
        >
          {{ c.compare.title }}
        </h2>
      </div>

      <!-- Desktop Table -->
      <div ref="tableRef" class="hidden md:block">
        <div
          class="rounded-2xl bg-surface-card border border-line shadow-card overflow-hidden"
        >
          <div
            class="grid grid-cols-[140px_1fr_1fr] bg-[#433487] border-b border-line"
          >
            <div class="px-6 py-4 text-sm font-semibold text-white">
              {{ c.compare.headers.dim }}
            </div>
            <div class="px-6 py-4 text-sm font-semibold text-white">
              {{ c.compare.headers.competitor }}
            </div>
            <div class="px-6 py-4 text-sm font-semibold text-white">
              {{ c.compare.headers.chatu }}
            </div>
          </div>
          <div
            v-for="(row, i) in c.compare.rows"
            :key="row.dim"
            class="grid grid-cols-[140px_1fr_1fr] border-b border-line last:border-b-0"
            :class="i % 2 === 0 ? 'bg-surface-card' : 'bg-surface-muted/50'"
          >
            <div class="px-6 py-4 flex items-center">
              <Chip>{{ row.dim }}</Chip>
            </div>
            <div
              class="px-6 py-4 flex items-center text-sm text-ink-secondary"
            >
              {{ row.competitor }}
            </div>
            <div
              class="px-6 py-4 flex items-center text-sm font-semibold text-[#433487] border-l-2 border-[#433487]"
            >
              {{ row.chatu }}
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Cards -->
      <div class="md:hidden space-y-4">
        <div
          v-for="row in c.compare.rows"
          :key="row.dim"
          class="p-5 rounded-2xl bg-surface-card border border-line shadow-card"
        >
          <Chip class="mb-3">{{ row.dim }}</Chip>
          <div class="text-sm text-ink-secondary mb-2">
            <span class="text-ink-tertiary">{{ c.compare.competitorLabel }}</span>{{ row.competitor }}
          </div>
          <div
            class="text-sm font-semibold text-[#433487] border-l-2 border-[#433487] pl-3"
          >
            {{ c.compare.chatuLabel }}{{ row.chatu }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
