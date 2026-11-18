<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'

const titleRef = ref<HTMLElement | null>(null)
const gridRef = ref<HTMLElement | null>(null)

useScrollReveal(titleRef, { y: 30 })
useScrollReveal(gridRef, { y: 30, delay: 0.15 })

const items = [
  { image: new URL('../../assets/ChatU/19.webp', import.meta.url).href, title: '多智能体调度', desc: '跨模型协作' },
  { image: new URL('../../assets/ChatU/18.webp', import.meta.url).href, title: '文本生成创作', desc: '方案/营销/代码/广告' },
  { image: new URL('../../assets/ChatU/4.webp', import.meta.url).href, title: '多语种互译', desc: '100+ 语种' },
  { image: new URL('../../assets/ChatU/5.webp', import.meta.url).href, title: '文本分类', desc: '摘要 · 改写' },
  { image: new URL('../../assets/ChatU/6.webp', import.meta.url).href, title: '多模态交互', desc: '图/文/音/视频' },
  { image: new URL('../../assets/ChatU/7.webp', import.meta.url).href, title: '文生视频/音乐', desc: 'AIGC 创作' },
  { image: new URL('../../assets/ChatU/8.webp', import.meta.url).href, title: '阅读理解', desc: '文件分析' },
  { image: new URL('../../assets/ChatU/9.webp', import.meta.url).href, title: '逻辑推理', desc: '复杂任务分解' },
  { image: new URL('../../assets/ChatU/10.webp', import.meta.url).href, title: '知识问答', desc: '企业知识库' },
  { image: new URL('../../assets/ChatU/11.webp', import.meta.url).href, title: '代码生成', desc: '自然语言驱动代码开发' },
]
</script>

<template>
  <section class="py-12 md:py-20 bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref="titleRef" class="text-center mb-8 md:mb-10">
        <h2
          class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight"
        >
          10 大 AI 能力矩阵
        </h2>
      </div>

      <div ref="gridRef" class="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div
          v-for="item in items"
          :key="item.title"
          class="flex flex-col text-center p-5 rounded-2xl bg-surface-card border border-line/50 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          <div class="aspect-video rounded-xl overflow-hidden mb-3">
            <img
              :src="item.image"
              :alt="item.title"
              class="w-full h-full object-cover"
            />
          </div>
          <span class="text-sm font-semibold text-ink-primary">{{ item.title }}</span>
          <span class="text-xs text-ink-secondary mt-1">{{ item.desc }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
