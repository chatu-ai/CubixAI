<script setup lang="ts">
import bgUrl from '@/assets/hero/chatu-bg.webp'
import ringUrl from '@/assets/hero/chatu-ring.webp'

/**
 * 首页 ChatU 横幅：ChatU 标志外圈的光环缓慢旋转。
 * 光环那一圈单独成层（chatu-ring），底图在这一圈里换成了不随角度变化的底色，所以转动时看不出接缝；
 * 静止时两层叠起来与原图一致。坐标为原图像素（2172 × 724），按百分比摆放。
 */
defineProps<{ alt: string }>()

const W = 2172
const H = 724
// 光环层所在的正方形（中心即 ChatU 标志圆心）
const RING = { x0: 1432, y0: -5, size: 708 }
const ringStyle = {
  left: `${(RING.x0 / W) * 100}%`,
  top: `${(RING.y0 / H) * 100}%`,
  width: `${(RING.size / W) * 100}%`,
  height: `${(RING.size / H) * 100}%`,
}
</script>

<template>
  <!-- 与原来的 object-cover + object-center 一致：高度铺满、水平居中（宽屏时正好铺满宽度） -->
  <div
    class="absolute inset-y-0 left-1/2 -translate-x-1/2 h-full aspect-[2172/724]"
    role="img"
    :aria-label="alt"
  >
    <img :src="bgUrl" alt="" aria-hidden="true" class="absolute inset-0 w-full h-full" draggable="false" />
    <img :src="ringUrl" alt="" aria-hidden="true" class="chatu-halo absolute" :style="ringStyle" draggable="false" />
  </div>
</template>

<style scoped>
.chatu-halo {
  animation: chatu-ring-spin 48s linear infinite;
  will-change: transform;
}
@keyframes chatu-ring-spin {
  to {
    transform: rotate(-360deg);
  }
}
</style>
