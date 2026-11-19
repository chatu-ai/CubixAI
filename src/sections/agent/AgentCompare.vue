<script setup lang="ts">
import { ref, computed } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import { Icon } from '@iconify/vue'
import { useContent } from '@/i18n/useContent'
import { agentStationContent } from '@/content/agentstation'

const c = useContent(agentStationContent)

const sectionRef = ref<HTMLElement | null>(null)
useScrollReveal(sectionRef, { y: 30 })

const columns = computed(() => c.value.compare.columns)
const rows = computed(() => c.value.compare.rows)
</script>

<template>
  <section ref="sectionRef" class="py-10 md:py-16 bg-surface-base">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-10">
        <h2
          class="section-title"
        >
          {{ c.compare.title }}
        </h2>
        <p class="section-subtitle">
          {{ c.compare.subtitle }}
        </p>
      </div>

      <!-- Table -->
      <div class="rounded-2xl bg-surface-card border border-line shadow-card overflow-x-auto">
        <!-- Header -->
        <div class="grid grid-cols-[110px_1.2fr_1fr_1fr_1fr] min-w-[720px] border-b border-line bg-surface-muted/60">
          <div class="px-4 py-4 text-xs font-semibold text-ink-tertiary"></div>
          <div class="px-4 py-4 text-sm font-semibold text-white bg-[#2DB4E6] flex items-center">
            {{ columns[1] }}
          </div>
          <div class="px-4 py-4 text-sm font-semibold text-ink-secondary flex items-center">{{ columns[2] }}</div>
          <div class="px-4 py-4 text-sm font-semibold text-ink-secondary flex items-center">{{ columns[3] }}</div>
          <div class="px-4 py-4 text-sm font-semibold text-ink-secondary flex items-center">{{ columns[4] }}</div>
        </div>

        <!-- Rows -->
        <div
          v-for="(row, idx) in rows"
          :key="row.dim"
          class="grid grid-cols-[110px_1.2fr_1fr_1fr_1fr] min-w-[720px] border-b border-line last:border-b-0"
          :class="idx % 2 === 0 ? 'bg-surface-card' : 'bg-surface-muted/40'"
        >
          <div class="px-4 py-4 flex items-center">
            <span class="text-sm text-ink-tertiary">{{ row.dim }}</span>
          </div>
          <div class="px-4 py-4 flex items-center gap-1.5 text-sm font-semibold text-[#2DB4E6] bg-[#E6F5FB]/50">
            <Icon icon="lucide:check" class="w-4 h-4 shrink-0" />
            {{ row.us }}
          </div>
          <div class="px-4 py-4 flex items-center text-sm text-ink-secondary">{{ row.cloud }}</div>
          <div class="px-4 py-4 flex items-center text-sm text-ink-secondary">{{ row.box }}</div>
          <div class="px-4 py-4 flex items-center text-sm text-ink-secondary">{{ row.diy }}</div>
        </div>
      </div>

      <!-- 底部大字 -->
      <div class="mt-10 text-center">
        <p class="text-2xl md:text-[32px] font-semibold text-[#2DB4E6]">
          {{ c.compare.tagline }}
        </p>
      </div>
    </div>
  </section>
</template>
