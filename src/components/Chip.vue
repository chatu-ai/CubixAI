<script setup lang="ts">
interface Props {
  variant?: 'brand' | 'muted' | 'gold'
}

withDefaults(defineProps<Props>(), {
  variant: 'brand',
})
</script>

<template>
  <span
    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
    :class="[
      variant === 'brand'
        ? 'bg-brand-soft text-brand-deep'
        : variant === 'gold'
        ? 'bg-gold/10 text-gold'
        : 'bg-surface-muted text-ink-secondary',
    ]"
  >
    <slot />
  </span>
</template>
