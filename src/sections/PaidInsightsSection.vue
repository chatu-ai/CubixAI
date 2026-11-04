<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import { Icon } from '@iconify/vue'
import { useScrollReveal } from '../composables/useScrollReveal'
import { PAID_INSIGHT_CATEGORY, paidInsights } from '../data/paidInsights'

const { t } = useI18n()
const titleRef = ref<HTMLElement | null>(null)
const cardRef = ref<HTMLElement | null>(null)

useScrollReveal(titleRef, { y: 30 })
useScrollReveal(cardRef, { y: 40, delay: 0.1 })
</script>

<template>
  <section id="paid-insights" class="pt-12 md:pt-16 pb-20 md:pb-[120px] bg-surface-base scroll-mt-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref="titleRef" class="text-center mb-10 md:mb-14">
        <h2 class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight">
          {{ t('home.paidInsights.title') }}
        </h2>
        <p class="mt-3 text-base md:text-lg text-ink-secondary">
          {{ t('home.paidInsights.subtitle') }}
        </p>
      </div>

      <div
        ref="cardRef"
        class="rounded-3xl bg-white border border-line/50 shadow-card overflow-hidden"
      >
        <div class="flex items-center justify-between gap-4 px-5 md:px-8 py-4 border-b border-line/50 bg-brand-soft/40">
          <span class="inline-flex items-center gap-2 text-sm font-semibold text-brand-deep">
            <Icon icon="lucide:sparkles" class="w-4 h-4" aria-hidden="true" />
            {{ PAID_INSIGHT_CATEGORY }}
          </span>
          <span class="text-xs md:text-sm text-ink-tertiary">
            {{ t('home.paidInsights.count', { count: paidInsights.length }) }}
          </span>
        </div>

        <ol class="divide-y divide-line/60">
          <li v-for="item in paidInsights" :key="item.id">
            <RouterLink
              :to="`/paid-insight/${item.id}`"
              class="group flex flex-col md:flex-row md:items-center gap-2 md:gap-5 px-5 md:px-8 py-4 md:py-5 transition-colors duration-200 hover:bg-brand-soft/30 focus-visible:outline-none focus-visible:bg-brand-soft/30"
            >
              <span
                class="paid-tag self-start shrink-0 inline-flex items-center px-2.5 py-1 rounded-md text-xs md:text-sm font-bold text-white bg-[#F2592A] shadow-sm"
              >
                {{ t('home.paidInsights.pricePrefix', { price: item.price }) }}
              </span>
              <span
                class="paid-title flex-1 min-w-0 text-base md:text-lg font-medium text-ink-primary leading-snug group-hover:text-brand-deep transition-colors line-clamp-2 md:line-clamp-1"
              >
                {{ item.title }}
              </span>
              <span class="flex items-center gap-3 shrink-0 text-xs md:text-sm text-ink-tertiary tabular-nums">
                <time :datetime="item.date">{{ item.date }}</time>
                <Icon icon="lucide:lock" class="w-4 h-4 text-ink-tertiary group-hover:text-[#F2592A] transition-colors" aria-hidden="true" />
              </span>
            </RouterLink>
          </li>
        </ol>

        <p class="px-5 md:px-8 py-3 text-xs text-ink-tertiary border-t border-line/50 bg-surface-muted/50">
          {{ t('home.paidInsights.note') }}
        </p>
      </div>
    </div>
  </section>
</template>
