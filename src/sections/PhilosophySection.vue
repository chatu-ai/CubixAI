<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useScrollReveal } from '../composables/useScrollReveal'
import { Icon } from '@iconify/vue'
import BrandButton from '../components/BrandButton.vue'

const { t, tm } = useI18n()
const titleRef = ref<HTMLElement | null>(null)

useScrollReveal(titleRef, { y: 30 })

interface SolutionCase {
  icon: string
  name: string
  tags: string[]
  pain: string
  cpsm: string
}

const cases = computed(() => tm('home.philosophy.cases') as SolutionCase[])
</script>

<template>
  <section class="py-10 md:py-16 bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref="titleRef" class="text-center mb-6 md:mb-8">
        <h2
          class="section-title"
        >
          {{ t('home.philosophy.title') }}
        </h2>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        <div
          v-for="item in cases"
          :key="item.name"
          class="h-full"
        >
          <div
            class="h-full flex flex-col p-6 md:p-7 rounded-2xl bg-white border border-line/50 shadow-card hover:shadow-lg hover:-translate-y-1 hover:border-brand/20 transition-all duration-300"
          >
            <!-- Icon + Name -->
            <div class="flex items-center gap-4">
              <div
                class="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center shrink-0"
              >
                <Icon :icon="item.icon" class="w-6 h-6 text-brand" />
              </div>
              <h3 class="text-xl md:text-xl font-semibold text-ink-primary">
                {{ item.name }}
              </h3>
            </div>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mt-5">
              <span
                v-for="tag in item.tags"
                :key="tag"
                class="px-2.5 py-1 rounded-full text-xs font-medium border border-brand/25 text-brand bg-brand-soft/60"
              >
                {{ tag }}
              </span>
            </div>

            <!-- 产品方案 -->
            <div class="mt-6 p-4 md:p-5 rounded-2xl bg-brand-soft/40 border border-brand/10">
              <h4 class="text-sm font-semibold text-ink-primary mb-2 flex items-center gap-2">
                <Icon icon="lucide:briefcase" class="w-4 h-4 text-brand" />
                {{ t('common.productScheme') }}
              </h4>
              <p class="text-sm md:text-base text-ink-secondary leading-relaxed">{{ item.cpsm }}</p>
            </div>

            <!-- 解决痛点 -->
            <div class="mt-4 p-4 md:p-5 rounded-2xl bg-surface-muted/60 border border-line/50">
              <h4 class="text-sm font-semibold text-ink-primary mb-2 flex items-center gap-2">
                <Icon icon="lucide:lightbulb" class="w-4 h-4 text-brand" />
                {{ t('common.solvePainPoints') }}
              </h4>
              <p class="text-sm md:text-base text-ink-secondary leading-relaxed">{{ item.pain }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-12 text-center">
        <BrandButton variant="ghost" to="/solutions" arrow>
          {{ t('home.philosophy.cta') }}
        </BrandButton>
      </div>
    </div>
  </section>
</template>
