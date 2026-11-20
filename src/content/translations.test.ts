import { describe, expect, it } from 'vitest'
import { agentStationContent } from './agentstation'
import { chatuContent } from './chatu'
import { opcHubContent } from './opcHub'
import { trainingContent } from './training'
import { casesEn, casesJa, casesKo } from './cases'
import { solutionsEn, solutionsJa, solutionsKo } from './solutions'
import { cases } from '@/data/cases'
import { solutions } from '@/data/solutions'

/**
 * 日文、韩文正文的完整性检查：结构和中文原文一致、确实翻译了（不是英文原样照搬）、
 * 日文里有假名、韩文里有韩文字母且不夹汉字。
 */
const HAN = /[一-鿿]/
const KANA = /[぀-ヿ]/
const HANGUL = /[가-힯]/
const LETTERS = /[A-Za-z]{4,}/

type Tree = unknown
function strings(v: Tree, path = '', out: [string, string][] = []): [string, string][] {
  if (typeof v === 'string') out.push([path, v])
  else if (Array.isArray(v)) v.forEach((x, i) => strings(x, `${path}[${i}]`, out))
  else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) strings(x, path ? `${path}.${k}` : k, out)
  return out
}
/** 结构（键、数组长度、哪些字段有内容）和中文一致 */
function shape(v: Tree): Tree {
  if (typeof v === 'string') return v.trim() ? 's' : ''
  if (Array.isArray(v)) return v.map(shape)
  if (v && typeof v === 'object') return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, shape(x)]))
  return typeof v
}

// 和英文一模一样、且是一句话（4 个词以上）的，算没翻译；品牌名、型号等短词和英文相同是正常的
function untranslated(target: [string, string][], en: [string, string][]) {
  const enMap = new Map(en)
  return target.filter(([p, s]) => s === enMap.get(p) && LETTERS.test(s) && s.trim().split(/\s+/).length >= 4).map(([p, s]) => `${p}: ${s}`)
}

const pages = {
  agentstation: agentStationContent,
  chatu: chatuContent,
  opcHub: opcHubContent,
  training: trainingContent,
  cases: { zh: Object.fromEntries(cases.map((c) => [c.id, c])), en: casesEn, ja: casesJa, ko: casesKo },
  solutions: { zh: Object.fromEntries(solutions.map((s) => [s.id, s])), en: solutionsEn, ja: solutionsJa, ko: solutionsKo },
}

describe.each(Object.entries(pages))('%s Japanese / Korean text', (name, c) => {
  const pick = (v: Record<string, unknown>) => (name === 'cases' || name === 'solutions' ? Object.fromEntries(Object.entries(v).map(([id, x]) => [id, Object.fromEntries(Object.entries(c.en[id as keyof typeof c.en] as object).map(([k]) => [k, (x as Record<string, unknown>)[k]]))])) : v)

  it.each(['ja', 'ko'] as const)('%s has the same structure as the English', (lang) => {
    expect(shape(c[lang])).toEqual(shape(pick(c.en as Record<string, unknown>)))
  })

  it('Japanese is actually Japanese, not copied English', () => {
    const ja = strings(c.ja)
    expect(untranslated(ja, strings(c.en))).toEqual([])
    const long = ja.filter(([, s]) => s.length > 12 && (HAN.test(s) || KANA.test(s) || LETTERS.test(s)))
    const withKana = long.filter(([, s]) => KANA.test(s))
    expect(withKana.length / long.length).toBeGreaterThan(0.6)
  })

  it('Korean is actually Korean, without Chinese characters', () => {
    const ko = strings(c.ko)
    expect(untranslated(ko, strings(c.en))).toEqual([])
    expect(ko.filter(([, s]) => HAN.test(s)).map(([p, s]) => `${p}: ${s}`)).toEqual([])
    const long = ko.filter(([, s]) => s.length > 12)
    expect(long.filter(([, s]) => HANGUL.test(s)).length / long.length).toBeGreaterThan(0.7)
  })
})
