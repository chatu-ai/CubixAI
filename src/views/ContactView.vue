<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useScrollReveal } from '../composables/useScrollReveal'
import { Icon } from '@iconify/vue'
import PartnersSection from '../sections/PartnersSection.vue'
import cctvImg1 from '@/assets/st/cctv/c1.webp'
import cctvImg2 from '@/assets/st/cctv/c2.webp'

const { t } = useI18n()

onMounted(() => {
  const hash = window.location.hash
  if (hash === '#contact-bottom') {
    setTimeout(() => {
      const el = document.getElementById('contact-bottom')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }, 300)
  }
})

/* ========================
   1. Hero
   ======================== */
const heroRef = ref<HTMLElement | null>(null)
useScrollReveal(heroRef, { y: 30 })

/* ========================
   2. 核心理念
   ======================== */
const missionRef = ref<HTMLElement | null>(null)
useScrollReveal(missionRef, { y: 30, delay: 0.1 })

const missions = [
  {
    image: new URL('@/assets/gywm/1.webp', import.meta.url).href,
    title: '使命 Mission',
    desc: '致力于成为全球企业信赖的 AI 服务伙伴，通过技术创新与专业化解决方案，赋能企业数智化转型',
  },
  {
    image: new URL('@/assets/gywm/2.webp', import.meta.url).href,
    title: '愿景 Vision',
    desc: '憧憬一个由 AI 智能驱动的全球商业生态，为企业提供更优质的生产力工具，推动高效、可持续发展',
  },
  {
    image: new URL('@/assets/gywm/3.webp', import.meta.url).href,
    title: '价值观 Values',
    desc: '客户至上 · 创新驱动 · 全球视野 · 合作共赢 · 诚信责任',
  },
]

/* ========================
   3. 发展历程
   ======================== */
const timelineRef = ref<HTMLElement | null>(null)
useScrollReveal(timelineRef, { y: 30, delay: 0.1 })

const milestones = [
  { year: '2023.03', title: 'ChatU 上线', desc: '企业 AI 操作系统' },
  { year: '2023.06', title: '公司成立', desc: '软积木（北京）科技有限公司正式成立' },
  { year: '2023.08', title: '签约客户达到 3000+', desc: '开拓日、韩、欧、美市场' },
  { year: '2025.01', title: '开拓国际业务', desc: 'PEC China 区引入「提示工程大会」国际品牌，启动亚洲市场运营' },
  { year: '2025.12', title: 'OPC Hub', desc: '上线 OPC Hub，布局 OPC 产业生态' },
  { year: '2026.05', title: '智方体 · AgentStation', desc: '正式推出硬件产品「方体 · AgentStation」' },
]

/* ========================
   4. 全球背书
   ======================== */
const globalRef = ref<HTMLElement | null>(null)
const cctvRef = ref<HTMLElement | null>(null)
useScrollReveal(globalRef, { y: 30, delay: 0.1 })
useScrollReveal(cctvRef, { y: 20, delay: 0.3 })

const events = [
  { name: '韩国 SOUTH SUMMIT 2023', location: '首尔', desc: 'TODO: 活动说明占位', image: 'hg.webp' },
  { name: '中国 香港贸发局活动 2024', location: '香港', desc: 'TODO: 活动说明占位', image: 'xg.webp' },
  { name: '美国 Microsoft MVP Global Summit 2024', location: '西雅图', desc: 'TODO: 活动说明占位', image: 'xyt.webp' },
  { name: '英国 PEC 国际 2025', location: '伦敦', desc: 'TODO: 活动说明占位', image: 'ld.webp' },
  { name: '美国 NVIDIA GTC 2026', location: '硅谷', desc: 'TODO: 活动说明占位', image: 'ywd.webp', extraImage: 'ywd3.webp' },
  // { name: '日本', location: '', desc: 'TODO: 活动说明占位', image: '' },
  { name: '韩国 NextRise 2026', location: '首尔', desc: 'TODO: 活动说明占位', image: 'hg2.webp' },
]

/* ========================
   5. 荣誉与伙伴
   ======================== */
const honorsRef = ref<HTMLElement | null>(null)
useScrollReveal(honorsRef, { y: 30 })

const marqueeRef = ref<HTMLElement | null>(null)

