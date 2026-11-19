import type { LocalizedContent } from '@/i18n/useContent'

// ChatU 产品页（/products/chatu）正文：zh 为中文原文，en 为英文译文
const zh = {
  hero: {
    title: 'ChatU（才兔）',
    subtitle: '企业 AI 操作系统',
    desc: '多引擎、多模态、多智能体，2023 年 3 月上线至今 服务近 3000 家企业，覆盖 100+ 行业',
    chips: ['多引擎调度', '私有部署', 'Agent Store', '合规备案'],
    cta: '申请试用',
    imageAlts: ['产品前端', '中控后台', 'banner3'],
  },
  ecosystem: {
    title: '为企业打造专属的智能体平台',
    subtitle: '千余种智能体覆盖 8 大职能与业务场景',
    categories: ['行政', '销售', '教育', '科研', '市场营销', '人力资源', '财务', '政务'],
    features: [
      { title: '按岗定"体"', desc: '个性化服务' },
      { title: '跨模型协作', desc: '发挥各模型能力' },
      { title: '内容分级管理', desc: '权限分配' },
      { title: '数据安全隐私', desc: '敏感信息不泄露' },
    ],
  },
  integration: {
    title: '无缝接入，沉淀企业 AI 资产',
    subtitle: 'ChatU 开放丰富的集成能力，一键接入企业现有系统与工作流，让 AI 能力真正融入日常业务场景。',
    platforms: ['微信', '飞书', '钉钉', '企业微信', '小红书', '小程序', 'App', '邮件', '企业内部软件'],
    actionTitle: 'Action 自定义插件 —— 按需扩展，无限可能',
    actionChips: ['IOT 控制', '系统扩展', '服务定制'],
  },
  coreValue: {
    title: '三大核心价值',
    cards: [
      {
        title: '多引擎・更自由',
        points: ['沉淀 AI 资产，兼顾权限管控与高效协同', '不站队任何厂商', '按场景自动路由最优引擎'],
      },
      {
        title: '多模态 · 全能力',
        points: ['文本/图像/语音/视频统一调度', '数字人交互能力', '全场景覆盖无短板'],
      },
      {
        title: '多智能体 · 可编排',
        points: ['Workflow 可视化编排', '企业级任务流自动化', '多智能体协同作业'],
      },
    ],
  },
  engineMatrix: {
    title: '不依赖特定模型，可随心切换',
    subtitle: '对接全球 16+ 主流大模型，按场景自动路由最优引擎',
  },
  interface: {
    tabs: { frontend: '产品前端', backend: '中控后台' },
    frontend: {
      title: '应用者视角 · 快速上手',
      desc: '面向终端用户的简洁交互界面，零学习成本即刻上手。',
      features: ['多智能体调用', '多语言支持', '多模态交互', '自定义配置'],
    },
    backend: {
      title: '管理者视角 · 配置调控',
      desc: '面向管理员的全局配置中心，数据与权限一手掌控。',
      features: ['数据统计', '引擎配置', '用户权限', '充值管理'],
    },
  },
  capabilities: {
    title: '10 大 AI 能力矩阵',
    items: [
      { title: '多智能体调度', desc: '跨模型协作' },
      { title: '文本生成创作', desc: '方案/营销/代码/广告' },
      { title: '多语种互译', desc: '100+ 语种' },
      { title: '文本分类', desc: '摘要 · 改写' },
      { title: '多模态交互', desc: '图/文/音/视频' },
      { title: '文生视频/音乐', desc: 'AIGC 创作' },
      { title: '阅读理解', desc: '文件分析' },
      { title: '逻辑推理', desc: '复杂任务分解' },
      { title: '知识问答', desc: '企业知识库' },
      { title: '代码生成', desc: '自然语言驱动代码开发' },
    ],
  },
  uppt: {
    title: 'UPPT · 一键生成，重新定义 PPT 创作',
    subtitle: '从创意到成品，三步完成专业级演示文稿。',
    steps: ['生成大纲', '选择模板', '线上优化'],
    chips: ['创意大纲', '海量模板', '一键下载'],
  },
  uview: {
    title: 'UView · 数据内容可视化编辑',
    points: ['2D 图转 3D 立体展示', '数据报表智能总结', '固定格式文件自动生成'],
    chips: ['多样化展示', '动态更新', '交互性'],
  },
  workflow: {
    title: 'Workflow · 让 AI 自动完成多步骤任务',
    points: [
      '自动化流程编排，减少重复劳动',
      '多任务并行处理，提升整体效率',
      '减少人为干预，降低出错概率',
      '全流程任务跟踪，状态一目了然',
    ],
  },
  virtualHuman: {
    title: '虚拟数字人 · AI 世界的交互媒介',
    subtitle: '通过智能化交互与生成能力，优化生产要素组合。',
    imageAlt: '虚拟数字人',
    features: ['24 小时不间断服务', '智能化交互与生成', '高度适配性与灵活性', '推动行业数字化转型'],
    tags: ['构建智能对话', '文字互动问答', '语音互动问答'],
  },
  versions: {
    title: '5 大版本矩阵',
    subtitle: '覆盖企业、教育、集团、创业、物联网全场景',
    targetLabel: '面向：',
    footer: '全部版本均支持私有化部署',
    items: [
      {
        name: '旗舰版',
        badge: '企业级 AI 操作系统',
        desc: '开箱即用，可大幅度降低企业的 AI 转型成本',
        target: '中型腰部企业',
        features: ['核心能力：多模型、灵活付费、一键接入', '无需下载安装，简单配置即可使用，支持灵活拓展'],
      },
      {
        name: '教培版',
        badge: 'AI 教育实训平台',
        desc: '完善的培训服务与课程体系，培养 AI 全面人才',
        target: '学校或培训机构',
        features: ['核心角色：学员、教师、机构', '精准定位教育行业，提升整体教育管理水平'],
      },
      {
        name: 'OPC 平台版',
        badge: 'OPC 创业的 AI 基础设施',
        desc: '帮园区提高入驻企业成功率，帮 OPC 把一人公司真正跑起来',
        target: '产业园区与 OPC 创业者',
        features: ['核心能力：园区运营的智能中枢、OPC 能力的放大器、可落地的业务支撑平台'],
      },
      {
        name: '物联网版',
        badge: '从 "联网" 到 "智能协同"',
        desc: '让智能硬件 "真正聪明"，实现从 "自可控" 到 "自决策"',
        target: 'IoT 或智能硬件企业',
        features: ['核心能力：智能决策、智能硬件、多模态交互', '让每台设备都能拥有智能决策与多模态交互能力'],
      },
      {
        name: '集团版',
        badge: '总控 + 中控协同管理平台',
        desc: '优化本地算力资源，实现私有数据的高效整合与应用',
        target: '大型集团或科技园区',
        features: [
          '核心能力：系统部署、模型训练、数据训练',
          '有效管控下属多个子公司，统一指挥调度，为管理者提供实时决策支持',
        ],
      },
    ],
  },
  deployment: {
    title: '6 大部署保障',
    items: [
      { title: '源码交付', desc: '完整安全的 ChatU 源码 + 详尽文档' },
      { title: '私有部署', desc: '深入沟通业务与技术需求' },
      { title: '数据安全', desc: '本地部署 + 远程培训现场支持' },
      { title: 'Cloud 原生', desc: '架构稳定 + 国内合规' },
      { title: '技术支持', desc: '长期维护协议 + 持续服务' },
      { title: '灵活拓展', desc: '一站式解决方案' },
    ],
  },
  trust: {
    title: '权威合规资质・安全可信保障',
    filing: '大模型生成合成调度整合算法备案号：网信算备110108947947801240011号',
    certs: [
      'ISO 9001 质量管理体系认证证书',
      'ChatU CE 符合性认证证书',
      '发明专利公布',
      'ChatU 企业大模型生成合成调度整合算法备案',
      'CubixAI 大模型调度系统软著证书',
      '企业智能销售后台管理系统软著证书',
    ],
    items: [
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
    ],
  },
  compare: {
    title: '对比友商，我们的优势',
    headers: { dim: '维度', competitor: '友商特点', chatu: 'ChatU 优势' },
    competitorLabel: '友商：',
    chatuLabel: 'ChatU：',
    rows: [
      { dim: '价格', competitor: 'Claude / ChatGPT 企业版费用高', chatu: '只需 1/10 费用' },
      { dim: '门槛', competitor: '开源Agent工具要工程化能力', chatu: '真正开箱即用零门槛' },
      { dim: '场景', competitor: '通用型智能Agent产品功能发散', chatu: '更聚焦企业高频业务' },
      { dim: '模型', competitor: '大模型厂商生态封闭', chatu: '不站队 任意切换' },
      { dim: '资源', competitor: '普通服务商专家资源有限', chatu: '350 万+ 社区规模' },
      { dim: '产权', competitor: '开源方案产权风险', chatu: '可审计 可追溯 可担责' },
    ],
  },
  cases: {
    title: '客户案例精选',
    viewCase: '查看案例',
    viewAll: '查看全部案例',
    // 案例文字本身见 src/content/cases.ts（中文为 src/data/cases.ts 原始数据）
  },
  pricing: {
    title: '更灵活 · 更安全 · 更便捷',
    advantages: [
      '按需选择方案 · 无需高额一次性支付',
      '灵活控制成本 · 业务变化随时调整',
      '实时支出掌握 · 资源管理更高效',
      '无长期绑定 · 无超预算担忧',
    ],
    packTitle: '用户购买特定流量包',
    packDesc: '满足高并发 / 更低价 / 操作灵活',
    packAlt: '流量包',
    cardTitle: '定制充值卡',
    cardDesc: '按需充值 / 长期有效',
    cardAlt: '定制充值卡',
    cardFeatures: [
      // 'NFC 触碰激活，充值体验极速便捷',
      '即充即用，无需复杂申请配置',
      '卡片与权益绑定，实现安全、可追溯的资产管理',
      '自带传播属性，成为企业 AI 文化的"社交货币"',
      '支持卡片外观定制（含企业 Logo 等）；',
    ],
  },
  finalCta: {
    title: '注册 ChatU · 赠送 10000 体验点数',
    subtitle: '企业试用申请 / 中控后台体验',
    register: '立即注册',
    trial: '申请企业试用',
    wechatTitle: '关注 ChatU 公众号',
    wechatDesc: '关注公众号获取产品最新动态',
    qrAlt: 'ChatU 公众号二维码',
    scanHint: '微信扫一扫，关注 ChatU 公众号',
  },
}

