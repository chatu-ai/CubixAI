import { START_LOCATION, createRouter, createWebHistory } from 'vue-router'
import type { RouteLocationNormalized, RouteMeta, RouteRecordRaw } from 'vue-router'
import i18n, { landingLocale, setLocale, type SupportedLocale } from '../i18n'
import { HREFLANG, LEGACY_REDIRECTS, SUPPORTED_LOCALES, localeFromPath, localizePath, stripLocale } from '../i18n/paths'
import { trackPageview } from '../utils/cookieConsent'

/** 非中文语言的页面标题（浏览器标签栏、分享标题），按当前语言切换 */
export type LocalizedTitles = Record<Exclude<SupportedLocale, 'zh-CN'>, string>

// 扩展 vue-router 的 RouteMeta 类型，支持 SEO 字段
declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    /** title 的英文、日文、韩文版本；单独做了各语言版本的页面（如 /en/contact）不需要 */
    titles?: LocalizedTitles
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

const defaultTitles: LocalizedTitles = {
  en: 'CubixAI | Enterprise AI Agent Platform · Bridging the Last Mile of AI Adoption',
  ja: 'CubixAI | 企業向けAIエージェントプラットフォーム · AI導入のラストマイルを解決',
  ko: 'CubixAI | 기업용 AI 에이전트 플랫폼 · AI 도입의 마지막 한 걸음을 해결',
}

/** 按当前语言选页面标题：非中文优先用该语言的标题，没有则用页面自身的标题 */
export function resolveTitle(meta: RouteMeta, locale: SupportedLocale): string {
  if (locale !== 'zh-CN') {
    const localized = meta.titles?.[locale]
    if (localized) return localized
    if (!meta.title) return defaultTitles[locale]
  }
  return meta.title || defaultSeo.title
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
      titles: {
        en: 'CubixAI | Enterprise AI Agent Platform · Bridging the Last Mile of AI Adoption',
        ja: 'CubixAI | 企業向けAIエージェントプラットフォーム · AI導入のラストマイルを解決',
        ko: 'CubixAI | 기업용 AI 에이전트 플랫폼 · AI 도입의 마지막 한 걸음을 해결',
      },
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
      titles: {
        en: 'ChatU Enterprise LLM Platform | CubixAI',
        ja: 'ChatU 企業向け大規模言語モデルプラットフォーム | CubixAI',
        ko: 'ChatU 기업용 대형 언어 모델 플랫폼 | CubixAI',
      },
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
      titles: {
        en: 'AgentStation AI Workstation | CubixAI',
        ja: 'AgentStation AIワークステーション | CubixAI',
        ko: 'AgentStation AI 워크스테이션 | CubixAI',
      },
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
      titles: {
        en: 'AI Insight | CubixAI',
        ja: 'AIインサイト | CubixAI',
        ko: 'AI 인사이트 | CubixAI',
      },
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
      titles: {
        en: 'Paid Insights · Practical Enterprise AI Playbooks | CubixAI',
        ja: '有料インサイト · 企業AI導入の実践ノウハウ | CubixAI',
        ko: '유료 인사이트 · 기업 AI 도입 실전 노하우 | CubixAI',
      },
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
      titles: {
        en: 'Paid Insights · Practical Enterprise AI Playbooks | CubixAI',
        ja: '有料インサイト · 企業AI導入の実践ノウハウ | CubixAI',
        ko: '유료 인사이트 · 기업 AI 도입 실전 노하우 | CubixAI',
      },
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
      titles: {
        en: 'Industry Solutions | CubixAI',
        ja: '業界別ソリューション | CubixAI',
        ko: '산업별 솔루션 | CubixAI',
      },
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
      titles: {
        en: 'Ecosystem Partnerships | CubixAI',
        ja: 'エコシステム | CubixAI',
        ko: '에코시스템 | CubixAI',
      },
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
      titles: {
        en: 'Case Studies | CubixAI',
        ja: '導入事例 | CubixAI',
        ko: '고객 사례 | CubixAI',
      },
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
      titles: {
        en: 'Contact Us | CubixAI',
        ja: 'お問い合わせ | CubixAI',
        ko: '문의하기 | CubixAI',
      },
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
    path: '/ja/contact',
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
        url: `${SITE_ORIGIN}/ja/contact`,
      },
    },
  },
  {
    path: '/ko/contact',
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
        url: `${SITE_ORIGIN}/ko/contact`,
      },
    },
  },
  {
    path: '/opc-hub',
    name: 'OPCHub',
    component: () => import('../views/OPCHubView.vue'),
    meta: {
      title: 'OPC Hub 园区算力生态 | 软积木 CubixAI',
      titles: {
        en: 'OPC Hub · Campus AI Computing Ecosystem | CubixAI',
        ja: 'OPC Hub · 園区AIコンピューティング・エコシステム | CubixAI',
        ko: 'OPC Hub · 단지형 AI 컴퓨팅 생태계 | CubixAI',
      },
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
    path: '/privacy',
    name: 'Privacy',
    component: () => import('../views/PrivacyView.vue'),
    meta: {
      title: '隐私政策 | 软积木 CubixAI',
      titles: {
        en: 'Privacy Policy | CubixAI',
        ja: 'プライバシーポリシー | CubixAI',
        ko: '개인정보 처리방침 | CubixAI',
      },
      description: '软积木 CubixAI 网站隐私政策：我们收集哪些信息、如何使用 Cookie，以及您享有的权利和选择。',
      schema: {
        '@type': 'WebPage',
        name: '隐私政策',
        url: `${SITE_ORIGIN}/privacy`,
      },
    },
  },
  {
    path: '/training',
    name: 'Training',
    component: () => import('../views/TrainingView.vue'),
    meta: {
      title: 'AI 培训与认证 | 软积木 CubixAI',
      titles: {
        en: 'AI Training & Certification | CubixAI',
        ja: 'AI研修・認定 | CubixAI',
        ko: 'AI 교육 및 인증 | CubixAI',
      },
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

/**
 * 多语言网址：上面每个页面（中文，不带前缀）再各生成英文 /en、日文 /ja、韩文 /ko 三个版本，组件和 SEO 信息相同，
 * 页面语言由网址决定（见下面的 beforeEach）。
 * 关于我们（/contact）的英文、日文、韩文是单独做的页面（ContactEnView 等），直接用上面定义的 /en/contact、/ja/contact、/ko/contact。
 */
const SEPARATE_LOCALE_PAGES = new Set(['ContactEn', 'ContactJp', 'ContactHg'])
const HAS_SEPARATE_LOCALE_PAGES = new Set(['Contact'])
const baseRoutes = routes.filter((r) => !SEPARATE_LOCALE_PAGES.has(String(r.name)))
const separateLocaleRoutes = routes.filter((r) => SEPARATE_LOCALE_PAGES.has(String(r.name)))
const localizedRoutes: RouteRecordRaw[] = SUPPORTED_LOCALES.filter((l) => l !== 'zh-CN').flatMap((locale) =>
  baseRoutes
    .filter((r) => !HAS_SEPARATE_LOCALE_PAGES.has(String(r.name)))
    .map((r) => ({ ...r, path: localizePath(r.path, locale), name: `${String(r.name)}-${locale}` }) as RouteRecordRaw),
)
// 以前的单语言联系页地址（/jp/contact、/hg/contact）跳到新地址
const legacyRoutes: RouteRecordRaw[] = Object.entries(LEGACY_REDIRECTS).map(([path, redirect]) => ({ path, redirect }))

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    // 换页时等旧页淡出、新页挂载后再滚动（页面切换动画约 150ms），锚点元素才存在
    const wait = to.path !== from.path ? 180 : 0
    return new Promise((resolve) => {
      setTimeout(() => {
        if (savedPosition) resolve(savedPosition)
        // 支持 /#paid-insights 之类的锚点定位，预留固定头部高度
        else if (to.hash) resolve({ el: to.hash, top: 80, behavior: 'smooth' })
        else resolve({ top: 0 })
      }, wait)
    })
  },
  routes: [...baseRoutes, ...localizedRoutes, ...separateLocaleRoutes, ...legacyRoutes],
})

