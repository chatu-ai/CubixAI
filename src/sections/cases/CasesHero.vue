<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useScrollReveal } from '../../composables/useScrollReveal'

const { t, locale } = useI18n()
const titleRef = ref<HTMLElement | null>(null)

useScrollReveal(titleRef, { y: 30 })
</script>

<template>
  <section
    class="relative overflow-hidden bg-surface-base pt-8 md:pt-12 pb-8 md:pb-12"
  >
    <!-- 右上绿色光晕 -->
    <div
      class="absolute -top-40 -right-40 w-[500px] h-[500px] md:w-[600px] md:h-[600px] rounded-full pointer-events-none"
      style="
        background: radial-gradient(
          circle,
          rgba(85, 173, 115, 0.18) 0%,
          transparent 70%
        );
        filter: blur(60px);
      "
    />

    <div
      class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
    >
      <div ref="titleRef">
        <!-- 英文标题较长，不强制单行（否则右侧被裁掉）；中文保持单行 -->
        <h1
          class="page-title"
          :class="{ 'md:whitespace-nowrap': locale === 'zh-CN' }"
        >
          {{ t('cases.hero.title') }}
        </h1>
        <p class="page-subtitle">
          {{ t('cases.hero.desc') }}
        </p>
      </div>
    </div>
  </section>
</template>
