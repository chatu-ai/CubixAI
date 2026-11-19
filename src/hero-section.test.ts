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

// section > 横幅容器（绑定 pointer 事件）> 幻灯片轨道 > 每张幻灯片
function slides(container: HTMLElement) {
  return [...container.querySelector('section > div > div')!.children] as HTMLElement[]
}

function slideTransforms(container: HTMLElement) {
  return slides(container).map((el) => el.style.transform)
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

describe('首页横幅底部圆点', () => {
  it('点击圆点切换到对应横幅，且按下圆点时不捕获指针', async () => {
    vi.useFakeTimers()
    const capture = vi.spyOn(HTMLElement.prototype, 'setPointerCapture').mockImplementation(() => {})
    const container = render()
    const dots = [...container.querySelectorAll<HTMLButtonElement>('section button[aria-label]')]
    expect(dots).toHaveLength(2)
    expect(slideTransforms(container)).toEqual(['translateX(calc(0% + 0px))', 'translateX(calc(100% + 0px))'])

    // 真实浏览器里，容器捕获指针后 click 会派发给容器而不是圆点按钮（happy-dom 不模拟这一点），
    // 所以这里直接断言按下圆点时没有调用 setPointerCapture。
    pointer('pointerdown', dots[1]!)
    pointer('pointerup', dots[1]!)
    dots[1]!.click()
    await nextTick()

    expect(capture).not.toHaveBeenCalled()
    expect(slideTransforms(container)).toEqual(['translateX(calc(-100% + 0px))', 'translateX(calc(0% + 0px))'])
  })

  it('在横幅上按下仍会捕获指针，保证拖动切换可用', () => {
    const capture = vi.spyOn(HTMLElement.prototype, 'setPointerCapture').mockImplementation(() => {})
    const container = render()

    pointer('pointerdown', slides(container)[0]!)

    expect(capture).toHaveBeenCalledWith(1)
  })
})