const en: typeof zh = {
  hero: {
    title: 'ChatU',
    subtitle: 'Enterprise AI Operating System',
    desc: 'Multi-engine, multimodal, multi-agent. Since launching in March 2023, ChatU has served nearly 3,000 enterprises across 100+ industries.',
    chips: ['Multi-Engine Orchestration', 'On-Premises Deployment', 'Agent Store', 'Compliance Filing'],
    cta: 'Request a Trial',
    imageAlts: ['ChatU user portal', 'ChatU admin console', 'banner3'],
  },
  ecosystem: {
    title: 'A Dedicated AI Agent Platform for Your Enterprise',
    subtitle: '1,000+ AI agents covering 8 core business functions and scenarios',
    categories: ['Administration', 'Sales', 'Education', 'Research', 'Marketing', 'Human Resources', 'Finance', 'Government Affairs'],
    features: [
      { title: 'Agents by Role', desc: 'Personalized service for every position' },
      { title: 'Cross-Model Collaboration', desc: "Leverage each model's strengths" },
      { title: 'Tiered Content Management', desc: 'Granular permission control' },
      { title: 'Data Security & Privacy', desc: 'Sensitive information stays protected' },
    ],
  },
  integration: {
    title: 'Seamless Integration, Lasting Enterprise AI Assets',
    subtitle: 'ChatU offers rich integration capabilities, connecting to your existing systems and workflows in one click so AI becomes part of everyday business.',
    platforms: ['WeChat', 'Feishu (Lark)', 'DingTalk', 'WeCom', 'Xiaohongshu', 'Mini Program', 'App', 'Email', 'In-House Software'],
    actionTitle: 'Action custom plugins — extend on demand, with endless possibilities',
    actionChips: ['IoT Control', 'System Extensions', 'Custom Services'],
  },
  coreValue: {
    title: 'Three Core Values',
    cards: [
      {
        title: 'Multi-Engine · More Freedom',
        points: [
          'Build up AI assets with both access control and efficient collaboration',
          'Vendor-neutral: no lock-in to any provider',
          'Automatically routes each scenario to the best engine',
        ],
      },
      {
        title: 'Multimodal · Full Capability',
        points: [
          'Unified orchestration of text, image, voice and video',
          'Digital human interaction',
          'Covers every scenario with no weak spots',
        ],
      },
      {
        title: 'Multi-Agent · Orchestrable',
        points: ['Visual Workflow orchestration', 'Enterprise-grade task flow automation', 'Multi-agent collaboration'],
      },
    ],
  },
  engineMatrix: {
    title: 'Not Tied to Any Model, Switch Freely',
    subtitle: 'Connects to 16+ leading large models worldwide and automatically routes each scenario to the best engine',
  },
  interface: {
    tabs: { frontend: 'User Portal', backend: 'Admin Console' },
    frontend: {
      title: 'User View · Get Started Fast',
      desc: 'A clean interface for end users, with zero learning curve.',
      features: ['Multi-agent access', 'Multilingual support', 'Multimodal interaction', 'Custom configuration'],
    },
    backend: {
      title: 'Admin View · Configure & Control',
      desc: 'A global configuration center for administrators, with full control over data and permissions.',
      features: ['Usage analytics', 'Engine configuration', 'User permissions', 'Top-up management'],
    },
  },
  capabilities: {
    title: '10 Core AI Capabilities',
    items: [
      { title: 'Multi-Agent Orchestration', desc: 'Cross-model collaboration' },
      { title: 'Text Generation', desc: 'Proposals, marketing, code, ads' },
      { title: 'Translation', desc: '100+ languages' },
      { title: 'Text Classification', desc: 'Summarize · Rewrite' },
      { title: 'Multimodal Interaction', desc: 'Image, text, audio, video' },
      { title: 'Text to Video/Music', desc: 'AIGC creation' },
      { title: 'Reading Comprehension', desc: 'Document analysis' },
      { title: 'Logical Reasoning', desc: 'Complex task breakdown' },
      { title: 'Knowledge Q&A', desc: 'Enterprise knowledge base' },
      { title: 'Code Generation', desc: 'Natural-language-driven development' },
    ],
  },
  uppt: {
    title: 'UPPT · One-Click Generation, Redefining Slide Creation',
    subtitle: 'From idea to finished deck, create professional presentations in three steps.',
    steps: ['Generate an outline', 'Choose a template', 'Refine online'],
    chips: ['Creative Outlines', 'Huge Template Library', 'One-Click Download'],
  },
  uview: {
    title: 'UView · Visual Editing for Data Content',
    points: ['Turn 2D images into 3D displays', 'Smart summaries of data reports', 'Automatic generation of fixed-format documents'],
    chips: ['Diverse Displays', 'Dynamic Updates', 'Interactive'],
  },
  workflow: {
    title: 'Workflow · Let AI Complete Multi-Step Tasks Automatically',
    points: [
      'Automated process orchestration that cuts repetitive work',
      'Parallel multi-task processing for higher overall efficiency',
      'Less manual intervention, fewer errors',
      'End-to-end task tracking with status at a glance',
    ],
  },
  virtualHuman: {
    // \u00a0 keeps the "·" from starting a new line on narrow screens
    title: 'Virtual Digital Humans\u00a0· The Interface to the AI World',
    subtitle: 'Intelligent interaction and generation that optimize how your resources work together.',
    imageAlt: 'Virtual digital human',
    features: ['24/7 uninterrupted service', 'Intelligent interaction & generation', 'Highly adaptable and flexible', 'Drives industry digital transformation'],
    tags: ['Build intelligent conversations', 'Text-based Q&A', 'Voice-based Q&A'],
  },
  versions: {
    title: '5 Product Editions',
    subtitle: 'Covering enterprise, education, corporate group, startup and IoT scenarios',
    targetLabel: 'For: ',
    footer: 'All editions support on-premises deployment',
    items: [
      {
        name: 'Flagship Edition',
        badge: 'Enterprise-grade AI operating system',
        desc: 'Ready out of the box, dramatically lowering the cost of AI transformation',
        target: 'Mid-sized enterprises',
        features: [
          'Core capabilities: multiple models, flexible billing, one-click access',
          'No download or installation; simple setup, flexible expansion',
        ],
      },
      {
        name: 'Education Edition',
        badge: 'AI education and hands-on training platform',
        desc: 'Complete training services and curricula to develop well-rounded AI talent',
        target: 'Schools and training institutions',
        features: [
          'Core roles: students, teachers, institutions',
          'Built for the education sector, raising the overall level of education management',
        ],
      },
      {
        name: 'OPC Platform Edition',
        badge: 'AI infrastructure for OPC entrepreneurs',
        desc: 'Helps industrial parks raise tenant success rates and helps one-person companies (OPCs) truly get up and running',
        target: 'Industrial parks and OPC founders',
        features: [
          'Core capabilities: an intelligent hub for park operations, an amplifier for OPC capabilities, and a practical business support platform',
        ],
      },
      {
        name: 'IoT Edition',
        badge: 'From "connected" to "intelligently coordinated"',
        desc: 'Makes smart hardware "truly smart", moving from "self-controlled" to "self-deciding"',
        target: 'IoT and smart hardware companies',
        features: [
          'Core capabilities: intelligent decision-making, smart hardware, multimodal interaction',
          'Gives every device intelligent decision-making and multimodal interaction',
        ],
      },
      {
        name: 'Group Edition',
        badge: 'Collaborative HQ + subsidiary control platform',
        desc: 'Optimizes on-premises compute and efficiently integrates and applies private data',
        target: 'Large corporate groups and tech parks',
        features: [
          'Core capabilities: system deployment, model training, data training',
          'Effectively manage multiple subsidiaries with unified command and dispatch, giving leadership real-time decision support',
        ],
      },
    ],
  },
  deployment: {
    title: '6 Deployment Guarantees',
    items: [
      { title: 'Source Code Delivery', desc: 'Complete, secure ChatU source code + detailed documentation' },
      { title: 'On-Premises Deployment', desc: 'In-depth consultation on business and technical needs' },
      { title: 'Data Security', desc: 'Local deployment + remote training and on-site support' },
      { title: 'Cloud Native', desc: 'Stable architecture + compliance in China' },
      { title: 'Technical Support', desc: 'Long-term maintenance agreement + ongoing service' },
      { title: 'Flexible Expansion', desc: 'One-stop solution' },
    ],
  },
  trust: {
    title: 'Authoritative Compliance Credentials · Secure and Trustworthy',
    filing: 'Algorithm filing no. (Cyberspace Administration of China) for large model generation, synthesis and orchestration: 110108947947801240011',
    certs: [
      'ISO 9001 Quality Management System Certificate',
      'ChatU CE Certificate of Conformity',
      'Invention Patent Publication',
      'ChatU Enterprise Large Model Generation & Orchestration Algorithm Filing',
      'CubixAI Large Model Orchestration System Software Copyright Certificate',
      'Enterprise Intelligent Sales Management System Software Copyright Certificate',
    ],
    items: [
      {
        title: 'Filed and Fully Compliant',
        desc: 'Complies with the regulations of the Cyberspace Administration of China (CAC), the Ministry of Industry and Information Technology (MIIT), and the Internet information service algorithm filing system.',
      },
      {
        title: 'Clear, Traceable and Accountable IP',
        desc: 'The latest keyword-filtering algorithms keep generated content lawful and compliant, with text and image review and user agreements that meet national standards.',
      },
      {
        title: 'Closed Source Means "Controllable", Not "Closed Off"',
        desc: 'Self-developed core architecture that meets Chinese regulatory requirements: stable, with no usage restrictions in China.',
      },
    ],
  },
  compare: {
    title: 'How ChatU Compares',
    headers: { dim: 'Criteria', competitor: 'Competitors', chatu: 'ChatU Advantage' },
    competitorLabel: 'Competitors: ',
    chatuLabel: 'ChatU: ',
    rows: [
      { dim: 'Price', competitor: 'Claude / ChatGPT enterprise plans are costly', chatu: 'Just 1/10 of the cost' },
      { dim: 'Ease of Use', competitor: 'Open-source agent tools require engineering skills', chatu: 'Truly out of the box, zero barrier to entry' },
      { dim: 'Focus', competitor: 'General-purpose agent products lack focus', chatu: 'Focused on high-frequency enterprise tasks' },
      { dim: 'Models', competitor: 'Large model vendors run closed ecosystems', chatu: 'Vendor-neutral, switch freely' },
      { dim: 'Resources', competitor: 'Typical service providers have limited expert resources', chatu: '3.5M+ community members' },
      { dim: 'IP', competitor: 'Open-source solutions carry IP risks', chatu: 'Auditable, traceable, accountable' },
    ],
  },
  cases: {
    title: 'Featured Case Studies',
    viewCase: 'View Case',
    viewAll: 'View All Cases',
  },
  pricing: {
    title: 'Flexible · Secure · Convenient',
    advantages: [
      'Choose plans as needed · No large upfront payment',
      'Flexible cost control · Adjust anytime as your business changes',
      'Real-time spending visibility · More efficient resource management',
      'No long-term lock-in · No worries about going over budget',
    ],
    packTitle: 'Purchase Dedicated Usage Packs',
    packDesc: 'High concurrency / Lower prices / Flexible operation',
    packAlt: 'Usage pack',
    cardTitle: 'Custom Prepaid Cards',
    cardDesc: 'Top up as needed / Long-term validity',
    cardAlt: 'Custom prepaid card',
    cardFeatures: [
      'Ready to use once topped up, with no complex application or setup',
      'Cards are bound to entitlements for secure, traceable asset management',
      'Built to be shared, becoming the "social currency" of your company\'s AI culture',
      'Custom card designs available (including your company logo, etc.)',
    ],
  },
  finalCta: {
    title: 'Sign Up for ChatU · Get 10,000 Free Trial Credits',
    subtitle: 'Apply for an enterprise trial / Try the admin console',
    register: 'Sign Up Now',
    trial: 'Request an Enterprise Trial',
    wechatTitle: 'Follow ChatU on WeChat',
    wechatDesc: 'Follow our WeChat Official Account for the latest product news',
    qrAlt: 'ChatU WeChat Official Account QR code',
    scanHint: 'Scan with WeChat to follow the ChatU Official Account',
  },
}

export const chatuContent: LocalizedContent<typeof zh> = { zh, en }
