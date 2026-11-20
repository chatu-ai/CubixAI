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
        title: '多智能体\u00A0· 可编排',
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
    title: '更灵活\u00A0· 更安全\u00A0· 更便捷',
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
    title: '注册 ChatU\u00A0· 赠送 10000 体验点数',
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
        title: 'Multi-Agent\u00A0· Orchestrable',
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
    title: 'Flexible\u00A0· Secure\u00A0· Convenient',
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
    title: 'Sign Up for ChatU\u00A0· Get 10,000 Free Trial Credits',
    subtitle: 'Apply for an enterprise trial / Try the admin console',
    register: 'Sign Up Now',
    trial: 'Request an Enterprise Trial',
    wechatTitle: 'Follow ChatU on WeChat',
    wechatDesc: 'Follow our WeChat Official Account for the latest product news',
    qrAlt: 'ChatU WeChat Official Account QR code',
    scanHint: 'Scan with WeChat to follow the ChatU Official Account',
  },
}

const ja: typeof zh = {
  hero: {
    title: 'ChatU',
    subtitle: '企業AIオペレーティングシステム',
    desc: 'マルチエンジン、マルチモーダル、マルチエージェント。2023年3月のリリース以来、100以上の業界で約3,000社の企業にご利用いただいています。',
    chips: ['マルチエンジン制御', 'オンプレミス展開', 'Agent Store', 'コンプライアンス届出'],
    cta: 'トライアルを申し込む',
    imageAlts: ['ChatU ユーザーポータル', 'ChatU 管理コンソール', 'banner3'],
  },
  ecosystem: {
    title: '企業専用のAIエージェントプラットフォームを構築',
    subtitle: '1,000種類以上のAIエージェントが、8つの主要業務領域とシナリオをカバー',
    categories: ['総務', '営業', '教育', '研究', 'マーケティング', '人事', '財務', '行政'],
    features: [
      { title: '職種別エージェント', desc: '職種ごとに最適化したサービス' },
      { title: 'モデル横断の連携', desc: '各モデルの強みを活用' },
      { title: 'コンテンツの階層管理', desc: 'きめ細かな権限管理' },
      { title: 'データセキュリティとプライバシー', desc: '機密情報をしっかり保護' },
    ],
  },
  integration: {
    title: 'シームレスな連携で、企業のAI資産を蓄積',
    subtitle: 'ChatUは豊富な連携機能を備え、既存のシステムやワークフローにワンクリックで接続できます。AIを日々の業務に無理なく組み込めます。',
    platforms: ['WeChat', 'Feishu（Lark）', 'DingTalk', 'WeCom', 'Xiaohongshu', 'ミニプログラム', 'アプリ', 'メール', '社内システム'],
    actionTitle: 'Actionカスタムプラグイン — 必要に応じて拡張でき、可能性は無限大',
    actionChips: ['IoT制御', 'システム拡張', 'カスタムサービス'],
  },
  coreValue: {
    title: '3つのコアバリュー',
    cards: [
      {
        title: 'マルチエンジン · より自由に',
        points: [
          'AI資産を蓄積し、権限管理と効率的な協働を両立',
          '特定のベンダーに依存しない中立設計',
          'シナリオごとに最適なエンジンへ自動ルーティング',
        ],
      },
      {
        title: 'マルチモーダル · フル機能',
        points: [
          'テキスト・画像・音声・動画を一元的に制御',
          'デジタルヒューマンによる対話',
          'あらゆるシーンを死角なくカバー',
        ],
      },
      {
        title: 'マルチエージェント · 自在に編成',
        points: ['Workflowのビジュアル編成', 'エンタープライズ級のタスクフロー自動化', '複数エージェントによる協調作業'],
      },
    ],
  },
  engineMatrix: {
    title: '特定のモデルに縛られず、自由に切り替え',
    subtitle: '世界の主要な大規模モデル16種類以上に対応し、シナリオごとに最適なエンジンへ自動ルーティング',
  },
  interface: {
    tabs: { frontend: 'ユーザーポータル', backend: '管理コンソール' },
    frontend: {
      title: 'ユーザー視点 · すぐに使いこなせる',
      desc: 'エンドユーザー向けのシンプルな画面で、学習コストなしですぐに使い始められます。',
      features: ['マルチエージェント呼び出し', '多言語対応', 'マルチモーダル対話', 'カスタム設定'],
    },
    backend: {
      title: '管理者視点 · 設定と管理',
      desc: '管理者向けのグローバル設定センターで、データと権限を一元管理できます。',
      features: ['利用状況の分析', 'エンジン設定', 'ユーザー権限', 'チャージ管理'],
    },
  },
  capabilities: {
    title: '10のコアAI機能',
    items: [
      { title: 'マルチエージェント制御', desc: 'モデル横断の連携' },
      { title: 'テキスト生成', desc: '企画書・マーケティング・コード・広告' },
      { title: '多言語翻訳', desc: '100以上の言語' },
      { title: 'テキスト分類', desc: '要約 · リライト' },
      { title: 'マルチモーダル対話', desc: '画像・テキスト・音声・動画' },
      { title: 'テキストから動画/音楽', desc: '生成AIによる制作' },
      { title: '文章読解', desc: '文書分析' },
      { title: '論理推論', desc: '複雑なタスクを分解' },
      { title: 'ナレッジQ&A', desc: '企業ナレッジベース' },
      { title: 'コード生成', desc: '自然言語による開発' },
    ],
  },
  uppt: {
    title: 'UPPT · ワンクリック生成で、スライド作成を再定義',
    subtitle: 'アイデアから完成まで、3ステップでプロ品質のプレゼン資料を作成できます。',
    steps: ['アウトライン生成', 'テンプレート選択', 'オンラインで仕上げ'],
    chips: ['クリエイティブなアウトライン', '豊富なテンプレート', 'ワンクリックでダウンロード'],
  },
  uview: {
    title: 'UView · データコンテンツをビジュアル編集',
    points: ['2D画像を3D表示に変換', 'データレポートをスマートに要約', '定型フォーマットの文書を自動生成'],
    chips: ['多彩な表示形式', '動的な更新', 'インタラクティブ'],
  },
  workflow: {
    title: 'Workflow · 複数ステップのタスクをAIが自動で完了',
    points: [
      'プロセスを自動で編成し、繰り返し作業を削減',
      '複数タスクの並列処理で、全体の効率を向上',
      '人手による介入を減らし、ミスを低減',
      'タスクを一貫して追跡し、状況をひと目で把握',
    ],
  },
  virtualHuman: {
    title: 'デジタルヒューマン · AIの世界とつながるインターフェース',
    subtitle: 'インテリジェントな対話・生成能力によって、経営資源の組み合わせを最適化します。',
    imageAlt: 'デジタルヒューマン',
    features: ['24時間365日ノンストップ対応', 'インテリジェントな対話と生成', '高い適応性と柔軟性', '業界のDXを推進'],
    tags: ['インテリジェントな対話を構築', 'テキストでのQ&A', '音声でのQ&A'],
  },
  versions: {
    title: '5つのエディション',
    subtitle: '企業・教育・企業グループ・スタートアップ・IoTのあらゆるシーンに対応',
    targetLabel: '対象：',
    footer: '全エディションでオンプレミス展開に対応',
    items: [
      {
        name: 'フラッグシップ版',
        badge: '企業向けAIオペレーティングシステム',
        desc: 'すぐに使えて、AI変革のコストを大幅に削減',
        target: '中堅企業',
        features: [
          'コア機能：マルチモデル、柔軟な課金、ワンクリック接続',
          'ダウンロードやインストールは不要。簡単な設定ですぐに使え、柔軟に拡張可能',
        ],
      },
      {
        name: '教育版',
        badge: 'AI教育・実践トレーニングプラットフォーム',
        desc: '充実したトレーニングサービスとカリキュラムで、総合力のあるAI人材を育成',
        target: '学校・研修機関',
        features: [
          '主なロール：受講者、講師、運営機関',
          '教育分野に特化し、教育マネジメント全体の水準を向上',
        ],
      },
      {
        name: 'OPCプラットフォーム版',
        badge: 'OPC起業家のためのAIインフラ',
        desc: '産業パークの入居企業の成功率を高め、一人会社（OPC）が本格的に軌道に乗るよう支援',
        target: '産業パーク・OPC起業家',
        features: [
          'コア機能：パーク運営のインテリジェントハブ、OPCの力を増幅するエンジン、実務に根ざした事業支援プラットフォーム',
        ],
      },
      {
        name: 'IoT版',
        badge: '「接続」から「インテリジェントな連携」へ',
        desc: 'スマートハードウェアを「本当に賢く」し、「自己制御」から「自己判断」へと進化',
        target: 'IoT・スマートハードウェア企業',
        features: [
          'コア機能：インテリジェントな意思決定、スマートハードウェア、マルチモーダル対話',
          'すべてのデバイスに、インテリジェントな意思決定とマルチモーダル対話の能力を',
        ],
      },
      {
        name: 'グループ版',
        badge: '本社・子会社を連携させる統括管理プラットフォーム',
        desc: 'オンプレミスの計算資源を最適化し、プライベートデータを効率よく統合・活用',
        target: '大手企業グループ・テクノロジーパーク',
        features: [
          'コア機能：システム導入、モデルトレーニング、データトレーニング',
          '複数の子会社を効果的に管理し、統一的な指揮・配分によって経営層のリアルタイムな意思決定を支援',
        ],
      },
    ],
  },
  deployment: {
    title: '6つの導入保証',
    items: [
      { title: 'ソースコード提供', desc: '安全で完全なChatUソースコード＋詳細なドキュメント' },
      { title: 'オンプレミス展開', desc: 'ビジネス・技術要件を丁寧にヒアリング' },
      { title: 'データセキュリティ', desc: 'ローカル導入＋リモート研修・現地サポート' },
      { title: 'クラウドネイティブ', desc: '安定したアーキテクチャ＋中国国内の法令に準拠' },
      { title: '技術サポート', desc: '長期保守契約＋継続的なサービス' },
      { title: '柔軟な拡張', desc: 'ワンストップソリューション' },
    ],
  },
  trust: {
    title: '確かなコンプライアンス認証 · 安全で信頼できる体制',
    filing: '大規模モデルの生成・合成・統合制御アルゴリズム届出番号（中国国家インターネット情報弁公室）：110108947947801240011',
    certs: [
      'ISO 9001 品質マネジメントシステム認証書',
      'ChatU CE適合性証明書',
      '特許出願公開',
      'ChatU 企業向け大規模モデル生成・統合制御アルゴリズム届出',
      'CubixAI 大規模モデル統合制御システム ソフトウェア著作権登録証書',
      '企業向けインテリジェント営業管理システム ソフトウェア著作権登録証書',
    ],
    items: [
      {
        title: '届出済み・法令に完全準拠',
        desc: '中国国家インターネット情報弁公室（CAC）、工業・情報化部（MIIT）、およびインターネット情報サービスのアルゴリズム届出システムの規定に準拠しています。',
      },
      {
        title: '明確で追跡可能、責任の所在が明らかな知的財産',
        desc: '最新のキーワードフィルタリングアルゴリズムにより、生成コンテンツの適法性とコンプライアンスを確保しています。テキスト・画像の審査や利用規約も国の基準に適合しています。',
      },
      {
        title: 'クローズドソースは「閉鎖的」ではなく「制御可能」',
        desc: '自社開発のコアアーキテクチャは中国の規制要件に適合しています。安定性が高く、中国国内で制限なくご利用いただけます。',
      },
    ],
  },
  compare: {
    title: 'ChatUと他社製品の比較',
    headers: { dim: '比較項目', competitor: '他社製品', chatu: 'ChatUの強み' },
    competitorLabel: '他社：',
    chatuLabel: 'ChatU：',
    rows: [
      { dim: '価格', competitor: 'Claude / ChatGPTの法人向けプランは高額', chatu: 'コストはわずか1/10' },
      { dim: '使いやすさ', competitor: 'オープンソースのエージェントツールはエンジニアリングスキルが必要', chatu: 'すぐに使えて、導入のハードルはゼロ' },
      { dim: '用途', competitor: '汎用エージェント製品は機能が散漫になりがち', chatu: '企業の高頻度業務に特化' },
      { dim: 'モデル', competitor: '大規模モデルベンダーのエコシステムは閉鎖的', chatu: 'ベンダー中立で自由に切り替え' },
      { dim: 'リソース', competitor: '一般的なサービス事業者は専門家リソースが限られる', chatu: '3.5M+のコミュニティメンバー' },
      { dim: '知的財産', competitor: 'オープンソースのソリューションには知財リスクがある', chatu: '監査可能・追跡可能・責任の明確化' },
    ],
  },
  cases: {
    title: '注目の導入事例',
    viewCase: '事例を見る',
    viewAll: 'すべての事例を見る',
  },
  pricing: {
    title: 'より柔軟 · より安全 · より便利',
    advantages: [
      '必要に応じてプランを選択 · 高額な初期費用は不要',
      '柔軟なコスト管理 · ビジネスの変化に合わせていつでも調整',
      '支出をリアルタイムで把握 · リソースをより効率的に管理',
      '長期契約の縛りなし · 予算超過の心配なし',
    ],
    packTitle: '専用の利用パックを購入',
    packDesc: '高い同時処理性能 / 低価格 / 柔軟な運用',
    packAlt: '利用パック',
    cardTitle: 'カスタムプリペイドカード',
    cardDesc: '必要な分だけチャージ / 長期間有効',
    cardAlt: 'カスタムプリペイドカード',
    cardFeatures: [
      'チャージ後すぐに利用可能。面倒な申請や設定は不要',
      'カードと利用権をひも付け、安全で追跡可能な資産管理を実現',
      'シェアしやすく、企業のAIカルチャーを広める「ソーシャル通貨」に',
      'カードデザインのカスタマイズに対応（企業ロゴなど）',
    ],
  },
  finalCta: {
    title: 'ChatUに登録 · 10,000トライアルクレジットを無料プレゼント',
    subtitle: '企業トライアルのお申し込み / 管理コンソールの体験',
    register: '今すぐ登録',
    trial: '企業トライアルを申し込む',
    wechatTitle: 'WeChatでChatUをフォロー',
    wechatDesc: 'WeChat公式アカウントで最新の製品情報をお届けします',
    qrAlt: 'ChatU WeChat公式アカウントのQRコード',
    scanHint: 'WeChatでスキャンしてChatU公式アカウントをフォロー',
  },
}

