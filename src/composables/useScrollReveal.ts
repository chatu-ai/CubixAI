import { onMounted, onUnmounted, type Ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// 图片加载完成后页面高度会变化，重新计算一次触发位置，避免区块该出现时没有出现
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true })
}

export interface ScrollRevealOptions {
  y?: number
  x?: number
  opacity?: number
  duration?: number
  delay?: number
  ease?: string
  start?: string
  /** 网格/列表容器：子元素依次出现。默认自动识别（grid 或换行 flex 且有多个子元素） */
  stagger?: boolean | number
}

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
}

/** 网格、换行的卡片列表：逐个出现比整块出现更有层次 */
function isCollection(el: HTMLElement) {
  if (el.children.length < 2) return false
  const style = getComputedStyle(el)
  return style.display.includes('grid') || (style.display.includes('flex') && style.flexWrap === 'wrap')
}

export function useScrollReveal(
  elRef: Ref<HTMLElement | null>,
  options: ScrollRevealOptions = {}
) {
  const {
    y = 24,
    x = 0,
    opacity = 0,
    duration = 0.7,
    delay = 0,
    ease = 'power3.out',
    start = 'top 88%',
    stagger,
  } = options

  let trigger: ScrollTrigger | null = null

  onMounted(() => {
    const el = elRef.value
    if (!el || prefersReducedMotion()) return

    const staggerEach = stagger === false ? 0 : typeof stagger === 'number' ? stagger : isCollection(el) ? 0.07 : 0
    const targets = staggerEach ? Array.from(el.children) : [el]
    // 单个块（多为标题区）带一点模糊转清晰；卡片逐个出现时只做位移和淡入，保持清爽
    const from = staggerEach
      ? { y, x, opacity, scale: 0.98 }
      : { y, x, opacity, filter: 'blur(6px)' }
    const to = staggerEach
      ? { y: 0, x: 0, opacity: 1, scale: 1 }
      : { y: 0, x: 0, opacity: 1, filter: 'blur(0px)' }

    gsap.set(targets, from)

    const reveal = () =>
      gsap.to(targets, {
        ...to,
        duration,
        delay,
        ease,
        stagger: staggerEach,
        clearProps: 'transform,filter',
      })

    trigger = ScrollTrigger.create({
      trigger: el,
      start,
      once: true,
      onEnter: reveal,
    })
  })

  onUnmounted(() => {
    trigger?.kill()
  })
}
