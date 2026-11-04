import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, h, nextTick, reactive, type App, type Component } from 'vue'
import { createMemoryHistory, createRouter, type Router } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppImage from './components/AppImage.vue'
import EnterpriseModal from './components/EnterpriseModal.vue'
import AgentHardwareSpec from './sections/agent/AgentHardwareSpec.vue'
import AgentScenarios from './sections/agent/AgentScenarios.vue'
import AgentHighlights from './sections/agent/AgentHighlights.vue'
import AgentModes from './sections/agent/AgentModes.vue'
import ChatuTrust from './sections/chatu/ChatuTrust.vue'
import i18n from './i18n'

vi.mock('./composables/useScrollReveal', () => ({ useScrollReveal: vi.fn() }))
vi.mock('@iconify/vue', () => ({ Icon: { render: () => null } }))

const apps: App[] = []

function render(component: Component, initialProps: Record<string, unknown> = {}, router?: Router) {
  const container = document.createElement('div')
  document.body.append(container)
  const props = reactive({ ...initialProps })
  const app = createApp({ render: () => h(component, props) })
  app.use(i18n)
  if (router) app.use(router)
  app.mount(container)
  apps.push(app)
  return { container, props }
}

async function settle() {
  await nextTick()
  await nextTick()
}

afterEach(() => {
  for (const app of apps.splice(0)) app.unmount()
  document.body.innerHTML = ''
  document.body.style.overflow = ''
  vi.useRealTimers()
})

describe('hardware gallery', () => {
  it('highlights only the selected thumbnail and clears selection after reset', async () => {
    vi.useFakeTimers()
    const { container } = render(AgentHardwareSpec)
    const buttons = [...container.querySelectorAll<HTMLButtonElement>('button[aria-pressed]')]
    expect(buttons).toHaveLength(3)
    expect(buttons.every((button) => button.getAttribute('aria-pressed') === 'false')).toBe(true)
    buttons[0]!.click()
    await settle()
    expect(buttons.map((button) => button.getAttribute('aria-pressed'))).toEqual(['true', 'false', 'false'])
    buttons[2]!.click()
    await settle()
    expect(buttons.map((button) => button.getAttribute('aria-pressed'))).toEqual(['false', 'false', 'true'])
    await vi.advanceTimersByTimeAsync(3000)
    expect(buttons.every((button) => button.getAttribute('aria-pressed') === 'false')).toBe(true)
    expect(document.head.querySelector('link[rel="preload"][as="image"]')).toBeNull()
  })
})

describe('image loading', () => {
  it('keeps ordinary images lazy and decodes priority images asynchronously', async () => {
    const { container, props } = render(AppImage, { src: '/hero.webp' })
    const image = container.querySelector('img')!
    expect(image.getAttribute('loading')).toBe('lazy')
    expect(image.getAttribute('decoding')).toBe('async')
    expect(image.hasAttribute('fetchpriority')).toBe(false)
    props.priority = true
    await settle()
    expect(image.getAttribute('loading')).toBe('eager')
    expect(image.getAttribute('decoding')).toBe('async')
    expect(image.getAttribute('fetchpriority')).toBe('high')
    expect(document.head.querySelector('link[rel="preload"]')?.getAttribute('href')).toBe('/hero.webp')
  })

  it.each([
    ['scenarios', AgentScenarios],
    ['highlights', AgentHighlights],
    ['interaction modes', AgentModes],
  ])('lazy-loads below-fold %s images', (_name, component) => {
    const { container } = render(component)
    const images = [...container.querySelectorAll('img')]
    expect(images.length).toBeGreaterThan(0)
    expect(images.every((image) => image.getAttribute('loading') === 'lazy')).toBe(true)
  })

  it('uses certificate previews and links to unchanged originals', () => {
    const { container } = render(ChatuTrust)
    const links = [...container.querySelectorAll<HTMLAnchorElement>('a[target="_blank"]:not([tabindex="-1"])')]
    expect(links).toHaveLength(6)
    for (const link of links) {
      expect(link.getAttribute('href')).toContain('/zz/')
      expect(link.getAttribute('href')).not.toContain('/previews/')
      expect(link.querySelector('img')?.getAttribute('src')).toContain('/zz/previews/')
      expect(link.querySelector('img')?.getAttribute('loading')).toBe('lazy')
      expect(link.rel).toBe('noopener noreferrer')
    }
  })
})

describe('contact language navigation', () => {
  async function headerAt(path: string) {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: ['/', '/products/agentstation', '/contact', '/en/contact', '/hg/contact', '/jp/contact']
        .map((route) => ({ path: route, component: { render: () => null } })),
    })
    await router.push(path)
    await router.isReady()
    const { container } = render(AppHeader, {}, router)
    return { container, router }
  }

  it('does not expose contact-only language controls on product pages', async () => {
    const { container, router } = await headerAt('/products/agentstation')
    expect([...container.querySelectorAll('button')].some((button) => button.textContent?.trim() === 'English')).toBe(false)
    expect(router.currentRoute.value.path).toBe('/products/agentstation')
  })

  it.each([0, 1])('preserves localized contact navigation in language control %i', async (index) => {
    const { container, router } = await headerAt('/contact')
    const buttons = [...container.querySelectorAll<HTMLButtonElement>('button')]
      .filter((button) => button.textContent?.trim() === 'English')
    expect(buttons).toHaveLength(2)
    buttons[index]!.click()
    await vi.waitFor(() => expect(router.currentRoute.value.path).toBe('/en/contact'))
  })
})

describe('enterprise modal accessibility', () => {
  async function openModal() {
    const trigger = document.createElement('button')
    document.body.append(trigger)
    trigger.focus()
    document.body.style.overflow = 'scroll'
    const result = render(EnterpriseModal, { modelValue: false })
    result.props['onUpdate:modelValue'] = (value: boolean) => { result.props.modelValue = value }
    result.props.modelValue = true
    await settle()
    return { ...result, trigger, dialog: document.querySelector<HTMLElement>('[role="dialog"]')! }
  }

  it('labels the dialog, traps focus, locks scrolling and restores focus on Escape', async () => {
    const { trigger, dialog } = await openModal()
    const closeButton = dialog.querySelector<HTMLButtonElement>('button')!
    expect(dialog.getAttribute('aria-modal')).toBe('true')
    expect(document.getElementById(dialog.getAttribute('aria-labelledby')!)?.textContent).toBe('联系我们')
    expect(document.activeElement).toBe(closeButton)
    expect(document.body.style.overflow).toBe('hidden')
    for (const shiftKey of [true, false]) {
      const event = new KeyboardEvent('keydown', { key: 'Tab', shiftKey, bubbles: true, cancelable: true })
      closeButton.dispatchEvent(event)
      expect(event.defaultPrevented).toBe(true)
      expect(document.activeElement).toBe(closeButton)
    }
    trigger.focus()
    expect(document.activeElement).toBe(closeButton)
    closeButton.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))
    await settle()
    expect(document.body.style.overflow).toBe('scroll')
    expect(document.activeElement).toBe(trigger)
  })

  it('supports the visible close button', async () => {
    const { dialog, props, trigger } = await openModal()
    dialog.querySelector<HTMLButtonElement>('button')!.click()
    await settle()
    expect(props.modelValue).toBe(false)
    expect(document.activeElement).toBe(trigger)
  })

  it('restores body scrolling and focus when unmounted while open', async () => {
    const { trigger } = await openModal()
    apps.pop()!.unmount()
    expect(document.body.style.overflow).toBe('scroll')
    expect(document.activeElement).toBe(trigger)
  })
})
