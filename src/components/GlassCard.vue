<script setup lang="ts">
interface Props {
  padding?: 'sm' | 'md' | 'lg'
  hover?: boolean
}

withDefaults(defineProps<Props>(), {
  padding: 'md',
  hover: false,
})

const paddingMap = {
  sm: 'p-4',
  md: 'p-5',
  lg: 'p-6 md:p-7',
}
</script>

<template>
  <div
    class="relative bg-surface-card rounded-2xl shadow-card border border-line overflow-hidden"
    :class="[paddingMap[padding], hover && 'transition-all duration-200 hover:border-brand/40 hover:shadow-card-hover hover:-translate-y-0.5']"
  >
    <slot />
  </div>
</template>
