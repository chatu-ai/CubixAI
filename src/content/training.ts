import type { LocalizedContent } from '@/i18n/useContent'

/** 咨询培训页（/training）正文：zh 为中文原文，en 为英文译文 */
const zh = {
  hero: {
    title: '模块化 AI 实训：打通业务与营收闭环',
    subtitle: '一套为「业务落地」与「收入变现」而设计的模块化培训体系',
    stats: [
      { value: '89+', label: '核心课时' },
      { value: '6', label: '大行业纵深' },
      { value: '40+', label: '实战场景' },
      { value: '16+', label: '可选模块自由组合' },
    ],
  },
  problems: {
    title: '我们解决什么问题',
    statusHeader: '你的现状',
    solutionHeader: '我们的解法',
    rows: [
      { status: '买了AI工具，不知道业务怎么用', solution: '从赚钱场景讲起，不是从技术原理' },
      { status: '团队培训完，还是不会落地', solution: '场景驱动，40+实战案例，学完当天就能用' },
      { status: '通用课程不适用我们行业', solution: '电商/教育/医疗/金融/法律/房产，6大行业专属方案' },
      { status: '学完了，变不了现', solution: '课程体系围绕一个核心：学完就能赚钱' },
    ],
  },
  architecture: {
    title: '课程架构：积木式组合',
    subtitle1: '课程不是一条线，而是一盒积木。',
    subtitle2: '初中高三阶主线 + 6大行业纵深 + 5大前沿扩展，像搭积木一样自由组合你的学习路径。',
    cards: [
      {
        title: '三层主线',
        items: ['初级 — AI副业变现入门', '中级 — API转售、短视频矩阵、自动化工作流', '高级 — SaaS产品化、政企项目交付'],
      },
      {
        title: '六大行业纵深',
        items: ['电商', '教育', '医疗', '金融', '法律', '房产'],
      },
      {
        title: '五大前沿扩展',
        items: ['AI+创意', 'AI+数据分析', 'AI+自动化', 'AI+出海', 'AI+企业级部署'],
      },
    ],
  },
  differences: {
    title: '六大核心差异',
    pointHeader: '差异点',
    descHeader: '说明',
    rows: [
      { title: '积木式架构', desc: '自由组合学习路径，16+可选模块' },
      { title: '变现优先', desc: '5+变现路径，从副业到企业级交付' },
      { title: '先教学习法', desc: '费曼学习法×AI，掌握方法后学习提速3倍' },
      { title: '自带工具栈', desc: '配套OpenClaw AI网关、Hermes零代码助手、ChatU企业级系统' },
      { title: '场景驱动', desc: '不写小红书文案、搭智能客服、分析销售数据……每招都能直接用' },
      { title: '行业专属', desc: '6大行业合规框架+落地方案，直接对标你的业务' },
    ],
  },
  paths: {
    title: '全赛道 AI 能力进阶',
    routeLabel: '路径：',
    resultLabel: '成果：',
    items: [
      {
        role: '企业管理者',
        route: '初级模块 → 高级全修 → 对应行业 AI 专项实战课程',
        result: '6个月后：主导公司AI中台建设，团队效率提升3倍',
      },
      {
        role: '业务负责人',
        route: '初级全修 → 中级模块1-3 → 所属赛道 AI 数字化运营课',
        result: '3个月后：用AI管3家店客服+营销，人力成本省40%',
      },
      {
        role: '自由职业者/创业者',
        route: '初级全修 → 中级全修 → 垂直领域 AI 能力拓展课程',
        result: '2个月后：AI接单月入2万+，服务12个中小企业客户',
      },
    ],
  },
  formats: {
    title: '三大授课形式',
    items: [
      {
        title: '线下名师面授',
        items: [
          '行业资深导师实地驻场授课，面对面深度答疑',
          '实地案例沙盘实操，现场拆解企业真实业务难题',
          '线下圈层资源对接，同步链接同行产业人脉',
        ],
      },
      {
        title: '线上随心点播课',
        items: [
          '下单即刻解锁全量课程，无时间地点观看限制',
          '课程永久回放，可反复复盘知识点、实操步骤',
          '轻量化碎片化学习，适配通勤、间隙自主提升',
        ],
      },
      {
        title: '沉浸式互动 AI 训练营',
        items: [
          '全程助教伴学，实时答疑纠偏，杜绝自学断层',
          '阶段性实战任务输出，配套点评打磨落地能力',
          '学员社群同步交流，组队完成 AI 商业实战项目',
        ],
      },
    ],
  },
  cta: {
    title: 'AI 赋能成长，沉淀可落地的企业生产力',
    subtitle: '89+课时 · 40+实战场景 · 6大行业方向',
    tagline: '学完即用 · 用完即赚',
    button: '预约咨询 →',
  },
}

