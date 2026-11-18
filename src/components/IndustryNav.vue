<script setup lang="ts">
interface NavItem {
  id: string
  label: string
}

const props = defineProps<{
  items: NavItem[]
  activeIndex: number
  sticky?: boolean
}>()

const emit = defineEmits<{
  select: [index: number]
}>()
</script>

<template>
  <div
    class="z-40 transition-all duration-300"
    :class="
      sticky
        ? 'sticky top-14 md:top-16 bg-surface-base/95 backdrop-blur-xl border-b border-line/30 py-3'
        : 'relative py-3 bg-surface-base'
    "
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-center gap-2 overflow-x-auto" style="scrollbar-width: none;">
        <button
          v-for="(item, i) in items"
          :key="item.id"
          class="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all shrink-0"
          :class="
            activeIndex === i
              ? 'bg-brand text-white shadow-sm'
              : 'bg-[#F1F4F2] text-ink-secondary hover:text-ink-primary'
          "
          @click="emit('select', i)"
        >
          {{ item.label }}
        </button>
      </div>
    </div>
  </div>
</template>