const ko: typeof zh = {
  hero: {
    title: 'ChatU',
    subtitle: '기업 AI 운영체제',
    desc: '멀티엔진, 멀티모달, 멀티에이전트. 2023년 3월 출시 이후 100개 이상 산업의 약 3,000개 기업에 서비스를 제공하고 있습니다.',
    chips: ['멀티엔진 오케스트레이션', '온프레미스 배포', 'Agent Store', '컴플라이언스 등록'],
    cta: '체험 신청',
    imageAlts: ['ChatU 사용자 포털', 'ChatU 관리자 콘솔', 'banner3'],
  },
  ecosystem: {
    title: '기업 전용 AI 에이전트 플랫폼',
    subtitle: '1,000개 이상의 AI 에이전트로 8대 핵심 업무 기능과 시나리오를 커버',
    categories: ['총무', '영업', '교육', '연구', '마케팅', '인사', '재무', '공공 행정'],
    features: [
      { title: '직무별 에이전트', desc: '직무마다 맞춘 개인화 서비스' },
      { title: '크로스 모델 협업', desc: '각 모델의 강점을 활용' },
      { title: '콘텐츠 등급별 관리', desc: '세분화된 권한 제어' },
      { title: '데이터 보안 및 프라이버시', desc: '민감 정보를 안전하게 보호' },
    ],
  },
  integration: {
    title: '원활한 연동으로 기업 AI 자산을 축적',
    subtitle: 'ChatU는 풍부한 연동 기능을 제공해 기존 시스템과 워크플로우에 원클릭으로 연결되며, AI를 일상 업무에 자연스럽게 녹여냅니다.',
    platforms: ['WeChat', 'Feishu (Lark)', 'DingTalk', 'WeCom', 'Xiaohongshu', '미니 프로그램', '앱', '이메일', '사내 소프트웨어'],
    actionTitle: 'Action 커스텀 플러그인 — 필요에 따라 확장, 무한한 가능성',
    actionChips: ['IoT 제어', '시스템 확장', '맞춤형 서비스'],
  },
  coreValue: {
    title: '3대 핵심 가치',
    cards: [
      {
        title: '멀티엔진 · 더 자유롭게',
        points: [
          'AI 자산을 축적하면서 권한 관리와 효율적인 협업을 동시에 실현',
          '벤더 중립: 특정 공급업체에 종속되지 않음',
          '시나리오별로 최적의 엔진에 자동 라우팅',
        ],
      },
      {
        title: '멀티모달 · 모든 역량',
        points: [
          '텍스트, 이미지, 음성, 영상의 통합 오케스트레이션',
          '디지털 휴먼 인터랙션',
          '빈틈없이 모든 시나리오를 커버',
        ],
      },
      {
        title: '멀티에이전트 · 오케스트레이션 가능',
        points: ['시각적 Workflow 오케스트레이션', '엔터프라이즈급 작업 흐름 자동화', '멀티에이전트 협업'],
      },
    ],
  },
  engineMatrix: {
    title: '특정 모델에 종속되지 않고 자유롭게 전환',
    subtitle: '전 세계 16개 이상의 주요 대규모 모델과 연결되며, 시나리오별로 최적의 엔진에 자동 라우팅',
  },
  interface: {
    tabs: { frontend: '사용자 포털', backend: '관리자 콘솔' },
    frontend: {
      title: '사용자 관점 · 빠른 시작',
      desc: '최종 사용자를 위한 깔끔한 인터페이스로, 별도 학습 없이 바로 사용할 수 있습니다.',
      features: ['멀티에이전트 호출', '다국어 지원', '멀티모달 인터랙션', '사용자 정의 설정'],
    },
    backend: {
      title: '관리자 관점 · 설정 및 제어',
      desc: '관리자를 위한 통합 설정 센터로, 데이터와 권한을 완벽하게 관리할 수 있습니다.',
      features: ['사용 현황 분석', '엔진 설정', '사용자 권한', '충전 관리'],
    },
  },
  capabilities: {
    title: '10대 핵심 AI 역량',
    items: [
      { title: '멀티에이전트 오케스트레이션', desc: '크로스 모델 협업' },
      { title: '텍스트 생성', desc: '기획안, 마케팅, 코드, 광고' },
      { title: '번역', desc: '100개 이상 언어' },
      { title: '텍스트 분류', desc: '요약 · 재작성' },
      { title: '멀티모달 인터랙션', desc: '이미지, 텍스트, 오디오, 영상' },
      { title: '텍스트로 영상/음악 생성', desc: '생성형 AI 창작' },
      { title: '독해', desc: '문서 분석' },
      { title: '논리 추론', desc: '복잡한 작업 분해' },
      { title: '지식 Q&A', desc: '기업 지식베이스' },
      { title: '코드 생성', desc: '자연어 기반 개발' },
    ],
  },
  uppt: {
    title: 'UPPT · 원클릭 생성으로 슬라이드 제작을 새롭게',
    subtitle: '아이디어부터 완성까지, 세 단계로 전문가 수준의 프레젠테이션을 만들 수 있습니다.',
    steps: ['개요 생성', '템플릿 선택', '온라인 다듬기'],
    chips: ['창의적인 개요', '방대한 템플릿', '원클릭 다운로드'],
  },
  uview: {
    title: 'UView · 데이터 콘텐츠 시각적 편집',
    points: ['2D 이미지를 3D 입체 화면으로 변환', '데이터 리포트 스마트 요약', '정형 문서 자동 생성'],
    chips: ['다양한 표현 방식', '동적 업데이트', '인터랙티브'],
  },
  workflow: {
    title: 'Workflow · AI가 다단계 작업을 자동으로 완료',
    points: [
      '프로세스 자동 오케스트레이션으로 반복 업무 감소',
      '멀티태스크 병렬 처리로 전체 효율 향상',
      '수동 개입을 줄여 오류 감소',
      '전 과정 작업 추적으로 진행 상황을 한눈에',
    ],
  },
  virtualHuman: {
    title: '가상 디지털 휴먼 · AI 세계와 연결되는 인터페이스',
    subtitle: '지능형 인터랙션과 생성 기능으로 리소스 조합을 최적화합니다.',
    imageAlt: '가상 디지털 휴먼',
    features: ['24시간 연중무휴 서비스', '지능형 인터랙션 및 생성', '높은 적응성과 유연성', '산업의 디지털 전환 촉진'],
    tags: ['지능형 대화 구축', '텍스트 기반 Q&A', '음성 기반 Q&A'],
  },
  versions: {
    title: '5대 제품 에디션',
    subtitle: '기업, 교육, 그룹사, 스타트업, IoT 등 모든 시나리오 지원',
    targetLabel: '대상: ',
    footer: '모든 에디션은 온프레미스 배포를 지원합니다',
    items: [
      {
        name: '플래그십 에디션',
        badge: '엔터프라이즈급 AI 운영체제',
        desc: '바로 사용할 수 있어 AI 전환 비용을 획기적으로 절감',
        target: '중견 기업',
        features: [
          '핵심 역량: 멀티모델, 유연한 과금, 원클릭 연결',
          '다운로드나 설치 없이 간단한 설정만으로 사용, 유연한 확장 지원',
        ],
      },
      {
        name: '교육 에디션',
        badge: 'AI 교육 및 실습 플랫폼',
        desc: '체계적인 교육 서비스와 커리큘럼으로 종합적인 AI 인재 양성',
        target: '학교 및 교육기관',
        features: [
          '핵심 역할: 수강생, 강사, 기관',
          '교육 분야에 특화하여 교육 관리 수준을 전반적으로 향상',
        ],
      },
      {
        name: 'OPC 플랫폼 에디션',
        badge: 'OPC 창업가를 위한 AI 인프라',
        desc: '산업단지의 입주 기업 성공률을 높이고, 1인 기업(OPC)이 실제로 사업을 궤도에 올릴 수 있도록 지원',
        target: '산업단지 및 OPC 창업가',
        features: [
          '핵심 역량: 단지 운영의 지능형 허브, OPC 역량 증폭기, 실무에 바로 적용 가능한 비즈니스 지원 플랫폼',
        ],
      },
      {
        name: 'IoT 에디션',
        badge: '"연결"에서 "지능형 협업"으로',
        desc: '스마트 하드웨어를 "진정으로 똑똑하게" 만들어 "자체 제어"에서 "자율 결정"으로 진화',
        target: 'IoT 및 스마트 하드웨어 기업',
        features: [
          '핵심 역량: 지능형 의사결정, 스마트 하드웨어, 멀티모달 인터랙션',
          '모든 기기에 지능형 의사결정과 멀티모달 인터랙션 역량 부여',
        ],
      },
      {
        name: '그룹 에디션',
        badge: '본사 + 자회사 통합 관리 플랫폼',
        desc: '온프레미스 컴퓨팅 자원을 최적화하고 프라이빗 데이터를 효율적으로 통합 및 활용',
        target: '대형 그룹사 및 테크노파크',
        features: [
          '핵심 역량: 시스템 배포, 모델 학습, 데이터 학습',
          '여러 자회사를 효과적으로 관리하고 통합 지휘 및 배분으로 경영진에 실시간 의사결정 지원',
        ],
      },
    ],
  },
  deployment: {
    title: '6대 배포 보장',
    items: [
      { title: '소스 코드 제공', desc: '완전하고 안전한 ChatU 소스 코드 + 상세 문서' },
      { title: '온프레미스 배포', desc: '비즈니스 및 기술 요구사항 심층 상담' },
      { title: '데이터 보안', desc: '로컬 배포 + 원격 교육 및 현장 지원' },
      { title: '클라우드 네이티브', desc: '안정적인 아키텍처 + 중국 내 규정 준수' },
      { title: '기술 지원', desc: '장기 유지보수 계약 + 지속적인 서비스' },
      { title: '유연한 확장', desc: '원스톱 솔루션' },
    ],
  },
  trust: {
    title: '공신력 있는 규제 인증 · 안전하고 신뢰할 수 있는 보장',
    filing: '대규모 모델 생성·합성·오케스트레이션 알고리즘 등록 번호(중국 국가인터넷정보판공실): 110108947947801240011',
    certs: [
      'ISO 9001 품질경영시스템 인증서',
      'ChatU CE 적합성 인증서',
      '발명 특허 공개',
      'ChatU 기업용 대규모 모델 생성 및 오케스트레이션 알고리즘 등록',
      'CubixAI 대규모 모델 오케스트레이션 시스템 소프트웨어 저작권 등록증',
      '기업 지능형 영업 관리 시스템 소프트웨어 저작권 등록증',
    ],
    items: [
      {
        title: '등록 완료, 규정 완전 준수',
        desc: '중국 국가인터넷정보판공실(CAC), 공업정보화부(MIIT) 및 인터넷 정보 서비스 알고리즘 등록 시스템의 관리 규정을 준수합니다.',
      },
      {
        title: '명확하고 추적 가능하며 책임 소재가 분명한 지식재산권',
        desc: '최신 키워드 필터링 알고리즘으로 생성 콘텐츠의 합법성과 규정 준수를 보장하며, 텍스트·이미지 심사와 이용 약관도 국가 기준에 부합합니다.',
      },
      {
        title: '클로즈드 소스는 "폐쇄"가 아니라 "통제 가능"을 의미합니다',
        desc: '자체 개발한 핵심 아키텍처로 중국 규제 요건을 충족하며, 안정적이고 중국 내에서 제한 없이 사용할 수 있습니다.',
      },
    ],
  },
  compare: {
    title: 'ChatU와 경쟁사 비교',
    headers: { dim: '비교 항목', competitor: '경쟁사', chatu: 'ChatU 강점' },
    competitorLabel: '경쟁사: ',
    chatuLabel: 'ChatU: ',
    rows: [
      { dim: '가격', competitor: 'Claude / ChatGPT 기업용 요금제는 비용이 높음', chatu: '비용은 단 1/10' },
      { dim: '사용 편의성', competitor: '오픈소스 에이전트 도구는 엔지니어링 역량 필요', chatu: '바로 사용 가능, 진입 장벽 제로' },
      { dim: '집중 분야', competitor: '범용 에이전트 제품은 초점이 분산됨', chatu: '기업의 고빈도 업무에 집중' },
      { dim: '모델', competitor: '대규모 모델 벤더의 폐쇄적인 생태계', chatu: '벤더 중립, 자유로운 전환' },
      { dim: '리소스', competitor: '일반 서비스 업체는 전문가 리소스가 제한적', chatu: '3.5M+ 커뮤니티 회원' },
      { dim: '지식재산권', competitor: '오픈소스 솔루션의 지식재산권 리스크', chatu: '감사 가능, 추적 가능, 책임 소재 명확' },
    ],
  },
  cases: {
    title: '주요 고객 사례',
    viewCase: '사례 보기',
    viewAll: '전체 사례 보기',
  },
  pricing: {
    title: '더 유연하게 · 더 안전하게 · 더 편리하게',
    advantages: [
      '필요에 따라 요금제 선택 · 고액 일시불 결제 불필요',
      '유연한 비용 관리 · 비즈니스 변화에 따라 언제든 조정',
      '실시간 지출 파악 · 더 효율적인 리소스 관리',
      '장기 약정 없음 · 예산 초과 걱정 없음',
    ],
    packTitle: '전용 사용량 패키지 구매',
    packDesc: '높은 동시 처리 / 더 저렴한 가격 / 유연한 운영',
    packAlt: '사용량 패키지',
    cardTitle: '맞춤형 선불 카드',
    cardDesc: '필요한 만큼 충전 / 장기간 유효',
    cardAlt: '맞춤형 선불 카드',
    cardFeatures: [
      '충전 즉시 사용 가능, 복잡한 신청이나 설정 불필요',
      '카드와 이용 권한을 연동해 안전하고 추적 가능한 자산 관리 실현',
      '공유하기 좋아 기업 AI 문화의 "소셜 화폐"로 자리매김',
      '카드 디자인 맞춤 제작 지원(기업 로고 등 포함)',
    ],
  },
  finalCta: {
    title: 'ChatU 가입 · 무료 체험 크레딧 10,000 증정',
    subtitle: '기업 체험 신청 / 관리자 콘솔 체험',
    register: '지금 가입하기',
    trial: '기업 체험 신청',
    wechatTitle: 'WeChat에서 ChatU 팔로우',
    wechatDesc: 'WeChat 공식 계정을 팔로우하고 최신 제품 소식을 받아보세요',
    qrAlt: 'ChatU WeChat 공식 계정 QR 코드',
    scanHint: 'WeChat으로 스캔해 ChatU 공식 계정 팔로우',
  },
}

export const chatuContent: LocalizedContent<typeof zh> = { zh, en, ja, ko }
