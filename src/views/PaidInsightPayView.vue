<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink, useRoute } from 'vue-router'
import { Icon } from '@iconify/vue'
import BrandButton from '../components/BrandButton.vue'
import payQr from '../assets/pay-qr.svg'
import { PAID_INSIGHT_CATEGORY, findPaidInsight } from '../data/paidInsights'

type PayMethod = 'wechat' | 'alipay'

const { t } = useI18n()
const route = useRoute()

const insight = computed(() => {
  const id = route.params.id
  return findPaidInsight(Array.isArray(id) ? (id[0] ?? '') : (id ?? ''))
})

const method = ref<PayMethod>('wechat')
const paid = ref(false)

const methods: { id: PayMethod; icon: string; labelKey: string }[] = [
  { id: 'wechat', icon: 'simple-icons:wechat', labelKey: 'paidInsight.wechat' },
  { id: 'alipay', icon: 'simple-icons:alipay', labelKey: 'paidInsight.alipay' },
]

const methodLabel = computed(() => t(methods.find((m) => m.id === method.value)!.labelKey))
const amountText = computed(() => `¥${(insight.value?.price ?? 0).toFixed(2)}`)

// 切换到另一条资讯时重置演示状态
watch(() => route.params.id, () => {
  paid.value = false
  method.value = 'wechat'
})

function selectMethod(next: PayMethod) {
  if (paid.value) return
  method.value = next
}

function confirmPaid() {
  paid.value = true
}
</script>

