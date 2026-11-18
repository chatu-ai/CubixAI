<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'
import { Icon } from '@iconify/vue'
import cctvImg1 from '@/assets/st/cctv/c1.webp'
import cctvImg2 from '@/assets/st/cctv/c2.webp'

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
   2. Core Philosophy
   ======================== */
const missionRef = ref<HTMLElement | null>(null)
useScrollReveal(missionRef, { y: 30, delay: 0.1 })

const missions = [
  {
    image: new URL('@/assets/gywm/1.webp', import.meta.url).href,
    title: 'Mission',
    desc: 'Committed to becoming a trusted AI service partner for global enterprises, empowering digital and intelligent transformation through technological innovation and professional solutions.',
  },
  {
    image: new URL('@/assets/gywm/2.webp', import.meta.url).href,
    title: 'Vision',
    desc: 'Envisioning an AI-driven global business ecosystem that provides enterprises with superior productivity tools and promotes efficient, sustainable development.',
  },
  {
    image: new URL('@/assets/gywm/3.webp', import.meta.url).href,
    title: 'Values',
    desc: 'Customer First · Innovation Driven · Global Vision · Win-Win Cooperation · Integrity & Responsibility',
  },
]

/* ========================
   3. Development History
   ======================== */
const timelineRef = ref<HTMLElement | null>(null)
useScrollReveal(timelineRef, { y: 30, delay: 0.1 })

const milestones = [
  { year: '2023.03', title: 'ChatU Launched', desc: 'Enterprise AI operating system officially released' },
  { year: '2023.06', title: 'Company Founded', desc: 'CubixAI Technology Co., Ltd. officially established' },
  { year: '2023.08', title: '3,000+ Customers', desc: 'Expanded into Japan, Korea, Europe and the United States' },
  { year: '2025.01', title: 'International Expansion', desc: 'Brought the "Prompt Engineering Conference" international brand to China and launched Asian market operations' },
  { year: '2025.12', title: 'OPC Hub', desc: 'Launched OPC Hub to build the OPC industrial ecosystem' },
  { year: '2026.05', title: 'AgentStation', desc: 'Officially released the hardware product "AgentStation"' },
]

/* ========================
   4. Global Recognition
   ======================== */
const globalRef = ref<HTMLElement | null>(null)
const cctvRef = ref<HTMLElement | null>(null)
useScrollReveal(globalRef, { y: 30, delay: 0.1 })
useScrollReveal(cctvRef, { y: 20, delay: 0.3 })

const events = [
  { name: 'South Korea SOUTH SUMMIT', location: 'Seoul', desc: 'TODO', image: 'hg.webp' },
  { name: 'Hong Kong HKTDC Event', location: 'Hong Kong', desc: 'TODO', image: 'xg.webp' },
  { name: 'USA Microsoft MVP Global Summit', location: 'Seattle', desc: 'TODO', image: 'xyt.webp' },
  { name: 'USA NVIDIA GTC 2026', location: 'Silicon Valley', desc: 'TODO', image: 'ywd.webp', extraImage: 'ywd3.webp' },
  { name: 'UK PEC International', location: 'London', desc: 'TODO', image: 'ld.webp' },
  // { name: 'Japan', location: '', desc: 'TODO', image: '' },
  { name: 'South Korea NextRise 2026', location: 'Seoul', desc: 'TODO', image: 'hg2.webp' },
]

/* ========================
   5. Honors & Partners
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
  // Resolve honor image file names
  return new URL(`../assets/qyry/${name}`, import.meta.url).href
}

function getQqUrl(name: string) {
  return new URL(`../assets/qq/${name}`, import.meta.url).href
}

function getAlUrl(name: string) {
  return new URL(`../assets/al/${name}`, import.meta.url).href
}

/* ========================
   6. Global Offices
   ======================== */
const locationsRef = ref<HTMLElement | null>(null)
useScrollReveal(locationsRef, { y: 30, delay: 0.1 })

