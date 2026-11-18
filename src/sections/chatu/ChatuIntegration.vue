<script setup lang="ts">
import { ref, computed } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import Chip from '../../components/Chip.vue'
import { Icon } from '@iconify/vue'
import { useContent } from '@/i18n/useContent'
import { chatuContent } from '@/content/chatu'

const c = useContent(chatuContent)

const leftRef = ref<HTMLElement | null>(null)
const gridRef = ref<HTMLElement | null>(null)
const bottomRef = ref<HTMLElement | null>(null)

useScrollReveal(leftRef, { y: 30 })
useScrollReveal(gridRef, { y: 30, delay: 0.15 })
useScrollReveal(bottomRef, { y: 20, delay: 0.3 })

// 平台名称（name）来自 c.integration.platforms，按顺序对应
const PLATFORMS: { svgId?: string; icon?: string; iconify: boolean; color?: string }[] = [
  { svgId: 'weixin', iconify: false },
  { svgId: 'feishu', iconify: false },
  { svgId: 'dingtalk', iconify: false },
  { svgId: 'douyin', iconify: false },
  { svgId: 'weibo', iconify: false },
  { icon: 'lucide:layout-grid', iconify: true, color: 'text-emerald-500' },
  { icon: 'lucide:smartphone', iconify: true, color: 'text-blue-500' },
  { icon: 'lucide:mail', iconify: true, color: 'text-red-500' },
  { icon: 'lucide:building-2', iconify: true, color: 'text-indigo-500' },
]

const platformList = computed(() =>
  PLATFORMS.map((p, i) => ({ ...p, name: c.value.integration.platforms[i] ?? '' })),
)
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
            {{ c.integration.title }}
          </h2>
          <p class="section-subtitle">
            {{ c.integration.subtitle }}
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
                <img v-else-if="p.svgId === 'feishu'" src="@/assets/icon/fs.webp" class="w-8 h-8 object-contain" :alt="p.name" />
                <img v-else-if="p.svgId === 'dingtalk'" src="@/assets/icon/dd.webp" class="w-8 h-8 object-contain" :alt="p.name" />
                <img v-else-if="p.svgId === 'weixin'" src="@/assets/icon/wx.webp" class="w-8 h-8 object-contain" :alt="p.name" />
                <img v-else-if="p.svgId === 'weibo'" src="@/assets/icon/xhs.webp" class="w-8 h-8 object-contain" :alt="p.name" />
                <img v-else-if="p.svgId === 'douyin'" src="@/assets/icon/qywx.webp" class="w-8 h-8 object-contain" :alt="p.name" />
                <span class="text-xs font-medium text-ink-secondary text-center">{{ p.name }}</span>
              </div>
          </div>
        </div>
      </div>

      <!-- 下方 Action 插件 -->
      <div ref="bottomRef" class="mt-12 md:mt-16 text-center">
        <p class="text-ink-secondary mb-4">
          {{ c.integration.actionTitle }}
        </p>
        <div class="flex flex-wrap justify-center gap-2">
          <Chip v-for="chip in c.integration.actionChips" :key="chip" variant="muted">{{ chip }}</Chip>
        </div>
      </div>
    </div>
  </section>
</template>

