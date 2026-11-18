<script setup lang="ts">
import { ref, computed } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import { useContent } from '@/i18n/useContent'
import { agentStationContent } from '@/content/agentstation'
import Chip from '../../components/Chip.vue'
import AppImage from '../../components/AppImage.vue'

const sectionRef = ref<HTMLElement | null>(null)
useScrollReveal(sectionRef, { y: 30 })

const c = useContent(agentStationContent)

const ITEM_MEDIA = [
  { num: '01', image: new URL('../../assets/zft/ld1.webp', import.meta.url).href },
  { num: '02', image: new URL('../../assets/zft/ld2.webp', import.meta.url).href },
  { num: '03', image: new URL('../../assets/zft/ld3.webp', import.meta.url).href },
  { num: '04', image: new URL('../../assets/zft/ld4.webp', import.meta.url).href },
]

const items = computed(() => c.value.highlights.items.map((item, i) => ({ ...ITEM_MEDIA[i], ...item })))
</script>

<template>
  <section ref="sectionRef" class="py-10 md:py-16 bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div
          v-for="item in items"
          :key="item.num"
          class="flex flex-col p-6 md:p-7 rounded-2xl bg-surface-card border border-line shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          <div class="mt-4 aspect-video rounded-xl overflow-hidden">
            <AppImage
              :src="item.image"
              :alt="item.title"
              class="w-full h-full object-cover"
            />
          </div>
          <h3 class="mt-4 text-xl font-semibold text-ink-primary">
            {{ item.title }}
          </h3>
          <p class="mt-2 text-sm text-ink-secondary leading-relaxed flex-1">
            {{ item.desc }}
          </p>
          <Chip class="mt-4 self-start !bg-[#E6F5FB] !text-[#1A8BC4]">{{ item.tag }}</Chip>
        </div>
      </div>
    </div>
  </section>
</template>
