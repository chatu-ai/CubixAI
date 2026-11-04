<script setup lang="ts">
import PaidInsightsSection from '../sections/PaidInsightsSection.vue'
</script>

<template>
  <div class="min-h-screen bg-surface-base relative overflow-hidden pt-16 md:pt-20">
    <!-- 装饰光晕 -->
    <div
      class="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
      style="background: radial-gradient(circle, rgba(85,173,115,0.06) 0%, transparent 70%); filter: blur(80px);"
    />
    <PaidInsightsSection />
  </div>
</template>
