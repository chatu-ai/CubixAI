<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import { Icon } from '@iconify/vue'

const sectionRef = ref<HTMLElement | null>(null)
useScrollReveal(sectionRef, { y: 30 })

const cards = [
  {
    icon: 'lucide:graduation-cap',
    title: '全面课程体系',
    desc: 'L0 AI 认知入门 → L1 工具实操 → L2 多智能体协同 → L3 企业工作流设计；线上录播 + 线下面授',
  },
  {
    icon: 'lucide:presentation',
    title: '线下训练营',
    desc: '园区夜校、OPC 实战营（通识 → 认证 → 实战）、加速营；优秀学员可注册 OPC 入园',
  },
  {
    icon: 'lucide:map-pin',
    title: '多城社群网络',
    desc: '线上交流经验，线下面对面分享；PEC 大会 · 250 万+ 社群',
  },
  {
    icon: 'lucide:headset',
    title: '客服与售后',
    desc: '24 小时智能客服；激活后 7 天免费人工远程指导，之后按次付费',
  },
]
</script>

<template>
  <section ref="sectionRef" class="py-20 md:py-[120px] bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12 md:mb-16">
        <h2
          class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight"
        >
          到手不是结束，是开始
        </h2>
        <p class="mt-4 text-lg text-ink-secondary">
          不止入手一台智方体，配套服务同步就位
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div
          v-for="c in cards"
          :key="c.title"
          class="flex flex-col p-7 rounded-2xl bg-surface-card border border-line/50 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          <div class="w-12 h-12 rounded-xl bg-[#E6F5FB] flex items-center justify-center mb-5">
            <Icon :icon="c.icon" class="w-6 h-6 text-[#2DB4E6]" />
          </div>
          <h3 class="text-lg font-semibold text-ink-primary">{{ c.title }}</h3>
          <p class="mt-2 text-sm text-ink-secondary leading-relaxed flex-1">{{ c.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
