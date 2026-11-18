<script setup lang="ts">
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue'
import { useI18n } from 'vue-i18n'
import { useScrollReveal } from '../../composables/useScrollReveal'
import { useContent } from '@/i18n/useContent'
import { chatuContent } from '@/content/chatu'

const c = useContent(chatuContent)
const { locale } = useI18n()
// 英文等译文较长：非中文时卡片行高度改为最小 300px，可随内容增高；中文保持固定 300px
const isZh = computed(() => locale.value === 'zh-CN')


const titleRef = ref<HTMLElement | null>(null)
const cardsRef = ref<HTMLElement | null>(null)

useScrollReveal(titleRef, { y: 30 })
useScrollReveal(cardsRef, { y: 30, delay: 0.15 })

const activeIndex = ref(0) // 默认展示旗舰版

// 各版本的图标与配图，文字来自 c.versions.items，按顺序对应
const VERSION_MEDIA = [
  { icon: 'lucide:rocket', image: new URL('@/assets/ChatU/bb/qj.webp', import.meta.url).href },
  { icon: 'lucide:graduation-cap', image: new URL('@/assets/ChatU/bb/jp.webp', import.meta.url).href },
  { icon: 'lucide:layout-grid', image: new URL('@/assets/ChatU/bb/opc.webp', import.meta.url).href },
  { icon: 'lucide:cpu', image: new URL('@/assets/ChatU/bb/wlw.webp', import.meta.url).href },
  { icon: 'lucide:building-2', image: new URL('@/assets/ChatU/bb/jt.webp', import.meta.url).href },
]

const versions = computed(() =>
  c.value.versions.items.map((v, i) => ({
    ...v,
    icon: VERSION_MEDIA[i]?.icon ?? '',
    image: VERSION_MEDIA[i]?.image ?? '',
  })),
)
</script>

<template>
  <section class="py-10 md:py-16 bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref="titleRef" class="text-center mb-6 md:mb-8">
        <h2
          class="section-title"
        >
          {{ c.versions.title }}
        </h2>
        <p class="section-subtitle">
          {{ c.versions.subtitle }}
        </p>
      </div>

      <div
        ref="cardsRef"
        class="flex flex-col md:flex-row gap-3"
        :class="isZh ? 'md:h-[300px]' : 'md:min-h-[300px]'"
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
                  {{ c.versions.targetLabel }}{{ v.target }}
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
        {{ c.versions.footer }}
      </p>
    </div>
  </section>
</template>
