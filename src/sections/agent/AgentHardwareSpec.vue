<script setup lang="ts">
import { ref, onUnmounted } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import AppImage from '../../components/AppImage.vue'
import hero1 from '@/assets/zft/hero1(2).webp'
import zft1 from '@/assets/zft/1.webp'
import zft2 from '@/assets/zft/2.webp'
import zft3 from '@/assets/zft/3.webp'

const leftRef = ref<HTMLElement | null>(null)
const rightRef = ref<HTMLElement | null>(null)

useScrollReveal(leftRef, { y: 30, delay: 0.15 })
useScrollReveal(rightRef, { y: 30 })

const galleryImages = [hero1, zft1, zft2, zft3]
const thumbImages = [zft1, zft2, zft3]
const currentIndex = ref(0)

const DEFAULT_INDEX = 0
const AUTO_RESET_DELAY = 3000
let resetTimer: ReturnType<typeof setTimeout> | null = null

function resetToDefault() {
  currentIndex.value = DEFAULT_INDEX
}

function selectImage(index: number) {
  currentIndex.value = index + 1
  if (resetTimer) clearTimeout(resetTimer)
  resetTimer = setTimeout(resetToDefault, AUTO_RESET_DELAY)
}

onUnmounted(() => {
  if (resetTimer) clearTimeout(resetTimer)
})

const coreSpecs = [
  { name: '屏幕', value: '7 英寸高清触控屏', highlight: '', suffix: '' },
  { name: '重量', value: '约 700 克', highlight: '', suffix: '' },
  { name: '续航', value: '内置电池，待机约 5 小时', highlight: '', suffix: '' },
  { name: '操作系统', value: 'Windows 11 企业版', highlight: '', suffix: '' },
  { name: '处理器', value: 'Intel(R) N150', highlight: '', suffix: '' },
  { name: '内存', value: '16G', highlight: '', suffix: '' },
  { name: '存储', value: '256G / 512G / 1TB', highlight: '', suffix: '' },
  { name: '本地模型', value: 'Qwen 等，离线可用', highlight: '', suffix: '' },
]

const ioSpecs = [
  { name: 'USB', value: 'USB × 4 + Type-C × 1，键鼠、U 盘、摄像头、打印机即插即用', highlight: '', suffix: '' },
  { name: '视频输出', value: 'HDMI / DP，外接大屏或投影', highlight: '', suffix: '' },
  { name: '网络', value: '千兆网口 + Wi-Fi，内网大模型直连', highlight: '', suffix: '' },
  { name: '尺寸', value: '长 17.5 cm × 宽 2 cm × 高 11 cm', highlight: '', suffix: '' },
  { name: '认证', value: '3C 认证', highlight: '', suffix: '' },
]
</script>

<template>
  <section class="py-20 md:py-[120px] bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
      >
        <!-- 左：多角度图 -->
        <div ref="leftRef" class="relative">
          <div
            class="aspect-square rounded-2xl bg-white border border-line shadow-card flex items-center justify-center overflow-hidden"
          >
            <div
              class="flex h-full w-full transition-transform duration-500 ease-in-out"
              :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
            >
              <AppImage
                v-for="(img, i) in galleryImages"
                :key="i"
                :src="img"
                :alt="`角度 ${i + 1}`"
                class="w-full h-full shrink-0 object-contain"
                :priority="i === 0"
              />
            </div>
          </div>
          <div class="grid grid-cols-3 gap-3 mt-4">
            <button
              v-for="(img, i) in thumbImages"
              :key="i"
              type="button"
              class="aspect-square rounded-xl bg-white border flex items-center justify-center overflow-hidden transition-colors"
              :class="currentIndex === i ? 'border-[#2DB4E6] ring-2 ring-[#2DB4E6]/20' : 'border-line hover:border-[#2DB4E6]/50'"
              @click="selectImage(i)"
            >
              <AppImage
                :src="img"
                :alt="`角度 ${i + 1}`"
                class="w-full h-full object-contain"
              />
            </button>
          </div>
          <p class="mt-4 text-xs md:text-[11px] text-ink-tertiary text-center whitespace-nowrap">
            7 英寸触屏正面：开机即桌面　｜　一体支架：随手立起　｜　侧面接口：USB、HDMI、散热
          </p>
        </div>

        <!-- 右：规格表 -->
        <div ref="rightRef">
          <h2
            class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight"
          >
            掌上 AI 工作站
          </h2>
          <p class="mt-3 text-lg text-ink-secondary leading-relaxed">
            手掌大小，装进包里带走；接上显示器，秒变桌面生产力
          </p>

          <div class="mt-10 mb-8">
            <h3
              class="text-sm font-semibold text-[#2DB4E6] uppercase tracking-wider mb-4"
            >
              核心配置
            </h3>
            <div class="divide-y divide-line">
              <div
                v-for="s in coreSpecs"
                :key="s.name"
                class="py-3 flex items-baseline gap-2"
              >
                <span class="w-20 shrink-0 text-sm text-ink-tertiary">
                  {{ s.name }}
                </span>
                <span class="text-sm text-ink-primary">
                  {{ s.value }}
                  <span
                    v-if="s.highlight"
                    class="text-lg font-bold text-[#2DB4E6]"
                  >
                    {{ s.highlight }}
                  </span>
                  {{ s.suffix }}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3
              class="text-sm font-semibold text-[#2DB4E6] uppercase tracking-wider mb-4"
            >
              接口与扩展
            </h3>
            <div class="divide-y divide-line">
              <div
                v-for="s in ioSpecs"
                :key="s.name"
                class="py-3 flex items-baseline gap-2"
              >
                <span class="w-20 shrink-0 text-sm text-ink-tertiary">
                  {{ s.name }}
                </span>
                <span class="text-sm text-ink-primary">
                  {{ s.value }}
                  <span
                    v-if="s.highlight"
                    class="text-lg font-bold text-[#2DB4E6]"
                  >
                    {{ s.highlight }}
                  </span>
                  {{ s.suffix }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
