import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, nextTick, type App } from 'vue'
import HeroSection from './components/HeroSection.vue'
import i18n from './i18n'

const apps: App[] = []

function render() {
  const container = document.createElement('div')
  document.body.append(container)
  const app = createApp(HeroSection)
  app.use(i18n)
  app.mount(container)
  apps.push(app)
  return container
}

function slideTransforms(container: HTMLElement) {
  return [...container.querySelectorAll<HTMLElement>('[style*="translateX"]')].map((el) => el.style.transform)
}

function pointer(type: string, target: Element) {
  target.dispatchEvent(new PointerEvent(type, { bubbles: true, pointerId: 1, clientX: 100, buttons: type === 'pointerdown' ? 1 : 0 }))
}

afterEach(() => {
  for (const app of apps.splice(0)) app.unmount()
  document.body.innerHTML = ''
  vi.restoreAllMocks()
  vi.useRealTimers()
})

describe('hero carousel indicators', () => {
  it('switches slides when a dot is clicked without capturing the pointer', async () => {
    vi.useFakeTimers()
    const capture = vi.spyOn(HTMLElement.prototype, 'setPointerCapture').mockImplementation(() => {})
    const container = render()
    const dots = [...container.querySelectorAll<HTMLButtonElement>('section button[aria-label]')]
    expect(dots).toHaveLength(2)
    expect(slideTransforms(container)[0]).toBe('translateX(calc(0% + 0px))')

    // Pointer capture on the banner would retarget the click away from the dot in real browsers.
    pointer('pointerdown', dots[1]!)
    pointer('pointerup', dots[1]!)
    dots[1]!.click()
    await nextTick()

    expect(capture).not.toHaveBeenCalled()
    expect(slideTransforms(container)).toEqual(['translateX(calc(-100% + 0px))', 'translateX(calc(0% + 0px))'])
  })

  it('still captures the pointer for dragging when pressing on a slide', () => {
    const capture = vi.spyOn(HTMLElement.prototype, 'setPointerCapture').mockImplementation(() => {})
    const container = render()
    const slide = container.querySelector('[style*="translateX"]')!

    pointer('pointerdown', slide)

    expect(capture).toHaveBeenCalledWith(1)
  })
})
