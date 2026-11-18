<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { Icon } from '@iconify/vue'
import { useScrollReveal } from '../composables/useScrollReveal'

import { useCountUp } from '../composables/useCountUp'
import { getImageUrl } from '../utils/image'

import Chip from '../components/Chip.vue'
import BrandButton from '../components/BrandButton.vue'
import EnterpriseModal from '../components/EnterpriseModal.vue'
import AppImage from '../components/AppImage.vue'

const opc1Img = getImageUrl('opc1.webp')

const leftRef = ref(null)
const rightRef = ref(null)

const showModal = ref(false)

const heroImages = [
  { src: getImageUrl('opchub/opchub.webp'), alt: 'OPC Hub' },
  { src: getImageUrl('opchub/OPCHub1.webp'), alt: 'OPC Hub 1' },
]

const heroIndex = ref(0)
let heroTimer: ReturnType<typeof setInterval> | null = null

function startHeroCarousel() {
  heroTimer = setInterval(() => {
    heroIndex.value = (heroIndex.value + 1) % heroImages.length
  }, 3000)
}

function stopHeroCarousel() {
  if (heroTimer) {
    clearInterval(heroTimer)
    heroTimer = null
  }
}

onMounted(() => {
  startHeroCarousel()
})

onUnmounted(() => {
  stopHeroCarousel()
})

useScrollReveal(leftRef, { y: 30 })
useScrollReveal(rightRef, { y: 30, delay: 0.15 })

function observeFadeIn() {
  const sections = document.querySelectorAll('.fade-in-section')
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )
  sections.forEach((s) => observer.observe(s))
}

const agentCount = ref(1483)
const agentKey = ref(0)
const AGENT_BASE = 1483
const AGENT_INTERVAL = 2000
const AGENT_CYCLE = 30000

let agentTimer: ReturnType<typeof setInterval> | null = null
let agentResetTimer: ReturnType<typeof setTimeout> | null = null

watch(agentCount, () => {
  agentKey.value++
})

function startAgentCountAnimation() {
  agentCount.value = AGENT_BASE

  agentTimer = setInterval(() => {
    agentCount.value += Math.floor(Math.random() * 9) + 1
  }, AGENT_INTERVAL)

  agentResetTimer = setTimeout(() => {
    if (agentTimer) {
      clearInterval(agentTimer)
      agentTimer = null
    }
    startAgentCountAnimation()
  }, AGENT_CYCLE)
}

onMounted(() => {
  observeFadeIn()
  startAgentCountAnimation()
})

onUnmounted(() => {
  if (agentTimer) {
    clearInterval(agentTimer)
    agentTimer = null
  }
  if (agentResetTimer) {
    clearTimeout(agentResetTimer)
    agentResetTimer = null
  }
})

const statItems = [
  { target: 48326, label: '运行中的 AI 助手', format: (v: number) => `${v.toLocaleString()}` },
  { target: 25, label: '日均服务次数', format: (v: number) => `${v} 万+` },
  { target: 120, label: '每分钟响应', format: (v: number) => `${v} 个` },
  { target: 987, label: '服务成功率', format: (v: number) => `${(v / 10).toFixed(1)}%` },
]

const statRefs = [
  ref<HTMLElement | null>(null),
  ref<HTMLElement | null>(null),
  ref<HTMLElement | null>(null),
  ref<HTMLElement | null>(null),
]

const countUps = statItems.map((item, i) => useCountUp(statRefs[i], item.target))

const pTitleRef = ref<HTMLElement | null>(null)
const pCardsRef = ref<HTMLElement | null>(null)
const pBottomRef = ref<HTMLElement | null>(null)

useScrollReveal(pTitleRef, { y: 30 })
useScrollReveal(pCardsRef, { y: 30, delay: 0.15 })
useScrollReveal(pBottomRef, { y: 20, delay: 0.25 })

const vpTitleRef = ref<HTMLElement | null>(null)
const vpColumnsRef = ref<HTMLElement | null>(null)
const vpBottomRef = ref<HTMLElement | null>(null)

useScrollReveal(vpTitleRef, { y: 30 })
useScrollReveal(vpColumnsRef, { y: 30, delay: 0.15 })
useScrollReveal(vpBottomRef, { y: 30, delay: 0.25 })

const kcImages = [
  getImageUrl('kc/微信图片_20260602122120_485_111.webp'),
  getImageUrl('kc/微信图片_20260602122135_486_111.webp'),
  getImageUrl('kc/微信图片_20260602122148_487_111.webp'),
  getImageUrl('kc/微信图片_20260602122353_488_111.webp'),
]

const serviceColors = ['#F04045', '#F04045', '#F04045', '#F04045', '#F04045', '#F04045']

