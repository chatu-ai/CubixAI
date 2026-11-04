<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import Chip from '../../components/Chip.vue'

const sectionRef = ref<HTMLElement | null>(null)
useScrollReveal(sectionRef, { y: 30 })

const items = [
  {
    num: '01',
    image: new URL('../../assets/zft/ld1.webp', import.meta.url).href,
    title: '开箱即用',
    desc: '预装系统、智能体与模型，2 分钟从拆箱到开工',
    tag: '零配置 · 零门槛',
  },
  {
    num: '02',
    image: new URL('../../assets/zft/ld2.webp', import.meta.url).href,
    title: '本地安全',
    desc: 'Qwen 等本地模型离线可用，核心资料无需上传公共云',
    tag: '数据默认本地 · 3C 认证',
  },
  {
    num: '03',
    image: new URL('../../assets/zft/ld3.webp', import.meta.url).href,
    title: '预装智能体',
    desc: '内置 DeepSeek Harness、Hermes、OpenClaw，会拆任务、调工具',
    tag: '多智能体 · 终身升级（软件）',
  },
  {
    num: '04',
    image: new URL('../../assets/zft/ld4.webp', import.meta.url).href,
    title: '7 英寸高清触屏',
    desc: '自带屏幕，手指一点就能对话；也可外接显示器和键盘',
    tag: '触控操作 · 随身携带',
  },
]
</script>

<template>
  <section ref="sectionRef" class="py-20 md:py-[120px] bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div
          v-for="item in items"
          :key="item.num"
          class="flex flex-col p-6 md:p-8 rounded-2xl bg-surface-card border border-line shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          <div class="mt-4 aspect-video rounded-xl overflow-hidden">
            <img
              :src="item.image"
              :alt="item.title"
              class="w-full h-full object-cover"
            />
          </div>
          <h3 class="mt-4 text-xl font-semibold text-ink-primary">
            {{ item.title }}
          </h3>
          <p class="mt-2 text-sm text-ink-secondary leading-relaxed flex-1">
            {{ item.desc }}
          </p>
          <Chip class="mt-4 self-start !bg-[#E6F5FB] !text-[#1A8BC4]">{{ item.tag }}</Chip>
        </div>
      </div>
    </div>
  </section>
</template>
