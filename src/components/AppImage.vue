<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'

interface Props {
  src: string
  alt?: string
  class?: HTMLAttributes['class']
  width?: number | string
  height?: number | string
  loading?: 'lazy' | 'eager'
  decoding?: 'async' | 'sync' | 'auto'
  /** 首屏关键图：启用 preload + 立即加载 */
  priority?: boolean
  /** 手动传入 srcset，例如 "img-400.webp 400w, img-800.webp 800w" */
  srcset?: string
  sizes?: string
}

const props = withDefaults(defineProps<Props>(), {
  alt: '',
  loading: 'lazy',
  decoding: 'async',
  priority: false,
})

const shouldPreload = computed(() => props.priority)
const imgLoading = computed(() => (props.priority ? 'eager' : props.loading))
</script>

<template>
  <!-- 首屏关键图预加载 -->
  <Teleport v-if="shouldPreload" to="head">
    <link
      rel="preload"
      as="image"
      :href="src"
      :imagesrcset="srcset"
      :imagesizes="sizes"
    />
  </Teleport>

  <img
    :src="src"
    :alt="alt"
    :class="class"
    :width="width"
    :height="height"
    :loading="imgLoading"
    :decoding="decoding"
    :fetchpriority="priority ? 'high' : undefined"
    :srcset="srcset"
    :sizes="sizes"
  />
</template>