const services = [
  { title: 'OPC Hub 支撑平台', image: getImageUrl('opchub/11.webp'), items: ['OPC Hub 系统', '授权账号（不超过约定数量）', '统一 AI 能力底座'] },
  { title: '全栈 AI 课程体系', image: getImageUrl('opchub/22.webp'), items: [ 'OPC 标准化培训体系', '初级|中级|高级 100+实战AI课程',"OPC认证证书"] },
  { title: 'AI 训练营 & 线下活动', image: getImageUrl('opchub/33.webp'), items: ['开展企业、行业双专场 AI 主题沙龙',  '路演 + 对接 + 转化',"AI 训练营，赋能产业落地 AI 应用"] },
  { title: '算力调度平台', image: getImageUrl('opchub/44.webp'), items: ['多算力源统一调度', '企业低门槛用算力', '为 AI 应用落地赋能'] },
  { title: 'OPC 创业 & 产业导师', image: getImageUrl('opchub/55.webp'), items: ['AI 创业导师', '行业落地导师', '企业数智化转型实战派'] },
  { title: 'AI 运营支撑服务', image: getImageUrl('opchub/66.webp'), items: ['社群 & 企业运营方法论', '内容、品牌、招商协同', '（可选）国际化 PEC 大会'] },
]

const conditionGroups = [
  {
    category: '园区',
    subtitle: '搭建全域算力与 AI 基础底座，为产业创新落地提供核心支撑。',
    image: getImageUrl('opchub/yq.webp'),
    items: [
      { title: '资源基础', items: ['可用办公面积：建议≥1,000㎡', '固定活动场地（含路演 / 培训 / 闭门会）', 'OPC 创业者社群（个人 / 小团队）'] },
      { title: '运营能力', items: ['3–5 名园区常驻运营人员（招商 / 活动 / 社群 / 对接政府 & 企业）', '有过产业园、孵化器、加速器运营经验（加分）'] },
      { title: '政策与资源', items: ['当地政府明确支持方向：AI / 数字经济 / 产业升级 / 创新创业', '能对接刡政策、项目、资金或算力券'] },
      { title: '数据与算力', items: ['具备合规可用的行业数据', '稳定、可调度的算力环境'] },
    ],
  },
  {
    category: '企业',
    subtitle: '依托 AI 赋能体系激活内部研发小组，快速落地项目、形成业务实战能力。',
    image: getImageUrl('opchub/qy.webp'),
    items: [
      { title: '组织规模', items: ['员工规模：通常 1,000+ 人，多层级、多事业部架构', '产品线庞杂：核心大产品之外，存在大量小场景、内部工具、边缘创新需求', '创新无法靠顶层统一规划：高层难以对全部业务场景有全貌认知'] },
      { title: '创新机制', items: ['已有项目小组制运作基础：3-5人可独立成组，快速迭代验证', '内部有"让听见炮火的人做决策"的文化或成功案例（加分）', '员工具备主动发现场景、自发组队的意识和动力'] },
      { title: '资源开放度', items: ['内部平台、渠道、数据、技术资源已具备，愿意池化开放', 'AI 工具、算力、开发环境可内部调用或快速接入', '能把大公司的"资源厚度"转化为小团队的"创业灵活度"'] },
      { title: '管理痛点', items: ['创新需求分散在各业务线，缺乏统一入口和孵化机制', '跨部门协作壁垒高，小团队难以快速获取所需资源', '需要外部输入：OBC 机制设计、AI 方法论培训、标杆案例参考'] },
    ],
  },
  {
    category: '高校',
    subtitle: '以 OPC+AI 创新模式，赋能在校学生开展创新创业实践。',
    image: getImageUrl('opchub/gx.webp'),
    items: [
      { title: '学科与人才', items: ['计算机、人工智能、软件工程等相关专业支撑', '有研究生或高年级本科生可参与实际项目', '教师团队中有对 Agent、LLM、RAG 等方向有研究兴趣的骨干'] },
      { title: '科研与课题', items: ['有省部级或校企联合课题资源，能将 OPC 技术嵌入研究', '实验室或课题组有算力设备或云资源配额', '愿意将 OPC 作为教学案例或课程实践内容'] },
      { title: '产教融合', items: ['有校企合作基础，能对接企业真实业务场景', '愿意共建实习基地、联合实验室或技术转化中心', '有科技成果转化机制，能将学生项目或研究成果推向市场'] },
      { title: '社群与活动', items: ['有学生技术社团（如 AI 社团、开发者俱乐部）作为种子用户', '能承办 OPC 技术沙龙、黑客松、Workshop 等线下活动', '校园内有合适的场地用于日常交流、项目展示和成果路演'] },
    ],
  },
]

const patents = [
  { title: '动态优先级调度方法、装置、计算机设备和存储介质', no: 'CN202511402564.2', date: '2025-09-28', pub: '2026-01-13', inventor: '刘海峰' },
  { title: '基于资源预测利用率的调度方法及系统', no: 'CN202511435621.7', date: '2025-10-09', pub: '2025-12-30', inventor: '刘海峰' },
]

const securities = [
  { image: getImageUrl('opchub/1.webp'), title: '私有化部署', desc: '确保平台最高控制权，数据与能力均保留在园区内部。' },
  { image: getImageUrl('opchub/2.webp'), title: '全程可追溯', desc: '所有操作均有日志记录，保障服务调用全程透明可追溯。' },
  { image: getImageUrl('opchub/3.webp'), title: '权威可审计', desc: '支持第三方机构进行安全审计，确保平台设计合规可信。' },
  { image: getImageUrl('opchub/4.webp'), title: '数据安全', desc: '采用高强度加密与访问控制，全方位守护核心数据资产。' },
]

