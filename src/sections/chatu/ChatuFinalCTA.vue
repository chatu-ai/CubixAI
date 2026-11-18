<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import BrandButton from '../../components/BrandButton.vue'

const contentRef = ref<HTMLElement | null>(null)
useScrollReveal(contentRef, { y: 30 })
</script>

<template>
  <section class="relative overflow-hidden py-12 md:py-20 bg-surface-base">
    <!-- 绿色辉光 -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full pointer-events-none"
      style="
        background: radial-gradient(
          circle,
          rgba(85, 173, 115, 0.15) 0%,
          transparent 70%
        );
        filter: blur(80px);
      "
    />

    <div
      ref="contentRef"
      class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
    >
      <h2
        class="text-3xl md:text-4xl lg:text-5xl font-semibold text-ink-primary tracking-tight leading-tight"
      >
        注册 ChatU · 赠送 10000 体验点数
      </h2>
      <p
        class="mt-6 text-lg text-ink-secondary leading-relaxed max-w-2xl mx-auto"
      >
        企业试用申请 / 中控后台体验
      </p>
      <div class="mt-10 flex flex-wrap items-center justify-center gap-4">
        <BrandButton href="https://m.chatu.pro/" target="_blank" class="!bg-none !bg-[#433487]">立即注册</BrandButton>
        <BrandButton
          variant="ghost"
          class="!border-line !text-ink-primary !bg-transparent hover:!bg-surface-muted hover:!border-[#433487] hover:!text-[#433487]"
          href="https://admin.chatu.pro/"
          target="_blank"
        >
          申请企业试用
        </BrandButton>
      </div>
      <!-- 公众号 -->
      <div class="mt-16 pt-12 border-t border-line/50">
        <h3 class="text-2xl md:text-3xl font-semibold text-ink-primary tracking-tight">
          关注 ChatU 公众号
        </h3>
        <p class="mt-3 text-base md:text-lg text-ink-secondary">
          关注公众号获取产品最新动态
        </p>

        <!-- 二维码 -->
        <div class="mt-8 flex justify-center">
          <div
            class="w-[180px] h-[180px] md:w-[200px] md:h-[200px] rounded-2xl bg-white border-2 border-[#433487]/20 shadow-card overflow-hidden"
          >
            <img
              src="@/assets/chatU.webp"
              alt="ChatU 公众号二维码"
              class="w-full h-full object-cover"
            />
          </div>
        </div>

        <p class="mt-6 text-sm text-ink-tertiary">
          微信扫一扫，关注 ChatU 公众号
        </p>
      </div>
    </div>
  </section>
</template>
