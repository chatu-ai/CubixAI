import type { LocalizedContent } from '@/i18n/useContent'

/** OPC Hub 页（/opc-hub）正文：zh 为中文原文，en 为英文译文 */
const zh = {
  hero: {
    titleLine1: '面向 OPC 时代的 AI 创业',
    titleLine2: '生态基础设施平台',
    subtitle: '赋能超级个体：生成式 AI 时代的创新园区解决方案',
    chips: ['共享算力', '办公空间', '生态服务', 'AI 创业闭环'],
    consult: '立即咨询',
    learnMore: '了解方案',
  },
  audiences: {
    sceneAlt: 'OPC Hub 场景',
    campus: {
      title: '面向园区',
      pain: '痛点：园区招商缺乏 AI 特色竞争力，创业者算力成本高、信息孤立、工具更新慢，无统一算力管控平台。',
      solution:
        '方案：部署 OPC Hub 园区管控中台，共享算力并发放算力券，汇聚全品类大模型与行业智能体；配套 AI 培训、创业导师、路演对接服务，搭建创业者社群，本地私有化合规部署，帮助园区从物业房东转型 AI 产业孵化器。',
    },
    enterprise: {
      title: '面向企业',
      pain: '痛点：人力成本高，员工缺少 AI 实操能力，缺少轻量化创新单元，业务创新迭代缓慢。',
      solution:
        '方案：搭建企业内部 OPC 微型创新单元，落地赛马试错机制；接入一站式多模型 AI 底座，用智能体替代重复工作；配套分层 AI 课程、官方能力认证与行业导师一对一陪跑，共享算力大幅降低技术投入，实现降本增效。',
    },
    university: {
      title: '面向高校',
      pain: '痛点：AI 教学体系落后，学生缺少算力与实战项目，就业创业资源匮乏，校企人才供需脱节。',
      solution:
        '方案：引入 OPC 标准化 AI 实训课程与权威技能认证，开放平台免费算力与模型资源；导入企业真实产业项目用于实训，配备创业导师，常态化举办 AI 沙龙路演，打通校企协同渠道，同步赋能学生就业与轻创业。',
    },
  },
  platform: {
    title: 'OPC Hub——面向 OPC 时代的 AI 创业生态基础设施平台',
    agentsRunning: '个 AI Agent 运行中',
    taglines: [
      'OPC，让一个人成为一家公司；AI 助手让效率提升 10 倍',
      'OPC(One Person Company)：零门槛启动、无需招人、AI 全自动运营',
    ],
    tryNow: '立即体验',
    contactUs: '联系我们',
    /** 与视图中的 statTargets 按顺序对应 */
    stats: [
      { label: '运行中的 AI 助手', format: (v: number) => `${v.toLocaleString()}` },
      { label: '日均服务次数', format: (v: number) => `${v} 万+` },
      { label: '每分钟响应', format: (v: number) => `${v} 个` },
      { label: '服务成功率', format: (v: number) => `${(v / 10).toFixed(1)}%` },
    ],
    consoleAlt: 'AIGC 中控后台',
    capabilities: [
      { title: '模型矩阵', desc: '智能选择和调度最合适的 AI 模型。' },
      { title: 'Agent 化运行', desc: '复杂业务流程封装成独立智能体。' },
      { title: '核心价值', desc: 'AI 能力封装为可运行、可计量的数字商品。' },
    ],
  },
  conditions: {
    tags: ['垂直化招商', '数字化运营', '拥抱新模式'],
    tagline: '连接超级个体，孵化价值',
    title: 'OPC Hub 能不能落到我们 园区 / 企业 / 高校 ？',
    subtitle: '想做 OPC，你要具备这些条件',
    /** 与视图中的 conditionImages 按顺序对应 */
    groups: [
      {
        category: '园区',
        subtitle: '搭建全域算力与 AI 基础底座，为产业创新落地提供核心支撑。',
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
        items: [
          { title: '学科与人才', items: ['计算机、人工智能、软件工程等相关专业支撑', '有研究生或高年级本科生可参与实际项目', '教师团队中有对 Agent、LLM、RAG 等方向有研究兴趣的骨干'] },
          { title: '科研与课题', items: ['有省部级或校企联合课题资源，能将 OPC 技术嵌入研究', '实验室或课题组有算力设备或云资源配额', '愿意将 OPC 作为教学案例或课程实践内容'] },
          { title: '产教融合', items: ['有校企合作基础，能对接企业真实业务场景', '愿意共建实习基地、联合实验室或技术转化中心', '有科技成果转化机制，能将学生项目或研究成果推向市场'] },
          { title: '社群与活动', items: ['有学生技术社团（如 AI 社团、开发者俱乐部）作为种子用户', '能承办 OPC 技术沙龙、黑客松、Workshop 等线下活动', '校园内有合适的场地用于日常交流、项目展示和成果路演'] },
        ],
      },
    ],
  },
  services: {
    title: '软积木 OPC 产业生态整体解决方案',
    subtitle: '构建一个 AI 时代的新型产业形态',
    /** 与视图中的 serviceImages 按顺序对应 */
    items: [
      { title: 'OPC Hub 支撑平台', items: ['OPC Hub 系统', '授权账号（不超过约定数量）', '统一 AI 能力底座'] },
      { title: '全栈 AI 课程体系', items: ['OPC 标准化培训体系', '初级|中级|高级 100+实战AI课程', 'OPC认证证书'] },
      { title: 'AI 训练营 & 线下活动', items: ['开展企业、行业双专场 AI 主题沙龙', '路演 + 对接 + 转化', 'AI 训练营，赋能产业落地 AI 应用'] },
      { title: '算力调度平台', items: ['多算力源统一调度', '企业低门槛用算力', '为 AI 应用落地赋能'] },
      { title: 'OPC 创业 & 产业导师', items: ['AI 创业导师', '行业落地导师', '企业数智化转型实战派'] },
      { title: 'AI 运营支撑服务', items: ['社群 & 企业运营方法论', '内容、品牌、招商协同', '（可选）国际化 PEC 大会'] },
    ],
    footer:
      '通过生态合作机制，链接技术、场景、资本与社区资源，推动 OPC 从个体探索走向规模化协同，真正让 AI 成为每一位创业者的 "生产力底座"',
  },
  cases: {
    title: '产业生态支撑落地案例',
    featureLabel: '主要特点：',
    /** 与视图中的 caseImages 按顺序对应 */
    items: [
      {
        tag: '中关村 AI 北纬社区（北京·海淀）',
        label: '中关村 AI 北纬社区 人工智能 OPC 服务计划发布',
        slogan: '北京首个人工智能 OPC 服务计划',
        results: ['实现园区企业统一 AI 能力入口', '支撑多场 AI 主题沙龙与技术交流活动', '形成 "社区 + 平台 + 企业" 的轻量化 OPC 生态模型'],
        feature: '验证了 OPC 在社区级载体中的可落地性',
      },
      {
        tag: '中关村（朝阳）AI Space 产业园（北京·朝阳）',
        label: '京朝阳首个 OPC+AI 落地 Aspace',
        slogan: '软积木助力中关村人工智能智用研究院打造服务园区 OPC 平台',
        results: ['支撑园区企业 AI 应用落地与能力提升', '打通 "算力 + 平台 + 培训 + 活动" 的完整闭环', '显著提升园区在 AI 产业方向的承载能力'],
        feature: '验证了 OPC 在产业园级别的规模化可行性',
      },
    ],
    closing:
      '软积木致力于为 OPC 生态持续提供稳定、可落地的 AI 产品能力，从多模型、多模态到低门槛部署，系统性支撑 OPC 快速启动与持续成长',
    honor: '荣誉：北京首家实现 OPC 体系落地交付的服务方',
  },
  security: {
    title: '自主产权｜合规备案｜安全可控',
    /** 专利行文案：`${patentNoLabel} ${no}`、`${filedLabel}${date}${publishedLabel}${pub}` */
    patentNoLabel: '发明公布',
    filedLabel: '申请日：',
    publishedLabel: '；公开(公告)日：',
    /** 与视图中的 patents 按顺序对应 */
    patentTitles: ['动态优先级调度方法、装置、计算机设备和存储介质', '基于资源预测利用率的调度方法及系统'],
    /** 与视图中的 securityImages 按顺序对应 */
    items: [
      { title: '私有化部署', desc: '确保平台最高控制权，数据与能力均保留在园区内部。' },
      { title: '全程可追溯', desc: '所有操作均有日志记录，保障服务调用全程透明可追溯。' },
      { title: '权威可审计', desc: '支持第三方机构进行安全审计，确保平台设计合规可信。' },
      { title: '数据安全', desc: '采用高强度加密与访问控制，全方位守护核心数据资产。' },
    ],
  },
  value: {
    title: 'OPC + AI 产业支撑平台 让 OPC 智能落地更具象',
    subtitle: 'OPCHub 提供多引擎、多模态的 AI 能力底座，大幅降低 AI 接入以及使用门槛。',
    cards: [
      { title: '赋能产业园区', desc: '差异化 AI 定位解决招商空置，统管算力数据精准补贴；集聚 OPC 创业群体，园区转型 AI 孵化样板' },
      { title: '助力实体企业', desc: '轻量化组织控人力成本，全员掌握 AI 实操，赛马机制迭代业务；AI 智能体替代重复工作，降本增效、培育创新业务。' },
      { title: '服务各大高校', desc: '搭建 AI 产教融合体系，补齐实训短板，提升学生就业创业能力；打通校企资源，持续输送适配产业的 AI 专业人才。' },
    ],
  },
  ecosystem: {
    title: 'AI 服务生态',
    subtitle: '包含：活动、咨询、培训、课程、书籍等全面的 AI 生态支持，以OPC 创业为核心的深度服务生态圈。',
    events: {
      title: '活动',
      desc: '举办峰会、论坛、沙龙等系列行业活动，搭建全球化 AI 交流合作平台。',
    },
    consulting: {
      title: '咨询培训',
      desc: '定制化 AI 咨询服务 + 实战化培训，打造企业专属 AI 应用能力。',
    },
    courses: {
      title: '课程',
      desc: '打造从基础到实战的系统化 AI 课程，赋能学员快速掌握前沿 AI 技能。',
      imageAlt: '课程',
    },
    books: {
      title: '书籍',
      desc: '撰写并发行多本 AI 实战书籍，助力从业者快速掌握 AI 技术与落地技巧。',
      items: [
        { alt: '24 小时精通 AI Agent', title: '《二十四小时 AI Agent》', publisher: '机械工业出版社 出版', desc: '可快速上手实操AI的畅销书。' },
        { alt: '解锁 AI 力量', title: '《解锁 AI 力量》', publisher: '中共中央党校出版社 出版', desc: 'AI行业全景发展的权威读本。' },
        { alt: '时代的 OPC', title: '《时代的 OPC 》', publisher: '机械工业出版社 出版', desc: '一人公司从0到1方法论。' },
      ],
    },
  },
  ending: {
    title: 'AI 浪潮奔涌，软积木让 OPC 持续领先',
    subtitle: '我们要做的不是一次性建设的园区，而是一个能与 AI 同频进化、持续成长的产业园区',
    cards: [
      { title: 'OPC 体系持续成长', desc: '从方法论到平台化，从工具能力到系统能力，让OPC 形成可复制、可扩展的产业操作体系。' },
      { title: '园区能力不断进化', desc: '园区不再是空间载体，而是集算力、人才、企业与服务于一体的智能协同平台。' },
      { title: '产业规模持续扩大', desc: '随着企业接入、应用落地与生态聚集，OPC 产业生态呈现出可持续放大的网络效应。' },
      { title: '服务能力同步增强', desc: '我们在平台、课程、算力、导师与运营体系上的能力持续升级，为园区提供长期、稳定、可演进的支撑。' },
    ],
    slogan: 'OPC Hub——面向 OPC 时代的 AI 创业生态基础设施平台',
    contactPrompt: '想要了解更多，请联系我们',
    qrAlt: '联系我们',
  },
}

