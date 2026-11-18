<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import StatNumber from './StatNumber.vue'

const { t, locale } = useI18n()

const isZh = computed(() => locale.value === 'zh-CN')
const communityValue = computed(() => (isZh.value ? 250 : 2.5))
const communityDecimals = computed(() => (isZh.value ? 0 : 1))
</script>

<template>
  <section class="py-8 md:py-12 bg-surface-base border-y border-line/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
        <StatNumber :value="3000" :suffix="t('home.stats.customerSuffix')" :label="t('home.stats.customers')" />
        <StatNumber :value="100" :suffix="t('home.stats.industrySuffix')" :label="t('home.stats.industries')" />
        <StatNumber :value="98" :suffix="t('home.stats.satisfactionSuffix')" :label="t('home.stats.satisfaction')" />
        <StatNumber :value="communityValue" :decimals="communityDecimals" :suffix="t('home.stats.communitySuffix')" :label="t('home.stats.community')" />
      </div>
    </div>
  </section>
</template>
