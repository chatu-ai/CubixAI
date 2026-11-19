import { getImageUrl } from '../utils/image'

/**
 * 解决方案页各行业方案的中文原文（从 SolutionsView.vue 原样移出）。
 * 英文译文在 src/content/solutions.ts，按 id 对应；新增或修改方案时两边要一起改。
 */

export interface Solution {
  id: string
  title: string
  subtitle: string
  tags: string[]
  scenes: string[]
  pain: string
  icon: string
  url?: string
  cpsm: string
}

const jjfaImages: Record<string, string> = {
  yq: getImageUrl('jjfa/tx.webp'),
  it: getImageUrl('jjfa/it.webp'),
  mt: getImageUrl('jjfa/mt.webp'),
  ggcy: getImageUrl('jjfa/ggcy.webp'),
  xl: getImageUrl('jjfa/xl.webp'),
  px: getImageUrl('jjfa/px.webp'),
  jr: getImageUrl('jjfa/jr.webp'),
  cw: getImageUrl('jjfa/cw.webp'),
  kj: getImageUrl('jjfa/kj.webp'),
  gq: getImageUrl('jjfa/gq.webp'),
  zy: getImageUrl('jjfa/zy.webp'),
  yl: getImageUrl('jjfa/yl.webp'),
  ds: getImageUrl('jjfa/ds.webp'),
  bx: getImageUrl('jjfa/bx.webp'),
  kcfh: getImageUrl('jjfa/kcfh.webp'),
  opc: getImageUrl('jjfa/opc.webp'),
  gxjg: getImageUrl('jjfa/gxjg.webp'),
}

