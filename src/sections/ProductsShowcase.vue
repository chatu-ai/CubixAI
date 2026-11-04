<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useScrollReveal } from '../composables/useScrollReveal'
import GlassCard from '../components/GlassCard.vue'
import Chip from '../components/Chip.vue'
import BrandButton from '../components/BrandButton.vue'

const { t } = useI18n()

const titleRef = ref<HTMLElement | null>(null)
const card1Ref = ref<HTMLElement | null>(null)
const card2Ref = ref<HTMLElement | null>(null)
const card3Ref = ref<HTMLElement | null>(null)
const card4Ref = ref<HTMLElement | null>(null)

useScrollReveal(titleRef, { y: 30 })
useScrollReveal(card1Ref, { y: 30, delay: 0.1 })
useScrollReveal(card2Ref, { y: 30, delay: 0.15 })
useScrollReveal(card3Ref, { y: 30, delay: 0.2 })
useScrollReveal(card4Ref, { y: 30, delay: 0.25 })
</script>

<template>
  <section class="py-20 md:py-[120px] bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref="titleRef" class="text-center mb-12 md:mb-16">
        <h2
          class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight"
        >
          {{ t('home.products.title') }}
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        <!-- Card 1: 产品 -->
        <div ref="card1Ref" class="h-full">
          <GlassCard padding="lg" hover class="h-full">
            <div class="flex flex-col h-full">
              <Chip class="!bg-[#433487]/10 !text-[#433487]">{{ t('home.products.card1Chip') }}</Chip>
              <h3 class="mt-5 text-2xl font-semibold text-ink-primary">
                {{ t('home.products.card1Title') }}
              </h3>
              <p class="mt-3 text-ink-secondary leading-relaxed">
                {{ t('home.products.card1Desc') }}
              </p>
              <div class="flex flex-wrap gap-2 mt-6">
                <Chip class="!bg-[#433487]/8 !text-[#433487]">{{ t('home.products.card1Tag1') }}</Chip>
                <Chip class="!bg-[#433487]/8 !text-[#433487]">{{ t('home.products.card1Tag2') }}</Chip>
                <Chip class="!bg-[#433487]/8 !text-[#433487]">{{ t('home.products.card1Tag3') }}</Chip>
              </div>
              <div class="mt-auto pt-8">
                <BrandButton variant="ghost" size="sm" to="/products/chatu" class="hover:!border-[#433487] hover:!text-[#433487]" arrow>
                  {{ t('common.learnMore') }}
                </BrandButton>
              </div>
            </div>
          </GlassCard>
        </div>


        <!-- Card 2: 产品 -->
        <div ref="card2Ref" class="h-full">
          <GlassCard padding="lg" hover class="h-full">
            <div class="flex flex-col h-full">
              <Chip class="!bg-[#2DB4E6]/10 !text-[#2DB4E6]">{{ t('home.products.card2Chip') }}</Chip>
              <h3 class="mt-5 text-2xl font-semibold text-ink-primary">
                {{ t('home.products.card2Title') }}
              </h3>
              <p class="mt-3 text-ink-secondary leading-relaxed">
                {{ t('home.products.card2Desc') }}
              </p>
              <div class="flex flex-wrap gap-2 mt-6">
                <Chip class="!bg-[#2DB4E6]/8 !text-[#2DB4E6]">{{ t('home.products.card2Tag1') }}</Chip>
                <Chip class="!bg-[#2DB4E6]/8 !text-[#2DB4E6]">{{ t('home.products.card2Tag2') }}</Chip>
                <Chip class="!bg-[#2DB4E6]/8 !text-[#2DB4E6]">{{ t('home.products.card2Tag3') }}</Chip>
              </div>
              <div class="mt-auto pt-8">
                <BrandButton variant="ghost" size="sm" to="/products/agentstation" class="hover:!border-[#2DB4E6] hover:!text-[#2DB4E6]" arrow>
                  {{ t('common.learnMore') }}
                </BrandButton>
              </div>
            </div>
          </GlassCard>
        </div>

        <!-- Card 3: 园区 -->
        <div ref="card3Ref" class="h-full">
          <GlassCard padding="lg" hover class="h-full">
            <div class="flex flex-col h-full">
              <Chip class="!bg-[#F04045]/10 !text-[#F04045]">{{ t('home.products.card3Chip') }}</Chip>
              <h3 class="mt-5 text-2xl font-semibold text-ink-primary">
                {{ t('home.products.card3Title') }}
              </h3>
              <p class="mt-3 text-ink-secondary leading-relaxed">
                {{ t('home.products.card3Desc') }}
              </p>
              <div class="flex flex-wrap gap-2 mt-6">
                <Chip class="!bg-[#F04045]/8 !text-[#F04045]">{{ t('home.products.card3Tag1') }}</Chip>
                <Chip class="!bg-[#F04045]/8 !text-[#F04045]">{{ t('home.products.card3Tag2') }}</Chip>
                <Chip class="!bg-[#F04045]/8 !text-[#F04045]">{{ t('home.products.card3Tag3') }}</Chip>
              </div>
              <div class="mt-auto pt-8">
                <BrandButton variant="ghost" size="sm" to="/opc-hub" class="hover:!border-[#F04045] hover:!text-[#F04045]" arrow>
                  {{ t('common.learnMore') }}
                </BrandButton>
              </div>
            </div>
          </GlassCard>
        </div>
        <!-- Card 4: 咨询培训 -->
        <div ref="card4Ref" class="h-full">
          <GlassCard padding="lg" hover class="h-full">
            <div class="flex flex-col h-full">
              <Chip class="!bg-[#F4AB38]/10 !text-[#F4AB38]">{{ t('home.products.card4Chip') }}</Chip>
              <h3 class="mt-5 text-2xl font-semibold text-ink-primary">
                {{ t('home.products.card4Title') }}
              </h3>
              <p class="mt-3 text-ink-secondary leading-relaxed">
                {{ t('home.products.card4Desc') }}
              </p>
              <div class="flex flex-wrap gap-2 mt-6">
                <Chip class="!bg-[#F4AB38]/8 !text-[#F4AB38]">{{ t('home.products.card4Tag1') }}</Chip>
                <Chip class="!bg-[#F4AB38]/8 !text-[#F4AB38]">{{ t('home.products.card4Tag2') }}</Chip>
                <Chip class="!bg-[#F4AB38]/8 !text-[#F4AB38]">{{ t('home.products.card4Tag3') }}</Chip>
              </div>
              <div class="mt-auto pt-8">
                <BrandButton variant="ghost" size="sm" to="/training" class="hover:!border-[#F4AB38] hover:!text-[#F4AB38]" arrow>
                  {{ t('common.learnMore') }}
                </BrandButton>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>



    </div>
  </section>
</template>
