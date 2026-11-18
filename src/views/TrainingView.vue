<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { useScrollReveal } from '../composables/useScrollReveal'
import { getImageUrl } from '../utils/image'
import BrandButton from '../components/BrandButton.vue'
import EnterpriseModal from '../components/EnterpriseModal.vue'
import AppImage from '../components/AppImage.vue'

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

const heroStats = [
  { value: '89+', label: '核心课时' },
  { value: '6', label: '大行业纵深' },
  { value: '40+', label: '实战场景' },
  { value: '16+', label: '可选模块自由组合' },
]

const problems = [
  { status: '买了AI工具，不知道业务怎么用', solution: '从赚钱场景讲起，不是从技术原理' },
  { status: '团队培训完，还是不会落地', solution: '场景驱动，40+实战案例，学完当天就能用' },
  { status: '通用课程不适用我们行业', solution: '电商/教育/医疗/金融/法律/房产，6大行业专属方案' },
  { status: '学完了，变不了现', solution: '课程体系围绕一个核心：学完就能赚钱' },
]

const architectureCards = [
  {
    title: '三层主线',
    image: getImageUrl('pxzx/1.webp'),
    items: ['初级 — AI副业变现入门', '中级 — API转售、短视频矩阵、自动化工作流', '高级 — SaaS产品化、政企项目交付'],
  },
  {
    title: '六大行业纵深',
    image: getImageUrl('pxzx/2.webp'),
    items: ['电商', '教育', '医疗', '金融', '法律', '房产'],
  },
  {
    title: '五大前沿扩展',
    image: getImageUrl('pxzx/3.webp'),
    items: ['AI+创意', 'AI+数据分析', 'AI+自动化', 'AI+出海', 'AI+企业级部署'],
  },
]

const differences = [
  { index: '1', title: '积木式架构', desc: '自由组合学习路径，16+可选模块' },
  { index: '2', title: '变现优先', desc: '5+变现路径，从副业到企业级交付' },
  { index: '3', title: '先教学习法', desc: '费曼学习法×AI，掌握方法后学习提速3倍' },
  { index: '4', title: '自带工具栈', desc: '配套OpenClaw AI网关、Hermes零代码助手、ChatU企业级系统' },
  { index: '5', title: '场景驱动', desc: '不写小红书文案、搭智能客服、分析销售数据……每招都能直接用' },
  { index: '6', title: '行业专属', desc: '6大行业合规框架+落地方案，直接对标你的业务' },
]

const paths = [
  {
    role: '企业管理者',
    route: '初级模块 → 高级全修 → 对应行业 AI 专项实战课程',
    result: '6个月后：主导公司AI中台建设，团队效率提升3倍',
    image: getImageUrl('pxzx/qy.webp'),
  },
  {
    role: '业务负责人',
    route: '初级全修 → 中级模块1-3 → 所属赛道 AI 数字化运营课',
    result: '3个月后：用AI管3家店客服+营销，人力成本省40%',
    image: getImageUrl('pxzx/yw.webp'),
  },
  {
    role: '自由职业者/创业者',
    route: '初级全修 → 中级全修 → 垂直领域 AI 能力拓展课程',
    result: '2个月后：AI接单月入2万+，服务12个中小企业客户',
    image: getImageUrl('pxzx/gr.webp'),
  },
]

const showModal = ref(false)

const consultWays = [
  {
    title: '线下名师面授',
    icon: 'lucide:presentation',
    items: [
      '行业资深导师实地驻场授课，面对面深度答疑',
      '实地案例沙盘实操，现场拆解企业真实业务难题',
      '线下圈层资源对接，同步链接同行产业人脉',
    ],
  },
  {
    title: '线上随心点播课',
    icon: 'lucide:circle-play',
    items: [
      '下单即刻解锁全量课程，无时间地点观看限制',
      '课程永久回放，可反复复盘知识点、实操步骤',
      '轻量化碎片化学习，适配通勤、间隙自主提升',
    ],
  },
  {
    title: '沉浸式互动 AI 训练营',
    icon: 'lucide:rocket',
    items: [
      '全程助教伴学，实时答疑纠偏，杜绝自学断层',
      '阶段性实战任务输出，配套点评打磨落地能力',
      '学员社群同步交流，组队完成 AI 商业实战项目',
    ],
  },
]
</script>

