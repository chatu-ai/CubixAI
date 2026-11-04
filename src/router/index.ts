import { createRouter, createWebHistory } from 'vue-router'
import type { RouteLocationNormalized, RouteRecordRaw } from 'vue-router'

declare const _hmt: any[]

// 扩展 vue-router 的 RouteMeta 类型，支持 SEO 字段
declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    description?: string
    ogTitle?: string
    ogDescription?: string
    ogImage?: string
    schema?: Record<string, any> | Record<string, any>[]
  }
}

// 站点基础配置（后续换域名时只需改这里）
const SITE_ORIGIN = 'https://www.cubixai.com'
const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/og-image.png`
const SITE_LOGO = `${SITE_ORIGIN}/logo.png`

// 默认 SEO 回退
const defaultSeo = {
  title: '软积木 CubixAI | 企业级AI智能体平台，解决企业AI落地最后三公里',
  description:
    '软积木（北京）科技有限公司专注于企业 AI 落地，提供 ChatU 企业大模型平台、智方体 AgentStation AI 工作站、OPC Hub 园区算力生态及 AI 咨询培训服务，助力企业实现智能化转型。',
  ogTitle: '软积木 CubixAI | 企业级AI智能体平台，解决企业AI落地最后三公里',
  ogDescription:
    '软积木专注于企业 AI 落地，提供 ChatU 大模型平台、智方体 AgentStation、OPC Hub 园区算力生态及 AI 培训服务。',
  ogImage: DEFAULT_OG_IMAGE,
}

// 通用组织信息（所有页面共用）
const organizationSchema = {
  '@type': 'Organization',
  name: '软积木（北京）科技有限公司',
  alternateName: 'CubixAI',
  url: SITE_ORIGIN,
  logo: SITE_LOGO,
  description:
    '软积木（北京）科技有限公司专注于企业 AI 落地，提供 ChatU 企业大模型平台、智方体 AgentStation AI 工作站、OPC Hub 园区算力生态及 AI 咨询培训服务。',
  sameAs: [],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: '客户服务',
    areaServed: 'CN',
    availableLanguage: ['Chinese', 'English', 'Japanese', 'Korean'],
  },
}

// 首页网站信息
const websiteSchema = {
  '@type': 'WebSite',
  name: '软积木 CubixAI',
  url: SITE_ORIGIN,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_ORIGIN}/?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue'),
    meta: {
      title: '软积木 CubixAI | 企业级AI智能体平台，解决企业AI落地最后三公里',
      description:
        '软积木（北京）科技有限公司专注于企业 AI 落地，提供 ChatU 企业大模型平台、智方体 AgentStation AI 工作站、OPC Hub 园区算力生态及 AI 咨询培训服务。',
      schema: websiteSchema,
    },
  },
  {
    path: '/products/chatu',
    name: 'Chatu',
    component: () => import('../views/ChatuView.vue'),
    meta: {
      title: 'ChatU 企业大模型平台 | 软积木 CubixAI',
      description:
        'ChatU 是软积木推出的企业级大模型平台，支持私有化部署、知识库构建、多 Agent 协同与安全合规，助力企业高效落地生成式 AI。',
      schema: {
        '@type': 'Product',
        name: 'ChatU 企业大模型平台',
        description:
          'ChatU 是软积木推出的企业级大模型平台，支持私有化部署、知识库构建、多 Agent 协同与安全合规。',
        brand: { '@type': 'Brand', name: '软积木 CubixAI' },
        url: `${SITE_ORIGIN}/products/chatu`,
        category: '企业 AI 软件',
        provider: { '@type': 'Organization', name: '软积木（北京）科技有限公司' },
      },
    },
  },
  {
    path: '/products/agentstation',
    name: 'AgentStation',
    component: () => import('../views/AgentStationView.vue'),
    meta: {
      title: '智方体 AgentStation AI 工作站 | 软积木 CubixAI',
      description:
        '智方体 AgentStation 是企业级 AI 智能体工作站，支持可视化编排、多 Agent 协作与企业知识融合，让 AI 真正融入业务流。',
      schema: {
        '@type': 'Product',
        name: '智方体 AgentStation AI 工作站',
        description:
          '智方体 AgentStation 是企业级 AI 智能体工作站，支持可视化编排、多 Agent 协作与企业知识融合。',
        brand: { '@type': 'Brand', name: '软积木 CubixAI' },
        url: `${SITE_ORIGIN}/products/agentstation`,
        category: '企业 AI 软件',
        provider: { '@type': 'Organization', name: '软积木（北京）科技有限公司' },
      },
    },
  },
  {
    path: '/ai-insight',
    name: 'AIInsight',
    component: () => import('../views/AIInsightView.vue'),
    meta: {
      title: 'AI 洞察 | 软积木 CubixAI 前沿观点',
      description:
        '软积木 AI 洞察栏目，分享大模型、AI Agent、企业智能化转型的前沿观点、实战案例与行业趋势分析。',
      schema: {
        '@type': 'WebPage',
        name: 'AI 洞察',
        description: '软积木 AI 洞察栏目，分享大模型、AI Agent、企业智能化转型的前沿观点。',
        url: `${SITE_ORIGIN}/ai-insight`,
      },
    },
  },
  {
    path: '/paid-insights',
    name: 'PaidInsights',
    component: () => import('../views/PaidInsightsView.vue'),
    meta: {
      title: '有偿资讯 · 企业 AI 落地实战技巧 | 软积木 CubixAI',
      description:
        '软积木有偿资讯栏目，汇集企业 AI 落地实战技巧：知识库清洗、RAG 调优、私有化部署选型等，扫码付费即可查看完整内容。',
      schema: {
        '@type': 'CollectionPage',
        name: '有偿资讯 · 企业 AI 落地实战技巧',
        description: '软积木有偿资讯栏目，汇集企业 AI 落地实战技巧，扫码付费查看完整内容。',
        url: `${SITE_ORIGIN}/paid-insights`,
      },
    },
  },
  {
    path: '/paid-insight/:id',
    name: 'PaidInsight',
    component: () => import('../views/PaidInsightPayView.vue'),
    meta: {
      title: '有偿资讯 · 企业 AI 落地实战技巧 | 软积木 CubixAI',
      description:
        '软积木有偿资讯栏目，提供企业 AI 落地实战技巧，扫码付费即可查看完整内容。',
      schema: {
        '@type': 'WebPage',
        name: '有偿资讯 · 企业 AI 落地实战技巧',
        description: '软积木有偿资讯栏目，提供企业 AI 落地实战技巧，扫码付费查看完整内容。',
        url: `${SITE_ORIGIN}/paid-insight`,
        isAccessibleForFree: false,
      },
    },
  },
  {
    path: '/solutions',
    name: 'Solutions',
    component: () => import('../views/SolutionsView.vue'),
    meta: {
      title: '行业解决方案 | 软积木 CubixAI',
      description:
        '软积木为电信、金融、教育、医疗、电商、广告等行业提供定制化 AI 解决方案，加速企业智能化转型升级。',
      schema: {
        '@type': 'Service',
        name: '企业 AI 行业解决方案',
        description: '软积木为电信、金融、教育、医疗、电商、广告等行业提供定制化 AI 解决方案。',
        provider: { '@type': 'Organization', name: '软积木（北京）科技有限公司' },
        areaServed: 'CN',
        url: `${SITE_ORIGIN}/solutions`,
      },
    },
  },
  {
    path: '/ecosystem',
    name: 'Ecosystem',
    component: () => import('../views/EcosystemView.vue'),
    meta: {
      title: '生态合作 | 软积木 CubixAI',
      description:
        '加入软积木 CubixAI 生态，与渠道伙伴、技术伙伴、算力伙伴共建企业 AI 落地生态，共享 AI 时代增长机遇。',
      schema: {
        '@type': 'Service',
        name: 'CubixAI 生态合作',
        description: '加入软积木 CubixAI 生态，与渠道伙伴、技术伙伴、算力伙伴共建企业 AI 落地生态。',
        provider: { '@type': 'Organization', name: '软积木（北京）科技有限公司' },
        areaServed: 'CN',
        url: `${SITE_ORIGIN}/ecosystem`,
      },
    },
  },
  {
    path: '/cases',
    name: 'Cases',
    component: () => import('../views/CasesView.vue'),
    meta: {
      title: '客户案例 | 软积木 CubixAI',
      description:
        '查看软积木 CubixAI 在金融、制造、零售、教育等行业的企业 AI 落地案例，了解 ChatU、AgentStation 如何创造业务价值。',
      schema: {
        '@type': 'CollectionPage',
        name: '客户案例',
        description: '软积木 CubixAI 在金融、制造、零售、教育等行业的企业 AI 落地案例。',
        url: `${SITE_ORIGIN}/cases`,
      },
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/ContactView.vue'),
    meta: {
      title: '联系我们 | 软积木 CubixAI',
      description:
        '联系软积木（北京）科技有限公司，获取 ChatU、AgentStation、OPC Hub 与 AI 培训的产品咨询与商务合作。',
      schema: {
        '@type': 'ContactPage',
        name: '联系我们',
        description: '联系软积木（北京）科技有限公司，获取产品咨询与商务合作。',
        url: `${SITE_ORIGIN}/contact`,
      },
    },
  },
  {
    path: '/en/contact',
    name: 'ContactEn',
    component: () => import('../views/ContactEnView.vue'),
    meta: {
      title: 'Contact Us | CubixAI',
      description:
        'Contact CubixAI for enterprise AI solutions, ChatU LLM platform, AgentStation AI workstation, OPC Hub and AI training services.',
      schema: {
        '@type': 'ContactPage',
        name: 'Contact Us',
        description: 'Contact CubixAI for enterprise AI solutions and services.',
        url: `${SITE_ORIGIN}/en/contact`,
      },
    },
  },
  {
    path: '/jp/contact',
    name: 'ContactJp',
    component: () => import('../views/ContactJpView.vue'),
    meta: {
      title: 'お問い合わせ | CubixAI',
      description:
        'CubixAIへのお問い合わせはこちら。ChatU大規模言語モデルプラットフォーム、AgentStation AIワークステーション、OPC Hub、AI研修サービスに関するご相談を承ります。',
      schema: {
        '@type': 'ContactPage',
        name: 'お問い合わせ',
        description: 'CubixAIへのお問い合わせはこちら。',
        url: `${SITE_ORIGIN}/jp/contact`,
      },
    },
  },
  {
    path: '/hg/contact',
    name: 'ContactHg',
    component: () => import('../views/ContactHgView.vue'),
    meta: {
      title: '문의하기 | CubixAI',
      description:
        'CubixAI에 문의하세요. ChatU 기업용 대형 언어 모델 플랫폼, AgentStation AI 워크스테이션, OPC Hub 및 AI 교육 서비스에 대해 상담해 드립니다.',
      schema: {
        '@type': 'ContactPage',
        name: '문의하기',
        description: 'CubixAI에 문의하세요.',
        url: `${SITE_ORIGIN}/hg/contact`,
      },
    },
  },
  {
    path: '/opc-hub',
    name: 'OPCHub',
    component: () => import('../views/OPCHubView.vue'),
    meta: {
      title: 'OPC Hub 园区算力生态 | 软积木 CubixAI',
      description:
        'OPC Hub 是软积木打造的园区算力生态与 AI 产业孵化平台，整合算力调度、课程培训、线下活动与创业导师资源。',
      schema: {
        '@type': 'Service',
        name: 'OPC Hub 园区算力生态',
        description:
          'OPC Hub 是软积木打造的园区算力生态与 AI 产业孵化平台，整合算力调度、课程培训、线下活动与创业导师资源。',
        provider: { '@type': 'Organization', name: '软积木（北京）科技有限公司' },
        areaServed: 'CN',
        url: `${SITE_ORIGIN}/opc-hub`,
      },
    },
  },
  {
    path: '/training',
    name: 'Training',
    component: () => import('../views/TrainingView.vue'),
    meta: {
      title: 'AI 培训与认证 | 软积木 CubixAI',
      description:
        '软积木提供企业 AI 内训、个人 AI 进阶课程与 OPC 认证体系，帮助企业与个人掌握大模型、AI Agent 等前沿技术落地能力。',
      schema: {
        '@type': 'Service',
        name: 'AI 培训与认证',
        description:
          '软积木提供企业 AI 内训、个人 AI 进阶课程与 OPC 认证体系，帮助企业与个人掌握大模型、AI Agent 等前沿技术。',
        provider: { '@type': 'Organization', name: '软积木（北京）科技有限公司' },
        areaServed: 'CN',
        url: `${SITE_ORIGIN}/training`,
      },
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    // 支持 /#paid-insights 之类的锚点定位，预留固定头部高度
    if (to.hash) return { el: to.hash, top: 96, behavior: 'smooth' }
    return { top: 0 }
  },
  routes,
})

/**
 * 更新或创建 <meta> 标签
 */
function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/**
 * 更新或创建 <link rel="canonical">
 */
function setCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * 更新或创建 JSON-LD 结构化数据
 */
function setJsonLd(data: Record<string, any>) {
  let el = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement | null
  if (!el) {
    el = document.createElement('script')
    el.setAttribute('type', 'application/ld+json')
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data, null, 2)
}

/**
 * 构建当前页面的 JSON-LD：始终包含 Organization，再叠加当前页面 schema
 */
function buildJsonLd(routeSchema: Record<string, any> | Record<string, any>[] | undefined) {
  const graph: Record<string, any>[] = [organizationSchema]

  if (routeSchema) {
    if (Array.isArray(routeSchema)) {
      graph.push(...routeSchema)
    } else {
      graph.push(routeSchema)
    }
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  }
}

/**
 * 路由切换后统一更新 SEO 标签
 */
function updateSeo(to: RouteLocationNormalized) {
  const meta = to.meta
  const title = meta.title || defaultSeo.title
  const description = meta.description || defaultSeo.description
  const ogTitle = meta.ogTitle || title
  const ogDescription = meta.ogDescription || description
  const ogImage = meta.ogImage || defaultSeo.ogImage
  const canonical = `${SITE_ORIGIN}${to.fullPath}`

  // 基础标签
  document.title = title
  setMeta('name', 'description', description)

  // Open Graph
  setMeta('property', 'og:title', ogTitle)
  setMeta('property', 'og:description', ogDescription)
  setMeta('property', 'og:url', canonical)
  setMeta('property', 'og:image', ogImage)

  // Twitter Card
  setMeta('name', 'twitter:title', ogTitle)
  setMeta('name', 'twitter:description', ogDescription)
  setMeta('name', 'twitter:image', ogImage)

  // Canonical
  setCanonical(canonical)

  // JSON-LD
  const jsonLd = buildJsonLd(meta.schema)
  setJsonLd(jsonLd)
}

router.afterEach((to) => {
  updateSeo(to)

  // 百度统计：SPA 路由切换后手动上报页面路径
  if (typeof _hmt !== 'undefined') {
    _hmt.push(['_trackPageview', to.fullPath])
  }
})

export default router
