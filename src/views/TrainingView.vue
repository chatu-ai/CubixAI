<script setup lang="ts">
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'
import { useScrollReveal } from '../composables/useScrollReveal'
import { getImageUrl } from '../utils/image'
import BrandButton from '../components/BrandButton.vue'
import EnterpriseModal from '../components/EnterpriseModal.vue'
import AppImage from '../components/AppImage.vue'
import { useContent } from '@/i18n/useContent'
import { trainingContent } from '@/content/training'

const heroRef = ref<HTMLElement | null>(null)
const problemRef = ref<HTMLElement | null>(null)
const architectureRef = ref<HTMLElement | null>(null)
const differenceRef = ref<HTMLElement | null>(null)
const pathRef = ref<HTMLElement | null>(null)
const consultRef = ref<HTMLElement | null>(null)
const ctaRef = ref<HTMLElement | null>(null)

useScrollReveal(heroRef, { y: 30 })
useScrollReveal(problemRef, { y: 30, delay: 0.1 })
useScrollReveal(architectureRef, { y: 30, delay: 0.1 })
useScrollReveal(differenceRef, { y: 30, delay: 0.1 })
useScrollReveal(pathRef, { y: 30, delay: 0.1 })
useScrollReveal(consultRef, { y: 30, delay: 0.1 })
useScrollReveal(ctaRef, { y: 30, delay: 0.1 })

const c = useContent(trainingContent)

const architectureImages = [getImageUrl('pxzx/1.webp'), getImageUrl('pxzx/2.webp'), getImageUrl('pxzx/3.webp')]

const architectureCards = computed(() =>
  c.value.architecture.cards.map((card, i) => ({ ...card, image: architectureImages[i] })),
)

const differences = computed(() =>
  c.value.differences.rows.map((d, i) => ({ ...d, index: String(i + 1) })),
)

const pathImages = [getImageUrl('pxzx/qy.webp'), getImageUrl('pxzx/yw.webp'), getImageUrl('pxzx/gr.webp')]

const paths = computed(() =>
  c.value.paths.items.map((p, i) => ({ ...p, image: pathImages[i] })),
)

const showModal = ref(false)

const consultIcons = ['lucide:presentation', 'lucide:circle-play', 'lucide:rocket']

const consultWays = computed(() =>
  c.value.formats.items.map((way, i) => ({ ...way, icon: consultIcons[i] })),
)
</script>

