<script setup lang="ts">
import { ref, computed } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import { useContent } from '@/i18n/useContent'
import { chatuContent } from '@/content/chatu'

const c = useContent(chatuContent)

const activeTab = ref<'frontend' | 'backend'>('frontend')
const sectionRef = ref<HTMLElement | null>(null)

useScrollReveal(sectionRef, { y: 30 })

const view = computed(() => c.value.interface[activeTab.value])
</script>

<template>
  <section ref="sectionRef" class="py-10 md:py-16 bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Tabs -->
      <div class="flex items-center justify-center gap-2 mb-8">
        <button
          class="px-5 py-2.5 rounded-full text-sm font-medium transition-all"
          :class="
            activeTab === 'frontend'
              ? 'bg-[#433487] text-white'
              : 'bg-surface-muted text-ink-secondary hover:text-ink-primary'
          "
          @click="activeTab = 'frontend'"
        >
          {{ c.interface.tabs.frontend }}
        </button>
        <button
          class="px-5 py-2.5 rounded-full text-sm font-medium transition-all"
          :class="
            activeTab === 'backend'
              ? 'bg-[#433487] text-white'
              : 'bg-surface-muted text-ink-secondary hover:text-ink-primary'
          "
          @click="activeTab = 'backend'"
        >
          {{ c.interface.tabs.backend }}
        </button>
      </div>

      <!-- Content -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <!-- Screenshot -->
        <div
          class="rounded-2xl border border-line shadow-card overflow-hidden"
        >
          <img v-if="activeTab === 'backend'" src="@/assets/zkht.webp" class="w-full" :alt="c.interface.tabs.backend" />
          <img v-else src="@/assets/chatUqd.webp" class="w-full" :alt="c.interface.tabs.frontend" />
        </div>

        <!-- Features -->
        <div>
          <h3 class="text-xl font-semibold text-ink-primary mb-2">
            {{ view.title }}
          </h3>
          <p class="text-ink-secondary mb-8">
            {{ view.desc }}
          </p>
          <div class="grid grid-cols-2 gap-4">
            <div
              v-for="feat in view.features"
              :key="feat"
              class="flex items-center gap-3 p-4 rounded-xl bg-surface-card border border-line/50"
            >
              <div
                class="w-8 h-8 rounded-lg bg-[#433487]/10 flex items-center justify-center shrink-0"
              >
                <span class="text-xs font-semibold text-[#433487]">✓</span>
              </div>
              <span class="text-sm font-medium text-ink-primary">{{ feat }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
