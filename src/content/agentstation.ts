import type { LocalizedContent } from '@/i18n/useContent'

/** 智方体（AgentStation）产品页正文：zh 为中文原文，en 为英文译文 */
const zh = {
  hero: {
    badge: 'AI 时代的新物种',
    title: '智方体 · AgentStation',
    tagline: '你可靠的 AI 工作站',
    taglineCaps: 'YOUR RELIABLE AI WORKSTATION',
    subtitle: '不用装、不用配，数据默认留在本地。开箱 2 分钟，拥有一台真正属于你的 AI。',
    features: ['7 英寸触屏', '2 分钟开机', '预装智能体', '软件终身免费升级'],
    badges: ['一次买断', '700 克', '待机 5 小时'],
    bookCta: '立即预订 ¥3,999',
    jdCta: '京东旗舰店下单',
    jdLogoAlt: '京东',
    versionsCta: '查看所有版本',
    imageAlt: '智方体 AgentStation',
  },
  painPoint: {
    title: '不会装、不敢装、不会用、不想折腾',
    subtitle: 'AI 不该只是极客的玩具',
    cards: [
      {
        label: '不会装',
        title: '技术门槛劝退',
        items: [
          '环境配置、依赖冲突，一步卡住就放弃',
          'API、模型、Agent 部署全得自己摸索',
          '新工具层出不穷，升级维护跟不上',
        ],
      },
      {
        label: '不敢装',
        title: '安全顾虑难消',
        items: [
          '企业资料上传云端，心里没底',
          '担心数据泄露与系统不稳定',
          '出了问题不知道找谁',
        ],
      },
      {
        label: '不会用',
        title: '场景无从下手',
        items: [
          '不知道 Agent 能做什么',
          '不知道如何把工具组合起来',
          '不清楚这些能力如何用于自己的工作',
        ],
      },
      {
        label: '不想折腾',
        title: '维护成本太高',
        items: [
          '学习成本高，上手慢',
          '升级维护麻烦，故障难排查',
          '新工具还在不断出现，跟进太累',
        ],
      },
    ],
    closing: '既要隐私安全，又要开箱即用——智方体，为此而生。',
  },
  simplicity: {
    eyebrow: '会用电脑，就能用 Agent',
    title: '三步开启 AI 之旅',
    steps: [
      { title: '开机', desc: '通电即用，没有安装向导，也不用敲命令行' },
      { title: '启动 ChatU Mate', desc: '点一下，DeepSeek Harness 等智能体随即就绪' },
      { title: '开始工作', desc: '说出任务，AI 拆解、调用工具、把事做完' },
    ],
  },
  highlights: {
    items: [
      {
        title: '开箱即用',
        desc: '预装系统、智能体与模型，2 分钟从拆箱到开工',
        tag: '零配置 · 零门槛',
      },
      {
        title: '本地安全',
        desc: 'Qwen 等本地模型离线可用，核心资料无需上传公共云',
        tag: '数据默认本地 · 3C 认证',
      },
      {
        title: '预装智能体',
        desc: '内置 DeepSeek Harness、Hermes、OpenClaw，会拆任务、调工具',
        tag: '多智能体 · 终身升级（软件）',
      },
      {
        title: '7 英寸高清触屏',
        desc: '自带屏幕，手指一点就能对话；也可外接显示器和键盘',
        tag: '触控操作 · 随身携带',
      },
    ],
  },
  ecosystem: {
    badge: '预装于每一台智方体',
    title: 'ChatU Mate：智能体的管家',
    subtitle: '智能体、模型、Skills、升级，一个入口全管好',
    imageAlt: 'ChatU Mate 工作台',
    caption: 'ChatU Mate 工作台 · 手指触屏即可操作，无需命令行',
    cards: [
      {
        title: '多智能体管控',
        desc: 'DeepSeek Harness、OpenClaw、Hermes 一键启停；Codex、WorkBuddy 等主流平台随时可装',
      },
      {
        title: '模型自由切换',
        desc: '本地 Qwen、企业内网大模型、云端模型，一处配置、随时切换',
      },
      {
        title: '全能 Skills',
        desc: '预装图片、视频生成技能；优秀流程可沉淀为模板，团队一键复用',
      },
      {
        title: '主流办公平台接入',
        desc: '企业微信、飞书、钉钉等，AI 直接进入日常工作流。',
      },
    ],
    /** 与组件里的平台图标按顺序一一对应 */
    platforms: ['微信', '飞书', '钉钉', '企业微信', 'QQ', 'ChatU', '更多...'],
    upgradeBar: '一键升级 · 智能体与 ChatU Mate 软件终身免费更新',
  },
  hardwareSpec: {
    /** 图片 alt 前缀，后面接序号，如「角度 1」 */
    angleAlt: '角度',
    caption: '7 英寸触屏正面：开机即桌面　｜　一体支架：随手立起　｜　侧面接口：USB、HDMI、散热',
    title: '掌上 AI 工作站',
    subtitle: '手掌大小，装进包里带走；接上显示器，秒变桌面生产力',
    coreTitle: '核心配置',
    coreSpecs: [
      { name: '屏幕', value: '7 英寸高清触控屏', highlight: '', suffix: '' },
      { name: '重量', value: '约 700 克', highlight: '', suffix: '' },
      { name: '续航', value: '内置电池，待机约 5 小时', highlight: '', suffix: '' },
      { name: '操作系统', value: 'Windows 11 企业版', highlight: '', suffix: '' },
      { name: '处理器', value: 'Intel(R) N150', highlight: '', suffix: '' },
      { name: '内存', value: '16G', highlight: '', suffix: '' },
      { name: '存储', value: '256G / 512G / 1TB', highlight: '', suffix: '' },
      { name: '本地模型', value: 'Qwen 等，离线可用', highlight: '', suffix: '' },
    ],
    ioTitle: '接口与扩展',
    ioSpecs: [
      { name: 'USB', value: 'USB × 4 + Type-C × 1，键鼠、U 盘、摄像头、打印机即插即用', highlight: '', suffix: '' },
      { name: '视频输出', value: 'HDMI / DP，外接大屏或投影', highlight: '', suffix: '' },
      { name: '网络', value: '千兆网口 + Wi-Fi，内网大模型直连', highlight: '', suffix: '' },
      { name: '尺寸', value: '长 17.5 cm × 宽 2 cm × 高 11 cm', highlight: '', suffix: '' },
      { name: '认证', value: '3C 认证', highlight: '', suffix: '' },
    ],
  },
  modes: {
    title: '四种打开方式：随时 · 随地 · 随心 · 随用',
    items: [
      { title: '指尖触屏', desc: '自带屏幕，手指一点即可对话' },
      { title: '键盘鼠标', desc: '插上键鼠，像电脑一样高效输入' },
      { title: '外接显示器', desc: 'HDMI / DP 接大屏，桌面级办公' },
      { title: '手机远程', desc: '通过企业微信、飞书随时派任务' },
    ],
  },
  scenarios: {
    title: '应用场景',
    subtitle: '重复工作交给 AI，你只做判断',
    items: [
      { title: '邮件助理', desc: '自动分类、摘要、起草回复，重要邮件不再漏看' },
      { title: '自媒体助理', desc: '从选题、成稿到排版，一条龙产出图文、视频' },
      { title: '资讯舆情监控', desc: '定时追踪行业新闻与竞品动态，自动生成简报' },
      { title: '数据分析师', desc: '合并表格、整理报表，生成可视化报告' },
      { title: 'PPT 助理', desc: '一句话生成大纲与演示文稿，会议资料随手出' },
      { title: '更多场景，持续解锁中', desc: '你的工作流还能怎么用智方体？欢迎告诉我们，下一个场景就为你做出来' },
    ],
    audienceTitle: '谁在用智方体',
    audiences: [
      { title: '内容创作者', desc: '写稿、改稿、头脑风暴，选题库和素材永远在自己手里' },
      { title: '自由职业者', desc: '客户资料、合同、报价在本地处理，对客户有交代' },
      { title: '学生与研究者', desc: '论文、文献、数据分析，不上传、不限次数' },
      { title: '企业团队', desc: '经验沉淀为团队 Skills，多设备统一管理，权限可控' },
    ],
    banner: '手里有敏感资料、又不想被技术门槛拦住——一人公司（OPC）的必备工具',
  },
  compare: {
    title: '为什么选择智方体？',
    subtitle: '同样是「用 AI」，差别在这里',
    columns: ['对比项', '智方体', '云端 AI 工具', '传统 AI 盒子', '自行下载安装'],
    rows: [
      { dim: '数据存放', us: '默认本地，可接内网 / 云端', cloud: '上传云端', box: '本地', diy: '取决于配置' },
      { dim: '安装配置', us: '不需要，开箱即用', cloud: '不需要', box: '需要专业安装', diy: '需要自行搭建，门槛高' },
      { dim: '新手上手', us: '2 分钟', cloud: '容易', box: '较难', diy: '很难' },
      { dim: '费用方式', us: '一次买断，软件终身升级', cloud: '按月订阅', box: '硬件费用', diy: '时间成本高' },
      { dim: '自带屏幕', us: '7 英寸触屏', cloud: '—', box: '无，需另配', diy: '视设备而定' },
      { dim: '专为 Agent 设计', us: '预装整套智能体', cloud: '否', box: '部分', diy: '否' },
      { dim: '出问题找谁', us: '24 小时智能客服 + 专家远程', cloud: '平台客服', box: '自己 / 社区', diy: '自己' },
    ],
    tagline: '省时、省力、省心、零门槛',
  },
  versions: {
    title: '选择适合你的版本',
    subtitle: '一次买断，终身使用',
    /** 与组件里的按钮行为（预订 / 弹窗）按顺序一一对应 */
    plans: [
      {
        name: '专业版',
        price: '¥3,999',
        badge: '一次买断',
        audience: '个人与小团队',
        features: [
          '主机 + Windows 11 企业版 + 预装 ChatU Mate',
          'DeepSeek Harness + Qwen 本地模型，软件终身免费升级',
          '赠送 1000 万 Token',
          '24 小时智能客服 + 激活后 7 天免费人工远程指导',
        ],
        cta: '立即预订',
      },
      {
        name: '企业版',
        price: '商务洽谈',
        badge: '定制部署',
        audience: '部门 / 内网集群',
        features: [
          '多设备集群统一管理、权限可控、定制部署',
          '同专业版，可接企业内网大模型',
          '赠送 Token 按方案',
          '专属服务',
        ],
        cta: '联系我们',
      },
    ],
    note: 'Token 赠送政策以购买时官方公告为准。另有多元 Token 订阅方案，适配不同使用需求，详情请咨询客服。',
  },
  pricing: {
    title: '到手不是结束，是开始',
    subtitle: '不止入手一台智方体，配套服务同步就位',
    cards: [
      {
        title: '全面课程体系',
        desc: 'L0 AI 认知入门 → L1 工具实操 → L2 多智能体协同 → L3 企业工作流设计；线上录播 + 线下面授',
      },
      {
        title: '线下训练营',
        desc: '园区夜校、OPC 实战营（通识 → 认证 → 实战）、加速营；优秀学员可注册 OPC 入园',
      },
      {
        title: '多城社群网络',
        desc: '线上交流经验，线下面对面分享；PEC 大会\u00A0· 350 万+ 社群',
      },
      {
        title: '客服与售后',
        desc: '24 小时智能客服；激活后 7 天免费人工远程指导，之后按次付费',
      },
    ],
  },
  finalCta: {
    title: '你可靠的 AI 工作站',
    eyebrow: 'WORK SMART · STAY SAFE',
    subtitle: '不用装、不用配，开箱 2 分钟，一台真正属于你的 AI。',
    bookCta: '立即预订 ¥3,999',
    jdCta: '京东旗舰店下单',
    jdLogoAlt: '京东',
    partnerCta: '商务合作 · 渠道加盟',
    items: [
      { title: '加入社群', desc: '和 8 城用户交流经验，获取最新玩法' },
      { title: '技术支持', desc: '24 小时智能客服，遇到问题扫码即问' },
      { title: '渠道招募', desc: '成为智方体合作伙伴，共享 AI 工作站市场' },
    ],
    /** 无图片时的占位文字，接在卡片标题后面 */
    imagePlaceholder: '图片占位',
  },
}

