import { describe, expect, it } from 'vitest'
import { createApp, defineComponent, h, nextTick, type ComputedRef } from 'vue'
import { createI18n } from 'vue-i18n'
import { cases, type CaseItem } from '@/data/cases'
import { casesEn, localizeCases, useLocalizedCases, type CaseId } from './cases'

const CJK = /[　-〿㐀-鿿＀-￯]/
const listFields = ['pain', 'solution', 'solved', 'metrics'] as const
const textFields = ['title', 'client', 'tag', 'result', 'background', 'effect', 'subtitle', 'location'] as const

function en(c: CaseItem) {
  return casesEn[c.id as CaseId]
}

describe('English case text (src/content/cases.ts)', () => {
  it('covers exactly the cases in src/data/cases.ts', () => {
    expect(Object.keys(casesEn).sort()).toEqual(cases.map((c) => c.id).sort())
  })

  it.each(cases.map((c) => [c.id, c] as const))('%s has the same number of list entries as the Chinese', (_id, c) => {
    for (const field of listFields) {
      expect(en(c)[field]?.length, field).toBe(c[field]?.length)
    }
  })

  it.each(cases.map((c) => [c.id, c] as const))('%s fills the same text fields as the Chinese', (_id, c) => {
    for (const field of textFields) {
      // 中文有内容的字段英文也要有内容；中文为空或没有的字段英文也留空
      expect(Boolean(en(c)[field]), field).toBe(Boolean(c[field]))
    }
    c.metrics.forEach((m, i) => {
      expect(Boolean(en(c).metrics[i].label), `metrics[${i}].label`).toBe(Boolean(m.label))
      expect(Boolean(en(c).metrics[i].value), `metrics[${i}].value`).toBe(Boolean(m.value))
    })
  })

  it('contains no Chinese characters or full-width punctuation', () => {
    const offending: string[] = []
    const walk = (v: unknown, path: string) => {
      if (typeof v === 'string') {
        if (CJK.test(v)) offending.push(`${path}: ${v}`)
      } else if (v && typeof v === 'object') {
        for (const [k, child] of Object.entries(v)) walk(child, `${path}.${k}`)
      }
    }
    walk(casesEn, 'casesEn')
    expect(offending).toEqual([])
  })
})

describe('localizeCases', () => {
  it('returns the original Chinese case objects untouched for zh-CN', () => {
    const zh = localizeCases('zh-CN')
    expect(zh).toBe(cases)
    zh.forEach((c, i) => expect(c).toBe(cases[i]))
    expect(cases.find((c) => c.id === 'c5')?.client).toBe('中移系统集成有限公司')
  })

  it.each(['en', 'ja', 'ko'])('returns English text with the original non-text fields for %s', (locale) => {
    const list = localizeCases(locale)
    expect(list.map((c) => c.id)).toEqual(cases.map((c) => c.id))
    list.forEach((c, i) => {
      const orig = cases[i]
      expect(c).not.toBe(orig)
      expect({ id: c.id, image: c.image, icon: c.icon, category: c.category }).toEqual({
        id: orig.id,
        image: orig.image,
        icon: orig.icon,
        category: orig.category,
      })
      expect(c).toMatchObject(en(orig))
    })
    // 原始中文数据没有被改动
    expect(cases.find((c) => c.id === 'c1')?.client).toBe('清华大学')
  })
})

describe('useLocalizedCases', () => {
  it('follows the current i18n locale', async () => {
    const i18n = createI18n({ legacy: false, locale: 'zh-CN', messages: { 'zh-CN': {}, en: {} } })
    let list!: ComputedRef<CaseItem[]>
    const app = createApp(
      defineComponent({
        setup() {
          list = useLocalizedCases()
          return () => h('div')
        },
      })
    )
    app.use(i18n).mount(document.createElement('div'))
    expect(list.value).toBe(cases)
    i18n.global.locale.value = 'en'
    await nextTick()
    expect(list.value[0].client).toBe(en(cases[0]).client)
    app.unmount()
  })
})
