<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'

const activeTab = ref<'frontend' | 'backend'>('frontend')
const sectionRef = ref<HTMLElement | null>(null)

useScrollReveal(sectionRef, { y: 30 })

const frontendFeatures = [
  '多智能体调用',
  '多语言支持',
  '多模态交互',
  '自定义配置',
]

const backendFeatures = [
  '数据统计',
  '引擎配置',
  '用户权限',
  '充值管理',
]
</script>

<template>
  <section ref="sectionRef" class="py-10 md:py-16 bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Tabs -->
      <div class="flex items-center justify-center gap-2 mb-8">
        <button
          class="px-5 py-2.5 rounded-full text-sm font-medium transition-all"
          :class="
            activeTab === 'frontend'
              ? 'bg-[#433487] text-white'
              : 'bg-surface-muted text-ink-secondary hover:text-ink-primary'
          "
          @click="activeTab = 'frontend'"
        >
          产品前端
        </button>
        <button
          class="px-5 py-2.5 rounded-full text-sm font-medium transition-all"
          :class="
            activeTab === 'backend'
              ? 'bg-[#433487] text-white'
              : 'bg-surface-muted text-ink-secondary hover:text-ink-primary'
          "
          @click="activeTab = 'backend'"
        >
          中控后台
        </button>
      </div>

      <!-- Content -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <!-- Screenshot -->
        <div
          class="rounded-2xl border border-line shadow-card overflow-hidden"
        >
          <img v-if="activeTab === 'backend'" src="@/assets/zkht.webp" class="w-full" alt="中控后台" />
          <img v-else src="@/assets/chatUqd.webp" class="w-full" alt="产品前端" />
        </div>

        <!-- Features -->
        <div>
          <h3 class="text-xl font-semibold text-ink-primary mb-2">
            {{
              activeTab === 'frontend'
                ? '应用者视角 · 快速上手'
                : '管理者视角 · 配置调控'
            }}
          </h3>
          <p class="text-ink-secondary mb-8">
            {{
              activeTab === 'frontend'
                ? '面向终端用户的简洁交互界面，零学习成本即刻上手。'
                : '面向管理员的全局配置中心，数据与权限一手掌控。'
            }}
          </p>
          <div class="grid grid-cols-2 gap-4">
            <div
              v-for="feat in activeTab === 'frontend'
                ? frontendFeatures
                : backendFeatures"
              :key="feat"
              class="flex items-center gap-3 p-4 rounded-xl bg-surface-card border border-line/50"
            >
              <div
                class="w-8 h-8 rounded-lg bg-[#433487]/10 flex items-center justify-center shrink-0"
              >
                <span class="text-xs font-bold text-[#433487]">✓</span>
              </div>
              <span class="text-sm font-medium text-ink-primary">{{ feat }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
