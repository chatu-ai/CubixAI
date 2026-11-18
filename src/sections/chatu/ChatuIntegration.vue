<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import Chip from '../../components/Chip.vue'
import { Icon } from '@iconify/vue'

const leftRef = ref<HTMLElement | null>(null)
const gridRef = ref<HTMLElement | null>(null)
const bottomRef = ref<HTMLElement | null>(null)

useScrollReveal(leftRef, { y: 30 })
useScrollReveal(gridRef, { y: 30, delay: 0.15 })
useScrollReveal(bottomRef, { y: 20, delay: 0.3 })

const platformList = [
  { name: '微信', svgId: 'weixin', iconify: false },
  { name: '飞书', svgId: 'feishu', iconify: false },
  { name: '钉钉', svgId: 'dingtalk', iconify: false },
  { name: '企业微信', svgId: 'douyin', iconify: false },
  { name: '小红书', svgId: 'weibo', iconify: false },
  { name: '小程序', icon: 'lucide:layout-grid', iconify: true, color: 'text-emerald-500' },
  { name: 'App', icon: 'lucide:smartphone', iconify: true, color: 'text-blue-500' },
  { name: '邮件', icon: 'lucide:mail', iconify: true, color: 'text-red-500' },
  { name: '企业内部软件', icon: 'lucide:building-2', iconify: true, color: 'text-indigo-500' },
]
</script>

<template>
  <section class="py-12 md:py-20 bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
      >
        <!-- 左：文字 -->
        <div ref="leftRef">
          <h2
            class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight leading-tight"
          >
            无缝接入，沉淀企业 AI 资产
          </h2>
          <p class="mt-4 text-lg text-ink-secondary leading-relaxed">
            ChatU 开放丰富的集成能力，一键接入企业现有系统与工作流，让
            AI 能力真正融入日常业务场景。
          </p>
        </div>

        <!-- 右：9 宫格 -->
        <div ref="gridRef" class="grid grid-cols-3 gap-3">
          <div
            v-for="p in platformList"
            :key="p.name"
            class="flex items-center justify-center h-20 rounded-xl bg-surface-muted border border-line/50 transition-all duration-300"
          >
            <div class="flex flex-col items-center gap-1">
                <Icon v-if="p.iconify" :icon="p.icon!" class="w-8 h-8" :class="p.color" />
                <img v-else-if="p.svgId === 'feishu'" src="@/assets/icon/fs.webp" class="w-8 h-8 object-contain" alt="飞书" />
                <img v-else-if="p.svgId === 'dingtalk'" src="@/assets/icon/dd.webp" class="w-8 h-8 object-contain" alt="钉钉" />
                <img v-else-if="p.svgId === 'weixin'" src="@/assets/icon/wx.webp" class="w-8 h-8 object-contain" alt="微信" />
                <img v-else-if="p.svgId === 'weibo'" src="@/assets/icon/xhs.webp" class="w-8 h-8 object-contain" alt="小红书" />
                <img v-else-if="p.svgId === 'douyin'" src="@/assets/icon/qywx.webp" class="w-8 h-8 object-contain" alt="企业微信" />
                <span class="text-xs font-medium text-ink-secondary text-center">{{ p.name }}</span>
              </div>
          </div>
        </div>
      </div>

      <!-- 下方 Action 插件 -->
      <div ref="bottomRef" class="mt-12 md:mt-16 text-center">
        <p class="text-ink-secondary mb-4">
          Action 自定义插件 —— 按需扩展，无限可能
        </p>
        <div class="flex flex-wrap justify-center gap-2">
          <Chip variant="muted">IOT 控制</Chip>
          <Chip variant="muted">系统扩展</Chip>
          <Chip variant="muted">服务定制</Chip>
        </div>
      </div>
    </div>
  </section>
</template>

