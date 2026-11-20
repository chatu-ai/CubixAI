<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { Icon } from '@iconify/vue'
import { localePath } from '../composables/useLocalePath'

interface Props {
  variant?: 'primary' | 'ghost'
  size?: 'sm' | 'md'
  to?: string
  href?: string
  target?: string
  arrow?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  arrow: false,
})

/** 站内链接自动带上当前语言前缀（英文页面上 /contact → /en/contact） */
const localizedTo = computed(() => (props.to?.startsWith('/') ? localePath(props.to) : props.to))

const classes = computed(() => {
  const base =
    'group inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full'
  const sizing =
    props.size === 'sm' ? 'h-9 px-4 text-sm' : 'h-11 px-5 text-[15px]'
  const theme =
    props.variant === 'primary'
      ? 'bg-brand-gradient text-white shadow-sm hover:shadow-card-hover hover:brightness-105'
      : 'border border-line bg-surface-card text-ink-primary hover:border-brand hover:text-brand'
  return [base, sizing, theme].join(' ')
})
</script>

<template>
  <RouterLink v-if="to" :to="localizedTo!" :class="classes">
    <slot />
    <Icon v-if="arrow" icon="lucide:arrow-right" class="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
  </RouterLink>
  <a v-else-if="href" :href="href" :target="target" :class="classes">
    <slot />
    <Icon v-if="arrow" icon="lucide:arrow-right" class="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
  </a>
  <button v-else :class="classes" v-bind="$attrs">
    <slot />
    <Icon v-if="arrow" icon="lucide:arrow-right" class="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
  </button>
</template>
