<script setup lang="ts">
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import Chip from '../../components/Chip.vue'
import { useContent } from '@/i18n/useContent'
import { chatuContent } from '@/content/chatu'

const c = useContent(chatuContent)

const leftRef = ref<HTMLElement | null>(null)
const rightRef = ref<HTMLElement | null>(null)

useScrollReveal(leftRef, { y: 30, delay: 0.15 })
useScrollReveal(rightRef, { y: 30 })

const FEATURE_ICONS = ['lucide:clock', 'lucide:sparkles', 'lucide:sliders-horizontal', 'lucide:trending-up']

const features = computed(() =>
  c.value.virtualHuman.features.map((text, i) => ({ text, icon: FEATURE_ICONS[i] ?? '' })),
)
</script>

<template>
  <section class="py-10 md:py-16 bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center"
      >
        <!-- 左：形象占位 + 切换 -->
        <div ref="leftRef">
          <div
            class="rounded-2xl border border-line shadow-card overflow-hidden"
          >
            <img
              src="@/assets/szr.webp"
              :alt="c.virtualHuman.imageAlt"
              class="w-full"
            />
          </div>
          <!-- <div class="flex justify-center gap-2 mt-4">
            <button
              v-for="(role, i) in roles"
              :key="role"
              class="px-4 py-2 rounded-full text-sm font-medium transition-all"
              :class="
                activeRole === i
                  ? 'bg-[#433487] text-white'
                  : 'bg-surface-muted text-ink-secondary hover:text-ink-primary'
              "
              @click="activeRole = i"
            >
              {{ role }}
            </button> </div> -->
        </div>

        <!-- 右：文字 -->
        <div ref="rightRef">
          <h2
            class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight leading-tight"
          >
            {{ c.virtualHuman.title }}
          </h2>
          <p class="section-subtitle">
            {{ c.virtualHuman.subtitle }}
          </p>

          <div class="grid grid-cols-2 gap-3 mt-8">
            <div
              v-for="f in features"
              :key="f.text"
              class="p-4 rounded-xl bg-surface-card border border-line/50 flex items-center gap-3"
            >
              <span class="w-8 h-8 rounded-lg bg-[#433487]/10 text-[#433487] flex items-center justify-center shrink-0">
                <Icon :icon="f.icon" class="w-4 h-4" aria-hidden="true" />
              </span>
              <span class="text-sm font-medium text-ink-primary">{{ f.text }}</span>
            </div>
          </div>

          <div class="flex flex-wrap gap-2 mt-8">
            <Chip v-for="tag in c.virtualHuman.tags" :key="tag" variant="muted">
              {{ tag }}
            </Chip>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
