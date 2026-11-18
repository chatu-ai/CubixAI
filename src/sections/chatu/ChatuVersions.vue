<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { useScrollReveal } from '../../composables/useScrollReveal'


const titleRef = ref<HTMLElement | null>(null)
const cardsRef = ref<HTMLElement | null>(null)

useScrollReveal(titleRef, { y: 30 })
useScrollReveal(cardsRef, { y: 30, delay: 0.15 })

const activeIndex = ref(0) // 默认展示旗舰版

const versions = [
  {
    name: '旗舰版',
    icon: 'lucide:rocket',
    badge: '企业级 AI 操作系统',
    desc: '开箱即用，可大幅度降低企业的 AI 转型成本',
    target: '中型腰部企业',
    features: [
      '核心能力：多模型、灵活付费、一键接入',
      '无需下载安装，简单配置即可使用，支持灵活拓展',
    ],
    image: new URL('@/assets/ChatU/bb/qj.webp', import.meta.url).href,
  },
  {
    name: '教培版',
    icon: 'lucide:graduation-cap',
    badge: 'AI 教育实训平台',
    desc: '完善的培训服务与课程体系，培养 AI 全面人才',
    target: '学校或培训机构',
    features: [
      '核心角色：学员、教师、机构',
      '精准定位教育行业，提升整体教育管理水平',
    ],
    image: new URL('@/assets/ChatU/bb/jp.webp', import.meta.url).href,
  },
  {
    name: 'OPC 平台版',
    icon: 'lucide:layout-grid',
    badge: 'OPC 创业的 AI 基础设施',
    desc: '帮园区提高入驻企业成功率，帮 OPC 把一人公司真正跑起来',
    target: '产业园区与 OPC 创业者',
    features: [
      '核心能力：园区运营的智能中枢、OPC 能力的放大器、可落地的业务支撑平台',
    ],
    image: new URL('@/assets/ChatU/bb/opc.webp', import.meta.url).href,
  },
  {
    name: '物联网版',
    icon: 'lucide:cpu',
    badge: '从 "联网" 到 "智能协同"',
    desc: '让智能硬件 "真正聪明"，实现从 "自可控" 到 "自决策"',
    target: 'IoT 或智能硬件企业',
    features: [
      '核心能力：智能决策、智能硬件、多模态交互',
      '让每台设备都能拥有智能决策与多模态交互能力',
    ],
    image: new URL('@/assets/ChatU/bb/wlw.webp', import.meta.url).href,
  },
  {
    name: '集团版',
    icon: 'lucide:building-2',
    badge: '总控 + 中控协同管理平台',
    desc: '优化本地算力资源，实现私有数据的高效整合与应用',
    target: '大型集团或科技园区',
    features: [
      '核心能力：系统部署、模型训练、数据训练',
      '有效管控下属多个子公司，统一指挥调度，为管理者提供实时决策支持',
    ],
    image: new URL('@/assets/ChatU/bb/jt.webp', import.meta.url).href,
  },
]
</script>

<template>
  <section class="py-10 md:py-16 bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref="titleRef" class="text-center mb-6 md:mb-8">
        <h2
          class="section-title"
        >
          5 大版本矩阵
        </h2>
        <p class="section-subtitle">
          覆盖企业、教育、集团、创业、物联网全场景
        </p>
      </div>

      <div
        ref="cardsRef"
        class="flex flex-col md:flex-row gap-3 md:h-[300px]"
      >
        <div
          v-for="(v, index) in versions"
          :key="v.name"
          class="rounded-2xl bg-surface-card border border-line shadow-card hover:shadow-lg transition-all duration-500 ease-out cursor-pointer overflow-hidden"
          :class="activeIndex === index ? 'md:flex-[3]' : 'md:flex-[1]'"
          @click="activeIndex = index"
        >
          <!-- 移动端标题（折叠态显示） -->
          <div
            class="flex md:hidden items-center gap-3 p-4"
            :class="activeIndex === index ? 'hidden' : ''"
          >
            <div class="w-8 h-8 rounded-xl bg-[#433487]/10 flex items-center justify-center shrink-0">
              <Icon :icon="v.icon" class="w-4 h-4 text-[#433487]" />
            </div>
            <span class="text-sm font-semibold text-[#433487]">
              {{ v.name }}
            </span>
            <img
              :src="v.image"
              :alt="v.name"
              class="ml-auto w-16 h-12 object-cover rounded-lg"
            />
          </div>

          <!-- 桌面端折叠态：左侧名称 + 右侧图片条 -->
          <div
            class="hidden md:flex md:h-full"
            :class="activeIndex === index ? 'md:hidden' : ''"
          >
            <div class="w-1/2 flex flex-col items-center justify-start gap-2 p-4 pt-6">
              <div class="w-8 h-8 rounded-xl bg-[#433487]/10 flex items-center justify-center shrink-0">
                <Icon :icon="v.icon" class="w-4 h-4 text-[#433487]" />
              </div>
              <span class="text-sm font-semibold text-[#433487] [writing-mode:vertical-rl]">
                {{ v.name }}
              </span>
            </div>
            <div class="w-1/2 h-full">
              <img
                :src="v.image"
                :alt="v.name"
                class="w-full h-full object-cover"
              />
            </div>
          </div>

          <!-- 展开态内容（移动端 & 桌面端） -->
          <div
            class="p-5 md:p-6 md:h-full"
            :class="activeIndex === index ? 'block' : 'hidden'"
          >
            <div class="flex flex-col md:flex-row md:h-full gap-4">
              <div class="md:w-3/5 flex flex-col">
                <div class="flex items-center gap-2">
                  <div class="w-7 h-7 rounded-lg bg-[#433487]/10 flex items-center justify-center shrink-0">
                    <Icon :icon="v.icon" class="w-4 h-4 text-[#433487]" />
                  </div>
                  <span class="text-sm font-semibold text-[#433487]">
                    {{ v.name }}
                  </span>
                </div>
                <span class="mt-1 text-sm font-medium text-ink-primary block">
                  {{ v.badge }}
                </span>
                <span class="mt-1 text-xs text-ink-secondary leading-relaxed block">{{ v.desc }}</span>

                <div class="mt-2 inline-flex self-start px-2 py-0.5 rounded-full bg-[#433487]/5 text-xs text-[#433487] font-medium">
                  面向：{{ v.target }}
                </div>

                <ul class="mt-3 space-y-1.5 flex-1">
                  <li
                    v-for="f in v.features"
                    :key="f"
                    class="text-xs text-ink-secondary leading-relaxed flex items-start gap-1.5"
                  >
                    <span class="text-[#433487] shrink-0">·</span>
                    <span>{{ f }}</span>
                  </li>
                </ul>
              </div>
              <div class="md:w-2/5 flex items-center justify-center">
                <img
                  :src="v.image"
                  :alt="v.name"
                  class="w-full md:max-h-full object-contain rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <p class="mt-10 text-center text-base md:text-lg font-semibold text-ink-primary">
        全部版本均支持私有化部署
      </p>
    </div>
  </section>
</template>
