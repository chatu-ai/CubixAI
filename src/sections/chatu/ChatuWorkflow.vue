<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import AppImage from '../../components/AppImage.vue'
import workflowImg from '@/assets/workflow.webp'
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
            {{ c.workflow.title }}
          </h2>

          <ul class="mt-6 space-y-3">
            <li
              v-for="p in c.workflow.points"
              :key="p"
              class="flex items-start gap-3 text-ink-secondary"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-[#433487] mt-2 shrink-0" />
              {{ p }}
            </li>
          </ul>
        </div>

        <!-- 右：图 -->
        <div ref="rightRef">
          <div
            class="rounded-2xl border border-line shadow-card overflow-hidden"
          >
            <AppImage :src="workflowImg" class="w-full" alt="Workflow" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