const en: typeof zh = {
  hero: {
    titleLine1: 'AI Startup Ecosystem Infrastructure',
    titleLine2: 'for the One-Person Company Era',
    subtitle: 'Empowering super individuals: an innovative campus solution for the generative AI era',
    chips: ['Shared Compute', 'Office Space', 'Ecosystem Services', 'End-to-End AI Startup Support'],
    consult: 'Consult now',
    learnMore: 'Learn more',
  },
  audiences: {
    sceneAlt: 'OPC Hub in action',
    campus: {
      title: 'For Campuses',
      pain: 'Pain points: Campuses lack a distinctive AI edge for attracting tenants, while entrepreneurs face high compute costs, information silos and slow tool updates, with no unified platform for managing compute.',
      solution:
        'Solution: Deploy the OPC Hub campus management platform to share compute, issue compute vouchers and bring together large models of every kind plus industry AI agents. Add AI training, startup mentors, pitch events and matchmaking, build an entrepreneur community, and stay compliant with local on-premises deployment, so the campus evolves from landlord into AI industry incubator.',
    },
    enterprise: {
      title: 'For Enterprises',
      pain: 'Pain points: High labor costs, employees without hands-on AI skills, no lightweight innovation units, and slow business innovation.',
      solution:
        'Solution: Set up in-house OPC micro innovation units with a competitive trial-and-error mechanism. Connect to a one-stop, multi-model AI foundation and let AI agents take over repetitive work. Tiered AI courses, official skill certification and one-on-one coaching from industry mentors come included, while shared compute sharply cuts technology spending, lowering costs and raising efficiency.',
    },
    university: {
      title: 'For Universities',
      pain: 'Pain points: Outdated AI teaching, students without compute or real-world projects, scarce career and startup resources, and a mismatch between graduates and what industry needs.',
      solution:
        'Solution: Introduce standardized OPC hands-on AI courses with recognized skill certification, and open up free compute and model resources on the platform. Bring in real enterprise projects for practical training, assign startup mentors, host regular AI salons and pitch events, and connect universities with industry to boost student employment and lightweight entrepreneurship.',
    },
  },
  platform: {
    title: 'OPC Hub: AI Startup Ecosystem Infrastructure for the OPC Era',
    agentsRunning: 'AI agents running',
    taglines: [
      'OPC turns one person into a whole company, with AI assistants boosting efficiency 10x',
      'OPC (one-person company): start with zero barriers, no hiring needed, operations fully run by AI',
    ],
    tryNow: 'Try it now',
    contactUs: 'Contact us',
    stats: [
      { label: 'AI Assistants Running', format: (v: number) => `${v.toLocaleString()}` },
      { label: 'Daily Requests', format: (v: number) => `${v * 10}K+` },
      { label: 'Responses per Minute', format: (v: number) => `${v}` },
      { label: 'Success Rate', format: (v: number) => `${(v / 10).toFixed(1)}%` },
    ],
    consoleAlt: 'AIGC control console',
    capabilities: [
      { title: 'Model Matrix', desc: 'Intelligently selects and orchestrates the best-fit AI model.' },
      { title: 'Agent-Based Operation', desc: 'Complex business processes packaged as standalone AI agents.' },
      { title: 'Core Value', desc: 'AI capabilities packaged as runnable, meterable digital products.' },
    ],
  },
  conditions: {
    tags: ['Vertical Tenant Attraction', 'Digital Operations', 'New Business Models'],
    tagline: 'Connecting super individuals, incubating value',
    title: 'Is OPC Hub Right for Our Campus / Enterprise / University?',
    subtitle: 'What you need to launch an OPC program',
    groups: [
      {
        category: 'Campus',
        subtitle: 'Build campus-wide compute and AI infrastructure as the core foundation for industrial innovation.',
        items: [
          { title: 'Resources', items: ['Available office space: ≥1,000 m² recommended', 'Dedicated event venue (for pitch events / training / closed-door meetings)', 'OPC entrepreneur community (individuals / small teams)'] },
          { title: 'Operations', items: ['3–5 full-time on-site operations staff (tenant attraction / events / community / government & enterprise liaison)', 'Experience running industrial parks, incubators or accelerators (a plus)'] },
          { title: 'Policy & Resources', items: ['Clear local government support for AI / the digital economy / industrial upgrading / innovation and entrepreneurship', 'Access to policies, projects, funding or compute vouchers'] },
          { title: 'Data & Compute', items: ['Compliant, usable industry data', 'A stable, schedulable compute environment'] },
        ],
      },
      {
        category: 'Enterprise',
        subtitle: 'Use an AI enablement system to activate in-house R&D teams, ship projects fast and build hands-on business capability.',
        items: [
          { title: 'Organization Size', items: ['Headcount: typically 1,000+, with multiple layers and business units', 'Complex product lines: beyond the core flagship products, many small scenarios, internal tools and edge innovation needs', 'Innovation can\'t be planned top-down: leadership can\'t see every business scenario'] },
          { title: 'Innovation Mechanism', items: ['An existing project-team model: groups of 3–5 can work independently and iterate quickly', 'A culture or track record of "letting those closest to the front line make the decisions" (a plus)', 'Employees motivated to spot opportunities and form teams on their own'] },
          { title: 'Resource Openness', items: ['Internal platforms, channels, data and technology in place, plus a willingness to pool and share them', 'AI tools, compute and dev environments available internally or quick to connect', 'Ability to turn big-company "resource depth" into small-team "startup agility"'] },
          { title: 'Management Pain Points', items: ['Innovation needs scattered across business lines, with no single entry point or incubation mechanism', 'High cross-department barriers make it hard for small teams to get resources quickly', 'A need for outside input: OBC mechanism design, AI methodology training, benchmark case studies'] },
        ],
      },
      {
        category: 'University',
        subtitle: 'Use the OPC + AI innovation model to help students put innovation and entrepreneurship into practice.',
        items: [
          { title: 'Disciplines & Talent', items: ['Related programs such as computer science, AI and software engineering', 'Graduate or senior undergraduate students available for real projects', 'Core faculty with research interests in agents, LLMs, RAG and related fields'] },
          { title: 'Research & Projects', items: ['Provincial, ministerial or joint university–industry research projects that can incorporate OPC technology', 'Labs or research groups with compute hardware or cloud resource quotas', 'Willingness to use OPC as a teaching case or course project'] },
          { title: 'Industry–Education Integration', items: ['Existing industry partnerships that provide access to real business scenarios', 'Willingness to co-build internship bases, joint labs or technology transfer centers', 'Mechanisms for bringing student projects and research results to market'] },
          { title: 'Community & Events', items: ['Student tech clubs (e.g., AI societies, developer clubs) as seed users', 'Capacity to host OPC tech salons, hackathons, workshops and other in-person events', 'Suitable space at the university for daily exchange, project showcases and pitch events'] },
        ],
      },
    ],
  },
  services: {
    title: 'CubixAI End-to-End OPC Industry Ecosystem Solution',
    subtitle: 'Building a new industry model for the AI era',
    items: [
      { title: 'OPC Hub Platform', items: ['OPC Hub system', 'Licensed accounts (up to the agreed number)', 'Unified AI capability foundation'] },
      { title: 'Full-Stack AI Curriculum', items: ['Standardized OPC training system', '100+ hands-on AI courses: beginner | intermediate | advanced', 'OPC certification'] },
      { title: 'AI Bootcamps & Events', items: ['AI-themed salons for enterprises and for industries', 'Pitch events + matchmaking + conversion', 'AI bootcamps that help industries deploy AI applications'] },
      { title: 'Compute Scheduling Platform', items: ['Unified scheduling across compute sources', 'Low-barrier compute access for businesses', 'Powering real-world AI applications'] },
      { title: 'OPC Startup & Industry Mentors', items: ['AI startup mentors', 'Industry deployment mentors', 'Hands-on experts in enterprise digital transformation'] },
      { title: 'AI Operations Support', items: ['Community & enterprise operations playbooks', 'Coordinated content, branding and tenant attraction', '(Optional) International PEC conference'] },
    ],
    footer:
      'Through ecosystem partnerships, we connect technology, use cases, capital and community resources, taking OPC from individual exploration to large-scale collaboration and making AI the true "productivity foundation" for every entrepreneur.',
  },
  cases: {
    title: 'Industry Ecosystem Case Studies',
    featureLabel: 'Key takeaway: ',
    items: [
      {
        tag: 'Zhongguancun AI Beiwei Community (Haidian, Beijing)',
        label: 'Zhongguancun AI Beiwei Community launches its AI OPC service program',
        slogan: 'Beijing\'s first AI OPC service program',
        results: ['A unified AI access point for campus businesses', 'Supported multiple AI salons and tech exchange events', 'Established a lightweight "community + platform + enterprise" OPC ecosystem model'],
        feature: 'Proved that OPC works at the community level',
      },
      {
        tag: 'Zhongguancun (Chaoyang) AI Space Industrial Park (Chaoyang, Beijing)',
        label: 'Aspace: the first OPC + AI deployment in Chaoyang, Beijing',
        slogan: 'CubixAI helped the Zhongguancun Institute of AI Applications build an OPC platform serving the park',
        results: ['Supported AI adoption and upskilling for park businesses', 'Connected "compute + platform + training + events" into one complete loop', 'Significantly strengthened the park\'s capacity to host AI businesses'],
        feature: 'Proved that OPC can scale at the industrial-park level',
      },
    ],
    closing:
      'CubixAI is committed to giving the OPC ecosystem stable, deployable AI products, from multi-model and multimodal capabilities to low-barrier deployment, systematically helping OPCs launch fast and keep growing.',
    honor: 'Recognition: Beijing\'s first provider to deliver a fully deployed OPC system',
  },
  security: {
    title: 'Proprietary IP | Regulatory Filing | Secure & Controllable',
    patentNoLabel: 'Invention publication No.',
    filedLabel: 'Filing date: ',
    publishedLabel: '; Publication date: ',
    patentTitles: ['Dynamic priority scheduling method, apparatus, computer device and storage medium', 'Scheduling method and system based on predicted resource utilization'],
    items: [
      { title: 'On-Premises Deployment', desc: 'Keeps full control of the platform, with all data and capabilities staying inside the campus.' },
      { title: 'End-to-End Traceability', desc: 'Every operation is logged, keeping all service calls transparent and traceable.' },
      { title: 'Independently Auditable', desc: 'Supports third-party security audits to ensure a compliant, trustworthy platform design.' },
      { title: 'Data Security', desc: 'Strong encryption and access control protect your core data assets end to end.' },
    ],
  },
  value: {
    title: 'OPC + AI Industry Platform: Making Intelligent OPC Deployment Tangible',
    subtitle: 'OPC Hub provides a multi-engine, multimodal AI foundation that dramatically lowers the barrier to accessing and using AI.',
    cards: [
      { title: 'Empowering Industrial Parks', desc: 'A differentiated AI positioning fills vacant space, and centrally managed compute data enables targeted subsidies; by attracting OPC entrepreneurs, the park becomes a model AI incubator.' },
      { title: 'Supporting Traditional Businesses', desc: 'Lean teams keep labor costs in check, every employee gains hands-on AI skills, and internal competition drives business iteration; AI agents take over repetitive work, cutting costs, raising efficiency and nurturing new businesses.' },
      { title: 'Serving Universities', desc: 'Build an AI industry–education system that fills gaps in practical training and improves students\' employability and entrepreneurial skills; connect university and industry resources to supply a steady stream of industry-ready AI talent.' },
    ],
  },
  ecosystem: {
    title: 'AI Service Ecosystem',
    subtitle: 'Comprehensive AI ecosystem support, including events, consulting, training, courses and books: an in-depth service ecosystem built around OPC entrepreneurship.',
    events: {
      title: 'Events',
      desc: 'We host summits, forums, salons and other industry events, building a global platform for AI exchange and collaboration.',
    },
    consulting: {
      title: 'Consulting & Training',
      desc: 'Tailored AI consulting plus hands-on training to build each enterprise\'s own AI capabilities.',
    },
    courses: {
      title: 'Courses',
      desc: 'Systematic AI courses, from fundamentals to real-world practice, help learners quickly master cutting-edge AI skills.',
      imageAlt: 'Course',
    },
    books: {
      title: 'Books',
      desc: 'We have written and published several practical AI books that help professionals quickly master AI technology and implementation.',
      items: [
        { alt: 'Master AI Agents in 24 Hours', title: 'AI Agents in 24 Hours', publisher: 'Published by China Machine Press', desc: 'A bestseller for getting hands-on with AI fast.' },
        { alt: 'Unlocking the Power of AI', title: 'Unlocking the Power of AI', publisher: 'Published by the CPC Central Party School Press', desc: 'An authoritative overview of the AI industry.' },
        { alt: 'OPC of Our Time', title: 'OPC of Our Time', publisher: 'Published by China Machine Press', desc: 'A zero-to-one playbook for one-person companies.' },
      ],
    },
  },
  ending: {
    title: 'As the AI Wave Surges, CubixAI Keeps OPC Ahead',
    subtitle: 'We are not building a one-off campus, but an industrial campus that evolves in step with AI and keeps growing.',
    cards: [
      { title: 'An Ever-Growing OPC System', desc: 'From methodology to platform, from tools to systems, OPC becomes a replicable, scalable industry operating system.' },
      { title: 'Ever-Evolving Campus Capabilities', desc: 'A campus is no longer just physical space, but an intelligent collaboration platform that brings together compute, talent, businesses and services.' },
      { title: 'A Steadily Expanding Industry', desc: 'As more businesses join, applications go live and the ecosystem grows, the OPC industry ecosystem gains self-reinforcing network effects.' },
      { title: 'Ever-Stronger Services', desc: 'We keep upgrading our platform, courses, compute, mentors and operations to give campuses long-term, stable and evolving support.' },
    ],
    slogan: 'OPC Hub: AI Startup Ecosystem Infrastructure for the OPC Era',
    contactPrompt: 'Want to learn more? Contact us.',
    qrAlt: 'Contact us',
  },
}

