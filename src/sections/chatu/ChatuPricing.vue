<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import GlassCard from '../../components/GlassCard.vue'
import { useContent } from '@/i18n/useContent'
import { chatuContent } from '@/content/chatu'

const c = useContent(chatuContent)

const leftRef = ref<HTMLElement | null>(null)
const rightRef = ref<HTMLElement | null>(null)

useScrollReveal(leftRef, { y: 30 })
useScrollReveal(rightRef, { y: 30, delay: 0.15 })

// 线上仅有电子单据，对账留存更不便。
</script>

<template>
  <section class="py-10 md:py-16 bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-stretch"
      >
        <!-- 左 -->
        <div ref="leftRef" class="flex flex-col">
          <h2
            class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight leading-tight"
          >
            {{ c.pricing.title }}
          </h2>

          <ul class="mt-6 space-y-4 flex-1">
            <li
              v-for="a in c.pricing.advantages"
              :key="a"
              class="flex items-start gap-3 text-ink-secondary"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-[#433487] mt-2 shrink-0" />
              {{ a }}
            </li>
          </ul>
          

          <GlassCard padding="lg" class="mt-6">
            <div class="flex flex-col md:flex-row gap-6 items-center h-full">
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-ink-primary">
                  {{ c.pricing.packTitle }}
                </h3>
                <p class="mt-2 text-ink-secondary">{{ c.pricing.packDesc }}</p>
              </div>
              <img
                src="@/assets/ChatU/llb.webp"
                :alt="c.pricing.packAlt"
                class="w-20 md:w-24 lg:w-28 h-auto object-contain rounded-2xl shrink-0"
              />
            </div>
          </GlassCard>
        </div>

        <!-- 右 -->
        <div ref="rightRef" class="flex flex-col">
          <GlassCard padding="lg" class="flex-1">
            <div class="flex flex-col gap-6 h-full">
              <div class="flex flex-row gap-4 justify-start items-start">
                <img
                  src="@/assets/czk.webp"
                  :alt="c.pricing.cardAlt"
                  class="flex-1 min-w-0 h-auto object-contain rounded-2xl shadow-md"
                />
                <img
                  src="@/assets/ChatU/llk2.webp"
                  :alt="c.pricing.cardAlt"
                  class="flex-1 min-w-0 h-auto object-contain rounded-2xl shadow-md"
                />
              </div>
              <div class="flex flex-col md:flex-row gap-6 md:gap-8">
                <div class="md:w-1/3">
                  <h3 class="text-lg font-semibold text-ink-primary">
                    {{ c.pricing.cardTitle }}
                  </h3>
                  <p class="mt-1 text-ink-secondary">{{ c.pricing.cardDesc }}</p>
                </div>
                <ul class="md:w-2/3 space-y-4">
                  <li
                    v-for="f in c.pricing.cardFeatures"
                    :key="f"
                    class="flex items-start gap-3 text-sm text-ink-secondary leading-relaxed"
                  >
                    <span class="w-1.5 h-1.5 rounded-full bg-[#433487] mt-1.5 shrink-0" />
                    {{ f }}
                  </li>
                </ul>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  </section>
</template>
