<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import { Icon } from '@iconify/vue'

const sectionRef = ref<HTMLElement | null>(null)
useScrollReveal(sectionRef, { y: 30 })

const columns = ['对比项', '智方体', '云端 AI 工具', '传统 AI 盒子', '自行下载安装']

const rows = [
  { dim: '数据存放', us: '默认本地，可接内网 / 云端', cloud: '上传云端', box: '本地', diy: '取决于配置' },
  { dim: '安装配置', us: '不需要，开箱即用', cloud: '不需要', box: '需要专业安装', diy: '需要自行搭建，门槛高' },
  { dim: '新手上手', us: '2 分钟', cloud: '容易', box: '较难', diy: '很难' },
  { dim: '费用方式', us: '一次买断，软件终身升级', cloud: '按月订阅', box: '硬件费用', diy: '时间成本高' },
  { dim: '自带屏幕', us: '7 英寸触屏', cloud: '—', box: '无，需另配', diy: '视设备而定' },
  { dim: '专为 Agent 设计', us: '预装整套智能体', cloud: '否', box: '部分', diy: '否' },
  { dim: '出问题找谁', us: '24 小时智能客服 + 专家远程', cloud: '平台客服', box: '自己 / 社区', diy: '自己' },
]
</script>

<template>
  <section ref="sectionRef" class="py-20 md:py-[120px] bg-surface-base">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-10">
        <h2
          class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight"
        >
          为什么选择智方体？
        </h2>
        <p class="mt-4 text-lg text-ink-secondary">
          同样是「用 AI」，差别在这里
        </p>
      </div>

      <!-- Table -->
      <div class="rounded-2xl bg-surface-card border border-line shadow-card overflow-x-auto">
        <!-- Header -->
        <div class="grid grid-cols-[110px_1.2fr_1fr_1fr_1fr] min-w-[720px] border-b border-line bg-surface-muted/60">
          <div class="px-4 py-4 text-xs font-semibold text-ink-tertiary"></div>
          <div class="px-4 py-4 text-sm font-semibold text-white bg-[#2DB4E6] flex items-center">
            {{ columns[1] }}
          </div>
          <div class="px-4 py-4 text-sm font-semibold text-ink-secondary flex items-center">{{ columns[2] }}</div>
          <div class="px-4 py-4 text-sm font-semibold text-ink-secondary flex items-center">{{ columns[3] }}</div>
          <div class="px-4 py-4 text-sm font-semibold text-ink-secondary flex items-center">{{ columns[4] }}</div>
        </div>

        <!-- Rows -->
        <div
          v-for="(row, idx) in rows"
          :key="row.dim"
          class="grid grid-cols-[110px_1.2fr_1fr_1fr_1fr] min-w-[720px] border-b border-line last:border-b-0"
          :class="idx % 2 === 0 ? 'bg-surface-card' : 'bg-surface-muted/40'"
        >
          <div class="px-4 py-4 flex items-center">
            <span class="text-sm text-ink-tertiary">{{ row.dim }}</span>
          </div>
          <div class="px-4 py-4 flex items-center gap-1.5 text-sm font-semibold text-[#2DB4E6] bg-[#E6F5FB]/50">
            <Icon icon="lucide:check" class="w-4 h-4 shrink-0" />
            {{ row.us }}
          </div>
          <div class="px-4 py-4 flex items-center text-sm text-ink-secondary">{{ row.cloud }}</div>
          <div class="px-4 py-4 flex items-center text-sm text-ink-secondary">{{ row.box }}</div>
          <div class="px-4 py-4 flex items-center text-sm text-ink-secondary">{{ row.diy }}</div>
        </div>
      </div>

      <!-- 底部大字 -->
      <div class="mt-10 text-center">
        <p class="text-2xl md:text-[32px] font-semibold text-[#2DB4E6]">
          省时、省力、省心、零门槛
        </p>
      </div>
    </div>
  </section>
</template>