const locations = [
  {
    city: 'Beijing · Zhongguancun AI Community',
    address: "D2-D401, Haidian Dayue Information Technology Park, Haidian District, Beijing",
    func: 'AI industrial ecosystem cooperation, innovative business incubation, frontier technology exchange',
    image: 'bwsq1.webp',
  },
  {
    city: 'Beijing · Tsinghua Science Park',
    address: '21/F, Tower C, Tsinghua Science Park, No.1 Zhongguancun East Road',
    func: 'Strategic decision-making, product R&D, brand operations',
    image: 'wdk.webp',
  },
  {
    city: 'Wuxi · Xishan',
    address: '15-005, Tower C, Xidong Chuangrong Building, No.88 Danshan Road, Anzhen Street',
    func: 'East China customer delivery and technical support',
    image: 'wx.webp',
  },
  {
    city: 'Singapore',
    address: '139 PASIR RIS GROVE, #05-43, D\'NEST',
    func: 'International market expansion and overseas customer service',
    image: 'xjp.webp',
  },
]

/* ========================
   7. Contact CTA
   ======================== */
const ctaRef = ref<HTMLElement | null>(null)
useScrollReveal(ctaRef, { y: 30 })

/* ========================
   8. Contact Matrix
   ======================== */
const matrixRef = ref<HTMLElement | null>(null)
useScrollReveal(matrixRef, { y: 40, delay: 0.1 })



const titleRef = ref<HTMLElement | null>(null)
useScrollReveal(titleRef, { y: 30 })

const partners = [
  { name: 'Microsoft', image: new URL('@/assets/hzhb/Microsoft-logo.webp', import.meta.url).href },
  { name: 'NVIDIA', image: new URL('@/assets/hzhb/nvidia.webp', import.meta.url).href },
  { name: 'OpenAI', image: new URL('@/assets/hzhb/OpenAI.webp', import.meta.url).href },
  { name: 'Google', image: new URL('@/assets/hzhb/Google.webp', import.meta.url).href },
  { name: 'Amazon', image: new URL('@/assets/hzhb/amazon.webp', import.meta.url).href },
  { name: 'Oracle', image: new URL('@/assets/hzhb/oracle.webp', import.meta.url).href },
  { name: 'MiniMax', image: new URL('@/assets/hzhb/minimax.webp', import.meta.url).href },
  { name: '阿里巴巴', image: new URL('@/assets/hzhb/almm.webp', import.meta.url).href },
  { name: '月之暗面', image: new URL('@/assets/hzhb/yzam.webp', import.meta.url).href },
  { name: '百度', image: new URL('@/assets/hzhb/baidu.webp', import.meta.url).href },
  // { name: '百度智能云', image: new URL('@/assets/hzhb/baidu1.webp', import.meta.url).href },
  { name: 'DeepSeek', image: new URL('@/assets/hzhb/deepseek.webp', import.meta.url).href },
  // { name: '华为', image: new URL('@/assets/hzhb/huawei.webp', import.meta.url).href },
  { name: '火山引擎', image: new URL('@/assets/hzhb/huoshan.webp', import.meta.url).href },
  { name: '京东', image: new URL('@/assets/hzhb/jd.webp', import.meta.url).href },
  { name: '字节跳动', image: new URL('@/assets/hzhb/zjtd.webp', import.meta.url).href },
  { name: '智谱 AI', image: new URL('@/assets/hzhb/zp.webp', import.meta.url).href },
]
</script>

