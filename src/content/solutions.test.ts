import { describe, expect, it } from 'vitest'
import { solutions } from '@/data/solutions'
import { localizeSolutions, solutionsEn, solutionsJa, solutionsKo, type SolutionId } from './solutions'

const CJK = /[　-〿㐀-鿿＀-￯]/

describe('English solution text (src/content/solutions.ts)', () => {
  it('covers exactly the solutions in src/data/solutions.ts', () => {
    expect(Object.keys(solutionsEn).sort()).toEqual(solutions.map((s) => s.id).sort())
  })

  it.each(solutions.map((s) => [s.id, s] as const))('%s has the same number of tags and scenes as the Chinese', (_id, s) => {
    const en = solutionsEn[s.id as SolutionId]
    expect(en.tags.length).toBe(s.tags.length)
    expect(en.scenes.length).toBe(s.scenes.length)
    expect(en.title && en.pain && en.cpsm).toBeTruthy()
  })

  it('contains no Chinese characters or full-width punctuation', () => {
    const offending = Object.entries(solutionsEn).flatMap(([id, t]) =>
      [t.title, t.pain, t.cpsm, ...t.tags, ...t.scenes].filter((v) => CJK.test(v)).map((v) => `${id}: ${v}`),
    )
    expect(offending).toEqual([])
  })

  it('gives Chinese visitors the original data untouched and others the English', () => {
    expect(localizeSolutions('zh-CN')).toBe(solutions)
    const en = localizeSolutions('en')
    expect(en.map((s) => s.id)).toEqual(solutions.map((s) => s.id))
    en.forEach((s, i) => {
      expect(s.url).toBe(solutions[i].url)
      expect(s.icon).toBe(solutions[i].icon)
      expect(s.subtitle).toBe(solutions[i].subtitle)
    })
    expect(localizeSolutions('ja').map((s) => s.title)).toEqual(solutions.map((s) => solutionsJa[s.id as SolutionId].title))
    expect(localizeSolutions('ko').map((s) => s.title)).toEqual(solutions.map((s) => solutionsKo[s.id as SolutionId].title))
  })
})
