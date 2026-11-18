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
   2. コア理念
   ======================== */
const missionRef = ref<HTMLElement | null>(null)
useScrollReveal(missionRef, { y: 30, delay: 0.1 })

const missions = [
  {
    image: new URL('@/assets/gywm/1.webp', import.meta.url).href,
    title: 'ミッション Mission',
    desc: '世界中の企業から信頼されるAIサービスパートナーとなることを目指し、技術イノベーションと専門的ソリューションを通じ、企業のデジタルインテリジェンス転換を支援する',
  },
  {
    image: new URL('@/assets/gywm/2.webp', import.meta.url).href,
    title: 'ビジョン Vision',
    desc: 'AIインテリジェンスによって駆動されるグローバルなビジネスエコシステムを構築。企業に高品質な生産性ツールを提供し、効率的かつ持続可能な発展を推進する',
  },
  {
    image: new URL('@/assets/gywm/3.webp', import.meta.url).href,
    title: 'バリュー Values',
    desc: '顧客第一主義・イノベーション主導・グローバルな視点・Win-Winの協業・誠実な責任',
  },
]

/* ========================
   3. 沿革
   ======================== */
const timelineRef = ref<HTMLElement | null>(null)
useScrollReveal(timelineRef, { y: 30, delay: 0.1 })

const milestones = [
  { year: '2023.03', title: 'ChatU ローンチ', desc: '企業向けAIオペレーティングシステム' },
  { year: '2023.06', title: '会社設立', desc: 'ソフトブロック（北京）テクノロジー株式会社 正式設立' },
  { year: '2023.08', title: '契約顧客3000社突破', desc: '日本・韓国・欧米市場へ進出' },
  { year: '2025.01', title: '海外事業拡大', desc: 'PEC中国地区に「プロンプトエンジニアリングカンファレンス」国際ブランドを導入、アジア市場の運営を開始' },
  { year: '2025.12', title: 'OPC Hub', desc: 'OPC Hubをリリース、OPC産業エコシステムを構築' },
  { year: '2026.05', title: '智方体・AgentStation', desc: 'ハードウェア製品「方体・AgentStation」を正式発表' },
]

/* ========================
   4. グローバル実績
   ======================== */
const globalRef = ref<HTMLElement | null>(null)
const cctvRef = ref<HTMLElement | null>(null)
useScrollReveal(globalRef, { y: 30, delay: 0.1 })
useScrollReveal(cctvRef, { y: 20, delay: 0.3 })

const events = [
  { name: '韓国 SOUTH SUMMIT', location: 'ソウル', desc: '※イベント説明仮テキスト', image: 'hg.webp' },
  { name: '香港貿発局イベント', location: '香港', desc: '※イベント説明仮テキスト', image: 'xg.webp' },
  { name: '米国 Microsoft MVP Global Summit', location: 'シアトル', desc: '※イベント説明仮テキスト', image: 'xyt.webp' },
  { name: '米国 NVIDIA GTC 2026', location: 'シリコンバレー', desc: '※イベント説明仮テキスト', image: 'ywd.webp', extraImage: 'ywd3.webp' },
  { name: 'イギリス PECインターナショナル', location: 'ロンドン', desc: '※イベント説明仮テキスト', image: 'ld.webp' },
  { name: '韓国 NextRise 2026', location: 'ソウル', desc: '※イベント説明仮テキスト', image: 'hg2.webp' },
]

/* ========================
   5. 受賞・パートナー
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
  return new URL(`../assets/qyry/${name}`, import.meta.url).href
}

function getQqUrl(name: string) {
  return new URL(`../assets/qq/${name}`, import.meta.url).href
}

function getAlUrl(name: string) {
  return new URL(`../assets/al/${name}`, import.meta.url).href
}

/* ========================
   6. 拠点一覧
   ======================== */
const locationsRef = ref<HTMLElement | null>(null)
useScrollReveal(locationsRef, { y: 30, delay: 0.1 })

const locations = [
  {
    city: '北京・中関村AI北緯コミュニティ',
    address: '北京市海淀区中関村AI北緯コミュニティ D2-1',
    func: 'AI産業エコシステム連携・新規事業インキュベーション・先端技術交流会',
    image: 'bwsq1.webp',
  },
  {
    city: '北京・清華テクノパーク',
    address: '中関村東路1番地 清華テクノパーク C棟21階',
    func: '経営戦略・製品開発・ブランド運営',
    image: 'wdk.webp',
  },
  {
    city: '無錫・錫山',
    address: '安鎮街道丹山路88番地 錫東創融ビル C棟15-005',
    func: '華東エリア顧客デリバリー・技術サポート',
    image: 'wx.webp',
  },
  {
    city: 'シンガポール',
    address: '139 PASIR RIS GROVE, #05-43, D\'NEST',
    func: '海外市場開拓・海外顧客対応',
    image: 'xjp.webp',
  },
]

