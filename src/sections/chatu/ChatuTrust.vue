<script setup lang="ts">
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import AppImage from '../../components/AppImage.vue'
import { getImageUrl } from '../../utils/image'
import { useContent } from '@/i18n/useContent'
import { chatuContent } from '@/content/chatu'

const c = useContent(chatuContent)

const titleRef = ref<HTMLElement | null>(null)
const cardsRef = ref<HTMLElement | null>(null)

useScrollReveal(titleRef, { y: 30 })
useScrollReveal(cardsRef, { y: 30, delay: 0.15 })

const ITEM_ICONS = ['lucide:badge-check', 'lucide:scale', 'lucide:lock-keyhole']

const items = computed(() =>
  c.value.trust.items.map((item, i) => ({ ...item, icon: ITEM_ICONS[i] ?? '' })),
)

// 证书图片文件名（name 来自 c.trust.certs，按顺序对应）
const CERT_FILES = [
  '图片1.webp',
  '图片2.webp',
  '图片3.webp',
  '图片4.webp',
  'CubixAI大模型调度系统证书_01.webp',
  '企业智能销售后台管理系统证书_01.webp',
].map((image) => ({
  image,
  src: getImageUrl(`zz/${image}`),
  preview: getImageUrl(`zz/previews/${image}`),
}))

const certImages = computed(() =>
  CERT_FILES.map((cert, i) => ({ ...cert, name: c.value.trust.certs[i] ?? '' })),
)
</script>

<template>
  <section class="py-10 md:py-16 bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref="titleRef" class="text-center mb-6 md:mb-8">
        <h2
          class="section-title"
        >
          {{ c.trust.title }}
        </h2>
        <p class="mt-4 text-sm text-ink-secondary">
          {{ c.trust.filing }}
        </p>
      </div>

      <!-- 资质证书轮播 -->
      <div class="relative w-full mb-6 md:mb-8 overflow-hidden">
        <!-- 渐变遮罩 -->
        <div
          class="pointer-events-none absolute left-0 top-0 bottom-0 w-12 md:w-24 z-10"
          style="background: linear-gradient(to right, #F8FAF9, transparent);"
        />
        <div
          class="pointer-events-none absolute right-0 top-0 bottom-0 w-12 md:w-24 z-10"
          style="background: linear-gradient(to left, #F8FAF9, transparent);"
        />

        <div class="flex cert-marquee-track">
          <!-- 第一组 -->
          <div
            v-for="cert in certImages"
            :key="cert.src"
            class="flex-shrink-0 px-3 md:px-4"
          >
            <a
              :href="cert.src"
              target="_blank"
              rel="noopener noreferrer"
              class="block w-64 md:w-80 rounded-xl overflow-hidden shadow-sm border border-line/50 bg-white p-3"
            >
              <div class="h-48 md:h-60 flex items-center justify-center">
                <AppImage
                  :src="cert.preview"
                  :alt="cert.name"
                  class="max-w-full max-h-full object-contain"
                />
              </div>
              <p class="mt-3 text-center text-xs md:text-sm text-ink-secondary leading-tight line-clamp-2">
                {{ cert.name }}
              </p>
            </a>
          </div>
          <!-- 复制一组实现无缝循环 -->
          <div
            v-for="cert in certImages"
            :key="`${cert.src}-dup`"
            aria-hidden="true"
            class="flex-shrink-0 px-3 md:px-4"
          >
            <a
              :href="cert.src"
              target="_blank"
              rel="noopener noreferrer"
              tabindex="-1"
              class="block w-64 md:w-80 rounded-xl overflow-hidden shadow-sm border border-line/50 bg-white p-3"
            >
              <div class="h-48 md:h-60 flex items-center justify-center">
                <AppImage
                  :src="cert.preview"
                  :alt="cert.name"
                  class="max-w-full max-h-full object-contain"
                />
              </div>
              <p class="mt-3 text-center text-xs md:text-sm text-ink-secondary leading-tight line-clamp-2">
                {{ cert.name }}
              </p>
            </a>
          </div>
        </div>
      </div>

      <div ref="cardsRef" class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="item in items"
          :key="item.title"
          class="p-6 md:p-7 rounded-2xl bg-white border border-line/50 shadow-sm hover:shadow-card hover:border-[#433487]/20 transition-all duration-300"
        >
          <span class="mb-4 w-10 h-10 rounded-xl bg-[#433487]/10 text-[#433487] flex items-center justify-center">
            <Icon :icon="item.icon" class="w-5 h-5" aria-hidden="true" />
          </span>
          <h3 class="text-lg font-semibold text-ink-primary">{{ item.title }}</h3>
          <p class="mt-4 text-sm text-ink-secondary leading-relaxed">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes cert-marquee-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.cert-marquee-track {
  animation: cert-marquee-scroll 40s linear infinite;
  width: max-content;
}

.cert-marquee-track:hover {
  animation-play-state: paused;
}
</style>