const en: typeof zh = {
  hero: {
    badge: 'A New Species for the AI Era',
    title: 'AgentStation',
    tagline: 'Your Reliable AI Workstation',
    taglineCaps: 'PRIVATE · PORTABLE · PLUG-AND-PLAY',
    subtitle:
      'Nothing to install, nothing to configure, and your data stays local by default. Unbox it and in 2 minutes you have an AI that is truly yours.',
    features: ['7-inch touchscreen', 'Ready in 2 min', 'Built-in agents', 'Free lifetime updates'],
    badges: ['One-time purchase', '700 g', '5-hour standby'],
    bookCta: 'Pre-order Now ¥3,999',
    jdCta: 'Buy on JD.com',
    jdLogoAlt: 'JD.com',
    versionsCta: 'View All Editions',
    imageAlt: 'AgentStation',
  },
  painPoint: {
    title: 'Too complex, too risky, too confusing, too much hassle',
    subtitle: 'AI shouldn’t be just a toy for geeks',
    cards: [
      {
        label: 'Too complex',
        title: 'Technical Barriers Put People Off',
        items: [
          'Environment setup and dependency conflicts: one snag and you give up',
          'APIs, models and agent deployment are all trial and error',
          'New tools keep coming, and upgrades and maintenance can’t keep up',
        ],
      },
      {
        label: 'Too risky',
        title: 'Lingering Security Concerns',
        items: [
          'Uploading company data to the cloud doesn’t feel safe',
          'Worries about data leaks and unstable systems',
          'No one to turn to when something goes wrong',
        ],
      },
      {
        label: 'Too confusing',
        title: 'No Idea Where to Start',
        items: [
          'Not sure what AI agents can actually do',
          'Not sure how to combine the tools',
          'Unclear how any of it applies to your own work',
        ],
      },
      {
        label: 'Too much hassle',
        title: 'Maintenance Costs Too Much',
        items: [
          'Steep learning curve, slow to get started',
          'Upgrades are a chore and problems are hard to troubleshoot',
          'Keeping up with the stream of new tools is exhausting',
        ],
      },
    ],
    closing: 'Private and secure, yet ready out of the box: AgentStation was built for exactly that.',
  },
  simplicity: {
    eyebrow: 'If you can use a computer, you can use AI agents',
    title: 'Start Your AI Journey in Three Steps',
    steps: [
      { title: 'Power On', desc: 'Plug it in and go. No setup wizard, no command line' },
      { title: 'Launch ChatU Mate', desc: 'One tap readies DeepSeek Harness and other agents' },
      { title: 'Get to Work', desc: 'Give a task; the AI plans it, uses tools, gets it done' },
    ],
  },
  highlights: {
    items: [
      {
        title: 'Ready Out of the Box',
        desc: 'OS, AI agents and models pre-installed: from unboxing to working in 2 minutes',
        tag: 'Zero setup · Zero barriers',
      },
      {
        title: 'Local and Secure',
        desc: 'Local models such as Qwen work offline, so core data never has to go to a public cloud',
        tag: 'Local data by default · 3C certified',
      },
      {
        title: 'Built-in AI Agents',
        desc: 'Ships with DeepSeek Harness, Hermes and OpenClaw to break down tasks and call tools',
        tag: 'Multi-agent · Lifetime updates',
      },
      {
        title: '7-inch HD Touchscreen',
        desc: 'Built-in screen: just tap to chat. Or connect an external monitor and keyboard',
        tag: 'Touch control · Take it anywhere',
      },
    ],
  },
  ecosystem: {
    badge: 'Pre-installed on every AgentStation',
    title: 'ChatU Mate: Your AI Agent Manager',
    subtitle: 'AI agents, models, Skills and updates, all managed from one place',
    imageAlt: 'ChatU Mate workspace',
    caption: 'ChatU Mate workspace · Operate it by touch, no command line needed',
    cards: [
      {
        title: 'Multi-Agent Management',
        desc: 'Start or stop DeepSeek Harness, OpenClaw and Hermes with one tap; install mainstream platforms such as Codex and WorkBuddy anytime',
      },
      {
        title: 'Switch Models Freely',
        desc: 'Local Qwen, enterprise intranet LLMs or cloud models: configure once, switch anytime',
      },
      {
        title: 'Versatile Skills',
        desc: 'Image and video generation skills pre-installed; turn your best workflows into templates the whole team can reuse in one click',
      },
      {
        title: 'Works with Leading Office Platforms',
        desc: 'WeCom, Feishu (Lark), DingTalk and more: AI goes straight into your daily workflow.',
      },
    ],
    platforms: ['WeChat', 'Feishu (Lark)', 'DingTalk', 'WeCom', 'QQ', 'ChatU', 'More…'],
    upgradeBar: 'One-tap updates · Free lifetime updates for AI agents and ChatU Mate software',
  },
  hardwareSpec: {
    angleAlt: 'View',
    caption: 'Front: 7-inch touchscreen, boots to desktop\u2003|\u2003Stand: props up anywhere\u2003|\u2003Side: USB, HDMI, cooling',
    title: 'A Palm-Sized AI Workstation',
    subtitle: 'Small enough to slip into your bag; plug in a monitor and it becomes a desktop workstation in seconds',
    coreTitle: 'Core Specs',
    coreSpecs: [
      { name: 'Display', value: '7-inch HD touchscreen', highlight: '', suffix: '' },
      { name: 'Weight', value: 'Approx. 700 g', highlight: '', suffix: '' },
      { name: 'Battery', value: 'Built-in battery, approx. 5 hours standby', highlight: '', suffix: '' },
      { name: 'OS', value: 'Windows 11 Enterprise', highlight: '', suffix: '' },
      { name: 'Processor', value: 'Intel(R) N150', highlight: '', suffix: '' },
      { name: 'Memory', value: '16 GB', highlight: '', suffix: '' },
      { name: 'Storage', value: '256 GB / 512 GB / 1 TB', highlight: '', suffix: '' },
      { name: 'Local Models', value: 'Qwen and more, available offline', highlight: '', suffix: '' },
    ],
    ioTitle: 'Ports & Expansion',
    ioSpecs: [
      { name: 'USB', value: 'USB × 4 + Type-C × 1; plug-and-play keyboard, mouse, USB drives, cameras and printers', highlight: '', suffix: '' },
      { name: 'Video Output', value: 'HDMI / DP for an external display or projector', highlight: '', suffix: '' },
      { name: 'Network', value: 'Gigabit Ethernet + Wi-Fi; connects directly to intranet LLMs', highlight: '', suffix: '' },
      { name: 'Dimensions', value: '17.5 cm (L) × 2 cm (W) × 11 cm (H)', highlight: '', suffix: '' },
      { name: 'Certification', value: '3C certified', highlight: '', suffix: '' },
    ],
  },
  modes: {
    title: 'Four Ways to Use It: Anytime · Anywhere · Your Way · On Demand',
    items: [
      { title: 'Touchscreen', desc: 'Built-in screen: just tap to chat' },
      { title: 'Keyboard & Mouse', desc: 'Plug in a keyboard and mouse and type as fast as on a PC' },
      { title: 'External Monitor', desc: 'Connect a big screen via HDMI / DP for a full desktop setup' },
      { title: 'Remote via Phone', desc: 'Assign tasks anytime via WeCom or Feishu (Lark)' },
    ],
  },
  scenarios: {
    title: 'Use Cases',
    subtitle: 'Let AI handle the repetitive work; you just make the calls',
    items: [
      { title: 'Email Assistant', desc: 'Sorts, summarizes and drafts replies automatically, so you never miss an important email' },
      { title: 'Social Media Assistant', desc: 'From topic ideas and drafts to layout, it produces posts and videos end to end' },
      { title: 'News & Sentiment Monitoring', desc: 'Tracks industry news and competitor moves on a schedule and generates briefings automatically' },
      { title: 'Data Analyst', desc: 'Merges spreadsheets, tidies up reports and turns data into visual reports' },
      { title: 'Presentation Assistant', desc: 'Turns a single sentence into an outline and a full deck, so meeting materials are ready in no time' },
      { title: 'More Use Cases Coming', desc: 'How else could AgentStation fit into your workflow? Tell us, and we’ll build the next use case for you' },
    ],
    audienceTitle: 'Who Uses AgentStation',
    audiences: [
      { title: 'Content Creators', desc: 'Write, edit and brainstorm, with your topic ideas and materials always in your own hands' },
      { title: 'Freelancers', desc: 'Handle client files, contracts and quotes locally, and keep your promises to clients' },
      { title: 'Students & Researchers', desc: 'Papers, literature and data analysis: no uploads, no usage limits' },
      { title: 'Business Teams', desc: 'Turn know-how into team Skills and manage multiple devices centrally, with controlled permissions' },
    ],
    banner: 'Sensitive data on hand, but no patience for technical hurdles? The must-have tool for one-person companies (OPCs).',
  },
  compare: {
    title: 'Why AgentStation?',
    subtitle: 'Everyone “uses AI”. Here’s the difference',
    columns: ['Comparison', 'AgentStation', 'Cloud AI Tools', 'Traditional AI Boxes', 'DIY Installation'],
    rows: [
      { dim: 'Data Storage', us: 'Local by default; can connect to intranet / cloud', cloud: 'Uploaded to the cloud', box: 'Local', diy: 'Depends on setup' },
      { dim: 'Setup', us: 'None, ready out of the box', cloud: 'None', box: 'Professional installation required', diy: 'Build it yourself, high barrier to entry' },
      { dim: 'Getting Started', us: '2 minutes', cloud: 'Easy', box: 'Fairly hard', diy: 'Very hard' },
      { dim: 'Pricing Model', us: 'One-time purchase, lifetime software updates', cloud: 'Monthly subscription', box: 'Hardware cost', diy: 'High time cost' },
      { dim: 'Built-in Screen', us: '7-inch touchscreen', cloud: '—', box: 'None, sold separately', diy: 'Depends on device' },
      { dim: 'Built for AI Agents', us: 'Full AI agent suite pre-installed', cloud: 'No', box: 'Partly', diy: 'No' },
      { dim: 'Support', us: '24/7 AI customer service + remote expert help', cloud: 'Platform customer service', box: 'Yourself / community', diy: 'Yourself' },
    ],
    tagline: 'Less time. Less effort. Less worry. Zero barriers.',
  },
  versions: {
    title: 'Choose Your Edition',
    subtitle: 'Buy once, use for life',
    plans: [
      {
        name: 'Pro Edition',
        price: '¥3,999',
        badge: 'One-time purchase',
        audience: 'Individuals & small teams',
        features: [
          'Device + Windows 11 Enterprise + ChatU Mate pre-installed',
          'DeepSeek Harness + Qwen local models, free lifetime software updates',
          '10 million free tokens',
          '24/7 AI customer service + 7 days of free remote guidance from our experts after activation',
        ],
        cta: 'Pre-order Now',
      },
      {
        name: 'Enterprise Edition',
        price: 'Custom Quote',
        badge: 'Custom deployment',
        audience: 'Departments / intranet clusters',
        features: [
          'Centralized multi-device cluster management, permission controls, custom deployment',
          'Everything in Pro, plus connection to enterprise intranet LLMs',
          'Free tokens based on your plan',
          'Dedicated service',
        ],
        cta: 'Contact Us',
      },
    ],
    note: 'Free token offers are subject to the official announcement at the time of purchase. A range of token subscription plans is also available to suit different needs; please contact customer service for details.',
  },
  pricing: {
    title: 'Delivery Is Just the Beginning',
    subtitle: 'You get more than an AgentStation: a full set of support services comes with it',
    cards: [
      {
        title: 'Comprehensive Courses',
        desc: 'L0 AI Basics → L1 Hands-on Tools → L2 Multi-Agent Collaboration → L3 Enterprise Workflow Design; recorded online lessons + in-person classes',
      },
      {
        title: 'In-Person Bootcamps',
        desc: 'Hub night school, OPC bootcamp (fundamentals → certification → hands-on practice) and accelerator; top learners can register an OPC and join the hub',
      },
      {
        title: 'Multi-City Community',
        desc: 'Swap experience online and meet face to face offline; PEC Conference\u00A0· 3.5M+ community members',
      },
      {
        title: 'Support & After-Sales',
        desc: '24/7 AI customer service; 7 days of free remote guidance from our experts after activation, pay-per-session afterwards',
      },
    ],
  },
  finalCta: {
    title: 'Your Reliable AI Workstation',
    eyebrow: 'WORK SMART · STAY SAFE',
    subtitle: 'Nothing to install, nothing to configure. Unbox it and in 2 minutes you have an AI that is truly yours.',
    bookCta: 'Pre-order Now ¥3,999',
    jdCta: 'Buy on JD.com',
    jdLogoAlt: 'JD.com',
    partnerCta: 'Business & Channel Partnerships',
    items: [
      { title: 'Join the Community', desc: 'Swap tips with users across 8 cities and get the latest tricks' },
      { title: 'Technical Support', desc: '24/7 AI customer service: just scan the code when you have a question' },
      { title: 'Channel Partner Program', desc: 'Become an AgentStation partner and share in the AI workstation market' },
    ],
    imagePlaceholder: ' (image placeholder)',
  },
}

