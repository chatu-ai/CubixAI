<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import Chip from '../../components/Chip.vue'
import AppImage from '../../components/AppImage.vue'
import uviewImg from '@/assets/UView.webp'

const leftRef = ref<HTMLElement | null>(null)
const rightRef = ref<HTMLElement | null>(null)

useScrollReveal(leftRef, { y: 30, delay: 0.15 })
useScrollReveal(rightRef, { y: 30 })

const points = [
  '2D 图转 3D 立体展示',
  '数据报表智能总结',
  '固定格式文件自动生成',
]
</script>

<template>
  <section class="py-10 md:py-16 bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center"
      >
        <!-- 左：图 -->
        <div ref="leftRef" class="order-2 lg:order-1">
          <div
            class="rounded-2xl border border-line shadow-card overflow-hidden"
          >
            <AppImage :src="uviewImg" class="w-full" alt="UView" />
          </div>
        </div>

        <!-- 右：文字 -->
        <div ref="rightRef" class="order-1 lg:order-2">
          <h2
            class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight leading-tight"
          >
            UView · 数据内容可视化编辑
          </h2>

          <ul class="mt-6 space-y-3">
            <li
              v-for="p in points"
              :key="p"
              class="flex items-start gap-3 text-ink-secondary"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-[#433487] mt-2 shrink-0" />
              {{ p }}
            </li>
          </ul>

          <div class="flex flex-wrap gap-2 mt-8">
            <Chip variant="muted">多样化展示</Chip>
            <Chip variant="muted">动态更新</Chip>
            <Chip variant="muted">交互性</Chip>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