// 网址决定语言：进入 /en/… 前先加载英文语言包，页面一出来就是对应语言
router.beforeEach(async (to, from) => {
  // 刚进入网站、打开的是中文网址：访客选过其他语言或浏览器是其他语言，换到对应语言的网址（只这一次）
  if (from === START_LOCATION) {
    const preferred = landingLocale(to.path)
    if (preferred !== localeFromPath(to.path)) {
      return { path: localizePath(to.path, preferred), query: to.query, hash: to.hash, replace: true }
    }
  }
  const locale = localeFromPath(to.path)
  if (i18n.global.locale.value !== locale) await setLocale(locale)
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
 * 各语言版本的互相指向（hreflang），搜索引擎据此把四个网址当成同一页面的不同语言版本
 */
function setAlternates(path: string) {
  document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove())
  const base = stripLocale(path)
  const add = (hreflang: string, href: string) => {
    const el = document.createElement('link')
    el.setAttribute('rel', 'alternate')
    el.setAttribute('hreflang', hreflang)
    el.setAttribute('href', href)
    document.head.appendChild(el)
  }
  for (const locale of SUPPORTED_LOCALES) add(HREFLANG[locale], `${SITE_ORIGIN}${localizePath(base, locale)}`)
  add('x-default', `${SITE_ORIGIN}${base}`)
}

const OG_LOCALE: Record<SupportedLocale, string> = { 'zh-CN': 'zh_CN', en: 'en_US', ja: 'ja_JP', ko: 'ko_KR' }

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
  const title = resolveTitle(meta, i18n.global.locale.value as SupportedLocale)
  const description = meta.description || defaultSeo.description
  const ogTitle = meta.ogTitle || title
  const ogDescription = meta.ogDescription || description
  const ogImage = meta.ogImage || defaultSeo.ogImage
  const canonical = `${SITE_ORIGIN}${to.path}`

  // 基础标签
  document.title = title
  setMeta('name', 'description', description)

  // Open Graph
  setMeta('property', 'og:title', ogTitle)
  setMeta('property', 'og:description', ogDescription)
  setMeta('property', 'og:url', canonical)
  setMeta('property', 'og:image', ogImage)
  setMeta('property', 'og:locale', OG_LOCALE[localeFromPath(to.path)])

  // Twitter Card
  setMeta('name', 'twitter:title', ogTitle)
  setMeta('name', 'twitter:description', ogDescription)
  setMeta('name', 'twitter:image', ogImage)

  // Canonical、各语言版本
  setCanonical(canonical)
  setAlternates(to.path)

  // JSON-LD
  const jsonLd = buildJsonLd(meta.schema)
  setJsonLd(jsonLd)
}

router.afterEach((to) => {
  updateSeo(to)

  // 百度统计：SPA 路由切换后手动上报页面路径（访客未同意或已撤回同意时不上报）
  trackPageview(to.fullPath)
})

export default router
