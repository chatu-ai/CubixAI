<script setup lang="ts">
import { ref, computed } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import Chip from '../../components/Chip.vue'
import BrandButton from '../../components/BrandButton.vue'
import CaseDetailModal from '../../components/CaseDetailModal.vue'
import { cases } from '../../data/cases'
import type { CaseItem } from '../../data/cases'

const titleRef = ref<HTMLElement | null>(null)
const card1Ref = ref<HTMLElement | null>(null)
const card2Ref = ref<HTMLElement | null>(null)
const card3Ref = ref<HTMLElement | null>(null)

useScrollReveal(titleRef, { y: 30 })
useScrollReveal(card1Ref, { y: 30, delay: 0.1 })
useScrollReveal(card2Ref, { y: 30, delay: 0.2 })
useScrollReveal(card3Ref, { y: 30, delay: 0.3 })

function setCardRef(el: HTMLElement | null, idx: number) {
  if (idx === 0) card1Ref.value = el
  else if (idx === 1) card2Ref.value = el
  else card3Ref.value = el
}

const featuredIds = ['c1', 'c3', 'c5']
const featuredCases = computed(() => {
  return featuredIds
    .map((id) => cases.find((c) => c.id === id))
    .filter(Boolean) as CaseItem[]
})

const selectedCase = ref<CaseItem | null>(null)
const isModalOpen = ref(false)

function openCaseModal(caseItem: CaseItem) {
  selectedCase.value = caseItem
  isModalOpen.value = true
}
</script>

<template>
  <section class="py-12 md:py-20 bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref="titleRef" class="text-center mb-8 md:mb-10">
        <h2
          class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight"
        >
          客户案例精选
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(c, idx) in featuredCases"
          :key="c.id"
          :ref="(el) => setCardRef(el as HTMLElement | null, idx)"
          class="group rounded-3xl bg-surface-card border border-line shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
        >
          <!-- 图片区域 -->
          <div class="relative h-52 overflow-hidden">
            <img
              :src="c.image"
              :alt="c.client"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
            />
          </div>

          <!-- 内容区域 -->
          <div class="p-6 md:p-8">
            <Chip variant="muted">{{ c.tag }}</Chip>
            <h3 class="mt-4 text-xl font-semibold text-ink-primary leading-tight">
              {{ c.client }}
            </h3>
            <p class="mt-1 text-sm font-medium text-brand">
              {{ c.title }}
            </p>
            <p class="mt-3 text-sm text-ink-secondary leading-relaxed">
              {{ c.result }}
            </p>
            <div class="mt-6">
              <BrandButton
                variant="ghost"
                size="sm"
                class="hover:!border-[#433487] hover:!text-[#433487]"
                arrow
                @click="openCaseModal(c)"
              >
                查看案例
              </BrandButton>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10 text-center">
        <BrandButton variant="ghost" to="/cases" class="hover:!border-[#433487] hover:!text-[#433487]" arrow>
          查看全部案例
        </BrandButton>
      </div>
    </div>
  </section>

  <CaseDetailModal v-model="isModalOpen" :case-item="selectedCase" />
</template>
