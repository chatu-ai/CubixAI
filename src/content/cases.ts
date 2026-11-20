import { computed, type ComputedRef } from 'vue'
import { useI18n } from 'vue-i18n'
import { cases, type CaseItem, type Metric } from '@/data/cases'
import { contentKey } from '@/i18n/useContent'

/**
 * 客户案例（/cases 页、ChatU 页「客户案例精选」及案例弹窗）的英文、日文、韩文文字。
 * 中文访客直接使用 src/data/cases.ts 中的原始数据；英文、日文、韩文访客分别显示这里的 casesEn / casesJa / casesKo。
 */

/** src/data/cases.ts 中所有案例的 id（新增案例时也要在这里补上英文、日文、韩文） */
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

export const casesJa: Record<CaseId, CaseText> = {
  c5: {
    title: '大手国有企業のオフィス業務スマート化',
    client: '中国移動システムインテグレーション有限公司',
    tag: '国有企業オフィス',
    result: 'コスト削減と効率化の目標を達成し、入札書類の作成・文書作成・日常業務の効率が大幅に向上',
    background:
      '中国移動システムインテグレーションは、日常業務における生産性の向上と運営コストの削減という大きな課題を抱えていました。特に入札書類や各種文書の作成、日常のオフィス業務を人手で行うと時間と労力がかかるうえミスも起こりやすく、急成長する事業のスピードに追いつけない状況でした。',
    pain: [
      '入札書類の効率的な作成：顧客の要件に合った高品質な入札書類を迅速に作成し、手作業にかかる時間と労力を削減する必要がありました。',
      '文書作成のスマート化：定型フォーマットの反復的な文書を大量に作成するのに時間がかかり、スタイルの統一も困難でした。',
      'オフィス業務の効率化：タスクの割り当てや進捗管理といった日常業務を自動化し、社員の負担を軽減してオフィス全体の効率を高めたいと考えていました。',
    ],
    solution: [
      'ChatUプラットフォーム（スタンダード版／オンプレミス版）を導入し、そのAIエージェントオペレーティングシステムの機能を活用しました。',
      'ChatUのインテリジェントなテキスト生成機能を使い、過去の入札書類ライブラリと業界ナレッジベースで専用AIエージェントを学習させ、入札書類や提案書の初稿を自動生成しました。',
      'ChatUのワークフローを設定し、文書作成、バージョン比較、タスク割り当てを自動化しました。',
      'ChatUを社内のOAシステム（DingTalk、Feishu／Lark、WeComに対応）とシームレスに連携し、文書の自動アーカイブ、タスク管理、リマインダーを実現しました。',
      '技術エンジニア向けにChatUのナレッジベースQ&Aアシスタントを提供し、製品仕様や技術標準をすぐに参照できるようにしました。',
    ],
    solved: [
      '入札書類の作成期間を数日から数時間に短縮し、人為的なミスを減らして受注率を高めました。',
      '文書のフォーマットとスタイルを統一し、規定に沿った文書を自動生成できるようになりました。',
      '日常のオフィス業務を自動化し、社員がより重要な業務に時間を使えるようになりました。',
    ],
    effect:
      '日常業務におけるコスト削減と効率化を実現しました。入札書類の作成、文書作成、日常業務のいずれも効率が大幅に向上し、会社の持続的な成長を力強く支えています。',
    metrics: [
      { label: '入札書類作成', value: '期間短縮' },
      { label: '文書作成', value: 'コスト削減' },
      { label: '業務効率', value: '効率向上' },
    ],
  },
  c1: {
    title: '認知強化型メンタルヘルスAIエージェントシステム',
    client: '清華大学',
    tag: 'メンタルヘルス',
    result: '個人の相談者向けにメンタルヘルスAIエージェントを構築し、カウンセリングサービスを効率化',
    background:
      '清華大学は、カウンセリング機関や個人、専門資格を持たないカウンセラー向けに、認知強化型メンタルヘルスAIエージェントシステム「AIRelief」を開発しました。そのために、カウンセラーの業務フローに自然に溶け込むAIアシスタントを必要としていました。',
    pain: [
      'カウンセラーの数が足りず、相談者の待ち時間が長くなっていました。',
      '面談記録の作成やアセスメントに多くの時間がかかっていました。',
      '専門資格を持たないカウンセラーには、実践的な指導や標準化されたツールがありませんでした。',
    ],
    solution: [
      'ChatU AIプラットフォームを導入し、認知強化型メンタルヘルスAIエージェントを構築しました。',
      'ChatUのバーチャルデジタルヒューマン技術を活用し、音声とテキストで対話できる24時間体制の傾聴サービスを提供しました。',
      'ChatUのAIエージェントを設定し、心理尺度の自動採点、リスクの段階別アラート、面談サマリーの作成を自動化しました。',
      'ChatUのワークフローにより、相談者の受付、アセスメントのリマインド、介入方針案の作成でカウンセラーを支援しました。',
      '新人カウンセラー向けにChatUのナレッジベースQ&Aを提供し、標準的な応答スクリプトや介入戦略を参照できるようにしました。',
    ],
    solved: [
      '24時間体制のAIサポートにより、カウンセラー不足を緩和しました。',
      '書類作業を自動化し、カウンセラーが本来の介入に集中できるようになりました。',
      '専門資格を持たないカウンセラーのサービス品質が向上しました。',
    ],
    effect:
      'カウンセラーの業務フローに即したAIアシスタントシステムを構築し、カウンセリング機関や準専門・非専門のカウンセラーを効率的に支援しています。',
    metrics: [
      { label: '対象ユーザー', value: '機関／非専門家' },
      { label: 'コア機能', value: '認知強化' },
    ],
  },
  c6: {
    title: 'コミュニティ単位のOPCエコシステムモデル',
    client: '中関村AI北緯コミュニティ',
    tag: '産業パーク',
    result: 'OPCがコミュニティ単位で機能することを実証',
    background:
      '北京市海淀区にあるAI特化型の産業コミュニティです。一人会社（OPC）、スーパー個人、小規模チームを対象としており、軽量なOPCエコシステムモデルを必要としていました。',
    pain: [
      '入居企業、とりわけ一人会社はAIを活用する力が乏しく、技術的なハードルも高い状況でした。',
      'コンピューティングリソースのコストが高く、小規模チームには負担しきれませんでした。',
      'コミュニティ内の企業はそれぞれ情報が孤立しており、連携やイノベーションの風土が育っていませんでした。',
    ],
    solution: [
      'パーク単位でAI機能を生産・取引するプラットフォーム「OPC Hub」を導入し、共通のAI基盤としました。',
      'OPC Hubのマルチモデルオーケストレーションとエージェント型の実行環境を活用し、AI機能を実行・計量・取引できるデジタル商品としてパッケージ化しました。',
      'コンピューティングリソースの補助金を「コンピュートバウチャー」として一元的に発行・管理し、企業の利用ハードルを下げました。',
      'ChatUのマルチエンジン・マルチモーダル機能を統合し、入居企業にAIエージェント構築、ワークフロー自動化、文書生成などのツールを提供しました。',
      '質の高いAI講座、標準化されたトレーニング体系、OPC初級認定を提供しました。',
      'AIサロン、ロードショー、技術交流イベントを開催し、コミュニティのネットワークを築きました。',
      'オンプレミス導入に対応し、データセキュリティとエンドツーエンドのトレーサビリティを確保しました。',
    ],
    solved: [
      '低コストのコンピューティングリソースを共有し、企業のAI導入のハードルを下げました。',
      'コンピューティングリソースを実際のアプリケーションや産業上の成果へとつなげました。',
      '「コミュニティ＋プラットフォーム＋企業」による軽量なOPCエコシステムを確立し、情報の孤立を解消しました。',
    ],
    effect:
      '入居企業が共通して使えるAIの利用窓口を構築しました。数多くのAIサロンや技術交流イベントを支え、OPCがコミュニティ単位で機能することを実証しました。',
    metrics: [
      { label: 'コアモデル', value: 'コミュニティ＋プラットフォーム＋企業' },
      { label: '主な活動', value: 'AIサロン／技術交流' },
    ],
  },
  c7: {
    title: '産業パーク全体へのOPCスケール展開',
    client: '中関村（朝陽）AI Space産業パーク',
    tag: '産業パーク',
    result: 'パークのAI企業受け入れ能力を大幅に強化し、OPCが産業パーク規模で拡大可能であることを実証',
    background:
      '北京市朝陽区にあるAI産業パークです。AI企業の受け入れ能力を拡大し、入居企業のAI実装を後押しする必要がありました。',
    pain: [
      '入居企業はAIを業務に生かしきれず、体系的な支援も不足していました。',
      'コンピューティングリソースが分散しており、企業が利用するには高いコストがかかっていました。',
      'パーク運営者は、従来の賃料収入モデルから、付加価値サービスとエコシステム運営へと転換する必要がありました。',
    ],
    solution: [
      'OPC Hubプラットフォームを導入し、「コンピューティング＋プラットフォーム＋トレーニング＋イベント」を一つのクローズドループとしてつなぎました。',
      'OPC Hubで複数のコンピューティングリソースを一元的にオーケストレーションし、企業が手軽に利用できるようにしました。',
      '入居企業にChatUアカウント（所定の数まで）をAI基盤として提供しました。',
      '質の高いAI講座、業界メンター、AI運営支援（コンテンツ、ブランディング、テナント誘致の連携）を導入しました。',
      '企業別・業界別のロードショーやマッチングイベントを開催し、技術、ユースケース、資本を結びつけました。',
      'オプションとして国際的なPECカンファレンスを開催し、パークの知名度を高めました。',
      'エンドツーエンドのトレーサビリティと信頼性の高い監査に対応し、コンプライアンスを確保しました。',
    ],
    solved: [
      '企業がAIやコンピューティングリソースを利用するハードルを大幅に下げました。',
      'パークのAI企業受け入れ能力を高め、他のパークとの差別化を実現しました。',
      '賃料収入だけに頼るモデルから、「基本オフィススペース無償＋付加価値サービス＋株式投資」という多角的なモデルへの転換を後押ししました。',
    ],
    effect:
      '入居企業のAI導入とスキル向上を支援し、自立的に運営できるOPC産業サービス体系を構築しました。OPCが産業パーク規模で拡大可能であることを実証しました。',
    metrics: [
      { label: 'クローズドループの要素', value: 'コンピューティング／プラットフォーム／トレーニング／イベント' },
      { label: '受け入れ能力', value: '大幅に向上' },
    ],
  },
  c9: {
    // 中文原文标题与标签为空，日文同样留空
    title: '',
    client: '亦荘人工知能研究院',
    subtitle: '上海虹橋「企業・行政コネクト」 · 専用導入',
    tag: '',
    result: '上海虹橋の6つの街道・鎮で導入',
    background:
      '中国の全国統一大市場政策により、地方政府は税の還付による企業誘致ができなくなり、ビジネス環境の整備や政策面のサービスに力を入れるようになりました。上海虹橋政務区とその管轄下にある6つの街道・鎮は、企業向けの支援策を効率よく的確に届けて解説し、行政サービスの質を高める必要がありました。',
    pain: [
      '政策は内容が複雑で頻繁に変わるため、企業は自社に該当する支援策を見つけにくい状況でした。',
      '従来の人手による政策相談は対応が遅くコストも高いうえ、企業ごとに個別に対応することもできませんでした。',
      '行政側は、WeChatの行政サービスグループとAIエージェントを組み合わせ、政策をより効果的に企業へ届けるための、軽量で横展開しやすい仕組みを必要としていました。',
    ],
    solution: [
      'WeChatとChatUプラットフォームを基盤に構築し、テスト完了後わずか10分でAIエージェントを公開しました。',
      '入口はWeChatのホーム画面にあり、ユーザーは新たに操作を覚えることなく、すぐに使い始められます。',
      'WeComのAPIを公式な認可のもとで利用しており、安全で安定した運用を実現しています。',
      'ユーザーごとのパーソナライズ：プロフィールに基づいて最適なAIエージェントとグループを自動で割り当て、それぞれに合った政策情報を配信します。',
      '「虹橋AI政策アドバイザー」エージェントを構築し、海外展開支援、対外直接投資プロジェクト支援、専門サービス機関への支援などの政策について、具体的な金額や要件を含めて企業からの質問に自動で回答します。',
      '横展開可能なモデル：上海虹橋の6つの街道・鎮をはじめ、各地ですでに導入されています。',
    ],
    solved: [
      '複雑で変化の速い政策情報を、24時間365日対応のAI政策Q&Aサービスへと転換しました。',
      '人手による相談業務の一部をAIが担い、行政サービスのコストを削減するとともに、企業の満足度を高めました。',
      'WeChatグループとAIエージェントを組み合わせ、政策の的確な配信と個別マッチングを実現しました。',
    ],
    effect:
      '上海虹橋の6つの街道・鎮で導入に成功しました。AIエージェントはわずか10分で公開でき、行政サービスのデジタル化にかかる期間を大幅に短縮しました。WeChatの行政サービスグループとAIエージェントを組み合わせた、「最短ルート・公式認可・横展開可能」なモデルを確立しました。',
    metrics: [
      { label: '導入時間', value: '10分' },
      { label: '導入した街道・鎮', value: '虹橋の6か所' },
    ],
  },
  c4: {
    title: '種苗業界向けAIエージェントプラットフォーム',
    client: '百奥雲（種苗分野のアグリテック企業）',
    tag: 'アグリテック',
    result:
      'データ検索からナレッジQ&Aまでをエンドツーエンドで支援し、育種研究の効率を大幅に高めて新品種開発を加速',
    background:
      '百奥雲は種苗分野に特化した企業で、イネやトウモロコシなどの作物の表現型データ、遺伝子型データ、品種審査の記録を大量に扱っています。育種研究には、効率的なデータ検索、形質分析、ナレッジQ&Aが欠かせません。',
    pain: [
      '育種データが分散しており、検索のたびに表を手作業で探す必要があり、非効率でした。',
      '品種の形質分析や選抜は専門家の経験に頼っており、知見の継承が困難でした。',
      'インテリジェントなQ&Aや意思決定を支援するツールがありませんでした。',
    ],
    solution: [
      'ChatU AIエージェントプラットフォーム上に、種苗分野向けのAIエージェントを複数構築しました。',
      'イネ品種の表現型・遺伝子型検索エージェント：ChatUのマルチモデルオーケストレーションと独自データによる学習機能を活用し、育種データベースと自然言語Q&Aを組み合わせました。',
      '審査済みトウモロコシ品種の表現型分析エージェント：ChatUのデータ分析機能とワークフロー機能を活用し、審査済み品種の比較分析を自動化しました。',
      'BAISeedsプラットフォームのインテリジェントQ&A：ChatUのインテリジェントQ&Aモジュールを導入し、研究者に24時間365日のナレッジサービスを提供しました。',
      'ChatUのプライベートAIエージェントの学習・管理機能を使って独自の育種データを取り込み、モデルパラメータを自由に調整して出力を最適化しました。',
    ],
    solved: [
      'データ検索や形質分析からナレッジQ&Aまで、プロセス全体にAIを導入しました。',
      '育種の専門家の負担を軽減し、優良な交配組み合わせの選抜を加速しました。',
    ],
    effect:
      '育種研究の効率を大幅に高め、新品種の開発を加速しました。種苗分野におけるAIエージェントの大きな価値を示す事例となりました。',
    metrics: [
      { label: '対応ユースケース', value: '検索／分析／Q&A' },
      { label: '育種効率', value: '大幅に向上' },
    ],
  },
  c3: {
    title: 'AIテックブロガーをエンドツーエンドで支援',
    client: 'Punk Zhou（AIテックトレンドウォッチャー／個人クリエイター）',
    tag: 'コンテンツ制作',
    result: '影響力とリーチを全面的に拡大',
    background:
      'テック系コンテンツクリエイターのPunk Zhouさんは、高品質なコンテンツを素早く制作しながら、複数のプラットフォームの運営やフォロワーとの交流もこなす必要があります。',
    pain: [
      'コンテンツ制作がトレンドのスピードに追いついていませんでした。',
      'プラットフォームごとの配信に手間と時間がかかっていました。',
      'フォロワーからの反応が多く、返信が遅れがちでした。',
    ],
    solution: [
      'ChatU AIプラットフォームを導入し、制作、改善、運用、交流のワークフロー全体に活用しました。',
      'ChatUのインテリジェントなテキスト生成機能で、話題のテックトピックを掘り下げた解説記事を作成しました。',
      'ChatUのマルチプラットフォーム連携（WeChat、Weibo、Douyinなど）を使い、コンテンツを各プラットフォーム向けの短文投稿、見出し、カードに自動で変換しました。',
      'ChatUのAIエージェントを設定し、フォロワーのコメントへの自動返信や話題のトレンド分析を行いました。',
      'ChatUのUPPTを使い、ライブ配信の構成案やプレゼン資料を素早く作成しました。',
    ],
    solved: [
      'コンテンツの制作時間を数時間から数分に短縮しました。',
      'ワンクリックで各プラットフォームに合わせて配信できるようになり、運用の負担を軽減しました。',
      '24時間365日フォロワーと交流できるようになり、ファンのエンゲージメントが高まりました。',
    ],
    effect:
      '制作、改善、運用、交流のすべての工程で効率的かつ革新的な支援を実現し、影響力とリーチを総合的に高めました。',
    metrics: [
      { label: '支援範囲', value: 'エンドツーエンド' },
      { label: '効果', value: 'リーチ拡大' },
    ],
  },
  c11: {
    title: '金融・経済分野のAI実践トレーニングとデジタル人材育成',
    client: '雲南財経学院',
    tag: '金融・経済教育',
    result:
      '学内AI実習ハブを6か月で稼働させ、連携企業のデータ分析・マーケティング運用の人件費を40%削減',
    background:
      '雲南財経学院は、財務・経済、経営管理、金融、税務などの分野に強みを持つ教育機関です。多くの学生と教職員を擁し、経済・経営系の学内実習拠点や、数多くの中小・零細企業との産学連携を有しています。しかし、既存のAI教育は汎用ツールの表面的なデモにとどまり、金融・経済系の専攻に合わせた体系的な実践カリキュラムがありませんでした。実習教材も模擬事例が中心で、実際の業界シナリオに基づいていなかったため、学生は財務諸表の作成、経営データの分析、コンプライアンスとリスク管理、マーケティングといった専門業務にAIを生かすことが難しく、産学連携の実習も教育効果が限られていました。',
    pain: [
      '既存のAI講座は汎用的な内容で、金融、税務、越境ECに特化した実践モジュールがなく、金融・経済分野の人材育成という学院の目標と合っていませんでした。',
      '講座はいきなりツール操作から始まり、AIを効果的に学ぶ方法を教えていなかったため、学生が専門資料を自主的に学ぶ際の効率が低いままでした。',
      '標準化された学内AI実習プラットフォームがなく、実際の業務プロセスを再現できないため、実習が職場のニーズとかけ離れていました。',
      '段階的に学べる体系がなく、初心者と上級生が同じカリキュラムを受けていたため、レベル別の指導が困難でした。',
      '業界向けソリューションに金融・経済分野のモジュールがなく、財務データ分析、税務コンプライアンス、経営のデジタル化といった教育内容に空白がありました。',
    ],
    solution: [
      'モジュール型・段階別のAIカリキュラムを採用し、学院向けに金融・経済分野に特化した段階別の学習パスを設計しました。',
      'モジュール型学習パス：基礎モジュールで汎用的なAIスキルを身につけ → 中級モジュールでデジタルツールを実務に生かす方法を学び → 金融・税務モジュールで専門的なシナリオを深く掘り下げます。',
      '講座の冒頭で、AIを使って効率よく学ぶための標準化された学習法を教えました。ファインマン・テクニックと大量の財務諸表・政策・業界資料を組み合わせ、専門的な内容を効率よく学べるようにしています。',
      '学内専用のAI実習ハブを構築し、ノーコードでのAIアプリ構築、インテリジェントなデータ分析、業界Q&Aなど、実践に必要な機能を一通り備えて授業での演習ニーズに対応しました。',
      '金融・経済分野に特化した40以上の実践シナリオをカリキュラム全体に組み込みました。AIによる財務レポートの生成、税務リスクの自動スクリーニング、越境ECのマーケティング企画、店舗の業績レビュー、中小・零細企業向けのコンプライアンス計画などです。',
      '地元の商社や税務・金融分野の連携企業と産学連携の実習ルートを整備し、学生が実際の企業のデジタル化プロジェクトに取り組めるようにしました。これにより、教室での授業から学内実習、実社会での実践までを一貫してつなぐ教育サイクルが完成しました。',
    ],
    effect:
      '教育面：標準化された金融・経済分野のAI実践カリキュラムを構築し、経済・経営、会計、金融の各専攻におけるデジタル教育の不足を補って、授業の実践性と専門との関連性を大きく高めました。学生面：学生は金融・経済系の職種に必要なAI・デジタルスキルを一通り身につけ、インターンシップや就職活動での競争力が大幅に向上し、企業のデジタル分析プロジェクトを自力でやり遂げられるようになりました。産学連携面：連携する中小企業に標準化されたデジタル導入プランを提供し、データ分析とマーケティング運用にかかる人件費を40%削減しました。長期的な価値：学内AI実習ハブを6か月で稼働させ、学内のすべての経済・経営系専攻に展開できる、学院を代表する金融・経済分野のデジタル教育プログラムを確立しました。',
    metrics: [
      { label: '実践シナリオ', value: '40+' },
      { label: 'コスト削減', value: '40%' },
    ],
  },
  c10: {
    title: 'AIを活用した金融データサービス研修',
    client: 'リフィニティブ（Refinitiv）',
    tag: '金融データ',
    result:
      'リサーチレポートの処理時間を平均約40%短縮し、5つの中核業務シナリオにオンプレミスのAIアシスタントを導入、80名以上の社員が研修を修了',
    background:
      'リフィニティブは金融データとインフラを提供する世界有数の企業で、世界4万以上の金融機関にニュース、データ、分析、取引プラットフォームを提供しています。AIGCの急速な進化を受け、同社は社内のワークフローや顧客サービスにAIを組み込み、データ処理の効率、生成コンテンツの品質、そして社員のAIツール活用力を高めたいと考えていました。',
    pain: [
      '膨大な金融データを前に、アナリストやコンテンツチームは情報の抽出、要約の執筆、レポートの作成に多くの時間を費やしていました。',
      '大規模言語モデルを活用する力は社員によって大きな差があり、体系的な実践指導もありませんでした。',
      '金融業界の厳しい規制要件を満たすため、AIが生成するコンテンツには正確性、コンプライアンス、トレーサビリティが求められていました。',
    ],
    solution: [
      'CubixAIは、自社のChatUプラットフォームと実践型カリキュラムを組み合わせ、リフィニティブ向けにカスタマイズした研修プログラム「AIを活用した金融データサービス」を設計しました。',
      '金融向けAIの基礎：LLMの仕組みとプロンプトエンジニアリングの手法を解説し、リサーチレポートの要約、ニュースのセンチメント分析、データ照会の自動化を中心に事例を分析しました。',
      'モデル選定とオンプレミス導入：CubixAIのマルチエンジン対応を生かし、リフィニティブの技術チームがコンプライアンス要件の範囲内で適切なモデルを選定し、社内でのオンプレミス導入を完了できるよう指導しました。',
      'AIエージェント構築ワークショップ：ChatUのエージェントマーケットプレイスを使い、社内データ検索、コンプライアンスチェック、週次レポートの自動作成を担う、「プラグアンドプレイで継続的に進化する」AIエージェントを一歩ずつ構築しました。',
      'データセキュリティとコンプライアンス：国の規制要件と金融業界の基準に沿って、キーワードフィルタリング、テキスト・画像の審査、コンテンツの出所追跡などを扱い、AIの出力がコンプライアンスを満たすようにしました。',
      '研修形式（集中講義）：CubixAIの専門講師陣（Microsoft MVPやGoogleの技術エキスパートを含む）が、リフィニティブの北京・上海オフィスで3日間の没入型集中研修を実施しました。',
      '研修形式（実践コーチング）：研修後4週間にわたりオンラインでのQ&Aとプロジェクトの伴走支援を行い、リフィニティブのチームが初の社内AIツールをリリースできるよう後押ししました。',
      '研修形式（認定）：修了試験に合格した受講者には、CubixAIとリフィニティブが共同で発行する実践AIスキル認定証が授与されました。',
    ],
    solved: [
      '効率向上：AIで要約やレポートの作成を支援することで、リフィニティブのコンテンツチームはリサーチレポート1本あたりの平均処理時間を約40%短縮しました。',
      '自社による完全な管理：データ照会やコンプライアンスの事前チェックなど、5つの中核業務シナリオをカバーする社内オンプレミスのAIアシスタントを導入しました。',
      '人材育成：80名以上の技術・業務スタッフが研修を修了し、そのうち20名が社内AIアンバサダーとして各部門のAI変革を継続的に推進しています。',
    ],
    effect:
      'リフィニティブのコンテンツチームは、AIで要約やレポートの作成を支援することで、リサーチレポート1本あたりの平均処理時間を約40%短縮しました。現在、社内のオンプレミスAIアシスタントが5つの中核業務シナリオをカバーしています。80名以上の社員が研修を修了し、20名が社内AIアンバサダーになりました。',
    metrics: [
      { label: 'レポート処理時間', value: '40%短縮' },
      { label: '研修修了者数', value: '80+' },
    ],
  },
  c2: {
    title: '英語教育向けAI Q&Aサービス',
    client: '天天愛訳（英語教育機関）',
    tag: '教育',
    result: '充実した、正確で楽しい語学学習体験を提供し、指導の対応力を向上',
    background:
      '英語教育機関として、受講生に翻訳、添削、学習指導を行うインテリジェントなQ&Aサービスを提供する必要があり、手軽に利用できるようWeChatにAIを組み込みたいと考えていました。',
    pain: [
      '受講生には、授業後にすぐ質問できる学習リソースがありませんでした。',
      '講師は同じ質問に何度も答えることに多くの時間を費やしていました。',
      '語学教育では添削や翻訳の依頼が頻繁にあり、人手での対応では時間がかかっていました。',
    ],
    solution: [
      'ChatUをWeChat上に設定し、受講生向けのインテリジェントなQ&Aサービスを提供しました。',
      'ChatUの多言語翻訳とテキストリライト機能を使い、リアルタイムの翻訳と添削を実現しました。',
      '同機関の講座内容で学習させたナレッジベースを持つ、ChatUの教育用AIエージェントを導入し、学習に関する質問に自動で回答できるようにしました。',
      'ChatUのマルチモーダル対話機能で音声入力に対応し、受講生がスピーキングを練習しやすくしました。',
      'ChatUのファイル分析機能を使い、講師による作文の添削や練習教材の作成を支援しました。',
    ],
    solved: [
      '受講生はいつでも翻訳、添削、学習上の質問への回答を得られるようになり、学習体験が向上しました。',
      '講師は繰り返しの質問対応から解放され、より踏み込んだ指導に集中できるようになりました。',
      '機械翻訳、自然言語処理、音声合成・音声認識といった複数のAI技術を組み合わせ、語学学習を総合的にサポートしました。',
    ],
    effect:
      '受講生に24時間365日のインテリジェントなQ&Aサービスを提供し、同機関のサービス提供力と受講生の満足度を大幅に向上させました。',
    metrics: [
      { label: '提供チャネル', value: 'WeChat' },
      { label: '機能', value: '翻訳／添削／学習指導' },
    ],
  },
}

