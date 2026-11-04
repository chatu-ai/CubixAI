<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import AppImage from '../../components/AppImage.vue'
import { getImageUrl } from '../../utils/image'

const titleRef = ref<HTMLElement | null>(null)
const cardsRef = ref<HTMLElement | null>(null)

useScrollReveal(titleRef, { y: 30 })
useScrollReveal(cardsRef, { y: 30, delay: 0.15 })

const items = [
  {
    title: '合规备案，符合规范',
    desc: '遵循国家网信办、工信部、以及互联网信息服务算法备案系统等管理规定。',
  },
  {
    title: '知识产权清晰、可追溯、可担责',
    desc: '最新关键词过滤算法，最大限度保证生产内容合法合规，图文审查与协议符合国家规范',
  },
  {
    title: '闭源不是 "封闭" 而是 "可控可用"',
    desc: '自主研发底层架构，符合国内规范要求，架构稳定，国内使用无限制',
  },
]

const certImages = [
  {
    image: '图片1.webp',
    name: 'ISO 9001 质量管理体系认证证书',
  },
  {
    image: '图片2.webp',
    name: 'ChatU CE 符合性认证证书',
  },
  {
    image: '图片3.webp',
    name: '发明专利公布',
  },
  {
    image: '图片4.webp',
    name: 'ChatU 企业大模型生成合成调度整合算法备案',
  },
  {
    image: 'CubixAI大模型调度系统证书_01.webp',
    name: 'CubixAI 大模型调度系统软著证书',
  },
  {
    image: '企业智能销售后台管理系统证书_01.webp',
    name: '企业智能销售后台管理系统软著证书',
  },
].map((cert) => ({
  ...cert,
  src: getImageUrl(`zz/${cert.image}`),
  preview: getImageUrl(`zz/previews/${cert.image}`),
}))
</script>

<template>
  <section class="py-20 md:py-[120px] bg-surface-base">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref="titleRef" class="text-center mb-12 md:mb-16">
        <h2
          class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight"
        >
          权威合规资质・安全可信保障
        </h2>
        <p class="mt-4 text-sm text-ink-secondary">
          大模型生成合成调度整合算法备案号：网信算备110108947947801240011号
        </p>
      </div>

      <!-- 资质证书轮播 -->
      <div class="relative w-full mb-12 md:mb-16 overflow-hidden">
        <!-- 渐变遮罩 -->
        <div
          class="pointer-events-none absolute left-0 top-0 bottom-0 w-12 md:w-24 z-10"
          style="background: linear-gradient(to right, #FAFAF7, transparent);"
        />
        <div
          class="pointer-events-none absolute right-0 top-0 bottom-0 w-12 md:w-24 z-10"
          style="background: linear-gradient(to left, #FAFAF7, transparent);"
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
          class="p-6 md:p-8 rounded-2xl bg-white border border-line/50 shadow-sm hover:shadow-card hover:border-[#433487]/20 transition-all duration-300"
        >
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
