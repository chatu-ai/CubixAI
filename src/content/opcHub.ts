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

export const opcHubContent: LocalizedContent<typeof zh> = { zh, en }
