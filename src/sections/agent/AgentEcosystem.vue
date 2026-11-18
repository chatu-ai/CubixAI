<script setup lang="ts">
import { ref, computed } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import { useContent } from '@/i18n/useContent'
import { agentStationContent } from '@/content/agentstation'
import { Icon } from '@iconify/vue'
import AppImage from '../../components/AppImage.vue'
import chatuMateImg from '@/assets/ChatUMate.webp'

const c = useContent(agentStationContent)

// 名称按顺序取自 agentStationContent.ecosystem.platforms
const PLATFORM_ICONS: { key: string; src?: string; icon?: string; color?: string }[] = [
  { key: 'wechat', src: new URL('@/assets/icon/wx.webp', import.meta.url).href },
  { key: 'feishu', src: new URL('@/assets/icon/fs.webp', import.meta.url).href },
  { key: 'dingtalk', src: new URL('@/assets/icon/dd.webp', import.meta.url).href },
  { key: 'wecom', src: new URL('@/assets/icon/qywx.webp', import.meta.url).href },
  { key: 'qq', src: new URL('@/assets/icon/QQ.webp', import.meta.url).href },
  { key: 'chatu', src: new URL('@/assets/icon/chatu2.webp', import.meta.url).href },
  { key: 'more', icon: 'lucide:plus', color: '#9CA3AF' },
]

const platformIcons = computed(() =>
  PLATFORM_ICONS.map((p, i) => ({ ...p, name: c.value.ecosystem.platforms[i] })),
)

const contentRef = ref<HTMLElement | null>(null)

useScrollReveal(contentRef, { y: 30, delay: 0.2 })
</script>

<template>
  <section class="py-10 md:py-16 bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- 左文案+图片 与 右竖排三卡 -->
      <div ref="contentRef" class="flex flex-col md:flex-row items-stretch gap-6">
        <!-- 左侧：文案 + 图片 -->
        <div class="w-full md:w-1/2 flex flex-col">
          <div class="text-center md:text-left mb-6">
            <span
              class="inline-block px-3 py-1 rounded-full bg-[#E6F5FB] text-[#2DB4E6] text-xs font-semibold mb-4"
            >
              {{ c.ecosystem.badge }}
            </span>
            <h2 class="section-title">
              {{ c.ecosystem.title }}
            </h2>
            <p class="mt-3 text-ink-secondary">
              {{ c.ecosystem.subtitle }}
            </p>
          </div>
          <div class="flex-1">
            <AppImage
              :src="chatuMateImg"
              :alt="c.ecosystem.imageAlt"
              class="w-full h-full object-contain rounded-2xl border border-line/50"
            />
          </div>
          <p class="mt-3 text-sm text-ink-tertiary text-center md:text-left">
            {{ c.ecosystem.caption }}
          </p>
        </div>

        <!-- 右侧竖排四卡 -->
        <div class="w-full md:w-1/2 flex flex-col gap-4">
          <div
            class="flex-1 p-6 rounded-2xl bg-white border border-line/50 shadow-sm hover:shadow-card hover:border-[#2DB4E6]/20 transition-all duration-300 flex flex-col justify-center"
          >
            <h3 class="text-lg font-semibold text-ink-primary flex items-center gap-3">
              <span class="w-9 h-9 rounded-lg bg-[#E6F5FB] text-[#2DB4E6] flex items-center justify-center shrink-0">
                <Icon icon="lucide:bot" class="w-[18px] h-[18px]" aria-hidden="true" />
              </span>
              {{ c.ecosystem.cards[0].title }}
            </h3>
            <p class="mt-2 text-sm text-ink-secondary leading-relaxed">
              {{ c.ecosystem.cards[0].desc }}
            </p>
          </div>
          <div
            class="flex-1 p-6 rounded-2xl bg-white border border-line/50 shadow-sm hover:shadow-card hover:border-[#2DB4E6]/20 transition-all duration-300 flex flex-col justify-center"
          >
            <h3 class="text-lg font-semibold text-ink-primary flex items-center gap-3">
              <span class="w-9 h-9 rounded-lg bg-[#E6F5FB] text-[#2DB4E6] flex items-center justify-center shrink-0">
                <Icon icon="lucide:repeat" class="w-[18px] h-[18px]" aria-hidden="true" />
              </span>
              {{ c.ecosystem.cards[1].title }}
            </h3>
            <p class="mt-2 text-sm text-ink-secondary leading-relaxed">
              {{ c.ecosystem.cards[1].desc }}
            </p>
          </div>
          <div
            class="flex-1 p-6 rounded-2xl bg-white border border-line/50 shadow-sm hover:shadow-card hover:border-[#2DB4E6]/20 transition-all duration-300 flex flex-col justify-center"
          >
            <h3 class="text-lg font-semibold text-ink-primary flex items-center gap-3">
              <span class="w-9 h-9 rounded-lg bg-[#E6F5FB] text-[#2DB4E6] flex items-center justify-center shrink-0">
                <Icon icon="lucide:wand-sparkles" class="w-[18px] h-[18px]" aria-hidden="true" />
              </span>
              {{ c.ecosystem.cards[2].title }}
            </h3>
            <p class="mt-2 text-sm text-ink-secondary leading-relaxed">
              {{ c.ecosystem.cards[2].desc }}
            </p>
          </div>
          <div
            class="flex-1 p-6 rounded-2xl bg-white border border-line/50 shadow-sm hover:shadow-card hover:border-[#2DB4E6]/20 transition-all duration-300 flex flex-col justify-center"
          >
            <h3 class="text-lg font-semibold text-ink-primary flex items-center gap-3">
              <span class="w-9 h-9 rounded-lg bg-[#E6F5FB] text-[#2DB4E6] flex items-center justify-center shrink-0">
                <Icon icon="lucide:plug" class="w-[18px] h-[18px]" aria-hidden="true" />
              </span>
              {{ c.ecosystem.cards[3].title }}
            </h3>
            <p class="mt-2 text-sm text-ink-secondary leading-relaxed">
              {{ c.ecosystem.cards[3].desc }}
            </p>
            <div class="mt-3 flex items-center gap-2 flex-wrap">
              <div
                v-for="p in platformIcons"
                :key="p.key"
                class="rounded-lg bg-white flex items-center justify-center"
                :class="p.key === 'chatu' ? 'w-14 h-14 md:w-16 md:h-16' : 'w-9 h-9 md:w-10 md:h-10'"
                :title="p.name"
              >
                <AppImage
                  v-if="p.src"
                  :src="p.src"
                  :alt="p.name"
                  class="object-contain"
                  :class="p.key === 'chatu' ? 'w-10 h-10 md:w-12 md:h-12' : 'w-5 h-5 md:w-6 md:h-6'"
                />
                <span
                  v-else
                  class="text-[10px] md:text-xs font-medium text-ink-tertiary"
                >
                  {{ p.name }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 底部升级条 -->
      <div class="mt-6 p-4 rounded-2xl bg-[#E6F5FB] border border-[#2DB4E6]/20 flex items-center justify-center gap-2 text-sm font-medium text-[#1A8BC4]">
        <Icon icon="lucide:refresh-cw" class="w-4 h-4" />
        {{ c.ecosystem.upgradeBar }}
      </div>
    </div>
  </section>
</template>