<template>
  <div class="min-h-screen bg-surface-base relative overflow-hidden">
    <div
      class="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
      style="background: radial-gradient(circle, rgba(85,173,115,0.06) 0%, transparent 70%); filter: blur(80px);"
    />

    <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-36 pb-16 md:pb-24">
      <RouterLink
        to="/#paid-insights"
        class="inline-flex items-center gap-1.5 text-sm font-medium text-ink-secondary hover:text-brand transition-colors"
      >
        <Icon icon="lucide:arrow-left" class="w-4 h-4" aria-hidden="true" />
        {{ t('paidInsight.back') }}
      </RouterLink>

      <!-- 资讯不存在 -->
      <div
        v-if="!insight"
        class="mt-8 p-10 md:p-14 rounded-3xl bg-white border border-line/50 shadow-card text-center"
      >
        <Icon icon="lucide:file-x" class="w-10 h-10 mx-auto text-ink-tertiary" aria-hidden="true" />
        <p class="mt-4 text-lg font-medium text-ink-primary">{{ t('paidInsight.notFound') }}</p>
        <div class="mt-8">
          <BrandButton variant="ghost" to="/#paid-insights">{{ t('paidInsight.back') }}</BrandButton>
        </div>
      </div>

      <template v-else>
        <!-- 资讯头部 -->
        <article class="mt-6 p-6 md:p-10 rounded-3xl bg-white border border-line/50 shadow-card">
          <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border border-brand/25 text-brand bg-brand-soft/60">
            {{ PAID_INSIGHT_CATEGORY }}
          </span>
          <h1 class="mt-4 text-2xl md:text-3xl lg:text-[34px] font-semibold text-ink-primary tracking-tight leading-snug">
            {{ insight.title }}
          </h1>
          <div class="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-tertiary">
            <time :datetime="insight.date" class="tabular-nums">{{ insight.date }}</time>
            <span class="inline-flex items-center gap-1 text-[#F2592A] font-medium">
              <Icon icon="lucide:lock" class="w-3.5 h-3.5" aria-hidden="true" />
              {{ t('paidInsight.locked') }}
            </span>
          </div>

          <!-- 锁定预览 -->
          <div class="relative mt-8" aria-hidden="true">
            <div class="space-y-3 select-none">
              <div class="h-4 rounded bg-surface-muted w-11/12"></div>
              <div class="h-4 rounded bg-surface-muted w-full"></div>
              <div class="h-4 rounded bg-surface-muted w-10/12"></div>
              <div class="h-4 rounded bg-surface-muted w-9/12"></div>
              <div class="h-4 rounded bg-surface-muted w-full"></div>
              <div class="h-4 rounded bg-surface-muted w-7/12"></div>
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-white/70 to-white"></div>
          </div>
          <p class="mt-4 text-sm text-ink-secondary">{{ t('paidInsight.previewIntro') }}</p>
        </article>

        <!-- 付费区 -->
        <section class="mt-6 p-6 md:p-10 rounded-3xl bg-white border border-line/50 shadow-card">
          <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 class="text-xl md:text-2xl font-semibold text-ink-primary">{{ t('paidInsight.payTitle') }}</h2>
              <p class="mt-1 text-sm text-ink-secondary">{{ t('paidInsight.scanHint') }}</p>
            </div>
            <p class="text-sm text-ink-secondary">
              {{ t('paidInsight.amount') }}
              <span class="ml-2 text-3xl md:text-4xl font-semibold text-[#F2592A] tabular-nums" data-testid="amount">{{ amountText }}</span>
            </p>
          </div>

          <!-- 支付方式切换 -->
          <div class="mt-6">
            <p id="pay-method-label" class="text-sm font-medium text-ink-primary">{{ t('paidInsight.method') }}</p>
            <div role="tablist" aria-labelledby="pay-method-label" class="mt-2 inline-flex p-1 rounded-full bg-surface-muted border border-line/60">
              <button
                v-for="m in methods"
                :key="m.id"
                type="button"
                role="tab"
                :aria-selected="method === m.id"
                :disabled="paid"
                class="inline-flex items-center gap-2 h-10 px-5 rounded-full text-sm font-medium transition-all duration-200 disabled:cursor-not-allowed"
                :class="method === m.id ? 'bg-white text-ink-primary shadow-card' : 'text-ink-secondary hover:text-ink-primary'"
                @click="selectMethod(m.id)"
              >
                <Icon :icon="m.icon" class="w-4 h-4" :class="m.id === 'wechat' ? 'text-[#07C160]' : 'text-[#1677FF]'" aria-hidden="true" />
                {{ t(m.labelKey) }}
              </button>
            </div>
          </div>

          <div class="mt-8 grid grid-cols-1 md:grid-cols-[auto,1fr] gap-8 items-start">
            <!-- 二维码 / 已支付态 -->
            <div
              v-if="paid"
              role="status"
              aria-live="polite"
              class="w-full md:w-[240px] p-6 rounded-2xl bg-brand-soft/60 border border-brand/20 text-center"
            >
              <Icon icon="lucide:check-circle-2" class="w-10 h-10 mx-auto text-brand" aria-hidden="true" />
              <p class="mt-3 text-base font-semibold text-brand-deep">{{ t('paidInsight.paidTitle') }}</p>
              <p class="mt-2 text-sm text-ink-secondary leading-relaxed">{{ t('paidInsight.paidDesc') }}</p>
            </div>
            <div v-else class="flex flex-col items-center">
              <div class="p-3 rounded-2xl bg-white border border-line shadow-card">
                <img
                  :src="payQr"
                  data-testid="pay-qr"
                  :alt="t('paidInsight.qrAlt', { method: methodLabel })"
                  width="200"
                  height="200"
                  class="w-[200px] h-[200px]"
                  decoding="async"
                />
              </div>
              <p class="mt-3 text-xs text-ink-tertiary">{{ methodLabel }} · {{ amountText }}</p>
            </div>

            <!-- 三步说明 + 操作 -->
            <div>
              <ol class="space-y-3">
                <li v-for="step in 3" :key="step" class="flex items-start gap-3 text-sm md:text-base text-ink-secondary">
                  <span class="mt-0.5 w-6 h-6 rounded-full bg-brand/10 text-brand text-xs font-semibold flex items-center justify-center shrink-0">{{ step }}</span>
                  <span>{{ t(`paidInsight.step${step}`) }}</span>
                </li>
              </ol>

              <div class="mt-8 flex flex-wrap gap-3">
                <BrandButton v-if="!paid" @click="confirmPaid">
                  <Icon icon="lucide:badge-check" class="w-4 h-4 mr-2" aria-hidden="true" />
                  {{ t('paidInsight.confirmPaid') }}
                </BrandButton>
                <BrandButton variant="ghost" to="/contact">{{ t('common.contactUs') }}</BrandButton>
              </div>
            </div>
          </div>

          <p class="mt-8 pt-5 border-t border-line/50 text-xs text-ink-tertiary leading-relaxed">
            {{ t('paidInsight.disclaimer') }}
          </p>
        </section>
      </template>
    </div>
  </div>
</template>
