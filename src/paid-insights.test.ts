import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, h, nextTick, type App } from 'vue'
import { createMemoryHistory, createRouter, RouterView, type Router } from 'vue-router'
import PaidInsightsSection from './sections/PaidInsightsSection.vue'
import PaidInsightPayView from './views/PaidInsightPayView.vue'
import { PAID_INSIGHT_CATEGORY, findPaidInsight, paidInsights } from './data/paidInsights'
import i18n from './i18n'

vi.mock('./composables/useScrollReveal', () => ({ useScrollReveal: vi.fn() }))
vi.mock('@iconify/vue', () => ({ Icon: { render: () => null } }))

const apps: App[] = []

function createTestRouter(): Router {
  return createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/', component: PaidInsightsSection },
      { path: '/paid-insight/:id', component: PaidInsightPayView },
      { path: '/contact', component: { render: () => null } },
    ],
  })
}

async function mountAt(path: string) {
  const router = createTestRouter()
  await router.push(path)
  await router.isReady()
  const container = document.createElement('div')
  document.body.append(container)
  const app = createApp({ render: () => h(RouterView) })
  app.use(i18n)
  app.use(router)
  app.mount(container)
  apps.push(app)
  await settle()
  return { container, router }
}

async function settle() {
  await nextTick()
  await nextTick()
}

function text(el: Element | null | undefined) {
  return el?.textContent?.replace(/\s+/g, ' ').trim() ?? ''
}

afterEach(() => {
  for (const app of apps.splice(0)) app.unmount()
  document.body.innerHTML = ''
})

describe('paid insight data', () => {
  it('exposes one category with 8-12 uniquely identified entries', () => {
    expect(PAID_INSIGHT_CATEGORY).toBe('企业 AI 落地实战技巧')
    expect(paidInsights.length).toBeGreaterThanOrEqual(8)
    expect(paidInsights.length).toBeLessThanOrEqual(12)
    expect(new Set(paidInsights.map((item) => item.id)).size).toBe(paidInsights.length)
    for (const item of paidInsights) {
      expect(item.id).toMatch(/^[a-z0-9-]+$/)
      expect(item.title.length).toBeGreaterThan(0)
      expect([2, 5, 9]).toContain(item.price)
      expect(item.date).toMatch(/^\d{4}-\d{2}-\d{2}$/)
    }
    expect(findPaidInsight(paidInsights[0]!.id)).toBe(paidInsights[0])
    expect(findPaidInsight('missing')).toBeUndefined()
  })
})

describe('home paid insights section', () => {
  it('lists every entry with a price prefix and a link to its pay page', async () => {
    const { container } = await mountAt('/')
    const section = container.querySelector('#paid-insights')!
    expect(section).not.toBeNull()
    expect(text(section.querySelector('h2'))).toBe('有偿资讯')
    expect(section.textContent).toContain('企业 AI 落地实战技巧 · 付费查看完整内容')
    const links = [...section.querySelectorAll<HTMLAnchorElement>('ol a')]
    expect(links).toHaveLength(paidInsights.length)
    links.forEach((link, index) => {
      const item = paidInsights[index]!
      expect(link.getAttribute('href')).toBe(`/paid-insight/${item.id}`)
      expect(text(link.querySelector('.paid-tag'))).toBe(`[付费${item.price}元查看完整内容]`)
      expect(text(link.querySelector('.paid-title'))).toBe(item.title)
      expect(link.querySelector('time')?.getAttribute('datetime')).toBe(item.date)
    })
  })

  it('navigates to the pay page and shows the QR code when a title is clicked', async () => {
    const { container, router } = await mountAt('/')
    const target = paidInsights[2]!
    const link = container.querySelector<HTMLAnchorElement>(`a[href="/paid-insight/${target.id}"]`)!
    link.click()
    await vi.waitFor(() => expect(router.currentRoute.value.path).toBe(`/paid-insight/${target.id}`))
    await settle()
    expect(text(container.querySelector('h1'))).toBe(target.title)
    expect(container.querySelector('img[alt="微信支付收款二维码"]')).not.toBeNull()
  })
})

describe('paid insight pay page', () => {
  it('shows the title, amount, switchable QR code and a confirmation state after paying', async () => {
    const target = paidInsights[1]!
    const { container } = await mountAt(`/paid-insight/${target.id}`)
    expect(container.textContent).toContain(PAID_INSIGHT_CATEGORY)
    expect(text(container.querySelector('h1'))).toBe(target.title)
    expect(container.textContent).toContain('完整内容需付费查看')
    expect(container.textContent).toContain('扫码付费，查看完整内容')
    expect(text(container.querySelector('[data-testid="amount"]'))).toBe(`¥${target.price}.00`)

    const tabs = [...container.querySelectorAll<HTMLButtonElement>('[role="tab"]')]
    expect(tabs.map((tab) => text(tab))).toEqual(['微信支付', '支付宝'])
    expect(tabs.map((tab) => tab.getAttribute('aria-selected'))).toEqual(['true', 'false'])
    const qr = () => container.querySelector<HTMLImageElement>('img[data-testid="pay-qr"]')
    expect(qr()?.getAttribute('alt')).toBe('微信支付收款二维码')

    tabs[1]!.click()
    await settle()
    expect(tabs.map((tab) => tab.getAttribute('aria-selected'))).toEqual(['false', 'true'])
    expect(qr()?.getAttribute('alt')).toBe('支付宝收款二维码')

    expect(container.querySelector('[role="status"]')).toBeNull()
    const confirm = [...container.querySelectorAll('button')].find((button) => text(button) === '我已完成支付')!
    expect(confirm).toBeDefined()
    confirm.click()
    await settle()
    const status = container.querySelector('[role="status"]')!
    expect(status).not.toBeNull()
    expect(status.textContent).toContain('已收到您的支付确认')
    expect(qr()).toBeNull()
    expect([...container.querySelectorAll('button')].some((button) => text(button) === '我已完成支付')).toBe(false)
    expect(container.querySelector('a[href="/#paid-insights"]')).not.toBeNull()
  })

  it('shows a not-found message for an unknown id', async () => {
    const { container } = await mountAt('/paid-insight/does-not-exist')
    expect(container.textContent).toContain('该资讯不存在或已下架')
    expect(container.querySelector('img[data-testid="pay-qr"]')).toBeNull()
    expect(container.querySelector('a[href="/#paid-insights"]')).not.toBeNull()
  })
})
