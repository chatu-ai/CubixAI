/**
 * 有偿资讯（演示数据）
 * 所有条目同属一个类别，付费流程仅为扫码演示，不接入真实支付。
 */

export const PAID_INSIGHT_CATEGORY = '企业 AI 落地实战技巧'

export type PaidInsightPrice = 2 | 5 | 9

export interface PaidInsight {
  id: string
  title: string
  /** 价格（元） */
  price: PaidInsightPrice
  /** 发布日期 YYYY-MM-DD */
  date: string
}

export const paidInsights: PaidInsight[] = [
  {
    id: 'kb-cleaning-checklist',
    title: '企业知识库搭建前必做的 12 项文档清洗清单',
    price: 5,
    date: '2026-10-28',
  },
  {
    id: 'rag-accuracy-tuning',
    title: 'RAG 问答准确率从 60% 提升到 90% 的 7 个调优步骤',
    price: 9,
    date: '2026-10-24',
  },
  {
    id: 'private-llm-gpu-sizing',
    title: '私有化部署大模型的显卡选型与成本测算表',
    price: 9,
    date: '2026-10-20',
  },
  {
    id: 'agent-permission-boundaries',
    title: '给智能体划权限：企业内 Agent 调用工具的 5 条安全边界',
    price: 5,
    date: '2026-10-16',
  },
  {
    id: 'prompt-template-library',
    title: '财务、法务、客服三类岗位可直接复用的提示词模板库',
    price: 2,
    date: '2026-10-12',
  },
  {
    id: 'ai-pilot-roi-calculator',
    title: '向老板汇报 AI 试点：一页纸 ROI 测算模板与话术',
    price: 2,
    date: '2026-10-08',
  },
  {
    id: 'multi-model-routing',
    title: '多模型调度实战：按任务类型自动选模型的路由规则',
    price: 5,
    date: '2026-10-03',
  },
  {
    id: 'ocr-invoice-pipeline',
    title: '票据 OCR 到财务审核自动化：一条跑通的流水线配置',
    price: 9,
    date: '2026-09-28',
  },
  {
    id: 'kb-maintenance-sop',
    title: '知识库上线后怎么养：每周 30 分钟的维护 SOP',
    price: 2,
    date: '2026-09-22',
  },
  {
    id: 'ai-training-rollout',
    title: '全员 AI 培训落地：分岗位、分阶段的推进节奏表',
    price: 5,
    date: '2026-09-16',
  },
]

export function findPaidInsight(id: string): PaidInsight | undefined {
  return paidInsights.find((item) => item.id === id)
}
