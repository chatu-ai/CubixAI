<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'

const titleRef = ref<HTMLElement | null>(null)
const gridRef = ref<HTMLElement | null>(null)

useScrollReveal(titleRef, { y: 30 })
useScrollReveal(gridRef, { y: 30, delay: 0.15 })

const items = [
  { image: new URL('../../assets/ChatU/12.webp', import.meta.url).href, title: '源码交付', desc: '完整安全的 ChatU 源码 + 详尽文档' },
  { image: new URL('../../assets/ChatU/13.webp', import.meta.url).href, title: '私有部署', desc: '深入沟通业务与技术需求' },
  { image: new URL('../../assets/ChatU/14.webp', import.meta.url).href, title: '数据安全', desc: '本地部署 + 远程培训现场支持' },
  { image: new URL('../../assets/ChatU/15.webp', import.meta.url).href, title: 'Cloud 原生', desc: '架构稳定 + 国内合规' },
  { image: new URL('../../assets/ChatU/16.webp', import.meta.url).href, title: '技术支持', desc: '长期维护协议 + 持续服务' },
  { image: new URL('../../assets/ChatU/17.webp', import.meta.url).href, title: '灵活拓展', desc: '一站式解决方案' },
]
</script>

<template>
  <section class="py-10 md:py-16 bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref="titleRef" class="text-center mb-6 md:mb-8">
        <h2
          class="section-title"
        >
          6 大部署保障
        </h2>
      </div>

      <div ref="gridRef" class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div
          v-for="item in items"
          :key="item.title"
          class="flex flex-col p-6 rounded-2xl bg-surface-card border border-line/50 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          <div class="aspect-video rounded-xl overflow-hidden mb-4">
            <img
              :src="item.image"
              :alt="item.title"
              class="w-full h-full object-cover"
            />
          </div>
          <h3 class="text-base font-semibold text-ink-primary">
            {{ item.title }}
          </h3>
          <p class="mt-1 text-sm text-ink-secondary">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
