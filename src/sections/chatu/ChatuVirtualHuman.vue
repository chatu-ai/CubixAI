<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import Chip from '../../components/Chip.vue'

const leftRef = ref<HTMLElement | null>(null)
const rightRef = ref<HTMLElement | null>(null)

useScrollReveal(leftRef, { y: 30, delay: 0.15 })
useScrollReveal(rightRef, { y: 30 })

const features = [
  { text: '24 小时不间断服务', icon: 'lucide:clock' },
  { text: '智能化交互与生成', icon: 'lucide:sparkles' },
  { text: '高度适配性与灵活性', icon: 'lucide:sliders-horizontal' },
  { text: '推动行业数字化转型', icon: 'lucide:trending-up' },
]

const tags = ['构建智能对话', '文字互动问答', '语音互动问答']
</script>

<template>
  <section class="py-12 md:py-20 bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
      >
        <!-- 左：形象占位 + 切换 -->
        <div ref="leftRef">
          <div
            class="rounded-2xl border border-line shadow-card overflow-hidden"
          >
            <img
              src="@/assets/szr.webp"
              alt="虚拟数字人"
              class="w-full"
            />
          </div>
          <!-- <div class="flex justify-center gap-2 mt-4">
            <button
              v-for="(role, i) in roles"
              :key="role"
              class="px-4 py-2 rounded-full text-sm font-medium transition-all"
              :class="
                activeRole === i
                  ? 'bg-[#433487] text-white'
                  : 'bg-surface-muted text-ink-secondary hover:text-ink-primary'
              "
              @click="activeRole = i"
            >
              {{ role }}
            </button> </div> -->
        </div>

        <!-- 右：文字 -->
        <div ref="rightRef">
          <h2
            class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight leading-tight"
          >
            虚拟数字人 · AI 世界的交互媒介
          </h2>
          <p class="mt-4 text-lg text-ink-secondary leading-relaxed">
            通过智能化交互与生成能力，优化生产要素组合。
          </p>

          <div class="grid grid-cols-2 gap-3 mt-8">
            <div
              v-for="f in features"
              :key="f.text"
              class="p-4 rounded-xl bg-surface-card border border-line/50 flex items-center gap-3"
            >
              <span class="w-8 h-8 rounded-lg bg-[#433487]/10 text-[#433487] flex items-center justify-center shrink-0">
                <Icon :icon="f.icon" class="w-4 h-4" aria-hidden="true" />
              </span>
              <span class="text-sm font-medium text-ink-primary">{{ f.text }}</span>
            </div>
          </div>

          <div class="flex flex-wrap gap-2 mt-8">
            <Chip v-for="tag in tags" :key="tag" variant="muted">
              {{ tag }}
            </Chip>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
