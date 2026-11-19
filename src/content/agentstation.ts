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

export const agentStationContent: LocalizedContent<typeof zh> = { zh, en }