<template>
  <div class="min-h-screen bg-white training-theme">
    <!-- Hero -->
    <section ref="heroRef" class="relative overflow-hidden bg-surface-base pt-10 md:pt-14 pb-10 md:pb-12">
      <div class="absolute -top-40 -right-40 w-[500px] h-[500px] md:w-[600px] md:h-[600px] rounded-full pointer-events-none" style="background: radial-gradient(circle, rgba(253, 174, 55, 0.15) 0%, transparent 70%); filter: blur(60px);" />
      <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="page-title">
          {{ c.hero.title }}
        </h1>
        <p class="mt-6 text-lg md:text-xl text-ink-secondary max-w-3xl mx-auto leading-relaxed">
          {{ c.hero.subtitle }}
        </p>

        <div class="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <div v-for="s in c.hero.stats" :key="s.label" class="p-5 rounded-2xl bg-white border border-line/50 shadow-sm">
            <div class="text-2xl md:text-3xl font-semibold text-brand">{{ s.value }}</div>
            <div class="mt-1 text-sm text-ink-secondary">{{ s.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 我们解决什么问题 -->
    <section ref="problemRef" class="py-10 md:py-16 bg-white">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-6 md:mb-8">
          <h2 class="section-title">{{ c.problems.title }}</h2>
        </div>

        <div class="rounded-2xl border border-line overflow-hidden">
          <div class="grid grid-cols-1 md:grid-cols-2 bg-surface-muted">
            <div class="px-6 py-4 text-sm font-semibold text-ink-primary border-b md:border-b-0 md:border-r border-line">{{ c.problems.statusHeader }}</div>
            <div class="px-6 py-4 text-sm font-semibold text-ink-primary border-b border-line">{{ c.problems.solutionHeader }}</div>
          </div>
          <div v-for="(p, i) in c.problems.rows" :key="i" class="grid grid-cols-1 md:grid-cols-2 bg-white">
            <div class="px-6 py-5 text-ink-secondary border-b md:border-r border-line flex items-center">
              {{ p.status }}
            </div>
            <div class="px-6 py-5 text-ink-secondary border-b border-line flex items-center">
              {{ p.solution }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 课程架构 -->
    <section ref="architectureRef" class="py-10 md:py-16 bg-surface-base">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-6 md:mb-8">
          <h2 class="section-title">{{ c.architecture.title }}</h2>
          <p class="section-subtitle">{{ c.architecture.subtitle1 }}</p>
          <p class="section-subtitle">{{ c.architecture.subtitle2 }}</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div v-for="card in architectureCards" :key="card.title" class="p-6 rounded-2xl bg-white border border-line/50 shadow-sm">
            <div class="aspect-video rounded-xl overflow-hidden mb-5 bg-surface-muted">
              <AppImage v-if="card.image" :src="card.image" :alt="card.title" class="w-full h-full object-cover" />
            </div>
            <h3 class="text-lg font-semibold text-ink-primary mb-4">{{ card.title }}</h3>
            <ul class="space-y-2">
              <li v-for="item in card.items" :key="item" class="text-sm text-ink-secondary flex items-start gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-brand mt-1.5 shrink-0" />
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 六大核心差异 -->
    <section ref="differenceRef" class="py-10 md:py-16 bg-white">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-6 md:mb-8">
          <h2 class="section-title">{{ c.differences.title }}</h2>
        </div>

        <div class="rounded-2xl border border-line overflow-hidden">
          <div class="hidden md:grid grid-cols-12 bg-surface-muted">
            <div class="col-span-1 px-6 py-4 text-sm font-semibold text-ink-primary border-r border-line">#</div>
            <div class="col-span-3 px-6 py-4 text-sm font-semibold text-ink-primary border-r border-line">{{ c.differences.pointHeader }}</div>
            <div class="col-span-8 px-6 py-4 text-sm font-semibold text-ink-primary">{{ c.differences.descHeader }}</div>
          </div>
          <div v-for="d in differences" :key="d.index" class="grid grid-cols-1 md:grid-cols-12 bg-white border-b border-line last:border-b-0">
            <div class="md:col-span-1 px-6 py-5 text-brand font-semibold border-r border-line hidden md:flex items-center">{{ d.index }}</div>
            <div class="md:col-span-3 px-6 py-5 text-ink-primary font-semibold border-r border-line flex items-center">
              <span class="md:hidden text-brand font-semibold mr-2">{{ d.index }}.</span>
              {{ d.title }}
            </div>
            <div class="md:col-span-8 px-6 py-5 text-ink-secondary flex items-center">{{ d.desc }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 典型学习路径 -->
    <section ref="pathRef" class="py-10 md:py-16 bg-surface-base">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-6 md:mb-8">
          <h2 class="section-title">{{ c.paths.title }}</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="p in paths" :key="p.role">
            <div class="aspect-video rounded-2xl overflow-hidden mb-6 bg-surface-muted">
              <AppImage v-if="p.image" :src="p.image" :alt="p.role" class="w-full h-full object-cover" />
            </div>
            <h3 class="text-xl md:text-xl font-semibold text-ink-primary mb-4">{{ p.role }}</h3>
            <div class="text-sm text-ink-secondary mb-3">
              <span class="text-ink-primary font-medium">{{ c.paths.routeLabel }}</span>{{ p.route }}
            </div>
            <div class="text-sm text-ink-secondary">
              <span class="text-ink-primary font-medium">{{ c.paths.resultLabel }}</span>{{ p.result }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 咨询方式 -->
    <section ref="consultRef" class="py-10 md:py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-6 md:mb-8">
          <h2 class="section-title">{{ c.formats.title }}</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="way in consultWays" :key="way.title" class="p-6 md:p-7 rounded-2xl bg-surface-base border border-line/50">
            <span class="mb-4 w-11 h-11 rounded-xl bg-brand-soft text-brand flex items-center justify-center">
              <Icon :icon="way.icon" class="w-5 h-5" aria-hidden="true" />
            </span>
            <h3 class="text-xl font-semibold text-ink-primary mb-4">{{ way.title }}</h3>
            <ul class="space-y-3">
              <li v-for="item in way.items" :key="item" class="text-sm text-ink-secondary flex items-start gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-brand mt-1.5 shrink-0" />
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section ref="ctaRef" class="py-10 md:py-16 bg-surface-base">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="section-title">
          {{ c.cta.title }}
        </h2>
        <p class="section-subtitle">
          {{ c.cta.subtitle }}
        </p>
        <p class="mt-2 text-lg text-ink-secondary">
          {{ c.cta.tagline }}
        </p>
        <div class="mt-10">
          <BrandButton class="!px-10 !py-3 text-lg" @click="showModal = true">
            {{ c.cta.button }}
          </BrandButton>
        </div>
      </div>
    </section>

    <EnterpriseModal v-model="showModal" />
  </div>
</template>

<style scoped>
.training-theme :deep(.text-brand),
.training-theme :deep(.text-brand-deep) {
  color: #FDAE37;
}
.training-theme :deep(.bg-brand) {
  background-color: #FDAE37;
}
.training-theme :deep(.bg-brand-gradient) {
  background-image: linear-gradient(135deg, #FDAE37 0%, #E08C0A 100%);
}
.training-theme :deep(.bg-brand-soft) {
  background-color: #FFF4E0;
}
.training-theme :deep(.text-brand-soft) {
  color: #FDAE37;
}
</style>
