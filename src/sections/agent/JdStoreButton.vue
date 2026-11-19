<script setup lang="ts">
import jdLogo from '@/assets/jd-logo.webp'

/** 京东商城旗舰店的智方体商品页 */
const JD_STORE_URL = 'https://item.jd.com/10238349123107.html'

defineProps<{
  /** 按钮文字，如「旗舰店下单」 */
  label: string
  /** 京东 logo 的替代文字 */
  logoAlt: string
}>()
</script>

<template>
  <!-- 与 BrandButton 默认尺寸一致；悬停时边框和文字变为京东红 -->
  <a
    :href="JD_STORE_URL"
    target="_blank"
    rel="noopener noreferrer"
    class="inline-flex items-center gap-2 h-11 pl-3 pr-5 rounded-full border border-line bg-surface-card text-[15px] font-medium text-ink-primary transition-colors duration-200 hover:border-[#E1251B] hover:text-[#E1251B]"
  >
    <img :src="jdLogo" :alt="logoAlt" class="w-6 h-6 rounded-full" draggable="false" />
    <span>{{ label }}</span>
  </a>
</template>