const caseImgBwsq1 = getImageUrl('al/bwsq1.webp')
const caseImgBwsq = getImageUrl('al/bwsq.webp')
const caseImgCycyy1 = getImageUrl('al/cycyy1.webp')
const caseImgCycyy = getImageUrl('al/cycyy.webp')

const cases = [
  {
    tag: '中关村 AI 北纬社区（北京·海淀）',
    label: '中关村 AI 北纬社区 人工智能 OPC 服务计划发布',
    slogan: '北京首个人工智能 OPC 服务计划',
    results: ['实现园区企业统一 AI 能力入口', '支撑多场 AI 主题沙龙与技术交流活动', '形成 "社区 + 平台 + 企业" 的轻量化 OPC 生态模型'],
    feature: '验证了 OPC 在社区级载体中的可落地性',
    images: [caseImgBwsq1, caseImgBwsq],
  },
  {
    tag: '中关村（朝阳）AI Space 产业园（北京·朝阳）',
    label: '京朝阳首个 OPC+AI 落地 Aspace',
    slogan: '软积木助力中关村人工智能智用研究院打造服务园区 OPC 平台',
    results: ['支撑园区企业 AI 应用落地与能力提升', '打通 "算力 + 平台 + 培训 + 活动" 的完整闭环', '显著提升园区在 AI 产业方向的承载能力'],
    feature: '验证了 OPC 在产业园级别的规模化可行性',
    images: [caseImgCycyy, caseImgCycyy1],
  },
]
</script>