function pauseMarquee() {
  marqueeRef.value?.classList.add('paused')
}

function resumeMarquee() {
  marqueeRef.value?.classList.remove('paused')
}

const honors = [
  { image: '111.webp', title: '' },
  { image: '222.webp', title: '' },
  { image: '333.webp', title: '' },
  { image: '444.webp', title: '' },
  { image: '555.webp', title: '' },
  { image: '666.webp', title: '' },
  { image: '777.webp', title: '' },
  { image: '888.webp', title: '' },
  { image: '999.webp', title: '' },
  { image: '101.webp', title: '' },
  { image: '102.webp', title: '' },
  { image: '103.webp', title: '' },
  { image: '104.webp', title: '' },
  { image: '105.webp', title: '' },
  { image: '106.webp', title: '' },
  { image: '107.webp', title: '' },
  { image: 'a1.webp', title: '' },
  { image: 'a2.webp', title: '' },
  { image: 'a3.webp', title: '' },
]

function getHonorUrl(name: string) {
  // 处理图片文件名，确保相对路径正确
  return new URL(`../assets/qyry/${name}`, import.meta.url).href
}

function getQqUrl(name: string) {
  return new URL(`../assets/qq/${name}`, import.meta.url).href
}

function getAlUrl(name: string) {
  return new URL(`../assets/al/${name}`, import.meta.url).href
}

/* ========================
   6. 全球办公
   ======================== */
const locationsRef = ref<HTMLElement | null>(null)
useScrollReveal(locationsRef, { y: 30, delay: 0.1 })

const locations = [
  {
    city: '北京 · 中关村AI北纬社区',
    address: '北京市海淀区中关村 AI 北纬社区D2-1',
    func: 'AI 产业生态合作、创新业务孵化、前沿技术交流',
    image: 'bwsq1.webp',
  },
  {
    city: '北京 · 清华科技园',
    address: '中关村东路 1 号清华科技园 C 座 21 层',
    func: '战略决策、产品研发、品牌运营',
    image: 'wdk.webp',
  },
  {
    city: '无锡 · 锡山',
    address: '安镇街道丹山路 88 号锡东创融大厦 C 座 15-005',
    func: '华东客户交付、技术支持',
    image: 'wx.webp',
  },
  {
    city: '新加坡',
    address: '139 PASIR RIS GROVE, #05-43, D\'NEST',
    func: '国际市场拓展、海外客户服务',
    image: 'xjp.webp',
  },
]

/* ========================
   7. 联系入口 (CTA)
   ======================== */
const ctaRef = ref<HTMLElement | null>(null)
useScrollReveal(ctaRef, { y: 30 })

/* ========================
   8. 联系矩阵
   ======================== */
const matrixRef = ref<HTMLElement | null>(null)
useScrollReveal(matrixRef, { y: 40, delay: 0.1 })
</script>

