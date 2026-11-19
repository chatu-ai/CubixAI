<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useScrollReveal } from '../composables/useScrollReveal'
import BrandButton from '../components/BrandButton.vue'

const { t } = useI18n()
const contentRef = ref<HTMLElement | null>(null)
useScrollReveal(contentRef, { y: 30 })
</script>

<template>
  <section class="relative overflow-hidden bg-surface-base">
    <div class="relative pt-10 md:pt-16 pb-10 md:pb-16">
      <div
        ref="contentRef"
        class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2
          class="display-title"
        >
          {{ t('about.hero.desc') }}
        </h2>
        <p
          class="section-subtitle max-w-2xl mx-auto"
        >
          {{ t('home.hero.slide1Desc') }}
        </p>

        <div class="mt-10 flex flex-wrap items-center justify-center gap-4">
          <BrandButton to="/contact">{{ t('common.contactUs') }}</BrandButton>
        </div>
      </div>
    </div>
  </section>
</template>
