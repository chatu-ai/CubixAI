<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import { Icon } from '@iconify/vue'
import { useContent } from '@/i18n/useContent'
import { chatuContent } from '@/content/chatu'

const c = useContent(chatuContent)

const titleRef = ref<HTMLElement | null>(null)
const card1Ref = ref<HTMLElement | null>(null)
const card2Ref = ref<HTMLElement | null>(null)
const card3Ref = ref<HTMLElement | null>(null)

useScrollReveal(titleRef, { y: 30 })
useScrollReveal(card1Ref, { y: 30, delay: 0.1 })
useScrollReveal(card2Ref, { y: 30, delay: 0.2 })
useScrollReveal(card3Ref, { y: 30, delay: 0.3 })
</script>

<template>
  <section class="py-10 md:py-16 bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref="titleRef" class="text-center mb-6 md:mb-8">
        <h2
          class="section-title"
        >
          {{ c.coreValue.title }}
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Card 1 -->
        <div
          ref="card1Ref"
          class="p-6 rounded-2xl bg-surface-card border border-line shadow-card"
        >
          <div class="aspect-video rounded-2xl overflow-hidden mb-6">
            <img
              src="@/assets/ChatU/1.webp"
              :alt="c.coreValue.cards[0]!.title"
              class="w-full h-full object-cover"
            />
          </div>
          <h3 class="text-xl font-semibold text-ink-primary mb-4">
            {{ c.coreValue.cards[0]!.title }}
          </h3>
          <ul class="space-y-3">
            <li
              v-for="point in c.coreValue.cards[0]!.points"
              :key="point"
              class="flex items-start gap-2 text-sm text-ink-secondary"
            >
              <Icon icon="lucide:check" class="w-4 h-4 text-[#433487] shrink-0 mt-0.5" />
              {{ point }}
            </li>
          </ul>
        </div>

        <!-- Card 2 -->
        <div
          ref="card2Ref"
          class="p-6 rounded-2xl bg-surface-card border border-line shadow-card"
        >
          <div class="aspect-video rounded-2xl overflow-hidden mb-6">
            <img
              src="@/assets/ChatU/2.webp"
              :alt="c.coreValue.cards[1]!.title"
              class="w-full h-full object-cover"
            />
          </div>
          <h3 class="text-xl font-semibold text-ink-primary mb-4">
            {{ c.coreValue.cards[1]!.title }}
          </h3>
          <ul class="space-y-3">
            <li
              v-for="point in c.coreValue.cards[1]!.points"
              :key="point"
              class="flex items-start gap-2 text-sm text-ink-secondary"
            >
              <Icon icon="lucide:check" class="w-4 h-4 text-[#433487] shrink-0 mt-0.5" />
              {{ point }}
            </li>
          </ul>
        </div>

        <!-- Card 3 -->
        <div
          ref="card3Ref"
          class="p-6 rounded-2xl bg-surface-card border border-line shadow-card"
        >
          <div class="aspect-video rounded-2xl overflow-hidden mb-6">
            <img
              src="@/assets/ChatU/3.webp"
              :alt="c.coreValue.cards[2]!.title"
              class="w-full h-full object-cover"
            />
          </div>
          <h3 class="text-xl font-semibold text-ink-primary mb-4">
            {{ c.coreValue.cards[2]!.title }}
          </h3>
          <ul class="space-y-3">
            <li
              v-for="point in c.coreValue.cards[2]!.points"
              :key="point"
              class="flex items-start gap-2 text-sm text-ink-secondary"
            >
              <Icon icon="lucide:check" class="w-4 h-4 text-[#433487] shrink-0 mt-0.5" />
              {{ point }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