const ja: typeof zh = {
  hero: {
    titleLine1: 'ひとり会社の時代を支える',
    titleLine2: 'AI起業エコシステム基盤',
    subtitle: 'スーパー個人の力を最大化する、生成AI時代の新しい産業パーク・ソリューション',
    chips: ['共有コンピュート', 'オフィススペース', 'エコシステムサービス', 'AI起業を一貫支援'],
    consult: '今すぐ相談',
    learnMore: '詳細を見る',
  },
  audiences: {
    sceneAlt: 'OPC Hubの活用シーン',
    campus: {
      title: '産業パーク向け',
      pain: '課題：産業パークには企業誘致につながるAIならではの強みがなく、起業家は高いコンピュートコスト、情報の孤立、ツール更新の遅れに悩まされています。さらに、コンピュートを一元管理できるプラットフォームもありません。',
      solution:
        '解決策：OPC Hubのパーク管理プラットフォームを導入し、コンピュートの共有やコンピュートバウチャーの発行を行いながら、多様な大規模モデルと業界特化型AIエージェントを一か所に集約します。さらにAIトレーニング、起業メンター、ピッチイベントやビジネスマッチングを提供して起業家コミュニティを育成。オンプレミス展開でコンプライアンスも確保し、産業パークを単なる「貸し手」からAI産業のインキュベーターへと転換します。',
    },
    enterprise: {
      title: '企業向け',
      pain: '課題：人件費が高く、社員にはAIの実務スキルが不足しています。身軽なイノベーション組織もないため、事業の革新がなかなか進みません。',
      solution:
        '解決策：社内にOPC型の小規模イノベーションユニットを設け、競い合いながら試行錯誤する仕組みを導入します。ワンストップのマルチモデルAI基盤に接続し、繰り返し作業はAIエージェントに任せられます。段階別のAIコース、公式スキル認定、業界メンターによる1対1の伴走支援も含まれ、共有コンピュートで技術投資を大幅に抑えながら、コスト削減と効率向上を実現します。',
    },
    university: {
      title: '大学向け',
      pain: '課題：AI教育の体系が時代遅れで、学生がコンピュートや実践的なプロジェクトに触れる機会は限られています。就職・起業のリソースも乏しく、大学が育てる人材と産業界のニーズが噛み合っていません。',
      solution:
        '解決策：OPCの標準化されたAI実践コースと信頼性の高いスキル認定を導入し、プラットフォーム上のコンピュートとモデルを無料で開放します。企業の実プロジェクトを実習に取り入れ、起業メンターを配置し、AIサロンやピッチイベントを定期開催。大学と産業界をつなぎ、学生の就職とスモールスタートの起業を後押しします。',
    },
  },
  platform: {
    title: 'OPC Hub：OPC時代のAI起業エコシステム基盤',
    agentsRunning: '個のAIエージェントが稼働中',
    taglines: [
      'OPCなら、ひとりでも会社になれる。AIアシスタントで効率は10倍に',
      'OPC（One Person Company／ひとり会社）：ハードルなしで始められ、採用も不要。運営はAIが全自動で担います',
    ],
    tryNow: '今すぐ試す',
    contactUs: 'お問い合わせ',
    stats: [
      { label: '稼働中のAIアシスタント', format: (v: number) => `${v.toLocaleString()}` },
      { label: '1日平均リクエスト数', format: (v: number) => `${v}万+` },
      { label: '毎分の応答数', format: (v: number) => `${v}` },
      { label: '成功率', format: (v: number) => `${(v / 10).toFixed(1)}%` },
    ],
    consoleAlt: 'AIGC管理コンソール',
    capabilities: [
      { title: 'モデルマトリクス', desc: '用途に最適なAIモデルをインテリジェントに選択・制御します。' },
      { title: 'エージェント型の運用', desc: '複雑な業務プロセスを、独立したAIエージェントとしてパッケージ化します。' },
      { title: 'コアバリュー', desc: 'AI機能を、実行でき利用量も計測できるデジタル商品として提供します。' },
    ],
  },
  conditions: {
    tags: ['業種特化型の企業誘致', 'デジタル運営', '新たなビジネスモデル'],
    tagline: 'スーパー個人をつなぎ、価値を育む',
    title: 'OPC Hubは、私たちの産業パーク／企業／大学に導入できる？',
    subtitle: 'OPCプログラムの立ち上げに必要な条件',
    groups: [
      {
        category: '産業パーク',
        subtitle: 'パーク全体にコンピュートとAIの基盤を整備し、産業イノベーションを支える中核とします。',
        items: [
          { title: 'リソース', items: ['利用可能なオフィス面積：1,000 m²以上を推奨', '専用のイベントスペース（ピッチイベント／研修／クローズドミーティング用）', 'OPC起業家コミュニティ（個人／小規模チーム）'] },
          { title: 'オペレーション', items: ['常駐の運営スタッフ3〜5名（企業誘致／イベント／コミュニティ／行政・企業との連携）', '産業パーク、インキュベーター、アクセラレーターの運営経験（あれば尚可）'] },
          { title: '政策とリソース', items: ['AI／デジタル経済／産業高度化／イノベーション・起業に対する地元自治体の明確な支援方針', '政策、プロジェクト、資金、コンピュートバウチャーを活用できる体制'] },
          { title: 'データとコンピュート', items: ['コンプライアンスに準拠し、活用できる業界データ', '安定的でスケジューリング可能なコンピュート環境'] },
        ],
      },
      {
        category: '企業',
        subtitle: 'AIによる支援体制で社内の開発チームを活性化し、プロジェクトをスピーディーに形にしながら、実践的な事業遂行力を養います。',
        items: [
          { title: '組織規模', items: ['従業員数：通常1,000名以上。多階層・複数事業部の組織構成', '多岐にわたる製品ライン：主力製品以外にも、小規模なユースケース、社内ツール、周辺領域でのイノベーションニーズが多数存在', 'トップダウンでは計画しきれないイノベーション：経営層がすべての業務シーンを把握するのは困難'] },
          { title: 'イノベーションの仕組み', items: ['プロジェクトチーム制の基盤：3〜5名で独立したチームを組み、素早く検証と改善を重ねられる体制', '「現場に最も近い人が意思決定する」文化や成功事例（あれば尚可）', '社員が自らチャンスを見つけ、自発的にチームを組む意識と意欲'] },
          { title: 'リソースの開放度', items: ['社内のプラットフォーム、チャネル、データ、技術リソースが整っており、それらを集約・共有する意思があること', 'AIツール、コンピュート、開発環境を社内で利用できる、または迅速に接続できること', '大企業の「リソースの厚み」を、小規模チームの「スタートアップ的な機動力」に転換できること'] },
          { title: '経営課題', items: ['イノベーションのニーズが事業部門ごとに分散し、統一窓口やインキュベーションの仕組みがない', '部門間の壁が高く、小規模チームが必要なリソースを素早く確保できない', '外部からの知見が必要：OBCの制度設計、AI方法論の研修、先進事例の参照'] },
        ],
      },
      {
        category: '大学',
        subtitle: 'OPC＋AIのイノベーションモデルで、学生によるイノベーション・起業の実践を後押しします。',
        items: [
          { title: '学問分野と人材', items: ['コンピュータサイエンス、AI、ソフトウェア工学などの関連学科', '実プロジェクトに参加できる大学院生や学部上級生', 'エージェント、LLM、RAGなどの分野に研究関心を持つ中核教員'] },
          { title: '研究とプロジェクト', items: ['OPC技術を組み込める国・地方レベルの研究課題や産学共同研究', 'コンピュート機器やクラウドリソース枠を持つ研究室・研究グループ', 'OPCを授業の事例やコース課題として活用する意欲'] },
          { title: '産学連携', items: ['実際のビジネスシーンに触れられる既存の企業連携', 'インターンシップ拠点、共同研究室、技術移転センターを共同で構築する意欲', '学生のプロジェクトや研究成果を市場に送り出す仕組み'] },
          { title: 'コミュニティとイベント', items: ['シードユーザーとなる学生の技術系サークル（AIサークル、開発者クラブなど）', 'OPC技術サロン、ハッカソン、ワークショップなどの対面イベントを開催できる体制', '日常的な交流、プロジェクト展示、ピッチイベントに使える学内スペース'] },
        ],
      },
    ],
  },
  services: {
    title: 'CubixAI OPC産業エコシステム・トータルソリューション',
    subtitle: 'AI時代の新しい産業モデルを築く',
    items: [
      { title: 'OPC Hubプラットフォーム', items: ['OPC Hubシステム', 'ライセンスアカウント（契約数まで）', '統合AI基盤'] },
      { title: 'フルスタックAIカリキュラム', items: ['標準化されたOPC研修体系', '実践AIコース100+（初級｜中級｜上級）', 'OPC認定資格'] },
      { title: 'AIブートキャンプ＆イベント', items: ['企業向け・業界向けのAIテーマサロン', 'ピッチ＋マッチング＋事業化', '産業へのAI導入を後押しするAIブートキャンプ'] },
      { title: 'コンピュート・スケジューリング基盤', items: ['複数のコンピュート源を一元スケジューリング', '企業が手軽に使えるコンピュート', 'AIアプリケーションの実用化を支援'] },
      { title: 'OPC起業＆業界メンター', items: ['AI起業メンター', '業界導入メンター', '企業DXの実務エキスパート'] },
      { title: 'AI運営サポート', items: ['コミュニティ・企業運営のノウハウ', 'コンテンツ、ブランディング、企業誘致の連携', '（オプション）国際PECカンファレンス'] },
    ],
    footer:
      'エコシステム連携を通じて技術、ユースケース、資本、コミュニティのリソースをつなぎ、OPCを個人の挑戦から大規模な協働へと発展させ、AIをすべての起業家にとって真の「生産性の基盤」にします。',
  },
  cases: {
    title: '産業エコシステム導入事例',
    featureLabel: 'ポイント：',
    items: [
      {
        tag: '中関村AI北緯コミュニティ（北京・海淀区）',
        label: '中関村AI北緯コミュニティ、AI OPCサービスプログラムを発表',
        slogan: '北京初のAI OPCサービスプログラム',
        results: ['パーク内企業向けの統一AIアクセス窓口を実現', '多数のAIサロンや技術交流イベントを支援', '「コミュニティ＋プラットフォーム＋企業」による軽量なOPCエコシステムモデルを確立'],
        feature: 'コミュニティ規模でOPCが機能することを実証',
      },
      {
        tag: '中関村（朝陽）AI Space産業パーク（北京・朝陽区）',
        label: 'Aspace：北京・朝陽区初のOPC＋AI導入事例',
        slogan: 'CubixAI、中関村AI応用研究院によるパーク向けOPCプラットフォームの構築を支援',
        results: ['パーク内企業のAI導入とスキル向上を支援', '「コンピュート＋プラットフォーム＋研修＋イベント」を一つの完結したサイクルとして構築', 'AI関連企業を受け入れるパークの基盤力を大幅に強化'],
        feature: '産業パーク規模でOPCが拡大可能であることを実証',
      },
    ],
    closing:
      'CubixAIは、マルチモデル・マルチモーダルから手軽な導入まで、安定して実用できるAI製品をOPCエコシステムに提供し続け、OPCの迅速な立ち上げと持続的な成長を体系的に支援します。',
    honor: '栄誉：北京で初めてOPCシステムの導入・納品を実現したサービス事業者',
  },
  security: {
    title: '独自の知的財産｜規制当局への届出済み｜安全かつ制御可能',
    patentNoLabel: '発明公開番号',
    filedLabel: '出願日：',
    publishedLabel: '／公開日：',
    patentTitles: ['動的優先度スケジューリング方法、装置、コンピュータ機器及び記憶媒体', 'リソース利用率の予測に基づくスケジューリング方法及びシステム'],
    items: [
      { title: 'オンプレミス展開', desc: 'プラットフォームの完全な管理権を保持し、データと機能はすべてパーク内にとどまります。' },
      { title: 'エンドツーエンドの追跡性', desc: 'すべての操作をログに記録し、サービス呼び出しの透明性と追跡可能性を確保します。' },
      { title: '第三者監査に対応', desc: '第三者機関によるセキュリティ監査に対応し、コンプライアンスに準拠した信頼性の高い設計を保証します。' },
      { title: 'データセキュリティ', desc: '強力な暗号化とアクセス制御により、重要なデータ資産を全方位で保護します。' },
    ],
  },
  value: {
    title: 'OPC＋AI産業プラットフォーム：OPCのインテリジェントな導入を、より具体的に',
    subtitle: 'OPC Hubは、マルチエンジン・マルチモーダルのAI基盤を提供し、AIの導入と活用のハードルを大幅に下げます。',
    cards: [
      { title: '産業パークを強化', desc: 'AIに特化した差別化で空室を解消し、コンピュートデータの一元管理によって的確な補助を実現。OPC起業家を集め、パークをAIインキュベーションのモデルケースへと転換します。' },
      { title: '事業会社を支援', desc: '少人数の組織で人件費を抑え、全社員がAIの実践スキルを習得し、社内競争で事業の改善サイクルを回します。AIエージェントが繰り返し作業を担い、コスト削減と効率化、新規事業の育成を実現します。' },
      { title: '大学をサポート', desc: 'AIによる産学連携の仕組みを構築して実践教育の不足を補い、学生の就職力と起業力を高めます。大学と産業界のリソースをつなぎ、即戦力となるAI人材を継続的に輩出します。' },
    ],
  },
  ecosystem: {
    title: 'AIサービスエコシステム',
    subtitle: 'イベント、コンサルティング、研修、コース、書籍など、包括的なAIエコシステム支援を提供。OPC起業を核とした、奥行きのあるサービスエコシステムです。',
    events: {
      title: 'イベント',
      desc: 'サミット、フォーラム、サロンなどの業界イベントを開催し、グローバルなAI交流・協業の場を築いています。',
    },
    consulting: {
      title: 'コンサルティング＆研修',
      desc: 'カスタマイズされたAIコンサルティングと実践的な研修で、企業独自のAI活用力を育てます。',
    },
    courses: {
      title: 'コース',
      desc: '基礎から実践まで体系化されたAIコースで、受講者が最先端のAIスキルを素早く習得できるよう支援します。',
      imageAlt: 'コース',
    },
    books: {
      title: '書籍',
      desc: '実践的なAI書籍を複数執筆・出版し、実務者がAI技術と導入ノウハウを素早く身につけられるよう支援しています。',
      items: [
        { alt: '24時間でマスターするAIエージェント', title: '『24時間でわかるAIエージェント』', publisher: '機械工業出版社 刊', desc: 'AIをすぐに実践できるベストセラー。' },
        { alt: 'AIの力を解き放つ', title: '『AIの力を解き放つ』', publisher: '中国共産党中央党校出版社 刊', desc: 'AI産業の全体像を示す権威ある一冊。' },
        { alt: '時代のOPC', title: '『時代のOPC』', publisher: '機械工業出版社 刊', desc: 'ひとり会社をゼロから立ち上げる方法論。' },
      ],
    },
  },
  ending: {
    title: 'AIの波が押し寄せる今、CubixAIがOPCを常に最前線へ',
    subtitle: '私たちが目指すのは、一度つくって終わりのパークではなく、AIとともに進化し、成長し続ける産業パークです。',
    cards: [
      { title: '成長し続けるOPC体系', desc: '方法論からプラットフォームへ、ツールからシステムへ。OPCを再現・拡張可能な産業オペレーティングシステムへと進化させます。' },
      { title: '進化し続けるパークの力', desc: 'パークはもはや単なる物理的な空間ではなく、コンピュート、人材、企業、サービスを結集したインテリジェントな協働プラットフォームです。' },
      { title: '拡大し続ける産業規模', desc: '企業の参加、アプリケーションの実用化、エコシステムの集積が進むにつれ、OPC産業エコシステムには自己増幅するネットワーク効果が生まれます。' },
      { title: '強化し続けるサービス力', desc: 'プラットフォーム、コース、コンピュート、メンター、運営体制を継続的にアップグレードし、パークに長期的かつ安定した、進化し続ける支援を提供します。' },
    ],
    slogan: 'OPC Hub：OPC時代のAI起業エコシステム基盤',
    contactPrompt: 'さらに詳しく知りたい方は、お気軽にお問い合わせください。',
    qrAlt: 'お問い合わせ',
  },
}