export const solutions: Solution[] = [
  {
    id: 'telecom',
    title: '电信 / 运营商',
    subtitle: 'Telecom & IT Services',
    tags: ['技术密集', '文档繁杂', '标书众多', '流程规范', '高合规要求'],
    scenes: ['技术标书与方案文档快速撰写', '日常办公自动化（任务分配、会议纪要）', '客户技术问答支持', '项目文档版本管理与校对'],
    pain: '缩短标书撰写周期，统一文档规范，释放技术人员行政事务压力。',
    icon: 'lucide:server',
    url: jjfaImages.yq,
    cpsm: '基于ChatU快速生成技术标书、方案建议书和故障处理报告；与内部OA、项目管理工具打通，实现文档自动归集、版本比对和任务分发；为一线技术工程师提供知识库问答助手。',
  },
  
  {
    id: 'park_opc',
    title: 'OPC产业园区 / 孵化器',
    subtitle: 'Industrial Park & Innovation Incubation + Solo Company & Super Individual',
    tags: [
      '园区数字化升级',
      'AI算力降本',
      '轻资产创业',
      '一站式AI赋能'
    ],
    scenes: [
      '产业园区智能化改造',
      '园区企业AI落地应用',
      '小微个体轻量创业',
      '个人创作者AI赋能'
    ],
    pain: '帮助园区摆脱单一收租模式，解决企业与个人算力成本高、AI工具获取难、单兵信息孤岛与孤独感问题，整合政策资源构建差异化AI生态，降低企业及个人AI使用与创业门槛。',
    icon: 'lucide:building-2',
    url: jjfaImages.kcfh,
    cpsm: 'OPC Hub面向产业园区、孵化器及个体创业者统一部署AI底座与算力调度，提供私有化部署、一站式AI工具链与社群运营协作网络，大幅降低园区企业、独立创作者及小微创业者的算力使用与AI创业门槛。'
  },
  {
    id: 'agri',
    title: '农业 / 种业',
    subtitle: 'Agriculture & Seed Industry',
    tags: ['数据驱动育种', '长周期研发', '基因型-表型关联', '科研属性强'],
    scenes: ['水稻、玉米等品种表型数据查询与分析', '基因型与表型关联智能问答', '育种材料筛选建议', '农业科研成果自动生成报告'],
    pain: ' 提升育种数据查询与分析效率，加速新品种研发周期。',
    icon: 'lucide:leaf',
    url: jjfaImages.zy,
    cpsm: '利用ChatU构建行业智能体，支持自然语言查询品种性状、基因型、环境数据并生成可视化对比报告；辅助品种审定材料撰写、试验方案设计，将数据资产转化为可对话的知识库。',
  },
  {
    id: 'university',
    title: '高校 / 培训机构',
    subtitle: 'University & Training Institutions',
    tags: ['高校 AI 实训', '实战赋能就业','个性化教学', '效率提升'],
    scenes: [
        ' AI 实战课程',
        '学员智能辅学',
        '教师增效备课',
    ], 
    pain: '院校AI教学重理论缺实操，师资算力成本高；教师备课答疑重复工作量大，学生缺少全天候个性化辅导。',
    icon: 'lucide:graduation-cap',
    url: jjfaImages.gxjg,
    cpsm: '依托ChatU搭建智能助教，自动生成教案习题、智能批改答疑，减轻教师负担；配套分层AI实战课程与企业项目实训，提供学员能力认证，提升就业竞争力。'
},
  // {
  //   id: 'edu',
  //   title: '教育 / 培训',
  //   subtitle: 'Education & Training',
  //   tags: ['知识密集', '高频互动', '个性化教学', '语言服务', '效率提升'],
  //   scenes: ['学员课后辅导与答疑', '翻译、纠错、口语练习', '教学内容自动生成（教案、习题）', '学员学习进度跟踪与智能提醒'],
  //   pain: '减少教师重复性答疑与备课耗时，为学员提供全天候个性化辅导。',
  //   icon: 'lucide:graduation-cap',
  //   url: jjfaImages.px,
  //   cpsm: '借助ChatU搭建全天候智能助教，为学员提供翻译、纠错、知识点问答等实时辅导服务；自动生成课件、习题、考试卷及教案；辅助教师完成作业批改与学情分析。',
  // },
  // {
  //   id: 'university',
  //   title: '高校 / 培训机构',
  //   subtitle: 'University & Training Institutions',
  //   tags: ['高校 AI 实训', '产教融合', '实战赋能就业'],
  //   scenes: ['高校 AI 通识与专业课程教学', '产教融合实训基地落地', '企业真实项目实战训练', '学员能力认证与就业推荐'],
  //   pain: '高校 AI 教学常偏理论、实操不足，学生能力难匹配企业岗位需求，同时院校受限于算力、师资，难以规模化开展高质量实训，学生也缺少实战项目背书，就业竞争力不足。',
  //   icon: 'lucide:graduation-cap',
  //   url: jjfaImages.gxjg,
  //   cpsm: '为高校培训机构提供分层 AI 课程：通识教大模型应用，专业授 AI 技术实操，实战做企业项目；适配高校课程场景，配套教案与实训环境，快速落地教学并出具能力证明。'
  // },
  {
    id: 'enterprise-service',
    title: '政府 / 央国企',
    subtitle: 'Enterprise & SOE Digital Service',
    tags: [
      '财务合规提效',
      '内部运营自动化',
      '国资安全合规',
      '数据本地化可控'
    ],
    scenes: [
      '财务票据与报销智能审核',
      '企业办公运营自动化处理',
      '经营数据智能分析可视化',
      '国资公文合规智能处理'
    ],
    pain: '解决企业财务录入繁琐、办公运营低效、数据协同困难等问题，同时满足国企数据安全、国产化适配与合规审计要求，大幅降低人工成本、提升办公与决策效率。',
    icon: 'lucide:building-2',
    url: jjfaImages.kj,
    cpsm: '面向通用企业场景，依托ChatU实现OCR票据识别、财务合规审核、办公文档自动生成、多源数据智能分析，轻量化落地企业运营与财务自动化；针对国企涉密合规场景，采用智方体\u2060·AgentStation本地化私有化部署，数据不出物理边界，适配国产化环境，实现智能公文处理、政策问答、报表汇总与全程留痕审计，兼顾通用企业提效与国资安全合规双重需求。'
  },
  {
    id: 'media',
    title: '自媒体 / MCN',
    subtitle: 'Tech Media & Self-Media',
    tags: ['内容创作高频', '时效性强', '多渠道分发', '用户互动需求大'],
    scenes: ['科技资讯实时采编与摘要生成', '多平台（公众号、微博、抖音）内容一键适配', '粉丝评论智能回复与话题分析', '视频脚本、直播提纲自动生成'],
    pain: '提升内容产出与分发效率，实现7×24小时粉丝互动，降低运营人力成本。',
    icon: 'lucide:radio',
    url: jjfaImages.mt,
    cpsm: '运用ChatU实时抓取科技资讯并生成深度解读长文，自动拆解为适合多平台的短文案和标题；设置智能体自动回复评论区常见问题、分析粉丝话题趋势，辅助选题策划。',
  },
  {
    id: 'fin_ins',
    title: '金融 / 保险',
    subtitle: 'Finance & Insurance',
    tags: ['数据合规严苛', '单证报表量大', '风控识别需求强', '标准化输出报告'],
    scenes: ['资产评估与财报智能分析', '监管报送文档自动生成', '保险定损理赔流程自动化', '保单服务与风险欺诈识别'],
    pain: '减少人工计算、文书录入差错，压缩评估报告、理赔处理周期，强化金融保险全流程风控合规能力。',
    icon: 'lucide:landmark',
    url: jjfaImages.jr,
    cpsm: '依托ChatU解析财报、行业数据完成资产评估模型运算，一键生成合规评估报告并校验监管规范；同时自动录入保险报案信息，辅助定损评估，通过数据比对识别欺诈风险，实现保单问答、续保方案智能推送，覆盖金融评估与保险业务全场景数字化提效。'
  },
  {
    id: 'ecommerce',
    title: '电商 / 零售',
    subtitle: 'E-commerce & Retail',
    tags: ['客户咨询量大', '促销节奏快', '售后问题繁杂', '多平台管理'],
    scenes: ['售前咨询（产品参数、优惠活动）', '售后常见问题自动解答（退换货、物流）', '客户情绪识别与升级人工策略', '商品评价摘要与竞品分析'],
    pain: '降低客服成本，提升高峰期响应速度，保障客户服务一致性。',
    icon: 'lucide:shopping-cart',
    url: jjfaImages.ds,
    cpsm: '部署基于ChatU的多渠道智能客服，统一接入淘宝、京东、微信小程序、抖音等平台，实现售前导购、售后自助退换货、物流查询；自动识别客户情绪并转人工，生成未解决问题工单，输出高频客诉分析报告。',
  },
  {
    id: 'health',
    title: '医疗 / 健康',
    subtitle: 'Healthcare',
    tags: ['高专业壁垒', '文档严谨', '诊断辅助', '数据隐私敏感'],
    scenes: ['病历与诊断报告自动撰写', '医学文献检索与摘要', '辅助影像报告初步解读', '医生科研论文润色与格式校对'],
    pain: '大幅减少医生文书书写时间，提高病历规范性与知识获取效率。',
    icon: 'lucide:heart-pulse',
    url: jjfaImages.yl,
    cpsm: '借助ChatU智能生成入院记录、出院小结、手术记录等结构化病历，支持语音输入转写；基于院内知识库提供用药指导、诊疗指南查询及文献摘要提取；辅助科研论文撰写与数据统计描述。',
  },
  {
    id: 'psych',
    title: '心理健康 / 情感陪护',
    subtitle: 'Education & Psychological Counseling',
    tags: ['情感交互', '隐私保护', '非专业人力不足', '标准化与个性化平衡'],
    scenes: ['高校心理咨询中心助理服务', '心理机构来访者初步筛选与情绪陪伴', '咨询师工作流辅助（记录、评估、提醒）', '心理健康知识科普与自助训练'],
    pain: ' 缓解心理咨询师人力不足，减少文书工作，帮助非专业咨询师提升服务质量。',
    icon: 'lucide:brain',
    url: jjfaImages.xl,
    cpsm: '采用ChatU打造认知增强心理智能体，提供24小时情绪陪伴与心理知识问答；自动完成心理量表评分、风险分级预警及会话摘要生成；为新手咨询师提供标准化干预建议和案例参考。',
  },
  {
    id: 'design',
    title: '广告 / 创意设计',
    subtitle: 'Advertising & Design',
    tags: ['创意驱动', '高频改稿', '风格多样', '交付周期紧'],
    scenes: ['营销海报、社交媒体配图生成', '图片风格迁移（如产品图转插画风）', '广告文案与Slogan批量创意', '客户方案视觉草图快速迭代'],
    pain: ' 加速创意迭代与改稿速度，提升设计效率，降低重复劳动。',
    icon: 'lucide:palette',
    url: jjfaImages.ggcy,
    cpsm: '通过ChatU进行文生图、图生图及风格迁移，快速生成插画、海报、3D概念等多个风格方案；支持批量输出不同尺寸布局的素材，以及智能扩图、背景移除、高清修复等操作。',
  },
  {
    id: 'itdev',
    title: '软件开发 / IT',
    subtitle: 'IT & Software Development',
    tags: ['代码量大', '版本迭代快', '质量要求高', '文档同步难'],
    scenes: ['代码自动生成与补全（支持多种语言）', '代码审核、规范检查与漏洞提示', '单元测试用例自动生成', '技术文档与注释自动撰写'],
    pain: '提升编码与代码审查速度，减少文档滞后，降低缺陷漏检风险。',
    icon: 'lucide:code-2',
    url: jjfaImages.it,
    cpsm: '依靠ChatU根据注释或需求描述自动生成函数、类及单元测试代码，执行代码规范检查和潜在bug提示；生成API文档、数据库注释及变更日志；支持代码重构建议与遗留系统注释补全。',
  },
]