<template>
  <div>
    <!-- ========================
         1. Hero
         ======================== -->
    <section class="relative overflow-hidden bg-surface-base pt-14 md:pt-20 pb-10 md:pb-16">
      <div
        class="absolute -top-40 -right-40 w-[500px] h-[500px] md:w-[600px] md:h-[600px] rounded-full pointer-events-none"
        style="background: radial-gradient(circle, rgba(85, 173, 115, 0.15) 0%, transparent 70%); filter: blur(60px);"
      />
      <div ref="heroRef" class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl lg:text-[64px] font-semibold text-ink-primary leading-tight tracking-tight">
          {{ t('about.hero.title') }}
        </h1>
        <p class="mt-6 text-xl md:text-2xl text-ink-secondary">
          {{ t('about.hero.desc') }}
        </p>
      </div>
    </section>

    <!-- ========================
         2. 核心理念
         ======================== -->
    <section class="py-12 md:py-20 bg-surface-base">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 md:mb-10">
          <h2 class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight">{{ t('about.mission.title') }}</h2>
        </div>
        <div ref="missionRef" class="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          <div
            v-for="item in missions"
            :key="item.title"
            class="flex flex-col p-8 rounded-3xl bg-surface-card border border-line shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div class="aspect-video rounded-xl overflow-hidden mb-5">
              <img
                :src="item.image"
                :alt="item.title"
                class="w-full h-full object-cover"
              />
            </div>
            <h3 class="text-xl font-semibold text-ink-primary">{{ item.title }}</h3>
            <p class="mt-3 text-ink-secondary leading-relaxed flex-1">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================
         3. 发展历程
         ======================== -->
    <section class="py-12 md:py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 md:mb-10">
          <h2 class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight">{{ t('about.timeline.title') }}</h2>
        </div>
        <div ref="timelineRef" class="relative">
          <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-ink-primary/10 md:-translate-x-px" />
          <div
            v-for="(m, i) in milestones"
            :key="m.year"
            class="relative flex items-start md:items-center mb-10 last:mb-0"
            :class="i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'"
          >
            <div class="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-brand border-2 border-white md:-translate-x-1.5 z-10 mt-1.5 md:mt-0" />
            <div class="ml-10 md:ml-0 md:w-1/2" :class="i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'">
              <span class="text-2xl md:text-3xl font-bold text-brand">{{ m.year }}</span>
              <h3 class="mt-1 text-lg font-semibold text-ink-primary">{{ m.title }}</h3>
              <p class="mt-1 text-sm text-ink-secondary">{{ m.desc }}</p>
            </div>
            <div class="hidden md:block md:w-1/2" />
          </div>
        </div>
      </div>
    </section>

    <!-- ========================
         4. 全球背书
         ======================== -->
    <section class="py-12 md:py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref="globalRef" class="text-center mb-8 md:mb-10">
          <h2 class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight">
            {{ t('about.global.title') }}
          </h2>
          <p class="mt-4 text-lg text-ink-secondary">
            {{ t('about.global.desc') }}
          </p>
        </div>

        <div class="flex flex-wrap justify-center gap-4 mb-10">
          <div
            v-for="e in events"
            :key="e.name"
            class="group w-[calc(50%-8px)] md:w-[calc(33.333%-11px)] p-5 rounded-2xl bg-surface-base border border-line/50 hover:shadow-card hover:-translate-y-1 hover:border-brand/30 transition-all duration-300"
          >
            <div
              class="rounded-xl bg-surface-muted border border-line/50 overflow-hidden mb-4"
              :class="e.extraImage ? 'flex flex-col aspect-video' : 'aspect-video'"
            >
              <template v-if="e.image">
                <div :class="e.extraImage ? 'w-full h-1/2' : 'w-full h-full'">
                  <img
                    :src="getQqUrl(e.image)"
                    class="group-hover:scale-105 transition-transform duration-500"
                    :class="[e.image === 'ywd.webp' ? 'object-cover object-top' : 'object-cover', e.extraImage ? 'w-full h-full' : 'w-full h-full']"
                    alt=""
                  />
                </div>
              </template>
              <template v-if="e.extraImage">
                <div class="w-full h-1/2">
                  <img
                    :src="getQqUrl(e.extraImage)"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt=""
                  />
                </div>
              </template>
              <span v-if="!e.image && !e.extraImage" class="flex items-center justify-center h-full text-xs text-ink-tertiary">场地图占位</span>
            </div>
            <h3 class="text-base font-semibold text-ink-primary">{{ e.name }}</h3>
            <p class="text-xs text-brand mt-1">{{ e.location }}</p>
          </div>
        </div>

        <!-- CCTV 背书 -->
        <div
          ref="cctvRef"
          class="max-w-7xl mx-auto p-6 rounded-2xl bg-surface-base border border-line/50 text-center"
        >
          <div class="flex items-center justify-center gap-3 mb-2">
            <Icon icon="lucide:tv" class="w-5 h-5 text-gold" />
            <span class="text-sm font-semibold text-ink-primary">
              {{ t('about.global.cctv') }}
            </span>
          </div>
          <p class="text-sm text-ink-secondary mb-5">
            {{ t('about.global.cctvDesc') }}
          </p>
          <div class="grid grid-cols-2 gap-4 md:gap-6">
            <div class="rounded-xl overflow-hidden h-56 md:h-80">
              <img
                :src="cctvImg1"
                alt="CCTV-2 赢在 AI+ 栏目截图 1"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="rounded-xl overflow-hidden h-56 md:h-80">
              <img
                :src="cctvImg2"
                alt="CCTV-2 赢在 AI+ 栏目截图 2"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <p class="mt-8 text-center text-base text-ink-tertiary">
          {{ t('about.global.partners') }}
        </p>
      </div>
    </section>

    <!-- ========================
         5. 企业荣誉
         ======================== -->
    <section class="py-12 md:py-20 bg-surface-base">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref="honorsRef">
          <div class="text-center mb-8 md:mb-10">
            <h2 class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight">
              {{ t('about.honors.title') }}
            </h2>
            <p class="mt-4 text-lg text-ink-secondary">
              {{ t('about.honors.desc') }}
            </p>
          </div>

          <div
            ref="marqueeRef"
            class="relative overflow-hidden"
            @mouseenter="pauseMarquee"
            @mouseleave="resumeMarquee"
          >
            <!-- 渐变遮罩 -->
            <div
              class="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10"
              style="background: linear-gradient(to right, #F8FAF9, transparent);"
            />
            <div
              class="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10"
              style="background: linear-gradient(to left, #F8FAF9, transparent);"
            />

            <!-- 第一行 -->
            <div class="flex honor-track">
              <div
                v-for="h in honors.slice(0, 8)"
                :key="'a-' + h.image"
                class="flex-shrink-0 w-44 md:w-56 px-2"
              >
                <div class="group relative rounded-2xl bg-white border border-line shadow-sm hover:shadow-card transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col">
                  <div class="flex-1 min-h-0 aspect-[4/3] bg-gradient-to-b from-[#F9FAFB] to-white p-4 md:p-5 flex items-center justify-center">
                    <img
                      :src="getHonorUrl(h.image)"
                      class="max-w-full max-h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div
                v-for="h in honors.slice(0, 8)"
                :key="'b-' + h.image"
                class="flex-shrink-0 w-44 md:w-56 px-2"
              >
                <div class="group relative rounded-2xl bg-white border border-line shadow-sm hover:shadow-card transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col">
                  <div class="flex-1 min-h-0 aspect-[4/3] bg-gradient-to-b from-[#F9FAFB] to-white p-4 md:p-5 flex items-center justify-center">
                    <img
                      :src="getHonorUrl(h.image)"
                      class="max-w-full max-h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>

            <!-- 第二行（反向） -->
            <div class="flex honor-track-reverse mt-4">
              <div
                v-for="h in honors.slice(8)"
                :key="'c-' + h.image"
                class="flex-shrink-0 w-44 md:w-56 px-2"
              >
                <div class="group relative rounded-2xl bg-white border border-line shadow-sm hover:shadow-card transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col">
                  <div class="flex-1 min-h-0 aspect-[4/3] bg-gradient-to-b from-[#F9FAFB] to-white p-4 md:p-5 flex items-center justify-center">
                    <img
                      :src="getHonorUrl(h.image)"
                      class="max-w-full max-h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div
                v-for="h in honors.slice(8)"
                :key="'d-' + h.image"
                class="flex-shrink-0 w-44 md:w-56 px-2"
              >
                <div class="group relative rounded-2xl bg-white border border-line shadow-sm hover:shadow-card transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col">
                  <div class="flex-1 min-h-0 aspect-[4/3] bg-gradient-to-b from-[#F9FAFB] to-white p-4 md:p-5 flex items-center justify-center">
                    <img
                      :src="getHonorUrl(h.image)"
                      class="max-w-full max-h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================
         6. 合作伙伴
         ======================== -->
    <PartnersSection />

    <!-- ========================
         7. 全球办公
         ======================== -->
    <section class="py-12 md:py-20 bg-surface-base">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 md:mb-10">
          <h2 class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight">
            {{ t('about.locations.title') }}
          </h2>
        </div>
        <div ref="locationsRef" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="loc in locations"
            :key="loc.city"
            class="flex flex-col p-6 md:p-8 rounded-2xl bg-surface-card border border-line shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div class="flex-1">
              <h3 class="text-xl font-semibold text-ink-primary flex items-start gap-2">
                <Icon icon="lucide:map-pin" class="w-5 h-5 mt-1 text-brand shrink-0" aria-hidden="true" />
                {{ loc.city }}
              </h3>
              <p class="mt-4 text-sm text-ink-secondary leading-relaxed">{{ loc.address }}</p>
              <p class="mt-1 text-xs text-ink-tertiary">{{ loc.func }}</p>
            </div>
            <div class="mt-6 h-[180px] rounded-xl bg-surface-muted border border-line/50 overflow-hidden">
              <img v-if="loc.image" :src="getAlUrl(loc.image)" class="w-full h-full object-cover" alt="" />
              <span v-else class="flex items-center justify-center h-full text-xs text-ink-tertiary">地图占位</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================
         8. 联系入口 + 联系矩阵
         ======================== -->
    <section id="contact-bottom" class="relative overflow-hidden bg-white">
      <div
        class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full pointer-events-none"
        style="background: radial-gradient(circle, rgba(85, 173, 115, 0.15) 0%, transparent 70%); filter: blur(80px);"
      />

      <!-- 标题区 -->
      <div class="relative pt-12 md:pt-20 pb-10 md:pb-16">
        <div ref="ctaRef" class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl md:text-4xl lg:text-[56px] font-semibold text-ink-primary tracking-tight leading-tight">
            {{ t('about.contact.title') }}
          </h2>
          <p class="mt-6 text-lg text-ink-secondary leading-relaxed max-w-2xl mx-auto">
            {{ t('about.contact.desc') }}
          </p>
        </div>
      </div>

      <!-- 联系矩阵 -->
      <div class="relative pb-12 md:pb-20">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref="matrixRef" class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- 第一列：业务二维码 -->
            <div
              class="flex flex-col items-center p-8 rounded-2xl text-center bg-white border border-[#E5E5E5] shadow-sm"
            >
              <h3 class="text-lg font-semibold text-ink-primary">{{ t('about.contact.contactUs') }}</h3>
              <div class="mt-6 w-[160px] h-[160px] rounded-xl bg-white overflow-hidden border-2 border-[#E5E5E5] flex items-center justify-center">
                <img
                  src="@/assets/lxwm.webp"
                  alt="联系我们"
                  class="w-full h-full object-contain"
                />
              </div>
              <p class="mt-5 text-sm text-ink-secondary leading-relaxed">
                {{ t('about.contact.contactDesc') }}
              </p>
            </div>

            <!-- 第二列：微信公众号 -->
            <div
              class="flex flex-col items-center p-8 rounded-2xl text-center bg-white border border-[#E5E5E5] shadow-sm"
            >
              <h3 class="text-lg font-semibold text-ink-primary">{{ t('about.contact.followUs') }}</h3>
              <div class="mt-6 w-[160px] h-[160px] rounded-xl bg-white overflow-hidden border-2 border-[#E5E5E5] flex items-center justify-center">
                <img src="@/assets/rjm.webp" alt="公众号二维码" class="w-full h-full object-cover" />
              </div>
              <p class="mt-5 text-sm text-ink-secondary leading-relaxed">
                {{ t('about.contact.followDesc') }}
              </p>
            </div>

            <!-- 第三列：商务邮箱 -->
            <div
              class="flex flex-col items-center p-8 rounded-2xl text-center bg-white border border-[#E5E5E5] shadow-sm"
            >
              <h3 class="text-lg font-semibold text-ink-primary">{{ t('about.contact.business') }}</h3>
              <div class="mt-6 w-[160px] h-[160px] rounded-xl bg-white overflow-hidden border-2 border-[#E5E5E5] flex flex-col items-center justify-center gap-2">
                <div class="w-14 h-14 rounded-2xl bg-brand-gradient flex items-center justify-center">
                  <Icon icon="lucide:mail" class="w-7 h-7 text-white" />
                </div>
                <span class="text-xs text-ink-secondary">bd@cubixai.com</span>
              </div>
              <a
                href="mailto:bd@cubixai.com"
                class="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-[#55AD73] text-white hover:bg-[#2E8B57] transition-colors"
              >
                {{ t('common.sendEmail') }}
                <Icon icon="lucide:arrow-right" class="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@keyframes honor-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes honor-scroll-reverse {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

.honor-track {
  animation: honor-scroll 40s linear infinite;
  width: max-content;
}

.honor-track-reverse {
  animation: honor-scroll-reverse 40s linear infinite;
  width: max-content;
}

.paused .honor-track,
.paused .honor-track-reverse {
  animation-play-state: paused;
}
</style>