const ko: typeof zh = {
  hero: {
    titleLine1: '1인 기업 시대를 위한',
    titleLine2: 'AI 창업 에코시스템 인프라',
    subtitle: '슈퍼 개인의 역량 강화: 생성형 AI 시대를 위한 혁신적인 산업단지 솔루션',
    chips: ['컴퓨팅 공유', '오피스 공간', '에코시스템 서비스', 'AI 창업 원스톱 지원'],
    consult: '지금 상담하기',
    learnMore: '자세히 보기',
  },
  audiences: {
    sceneAlt: 'OPC Hub 활용 장면',
    campus: {
      title: '산업단지 대상',
      pain: '과제: 산업단지는 기업 유치를 위한 차별화된 AI 경쟁력이 부족하고, 창업자는 높은 컴퓨팅 비용, 정보 단절, 더딘 도구 업데이트에 직면해 있으며, 컴퓨팅을 통합 관리할 플랫폼도 없습니다.',
      solution:
        '해결책: OPC Hub 단지 관리 플랫폼을 도입해 컴퓨팅 자원을 공유하고 컴퓨팅 바우처를 발급하며, 다양한 대규모 모델과 산업별 AI 에이전트를 한곳에 모읍니다. AI 교육, 창업 멘토, 피칭 행사와 비즈니스 매칭을 함께 제공해 창업자 커뮤니티를 조성하고, 현지 온프레미스 배포로 컴플라이언스까지 확보하여 산업단지가 단순한 임대인에서 AI 산업 인큐베이터로 거듭나도록 돕습니다.',
    },
    enterprise: {
      title: '기업 대상',
      pain: '과제: 인건비는 높고 직원들은 AI 실무 역량이 부족하며, 가벼운 혁신 조직이 없어 비즈니스 혁신 속도가 더딥니다.',
      solution:
        '해결책: 사내에 OPC 마이크로 혁신 유닛을 구성하고 경쟁 기반의 시행착오 메커니즘을 도입합니다. 원스톱 멀티모델 AI 기반에 연결해 반복 업무는 AI 에이전트에 맡깁니다. 단계별 AI 과정, 공식 역량 인증, 업계 멘토의 1:1 코칭이 함께 제공되며, 컴퓨팅 공유로 기술 투자를 크게 줄여 비용 절감과 효율 향상을 동시에 실현합니다.',
    },
    university: {
      title: '대학 대상',
      pain: '과제: AI 교육 체계가 뒤처져 있고, 학생들은 컴퓨팅 자원과 실전 프로젝트가 부족하며, 취업·창업 자원도 빈약해 대학이 배출하는 인재와 산업계 수요 사이에 괴리가 있습니다.',
      solution:
        '해결책: OPC 표준화 AI 실습 과정과 공신력 있는 역량 인증을 도입하고, 플랫폼의 컴퓨팅 및 모델 자원을 무료로 개방합니다. 기업의 실제 프로젝트를 실습에 활용하고, 창업 멘토를 배정하며, AI 살롱과 피칭 행사를 정기적으로 개최합니다. 대학과 산업계를 연결해 학생의 취업과 소규모 창업을 함께 지원합니다.',
    },
  },
  platform: {
    title: 'OPC Hub: OPC 시대를 위한 AI 창업 에코시스템 인프라',
    agentsRunning: '개의 AI 에이전트 가동 중',
    taglines: [
      'OPC로 한 사람이 하나의 회사가 됩니다. AI 어시스턴트가 효율을 10배로 높여 줍니다',
      'OPC(One Person Company, 1인 기업): 진입 장벽 없이 시작하고 채용도 필요 없으며, 운영은 AI가 완전 자동으로 처리합니다',
    ],
    tryNow: '지금 체험하기',
    contactUs: '문의하기',
    stats: [
      { label: '가동 중인 AI 어시스턴트', format: (v: number) => `${v.toLocaleString()}` },
      { label: '일평균 요청 수', format: (v: number) => `${v}만+` },
      { label: '분당 응답 수', format: (v: number) => `${v}` },
      { label: '성공률', format: (v: number) => `${(v / 10).toFixed(1)}%` },
    ],
    consoleAlt: 'AIGC 관리 콘솔',
    capabilities: [
      { title: '모델 매트릭스', desc: '가장 적합한 AI 모델을 지능적으로 선택하고 조율합니다.' },
      { title: '에이전트 기반 운영', desc: '복잡한 비즈니스 프로세스를 독립된 AI 에이전트로 패키징합니다.' },
      { title: '핵심 가치', desc: 'AI 역량을 실행 가능하고 사용량 측정이 가능한 디지털 상품으로 패키징합니다.' },
    ],
  },
  conditions: {
    tags: ['산업 특화 기업 유치', '디지털 운영', '새로운 비즈니스 모델'],
    tagline: '슈퍼 개인을 연결하고, 가치를 키웁니다',
    title: 'OPC Hub, 우리 산업단지 / 기업 / 대학에 맞을까요?',
    subtitle: 'OPC 프로그램을 시작하기 위한 조건',
    groups: [
      {
        category: '산업단지',
        subtitle: '단지 전체에 컴퓨팅과 AI 인프라를 구축해 산업 혁신의 핵심 기반을 마련합니다.',
        items: [
          { title: '자원', items: ['사용 가능한 오피스 면적: 1,000m² 이상 권장', '전용 행사 공간(피칭 행사 / 교육 / 비공개 회의용)', 'OPC 창업자 커뮤니티(개인 / 소규모 팀)'] },
          { title: '운영 역량', items: ['상주 운영 인력 3–5명(기업 유치 / 행사 / 커뮤니티 / 정부·기업 협력)', '산업단지, 인큐베이터, 액셀러레이터 운영 경험(우대)'] },
          { title: '정책 및 자원', items: ['AI / 디지털 경제 / 산업 고도화 / 혁신 창업에 대한 지방 정부의 명확한 지원 방향', '정책, 프로젝트, 자금 또는 컴퓨팅 바우처 연계 가능'] },
          { title: '데이터 및 컴퓨팅', items: ['컴플라이언스를 충족하는 활용 가능한 산업 데이터', '안정적이고 스케줄링 가능한 컴퓨팅 환경'] },
        ],
      },
      {
        category: '기업',
        subtitle: 'AI 역량 강화 체계로 사내 R&D 팀을 활성화하여 프로젝트를 빠르게 실행하고 실전 비즈니스 역량을 키웁니다.',
        items: [
          { title: '조직 규모', items: ['임직원 수: 일반적으로 1,000명 이상, 다층 구조와 여러 사업부를 갖춘 조직', '복잡한 제품 라인: 핵심 주력 제품 외에도 다수의 소규모 시나리오, 사내 도구, 주변부 혁신 수요 존재', '혁신을 톱다운으로 일괄 기획할 수 없음: 경영진이 모든 비즈니스 시나리오를 파악하기 어려움'] },
          { title: '혁신 메커니즘', items: ['프로젝트 팀 운영 기반: 3–5명이 독립적으로 팀을 꾸려 빠르게 반복 검증 가능', '"현장에 가장 가까운 사람이 의사결정하는" 문화 또는 성공 사례(우대)', '직원들이 스스로 기회를 발견하고 자발적으로 팀을 구성하려는 의지와 동기'] },
          { title: '자원 개방성', items: ['사내 플랫폼, 채널, 데이터, 기술 자원을 갖추고 이를 공유·개방할 의지', 'AI 도구, 컴퓨팅, 개발 환경을 사내에서 활용하거나 빠르게 연동 가능', '대기업의 "자원의 깊이"를 소규모 팀의 "스타트업다운 민첩성"으로 전환하는 역량'] },
          { title: '관리상의 과제', items: ['혁신 수요가 사업부별로 흩어져 있고 통합 창구와 인큐베이션 체계가 없음', '부서 간 장벽이 높아 소규모 팀이 필요한 자원을 신속히 확보하기 어려움', '외부 지원 필요: OBC 메커니즘 설계, AI 방법론 교육, 벤치마크 사례 참고'] },
        ],
      },
      {
        category: '대학',
        subtitle: 'OPC + AI 혁신 모델로 재학생의 혁신·창업 실천을 지원합니다.',
        items: [
          { title: '학과 및 인재', items: ['컴퓨터공학, 인공지능, 소프트웨어공학 등 관련 학과', '실제 프로젝트에 참여할 수 있는 대학원생 또는 고학년 학부생', '에이전트, LLM, RAG 등의 분야에 연구 관심을 가진 핵심 교수진'] },
          { title: '연구 및 과제', items: ['OPC 기술을 접목할 수 있는 국가·지방 정부 차원의 과제 또는 산학 공동 연구 과제', '컴퓨팅 장비나 클라우드 자원 할당량을 보유한 연구실 또는 연구팀', 'OPC를 교육 사례나 수업 실습 과제로 활용할 의지'] },
          { title: '산학 협력', items: ['실제 비즈니스 시나리오와 연결할 수 있는 기존 산학 협력 기반', '실습 거점, 공동 연구실, 기술 이전 센터를 공동 구축할 의지', '학생 프로젝트와 연구 성과를 시장으로 이어 주는 기술 사업화 체계'] },
          { title: '커뮤니티 및 행사', items: ['초기 사용자가 될 학생 기술 동아리(AI 동아리, 개발자 클럽 등)', 'OPC 기술 살롱, 해커톤, 워크숍 등 오프라인 행사 개최 역량', '일상적인 교류, 프로젝트 전시, 피칭 행사에 활용할 교내 공간'] },
        ],
      },
    ],
  },
  services: {
    title: 'CubixAI OPC 산업 에코시스템 통합 솔루션',
    subtitle: 'AI 시대의 새로운 산업 모델을 구축합니다',
    items: [
      { title: 'OPC Hub 플랫폼', items: ['OPC Hub 시스템', '라이선스 계정(계약 수량 이내)', '통합 AI 역량 기반'] },
      { title: '풀스택 AI 커리큘럼', items: ['표준화된 OPC 교육 체계', '100+ 실전 AI 과정: 초급 | 중급 | 고급', 'OPC 인증서'] },
      { title: 'AI 부트캠프 & 행사', items: ['기업·산업별 AI 테마 살롱', '피칭 + 매칭 + 사업화', '산업 현장의 AI 도입을 돕는 AI 부트캠프'] },
      { title: '컴퓨팅 스케줄링 플랫폼', items: ['다양한 컴퓨팅 자원 통합 스케줄링', '기업의 손쉬운 컴퓨팅 활용', 'AI 애플리케이션 실용화 지원'] },
      { title: 'OPC 창업 & 산업 멘토', items: ['AI 창업 멘토', '산업 현장 도입 멘토', '기업 디지털 전환 실무 전문가'] },
      { title: 'AI 운영 지원', items: ['커뮤니티 & 기업 운영 노하우', '콘텐츠, 브랜딩, 기업 유치 연계', '(선택) 국제 PEC 컨퍼런스'] },
    ],
    footer:
      '에코시스템 협력을 통해 기술, 활용 사례, 자본, 커뮤니티 자원을 연결하여 OPC를 개인의 시도에서 대규모 협업으로 확장하고, AI가 모든 창업자에게 진정한 "생산성 기반"이 되도록 합니다.',
  },
  cases: {
    title: '산업 에코시스템 구축 사례',
    featureLabel: '핵심 성과: ',
    items: [
      {
        tag: '중관춘 AI 베이웨이 커뮤니티(베이징 하이뎬)',
        label: '중관춘 AI 베이웨이 커뮤니티, AI OPC 서비스 프로그램 발표',
        slogan: '베이징 최초의 AI OPC 서비스 프로그램',
        results: ['단지 내 기업을 위한 통합 AI 접속 창구 구축', '다수의 AI 살롱과 기술 교류 행사 지원', '"커뮤니티 + 플랫폼 + 기업"의 경량화된 OPC 에코시스템 모델 확립'],
        feature: '커뮤니티 단위에서 OPC의 실현 가능성 입증',
      },
      {
        tag: '중관춘(차오양) AI Space 산업단지(베이징 차오양)',
        label: 'Aspace: 베이징 차오양 최초의 OPC + AI 구축 사례',
        slogan: 'CubixAI, 중관춘 AI 응용연구원의 단지 서비스용 OPC 플랫폼 구축 지원',
        results: ['단지 내 기업의 AI 도입과 역량 향상 지원', '"컴퓨팅 + 플랫폼 + 교육 + 행사"를 하나의 완결된 순환 구조로 연결', 'AI 기업을 수용하는 단지의 역량을 크게 강화'],
        feature: '산업단지 차원에서 OPC의 확장 가능성 입증',
      },
    ],
    closing:
      'CubixAI는 멀티모델·멀티모달부터 손쉬운 배포까지, 안정적이고 실제로 구축 가능한 AI 제품을 OPC 에코시스템에 지속적으로 제공하여 OPC의 빠른 출발과 꾸준한 성장을 체계적으로 지원합니다.',
    honor: '영예: 베이징 최초로 OPC 체계 구축·납품을 완료한 서비스 기업',
  },
  security: {
    title: '자체 지식재산권 | 규제 등록 완료 | 안전하고 통제 가능',
    patentNoLabel: '발명 공개번호',
    filedLabel: '출원일: ',
    publishedLabel: '; 공개일: ',
    patentTitles: ['동적 우선순위 스케줄링 방법, 장치, 컴퓨터 기기 및 저장 매체', '자원 활용률 예측 기반 스케줄링 방법 및 시스템'],
    items: [
      { title: '온프레미스 배포', desc: '플랫폼에 대한 완전한 통제권을 유지하며, 모든 데이터와 기능이 단지 내부에 보관됩니다.' },
      { title: '전 과정 추적 가능', desc: '모든 작업이 로그로 기록되어 서비스 호출 전 과정을 투명하게 추적할 수 있습니다.' },
      { title: '독립 감사 지원', desc: '제3자 기관의 보안 감사를 지원하여 컴플라이언스를 준수하는 신뢰할 수 있는 플랫폼 설계를 보장합니다.' },
      { title: '데이터 보안', desc: '강력한 암호화와 접근 제어로 핵심 데이터 자산을 빈틈없이 보호합니다.' },
    ],
  },
  value: {
    title: 'OPC + AI 산업 플랫폼: OPC의 지능형 도입을 더욱 구체적으로',
    subtitle: 'OPC Hub는 멀티엔진·멀티모달 AI 기반을 제공하여 AI 도입과 활용의 문턱을 크게 낮춥니다.',
    cards: [
      { title: '산업단지 역량 강화', desc: '차별화된 AI 포지셔닝으로 공실 문제를 해결하고, 컴퓨팅 데이터를 통합 관리해 정밀한 보조금 지원을 실현합니다. OPC 창업자를 모아 단지를 AI 인큐베이션의 모범 사례로 탈바꿈시킵니다.' },
      { title: '전통 기업 지원', desc: '슬림한 조직으로 인건비를 관리하고, 전 직원이 AI 실무 역량을 갖추며, 사내 경쟁으로 비즈니스를 빠르게 개선합니다. AI 에이전트가 반복 업무를 맡아 비용 절감과 효율 향상은 물론 신사업 육성까지 실현합니다.' },
      { title: '대학 지원', desc: 'AI 산학 융합 체계를 구축해 실습 교육의 공백을 메우고 학생의 취업·창업 역량을 높입니다. 대학과 산업계 자원을 연결해 산업 현장에 바로 투입 가능한 AI 인재를 꾸준히 배출합니다.' },
    ],
  },
  ecosystem: {
    title: 'AI 서비스 에코시스템',
    subtitle: '행사, 컨설팅, 교육, 강좌, 도서 등 전방위 AI 에코시스템 지원을 제공합니다. OPC 창업을 중심으로 한 심층 서비스 에코시스템입니다.',
    events: {
      title: '행사',
      desc: '서밋, 포럼, 살롱 등 다양한 업계 행사를 개최하여 글로벌 AI 교류·협력 플랫폼을 구축합니다.',
    },
    consulting: {
      title: '컨설팅 & 교육',
      desc: '맞춤형 AI 컨설팅과 실전 교육으로 기업 고유의 AI 활용 역량을 키웁니다.',
    },
    courses: {
      title: '강좌',
      desc: '기초부터 실전까지 체계적인 AI 강좌로 수강생이 최신 AI 기술을 빠르게 습득하도록 돕습니다.',
      imageAlt: '강좌',
    },
    books: {
      title: '도서',
      desc: '실전 AI 도서를 여러 권 집필·출간하여 실무자가 AI 기술과 구축 노하우를 빠르게 익힐 수 있도록 돕고 있습니다.',
      items: [
        { alt: '24시간 만에 마스터하는 AI 에이전트', title: '『24시간 AI 에이전트』', publisher: '기계공업출판사 출간', desc: '빠르게 AI 실무를 익힐 수 있는 베스트셀러.' },
        { alt: 'AI의 힘을 깨우다', title: '『AI의 힘을 깨우다』', publisher: '중국공산당 중앙당교 출판사 출간', desc: 'AI 산업 전반을 조망하는 권위 있는 해설서.' },
        { alt: '시대의 OPC', title: '『시대의 OPC』', publisher: '기계공업출판사 출간', desc: '1인 기업을 0에서 1로 만드는 방법론.' },
      ],
    },
  },
  ending: {
    title: 'AI의 물결 속에서, CubixAI가 OPC의 선두를 이끕니다',
    subtitle: '저희가 만드는 것은 한 번 짓고 끝나는 단지가 아니라, AI와 함께 진화하며 끊임없이 성장하는 산업단지입니다.',
    cards: [
      { title: '끊임없이 성장하는 OPC 체계', desc: '방법론에서 플랫폼으로, 도구에서 시스템으로. OPC를 복제와 확장이 가능한 산업 운영 체계로 발전시킵니다.' },
      { title: '계속 진화하는 단지 역량', desc: '단지는 더 이상 물리적 공간에 그치지 않고, 컴퓨팅, 인재, 기업, 서비스를 하나로 모은 지능형 협업 플랫폼이 됩니다.' },
      { title: '꾸준히 확대되는 산업 규모', desc: '기업 참여, 애플리케이션 도입, 에코시스템 집적이 확대될수록 OPC 산업 에코시스템은 스스로 강화되는 네트워크 효과를 얻습니다.' },
      { title: '함께 강화되는 서비스 역량', desc: '플랫폼, 강좌, 컴퓨팅, 멘토, 운영 체계를 지속적으로 고도화하여 단지에 장기적이고 안정적이며 진화하는 지원을 제공합니다.' },
    ],
    slogan: 'OPC Hub: OPC 시대를 위한 AI 창업 에코시스템 인프라',
    contactPrompt: '더 자세한 내용이 궁금하시면 문의해 주세요.',
    qrAlt: '문의하기',
  },
}

export const opcHubContent: LocalizedContent<typeof zh> = { zh, en, ja, ko }
