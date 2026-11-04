<script setup lang="ts">
import { ref, inject } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import { Icon } from '@iconify/vue'
import Chip from '../../components/Chip.vue'
import BrandButton from '../../components/BrandButton.vue'

const openModal = inject<() => void>('agentStationOpenModal')
const BOOKING_URL = 'https://ruanjimu.feishu.cn/share/base/form/shrcnO4m2xMY6ma9mnYSuAkSSKg'
const onCta = (cta: string) => {
  if (cta === '立即预订') window.open(BOOKING_URL, '_blank')
  else openModal?.()
}

const sectionRef = ref<HTMLElement | null>(null)
useScrollReveal(sectionRef, { y: 30 })

const versions = [
  {
    name: '专业版',
    price: '¥3,999',
    badge: '一次买断',
    audience: '个人与小团队',
    features: [
      '主机 + Windows 11 企业版 + 预装 ChatU Mate',
      'DeepSeek Harness + Qwen 本地模型，软件终身免费升级',
      '赠送 1000 万 Token',
      '24 小时智能客服 + 激活后 7 天免费人工远程指导',
    ],
    cta: '立即预订',
    ctaVariant: 'primary' as const,
    to: '/contact',
  },
  {
    name: '企业版',
    price: '商务洽谈',
    badge: '定制部署',
    audience: '部门 / 内网集群',
    features: [
      '多设备集群统一管理、权限可控、定制部署',
      '同专业版，可接企业内网大模型',
      '赠送 Token 按方案',
      '专属服务',
    ],
    cta: '联系我们',
    ctaVariant: 'ghost' as const,
    to: '/contact',
  },
]
</script>

<template>
  <section ref="sectionRef" class="py-20 md:py-[120px] bg-surface-base">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12 md:mb-16">
        <h2
          class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight"
        >
          选择适合你的版本
        </h2>
        <p class="mt-4 text-lg text-ink-secondary">
          一次买断，终身使用
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div
          v-for="v in versions"
          :key="v.name"
          class="relative flex flex-col p-8 rounded-3xl bg-surface-card border border-line shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          <span
            class="text-xs font-semibold text-[#2DB4E6] uppercase tracking-wider"
          >
            {{ v.name }}
          </span>
          <div class="mt-3 text-3xl font-bold text-ink-primary">
            {{ v.price }}
          </div>
          <p class="mt-2 text-sm font-medium text-ink-primary">
            {{ v.badge }}
          </p>
          <Chip variant="muted" class="mt-3 self-start">
            {{ v.audience }}
          </Chip>

          <ul class="mt-6 space-y-3 flex-1">
            <li
              v-for="f in v.features"
              :key="f"
              class="flex items-start gap-2 text-sm text-ink-secondary"
            >
              <Icon icon="lucide:check" class="w-4 h-4 text-[#2DB4E6] shrink-0 mt-0.5" />
              {{ f }}
            </li>
          </ul>

          <div class="mt-8">
            <BrandButton
              :variant="v.ctaVariant"
              size="sm"
              :class="[
                'w-full justify-center',
                v.ctaVariant === 'primary' ? '!bg-none !bg-[#2DB4E6]' : 'hover:!border-[#2DB4E6] hover:!text-[#2DB4E6]',
              ]"
              @click="onCta(v.cta)"
            >
              {{ v.cta }}
            </BrandButton>
          </div>
        </div>
      </div>

      <p class="mt-10 text-center text-xs text-ink-tertiary">
        Token 赠送政策以购买时官方公告为准。另有多元 Token 订阅方案，适配不同使用需求，详情请咨询客服。
      </p>
    </div>
  </section>
</template>
