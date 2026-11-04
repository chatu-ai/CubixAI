<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import { Icon } from '@iconify/vue'
import AppImage from '../../components/AppImage.vue'
import chatuMateImg from '@/assets/ChatUMate.webp'

const platformIcons = [
  { name: '微信', src: new URL('@/assets/icon/wx.webp', import.meta.url).href },
  { name: '飞书', src: new URL('@/assets/icon/fs.webp', import.meta.url).href },
  { name: '钉钉', src: new URL('@/assets/icon/dd.webp', import.meta.url).href },
  { name: '企业微信', src: new URL('@/assets/icon/qywx.webp', import.meta.url).href },
  { name: 'QQ', src: new URL('@/assets/icon/QQ.webp', import.meta.url).href },
  { name: 'ChatU', src: new URL('@/assets/icon/chatu2.webp', import.meta.url).href },
  { name: '更多...', icon: 'lucide:plus', color: '#9CA3AF' },
]

const contentRef = ref<HTMLElement | null>(null)

useScrollReveal(contentRef, { y: 30, delay: 0.2 })
</script>

<template>
  <section class="py-20 md:py-[120px] bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- 左文案+图片 与 右竖排三卡 -->
      <div ref="contentRef" class="flex flex-col md:flex-row items-stretch gap-6">
        <!-- 左侧：文案 + 图片 -->
        <div class="w-full md:w-1/2 flex flex-col">
          <div class="text-center md:text-left mb-6">
            <span
              class="inline-block px-3 py-1 rounded-full bg-[#E6F5FB] text-[#2DB4E6] text-xs font-semibold mb-4"
            >
              预装于每一台智方体
            </span>
            <h2 class="text-2xl md:text-3xl font-semibold text-ink-primary">
              ChatU Mate：智能体的管家
            </h2>
            <p class="mt-3 text-ink-secondary">
              智能体、模型、Skills、升级，一个入口全管好
            </p>
          </div>
          <div class="flex-1">
            <AppImage
              :src="chatuMateImg"
              alt="ChatU Mate 工作台"
              class="w-full h-full object-contain rounded-2xl border border-line/50"
            />
          </div>
          <p class="mt-3 text-sm text-ink-tertiary text-center md:text-left">
            ChatU Mate 工作台 · 手指触屏即可操作，无需命令行
          </p>
        </div>

        <!-- 右侧竖排四卡 -->
        <div class="w-full md:w-1/2 flex flex-col gap-4">
          <div
            class="flex-1 p-6 rounded-2xl bg-white border border-line/50 shadow-sm hover:shadow-card hover:border-[#2DB4E6]/20 transition-all duration-300 flex flex-col justify-center"
          >
            <h3 class="text-lg font-semibold text-ink-primary">多智能体管控</h3>
            <p class="mt-2 text-sm text-ink-secondary leading-relaxed">
              DeepSeek Harness、OpenClaw、Hermes 一键启停；Codex、WorkBuddy 等主流平台随时可装
            </p>
          </div>
          <div
            class="flex-1 p-6 rounded-2xl bg-white border border-line/50 shadow-sm hover:shadow-card hover:border-[#2DB4E6]/20 transition-all duration-300 flex flex-col justify-center"
          >
            <h3 class="text-lg font-semibold text-ink-primary">模型自由切换</h3>
            <p class="mt-2 text-sm text-ink-secondary leading-relaxed">
              本地 Qwen、企业内网大模型、云端模型，一处配置、随时切换
            </p>
          </div>
          <div
            class="flex-1 p-6 rounded-2xl bg-white border border-line/50 shadow-sm hover:shadow-card hover:border-[#2DB4E6]/20 transition-all duration-300 flex flex-col justify-center"
          >
            <h3 class="text-lg font-semibold text-ink-primary">全能 Skills</h3>
            <p class="mt-2 text-sm text-ink-secondary leading-relaxed">
              预装图片、视频生成技能；优秀流程可沉淀为模板，团队一键复用
            </p>
          </div>
          <div
            class="flex-1 p-6 rounded-2xl bg-white border border-line/50 shadow-sm hover:shadow-card hover:border-[#2DB4E6]/20 transition-all duration-300 flex flex-col justify-center"
          >
            <h3 class="text-lg font-semibold text-ink-primary">主流办公平台接入</h3>
            <p class="mt-2 text-sm text-ink-secondary leading-relaxed">
              企业微信、飞书、钉钉等，AI 直接进入日常工作流。
            </p>
            <div class="mt-3 flex items-center gap-2 flex-wrap">
              <div
                v-for="p in platformIcons"
                :key="p.name"
                class="rounded-lg bg-white flex items-center justify-center"
                :class="p.name === 'ChatU' ? 'w-14 h-14 md:w-16 md:h-16' : 'w-9 h-9 md:w-10 md:h-10'"
                :title="p.name"
              >
                <AppImage
                  v-if="p.src"
                  :src="p.src"
                  :alt="p.name"
                  class="object-contain"
                  :class="p.name === 'ChatU' ? 'w-10 h-10 md:w-12 md:h-12' : 'w-5 h-5 md:w-6 md:h-6'"
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
        一键升级 · 智能体与 ChatU Mate 软件终身免费更新
      </div>
    </div>
  </section>
</template>
