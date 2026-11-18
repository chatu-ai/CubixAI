<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { useScrollReveal } from '../../composables/useScrollReveal'

const titleRef = ref<HTMLElement | null>(null)
const tagsRef = ref<HTMLElement | null>(null)
const cardsRef = ref<HTMLElement | null>(null)

useScrollReveal(titleRef, { y: 30 })
useScrollReveal(tagsRef, { y: 20, delay: 0.1 })
useScrollReveal(cardsRef, { y: 30, delay: 0.2 })

const categories = [
  '行政',
  '销售',
  '教育',
  '科研',
  '市场营销',
  '人力资源',
  '财务',
  '政务',
]

const features = [
  { title: '按岗定"体"', desc: '个性化服务', icon: 'lucide:user-cog' },
  { title: '跨模型协作', desc: '发挥各模型能力', icon: 'lucide:network' },
  { title: '内容分级管理', desc: '权限分配', icon: 'lucide:folder-lock' },
  { title: '数据安全隐私', desc: '敏感信息不泄露', icon: 'lucide:shield-check' },
]
</script>

<template>
  <section class="py-10 md:py-16 bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref="titleRef" class="text-center mb-8">
        <h2
          class="section-title"
        >
          为企业打造专属的智能体平台
        </h2>
        <p class="section-subtitle">
          千余种智能体覆盖 8 大职能与业务场景
        </p>
      </div>

      <!-- 8 大分类标签 -->
      <div
        ref="tagsRef"
        class="flex flex-wrap justify-center gap-3 mb-8"
      >
        <span
          v-for="cat in categories"
          :key="cat"
          class="px-4 py-2 rounded-full text-sm font-medium bg-surface-muted text-ink-secondary border border-line/50 hover:bg-surface-muted/80 transition-colors cursor-default"
        >
          {{ cat }}
        </span>
      </div>

      <!-- 4 个特性卡 -->
      <div
        ref="cardsRef"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        <div
          v-for="feat in features"
          :key="feat.title"
          class="p-6 rounded-2xl bg-white border border-line/50 shadow-sm hover:shadow-card hover:border-[#433487]/20 transition-all duration-300"
        >
          <span class="mb-4 w-10 h-10 rounded-xl bg-[#433487]/10 text-[#433487] flex items-center justify-center">
            <Icon :icon="feat.icon" class="w-5 h-5" aria-hidden="true" />
          </span>
          <h4 class="text-base font-semibold text-ink-primary mb-1">
            {{ feat.title }}
          </h4>
          <p class="text-sm text-ink-secondary">{{ feat.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