export const casesKo: Record<CaseId, CaseText> = {
  c5: {
    title: '대형 국유기업의 스마트 오피스 고도화',
    client: '차이나모바일 시스템통합 유한회사',
    tag: '국유기업 오피스',
    result: '비용 절감과 효율 향상 목표를 달성하고, 입찰서 작성·문서 제작·일상 업무의 효율을 크게 개선',
    background:
      '차이나모바일 시스템통합은 일상 운영에서 업무 효율을 높이고 운영 비용을 줄여야 하는 과제에 직면해 있었습니다. 특히 입찰서 작성, 문서 제작, 일상적인 사무 처리를 수작업으로 하다 보니 시간과 노력이 많이 들고 오류도 잦아, 빠르게 성장하는 회사의 속도를 따라가지 못했습니다.',
    pain: [
      '효율적인 입찰서 작성: 고객 요구에 맞춘 고품질 입찰서를 신속하게 작성하고, 수작업에 드는 시간과 노력을 줄여야 했습니다.',
      '스마트한 문서 제작: 형식이 정해진 반복적인 문서를 대량으로 만드는 데 시간이 오래 걸렸고, 일관된 스타일을 유지하기도 어려웠습니다.',
      '사무 업무 간소화: 업무 배정과 진행 관리 등 일상 업무를 자동화해 직원의 부담을 덜고 전체 업무 효율을 높이고자 했습니다.',
    ],
    solution: [
      'ChatU 플랫폼(스탠다드 에디션/온프레미스 에디션)을 도입하고, AI 에이전트 운영체제 기능을 활용했습니다.',
      'ChatU의 지능형 텍스트 생성 기능으로 과거 입찰서 라이브러리와 업계 지식베이스를 학습한 전용 AI 에이전트를 구축해, 입찰서와 제안서 초안을 자동으로 생성했습니다.',
      'ChatU 워크플로우를 구성해 문서 제작, 버전 비교, 업무 배정을 자동화했습니다.',
      'ChatU를 사내 그룹웨어(OA) 시스템(DingTalk, Feishu/Lark, WeCom 지원)과 매끄럽게 연동해 문서 자동 보관, 업무 추적, 알림 기능을 구현했습니다.',
      '기술 엔지니어에게 ChatU 지식베이스 Q&A 어시스턴트를 제공해 제품 사양과 기술 표준을 빠르게 확인할 수 있게 했습니다.',
    ],
    solved: [
      '입찰서 작성 기간을 며칠에서 몇 시간으로 단축하고, 수작업 오류를 줄여 수주율을 높였습니다.',
      '문서 형식과 스타일을 통일하고, 표준화된 문서를 자동으로 생성하게 되었습니다.',
      '일상 업무를 자동화해 직원들이 더 중요한 일에 시간을 쓸 수 있게 되었습니다.',
    ],
    effect:
      '일상 운영에서 비용 절감과 효율 향상을 성공적으로 실현했습니다. 입찰서 작성, 문서 제작, 일상 업무 처리의 효율이 모두 크게 향상되어 회사의 지속 가능한 성장을 든든하게 뒷받침하고 있습니다.',
    metrics: [
      { label: '입찰서 작성', value: '기간 단축' },
      { label: '문서 제작', value: '비용 절감' },
      { label: '업무 효율', value: '효율 향상' },
    ],
  },
  c1: {
    title: '인지 강화형 정신 건강 AI 에이전트 시스템',
    client: '칭화대학교',
    tag: '정신 건강',
    result: '개인 내담자를 위한 정신 건강 AI 에이전트를 구축해 심리 상담 서비스의 효율을 향상',
    background:
      '칭화대학교는 상담 기관, 개인, 비전문 상담사를 위한 인지 강화형 정신 건강 AI 에이전트 시스템 AIRelief를 개발했으며, 상담사의 업무 흐름에 자연스럽게 녹아드는 AI 어시스턴트가 필요했습니다.',
    pain: [
      '상담사가 부족해 내담자의 대기 시간이 길었습니다.',
      '상담 기록 작성과 평가에 많은 시간이 들었습니다.',
      '비전문 상담사에게는 실무 지도와 표준화된 도구가 부족했습니다.',
    ],
    solution: [
      'ChatU AI 플랫폼을 도입해 인지 강화형 정신 건강 AI 에이전트를 구축했습니다.',
      'ChatU의 가상 디지털 휴먼 기술을 활용해 음성과 텍스트로 소통하는 24시간 감정 경청 서비스를 제공했습니다.',
      'ChatU AI 에이전트를 구성해 심리 척도 자동 채점, 위험도별 단계적 경보, 상담 요약 생성을 자동화했습니다.',
      'ChatU 워크플로우로 내담자 정보 등록, 평가 알림, 개입 권고안 초안 작성을 지원해 상담사의 업무를 덜어 주었습니다.',
      '신입 상담사에게 표준 응대 스크립트와 개입 전략 참고 자료를 담은 ChatU 지식베이스 Q&A를 제공했습니다.',
    ],
    solved: [
      '24시간 AI 지원으로 상담사 부족 문제를 완화했습니다.',
      '서류 작업을 자동화해 상담사가 핵심 개입에 집중할 수 있게 했습니다.',
      '비전문 상담사의 서비스 품질을 높였습니다.',
    ],
    effect:
      '상담사의 업무 흐름에 맞는 AI 어시스턴트 시스템을 성공적으로 구축해, 상담 기관과 준전문·비전문 상담사에게 효율적인 지원을 제공하고 있습니다.',
    metrics: [
      { label: '대상 사용자', value: '기관/비전문가' },
      { label: '핵심 기능', value: '인지 강화' },
    ],
  },
  c6: {
    title: '커뮤니티 단위 OPC 에코시스템 모델',
    client: '중관춘 AI 베이웨이 커뮤니티',
    tag: '산업단지',
    result: 'OPC가 커뮤니티 단위에서 작동함을 입증',
    background:
      '베이징 하이뎬구에 위치한 AI 특화 산업 커뮤니티로, 1인 기업(OPC), 슈퍼 개인, 소규모 팀을 대상으로 하며 가볍게 운영할 수 있는 OPC 에코시스템 모델이 필요했습니다.',
    pain: [
      '입주 기업, 특히 1인 기업은 AI 역량이 부족하고 기술 장벽이 높았습니다.',
      '컴퓨팅 자원 비용이 비싸 소규모 팀이 감당하기 어려웠습니다.',
      '커뮤니티 내 기업들이 정보 사일로에 갇혀 있어 협업과 혁신 문화가 부족했습니다.',
    ],
    solution: [
      '단지 단위의 AI 역량 생산·거래 플랫폼인 OPC Hub를 도입해 통합 AI 기반으로 삼았습니다.',
      'OPC Hub의 멀티 모델 오케스트레이션과 에이전트 기반 실행을 활용해 AI 역량을 실행·계량·거래할 수 있는 디지털 상품으로 패키징했습니다.',
      '컴퓨팅 보조금을 컴퓨팅 바우처 형태로 일괄 발급·관리해 기업의 진입 장벽을 낮췄습니다.',
      'ChatU의 멀티 엔진·멀티모달 기능을 통합해 입주 기업에 AI 에이전트 구축, 워크플로우 자동화, 문서 생성 도구를 제공했습니다.',
      '고품질 AI 강좌, 표준화된 교육 체계, OPC 초급 인증을 제공했습니다.',
      'AI 살롱, 로드쇼, 기술 교류 행사를 열어 커뮤니티 네트워크를 구축했습니다.',
      '온프레미스 배포를 지원해 데이터 보안과 전 과정 추적성을 확보했습니다.',
    ],
    solved: [
      '저비용 컴퓨팅 자원을 공유해 기업의 AI 도입 장벽을 낮췄습니다.',
      '컴퓨팅 자원이 실제 애플리케이션과 산업 성과로 이어지도록 했습니다.',
      '“커뮤니티 + 플랫폼 + 기업”으로 이루어진 가벼운 OPC 에코시스템을 구축해 정보 사일로를 해소했습니다.',
    ],
    effect:
      '입주 기업을 위한 통합 AI 접근 창구를 마련했습니다. 여러 차례의 AI 살롱과 기술 교류 행사를 지원했으며, OPC가 커뮤니티 단위에서 작동함을 입증했습니다.',
    metrics: [
      { label: '핵심 모델', value: '커뮤니티 + 플랫폼 + 기업' },
      { label: '주요 활동', value: 'AI 살롱/기술 교류' },
    ],
  },
  c7: {
    title: '산업단지 전체로의 OPC 확산',
    client: '중관춘(차오양) AI Space 산업단지',
    tag: '산업단지',
    result: '단지의 AI 기업 수용 역량을 크게 강화하고, OPC가 산업단지 규모로 확장 가능함을 입증',
    background:
      '베이징 차오양구의 AI 산업단지로, AI 기업 수용 역량을 확대하고 입주 기업의 AI 활용을 지원해야 했습니다.',
    pain: [
      '입주 기업들은 AI를 실제 업무에 적용하는 데 어려움을 겪었고 체계적인 지원도 부족했습니다.',
      '컴퓨팅 자원이 분산되어 있어 기업이 이용하는 데 비용이 많이 들었습니다.',
      '단지 운영사는 전통적인 임대 수익 모델에서 부가가치 서비스와 에코시스템 운영으로 전환해야 했습니다.',
    ],
    solution: [
      'OPC Hub 플랫폼을 도입해 “컴퓨팅 + 플랫폼 + 교육 + 행사”를 하나의 완결된 선순환 구조로 연결했습니다.',
      'OPC Hub로 여러 컴퓨팅 자원을 통합 오케스트레이션해, 기업이 낮은 장벽으로 컴퓨팅 자원을 이용할 수 있게 했습니다.',
      '입주 기업에 AI 기반으로 쓸 ChatU 계정(약정 수량 이내)을 제공했습니다.',
      '고품질 AI 강좌, 산업 멘토, AI 운영 지원(콘텐츠·브랜딩·기업 유치 연계)을 도입했습니다.',
      '기업별·업종별 로드쇼와 매칭 행사를 열어 기술, 활용 사례, 자본을 연결했습니다.',
      '선택 사항으로 국제 PEC 콘퍼런스를 개최해 단지의 인지도를 높였습니다.',
      '전 과정 추적성과 공신력 있는 감사를 지원해 규정 준수를 보장했습니다.',
    ],
    solved: [
      '기업이 AI와 컴퓨팅 자원을 이용하는 장벽을 크게 낮췄습니다.',
      '단지의 AI 기업 수용 역량을 높이고 다른 단지와의 차별화를 이뤘습니다.',
      '임대료에만 의존하던 구조에서 “기본 사무 공간 무상 제공 + 부가가치 서비스 + 지분 투자”라는 다각화된 모델로 전환하도록 도왔습니다.',
    ],
    effect:
      '입주 기업의 AI 도입과 역량 향상을 지원하고, 자립적으로 운영되는 OPC 산업 서비스 체계를 구축했습니다. OPC가 산업단지 규모로 확장 가능함을 입증했습니다.',
    metrics: [
      { label: '선순환 구성 요소', value: '컴퓨팅/플랫폼/교육/행사' },
      { label: '수용 역량', value: '대폭 향상' },
    ],
  },
  c9: {
    // 中文原文标题与标签为空，韩文同样留空
    title: '',
    client: '이좡 인공지능연구원',
    subtitle: '상하이 훙차오 기업-정부 커넥트 · 전용 구축',
    tag: '',
    result: '상하이 훙차오의 6개 가도·진에 도입',
    background:
      '중국의 전국 통일 대시장 정책에 따라 지방 정부가 더 이상 세금 환급으로 투자를 유치할 수 없게 되면서, 기업 환경 개선과 정책 서비스에 집중하게 되었습니다. 상하이 훙차오 정무구와 관할 6개 가도·진은 기업에 지원 정책을 효율적이고 정확하게 전달·해설하고 행정 서비스를 개선해야 했습니다.',
    pain: [
      '정책 내용이 복잡하고 자주 바뀌어 기업이 자신에게 맞는 지원책을 찾기 어려웠습니다.',
      '기존의 수작업 정책 상담은 느리고 비용이 많이 들었으며, 기업별 맞춤 대응도 불가능했습니다.',
      '정부는 WeChat 행정 서비스 그룹과 AI 에이전트를 결합해 정책을 더 효과적으로 기업에 전달할 수 있는, 가볍고 복제 가능한 방식이 필요했습니다.',
    ],
    solution: [
      'WeChat과 ChatU 플랫폼을 기반으로 개발했으며, 테스트를 마친 AI 에이전트를 10분 만에 출시했습니다.',
      '진입점이 WeChat 홈 화면에 있어 사용자는 새로 배울 것 없이 바로 이용할 수 있습니다.',
      'WeCom API 사용에 대한 공식 승인을 받아 안전하고 안정적으로 운영됩니다.',
      '사용자별 맞춤화: 사용자 프로필에 따라 적합한 AI 에이전트와 그룹을 자동으로 매칭하고, 맞춤형 정책 콘텐츠를 발송합니다.',
      '“훙차오 AI 정책 어드바이저” 에이전트를 구축해 해외 진출 지원, 해외직접투자 프로젝트 지원, 전문 서비스 기관 지원 등의 정책에 관한 기업의 질문에 구체적인 금액과 자격 요건까지 포함해 자동으로 답변합니다.',
      '복제 가능한 모델: 상하이 훙차오의 6개 가도·진을 비롯한 여러 지역에 이미 도입되었습니다.',
    ],
    solved: [
      '복잡하고 자주 바뀌는 정책을 연중무휴 24시간 AI 정책 Q&A 서비스로 전환했습니다.',
      '수작업 상담의 일부를 대체해 행정 서비스 비용을 줄이고 기업 만족도를 높였습니다.',
      'WeChat 그룹과 AI 에이전트를 결합해 정확한 정책 전달과 맞춤형 매칭을 실현했습니다.',
    ],
    effect:
      '상하이 훙차오의 6개 가도·진에 성공적으로 도입했습니다. AI 에이전트를 단 10분 만에 출시해 행정 서비스의 디지털 전환 기간을 크게 단축했습니다. WeChat 행정 서비스 그룹과 AI 에이전트를 결합한 “최단 경로, 공식 승인, 복제 가능”한 모델을 확립했습니다.',
    metrics: [
      { label: '구축 시간', value: '10분' },
      { label: '적용 가도·진', value: '훙차오 6곳' },
    ],
  },
  c4: {
    title: '종자 산업 AI 에이전트 플랫폼',
    client: '바이아오윈(종자 산업 애그테크 기업)',
    tag: '애그테크',
    result:
      '데이터 조회부터 지식 Q&A까지 전 과정을 AI로 지원해 육종 연구 효율을 크게 높이고 신품종 개발을 가속화',
    background:
      '바이아오윈은 종자 산업에 특화된 기업으로, 벼와 옥수수 등 작물의 표현형 데이터, 유전자형 데이터, 품종 심사 기록을 대량으로 다룹니다. 육종 연구에는 효율적인 데이터 조회, 형질 분석, 지식 Q&A가 필요합니다.',
    pain: [
      '육종 데이터가 흩어져 있어 조회할 때마다 스프레드시트를 일일이 뒤져야 했기 때문에 비효율적이었습니다.',
      '품종 형질 분석과 선발이 전문가의 경험에 의존해 노하우를 전수하기 어려웠습니다.',
      '지능형 Q&A나 의사 결정 지원 도구가 없었습니다.',
    ],
    solution: [
      'ChatU AI 에이전트 플랫폼을 기반으로 종자 산업용 AI 에이전트를 여러 개 구축했습니다.',
      '벼 품종 표현형–유전자형 조회 에이전트: ChatU의 멀티 모델 오케스트레이션과 자체 데이터 학습 기능을 활용해 육종 데이터베이스와 자연어 Q&A를 결합했습니다.',
      '심사 통과 옥수수 품종 표현형 분석 에이전트: ChatU의 데이터 분석과 워크플로우 기능을 활용해 심사를 통과한 품종을 자동으로 비교 분석했습니다.',
      'BAISeeds 플랫폼 지능형 Q&A: ChatU의 지능형 Q&A 모듈을 배포해 연구원에게 연중무휴 24시간 지식 서비스를 제공했습니다.',
      'ChatU의 프라이빗 AI 에이전트 학습·관리 기능으로 자체 육종 데이터를 불러오고, 모델 파라미터를 자유롭게 조정해 출력 결과를 최적화했습니다.',
    ],
    solved: [
      '데이터 조회와 형질 분석부터 지식 Q&A까지 전 과정에 AI를 도입했습니다.',
      '육종 전문가의 업무 부담을 줄이고 우수 조합 선발을 가속화했습니다.',
    ],
    effect:
      '육종 연구 효율을 크게 높이고 신품종 개발을 가속화해, 종자 산업에서 AI 에이전트가 지닌 큰 가치를 보여 주었습니다.',
    metrics: [
      { label: '적용 분야', value: '조회/분석/Q&A' },
      { label: '육종 효율', value: '대폭 향상' },
    ],
  },
  c3: {
    title: 'AI 테크 블로거를 위한 엔드투엔드 지원',
    client: 'Punk Zhou(AI 기술 트렌드 관찰자 / 1인 크리에이터)',
    tag: '콘텐츠 제작',
    result: '영향력과 도달 범위를 전방위로 확대',
    background:
      '테크 콘텐츠 크리에이터인 Punk Zhou는 고품질 콘텐츠를 빠르게 제작하면서 여러 플랫폼을 운영하고 팔로워와 소통해야 합니다.',
    pain: [
      '콘텐츠 제작 속도가 트렌드를 따라가지 못했습니다.',
      '플랫폼별 배포에 많은 시간과 노력이 들었습니다.',
      '팔로워와의 소통량이 많아 답변이 늦어졌습니다.',
    ],
    solution: [
      'ChatU AI 플랫폼을 도입해 제작, 최적화, 운영, 소통의 전체 워크플로우에 활용했습니다.',
      'ChatU의 지능형 텍스트 생성 기능으로 화제의 테크 이슈를 깊이 있게 분석하는 장문 콘텐츠를 작성했습니다.',
      'ChatU의 멀티 플랫폼 연동(WeChat, Weibo, Douyin 등)을 활용해 콘텐츠를 플랫폼별 짧은 게시물, 제목, 카드로 자동 변환했습니다.',
      'ChatU AI 에이전트를 설정해 팔로워 댓글에 자동으로 답변하고 화제 트렌드를 분석했습니다.',
      'ChatU의 UPPT로 라이브 방송 개요와 발표 자료를 빠르게 제작했습니다.',
    ],
    solved: [
      '콘텐츠 제작 시간을 몇 시간에서 몇 분으로 단축했습니다.',
      '클릭 한 번으로 플랫폼별 맞춤 변환과 배포가 가능해져 운영 부담이 줄었습니다.',
      '연중무휴 24시간 팔로워와 소통해 팬 충성도를 높였습니다.',
    ],
    effect:
      '제작, 최적화, 운영, 소통 전 과정에서 효율적이고 혁신적인 지원을 제공해 영향력과 도달 범위를 전반적으로 높였습니다.',
    metrics: [
      { label: '지원 범위', value: '엔드투엔드' },
      { label: '효과', value: '도달 범위 확대' },
    ],
  },
  c11: {
    title: '금융·경제 AI 실습 교육 및 디지털 인재 양성',
    client: '윈난재경대학',
    tag: '금융·경제 교육',
    result:
      '6개월 만에 교내 AI 실습 허브를 구축하고, 협력 기업의 데이터 분석·마케팅 운영 인건비를 40% 절감',
    background:
      '윈난재경대학은 재무·경제, 경제·경영, 금융, 세무 분야 전공으로 잘 알려진 대학입니다. 학생과 교직원 규모가 크고, 경제·경영 분야 교내 실습 기지와 많은 중소·영세 협력 기업을 보유하고 있습니다. 그러나 기존 AI 교육은 범용 도구를 겉핥기식으로 시연하는 수준에 머물렀고, 금융·경제 전공에 맞춘 체계적인 실습 과정이 없었습니다. 실습 자료도 대부분 가상 사례여서 실제 산업 현장 시나리오가 뒷받침되지 않았기 때문에, 학생들은 재무제표 작성, 경영 데이터 분석, 컴플라이언스와 리스크 관리, 마케팅 등 전문 업무에 AI를 적용하기 어려웠고, 산학 협력 실습의 교육적 가치도 제한적이었습니다.',
    pain: [
      '기존 AI 강좌는 범용적인 내용이어서 금융, 세무, 크로스보더 이커머스 전용 실습 모듈이 없었고, 금융·경제 분야 인재를 양성하려는 대학의 목표와도 잘 맞지 않았습니다.',
      '강좌가 곧바로 도구 조작부터 시작해 효과적인 AI 학습 방법을 가르치지 않았기 때문에, 학생들이 전문 자료를 스스로 공부할 때 효율이 낮았습니다.',
      '표준화된 교내 AI 실습 플랫폼이 없어 실제 업무 프로세스를 재현할 수 없었고, 실습이 현장의 요구와 동떨어져 있었습니다.',
      '단계별 학습 체계가 없어 초보자와 고학년 학생이 같은 커리큘럼을 들었기 때문에 수준별 교육을 실현하기 어려웠습니다.',
      '업계 솔루션에 금융·경제 분야 전용 모듈이 없어 재무 데이터 분석, 세무 컴플라이언스, 경영 디지털화 등의 교육 내용에 공백이 있었습니다.',
    ],
    solution: [
      '모듈형 단계별 AI 커리큘럼을 도입하고, 대학에 맞춘 금융·경제 분야 전용 단계별 학습 경로를 설계했습니다.',
      '모듈형 학습 경로: 기초 모듈에서 범용 AI 역량을 다지고 → 중급 모듈에서 디지털 도구를 실무에 적용하는 방법을 익히며 → 금융·세무 모듈에서 전문 시나리오를 깊이 있게 다룹니다.',
      '강좌 첫머리에 AI를 활용한 효율적인 학습법을 표준화해 가르치고, 파인만 학습법을 방대한 재무제표·정책·산업 자료와 결합해 학생들이 전문 콘텐츠를 더 효율적으로 공부할 수 있도록 했습니다.',
      '교내 전용 AI 실습 허브를 구축해 노코드 AI 앱 제작, 지능형 데이터 분석, 산업 Q&A 등 실습에 필요한 기능을 모두 갖추고 수업 중 실습 수요를 충족했습니다.',
      '금융·경제 분야에 특화된 40개 이상의 실전 시나리오를 전체 커리큘럼에 녹여 냈습니다. AI 재무 보고서 생성, 세무 리스크 자동 점검, 크로스보더 이커머스 마케팅 기획, 매장 실적 리뷰, 중소·영세 기업 컴플라이언스 방안 등이 포함됩니다.',
      '지역 무역·세무·금융 협력 기업과 산학 실습 채널을 마련해 학생들이 실제 기업의 디지털화 프로젝트에 참여하도록 함으로써, 강의실 수업에서 교내 실습, 현장 실무로 이어지는 교육 선순환을 완성했습니다.',
    ],
    effect:
      '교육 측면: 표준화된 금융·경제 AI 실습 커리큘럼을 구축해 경제·경영, 회계, 금융 전공의 디지털 교육 공백을 메우고 수업의 실무성과 전공 연관성을 크게 높였습니다. 학생 측면: 학생들은 금융·경제 직무에 필요한 AI·디지털 역량을 두루 갖추게 되어 인턴십과 취업 경쟁력이 크게 향상되었으며, 기업의 디지털 분석 프로젝트를 독립적으로 수행할 수 있게 되었습니다. 산학 협력 측면: 협력 중소기업에 표준화된 디지털 도입 방안을 제공해 데이터 분석과 마케팅 운영 인건비를 40% 절감했습니다. 장기적 가치: 6개월 만에 교내 AI 실습 허브를 가동하고, 교내 모든 경제·경영 전공으로 확대할 수 있는 대학 대표 금융·경제 디지털 교육 프로그램을 마련했습니다.',
    metrics: [
      { label: '실전 시나리오', value: '40+' },
      { label: '비용 절감', value: '40%' },
    ],
  },
  c10: {
    title: 'AI 기반 금융 데이터 서비스 교육',
    client: '레피니티브(Refinitiv)',
    tag: '금융 데이터',
    result:
      '리서치 보고서 처리 시간을 평균 약 40% 단축하고, 5개 핵심 업무 시나리오에 온프레미스 AI 어시스턴트를 도입했으며, 80명 이상의 직원이 교육을 이수',
    background:
      '레피니티브는 세계적인 금융 데이터·인프라 제공 기업으로, 전 세계 4만 곳 이상의 금융 기관에 뉴스, 데이터, 분석, 거래 플랫폼을 제공하고 있습니다. AIGC 기술이 빠르게 발전함에 따라 레피니티브는 내부 업무 흐름과 고객 서비스에 AI를 접목해 데이터 처리 효율, 생성 콘텐츠의 품질, 직원의 AI 도구 활용 능력을 높이고자 했습니다.',
    pain: [
      '방대한 금융 데이터 속에서 애널리스트와 콘텐츠 팀은 정보 추출, 요약 작성, 보고서 작성에 많은 시간을 들였습니다.',
      '직원마다 대규모 언어 모델 활용 능력의 편차가 컸고, 체계적인 실무 지도가 없었습니다.',
      '금융 업계의 엄격한 규제 요건을 충족하려면 AI 생성 콘텐츠의 정확성, 규정 준수, 추적 가능성을 보장해야 했습니다.',
    ],
    solution: [
      'CubixAI는 자사 ChatU 플랫폼과 실전형 커리큘럼을 결합해 레피니티브 맞춤형 “AI 기반 금융 데이터 서비스” 교육 프로그램을 설계했습니다.',
      '금융을 위한 AI 기초: LLM의 작동 원리와 프롬프트 엔지니어링 기법을 다루고, 리서치 보고서 요약, 뉴스 감성 분석, 데이터 조회 자동화를 중심으로 사례를 분석했습니다.',
      '모델 선정과 온프레미스 배포: CubixAI의 멀티 엔진 지원을 바탕으로, 레피니티브 기술팀이 규정 준수 요건 안에서 적합한 모델을 선택하고 사내 온프레미스 배포를 완료하도록 지도했습니다.',
      'AI 에이전트 구축 워크숍: ChatU의 에이전트 마켓플레이스를 활용해 내부 데이터 검색, 컴플라이언스 점검, 주간 보고서 자동 생성을 위한 “플러그 앤드 플레이, 지속적으로 진화하는” AI 에이전트를 단계별로 구축했습니다.',
      '데이터 보안과 컴플라이언스: 국가 규제 요건과 금융 업계 표준에 맞춰 키워드 필터링, 텍스트·이미지 심사, 콘텐츠 출처 추적 등을 교육해 AI 출력물이 규정을 준수하도록 했습니다.',
      '교육 방식(대면 집중 교육): Microsoft MVP와 Google 기술 전문가를 포함한 CubixAI 전문 강사진이 레피니티브의 베이징·상하이 사무소에서 3일간 몰입형 교육을 진행했습니다.',
      '교육 방식(실전 코칭): 교육 후 4주간 온라인 Q&A와 프로젝트 코칭을 제공해 레피니티브 팀이 첫 사내 AI 도구를 출시하도록 도왔습니다.',
      '교육 방식(인증): 수료 시험에 합격한 참가자는 CubixAI와 레피니티브가 공동 발급하는 AI 실무 역량 인증서를 받았습니다.',
    ],
    solved: [
      '효율 향상: AI로 요약과 보고서 작성을 지원해 레피니티브 콘텐츠 팀의 리서치 보고서 1건당 평균 처리 시간을 약 40% 단축했습니다.',
      '완전한 자체 통제: 데이터 조회, 컴플라이언스 사전 점검 등 5개 핵심 업무 시나리오를 아우르는 사내 온프레미스 AI 어시스턴트를 구축했습니다.',
      '인재 육성: 80명 이상의 기술·업무 담당자가 교육을 이수했고, 그중 20명은 사내 AI 앰배서더로서 각 부서의 AI 전환을 지속적으로 이끌고 있습니다.',
    ],
    effect:
      '레피니티브 콘텐츠 팀은 AI로 요약과 보고서 작성을 지원해 리서치 보고서 1건당 평균 처리 시간을 약 40% 단축했습니다. 현재 사내 온프레미스 AI 어시스턴트가 5개 핵심 업무 시나리오를 지원하고 있습니다. 80명 이상의 직원이 교육을 이수했으며, 20명이 사내 AI 앰배서더가 되었습니다.',
    metrics: [
      { label: '보고서 처리 시간', value: '40% 단축' },
      { label: '교육 이수 인원', value: '80+' },
    ],
  },
  c2: {
    title: '영어 교육을 위한 AI Q&A',
    client: '톈톈아이이(영어 교육 기관)',
    tag: '교육',
    result: '폭넓고 정확하며 재미있는 언어 학습 경험을 제공하고, 교육 응대 효율을 향상',
    background:
      '영어 교육 기관으로서 수강생에게 번역, 첨삭, 학습 지도를 제공하는 지능형 Q&A 서비스가 필요했으며, 쉽게 이용할 수 있도록 WeChat에 AI를 통합하고자 했습니다.',
    pain: [
      '수강생이 수업 후 바로 도움을 받을 수 있는 학습 자원이 없었습니다.',
      '강사가 같은 질문에 반복해서 답하느라 많은 시간을 썼습니다.',
      '언어 교육 특성상 첨삭과 번역 요청이 잦았는데, 사람이 직접 응대하다 보니 느렸습니다.',
    ],
    solution: [
      'ChatU를 WeChat에 설정해 수강생에게 지능형 Q&A 서비스를 제공했습니다.',
      'ChatU의 다국어 번역과 텍스트 재작성 기능으로 실시간 번역과 첨삭을 구현했습니다.',
      '기관의 강의 콘텐츠로 지식베이스를 학습시킨 ChatU 교육용 AI 에이전트를 배포해 학습 질문에 자동으로 답변하도록 했습니다.',
      'ChatU의 멀티모달 상호작용으로 음성 입력을 지원해 수강생이 말하기를 더 쉽게 연습할 수 있게 했습니다.',
      'ChatU의 파일 분석 기능으로 강사의 작문 첨삭과 연습 자료 제작을 지원했습니다.',
    ],
    solved: [
      '수강생은 언제든 번역, 첨삭, 학습 질문에 대한 답변을 받을 수 있게 되어 학습 경험이 향상되었습니다.',
      '강사는 반복적인 질의응답에서 벗어나 심화 교육에 집중할 수 있게 되었습니다.',
      '기계 번역, 자연어 처리, 음성 합성·인식 등 여러 AI 기술을 결합해 종합적인 언어 학습 지원을 제공했습니다.',
    ],
    effect:
      '수강생에게 연중무휴 24시간 지능형 Q&A 서비스를 성공적으로 제공해 기관의 서비스 역량과 수강생 만족도를 크게 높였습니다.',
    metrics: [
      { label: '서비스 채널', value: 'WeChat' },
      { label: '기능', value: '번역/첨삭/학습 지도' },
    ],
  },
}

/** 各语言版案例列表：保留原始数据中的 id、图片、图标、分类等字段，只替换文字字段 */
const withText = (texts: Record<CaseId, CaseText>): CaseItem[] => cases.map((c) => ({ ...c, ...texts[c.id as CaseId] }))
const localizedCases: Record<'en' | 'ja' | 'ko', CaseItem[]> = {
  en: withText(casesEn),
  ja: withText(casesJa),
  ko: withText(casesKo),
}

/** 按语言取案例列表：中文返回原始 cases（不做任何改动），英文、日文、韩文返回对应译文 */
export function localizeCases(locale: string): CaseItem[] {
  const key = contentKey(locale)
  return key === 'zh' ? cases : localizedCases[key]
}

/** 当前语言的案例列表（computed） */
export function useLocalizedCases(): ComputedRef<CaseItem[]> {
  const { locale } = useI18n()
  return computed(() => localizeCases(locale.value))
}
