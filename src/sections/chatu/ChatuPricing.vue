<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import GlassCard from '../../components/GlassCard.vue'

const leftRef = ref<HTMLElement | null>(null)
const rightRef = ref<HTMLElement | null>(null)

useScrollReveal(leftRef, { y: 30 })
useScrollReveal(rightRef, { y: 30, delay: 0.15 })

const advantages = [
  '按需选择方案 · 无需高额一次性支付',
  '灵活控制成本 · 业务变化随时调整',
  '实时支出掌握 · 资源管理更高效',
  '无长期绑定 · 无超预算担忧',
]

const cardFeatures = [
  // 'NFC 触碰激活，充值体验极速便捷',
  '即充即用，无需复杂申请配置',
  '卡片与权益绑定，实现安全、可追溯的资产管理',
  '自带传播属性，成为企业 AI 文化的"社交货币"',
  '支持卡片外观定制（含企业 Logo 等）；'
]
// 线上仅有电子单据，对账留存更不便。
</script>

<template>
  <section class="py-10 md:py-16 bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-stretch"
      >
        <!-- 左 -->
        <div ref="leftRef" class="flex flex-col">
          <h2
            class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight leading-tight"
          >
            更灵活 · 更安全 · 更便捷
          </h2>

          <ul class="mt-6 space-y-4 flex-1">
            <li
              v-for="a in advantages"
              :key="a"
              class="flex items-start gap-3 text-ink-secondary"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-[#433487] mt-2 shrink-0" />
              {{ a }}
            </li>
          </ul>
          

          <GlassCard padding="lg" class="mt-6">
            <div class="flex flex-col md:flex-row gap-6 items-center h-full">
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-ink-primary">
                  用户购买特定流量包
                </h3>
                <p class="mt-2 text-ink-secondary">满足高并发 / 更低价 / 操作灵活</p>
              </div>
              <img
                src="@/assets/ChatU/llb.webp"
                alt="流量包"
                class="w-20 md:w-24 lg:w-28 h-auto object-contain rounded-2xl shrink-0"
              />
            </div>
          </GlassCard>
        </div>

        <!-- 右 -->
        <div ref="rightRef" class="flex flex-col">
          <GlassCard padding="lg" class="flex-1">
            <div class="flex flex-col gap-6 h-full">
              <div class="flex flex-row gap-4 justify-start items-start">
                <img
                  src="@/assets/czk.webp"
                  alt="定制充值卡"
                  class="flex-1 min-w-0 h-auto object-contain rounded-2xl shadow-md"
                />
                <img
                  src="@/assets/ChatU/llk2.webp"
                  alt="定制充值卡"
                  class="flex-1 min-w-0 h-auto object-contain rounded-2xl shadow-md"
                />
              </div>
              <div class="flex flex-col md:flex-row gap-6 md:gap-8">
                <div class="md:w-1/3">
                  <h3 class="text-lg font-semibold text-ink-primary">
                    定制充值卡
                  </h3>
                  <p class="mt-1 text-ink-secondary">按需充值 / 长期有效</p>
                </div>
                <ul class="md:w-2/3 space-y-4">
                  <li
                    v-for="f in cardFeatures"
                    :key="f"
                    class="flex items-start gap-3 text-sm text-ink-secondary leading-relaxed"
                  >
                    <span class="w-1.5 h-1.5 rounded-full bg-[#433487] mt-1.5 shrink-0" />
                    {{ f }}
                  </li>
                </ul>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  </section>
</template>