<template>
  <div>
    <!-- ========================
         1. Hero
         ======================== -->
    <section class="relative overflow-hidden bg-surface-base pt-32 md:pt-40 pb-16 md:pb-24">
      <div
        class="absolute -top-40 -right-40 w-[500px] h-[500px] md:w-[600px] md:h-[600px] rounded-full pointer-events-none"
        style="background: radial-gradient(circle, rgba(85, 173, 115, 0.15) 0%, transparent 70%); filter: blur(60px);"
      />
      <div ref="heroRef" class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl lg:text-[64px] font-semibold text-ink-primary leading-tight tracking-tight">
          A Native General Artificial Intelligence Company
        </h1>
        <p class="mt-6 text-xl md:text-2xl text-ink-secondary">
          Born to drive enterprise AI adoption, solving the last three kilometers of enterprise AI deployment
        </p>
      </div>
    </section>

    <!-- ========================
         2. Core Philosophy
         ======================== -->
    <section class="py-20 md:py-[120px] bg-surface-base">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 md:mb-16">
          <h2 class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight">Core Philosophy</h2>
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
         3. Development History
         ======================== -->
    <section class="py-20 md:py-[120px] bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 md:mb-16">
          <h2 class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight">Development History</h2>
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
         4. Global Recognition
         ======================== -->
    <section class="py-20 md:py-[120px] bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref="globalRef" class="text-center mb-12 md:mb-16">
          <h2 class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight">
            Going Global · Invited to Top International Tech Events
          </h2>
          <p class="mt-4 text-lg text-ink-secondary">
            Full presence across Europe, USA, Korea, Japan, Singapore and beyond
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
              <span v-if="!e.image && !e.extraImage" class="flex items-center justify-center h-full text-xs text-ink-tertiary">Venue placeholder</span>
            </div>
            <h3 class="text-base font-semibold text-ink-primary">{{ e.name }}</h3>
            <p class="text-xs text-brand mt-1">{{ e.location }}</p>
          </div>
        </div>

        <!-- CCTV Recognition -->
        <div
          ref="cctvRef"
          class="max-w-7xl mx-auto p-6 rounded-2xl bg-surface-base border border-line/50 text-center"
        >
          <div class="flex items-center justify-center gap-3 mb-2">
            <Icon icon="lucide:tv" class="w-5 h-5 text-gold" />
            <span class="text-sm font-semibold text-ink-primary">
              CCTV-2 "Win with AI+"
            </span>
          </div>
          <p class="text-sm text-ink-secondary mb-5">
            CubixAI CTO Zou Jian & ChatU featured on CCTV Finance Channel
          </p>
          <div class="grid grid-cols-2 gap-4 md:gap-6">
            <div class="rounded-xl overflow-hidden h-56 md:h-80">
              <img
                :src="cctvImg1"
                alt="CCTV-2 Win with AI+ screenshot 1"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="rounded-xl overflow-hidden h-56 md:h-80">
              <img
                :src="cctvImg2"
                alt="CCTV-2 Win with AI+ screenshot 2"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <p class="mt-8 text-center text-base text-ink-tertiary">
          Building strong partnerships with many overseas enterprises
        </p>
      </div>
    </section>

    <!-- ========================
         5. Enterprise Honors
         ======================== -->
    <section class="py-20 md:py-[120px] bg-surface-base">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref="honorsRef">
          <div class="text-center mb-12 md:mb-16">
            <h2 class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight">
              Enterprise Honors
            </h2>
            <p class="mt-4 text-lg text-ink-secondary">
              Authoritative Certifications · Continuous Innovation
            </p>
          </div>

          <div
            ref="marqueeRef"
            class="relative overflow-hidden"
            @mouseenter="pauseMarquee"
            @mouseleave="resumeMarquee"
          >
            <!-- Gradient masks -->
            <div
              class="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10"
              style="background: linear-gradient(to right, #FAFAF7, transparent);"
            />
            <div
              class="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10"
              style="background: linear-gradient(to left, #FAFAF7, transparent);"
            />

            <!-- Row 1 -->
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

            <!-- Row 2 (reverse) -->
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
         6. Partners
         ======================== -->
    <section class="py-20 md:py-[120px] bg-surface-base overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref="titleRef" class="text-center mb-16 md:mb-24">
        <h2 class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight">
            Partner Companies
        </h2>
      </div>

      <div class="flex flex-wrap justify-center items-center gap-x-12 gap-y-14 md:gap-x-20 md:gap-y-16">
        <div
          v-for="p in partners"
          :key="p.name"
          class="w-28 h-14 md:w-36 md:h-16 lg:w-44 lg:h-20 flex items-center justify-center"
        >
          <img
            :src="p.image"
            :alt="p.name"
            class="max-w-full max-h-full object-contain opacity-100 transition-all duration-300"
            :class="(p.name === 'Amazon' || p.name === '京东') ? 'max-h-[70%]' : ''"
          />
        </div>
      </div>
    </div>
  </section>

    <!-- ========================
         7. Global Offices
         ======================== -->
    <section class="py-20 md:py-[120px] bg-surface-base">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 md:mb-16">
          <h2 class="text-3xl md:text-4xl lg:text-[40px] font-semibold text-ink-primary tracking-tight">
            Global Offices · Local Services
          </h2>
        </div>
        <div ref="locationsRef" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="loc in locations"
            :key="loc.city"
            class="flex flex-col p-6 md:p-8 rounded-2xl bg-surface-card border border-line shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div class="flex-1">
              <h3 class="text-xl font-semibold text-ink-primary">{{ loc.city }}</h3>
              <p class="mt-4 text-sm text-ink-secondary leading-relaxed">{{ loc.address }}</p>
              <p class="mt-1 text-xs text-ink-tertiary">{{ loc.func }}</p>
            </div>
            <div class="mt-6 h-[180px] rounded-xl bg-surface-muted border border-line/50 overflow-hidden">
              <img v-if="loc.image" :src="getAlUrl(loc.image)" class="w-full h-full object-cover" alt="" />
              <span v-else class="flex items-center justify-center h-full text-xs text-ink-tertiary">Map placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================
         8. Contact Entry + Contact Matrix
         ======================== -->
    <section id="contact-bottom" class="relative overflow-hidden bg-white">
      <div
        class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full pointer-events-none"
        style="background: radial-gradient(circle, rgba(85, 173, 115, 0.15) 0%, transparent 70%); filter: blur(80px);"
      />

      <!-- Title area -->
      <div class="relative pt-20 md:pt-[120px] pb-10 md:pb-16">
        <div ref="ctaRef" class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl md:text-4xl lg:text-[56px] font-semibold text-ink-primary tracking-tight leading-tight whitespace-nowrap">
            Multiple Ways · Contact Anytime
          </h2>
          <p class="mt-6 text-lg text-ink-secondary leading-relaxed max-w-2xl mx-auto">
            Whether product trials, business cooperation, or technical consulting, find answers here
          </p>
        </div>
      </div>

      <!-- Contact matrix -->
      <div class="relative pb-20 md:pb-[120px]">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref="matrixRef" class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Column 1: business QR code -->
            <div
              class="flex flex-col items-center p-8 rounded-2xl text-center bg-white border border-[#E5E5E5] shadow-sm"
            >
              <h3 class="text-lg font-semibold text-ink-primary">Contact Us</h3>
              <div class="mt-6 w-[160px] h-[160px] rounded-xl bg-white overflow-hidden border-2 border-[#E5E5E5] flex items-center justify-center">
                <img
                  src="@/assets/lxwm.webp"
                  alt="Contact Us"
                  class="w-full h-full object-contain"
                />
              </div>
              <p class="mt-5 text-sm text-ink-secondary leading-relaxed">
                Scan to start your enterprise intelligence transformation
              </p>
            </div>

            <!-- Column 2: WeChat official account -->
            <div
              class="flex flex-col items-center p-8 rounded-2xl text-center bg-white border border-[#E5E5E5] shadow-sm"
            >
              <h3 class="text-lg font-semibold text-ink-primary">Follow Us</h3>
              <div class="mt-6 w-[160px] h-[160px] rounded-xl bg-white overflow-hidden border-2 border-[#E5E5E5] flex items-center justify-center">
                <img src="@/assets/rjm.webp" alt="WeChat QR code" class="w-full h-full object-cover" />
              </div>
              <p class="mt-5 text-sm text-ink-secondary leading-relaxed">
                Stay updated on company news and AI industry trends
              </p>
            </div>

            <!-- Column 3: business email -->
            <div
              class="flex flex-col items-center p-8 rounded-2xl text-center bg-white border border-[#E5E5E5] shadow-sm"
            >
              <h3 class="text-lg font-semibold text-ink-primary">Business Inquiry</h3>
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
                Send Email
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