const ja: typeof zh = {
  hero: {
    badge: 'AI時代の新たなカテゴリー',
    title: 'AgentStation',
    tagline: 'あなたの頼れるAIワークステーション',
    taglineCaps: 'プライベート · ポータブル · プラグアンドプレイ',
    subtitle:
      'インストールも設定も不要で、データは標準でローカルに保存されます。開封から2分で、あなただけのAIが手に入ります。',
    features: ['7インチタッチスクリーン', '2分で起動', 'エージェント搭載', '永年無料アップデート'],
    badges: ['買い切り', '700 g', '待機5時間'],
    bookCta: '今すぐ予約 3,999元',
    jdCta: 'JD.comで購入',
    jdLogoAlt: 'JD.com',
    versionsCta: '全エディションを見る',
    imageAlt: 'AgentStation',
  },
  painPoint: {
    title: '難しい、不安、わからない、面倒',
    subtitle: 'AIはギークだけのおもちゃではありません',
    cards: [
      {
        label: '難しい',
        title: '技術のハードルが高い',
        items: [
          '環境構築や依存関係の衝突で、一度つまずくとそこで挫折',
          'API、モデル、エージェントのデプロイもすべて手探り',
          '新しいツールが次々に登場し、アップデートや保守が追いつかない',
        ],
      },
      {
        label: '不安',
        title: '拭えないセキュリティ不安',
        items: [
          '社内データをクラウドに上げるのは心配',
          'データ漏えいやシステムの不安定さが気になる',
          'トラブルが起きても頼れる相手がいない',
        ],
      },
      {
        label: 'わからない',
        title: '何から始めればいいのか',
        items: [
          'AIエージェントに何ができるのかわからない',
          'ツールをどう組み合わせればいいのかわからない',
          '自分の仕事にどう活かせるのかが見えない',
        ],
      },
      {
        label: '面倒',
        title: '保守の負担が大きすぎる',
        items: [
          '学習コストが高く、使いこなすまでに時間がかかる',
          'アップデートは手間がかかり、トラブルの原因も突き止めにくい',
          '次々に出る新ツールを追いかけるだけで疲れてしまう',
        ],
      },
    ],
    closing: 'プライバシーと安全性を守りながら、箱から出してすぐに使える。AgentStationは、そのために生まれました。',
  },
  simplicity: {
    eyebrow: 'パソコンが使えれば、AIエージェントも使えます',
    title: '3ステップでAI活用をスタート',
    steps: [
      { title: '電源を入れる', desc: '電源につなぐだけ。セットアップウィザードもコマンド入力も不要です' },
      { title: 'ChatU Mateを起動', desc: 'タップひとつでDeepSeek Harnessなどのエージェントが準備完了' },
      { title: '仕事を始める', desc: 'タスクを伝えれば、AIが段取りを組み、ツールを使って完了させます' },
    ],
  },
  highlights: {
    items: [
      {
        title: '開封してすぐ使える',
        desc: 'OS、AIエージェント、モデルをプリインストール。開封から仕事開始まで2分',
        tag: '設定不要 · ハードルゼロ',
      },
      {
        title: 'ローカルで安全',
        desc: 'Qwenなどのローカルモデルはオフラインで動作。重要なデータをパブリッククラウドに送る必要はありません',
        tag: 'データは標準でローカル · 3C認証',
      },
      {
        title: 'AIエージェント搭載',
        desc: 'DeepSeek Harness、Hermes、OpenClawを標準搭載。タスクを分解し、ツールを呼び出します',
        tag: 'マルチエージェント · 永年アップデート',
      },
      {
        title: '7インチHDタッチスクリーン',
        desc: '画面内蔵で、タップするだけで対話できます。外部モニターやキーボードの接続にも対応',
        tag: 'タッチ操作 · どこへでも持ち運び',
      },
    ],
  },
  ecosystem: {
    badge: 'すべてのAgentStationにプリインストール',
    title: 'ChatU Mate：AIエージェントの司令塔',
    subtitle: 'AIエージェント、モデル、Skills、アップデートをひとつの画面でまとめて管理',
    imageAlt: 'ChatU Mateワークスペース',
    caption: 'ChatU Mateワークスペース · タッチで操作でき、コマンドラインは不要',
    cards: [
      {
        title: 'マルチエージェント管理',
        desc: 'DeepSeek Harness、OpenClaw、Hermesをワンタップで起動・停止。CodexやWorkBuddyなどの主要プラットフォームもいつでも追加できます',
      },
      {
        title: 'モデルを自由に切り替え',
        desc: 'ローカルのQwen、社内ネットワークのLLM、クラウドモデルを一か所で設定し、いつでも切り替えられます',
      },
      {
        title: '多彩なSkills',
        desc: '画像・動画生成スキルをプリインストール。優れたワークフローはテンプレート化して、チーム全員がワンクリックで再利用できます',
      },
      {
        title: '主要ビジネスツールと連携',
        desc: 'WeCom、Feishu (Lark)、DingTalkなどに対応し、AIが日々のワークフローに直接入り込みます。',
      },
    ],
    platforms: ['WeChat', 'Feishu (Lark)', 'DingTalk', 'WeCom', 'QQ', 'ChatU', 'その他…'],
    upgradeBar: 'ワンタップでアップデート · AIエージェントとChatU Mateソフトウェアは永年無料で更新',
  },
  hardwareSpec: {
    angleAlt: 'アングル',
    caption: '正面：7インチタッチスクリーン、起動するとすぐデスクトップ | スタンド：どこでも立てられる | 側面：USB、HDMI、放熱口',
    title: '手のひらサイズのAIワークステーション',
    subtitle: 'バッグにすっと収まるコンパクトさ。モニターにつなげば、すぐにデスクトップのワークステーションに変身します',
    coreTitle: '主な仕様',
    coreSpecs: [
      { name: 'ディスプレイ', value: '7インチHDタッチスクリーン', highlight: '', suffix: '' },
      { name: '重量', value: '約700 g', highlight: '', suffix: '' },
      { name: 'バッテリー', value: 'バッテリー内蔵、待機時間 約5時間', highlight: '', suffix: '' },
      { name: 'OS', value: 'Windows 11 Enterprise', highlight: '', suffix: '' },
      { name: 'プロセッサー', value: 'Intel(R) N150', highlight: '', suffix: '' },
      { name: 'メモリー', value: '16 GB', highlight: '', suffix: '' },
      { name: 'ストレージ', value: '256 GB / 512 GB / 1 TB', highlight: '', suffix: '' },
      { name: 'ローカルモデル', value: 'Qwenなど、オフラインで利用可能', highlight: '', suffix: '' },
    ],
    ioTitle: 'インターフェース・拡張',
    ioSpecs: [
      { name: 'USB', value: 'USB × 4 + Type-C × 1。キーボード、マウス、USBメモリー、カメラ、プリンターをつなぐだけで使えます', highlight: '', suffix: '' },
      { name: '映像出力', value: 'HDMI / DP、外部ディスプレイやプロジェクターに出力', highlight: '', suffix: '' },
      { name: 'ネットワーク', value: 'ギガビットイーサネット + Wi-Fi、社内ネットワークのLLMに直接接続', highlight: '', suffix: '' },
      { name: 'サイズ', value: '長さ17.5 cm × 幅2 cm × 高さ11 cm', highlight: '', suffix: '' },
      { name: '認証', value: '3C認証取得', highlight: '', suffix: '' },
    ],
  },
  modes: {
    title: '4つの使い方：いつでも · どこでも · 思いのままに · 必要なときに',
    items: [
      { title: 'タッチスクリーン', desc: '内蔵画面をタップするだけで対話' },
      { title: 'キーボード＆マウス', desc: 'キーボードとマウスをつなげば、PCと同じように快適に入力' },
      { title: '外部モニター', desc: 'HDMI / DPで大画面につなぎ、デスクトップ環境で作業' },
      { title: 'スマホからリモート', desc: 'WeComやFeishu (Lark)からいつでもタスクを依頼' },
    ],
  },
  scenarios: {
    title: '活用シーン',
    subtitle: '繰り返しの作業はAIに任せて、あなたは判断に集中',
    items: [
      { title: 'メールアシスタント', desc: '自動で分類・要約し、返信の下書きまで作成。重要なメールを見逃しません' },
      { title: 'SNS運用アシスタント', desc: 'テーマ選びから原稿、レイアウトまで、投稿や動画をワンストップで制作' },
      { title: 'ニュース・評判モニタリング', desc: '業界ニュースや競合の動向を定期的に追跡し、レポートを自動で作成' },
      { title: 'データアナリスト', desc: '表の結合やレポートの整理を行い、データを可視化したレポートに仕上げます' },
      { title: 'プレゼン資料アシスタント', desc: 'ひと言の指示から構成案とスライド一式を作成。会議資料がすぐに仕上がります' },
      { title: '活用シーンは今後も拡大', desc: 'あなたのワークフローで、AgentStationをどう活かせるでしょうか。ぜひお聞かせください。次の活用シーンを形にします' },
    ],
    audienceTitle: 'AgentStationのユーザー',
    audiences: [
      { title: 'コンテンツクリエイター', desc: '執筆、推敲、ブレインストーミングまで。ネタ帳も素材も、いつも自分の手元に' },
      { title: 'フリーランス', desc: '顧客資料、契約書、見積書をローカルで処理。クライアントにも胸を張って説明できます' },
      { title: '学生・研究者', desc: '論文、文献、データ分析も、アップロード不要・回数制限なし' },
      { title: '企業チーム', desc: 'ノウハウをチームのSkillsとして蓄積し、複数台を一元管理。権限も細かく制御できます' },
    ],
    banner: '機密データを扱うけれど、技術的なハードルには悩まされたくない。そんな一人会社（OPC）の必携ツールです。',
  },
  compare: {
    title: 'AgentStationが選ばれる理由',
    subtitle: '同じ「AI活用」でも、ここが違います',
    columns: ['比較項目', 'AgentStation', 'クラウドAIツール', '従来のAIボックス', '自分でインストール'],
    rows: [
      { dim: 'データの保存先', us: '標準はローカル、社内ネットワーク / クラウドにも接続可', cloud: 'クラウドにアップロード', box: 'ローカル', diy: '構成次第' },
      { dim: '導入・設定', us: '不要、届いてすぐ使える', cloud: '不要', box: '専門業者による設置が必要', diy: '自力で構築、ハードルが高い' },
      { dim: '使い始めやすさ', us: '2分', cloud: '簡単', box: 'やや難しい', diy: 'とても難しい' },
      { dim: '料金体系', us: '買い切り、ソフトウェアは永年アップデート', cloud: '月額サブスクリプション', box: 'ハードウェア費用', diy: '時間コストが大きい' },
      { dim: '画面内蔵', us: '7インチタッチスクリーン', cloud: '—', box: 'なし、別途購入', diy: 'デバイス次第' },
      { dim: 'AIエージェント向け設計', us: 'AIエージェント一式をプリインストール', cloud: '非対応', box: '一部対応', diy: '非対応' },
      { dim: 'サポート', us: '24時間AIカスタマーサポート + 専門スタッフによるリモートサポート', cloud: 'プラットフォームのカスタマーサポート', box: '自力 / コミュニティ', diy: '自力で解決' },
    ],
    tagline: '時間も手間も心配も省いて、ハードルはゼロに',
  },
  versions: {
    title: 'あなたに合うエディションを選択',
    subtitle: '一度の購入で、ずっと使える',
    plans: [
      {
        name: 'プロ版',
        price: '3,999元',
        badge: '買い切り',
        audience: '個人・小規模チーム',
        features: [
          '本体 + Windows 11 Enterprise + ChatU Mateプリインストール',
          'DeepSeek Harness + Qwenローカルモデル、ソフトウェアは永年無料アップデート',
          '1,000万トークンを無料付与',
          '24時間AIカスタマーサポート + アクティベーション後7日間、専門スタッフによる無料リモートサポート',
        ],
        cta: '今すぐ予約',
      },
      {
        name: 'エンタープライズ版',
        price: '個別見積もり',
        badge: 'カスタム導入',
        audience: '部門 / 社内クラスター',
        features: [
          '複数台のクラスターを一元管理、権限管理、カスタム導入',
          'プロ版の全機能に加え、社内ネットワークのLLMにも接続可能',
          '無料トークンはプランに応じて付与',
          '専任サポート',
        ],
        cta: 'お問い合わせ',
      },
    ],
    note: '無料トークンの付与条件は、ご購入時の公式発表に準じます。用途に合わせた各種トークンサブスクリプションプランもご用意しています。詳しくはカスタマーサポートまでお問い合わせください。',
  },
  pricing: {
    title: '手に入れてからが、本当のスタート',
    subtitle: 'AgentStation本体だけでなく、充実したサポートサービスもあわせてご用意しています',
    cards: [
      {
        title: '充実のコース体系',
        desc: 'L0 AI入門 → L1 ツール実践 → L2 マルチエージェント連携 → L3 企業ワークフロー設計。オンライン録画講座 + 対面授業',
      },
      {
        title: '対面ブートキャンプ',
        desc: 'Hubナイトスクール、OPC実践ブートキャンプ（基礎 → 認定 → 実践）、アクセラレーター。優秀な受講者はOPCを登記してHubに入居できます',
      },
      {
        title: '複数都市のコミュニティ',
        desc: 'オンラインで経験を共有し、オフラインで直接交流。PECカンファレンス · コミュニティ会員350万人以上',
      },
      {
        title: 'サポート・アフターサービス',
        desc: '24時間AIカスタマーサポート。アクティベーション後7日間は専門スタッフによるリモートサポートが無料、以降は1回ごとの有料対応',
      },
    ],
  },
  finalCta: {
    title: 'あなたの頼れるAIワークステーション',
    eyebrow: 'スマートに働く · 安全を守る',
    subtitle: 'インストールも設定も不要。開封から2分で、あなただけのAIが手に入ります。',
    bookCta: '今すぐ予約 3,999元',
    jdCta: 'JD.comで購入',
    jdLogoAlt: 'JD.com',
    partnerCta: 'ビジネス提携 · 販売パートナー',
    items: [
      { title: 'コミュニティに参加', desc: '8都市のユーザーと情報交換し、最新の活用法をキャッチ' },
      { title: 'テクニカルサポート', desc: '24時間AIカスタマーサポート。困ったときはQRコードをスキャンするだけ' },
      { title: '販売パートナー募集', desc: 'AgentStationのパートナーとなり、AIワークステーション市場を共に開拓しましょう' },
    ],
    imagePlaceholder: '（画像準備中）',
  },
}