const en: typeof zh = {
  hero: {
    title: 'Practical Modular AI Training: Close the Loop from Business to Revenue',
    subtitle: 'A modular training system built for two goals: putting AI to work in your business and turning it into revenue',
    stats: [
      { value: '89+', label: 'Core Lessons' },
      { value: '6', label: 'Industry Deep Dives' },
      { value: '40+', label: 'Hands-on Scenarios' },
      { value: '16+', label: 'Mix-and-Match Modules' },
    ],
  },
  problems: {
    title: 'The Problems We Solve',
    statusHeader: 'Where You Are Now',
    solutionHeader: 'How We Solve It',
    rows: [
      {
        status: 'We bought AI tools but don\'t know how to use them in our business',
        solution: 'We start from money-making scenarios, not technical theory',
      },
      {
        status: 'Our team finished training but still can\'t put AI into practice',
        solution: 'Scenario-driven, with 40+ hands-on cases you can apply the same day',
      },
      {
        status: 'Generic courses don\'t fit our industry',
        solution: 'Dedicated programs for 6 industries: e-commerce, education, healthcare, finance, legal and real estate',
      },
      {
        status: 'We finished the course but can\'t turn it into revenue',
        solution: 'The entire curriculum is built around one goal: earning from what you learn',
      },
    ],
  },
  architecture: {
    title: 'Course Architecture: Modular Building Blocks',
    subtitle1: 'The curriculum isn\'t a single straight line. It\'s a box of building blocks.',
    subtitle2: 'Beginner, intermediate and advanced core tracks + 6 industry deep dives + 5 frontier extensions. Combine them freely to build your own learning path.',
    cards: [
      {
        title: 'Three-Tier Core Tracks',
        items: [
          'Beginner — Getting started with monetizing AI side hustles',
          'Intermediate — API reselling, short-video account networks, automated workflows',
          'Advanced — SaaS productization, government and enterprise project delivery',
        ],
      },
      {
        title: 'Six Industry Deep Dives',
        items: ['E-commerce', 'Education', 'Healthcare', 'Finance', 'Legal', 'Real Estate'],
      },
      {
        title: 'Five Frontier Extensions',
        items: ['AI + Creativity', 'AI + Data Analytics', 'AI + Automation', 'AI + Global Expansion', 'AI + Enterprise Deployment'],
      },
    ],
  },
  differences: {
    title: 'Six Key Differentiators',
    pointHeader: 'Differentiator',
    descHeader: 'Details',
    rows: [
      { title: 'Modular Architecture', desc: 'Build your own learning path from 16+ optional modules' },
      { title: 'Monetization First', desc: '5+ monetization paths, from side hustles to enterprise-grade delivery' },
      { title: 'Learning How to Learn', desc: 'The Feynman Technique × AI: master the method first and learn 3x faster' },
      {
        title: 'Built-in Tool Stack',
        desc: 'Comes with the OpenClaw AI gateway, the Hermes no-code assistant and the ChatU enterprise system',
      },
      {
        title: 'Scenario-Driven',
        desc: 'Writing RedNote (Xiaohongshu) posts, building AI customer service, analyzing sales data… every technique is ready to use',
      },
      {
        title: 'Industry-Specific',
        desc: 'Compliance frameworks and implementation plans for 6 industries, mapped directly to your business',
      },
    ],
  },
  paths: {
    title: 'AI Upskilling Paths for Every Role',
    routeLabel: 'Path: ',
    resultLabel: 'Outcome: ',
    items: [
      {
        role: 'Business Executives',
        route: 'Beginner modules → Full advanced track → Hands-on AI course for your industry',
        result: 'Within 6 months, lead your company\'s AI platform build-out and triple team efficiency',
      },
      {
        role: 'Business Leads',
        route: 'Full beginner track → Intermediate modules 1–3 → AI digital operations course for your sector',
        result: 'Within 3 months, run customer service and marketing for 3 stores with AI, cutting labor costs by 40%',
      },
      {
        role: 'Freelancers / Entrepreneurs',
        route: 'Full beginner track → Full intermediate track → AI skills extension course for your niche',
        result: 'Within 2 months, earn ¥20,000+ a month from AI client work, serving 12 SMB clients',
      },
    ],
  },
  formats: {
    title: 'Three Learning Formats',
    items: [
      {
        title: 'In-Person Classroom Sessions with Expert Mentors',
        items: [
          'Seasoned industry mentors teach on-site and answer your questions face to face, in depth',
          'Hands-on case simulations that break down real business challenges on the spot',
          'In-person networking that connects you with peers and industry contacts',
        ],
      },
      {
        title: 'On-Demand Online Courses',
        items: [
          'Unlock the full course library as soon as you enroll, and watch anytime, anywhere',
          'Lifetime replay access to review key concepts and hands-on steps as often as you like',
          'Bite-sized lessons that fit into your commute and spare moments',
        ],
      },
      {
        title: 'Immersive Interactive AI Bootcamp',
        items: [
          'Teaching assistants support you throughout, answering questions and correcting course in real time so you never get stuck',
          'Stage-by-stage hands-on assignments with feedback to sharpen your real-world skills',
          'A learner community where you team up to complete hands-on AI business projects',
        ],
      },
    ],
  },
  cta: {
    title: 'Grow with AI and Build Productivity Your Business Can Put to Work',
    subtitle: '89+\u00a0lessons · 40+\u00a0hands-on scenarios · 6\u00a0industry tracks',
    tagline: 'Apply what you learn · Earn from what you apply',
    button: 'Book a Consultation →',
  },
}

// TODO(翻译中)：日文、韩文暂用英文，翻译完成后替换为 ja / ko
const ja: typeof zh = en
const ko: typeof zh = en

export const trainingContent: LocalizedContent<typeof zh> = { zh, en, ja, ko }
