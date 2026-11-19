import { computed, type ComputedRef } from 'vue'
import { useI18n } from 'vue-i18n'
import { solutions, type Solution } from '@/data/solutions'

/**
 * 解决方案页各行业方案的英文文字。
 * 中文访客直接使用 src/data/solutions.ts 中的原始数据；其他语言（英文、日文、韩文）显示这里的英文。
 * subtitle 原本就是英文，沿用原始数据。
 */

/** src/data/solutions.ts 中所有方案的 id（新增方案时也要在这里补上英文） */
export type SolutionId =
  | 'telecom'
  | 'park_opc'
  | 'agri'
  | 'university'
  | 'enterprise-service'
  | 'media'
  | 'fin_ins'
  | 'ecommerce'
  | 'health'
  | 'psych'
  | 'design'
  | 'itdev'

/** 方案中随语言切换的文字字段；id、subtitle、图标、图片沿用原始数据 */
export type SolutionText = Pick<Solution, 'title' | 'tags' | 'scenes' | 'pain' | 'cpsm'>

export const solutionsEn: Record<SolutionId, SolutionText> = {
  telecom: {
    title: 'Telecom / Carriers',
    tags: ['Technology-Intensive', 'Heavy Documentation', 'Frequent Bids', 'Standardized Processes', 'Strict Compliance'],
    scenes: [
      'Fast drafting of technical bids and proposals',
      'Everyday office automation (task assignment, meeting minutes)',
      'Technical Q&A support for customers',
      'Version control and proofreading of project documents',
    ],
    pain: 'Shortens bid-writing cycles, standardizes documentation and frees technical staff from administrative work.',
    cpsm: 'ChatU quickly drafts technical bids, proposals and incident reports. Connected to internal OA and project management tools, it archives documents automatically, compares versions and assigns tasks, and gives front-line engineers a knowledge base Q&A assistant.',
  },
  park_opc: {
    title: 'OPC Industrial Parks / Incubators',
    tags: ['Digital Upgrade for Parks', 'Lower AI Compute Costs', 'Asset-Light Startups', 'One-Stop AI Enablement'],
    scenes: [
      'Smart upgrades for industrial parks',
      'AI adoption for companies in the park',
      'Lightweight startups for micro-businesses and individuals',
      'AI enablement for independent creators',
    ],
    pain: 'Helps parks move beyond rent-only income; tackles high compute costs, hard-to-get AI tools and the isolation of working alone; brings policy resources together into a distinctive AI ecosystem; and lowers the barrier for companies and individuals to use AI and start businesses.',
    cpsm: 'OPC Hub deploys a shared AI foundation and compute scheduling for industrial parks, incubators and individual founders, with on-premises deployment, a one-stop AI toolchain and a community collaboration network. It greatly lowers the cost of compute and the barrier to AI entrepreneurship for park companies, independent creators and small startups.',
  },
  agri: {
    title: 'Agriculture / Seed Industry',
    tags: ['Data-Driven Breeding', 'Long R&D Cycles', 'Genotype–Phenotype Linkage', 'Research-Intensive'],
    scenes: [
      'Querying and analyzing phenotype data for rice, corn and other varieties',
      'Intelligent Q&A on genotype–phenotype associations',
      'Recommendations for selecting breeding materials',
      'Automatic reports on agricultural research results',
    ],
    pain: 'Speeds up querying and analysis of breeding data and shortens the development cycle for new varieties.',
    cpsm: 'ChatU powers an industry AI agent that answers natural-language questions about variety traits, genotypes and environmental data and produces visual comparison reports. It helps draft variety registration materials and trial plans, turning data assets into a knowledge base you can talk to.',
  },
  university: {
    title: 'Universities / Training Institutions',
    tags: ['Hands-On AI Training for Universities', 'Practical Skills for Employment', 'Personalized Teaching', 'Higher Efficiency'],
    scenes: [
      'Hands-on AI courses',
      'Intelligent study support for students',
      'Faster lesson preparation for teachers',
    ],
    pain: 'University AI teaching is heavy on theory and light on practice, and faculty and compute are costly. Teachers spend a lot of time on repetitive lesson preparation and Q&A, and students lack personalized round-the-clock tutoring.',
    cpsm: 'ChatU powers an intelligent teaching assistant that generates lesson plans and exercises and grades and answers questions, easing the load on teachers. Tiered hands-on AI courses and real company projects, with skills certification for students, make graduates more competitive in the job market.',
  },
  'enterprise-service': {
    title: 'Government / State-Owned Enterprises',
    tags: ['More Efficient Financial Compliance', 'Automated Internal Operations', 'SOE Security Compliance', 'Locally Controlled Data'],
    scenes: [
      'Intelligent review of invoices and expense claims',
      'Automated office operations',
      'Intelligent analysis and visualization of business data',
      'Compliant handling of official SOE documents',
    ],
    pain: 'Solves tedious financial data entry, inefficient office operations and poor data collaboration, while meeting SOE requirements for data security, domestic IT compatibility and compliance auditing, greatly cutting labor costs and speeding up office work and decision-making.',
    cpsm: 'For general business scenarios, ChatU provides OCR invoice recognition, financial compliance review, automatic office documents and multi-source data analysis, automating operations and finance with a light footprint. For classified and compliance-sensitive SOE scenarios, AgentStation is deployed on-premises so data never leaves the physical boundary, runs on domestic IT environments, and handles official documents, policy Q&A and report consolidation with a full audit trail, meeting both the efficiency needs of general businesses and the security requirements of state-owned assets.',
  },
  media: {
    title: 'Self-Media / MCNs',
    tags: ['High-Volume Content Creation', 'Time-Sensitive', 'Multi-Channel Distribution', 'Heavy Audience Interaction'],
    scenes: [
      'Real-time tech news gathering and summaries',
      'One-click content adaptation for WeChat Official Accounts, Weibo, Douyin and more',
      'Smart replies to follower comments and topic analysis',
      'Automatic video scripts and livestream outlines',
    ],
    pain: 'Speeds up content production and distribution, enables 24/7 follower engagement and lowers operating labor costs.',
    cpsm: 'ChatU pulls in tech news in real time and writes in-depth long-form analysis, then breaks it into short copy and headlines for each platform. AI agents automatically answer common questions in the comments and analyze follower topic trends to help plan content.',
  },
  fin_ins: {
    title: 'Finance / Insurance',
    tags: ['Strict Data Compliance', 'High Volume of Documents and Reports', 'Strong Risk Control Needs', 'Standardized Reporting'],
    scenes: [
      'Intelligent asset valuation and financial statement analysis',
      'Automatic regulatory filing documents',
      'Automated insurance loss assessment and claims',
      'Policy services and fraud risk detection',
    ],
    pain: 'Reduces manual calculation and data entry errors, shortens valuation report and claims processing cycles, and strengthens end-to-end risk control and compliance across finance and insurance.',
    cpsm: 'ChatU parses financial statements and industry data to run asset valuation models, generates compliant valuation reports in one click and checks them against regulations. It also enters insurance claim reports automatically, assists with loss assessment, flags fraud risk by comparing data, and answers policy questions and pushes renewal plans, bringing digital efficiency to every part of financial valuation and insurance.',
  },
  ecommerce: {
    title: 'E-commerce / Retail',
    tags: ['High Inquiry Volume', 'Fast-Paced Promotions', 'Complex After-Sales Issues', 'Multi-Platform Management'],
    scenes: [
      'Pre-sales inquiries (product specs, promotions)',
      'Automatic answers to common after-sales questions (returns, shipping)',
      'Customer sentiment detection and escalation to human agents',
      'Product review summaries and competitor analysis',
    ],
    pain: 'Lowers customer service costs, speeds up responses at peak times and keeps service consistent.',
    cpsm: 'A ChatU-based omnichannel AI customer service connects Taobao, JD.com, WeChat Mini Programs, Douyin and other platforms in one place, handling pre-sales guidance, self-service returns and shipping inquiries. It detects customer sentiment and hands off to a human, creates tickets for unresolved issues and produces reports on frequent complaints.',
  },
  health: {
    title: 'Healthcare / Wellness',
    tags: ['High Professional Barriers', 'Rigorous Documentation', 'Diagnostic Support', 'Sensitive Data Privacy'],
    scenes: [
      'Automatic drafting of medical records and diagnostic reports',
      'Medical literature search and summaries',
      'Preliminary interpretation of imaging reports',
      'Polishing and format checks for doctors’ research papers',
    ],
    pain: 'Greatly reduces the time doctors spend on paperwork and makes medical records more standardized and knowledge easier to access.',
    cpsm: 'ChatU generates structured records such as admission notes, discharge summaries and surgical records, with voice input and transcription. Based on the hospital’s knowledge base, it provides medication guidance, clinical guideline lookups and literature summaries, and helps write research papers and describe statistical data.',
  },
  psych: {
    title: 'Mental Health / Emotional Support',
    tags: ['Emotional Interaction', 'Privacy Protection', 'Shortage of Trained Staff', 'Balancing Standardization and Personalization'],
    scenes: [
      'Assistant services for university counseling centers',
      'Initial screening and emotional companionship for clients of counseling organizations',
      'Workflow support for counselors (notes, assessments, reminders)',
      'Mental health education and self-help exercises',
    ],
    pain: 'Eases the shortage of counselors, reduces paperwork and helps non-professional counselors provide better service.',
    cpsm: 'ChatU powers a cognitive-enhanced mental health AI agent offering 24/7 emotional companionship and mental health Q&A. It scores psychological scales, grades and flags risk, and summarizes sessions automatically, and gives new counselors standardized intervention suggestions and case references.',
  },
  design: {
    title: 'Advertising / Creative Design',
    tags: ['Creativity-Driven', 'Frequent Revisions', 'Diverse Styles', 'Tight Deadlines'],
    scenes: [
      'Marketing posters and social media visuals',
      'Image style transfer (e.g. product photos to illustrations)',
      'Ad copy and slogan ideas in bulk',
      'Fast iteration on visual drafts for client proposals',
    ],
    pain: 'Speeds up creative iteration and revisions, improves design efficiency and reduces repetitive work.',
    cpsm: 'With ChatU’s text-to-image, image-to-image and style transfer, teams quickly produce options in many styles, from illustrations and posters to 3D concepts. It outputs assets in different sizes and layouts in bulk, with smart image expansion, background removal and HD restoration.',
  },
  itdev: {
    title: 'Software Development / IT',
    tags: ['Large Codebases', 'Fast Release Cycles', 'High Quality Standards', 'Hard-to-Sync Documentation'],
    scenes: [
      'Code generation and completion (many languages)',
      'Code review, style checks and vulnerability alerts',
      'Automatic unit test generation',
      'Automatic technical documentation and code comments',
    ],
    pain: 'Speeds up coding and code review, keeps documentation current and lowers the risk of missed defects.',
    cpsm: 'ChatU generates functions, classes and unit tests from comments or requirement descriptions, checks code style and flags potential bugs. It produces API documentation, database comments and changelogs, and suggests refactorings and fills in comments for legacy systems.',
  },
}

/** 英文版方案列表：保留原始数据中的 id、subtitle、图标、图片，只替换文字字段 */
const englishSolutions: Solution[] = solutions.map((s) => ({ ...s, ...solutionsEn[s.id as SolutionId] }))

/** 按语言取方案列表：中文返回原始 solutions（不做任何改动），其他语言返回英文版 */
export function localizeSolutions(locale: string): Solution[] {
  return locale === 'zh-CN' ? solutions : englishSolutions
}

/** 当前语言的方案列表（computed）：中文访客看原始数据，英文、日文、韩文访客看英文 */
export function useLocalizedSolutions(): ComputedRef<Solution[]> {
  const { locale } = useI18n()
  return computed(() => localizeSolutions(locale.value))
}