<template>
  <div class="min-h-screen bg-white training-theme">
    <!-- Hero -->
    <section ref="heroRef" class="relative overflow-hidden bg-surface-base pt-10 md:pt-14 pb-10 md:pb-12">
      <div class="absolute -top-40 -right-40 w-[500px] h-[500px] md:w-[600px] md:h-[600px] rounded-full pointer-events-none" style="background: radial-gradient(circle, rgba(253, 174, 55, 0.15) 0%, transparent 70%); filter: blur(60px);" />
      <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="page-title">
          模块化 AI 实训：打通业务与营收闭环
        </h1>
        <p class="mt-6 text-lg md:text-xl text-ink-secondary max-w-3xl mx-auto leading-relaxed">
          一套为「业务落地」与「收入变现」而设计的模块化培训体系
        </p>

        <div class="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <div v-for="s in heroStats" :key="s.label" class="p-5 rounded-2xl bg-white border border-line/50 shadow-sm">
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
          <h2 class="section-title">我们解决什么问题</h2>
        </div>

        <div class="rounded-2xl border border-line overflow-hidden">
          <div class="grid grid-cols-1 md:grid-cols-2 bg-surface-muted">
            <div class="px-6 py-4 text-sm font-semibold text-ink-primary border-b md:border-b-0 md:border-r border-line">你的现状</div>
            <div class="px-6 py-4 text-sm font-semibold text-ink-primary border-b border-line">我们的解法</div>
          </div>
          <div v-for="(p, i) in problems" :key="i" class="grid grid-cols-1 md:grid-cols-2 bg-white">
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
          <h2 class="section-title">课程架构：积木式组合</h2>
          <p class="section-subtitle">课程不是一条线，而是一盒积木。</p>
          <p class="section-subtitle">初中高三阶主线 + 6大行业纵深 + 5大前沿扩展，像搭积木一样自由组合你的学习路径。</p>
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
          <h2 class="section-title">六大核心差异</h2>
        </div>

        <div class="rounded-2xl border border-line overflow-hidden">
          <div class="hidden md:grid grid-cols-12 bg-surface-muted">
            <div class="col-span-1 px-6 py-4 text-sm font-semibold text-ink-primary border-r border-line">#</div>
            <div class="col-span-3 px-6 py-4 text-sm font-semibold text-ink-primary border-r border-line">差异点</div>
            <div class="col-span-8 px-6 py-4 text-sm font-semibold text-ink-primary">说明</div>
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
          <h2 class="section-title">全赛道 AI 能力进阶</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="p in paths" :key="p.role">
            <div class="aspect-video rounded-2xl overflow-hidden mb-6 bg-surface-muted">
              <AppImage v-if="p.image" :src="p.image" :alt="p.role" class="w-full h-full object-cover" />
            </div>
            <h3 class="text-xl md:text-xl font-semibold text-ink-primary mb-4">{{ p.role }}</h3>
            <div class="text-sm text-ink-secondary mb-3">
              <span class="text-ink-primary font-medium">路径：</span>{{ p.route }}
            </div>
            <div class="text-sm text-ink-secondary">
              <span class="text-ink-primary font-medium">成果：</span>{{ p.result }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 咨询方式 -->
    <section ref="consultRef" class="py-10 md:py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-6 md:mb-8">
          <h2 class="section-title">三大授课形式</h2>
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
          AI 赋能成长，沉淀可落地的企业生产力
        </h2>
        <p class="section-subtitle">
          89+课时 · 40+实战场景 · 6大行业方向
        </p>
        <p class="mt-2 text-lg text-ink-secondary">
          学完即用 · 用完即赚
        </p>
        <div class="mt-10">
          <BrandButton class="!px-10 !py-3 text-lg" @click="showModal = true">
            预约咨询 →
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