/* ========================
   7. お問い合わせ導線 (CTA)
   ======================== */
const ctaRef = ref<HTMLElement | null>(null)
useScrollReveal(ctaRef, { y: 30 })

/* ========================
   8. 問い合わせ窓口一覧
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
    <section class="relative overflow-hidden bg-surface-base pt-10 md:pt-16 pb-8 md:pb-12">
      <div
        class="absolute -top-40 -right-40 w-[500px] h-[500px] md:w-[600px] md:h-[600px] rounded-full pointer-events-none"
        style="background: radial-gradient(circle, rgba(85, 173, 115, 0.15) 0%, transparent 70%); filter: blur(60px);"
      />
      <div ref="heroRef" class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="page-title">
          ネイティブ汎用人工知能企業
        </h1>
        <p class="page-subtitle">
          企業向けAI活用を推進するために誕生、企業AI導入の最後の課題を解決
        </p>
      </div>
    </section>

    <!-- ========================
         2. コア理念
         ======================== -->
    <section class="py-10 md:py-16 bg-surface-base">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-6 md:mb-8">
          <h2 class="section-title">コア理念</h2>
        </div>
        <div ref="missionRef" class="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          <div
            v-for="item in missions"
            :key="item.title"
            class="flex flex-col p-6 rounded-2xl bg-surface-card border border-line shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
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
         3. 沿革
         ======================== -->
    <section class="py-10 md:py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-6 md:mb-8">
          <h2 class="section-title">沿革</h2>
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
              <span class="text-2xl md:text-3xl font-semibold text-brand">{{ m.year }}</span>
              <h3 class="mt-1 text-lg font-semibold text-ink-primary">{{ m.title }}</h3>
              <p class="mt-1 text-sm text-ink-secondary">{{ m.desc }}</p>
            </div>
            <div class="hidden md:block md:w-1/2" />
          </div>
        </div>
      </div>
    </section>

    <!-- ========================
         4. グローバル実績
         ======================== -->
    <section class="py-10 md:py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref="globalRef" class="text-center mb-6 md:mb-8">
          <h2 class="section-title">
            世界へ進出｜国際トップテクノカンファレンスに招待登壇
          </h2>
          <p class="section-subtitle">
            欧州・米国・韓国・日本・シンガポールなど各国市場で事業展開
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
              <span v-if="!e.image && !e.extraImage" class="flex items-center justify-center h-full text-xs text-ink-tertiary">会場画像仮置き</span>
            </div>
            <h3 class="text-base font-semibold text-ink-primary">{{ e.name }}</h3>
            <p class="text-xs text-brand mt-1">{{ e.location }}</p>
          </div>
        </div>

        <!-- CCTV 実績 -->
        <div
          ref="cctvRef"
          class="max-w-7xl mx-auto p-6 rounded-2xl bg-surface-base border border-line/50 text-center"
        >
          <div class="flex items-center justify-center gap-3 mb-2">
            <Icon icon="lucide:tv" class="w-5 h-5 text-gold" />
            <span class="text-sm font-semibold text-ink-primary">
              CCTV-2『勝ち抜けAI+』番組
            </span>
          </div>
          <p class="text-sm text-ink-secondary mb-5">
            ソフトブロックCTO 鄒健とChatUがCCTV財経チャンネルに出演
          </p>
          <div class="grid grid-cols-2 gap-4 md:gap-6">
            <div class="rounded-xl overflow-hidden h-56 md:h-80">
              <img
                :src="cctvImg1"
                alt="CCTV-2『勝ち抜けAI+』番組スクリーンショット1"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="rounded-xl overflow-hidden h-56 md:h-80">
              <img
                :src="cctvImg2"
                alt="CCTV-2『勝ち抜けAI+』番組スクリーンショット2"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <p class="mt-8 text-center text-base text-ink-tertiary">
          複数の海外企業と強固なパートナーシップを構築
        </p>
      </div>
    </section>

    <!-- ========================
         5. 企業受賞実績
         ======================== -->
    <section class="py-10 md:py-16 bg-surface-base">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref="honorsRef">
          <div class="text-center mb-6 md:mb-8">
            <h2 class="section-title">
              企業受賞実績
            </h2>
            <p class="section-subtitle">
              権威ある認定｜継続的なイノベーション
            </p>
          </div>

          <div
            ref="marqueeRef"
            class="relative overflow-hidden"
            @mouseenter="pauseMarquee"
            @mouseleave="resumeMarquee"
          >
            <!-- グラデーションマスク -->
            <div
              class="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10"
              style="background: linear-gradient(to right, #F8FAF9, transparent);"
            />
            <div
              class="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10"
              style="background: linear-gradient(to left, #F8FAF9, transparent);"
            />

            <!-- 1行目 -->
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

            <!-- 2行目（逆方向スクロール） -->
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
         6. パートナー企業
         ======================== -->
    <section class="py-10 md:py-16 bg-surface-base overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref="titleRef" class="text-center mb-16 md:mb-24">
        <h2 class="section-title">
           パートナー企業
        </h2>
      </div>

      <div class="flex flex-wrap justify-center items-center gap-x-10 gap-y-10 md:gap-x-16 md:gap-y-12">
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
         7. グローバル拠点｜地域密着型サービス
         ======================== -->
    <section class="py-10 md:py-16 bg-surface-base">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-6 md:mb-8">
          <h2 class="section-title">
            グローバル拠点｜地域密着型サービス
          </h2>
        </div>
        <div ref="locationsRef" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="loc in locations"
            :key="loc.city"
            class="flex flex-col p-6 md:p-7 rounded-2xl bg-surface-card border border-line shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
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
              <span v-else class="flex items-center justify-center h-full text-xs text-ink-tertiary">地図画像仮置き</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================
         8. お問い合わせ導線 + 窓口一覧
         ======================== -->
    <section id="contact-bottom" class="relative overflow-hidden bg-white">
      <div
        class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full pointer-events-none"
        style="background: radial-gradient(circle, rgba(85, 173, 115, 0.15) 0%, transparent 70%); filter: blur(80px);"
      />

      <!-- タイトルエリア -->
      <div class="relative pt-10 md:pt-16 pb-10 md:pb-16">
        <div ref="ctaRef" class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="display-title md:whitespace-nowrap">
            複数の手段でいつでもお問い合わせ
          </h2>
          <p class="section-subtitle max-w-2xl mx-auto">
            製品トライアル・業務提携・技術相談など、すべてこちらで受け付けております
          </p>
        </div>
      </div>

      <!-- 問い合わせ窓口一覧 -->
      <div class="relative pb-10 md:pb-16">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref="matrixRef" class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- 1列目：営業QRコード -->
            <div
              class="flex flex-col items-center p-6 rounded-2xl text-center bg-white border border-[#E5E5E5] shadow-sm"
            >
              <h3 class="text-lg font-semibold text-ink-primary">お問い合わせ</h3>
              <div class="mt-6 w-[160px] h-[160px] rounded-xl bg-white overflow-hidden border-2 border-[#E5E5E5] flex items-center justify-center">
                <img
                  src="@/assets/lxwm.webp"
                  alt="お問い合わせQRコード"
                  class="w-full h-full object-contain"
                />
              </div>
              <p class="mt-5 text-sm text-ink-secondary leading-relaxed">
                QRコードを読み取り、企業スマート化のご相談をスタート
              </p>
            </div>

            <!-- 2列目：公式WeChatアカウント -->
            <div
              class="flex flex-col items-center p-6 rounded-2xl text-center bg-white border border-[#E5E5E5] shadow-sm"
            >
              <h3 class="text-lg font-semibold text-ink-primary">フォローする</h3>
              <div class="mt-6 w-[160px] h-[160px] rounded-xl bg-white overflow-hidden border-2 border-[#E5E5E5] flex items-center justify-center">
                <img src="@/assets/rjm.webp" alt="公式アカウントQRコード" class="w-full h-full object-cover" />
              </div>
              <p class="mt-5 text-sm text-ink-secondary leading-relaxed">
                会社最新情報・AI業界トレンドを配信中
              </p>
            </div>

            <!-- 3列目：業務メール -->
            <div
              class="flex flex-col items-center p-6 rounded-2xl text-center bg-white border border-[#E5E5E5] shadow-sm"
            >
              <h3 class="text-lg font-semibold text-ink-primary">業務提携のご相談</h3>
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
                メールを送信
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