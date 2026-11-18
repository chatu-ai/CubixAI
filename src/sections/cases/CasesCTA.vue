<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useScrollReveal } from '../../composables/useScrollReveal'
import BrandButton from '../../components/BrandButton.vue'
import EnterpriseModal from '../../components/EnterpriseModal.vue'

const { t } = useI18n()
const contentRef = ref<HTMLElement | null>(null)
const showEnterpriseModal = ref(false)
useScrollReveal(contentRef, { y: 30 })
</script>

<template>
  <section class="relative overflow-hidden py-10 md:py-16 bg-white">
    <!-- 绿色辉光 -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[600px] md:h-[600px] rounded-full pointer-events-none"
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
        class="text-3xl md:text-4xl lg:text-[48px] font-semibold text-ink-primary tracking-tight mb-10"
      >
        {{ t('cases.cta.title') }}
      </h2>
      <div class="flex flex-wrap items-center justify-center gap-4">
        <BrandButton class="!bg-[#55AD73] !text-white hover:!bg-[#2E8B57]" @click="showEnterpriseModal = true">{{ t('common.applyCooperation') }}</BrandButton>
        <BrandButton
          to="/solutions"
          arrow
          class="!bg-[#55AD73] !text-white hover:!bg-[#2E8B57]"
        >
          {{ t('common.viewAllSolutions') }}
        </BrandButton>
      </div>
    </div>
  </section>

  <EnterpriseModal v-model="showEnterpriseModal" />
</template>

