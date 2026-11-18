<script setup lang="ts">
import { ref, computed, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useScrollReveal } from '../../composables/useScrollReveal'
import { useContent } from '@/i18n/useContent'
import { agentStationContent } from '@/content/agentstation'
import AppImage from '../../components/AppImage.vue'
import hero1 from '@/assets/zft/hero1(2).webp'
import zft1 from '@/assets/zft/1.webp'
import zft2 from '@/assets/zft/2.webp'
import zft3 from '@/assets/zft/3.webp'

const c = useContent(agentStationContent)
const { locale } = useI18n()
const isZh = computed(() => locale.value === 'zh-CN')

const leftRef = ref<HTMLElement | null>(null)
const rightRef = ref<HTMLElement | null>(null)

useScrollReveal(leftRef, { y: 30, delay: 0.15 })
useScrollReveal(rightRef, { y: 30 })

const galleryImages = [hero1, zft1, zft2, zft3]
const thumbImages = [zft1, zft2, zft3]
const currentIndex = ref(0)

const DEFAULT_INDEX = 0
const AUTO_RESET_DELAY = 3000
let resetTimer: ReturnType<typeof setTimeout> | null = null

function resetToDefault() {
  currentIndex.value = DEFAULT_INDEX
}

function selectImage(index: number) {
  currentIndex.value = index + 1
  if (resetTimer) clearTimeout(resetTimer)
  resetTimer = setTimeout(resetToDefault, AUTO_RESET_DELAY)
}

onUnmounted(() => {
  if (resetTimer) clearTimeout(resetTimer)
})

const coreSpecs = computed(() => c.value.hardwareSpec.coreSpecs)
const ioSpecs = computed(() => c.value.hardwareSpec.ioSpecs)
</script>

<template>
  <section class="py-10 md:py-16 bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start"
      >
        <!-- 左：多角度图 -->
        <div ref="leftRef" class="relative">
          <div
            class="aspect-square rounded-2xl bg-white border border-line shadow-card flex items-center justify-center overflow-hidden"
          >
            <div
              class="flex h-full w-full transition-transform duration-500 ease-in-out"
              :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
            >
              <AppImage
                v-for="(img, i) in galleryImages"
                :key="i"
                :src="img"
                :alt="`${c.hardwareSpec.angleAlt} ${i + 1}`"
                class="w-full h-full shrink-0 object-contain"
              />
            </div>
          </div>
          <div class="grid grid-cols-3 gap-3 mt-4">
            <button
              v-for="(img, i) in thumbImages"
              :key="i"
              type="button"
              class="aspect-square rounded-xl bg-white border flex items-center justify-center overflow-hidden transition-colors"
              :aria-pressed="currentIndex === i + 1"
              :class="currentIndex === i + 1 ? 'border-[#2DB4E6] ring-2 ring-[#2DB4E6]/20' : 'border-line hover:border-[#2DB4E6]/50'"
              @click="selectImage(i)"
            >
              <AppImage
                :src="img"
                :alt="`${c.hardwareSpec.angleAlt} ${i + 1}`"
                class="w-full h-full object-contain"
              />
            </button>
          </div>
          <p
            class="mt-4 text-xs md:text-[11px] text-ink-tertiary text-center"
            :class="{ 'whitespace-nowrap': isZh }"
          >
            {{ c.hardwareSpec.caption }}
          </p>
        </div>

        <!-- 右：规格表 -->
        <div ref="rightRef">
          <h2
            class="section-title"
          >
            {{ c.hardwareSpec.title }}
          </h2>
          <p class="mt-3 text-lg text-ink-secondary leading-relaxed">
            {{ c.hardwareSpec.subtitle }}
          </p>

          <div class="mt-10 mb-8">
            <h3
              class="text-sm font-semibold text-[#2DB4E6] uppercase tracking-wide mb-4"
            >
              {{ c.hardwareSpec.coreTitle }}
            </h3>
            <div class="divide-y divide-line">
              <div
                v-for="s in coreSpecs"
                :key="s.name"
                class="py-3 flex items-baseline gap-2"
              >
                <span class="shrink-0 text-sm text-ink-tertiary" :class="isZh ? 'w-20' : 'w-24'">
                  {{ s.name }}
                </span>
                <span class="text-sm text-ink-primary">
                  {{ s.value }}
                  <span
                    v-if="s.highlight"
                    class="text-lg font-semibold text-[#2DB4E6]"
                  >
                    {{ s.highlight }}
                  </span>
                  {{ s.suffix }}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3
              class="text-sm font-semibold text-[#2DB4E6] uppercase tracking-wide mb-4"
            >
              {{ c.hardwareSpec.ioTitle }}
            </h3>
            <div class="divide-y divide-line">
              <div
                v-for="s in ioSpecs"
                :key="s.name"
                class="py-3 flex items-baseline gap-2"
              >
                <span class="shrink-0 text-sm text-ink-tertiary" :class="isZh ? 'w-20' : 'w-24'">
                  {{ s.name }}
                </span>
                <span class="text-sm text-ink-primary">
                  {{ s.value }}
                  <span
                    v-if="s.highlight"
                    class="text-lg font-semibold text-[#2DB4E6]"
                  >
                    {{ s.highlight }}
                  </span>
                  {{ s.suffix }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
