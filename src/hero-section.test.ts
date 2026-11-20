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

// 底部指示点（横幅里还有左右箭头和「上一张 / 下一张」按钮，按无障碍标签区分）
function dots(container: HTMLElement) {
  return [...container.querySelectorAll<HTMLButtonElement>('section button')].filter((b) =>
    b.getAttribute('aria-label')?.startsWith('切换到第'),
  )
}

function buttons(container: HTMLElement, label: string) {
  return [...container.querySelectorAll<HTMLButtonElement>(`section button[aria-label="${label}"]`)]
}

// 三张横幅：软积木、ChatU、智方体
const at = (current: number) => [0, 1, 2].map((i) => `translateX(calc(${(i - current) * 100}% + 0px))`)
const FIRST = at(0)
const SECOND = at(1)
const THIRD = at(2)

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
    const dotButtons = dots(container)
    expect(dotButtons).toHaveLength(3)
    expect(slideTransforms(container)).toEqual(FIRST)

    // 真实浏览器里，容器捕获指针后 click 会派发给容器而不是圆点按钮（happy-dom 不模拟这一点），
    // 所以这里直接断言按下圆点时没有调用 setPointerCapture。
    pointer('pointerdown', dotButtons[1]!)
    pointer('pointerup', dotButtons[1]!)
    dotButtons[1]!.click()
    await nextTick()

    expect(capture).not.toHaveBeenCalled()
    expect(slideTransforms(container)).toEqual(SECOND)
    expect(dotButtons[1]!.getAttribute('aria-current')).toBe('true')
  })

  it('在横幅上按下仍会捕获指针，保证拖动切换可用', () => {
    const capture = vi.spyOn(HTMLElement.prototype, 'setPointerCapture').mockImplementation(() => {})
    const container = render()

    pointer('pointerdown', slides(container)[0]!)

    expect(capture).toHaveBeenCalledWith(1)
  })

  it('点第三个圆点切到智方体横幅', async () => {
    const container = render()
    dots(container)[2]!.click()
    await nextTick()
    expect(slideTransforms(container)).toEqual(THIRD)
  })

  it('左右箭头和底部「上一张 / 下一张」按钮都能切换，首尾循环，按下时不捕获指针', async () => {
    vi.useFakeTimers()
    const capture = vi.spyOn(HTMLElement.prototype, 'setPointerCapture').mockImplementation(() => {})
    const container = render()
    const prev = buttons(container, '上一张')
    const next = buttons(container, '下一张')
    // 两侧大箭头 + 底部控制条各一个
    expect(prev).toHaveLength(2)
    expect(next).toHaveLength(2)

    for (const [btn, expected] of [
      [next[0], SECOND],
      [next[1], THIRD],
      [next[0], FIRST],
      [prev[0], THIRD],
      [prev[1], SECOND],
      [prev[1], FIRST],
    ] as const) {
      pointer('pointerdown', btn!)
      pointer('pointerup', btn!)
      btn!.click()
      await nextTick()
      expect(slideTransforms(container)).toEqual(expected)
    }
    expect(capture).not.toHaveBeenCalled()
  })

  it('焦点在横幅内时按左右方向键切换', async () => {
    const container = render()
    const next = buttons(container, '下一张')[1]!
    next.focus()

    next.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }))
    await nextTick()
    expect(slideTransforms(container)).toEqual(SECOND)

    next.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true }))
    await nextTick()
    expect(slideTransforms(container)).toEqual(FIRST)
  })
})
