<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'

const topRef = ref<HTMLElement | null>(null)
useScrollReveal(topRef, { y: 30 })

const steps = [
  { num: '01', title: '开机', desc: '通电即用，没有安装向导，也不用敲命令行' },
  { num: '02', title: '启动 ChatU Mate', desc: '点一下，DeepSeek Harness 等智能体随即就绪' },
  { num: '03', title: '开始工作', desc: '说出任务，AI 拆解、调用工具、把事做完' },
]
</script>

<template>
  <section class="py-20 md:py-[120px] bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref="topRef">
        <p
          class="text-center text-sm font-semibold text-[#2DB4E6] tracking-wider mb-4"
        >
          会用电脑，就能用 Agent
        </p>
        <h2
          class="text-center text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight mb-12"
        >
          三步开启 AI 之旅
        </h2>

        <div class="flex flex-col md:flex-row items-center justify-center gap-4">
          <template v-for="(step, i) in steps" :key="step.num">
            <div class="text-center w-full md:w-48">
              <div
                class="text-[72px] font-bold bg-gradient-to-br from-[#2DB4E6] to-[#1A8BC4] bg-clip-text text-transparent leading-none"
              >
                {{ step.num }}
              </div>
              <h3 class="mt-4 text-xl font-semibold text-ink-primary">
                {{ step.title }}
              </h3>
              <p class="mt-2 text-sm text-ink-secondary leading-relaxed">{{ step.desc }}</p>
            </div>
            <div v-if="i < steps.length - 1" class="hidden md:block">
              <svg class="w-6 h-6 text-[#2DB4E6]/30" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>