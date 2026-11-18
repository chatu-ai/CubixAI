<script setup lang="ts">
import { watch, nextTick } from 'vue'
import gsap from 'gsap'
import { Icon } from '@iconify/vue'
import type { CaseItem } from '../data/cases'
import { categories } from '../data/cases'

const props = defineProps<{
  modelValue: boolean
  caseItem: CaseItem | null
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

function close() {
  const content = document.querySelector('.case-detail-modal-content')
  const overlay = document.querySelector('.case-detail-modal-overlay')
  if (content && overlay) {
    gsap.to(content, {
      opacity: 0,
      scale: 0.95,
      y: 10,
      duration: 0.2,
      ease: 'power2.in',
    })
    gsap.to(overlay, {
      opacity: 0,
      duration: 0.25,
      delay: 0.1,
      onComplete: () => {
        emit('update:modelValue', false)
        document.body.style.overflow = ''
      },
    })
  } else {
    emit('update:modelValue', false)
    document.body.style.overflow = ''
  }
}

function onBackdropClick(event: MouseEvent) {
  if (event.target === event.currentTarget) {
    close()
  }
}

watch(
  () => props.modelValue,
  (val) => {
    if (val) {
      document.body.style.overflow = 'hidden'
      nextTick(() => {
        gsap.fromTo(
          '.case-detail-modal-overlay',
          { opacity: 0 },
          { opacity: 1, duration: 0.2 }
        )
        gsap.fromTo(
          '.case-detail-modal-content',
          { opacity: 0, scale: 0.92, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.35, delay: 0.05, ease: 'power2.out' }
        )
      })
    }
  }
)
</script>

<template>
  <Teleport to="body">
    <div
      v-if="modelValue"
      class="case-detail-modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4"
      style="background: rgba(0, 0, 0, 0.55); backdrop-filter: blur(8px)"
      @click="onBackdropClick"
    >
      <div
        class="case-detail-modal-content bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl"
      >
        <!-- Header -->
        <div
          class="sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-line/50 px-6 md:px-8 py-5 flex items-start justify-between gap-4"
        >
          <div>
            <div class="flex items-center gap-2 mb-2">
              <span
                class="px-3 py-1 rounded-md text-sm font-semibold bg-brand-soft text-brand"
              >
                {{ categories.find(cat => cat.id === caseItem?.category)?.label }}
              </span>
              <span class="text-xs text-ink-tertiary">
                {{ caseItem?.title }}
              </span>
            </div>
            <h3
              class="text-xl md:text-2xl font-bold text-ink-primary leading-tight"
            >
              {{ caseItem?.client }}
            </h3>
          </div>
          <button
            class="shrink-0 w-10 h-10 rounded-full bg-surface-muted flex items-center justify-center text-ink-secondary hover:text-ink-primary hover:bg-surface-hover transition-colors"
            @click="close"
          >
            <Icon icon="lucide:x" class="w-5 h-5" />
          </button>
        </div>

        <!-- Body -->
        <div class="px-6 md:px-8 py-6 space-y-6">
          <!-- 客户背景 -->
          <div>
            <h4
              class="flex items-center gap-2 text-sm font-bold text-ink-primary mb-3"
            >
              <Icon icon="lucide:building" class="w-4 h-4 text-brand" />
              客户背景
            </h4>
            <p class="text-base text-ink-secondary leading-relaxed">
              {{ caseItem?.background || caseItem?.client }}
            </p>
          </div>

          <!-- 核心痛点 -->
          <div
            class="rounded-2xl bg-[#FEF2F2] border border-[#FECACA] p-5 md:p-6"
          >
            <h4
              class="flex items-center gap-2 text-sm font-bold text-[#991B1B] mb-4"
            >
              <Icon icon="lucide:alert-circle" class="w-4 h-4" />
              核心痛点
            </h4>
            <ul class="space-y-3">
              <li
                v-for="(p, idx) in caseItem?.pain"
                :key="idx"
                class="text-sm md:text-base text-[#7F1D1D] leading-relaxed flex items-start gap-2.5"
              >
                <span
                  class="mt-2 w-1.5 h-1.5 rounded-full bg-[#EF4444] shrink-0"
                />
                {{ p }}
              </li>
            </ul>
          </div>

          <!-- 方案细节 -->
          <div>
            <h4
              class="flex items-center gap-2 text-sm font-bold text-brand mb-4"
            >
              <Icon icon="lucide:check-circle" class="w-4 h-4" />
              方案细节
            </h4>
            <ul class="space-y-3">
              <li
                v-for="(s, idx) in caseItem?.solution"
                :key="idx"
                class="text-base text-ink-secondary leading-relaxed flex items-start gap-2.5"
              >
                <Icon
                  icon="lucide:check"
                  class="w-5 h-5 text-brand shrink-0 mt-0.5"
                />
                {{ s }}
              </li>
            </ul>
          </div>

          <!-- 解决了什么问题 -->
          <div v-if="caseItem?.solved?.length">
            <h4
              class="flex items-center gap-2 text-sm font-bold text-brand mb-4"
            >
              <Icon icon="lucide:check-circle" class="w-4 h-4" />
              解决问题
            </h4>
            <ul class="space-y-3">
              <li
                v-for="(s, idx) in caseItem.solved"
                :key="idx"
                class="text-base text-ink-secondary leading-relaxed flex items-start gap-2.5"
              >
                <Icon
                  icon="lucide:check"
                  class="w-5 h-5 text-brand shrink-0 mt-0.5"
                />
                {{ s }}
              </li>
            </ul>
          </div>

          <!-- 成效 -->
          <div
            v-if="caseItem?.effect || caseItem?.result"
            class="rounded-xl bg-brand-soft border border-brand/20 p-4 md:p-5"
          >
            <p class="text-sm md:text-base font-semibold text-brand">
              <span class="inline-flex items-center gap-2">
                <Icon icon="lucide:trending-up" class="w-4 h-4" />
                成效：
              </span>
              {{ caseItem?.effect || caseItem?.result }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