const ko: typeof zh = {
  hero: {
    badge: 'AI 시대의 새로운 카테고리',
    title: 'AgentStation',
    tagline: '당신의 든든한 AI 워크스테이션',
    taglineCaps: '프라이빗 · 포터블 · 플러그 앤 플레이',
    subtitle:
      '설치도 설정도 필요 없고, 데이터는 기본적으로 로컬에 저장됩니다. 상자를 열고 2분이면 온전히 나만의 AI를 갖게 됩니다.',
    features: ['7인치 터치스크린', '2분 만에 준비', '에이전트 기본 탑재', '평생 무료 업데이트'],
    badges: ['1회 구매', '700 g', '대기 5시간'],
    bookCta: '지금 예약 3,999위안',
    jdCta: 'JD.com에서 구매',
    jdLogoAlt: 'JD.com',
    versionsCta: '전체 에디션 보기',
    imageAlt: 'AgentStation',
  },
  painPoint: {
    title: '어렵고, 불안하고, 막막하고, 번거롭다',
    subtitle: 'AI는 기술 마니아만의 장난감이 아닙니다',
    cards: [
      {
        label: '어려움',
        title: '높은 기술 장벽',
        items: [
          '환경 설정과 의존성 충돌, 한 번 막히면 바로 포기',
          'API, 모델, 에이전트 배포까지 모두 시행착오의 연속',
          '새로운 도구는 계속 나오는데 업그레이드와 유지보수가 따라가지 못함',
        ],
      },
      {
        label: '불안함',
        title: '떨치기 힘든 보안 우려',
        items: [
          '회사 자료를 클라우드에 올리기가 꺼려짐',
          '데이터 유출과 시스템 불안정에 대한 걱정',
          '문제가 생겨도 물어볼 곳이 없음',
        ],
      },
      {
        label: '막막함',
        title: '어디서부터 시작할지 모름',
        items: [
          'AI 에이전트가 실제로 무엇을 할 수 있는지 모름',
          '도구를 어떻게 조합해야 할지 모름',
          '내 업무에 어떻게 적용할 수 있을지 감이 오지 않음',
        ],
      },
      {
        label: '번거로움',
        title: '과도한 유지 관리 부담',
        items: [
          '배우기 어렵고 익숙해지기까지 오래 걸림',
          '업그레이드는 번거롭고 문제 원인은 찾기 어려움',
          '쏟아지는 새 도구를 따라가기만 해도 지침',
        ],
      },
    ],
    closing: '프라이버시와 보안은 지키면서, 상자에서 꺼내 바로 쓸 수 있도록. AgentStation은 바로 그것을 위해 탄생했습니다.',
  },
  simplicity: {
    eyebrow: '컴퓨터를 쓸 줄 안다면 AI 에이전트도 쓸 수 있습니다',
    title: '3단계로 시작하는 AI 여정',
    steps: [
      { title: '전원 켜기', desc: '전원만 연결하면 끝. 설치 마법사도 명령어 입력도 필요 없습니다' },
      { title: 'ChatU Mate 실행', desc: '한 번 탭하면 DeepSeek Harness 등 에이전트가 바로 준비됩니다' },
      { title: '업무 시작', desc: '작업을 말하면 AI가 계획을 세우고 도구를 활용해 끝까지 처리합니다' },
    ],
  },
  highlights: {
    items: [
      {
        title: '개봉 즉시 사용',
        desc: 'OS, AI 에이전트, 모델 사전 설치. 개봉부터 업무 시작까지 단 2분',
        tag: '설정 제로 · 진입 장벽 제로',
      },
      {
        title: '로컬에서 안전하게',
        desc: 'Qwen 등 로컬 모델이 오프라인에서 작동하므로 핵심 데이터를 퍼블릭 클라우드에 올릴 필요가 없습니다',
        tag: '기본 로컬 저장 · 3C 인증',
      },
      {
        title: 'AI 에이전트 기본 탑재',
        desc: 'DeepSeek Harness, Hermes, OpenClaw를 기본 탑재해 작업을 분해하고 도구를 호출합니다',
        tag: '멀티에이전트 · 평생 업데이트',
      },
      {
        title: '7인치 HD 터치스크린',
        desc: '화면이 내장되어 있어 탭 한 번으로 대화할 수 있습니다. 외부 모니터와 키보드도 연결 가능',
        tag: '터치 조작 · 어디든 휴대',
      },
    ],
  },
  ecosystem: {
    badge: '모든 AgentStation에 기본 설치',
    title: 'ChatU Mate: AI 에이전트 매니저',
    subtitle: 'AI 에이전트, 모델, Skills, 업데이트를 한곳에서 모두 관리',
    imageAlt: 'ChatU Mate 워크스페이스',
    caption: 'ChatU Mate 워크스페이스 · 터치로 조작, 명령줄 불필요',
    cards: [
      {
        title: '멀티에이전트 관리',
        desc: 'DeepSeek Harness, OpenClaw, Hermes를 탭 한 번으로 시작·중지하고, Codex, WorkBuddy 등 주요 플랫폼도 언제든 설치할 수 있습니다',
      },
      {
        title: '자유로운 모델 전환',
        desc: '로컬 Qwen, 기업 내부망 LLM, 클라우드 모델을 한곳에서 설정하고 언제든 전환할 수 있습니다',
      },
      {
        title: '다재다능한 Skills',
        desc: '이미지·동영상 생성 스킬을 기본 탑재했습니다. 우수한 워크플로우는 템플릿으로 만들어 팀 전체가 클릭 한 번으로 재사용할 수 있습니다',
      },
      {
        title: '주요 업무 플랫폼 연동',
        desc: 'WeCom, Feishu (Lark), DingTalk 등과 연동해 AI를 일상 업무 흐름에 바로 녹여냅니다.',
      },
    ],
    platforms: ['WeChat', 'Feishu (Lark)', 'DingTalk', 'WeCom', 'QQ', 'ChatU', '기타…'],
    upgradeBar: '원탭 업데이트 · AI 에이전트와 ChatU Mate 소프트웨어 평생 무료 업데이트',
  },
  hardwareSpec: {
    angleAlt: '각도',
    caption: '전면: 7인치 터치스크린, 부팅 즉시 바탕화면 | 스탠드: 어디서든 세워서 사용 | 측면: USB, HDMI, 방열구',
    title: '손바닥 크기의 AI 워크스테이션',
    subtitle: '가방에 쏙 들어가는 크기. 모니터만 연결하면 순식간에 데스크톱 워크스테이션으로 변신합니다',
    coreTitle: '주요 사양',
    coreSpecs: [
      { name: '디스플레이', value: '7인치 HD 터치스크린', highlight: '', suffix: '' },
      { name: '무게', value: '약 700 g', highlight: '', suffix: '' },
      { name: '배터리', value: '배터리 내장, 대기 약 5시간', highlight: '', suffix: '' },
      { name: '운영체제', value: 'Windows 11 Enterprise', highlight: '', suffix: '' },
      { name: '프로세서', value: 'Intel(R) N150', highlight: '', suffix: '' },
      { name: '메모리', value: '16 GB', highlight: '', suffix: '' },
      { name: '스토리지', value: '256 GB / 512 GB / 1 TB', highlight: '', suffix: '' },
      { name: '로컬 모델', value: 'Qwen 등, 오프라인 사용 가능', highlight: '', suffix: '' },
    ],
    ioTitle: '포트 및 확장',
    ioSpecs: [
      { name: 'USB', value: 'USB × 4 + Type-C × 1, 키보드·마우스·USB 메모리·카메라·프린터를 연결 즉시 사용', highlight: '', suffix: '' },
      { name: '영상 출력', value: 'HDMI / DP, 외부 디스플레이 또는 프로젝터 연결', highlight: '', suffix: '' },
      { name: '네트워크', value: '기가비트 이더넷 + Wi-Fi, 내부망 LLM에 직접 연결', highlight: '', suffix: '' },
      { name: '크기', value: '길이 17.5 cm × 폭 2 cm × 높이 11 cm', highlight: '', suffix: '' },
      { name: '인증', value: '3C 인증 획득', highlight: '', suffix: '' },
    ],
  },
  modes: {
    title: '네 가지 사용 방식: 언제나 · 어디서나 · 원하는 대로 · 필요할 때',
    items: [
      { title: '터치스크린', desc: '내장 화면을 탭해 바로 대화' },
      { title: '키보드 & 마우스', desc: '키보드와 마우스를 연결해 PC처럼 빠르게 입력' },
      { title: '외부 모니터', desc: 'HDMI / DP로 큰 화면에 연결해 데스크톱처럼 업무' },
      { title: '휴대폰 원격 제어', desc: 'WeCom 또는 Feishu (Lark)로 언제든 작업 지시' },
    ],
  },
  scenarios: {
    title: '활용 사례',
    subtitle: '반복 업무는 AI에게 맡기고, 당신은 판단만 하세요',
    items: [
      { title: '이메일 어시스턴트', desc: '자동으로 분류·요약하고 답장 초안까지 작성해 중요한 메일을 놓치지 않습니다' },
      { title: '소셜 미디어 어시스턴트', desc: '주제 선정부터 원고 작성, 레이아웃까지 게시물과 영상을 원스톱으로 제작합니다' },
      { title: '뉴스·여론 모니터링', desc: '업계 뉴스와 경쟁사 동향을 정기적으로 추적하고 브리핑을 자동으로 생성합니다' },
      { title: '데이터 분석가', desc: '스프레드시트를 병합하고 보고서를 정리해 데이터를 시각화된 리포트로 만듭니다' },
      { title: '프레젠테이션 어시스턴트', desc: '한 문장만으로 개요와 전체 슬라이드를 만들어 회의 자료를 금세 준비합니다' },
      { title: '더 많은 활용 사례 공개 예정', desc: 'AgentStation을 업무에 어떻게 더 활용할 수 있을까요? 알려 주시면 다음 활용 사례를 직접 만들어 드리겠습니다' },
    ],
    audienceTitle: 'AgentStation을 쓰는 사람들',
    audiences: [
      { title: '콘텐츠 크리에이터', desc: '글쓰기, 수정, 브레인스토밍까지. 아이디어와 소재는 언제나 내 손안에' },
      { title: '프리랜서', desc: '고객 자료, 계약서, 견적서를 로컬에서 처리해 고객과의 신뢰를 지킵니다' },
      { title: '학생 및 연구자', desc: '논문, 문헌, 데이터 분석까지, 업로드 없이 횟수 제한 없이' },
      { title: '기업 팀', desc: '노하우를 팀 Skills로 축적하고 여러 기기를 중앙에서 관리하며 권한도 통제할 수 있습니다' },
    ],
    banner: '민감한 자료는 많은데 기술 장벽에 발목 잡히고 싶지 않다면? 1인 기업(OPC)의 필수 도구입니다.',
  },
  compare: {
    title: '왜 AgentStation인가요?',
    subtitle: '똑같이 ‘AI를 쓴다’고 해도, 차이는 여기에 있습니다',
    columns: ['비교 항목', 'AgentStation', '클라우드 AI 도구', '기존 AI 박스', '직접 설치'],
    rows: [
      { dim: '데이터 저장', us: '기본 로컬, 내부망 / 클라우드 연결 가능', cloud: '클라우드에 업로드', box: '로컬', diy: '구성에 따라 다름' },
      { dim: '설치 및 설정', us: '필요 없음, 개봉 즉시 사용', cloud: '필요 없음', box: '전문 설치 필요', diy: '직접 구축, 높은 진입 장벽' },
      { dim: '초보자 적응', us: '2분', cloud: '쉬움', box: '다소 어려움', diy: '매우 어려움' },
      { dim: '요금 방식', us: '1회 구매, 소프트웨어 평생 업데이트', cloud: '월 구독', box: '하드웨어 비용', diy: '높은 시간 비용' },
      { dim: '화면 내장', us: '7인치 터치스크린', cloud: '—', box: '없음, 별도 구매', diy: '기기에 따라 다름' },
      { dim: 'AI 에이전트 전용 설계', us: 'AI 에이전트 풀세트 사전 설치', cloud: '미지원', box: '일부 지원', diy: '미지원' },
      { dim: '지원', us: '24시간 AI 고객 지원 + 전문가 원격 지원', cloud: '플랫폼 고객센터', box: '직접 해결 / 커뮤니티', diy: '직접 해결' },
    ],
    tagline: '시간 절약, 수고 절약, 걱정 끝, 진입 장벽 제로',
  },
  versions: {
    title: '나에게 맞는 에디션 선택',
    subtitle: '한 번 구매로 평생 사용',
    plans: [
      {
        name: '프로 에디션',
        price: '3,999위안',
        badge: '1회 구매',
        audience: '개인 및 소규모 팀',
        features: [
          '본체 + Windows 11 Enterprise + ChatU Mate 사전 설치',
          'DeepSeek Harness + Qwen 로컬 모델, 소프트웨어 평생 무료 업데이트',
          '1,000만 토큰 무료 제공',
          '24시간 AI 고객 지원 + 활성화 후 7일간 전문가 무료 원격 안내',
        ],
        cta: '지금 예약',
      },
      {
        name: '엔터프라이즈 에디션',
        price: '별도 견적',
        badge: '맞춤형 배포',
        audience: '부서 / 내부망 클러스터',
        features: [
          '다중 기기 클러스터 통합 관리, 권한 제어, 맞춤형 배포',
          '프로 에디션의 모든 기능 + 기업 내부망 LLM 연결',
          '플랜에 따라 무료 토큰 제공',
          '전담 서비스',
        ],
        cta: '문의하기',
      },
    ],
    note: '무료 토큰 제공 정책은 구매 시점의 공식 공지를 따릅니다. 다양한 용도에 맞춘 토큰 구독 플랜도 준비되어 있으니, 자세한 내용은 고객센터로 문의해 주세요.',
  },
  pricing: {
    title: '구매는 끝이 아니라 시작입니다',
    subtitle: 'AgentStation 한 대에 그치지 않고, 다양한 지원 서비스가 함께 제공됩니다',
    cards: [
      {
        title: '체계적인 교육 과정',
        desc: 'L0 AI 입문 → L1 도구 실습 → L2 멀티에이전트 협업 → L3 기업 워크플로우 설계, 온라인 녹화 강의 + 오프라인 대면 수업',
      },
      {
        title: '오프라인 부트캠프',
        desc: 'Hub 야간 강좌, OPC 부트캠프(기초 → 인증 → 실전), 액셀러레이터. 우수 수강생은 OPC를 등록하고 Hub에 입주할 수 있습니다',
      },
      {
        title: '여러 도시의 커뮤니티',
        desc: '온라인에서 경험을 나누고 오프라인에서 직접 만나 교류합니다. PEC 컨퍼런스 · 커뮤니티 회원 350만 명 이상',
      },
      {
        title: '고객 지원 및 A/S',
        desc: '24시간 AI 고객 지원, 활성화 후 7일간 전문가 원격 안내 무료, 이후에는 건별 유료',
      },
    ],
  },
  finalCta: {
    title: '당신의 든든한 AI 워크스테이션',
    eyebrow: '스마트한 업무 · 든든한 보안',
    subtitle: '설치도 설정도 필요 없습니다. 상자를 열고 2분이면 온전히 나만의 AI를 갖게 됩니다.',
    bookCta: '지금 예약 3,999위안',
    jdCta: 'JD.com에서 구매',
    jdLogoAlt: 'JD.com',
    partnerCta: '비즈니스 제휴 · 채널 파트너',
    items: [
      { title: '커뮤니티 참여', desc: '8개 도시의 사용자와 노하우를 나누고 최신 활용법을 얻으세요' },
      { title: '기술 지원', desc: '24시간 AI 고객 지원, 궁금한 점은 QR 코드를 스캔해 바로 문의하세요' },
      { title: '채널 파트너 모집', desc: 'AgentStation 파트너가 되어 AI 워크스테이션 시장의 성장을 함께 누리세요' },
    ],
    imagePlaceholder: ' (이미지 준비 중)',
  },
}

export const agentStationContent: LocalizedContent<typeof zh> = { zh, en, ja, ko }
