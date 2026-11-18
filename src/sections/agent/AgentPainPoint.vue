<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useScrollReveal } from '../../composables/useScrollReveal'
import { Icon } from '@iconify/vue'
import { useContent } from '@/i18n/useContent'
import { agentStationContent } from '@/content/agentstation'

const c = useContent(agentStationContent)
const { locale } = useI18n()
const isZh = computed(() => locale.value === 'zh-CN')

const titleRef = ref<HTMLElement | null>(null)
const cardsRef = ref<HTMLElement | null>(null)
const transitionRef = ref<HTMLElement | null>(null)

useScrollReveal(titleRef, { y: 30 })
useScrollReveal(cardsRef, { y: 30, delay: 0.15 })
useScrollReveal(transitionRef, { y: 20, delay: 0.3 })

const pains1 = computed(() => c.value.painPoint.cards[0].items)
const pains2 = computed(() => c.value.painPoint.cards[1].items)
const pains3 = computed(() => c.value.painPoint.cards[2].items)
const pains4 = computed(() => c.value.painPoint.cards[3].items)
</script>

<template>
  <section class="py-10 md:py-16 bg-surface-base">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref="titleRef" class="text-center mb-6 md:mb-8">
        <h2
          class="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[52px] leading-tight font-semibold text-ink-primary tracking-tight"
          :class="isZh ? 'sm:whitespace-nowrap' : 'text-balance'"
        >
          <span class="text-[#2DB4E6]">"</span>{{ c.painPoint.title }}<span class="text-[#2DB4E6]">"</span>
        </h2>
        <p class="mt-4 text-xl md:text-2xl text-ink-secondary">
          {{ c.painPoint.subtitle }}
        </p>
      </div>

      <div ref="cardsRef" class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- 卡 01 · 不会装 -->
        <div
          class="p-6 rounded-2xl bg-surface-card border border-line shadow-card"
        >
          <div class="flex items-center gap-2 mb-5">
            <span class="w-2 h-2 rounded-full bg-red-500" />
            <span class="text-sm font-semibold text-red-500">{{ c.painPoint.cards[0].label }}</span>
          </div>
          <h3 class="text-xl font-semibold text-ink-primary mb-5">
            {{ c.painPoint.cards[0].title }}
          </h3>
          <ul class="space-y-3">
            <li
              v-for="p in pains1"
              :key="p"
              class="flex items-start gap-3 text-ink-secondary"
            >
              <Icon
                icon="lucide:x"
                class="w-4 h-4 text-red-400 shrink-0 mt-0.5"
              />
              {{ p }}
            </li>
          </ul>
        </div>

        <!-- 卡 02 · 不敢装 -->
        <div
          class="p-6 rounded-2xl bg-surface-card border border-line shadow-card"
        >
          <div class="flex items-center gap-2 mb-5">
            <span class="w-2 h-2 rounded-full bg-orange-500" />
            <span class="text-sm font-semibold text-orange-500">{{ c.painPoint.cards[1].label }}</span>
          </div>
          <h3 class="text-xl font-semibold text-ink-primary mb-5">
            {{ c.painPoint.cards[1].title }}
          </h3>
          <ul class="space-y-3">
            <li
              v-for="p in pains2"
              :key="p"
              class="flex items-start gap-3 text-ink-secondary"
            >
              <Icon
                icon="lucide:x"
                class="w-4 h-4 text-orange-400 shrink-0 mt-0.5"
              />
              {{ p }}
            </li>
          </ul>
        </div>

        <!-- 卡 03 · 不会用 -->
        <div
          class="p-6 rounded-2xl bg-surface-card border border-line shadow-card"
        >
          <div class="flex items-center gap-2 mb-5">
            <span class="w-2 h-2 rounded-full bg-amber-500" />
            <span class="text-sm font-semibold text-amber-500">{{ c.painPoint.cards[2].label }}</span>
          </div>
          <h3 class="text-xl font-semibold text-ink-primary mb-5">
            {{ c.painPoint.cards[2].title }}
          </h3>
          <ul class="space-y-3">
            <li
              v-for="p in pains3"
              :key="p"
              class="flex items-start gap-3 text-ink-secondary"
            >
              <Icon
                icon="lucide:x"
                class="w-4 h-4 text-amber-400 shrink-0 mt-0.5"
              />
              {{ p }}
            </li>
          </ul>
        </div>

        <!-- 卡 04 · 不想折腾 -->
        <div
          class="p-6 rounded-2xl bg-surface-card border border-line shadow-card"
        >
          <div class="flex items-center gap-2 mb-5">
            <span class="w-2 h-2 rounded-full bg-violet-500" />
            <span class="text-sm font-semibold text-violet-500">{{ c.painPoint.cards[3].label }}</span>
          </div>
          <h3 class="text-xl font-semibold text-ink-primary mb-5">
            {{ c.painPoint.cards[3].title }}
          </h3>
          <ul class="space-y-3">
            <li
              v-for="p in pains4"
              :key="p"
              class="flex items-start gap-3 text-ink-secondary"
            >
              <Icon
                icon="lucide:x"
                class="w-4 h-4 text-violet-400 shrink-0 mt-0.5"
              />
              {{ p }}
            </li>
          </ul>
        </div>
      </div>

      <div ref="transitionRef" class="mt-12 text-center">
        <p class="text-xl md:text-2xl font-medium text-ink-primary">
          {{ c.painPoint.closing }}
        </p>
      </div>
    </div>
  </section>
</template>
