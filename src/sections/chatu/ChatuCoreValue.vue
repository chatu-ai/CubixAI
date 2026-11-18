<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import { Icon } from '@iconify/vue'

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
  <section class="py-12 md:py-20 bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref="titleRef" class="text-center mb-8 md:mb-10">
        <h2
          class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight"
        >
          三大核心价值
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Card 1 -->
        <div
          ref="card1Ref"
          class="p-8 rounded-3xl bg-surface-card border border-line shadow-card"
        >
          <div class="aspect-video rounded-2xl overflow-hidden mb-6">
            <img
              src="@/assets/ChatU/1.webp"
              alt="多引擎・更自由"
              class="w-full h-full object-cover"
            />
          </div>
          <h3 class="text-xl font-semibold text-ink-primary mb-4">
            多引擎・更自由
          </h3>
          <ul class="space-y-3">
            <li class="flex items-start gap-2 text-sm text-ink-secondary">
              <Icon icon="lucide:check" class="w-4 h-4 text-[#433487] shrink-0 mt-0.5" />
              沉淀 AI 资产，兼顾权限管控与高效协同
            </li>
            <li class="flex items-start gap-2 text-sm text-ink-secondary">
              <Icon icon="lucide:check" class="w-4 h-4 text-[#433487] shrink-0 mt-0.5" />
              不站队任何厂商
            </li>
            <li class="flex items-start gap-2 text-sm text-ink-secondary">
              <Icon icon="lucide:check" class="w-4 h-4 text-[#433487] shrink-0 mt-0.5" />
              按场景自动路由最优引擎
            </li>
          </ul>
        </div>

        <!-- Card 2 -->
        <div
          ref="card2Ref"
          class="p-8 rounded-3xl bg-surface-card border border-line shadow-card"
        >
          <div class="aspect-video rounded-2xl overflow-hidden mb-6">
            <img
              src="@/assets/ChatU/2.webp"
              alt="多模态 · 全能力"
              class="w-full h-full object-cover"
            />
          </div>
          <h3 class="text-xl font-semibold text-ink-primary mb-4">
            多模态 · 全能力
          </h3>
          <ul class="space-y-3">
            <li class="flex items-start gap-2 text-sm text-ink-secondary">
              <Icon icon="lucide:check" class="w-4 h-4 text-[#433487] shrink-0 mt-0.5" />
              文本/图像/语音/视频统一调度
            </li>
            <li class="flex items-start gap-2 text-sm text-ink-secondary">
              <Icon icon="lucide:check" class="w-4 h-4 text-[#433487] shrink-0 mt-0.5" />
              数字人交互能力
            </li>
            <li class="flex items-start gap-2 text-sm text-ink-secondary">
              <Icon icon="lucide:check" class="w-4 h-4 text-[#433487] shrink-0 mt-0.5" />
              全场景覆盖无短板
            </li>
          </ul>
        </div>

        <!-- Card 3 -->
        <div
          ref="card3Ref"
          class="p-8 rounded-3xl bg-surface-card border border-line shadow-card"
        >
          <div class="aspect-video rounded-2xl overflow-hidden mb-6">
            <img
              src="@/assets/ChatU/3.webp"
              alt="多智能体 · 可编排"
              class="w-full h-full object-cover"
            />
          </div>
          <h3 class="text-xl font-semibold text-ink-primary mb-4">
            多智能体 · 可编排
          </h3>
          <ul class="space-y-3">
            <li class="flex items-start gap-2 text-sm text-ink-secondary">
              <Icon icon="lucide:check" class="w-4 h-4 text-[#433487] shrink-0 mt-0.5" />
              Workflow 可视化编排
            </li>
            <li class="flex items-start gap-2 text-sm text-ink-secondary">
              <Icon icon="lucide:check" class="w-4 h-4 text-[#433487] shrink-0 mt-0.5" />
              企业级任务流自动化
            </li>
            <li class="flex items-start gap-2 text-sm text-ink-secondary">
              <Icon icon="lucide:check" class="w-4 h-4 text-[#433487] shrink-0 mt-0.5" />
              多智能体协同作业
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
