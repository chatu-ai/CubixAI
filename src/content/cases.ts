import { computed, type ComputedRef } from 'vue'
import { useI18n } from 'vue-i18n'
import { cases, type CaseItem, type Metric } from '@/data/cases'

/**
 * 客户案例（/cases 页、ChatU 页「客户案例精选」及案例弹窗）的英文文字。
 * 中文访客直接使用 src/data/cases.ts 中的原始数据；其他语言（英文、日文、韩文）显示这里的英文。
 */

/** src/data/cases.ts 中所有案例的 id（新增案例时也要在这里补上英文） */
export type CaseId = 'c1' | 'c2' | 'c3' | 'c4' | 'c5' | 'c6' | 'c7' | 'c9' | 'c10' | 'c11'

/** 案例中随语言切换的文字字段；id、图片、图标、分类等非文字字段沿用原始数据 */
export interface CaseText {
  title: string
  client: string
  tag: string
  result: string
  background: string
  pain: string[]
  solution: string[]
  /** 中文原文有该字段时才填写 */
  solved?: string[]
  effect: string
  metrics: Metric[]
  /** 中文原文有该字段时才填写 */
  subtitle?: string
  /** 中文原文有该字段时才填写 */
  location?: string
}

export const casesEn: Record<CaseId, CaseText> = {
  c5: {
    title: 'Intelligent Office Upgrade for a Major State-Owned Enterprise',
    client: 'China Mobile System Integration Co., Ltd.',
    tag: 'SOE Office',
    result: 'Met its cost-reduction and efficiency goals, with major gains in bid writing, document production and daily office work',
    background:
      'China Mobile System Integration faced the challenge of improving efficiency and reducing operating costs in its daily operations. Writing bids, producing documents and handling routine office work by hand was slow, labor-intensive and error-prone, and could not keep pace with the company\'s rapid growth.',
    pain: [
      'Efficient bid writing: needed to quickly produce high-quality bids tailored to client requirements, cutting the time and effort of manual writing.',
      'Smart document production: large volumes of repetitive, fixed-format documents took a long time to produce, and a consistent style was hard to maintain.',
      'Streamlined office work: wanted to automate routine tasks such as task assignment and tracking, easing the load on staff and improving overall office efficiency.',
    ],
    solution: [
      'Adopted the ChatU platform (Standard / On-Premises Edition) and its AI agent operating system capabilities.',
      'Used ChatU\'s intelligent text generation to train dedicated AI agents on the historical bid library and industry knowledge base, automatically generating first drafts of bids and proposals.',
      'Configured ChatU workflows to automate document production, version comparison and task assignment.',
      'Integrated ChatU seamlessly with the internal OA system (supporting DingTalk, Feishu (Lark) and WeCom) for automatic document archiving, task tracking and reminders.',
      'Gave technical engineers a ChatU knowledge base Q&A assistant for quick access to product specifications and technical standards.',
    ],
    solved: [
      'Bid writing cut from days to hours, with fewer manual errors and a higher win rate.',
      'Unified document formats and styles, with standardized documents generated automatically.',
      'Routine office work automated, freeing up staff time.',
    ],
    effect:
      'Successfully reduced costs and increased efficiency in daily operations. Bid writing, document production and routine office work all became significantly more efficient, strongly supporting the company\'s sustainable growth.',
    metrics: [
      { label: 'Bid Writing', value: 'Shorter Cycles' },
      { label: 'Document Production', value: 'Lower Costs' },
      { label: 'Office Efficiency', value: 'Higher Efficiency' },
    ],
  },
  c1: {
    title: 'Cognitive-Enhanced Mental Health AI Agent System',
    client: 'Tsinghua University',
    tag: 'Mental Health',
    result: 'Built a mental health AI agent for individual clients, making counseling services more efficient',
    background:
      'Tsinghua University developed AIRelief, a cognitive-enhanced mental health AI agent system for counseling organizations, individuals and non-professional counselors, and needed an AI assistant that fits naturally into their workflows.',
    pain: [
      'There are too few counselors, so clients face long waits.',
      'Session notes and assessments take a great deal of time.',
      'Non-professional counselors lack practical guidance and standardized tools.',
    ],
    solution: [
      'Adopted the ChatU AI platform to build a cognitive-enhanced mental health AI agent.',
      'Used ChatU\'s virtual digital human technology to provide 24/7 emotional listening with voice and text interaction.',
      'Configured ChatU AI agents for automatic psychological scale scoring, tiered risk alerts and session summaries.',
      'Used ChatU workflows to help counselors with client intake, assessment reminders and draft intervention recommendations.',
      'Gave new counselors ChatU knowledge base Q&A with standard scripts and intervention strategy references.',
    ],
    solved: [
      'Eased the counselor shortage with round-the-clock AI support.',
      'Automated paperwork so counselors can focus on core interventions.',
      'Improved the quality of service from non-professional counselors.',
    ],
    effect:
      'Successfully built an AI assistant system that fits counselors\' workflows, giving counseling organizations and semi-professional and non-professional counselors efficient support.',
    metrics: [
      { label: 'Target Users', value: 'Orgs / Non-Experts' },
      { label: 'Core Capability', value: 'Cognitive Enhancement' },
    ],
  },
  c6: {
    title: 'Community-Level OPC Ecosystem Model',
    client: 'Zhongguancun AI Beiwei Community',
    tag: 'Industrial Park',
    result: 'Proved that OPC works at the community level',
    background:
      'An AI-focused industry community in Beijing\'s Haidian District serving one-person companies (OPCs), super individuals and small teams, it needed a lightweight OPC ecosystem model.',
    pain: [
      'Businesses on campus, especially one-person companies, lacked AI capabilities and faced high technical barriers.',
      'Compute was expensive and hard for small teams to afford.',
      'Businesses in the community worked in information silos, with little collaboration or culture of innovation.',
    ],
    solution: [
      'Deployed OPC Hub, a campus-level platform for producing and trading AI capabilities, as a unified AI foundation.',
      'Used OPC Hub\'s multi-model orchestration and agent-based execution to package AI capabilities as digital goods that can be run, metered and traded.',
      'Issued and supervised compute subsidies centrally as compute vouchers, lowering the barrier to entry for businesses.',
      'Integrated ChatU\'s multi-engine, multimodal capabilities to give campus businesses tools for building AI agents, automating workflows and generating documents.',
      'Offered premium AI courses, a standardized training system and an entry-level OPC certification.',
      'Organized AI salons, roadshows and tech exchange events to build a community network.',
      'Supported on-premises deployment to ensure data security and end-to-end traceability.',
    ],
    solved: [
      'Lowered the barrier to AI adoption for businesses, with shared low-cost compute.',
      'Helped turn compute into real applications and industry outcomes.',
      'Established a lightweight "community + platform + enterprise" OPC ecosystem that breaks down information silos.',
    ],
    effect:
      'Created a unified AI access point for campus businesses. Supported multiple AI salons and tech exchange events. Proved that OPC works at the community level.',
    metrics: [
      { label: 'Core Model', value: 'Community + Platform + Enterprise' },
      { label: 'Key Activities', value: 'AI Salons / Tech Exchanges' },
    ],
  },
  c7: {
    title: 'Scaling OPC Across an Industrial Park',
    client: 'Zhongguancun (Chaoyang) AI Space Industrial Park',
    tag: 'Industrial Park',
    result:
      'Significantly strengthened the park\'s capacity to host AI businesses and proved that OPC can scale at the industrial-park level',
    background:
      'An AI industrial park in Beijing\'s Chaoyang District that needed to scale up its capacity to host AI businesses and help its tenants put AI into practice.',
    pain: [
      'Park businesses struggled to put AI to work and lacked systematic support.',
      'Compute resources were fragmented and costly for businesses to access.',
      'The park operator needed to shift from a traditional rent-based model to value-added services and ecosystem operations.',
    ],
    solution: [
      'Deployed the OPC Hub platform, connecting "compute + platform + training + events" into one complete loop.',
      'Used OPC Hub to orchestrate multiple compute sources centrally, giving businesses low-barrier access to compute.',
      'Provided park businesses with ChatU accounts (up to an agreed number) as their AI foundation.',
      'Brought in premium AI courses, industry mentors and AI operations support (coordinated content, branding and tenant attraction).',
      'Hosted company- and industry-specific roadshows and matchmaking sessions to connect technology, use cases and capital.',
      'Offered an optional international PEC conference to raise the park\'s profile.',
      'Supported end-to-end traceability and authoritative audits to ensure compliance.',
    ],
    solved: [
      'Significantly lowered the barrier for businesses to use AI and compute.',
      'Strengthened the park\'s capacity to host AI businesses and set it apart from competitors.',
      'Helped the park move from relying solely on rent to a diversified model of "rent-free basic office space + value-added services + equity investment".',
    ],
    effect:
      'Supported AI adoption and upskilling for park businesses. Built a self-sustaining OPC industry service system. Proved that OPC can scale at the industrial-park level.',
    metrics: [
      { label: 'Closed-Loop Elements', value: 'Compute / Platform / Training / Events' },
      { label: 'Hosting Capacity', value: 'Significantly Higher' },
    ],
  },
  c9: {
    // 中文原文标题与标签为空，英文同样留空
    title: '',
    client: 'Yizhuang AI Research Institute',
    subtitle: 'Shanghai Hongqiao Enterprise-Government Connect · Dedicated Deployment',
    tag: '',
    result: 'Rolled out in 6 subdistricts and towns in Shanghai Hongqiao',
    background:
      'Under China\'s unified national market policy, local governments may no longer use tax rebates to attract investment, so they now focus on the business environment and policy services. The Shanghai Hongqiao government affairs district and the 6 subdistricts and towns under it needed to deliver and explain support policies to businesses efficiently and precisely, and improve their government services.',
    pain: [
      'Policies are complex and change quickly, making it hard for businesses to find the support that applies to them.',
      'Traditional manual policy consultation was slow and costly, and could not be personalized for each business.',
      'The government needed a lightweight, replicable way to combine WeChat government service groups with AI agents and reach businesses with policies more effectively.',
    ],
    solution: [
      'Built on WeChat and the ChatU platform; once testing was complete, the AI agent went live in 10 minutes.',
      'The entry point sits on the WeChat home screen, so users can start right away with nothing new to learn.',
      'Officially authorized to use the WeCom API, ensuring secure and stable operation.',
      'Personalized for every user: automatically matches each user to the right AI agent and group based on their profile and pushes tailored policy content.',
      'Built the "Hongqiao AI Policy Advisor" agent, which automatically answers businesses\' questions on policies such as support for global expansion, outbound direct investment projects and professional service firms, including specific amounts and eligibility conditions.',
      'A replicable model: already rolled out in 6 subdistricts and towns in Shanghai Hongqiao and beyond.',
    ],
    solved: [
      'Turned complex, fast-changing policies into a 24/7 AI policy Q&A service.',
      'Took over part of the manual consultation work, lowering government service costs and raising business satisfaction.',
      'Combined WeChat groups with AI agents for precise policy delivery and personalized matching.',
    ],
    effect:
      'Successfully deployed in 6 subdistricts and towns in Shanghai Hongqiao. The AI agent went live in just 10 minutes, dramatically shortening the digital transformation cycle for government services. Established a "shortest path, officially authorized, replicable" model combining WeChat government service groups with AI agents.',
    metrics: [
      { label: 'Deployment Time', value: '10 min' },
      { label: 'Subdistricts Covered', value: '6 in Hongqiao' },
    ],
  },
  c4: {
    title: 'AI Agent Platform for the Seed Industry',
    client: 'Baiaoyun (seed industry agritech company)',
    tag: 'Agritech',
    result:
      'Delivered end-to-end AI support from data queries to knowledge Q&A, greatly improving breeding research efficiency and speeding up new variety development',
    background:
      'Baiaoyun focuses on the seed industry, working with large volumes of phenotype data, genotype data and variety approval records for rice, maize and other crops. Breeding research requires efficient data queries, trait analysis and knowledge Q&A.',
    pain: [
      'Breeding data was scattered, and queries meant manually searching through spreadsheets, which was inefficient.',
      'Analyzing and screening variety traits depended on expert experience, making knowledge hard to pass on.',
      'There were no intelligent Q&A or decision-support tools.',
    ],
    solution: [
      'Built multiple seed industry AI agents on the ChatU AI agent platform.',
      'Rice variety phenotype–genotype query agent: uses ChatU\'s multi-model orchestration and private-data training to combine the breeding database with natural-language Q&A.',
      'Approved maize variety phenotype analysis agent: uses ChatU\'s data analysis and workflow features to compare approved varieties automatically.',
      'Intelligent Q&A for the BAISeeds platform: deployed ChatU\'s intelligent Q&A module to give researchers a 24/7 knowledge service.',
      'Used ChatU\'s private AI agent training and management features to import proprietary breeding data, freely tune model parameters and optimize outputs.',
    ],
    solved: [
      'Brought AI to the entire process, from data queries and trait analysis to knowledge Q&A.',
      'Reduced the workload of breeding experts and accelerated the screening of superior combinations.',
    ],
    effect:
      'Greatly improved breeding research efficiency and sped up the development of new varieties, demonstrating the strong value of AI agents in the seed industry.',
    metrics: [
      { label: 'Use Cases Covered', value: 'Query / Analysis / Q&A' },
      { label: 'Breeding Efficiency', value: 'Much Higher' },
    ],
  },
  c3: {
    title: 'End-to-End Enablement for an AI Tech Blogger',
    client: 'Punk Zhou (AI tech trend watcher / independent creator)',
    tag: 'Content Creation',
    result: 'Boosted influence and reach across the board',
    background:
      'As a tech content creator, Punk Zhou needs to produce high-quality content quickly while running multiple platforms and engaging with followers.',
    pain: [
      'Content creation could not keep pace with trending topics.',
      'Cross-platform distribution was time-consuming and labor-intensive.',
      'A high volume of follower interactions meant slow replies.',
    ],
    solution: [
      'Adopted the ChatU AI platform across the whole workflow of creation, optimization, operations and engagement.',
      'Used ChatU\'s intelligent text generation to write in-depth analyses of trending tech topics.',
      'Used ChatU\'s multi-platform integrations (WeChat, Weibo, Douyin, etc.) to automatically adapt content into short posts, headlines and cards for each platform.',
      'Set up ChatU AI agents to reply to follower comments automatically and analyze topic trends.',
      'Used ChatU\'s UPPT to quickly create livestream outlines and presentations.',
    ],
    solved: [
      'Cut content production time from hours to minutes.',
      'Enabled one-click adaptation and distribution across platforms, reducing operational workload.',
      '24/7 follower engagement for stronger audience loyalty.',
    ],
    effect:
      'Delivered efficient, innovative enablement across creation, optimization, operations and engagement, boosting overall influence and reach.',
    metrics: [
      { label: 'Scope', value: 'End-to-End' },
      { label: 'Impact', value: 'Wider Reach' },
    ],
  },
  c11: {
    title: 'Hands-On Finance AI Training and Digital Talent Development',
    client: 'Yunnan College of Finance and Economics',
    tag: 'Finance Education',
    result:
      'On-campus AI training hub launched in 6 months; partner businesses cut data analysis and marketing operations labor costs by 40%',
    background:
      'Yunnan College of Finance and Economics is known for its programs in finance, economics and management, banking, and taxation. It has a large student and faculty body, on-campus training bases for economics and management, and many small and micro business partners. Its existing AI teaching went no further than surface-level demos of general-purpose tools, with no systematic hands-on courses tailored to finance majors. Training materials were mostly simulated cases with no real industry scenarios behind them, so students struggled to apply AI to professional tasks such as preparing financial statements, analyzing business data, compliance and risk control, and marketing, and school–enterprise training delivered limited teaching value.',
    pain: [
      'Existing AI courses were generic, with no dedicated hands-on modules for finance, taxation or cross-border e-commerce, and were poorly aligned with the college\'s goals for training finance professionals.',
      'Courses jumped straight into tool operation without teaching effective AI learning methods, so students were inefficient when studying professional materials on their own.',
      'Without a standardized on-campus AI training platform, real business processes could not be replicated, leaving training disconnected from workplace needs.',
      'There was no staged, step-by-step learning system: beginners and senior students shared the same curriculum, making tiered teaching hard to deliver.',
      'Industry solutions lacked finance-specific modules, leaving gaps in teaching content such as financial data analysis, tax compliance and business digitalization.',
    ],
    solution: [
      'Adopted a modular, tiered AI curriculum and designed finance-specific tiered learning paths for the college.',
      'Modular learning path: foundation modules build general AI skills → intermediate modules teach how to put digital tools into practice → finance and tax modules go deep into professional scenarios.',
      'Courses open with a standardized system for learning efficiently with AI, combining the Feynman Technique with the large volume of financial statements, policies and industry materials so students study professional content more efficiently.',
      'Built a dedicated on-campus AI training hub with a full set of hands-on capabilities, including no-code AI app building, intelligent data analysis and industry Q&A, to meet in-class practice needs.',
      'Embedded 40+ finance-specific, real-world scenarios throughout the curriculum: AI-generated financial reports, automated tax risk screening, cross-border e-commerce marketing plans, store performance reviews and compliance plans for small and micro businesses.',
      'Set up a school–enterprise training channel with local trading, tax and finance partners, so students work on real corporate digitalization projects, closing the loop from classroom teaching to on-campus training to real-world practice.',
    ],
    effect:
      'Teaching: built a standardized hands-on finance AI curriculum that filled digital teaching gaps in economics and management, accounting and finance, making classes far more practical and relevant. Students: students gained a full set of AI and digital skills for finance roles, significantly boosting their competitiveness for internships and jobs, and can independently complete corporate digital analysis projects. School–enterprise collaboration: delivered standardized digital adoption plans to partner SMEs, cutting their labor costs for data analysis and marketing operations by 40%. Long-term value: the on-campus AI training hub went live in 6 months, giving the college a flagship finance digital teaching program that can be rolled out to every economics and management program on campus.',
    metrics: [
      { label: 'Hands-on Scenarios', value: '40+' },
      { label: 'Cost Reduction', value: '40%' },
    ],
  },
  c10: {
    title: 'AI-Powered Financial Data Services Training',
    client: 'Refinitiv',
    tag: 'Financial Data',
    result:
      'Research report processing time cut by about 40% on average, an on-premises AI assistant deployed across 5 core business scenarios, and 80+ employees trained',
    background:
      'Refinitiv is a leading global provider of financial data and infrastructure, serving more than 40,000 financial institutions worldwide with news, data, analytics and trading platforms. With AIGC advancing rapidly, Refinitiv wanted to build AI into its internal workflows and client services to improve data processing efficiency, the quality of generated content and employees\' command of AI tools.',
    pain: [
      'With huge volumes of financial data, analysts and content teams spent a great deal of time extracting information, writing summaries and producing reports.',
      'Employees\' ability to apply large models varied widely, and there was no systematic hands-on guidance.',
      'AI-generated content had to be accurate, compliant and traceable to meet the financial industry\'s strict regulatory requirements.',
    ],
    solution: [
      'CubixAI designed a tailored "AI-Powered Financial Data Services" training program for Refinitiv, combining its own ChatU platform with a hands-on curriculum.',
      'AI fundamentals for finance: covered how LLMs work and prompt engineering techniques, with case breakdowns focused on research report summarization, news sentiment analysis and automated data queries.',
      'Model selection and on-premises deployment: drawing on CubixAI\'s multi-engine support, guided Refinitiv\'s tech team in choosing the right models within compliance requirements and completing an in-house on-premises deployment.',
      'AI agent building workshop: used ChatU\'s agent marketplace to build, step by step, AI agents for internal data retrieval, compliance checks and automated weekly reports that are "plug-and-play and continuously evolving".',
      'Data security and compliance: in line with national regulatory requirements and financial industry standards, training covered keyword filtering, text and image review, and content provenance to keep AI output compliant.',
      'Format: in-person intensive. CubixAI\'s expert instructors (including Microsoft MVPs and Google technical experts) delivered a 3-day immersive training at Refinitiv\'s Beijing and Shanghai offices.',
      'Format: hands-on coaching. 4 weeks of online Q&A and project coaching after the training helped Refinitiv\'s team launch its first internal AI tool.',
      'Format: certification. Participants who passed the final exam received a practical AI skills certificate jointly issued by CubixAI and Refinitiv.',
    ],
    solved: [
      'Higher efficiency: using AI to help generate summaries and reports, Refinitiv\'s content team cut the average processing time per research report by about 40%.',
      'Full control: deployed an internal, on-premises AI assistant covering 5 core business scenarios, including data queries and compliance pre-checks.',
      'Talent development: more than 80 technical and business staff completed the training, and 20 of them became internal AI ambassadors who continue to drive AI transformation across departments.',
    ],
    effect:
      'Refinitiv\'s content team used AI to help generate summaries and reports, cutting the average processing time per research report by about 40%. An internal on-premises AI assistant now covers 5 core business scenarios. More than 80 employees completed the training, and 20 became internal AI ambassadors.',
    metrics: [
      { label: 'Report Processing Time', value: 'Down 40%' },
      { label: 'Employees Trained', value: '80+' },
    ],
  },
  c2: {
    title: 'AI-Powered Q&A for English Training',
    client: 'Tiantian Aiyi (English language training provider)',
    tag: 'Education',
    result: 'Delivered a comprehensive, accurate and engaging language learning experience and made teaching more responsive',
    background:
      'An English language training provider that needed an intelligent Q&A service offering translation, error correction and tutoring for its students, and wanted to bring AI into WeChat for easy access.',
    pain: [
      'Students had no instant tutoring resources after class.',
      'Teachers spent a lot of time answering the same questions over and over.',
      'Error correction and translation requests were frequent in language training, and manual responses were slow.',
    ],
    solution: [
      'Configured ChatU in WeChat to provide students with an intelligent Q&A service.',
      'Used ChatU\'s multilingual translation and text rewriting features for real-time translation and error correction.',
      'Deployed a ChatU teaching AI agent with a knowledge base trained on the provider\'s course content to answer study questions automatically.',
      'Used ChatU\'s multimodal interaction to support voice input, making speaking practice easier for students.',
      'Used ChatU\'s file analysis to help teachers grade essays and create practice materials.',
    ],
    solved: [
      'Students get translation, error correction and tutoring answers anytime, improving their learning experience.',
      'Freed teachers from repetitive Q&A so they can focus on in-depth teaching.',
      'Brought together multiple AI technologies (machine translation, natural language processing, speech synthesis and recognition) for comprehensive language learning support.',
    ],
    effect:
      'Successfully provided students with a 24/7 intelligent Q&A service, significantly improving the provider\'s service capacity and student satisfaction.',
    metrics: [
      { label: 'Service Channel', value: 'WeChat' },
      { label: 'Features', value: 'Translate / Correct / Tutor' },
    ],
  },
}

/** 英文版案例列表：保留原始数据中的 id、图片、图标、分类等字段，只替换文字字段 */
const englishCases: CaseItem[] = cases.map((c) => ({ ...c, ...casesEn[c.id as CaseId] }))

/** 按语言取案例列表：中文返回原始 cases（不做任何改动），其他语言返回英文版 */
export function localizeCases(locale: string): CaseItem[] {
  return locale === 'zh-CN' ? cases : englishCases
}

/** 当前语言的案例列表（computed）：中文访客看原始数据，英文、日文、韩文访客看英文 */
export function useLocalizedCases(): ComputedRef<CaseItem[]> {
  const { locale } = useI18n()
  return computed(() => localizeCases(locale.value))
}