<template>
  <div class="min-h-screen bg-white font-sans text-[#1A1A1A]">

    <!-- ==================== Hero Section ==================== -->
    <section class="relative overflow-hidden bg-gradient-to-br from-white via-[#FFF5F5] to-white pt-8 md:pt-12 pb-8 md:pb-12 fade-in-section">
      <!-- 右上红色光晕 -->
      <div class="absolute -top-40 -right-40 w-[500px] h-[500px] md:w-[600px] md:h-[600px] rounded-full pointer-events-none" style="background: radial-gradient(circle, rgba(240, 64, 69, 0.18) 0%, transparent 70%); filter: blur(60px);" />

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">

          <!-- 左侧 -->
          <div ref="leftRef">
            <!-- <Chip class="!bg-[#F04045]/10 !text-[#F04045]">PLATFORM · OPC HUB</Chip> -->

            <h1 class="mt-5 page-title">
              OPC Hub<br />
              <span class="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1A1A1A]">
                面向 OPC 时代的 AI 创业<br />
                生态基础设施平台
              </span>
            </h1>

            <p class="mt-6 text-lg text-[#666666] leading-relaxed max-w-xl">
              赋能超级个体：生成式 AI 时代的创新园区解决方案

            </p>

            <div class="flex flex-wrap gap-2 mt-6">
              <Chip class="!bg-[#F5F5F7] !text-[#666666]">共享算力</Chip>
              <Chip class="!bg-[#F5F5F7] !text-[#666666]">办公空间</Chip>
              <Chip class="!bg-[#F5F5F7] !text-[#666666]">生态服务</Chip>
              <Chip class="!bg-[#F5F5F7] !text-[#666666]">AI 创业闭环</Chip>
            </div>

            <div class="mt-8 flex flex-wrap items-center gap-4">
              <button
                class="px-6 py-2.5 rounded-lg bg-[#F04045] text-white font-medium hover:opacity-90 transition-opacity"
                @click="showModal = true"
              >
                立即咨询
              </button>
              <BrandButton variant="ghost" to="/solutions?tab=solo" class="hover:!border-[#F04045] hover:!text-[#F04045]" arrow>
                了解方案
              </BrandButton>
            </div>
          </div>

          <!-- 右侧：轮播 -->
          <div ref="rightRef" class="relative" @mouseenter="stopHeroCarousel" @mouseleave="startHeroCarousel">
            <div
              class="aspect-[16/10] rounded-2xl bg-[#F5F5F7] border border-[#E5E5E5] shadow-sm overflow-hidden"
            >
              <div class="flex h-full transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${heroIndex * 100}%)` }">
                <AppImage
                  v-for="(img, i) in heroImages"
                  :key="img.src"
                  :src="img.src"
                  :alt="img.alt"
                  class="w-full h-full flex-shrink-0 object-cover"
                  :priority="i === 0"
                />
              </div>
            </div>
            <!-- Dots -->
            <div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              <button
                v-for="(_, idx) in heroImages"
                :key="idx"
                class="w-2 h-2 rounded-full transition-all"
                :class="idx === heroIndex ? 'bg-[#F04045] w-4' : 'bg-white/60'"
                @click="heroIndex = idx; stopHeroCarousel(); startHeroCarousel();"
              />
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ==================== Section: 三大服务方向 ==================== -->
    <section class="py-10 md:py-16 bg-white fade-in-section">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-10 items-stretch">
          <!-- 左侧：图片 -->
          <div class="flex items-center justify-center">
            <div class="w-full rounded-2xl overflow-hidden border border-[#E5E5E5] shadow-sm">
              <AppImage
                :src="opc1Img"
                alt="OPC Hub 场景"
                class="w-full h-auto object-contain"
              />
            </div>
          </div>

          <!-- 右侧：三个卡片 -->
          <div class="flex flex-col gap-4">
            <!-- 面向园区 -->
            <div class="flex-1 p-6 md:p-7 rounded-2xl bg-[#F5F5F7] border border-[#E5E5E5] hover:shadow-lg transition-all duration-300">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 rounded-xl bg-[#F04045]/10 flex items-center justify-center">
                  <Icon icon="lucide:user" class="w-5 h-5 text-[#F04045]" />
                </div>
                <h3 class="text-xl font-bold text-[#1A1A1A]">面向园区</h3>
              </div>
              <p class="text-sm text-[#666666] leading-relaxed">
                痛点：园区招商缺乏 AI 特色竞争力，创业者算力成本高、信息孤立、工具更新慢，无统一算力管控平台。
              </p>
              <p class="text-sm text-[#666666] leading-relaxed">
                方案：部署 OPC Hub 园区管控中台，共享算力并发放算力券，汇聚全品类大模型与行业智能体；配套 AI 培训、创业导师、路演对接服务，搭建创业者社群，本地私有化合规部署，帮助园区从物业房东转型 AI 产业孵化器。
              </p>
            </div>

            <!-- 面向企业 -->
            <div class="flex-1 p-6 md:p-7 rounded-2xl bg-[#F5F5F7] border border-[#E5E5E5] hover:shadow-lg transition-all duration-300">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 rounded-xl bg-[#F04045]/10 flex items-center justify-center">
                  <Icon icon="lucide:building-2" class="w-5 h-5 text-[#F04045]" />
                </div>
                <h3 class="text-xl font-bold text-[#1A1A1A]">面向企业</h3>
              </div>
              <p class="text-sm text-[#666666] leading-relaxed">
                痛点：人力成本高，员工缺少 AI 实操能力，缺少轻量化创新单元，业务创新迭代缓慢。
              </p>
              <p class="text-sm text-[#666666] leading-relaxed">
                方案：搭建企业内部 OPC 微型创新单元，落地赛马试错机制；接入一站式多模型 AI 底座，用智能体替代重复工作；配套分层 AI 课程、官方能力认证与行业导师一对一陪跑，共享算力大幅降低技术投入，实现降本增效。
              </p>
            </div>

            <!-- 面向学校 -->
            <div class="flex-1 p-6 md:p-7 rounded-2xl bg-[#F5F5F7] border border-[#E5E5E5] hover:shadow-lg transition-all duration-300">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 rounded-xl bg-[#F04045]/10 flex items-center justify-center">
                  <Icon icon="lucide:graduation-cap" class="w-5 h-5 text-[#F04045]" />
                </div>
                <h3 class="text-xl font-bold text-[#1A1A1A]">面向高校</h3>
              </div>
              <p class="text-sm text-[#666666] leading-relaxed">
               痛点：AI 教学体系落后，学生缺少算力与实战项目，就业创业资源匮乏，校企人才供需脱节。
              </p>
              <p class="text-sm text-[#666666] leading-relaxed">
               方案：引入 OPC 标准化 AI 实训课程与权威技能认证，开放平台免费算力与模型资源；导入企业真实产业项目用于实训，配备创业导师，常态化举办 AI 沙龙路演，打通校企协同渠道，同步赋能学生就业与轻创业。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Dark Platform Section -->
    <section class="py-10 md:py-16 bg-white text-[#1A1A1A] fade-in-section">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="section-title text-center mb-2">
          OPC Hub——面向 OPC 时代的 AI 创业生态基础设施平台
        </h2>
        <p class="text-center text-[#666666] mb-10"></p>

        <div class="text-center mb-8">
          <p class="text-4xl md:text-5xl font-bold text-[#F04045] flex items-center justify-center">
            <span class="inline-flex items-baseline">
              <span
                v-for="(digit, i) in String(agentCount)"
                :key="`pos-${i}`"
                class="inline-block overflow-hidden relative text-center"
                style="height: 1em; width: 0.65em; line-height: 1em;"
              >
                <Transition name="scroll-up" mode="out-in">
                  <span :key="digit" class="inline-block w-full">{{ digit }}</span>
                </Transition>
              </span>
            </span>
            <span>&nbsp;个 AI Agent 运行中</span>
          </p>
        </div>

        <div class="space-y-3 text-center text-[#666666] mb-10">
          <p>OPC，让一个人成为一家公司；AI 助手让效率提升 10 倍</p>
          <p>OPC(One Person Company)：零门槛启动、无需招人、AI 全自动运营</p>
        </div>

        <div class="flex flex-wrap justify-center gap-4 mb-16">
          <a
            href="http://opc.chatu.plus"
            target="_blank"
            rel="noopener noreferrer"
            class="px-8 py-3 rounded-lg bg-[#F04045] text-white font-semibold hover:opacity-90 transition-opacity inline-block"
          >
            立即体验
          </a>
          <button
            class="px-8 py-3 rounded-lg border border-[#1A1A1A] text-[#1A1A1A] font-semibold hover:bg-[#1A1A1A]/5 transition-colors"
            @click="showModal = true"
          >
            联系我们
          </button>
          <EnterpriseModal v-model="showModal" />
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-4 gap-4 md:gap-6 my-10">
          <div v-for="(item, i) in statItems" :key="item.label" :ref="(el) => { if (el) statRefs[i].value = el as HTMLElement }" class="stat-card text-center p-5 md:p-6 rounded-xl bg-white border border-[#E5E5E5] shadow-sm transition-all duration-300" >
            <div class="text-2xl md:text-3xl font-bold text-[#F04045]">
              {{ item.format(countUps[i].displayValue.value) }}
            </div>
            <div class="text-sm text-[#666666] mt-1.5">{{ item.label }}</div>
          </div>
        </div>


        <!-- Screenshots -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:auto-rows-fr items-stretch">
          <div class="rounded-xl border border-[#E5E5E5] overflow-hidden aspect-[16/9]">
            <AppImage :src="heroImages[0].src" class="w-full h-full object-cover" alt="OPC Hub" />
          </div>
          <div class="rounded-xl border border-[#E5E5E5] overflow-hidden aspect-[16/9]">
            <AppImage :src="heroImages[1].src" class="w-full h-full object-cover" alt="AIGC 中控后台" />
          </div>
        </div>

        <!-- Core capabilities -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div class="p-6 rounded-xl bg-[#F5F5F7] border border-[#E5E5E5]">
            <h4 class="text-lg font-bold mb-2">模型矩阵</h4>
            <p class="text-sm text-[#666666]">智能选择和调度最合适的 AI 模型。</p>
          </div>
          <div class="p-6 rounded-xl bg-[#F5F5F7] border border-[#E5E5E5]">
            <h4 class="text-lg font-bold mb-2">Agent 化运行</h4>
            <p class="text-sm text-[#666666]">复杂业务流程封装成独立智能体。</p>
          </div>
          <div class="p-6 rounded-xl bg-[#F5F5F7] border border-[#E5E5E5]">
            <h4 class="text-lg font-bold mb-2">核心价值</h4>
            <p class="text-sm text-[#666666]">AI 能力封装为可运行、可计量的数字商品。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== Section 6: Rent Model ==================== -->
    <section class="py-10 md:py-16 bg-[#F5F5F7] fade-in-section">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center mb-8">
          <div class="flex flex-wrap justify-center gap-3 text-sm text-[#666666]">
            <span class="px-3 py-1 rounded-full bg-white border border-[#E5E5E5]">垂直化招商</span>
            <span class="px-3 py-1 rounded-full bg-white border border-[#E5E5E5]">数字化运营</span>
            <span class="px-3 py-1 rounded-full bg-white border border-[#E5E5E5]">拥抱新模式</span>
          </div>
          <p class="mt-4 text-lg font-bold text-[#F04045]">连接超级个体，孵化价值</p>
        </div>

        <!-- Conditions -->
        <h3 class="section-title text-center mb-2">OPC Hub 能不能落到我们 园区 / 企业 / 高校 ？</h3>
        <p class="text-center text-[#666666] mb-8">想做 OPC，你要具备这些条件</p>

        <div v-for="group in conditionGroups" :key="group.category" class="mb-16 last:mb-0">
          <!-- <div class="text-center mb-4">
            <span class="inline-block px-8 py-3 rounded-full bg-[#F04045] text-white text-lg font-bold shadow-md">
              {{ group.category }}
            </span>
          </div> -->

          <div class="relative mb-8 rounded-xl overflow-hidden h-[140px]">
            <AppImage
              v-if="group.image"
              :src="group.image"
              :alt="group.category"
              class="absolute inset-0 w-full h-full object-cover object-center blur-sm"
            />
            <div class="absolute inset-0 bg-black/30 flex flex-col items-center justify-center px-6 text-center">
              <span class="text-white text-2xl font-bold tracking-wide">
                {{ group.category }}
              </span>
              <span class="mt-2 text-white/90 text-base md:text-lg leading-relaxed max-w-2xl">
                {{ group.subtitle }}
              </span>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="c in group.items" :key="c.title" class="p-6 rounded-xl bg-white border border-[#E5E5E5]">
              <h4 class="text-lg font-bold mb-3 text-[#F04045]">{{ c.title }}</h4>
              <ul class="space-y-2 text-sm text-[#666666]">
                <li v-for="item in c.items" :key="item">· {{ item }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== Section 7: Six Services ==================== -->
    <section class="py-10 md:py-16 bg-white fade-in-section">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="section-title text-center mb-2">
          软积木 OPC 产业生态整体解决方案
        </h2>
        <p class="text-center font-bold text-[#1A1A1A] mb-2">
          构建一个 AI 时代的新型产业形态
        </p>
        <p class="text-center text-sm text-[#666666] mb-8">
          <!-- 支撑方：软积木，提供完善的 AI 体系化能力 -->
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div
            v-for="(s, i) in services"
            :key="s.title"
            class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-[#F8FAFC] border border-[#E5E5E5] p-5 hover:-translate-y-1 transition-transform duration-300"
          >
            <!-- Header -->
            <div class="flex items-start gap-3">
              <div
                class="w-14 h-14 rounded-br-2xl flex items-center justify-center text-white text-xl font-bold shrink-0"
                :style="{ backgroundColor: serviceColors[i] }"
              >
                {{ String(i + 1).padStart(2, '0') }}
              </div>
              <div class="pt-1">
                <h3 class="text-lg font-bold text-[#1A1A1A]">{{ s.title }}</h3>
                <div
                  class="mt-2 w-8 h-1 rounded-full"
                  :style="{ backgroundColor: serviceColors[i] }"
                />
              </div>
            </div>

            <!-- Body -->
            <div class="flex items-end gap-4 mt-5">
              <ul class="flex-1 space-y-2 text-sm text-[#666666]">
                <li
                  v-for="item in s.items"
                  :key="item"
                  class="flex items-start gap-2"
                >
                  <span
                    class="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                    :style="{ backgroundColor: serviceColors[i] }"
                  />
                  {{ item }}
                </li>
              </ul>
              <AppImage
                :src="s.image"
                :alt="s.title"
                class="w-20 h-20 md:w-24 md:h-24 object-contain shrink-0"
              />
            </div>
          </div>
        </div>

        <div class="p-6 rounded-xl bg-[#F5F5F7] text-center">
          <p class="text-[#666666] leading-relaxed">
            通过生态合作机制，链接技术、场景、资本与社区资源，推动 OPC 从个体探索走向规模化协同，真正让 AI 成为每一位创业者的 "生产力底座"
          </p>
        </div>
      </div>
    </section>

    <!-- ==================== Section 8: Cases ==================== -->
    <section class="py-10 md:py-16 bg-[#F5F5F7] fade-in-section">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="section-title text-center mb-8">产业生态支撑落地案例</h2>
        <div class="space-y-8">
          <div
            v-for="c in cases"
            :key="c.tag"
            class="p-6 rounded-xl bg-white border border-[#E5E5E5]"
            :class="c.images ? 'grid grid-cols-1 lg:grid-cols-2 gap-6 items-center' : ''"
          >
            <!-- 左侧文字 -->
            <div>
              <div class="flex flex-wrap items-center gap-3 mb-4">
                <span class="px-3 py-1 rounded-full text-xs font-semibold bg-[#F04045]/10 text-[#F04045]">
                  {{ c.label }}
                </span>
              </div>
              <h3 class="text-xl font-bold mb-2">{{ c.tag }}</h3>
              <p class="text-[#F04045] font-medium mb-4">{{ c.slogan }}</p>
              <ul class="space-y-2 text-[#666666] mb-4">
                <li v-for="r in c.results" :key="r">· {{ r }}</li>
              </ul>
              <p class="text-sm font-semibold text-[#1A1A1A]">主要特点：{{ c.feature }}</p>
            </div>

            <!-- 右侧图片 -->
            <div v-if="c.images" class="relative hidden lg:block h-80">
              <AppImage
                :src="c.images[0]"
                alt=""
                class="absolute top-0 left-0 w-64 h-48 rounded-xl shadow-lg z-10 object-cover"
              />
              <AppImage
                :src="c.images[1]"
                alt=""
                class="absolute top-28 left-36 w-64 h-48 rounded-xl shadow-lg z-20 object-cover"
              />
            </div>
          </div>
        </div>

        <div class="mt-12 p-6 rounded-xl bg-white border border-[#E5E5E5] text-center">
          <p class="text-[#666666] leading-relaxed mb-4">
            软积木致力于为 OPC 生态持续提供稳定、可落地的 AI 产品能力，从多模型、多模态到低门槛部署，系统性支撑 OPC 快速启动与持续成长
          </p>
          <p class="text-sm font-semibold text-[#F04045]">荣誉：北京首家实现 OPC 体系落地交付的服务方</p>
        </div>
      </div>
    </section>

    <!-- ==================== Section 9: Security ==================== -->
    <section class="py-10 md:py-16 bg-white fade-in-section">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="section-title text-center mb-4">
          <!-- 合规与安全：基石 -->
           自主产权｜合规备案｜安全可控
        </h2>
        <p class="text-center text-[#666666] mb-8">
          <!-- 软积木遵循国家监管，合规备案（拥有自有知识产权） -->
        </p>

        <!-- Patents -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div
            v-for="p in patents"
            :key="p.no"
            class="p-6 rounded-xl border border-[#E5E5E5]"
          >
            <h4 class="text-lg font-bold mb-3">{{ p.title }}</h4>
            <div class="space-y-1 text-sm text-[#666666]">
              <p>发明公布 {{ p.no }}</p>
              <p>申请日：{{ p.date }}；公开(公告)日：{{ p.pub }}</p>
            </div>
          </div>
        </div>

        <!-- Security -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="s in securities"
            :key="s.title"
            class="p-6 rounded-xl bg-[#F5F5F7] text-center"
          >
            <div class="aspect-video rounded-xl overflow-hidden mb-4">
              <AppImage
                :src="s.image"
                :alt="s.title"
                class="w-full h-full object-cover"
              />
            </div>
            <h4 class="font-bold mb-2">{{ s.title }}</h4>
            <p class="text-sm text-[#666666]">{{ s.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== Section 5: Platform Value ==================== -->
    <section class="py-10 md:py-16 bg-white fade-in-section">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="section-title text-center mb-4">
          OPC + AI 产业支撑平台 让 OPC 智能落地更具象
        </h2>
        <p class="text-center text-[#666666] max-w-3xl mx-auto mb-8">
          OPCHub 提供多引擎、多模态的 AI 能力底座，大幅降低 AI 接入以及使用门槛。
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div class="p-6 rounded-xl bg-[#F5F5F7]">
            <h3 class="text-lg font-bold mb-3">赋能产业园区</h3>
            <p class="text-[#666666]">差异化 AI 定位解决招商空置，统管算力数据精准补贴；集聚 OPC 创业群体，园区转型 AI 孵化样板</p>
          </div>
          <div class="p-6 rounded-xl bg-[#F5F5F7]">
            <h3 class="text-lg font-bold mb-3">助力实体企业</h3>
            <p class="text-[#666666]">轻量化组织控人力成本，全员掌握 AI 实操，赛马机制迭代业务；AI 智能体替代重复工作，降本增效、培育创新业务。</p>
          </div>
          <div class="p-6 rounded-xl bg-[#F5F5F7]">
            <h3 class="text-lg font-bold mb-3">服务各大高校</h3>
            <p class="text-[#666666]">搭建 AI 产教融合体系，补齐实训短板，提升学生就业创业能力；打通校企资源，持续输送适配产业的 AI 专业人才。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== Section 10: AI Ecosystem ==================== -->
    <section class="py-10 md:py-16 bg-[#F5F5F7] fade-in-section">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="section-title text-center mb-4">AI 服务生态</h2>
        <p class="text-center text-[#666666] max-w-3xl mx-auto mb-8">
          包含：活动、咨询、培训、课程、书籍等全面的 AI 生态支持，以OPC 创业为核心的深度服务生态圈。

        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:auto-rows-fr items-stretch">
          <!-- 活动 -->
          <div class="p-6 rounded-xl bg-white border border-[#E5E5E5] h-full flex flex-col">
            <h4 class="text-base font-bold text-[#F04045] mb-3">活动</h4>
            <p class="text-sm text-[#666666] mb-3">举办峰会、论坛、沙龙等系列行业活动，搭建全球化 AI 交流合作平台。</p>
            <div class="grid grid-cols-2 gap-2">
              <div class="rounded-lg overflow-hidden aspect-[11/5]">
                <img src="@/assets/st/hd/fh.webp" class="w-full h-full object-cover" alt="" />
              </div>
              <div class="rounded-lg overflow-hidden aspect-[11/5]">
                <img src="@/assets/st/hd/lt.webp" class="w-full h-full object-cover" alt="" />
              </div>
              <div class="rounded-lg overflow-hidden aspect-[11/5]">
                <img src="@/assets/st/hd/sl.webp" class="w-full h-full object-cover" alt="" />
              </div>
              <div class="rounded-lg overflow-hidden aspect-[11/5]">
                <img src="@/assets/st/hd/zt.webp" class="w-full h-full object-cover" alt="" />
              </div>
            </div>
          </div>
          <!-- 咨询与培训 -->
          <div class="p-6 rounded-xl bg-white border border-[#E5E5E5] h-full flex flex-col">
            <h4 class="text-base font-bold text-[#F04045] mb-3">咨询培训</h4>
            <p class="text-sm text-[#666666] mb-3">定制化 AI 咨询服务 + 实战化培训，打造企业专属 AI 应用能力。</p>
            <div class="grid grid-cols-2 gap-3 items-stretch">
              <!-- 左侧：3 张竖向排列 -->
              <div class="flex flex-col gap-2">
                <div class="rounded-lg overflow-hidden h-24">
                  <img src="@/assets/st/zxpx/px.webp" class="w-full h-full object-cover" alt="" />
                </div>
                <div class="rounded-lg overflow-hidden h-24">
                  <img src="@/assets/st/zxpx/px1.webp" class="w-full h-full object-cover" alt="" />
                </div>
                <div class="rounded-lg overflow-hidden h-24">
                  <img src="@/assets/st/zxpx/px2.webp" class="w-full h-full object-cover" alt="" />
                </div>
              </div>
              <!-- 右侧：3.png -->
              <div class="rounded-lg overflow-hidden relative">
                <img src="@/assets/st/zxpx/3.webp" class="absolute inset-0 w-full h-full object-cover" alt="" />
              </div>
            </div>
          </div>
          <!-- 课程 -->
          <div class="p-6 rounded-xl bg-white border border-[#E5E5E5] h-full flex flex-col">
            <h4 class="text-base font-bold text-[#F04045] mb-3">课程</h4>
            <p class="text-sm text-[#666666] mb-3">打造从基础到实战的系统化 AI 课程，赋能学员快速掌握前沿 AI 技能。</p>
            <div class="grid grid-cols-2 gap-3 flex-1 items-center">
              <div
                v-for="img in kcImages"
                :key="img"
                class="rounded-lg overflow-hidden bg-[#F5F5F7] h-24 md:h-28 flex items-center justify-center"
              >
                <img :src="img" alt="课程" class="w-full h-full object-contain" />
              </div>
            </div>
          </div>
          <!-- 书籍 -->
          <div class="p-6 rounded-xl bg-white border border-[#E5E5E5] h-full flex flex-col">
            <h4 class="text-base font-bold text-[#F04045] mb-4">书籍</h4>
            <p class="text-sm text-[#666666]">撰写并发行多本 AI 实战书籍，助力从业者快速掌握 AI 技术与落地技巧。</p>
            <div class="grid grid-cols-3 gap-3 flex-1 items-center">
              <div class="text-center">
                <div class="rounded-lg overflow-hidden bg-[#F5F5F7] h-32 md:h-36 mb-2">
                  <img src="@/assets/st/sj/24xs.webp" class="w-full h-full object-contain" alt="24 小时精通 AI Agent" />
                </div>
                <p class="text-xs font-semibold text-[#1A1A1A]">《二十四小时 AI Agent》</p>
                <p class="text-[11px] text-[#666666] mt-1 leading-relaxed">机械工业出版社 出版</p>
                <p class="text-[11px] text-[#666666] mt-1 leading-relaxed">可快速上手实操AI的畅销书。</p>
              </div>
              <div class="text-center">
                <div class="rounded-lg overflow-hidden bg-[#F5F5F7] h-32 md:h-36 mb-2">
                  <img src="@/assets/st/sj/jsAI.webp" class="w-full h-full object-contain" alt="解锁 AI 力量" />
                </div>
                <p class="text-xs font-semibold text-[#1A1A1A]">《解锁 AI 力量》</p>
                <p class="text-[11px] text-[#666666] mt-1 leading-relaxed">中共中央党校出版社 出版</p>
                <p class="text-[11px] text-[#666666] mt-1 leading-relaxed">AI行业全景发展的权威读本。</p>
              </div>
              <div class="text-center">
                <div class="rounded-lg overflow-hidden bg-[#F5F5F7] h-32 md:h-36 mb-2">
                  <img src="@/assets/st/sj/opc.webp" class="w-full h-full object-contain object-bottom" alt="时代的 OPC" />
                </div>
                <p class="text-xs font-semibold text-[#1A1A1A]">《时代的 OPC 》</p>
                <p class="text-[11px] text-[#666666] mt-1 leading-relaxed">机械工业出版社 出版</p>
                <p class="text-[11px] text-[#666666] mt-1 leading-relaxed">一人公司从0到1方法论。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== Section 11: Ending ==================== -->
    <section class="py-10 md:py-16 bg-white text-[#1A1A1A] fade-in-section">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="section-title text-center mb-6">
          AI 浪潮奔涌，软积木让 OPC 持续领先
        </h2>
        <p class="text-center text-[#666666] max-w-3xl mx-auto mb-8 text-lg">
          我们要做的不是一次性建设的园区，而是一个能与 AI 同频进化、持续成长的产业园区
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div class="p-6 rounded-xl bg-[#F5F5F7] border border-[#E5E5E5]">
            <!-- <span class="text-[#F04045] font-bold text-sm">01</span> -->
            <h4 class="font-bold mt-2 mb-2">OPC 体系持续成长</h4>
            <p class="text-sm text-[#666666]">从方法论到平台化，从工具能力到系统能力，让OPC 形成可复制、可扩展的产业操作体系。</p>
          </div>
          <div class="p-6 rounded-xl bg-[#F5F5F7] border border-[#E5E5E5]">
            <!-- <span class="text-[#F04045] font-bold text-sm">02</span> -->
            <h4 class="font-bold mt-2 mb-2">园区能力不断进化</h4>
            <p class="text-sm text-[#666666]">园区不再是空间载体，而是集算力、人才、企业与服务于一体的智能协同平台。</p>
          </div>
          <div class="p-6 rounded-xl bg-[#F5F5F7] border border-[#E5E5E5]">
            <!-- <span class="text-[#F04045] font-bold text-sm">03</span> -->
            <h4 class="font-bold mt-2 mb-2">产业规模持续扩大</h4>
            <p class="text-sm text-[#666666]">随着企业接入、应用落地与生态聚集，OPC 产业生态呈现出可持续放大的网络效应。</p>
          </div>
          <div class="p-6 rounded-xl bg-[#F5F5F7] border border-[#E5E5E5]">
            <!-- <span class="text-[#F04045] font-bold text-sm">04</span> -->
            <h4 class="font-bold mt-2 mb-2">服务能力同步增强</h4>
            <p class="text-sm text-[#666666]">我们在平台、课程、算力、导师与运营体系上的能力持续升级，为园区提供长期、稳定、可演进的支撑。</p>
          </div>
        </div>

        <p class="text-center text-2xl md:text-3xl font-bold text-[#F04045] mb-8">
          OPC Hub——面向 OPC 时代的 AI 创业生态基础设施平台
        </p>

        <div class="text-center">
          <!-- <p class="text-[#999999] text-sm mb-2">OPC Hub：园区级 AI 能力生产与交易平台</p> -->
          <p class="text-[#1A1A1A] text-lg font-bold">想要了解更多，请联系我们</p>
          <div class="mt-6 flex justify-center">
            <div class="w-[160px] h-[160px] rounded-xl bg-white overflow-hidden border-2 border-[#E5E5E5] flex items-center justify-center">
              <img src="@/assets/lxwm.webp" alt="联系我们" class="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>


  </div>
</template>

<style scoped>
.fade-in-section {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}
.fade-in-visible {
  opacity: 1;
  transform: translateY(0);
}

.stat-card {
  transition: all 0.3s ease;
}
.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(240, 64, 69, 0.12);
}

.scroll-up-enter-active,
.scroll-up-leave-active {
  transition: all 0.4s ease;
}
.scroll-up-enter-from {
  transform: translateY(100%);
  opacity: 0;
}
.scroll-up-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
