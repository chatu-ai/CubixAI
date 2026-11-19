<script setup lang="ts">
import { ref, computed, inject } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import { useContent } from '@/i18n/useContent'
import { agentStationContent } from '@/content/agentstation'
import { Icon } from '@iconify/vue'
import Chip from '../../components/Chip.vue'
import BrandButton from '../../components/BrandButton.vue'

const c = useContent(agentStationContent)

const openModal = inject<() => void>('agentStationOpenModal')
const BOOKING_URL = 'https://ruanjimu.feishu.cn/share/base/form/shrcnO4m2xMY6ma9mnYSuAkSSKg'
const onCta = (action: 'booking' | 'modal') => {
  if (action === 'booking') window.open(BOOKING_URL, '_blank')
  else openModal?.()
}

const sectionRef = ref<HTMLElement | null>(null)
useScrollReveal(sectionRef, { y: 30 })

// 文案按顺序取自 agentStationContent.versions.plans
const PLAN_META = [
  { action: 'booking' as const, ctaVariant: 'primary' as const, to: '/contact' },
  { action: 'modal' as const, ctaVariant: 'ghost' as const, to: '/contact' },
]

const versions = computed(() => c.value.versions.plans.map((plan, i) => ({ ...plan, ...PLAN_META[i] })))
</script>

<template>
  <section ref="sectionRef" class="py-10 md:py-16 bg-surface-base">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-6 md:mb-8">
        <h2
          class="section-title"
        >
          {{ c.versions.title }}
        </h2>
        <p class="section-subtitle">
          {{ c.versions.subtitle }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div
          v-for="v in versions"
          :key="v.name"
          class="relative flex flex-col p-6 rounded-2xl bg-surface-card border border-line shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          <span
            class="text-xs font-semibold text-[#2DB4E6] uppercase tracking-wide"
          >
            {{ v.name }}
          </span>
          <div class="mt-3 text-3xl font-semibold text-ink-primary">
            {{ v.price }}
          </div>
          <p class="mt-2 text-sm font-medium text-ink-primary">
            {{ v.badge }}
          </p>
          <Chip variant="muted" class="mt-3 self-start">
            {{ v.audience }}
          </Chip>

          <ul class="mt-6 space-y-3 flex-1">
            <li
              v-for="f in v.features"
              :key="f"
              class="flex items-start gap-2 text-sm text-ink-secondary"
            >
              <Icon icon="lucide:check" class="w-4 h-4 text-[#2DB4E6] shrink-0 mt-0.5" />
              {{ f }}
            </li>
          </ul>

          <div class="mt-8">
            <BrandButton
              :variant="v.ctaVariant"
              size="sm"
              :class="[
                'w-full justify-center',
                v.ctaVariant === 'primary' ? '!bg-none !bg-[#2DB4E6]' : 'hover:!border-[#2DB4E6] hover:!text-[#2DB4E6]',
              ]"
              @click="onCta(v.action)"
            >
              {{ v.cta }}
            </BrandButton>
          </div>
        </div>
      </div>

      <p class="mt-10 text-center text-xs text-ink-tertiary">
        {{ c.versions.note }}
      </p>
    </div>
  </section>
</template>
