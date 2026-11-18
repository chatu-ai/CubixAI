<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import Chip from '../../components/Chip.vue'

const titleRef = ref<HTMLElement | null>(null)
const tableRef = ref<HTMLElement | null>(null)

useScrollReveal(titleRef, { y: 30 })
useScrollReveal(tableRef, { y: 30, delay: 0.15 })

const rows = [
  {
    dim: '价格',
    competitor: 'Claude / ChatGPT 企业版费用高',
    chatu: '只需 1/10 费用',
  },
  {
    dim: '门槛',
    competitor: '开源Agent工具要工程化能力',
    chatu: '真正开箱即用零门槛',
  },
  {
    dim: '场景',
    competitor: '通用型智能Agent产品功能发散',
    chatu: '更聚焦企业高频业务',
  },
  {
    dim: '模型',
    competitor: '大模型厂商生态封闭',
    chatu: '不站队 任意切换',
  },
  {
    dim: '资源',
    competitor: '普通服务商专家资源有限',
    chatu: '250 万+ 社区规模',
  },
  {
    dim: '产权',
    competitor: '开源方案产权风险',
    chatu: '可审计 可追溯 可担责',
  },
]
</script>

<template>
  <section class="py-12 md:py-20 bg-surface-base">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref="titleRef" class="text-center mb-8 md:mb-10">
        <h2
          class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight"
        >
          对比友商，我们的优势
        </h2>
      </div>

      <!-- Desktop Table -->
      <div ref="tableRef" class="hidden md:block">
        <div
          class="rounded-2xl bg-surface-card border border-line shadow-card overflow-hidden"
        >
          <div
            class="grid grid-cols-[140px_1fr_1fr] bg-[#433487] border-b border-line"
          >
            <div class="px-6 py-4 text-sm font-semibold text-white">
              维度
            </div>
            <div class="px-6 py-4 text-sm font-semibold text-white">
              友商特点
            </div>
            <div class="px-6 py-4 text-sm font-semibold text-white">
              ChatU 优势
            </div>
          </div>
          <div
            v-for="(row, i) in rows"
            :key="row.dim"
            class="grid grid-cols-[140px_1fr_1fr] border-b border-line last:border-b-0"
            :class="i % 2 === 0 ? 'bg-surface-card' : 'bg-surface-muted/50'"
          >
            <div class="px-6 py-4 flex items-center">
              <Chip>{{ row.dim }}</Chip>
            </div>
            <div
              class="px-6 py-4 flex items-center text-sm text-ink-secondary"
            >
              {{ row.competitor }}
            </div>
            <div
              class="px-6 py-4 flex items-center text-sm font-semibold text-[#433487] border-l-2 border-[#433487]"
            >
              {{ row.chatu }}
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Cards -->
      <div class="md:hidden space-y-4">
        <div
          v-for="row in rows"
          :key="row.dim"
          class="p-5 rounded-2xl bg-surface-card border border-line shadow-card"
        >
          <Chip class="mb-3">{{ row.dim }}</Chip>
          <div class="text-sm text-ink-secondary mb-2">
            <span class="text-ink-tertiary">友商：</span>{{ row.competitor }}
          </div>
          <div
            class="text-sm font-semibold text-[#433487] border-l-2 border-[#433487] pl-3"
          >
            ChatU：{{ row.chatu }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
