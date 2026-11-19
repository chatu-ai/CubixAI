<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import bgUrl from '@/assets/hero/hero-bg.webp'
import cubeUrl from '@/assets/hero/hero-cube.webp'
import shadowUrl from '@/assets/hero/hero-shadow.webp'
import iconsUrl from '@/assets/hero/hero-icons.webp'
import textZhUrl from '@/assets/hero/hero-text-zh.webp'
import textEnUrl from '@/assets/hero/hero-text-en.webp'

/**
 * 首页第一张横幅的分层动画版。
 * 原横幅图被拆成背景、立方体、文字、图标几层（静止时叠起来和原图一致），各层分别做入场、悬浮和鼠标视差动画。
 * 所有坐标都是原图像素（3392 × 1120），按百分比摆放，任何屏幕宽度下都和原图对齐。
 */
const props = defineProps<{
  lang: 'zh' | 'en'
  /** 当前是否正显示这一张：变为 true 时重新播放入场动画 */
  active: boolean
  alt: string
}>()

const W = 3392
const H = 1120
type Box = [number, number, number, number]

const box = ([x0, y0, x1, y1]: Box) => ({
  left: `${(x0 / W) * 100}%`,
  top: `${(y0 / H) * 100}%`,
  width: `${((x1 - x0) / W) * 100}%`,
  height: `${((y1 - y0) / H) * 100}%`,
})
/** 只显示图层中的一块区域（用于让标题、副标题、每个图标分别入场） */
const clip = ([x0, y0, x1, y1]: Box, [cx0, cy0, cx1, cy1]: Box) => {
  const w = x1 - x0
  const h = y1 - y0
  return `inset(${((cy0 - y0) / h) * 100}% ${((x1 - cx1) / w) * 100}% ${((y1 - cy1) / h) * 100}% ${((cx0 - x0) / w) * 100}%)`
}

const CUBE: Box = [2219, 84, 3052, 1047]
const SHADOW: Box = [2195, 60, 3076, 1071]
const TEXT: Box = [150, 180, 1960, 945]
const ICONS: Box = [195, 630, 1835, 930]
// 四个图标所在的列（分隔线归右侧一列）
const COLUMNS: [number, number][] = [[150, 553], [553, 1031], [1031, 1484], [1484, 1960]]
const BANDS = {
  zh: { title: [285, 416], sub: [478, 551], labels: [865, 924] },
  en: { title: [194, 485], sub: [521, 583], labels: [874, 922] },
} as const
const DOTS: [number, number][] = [
  [2135, 860], [2163, 497], [2229, 187], [2305, 1026], [2794, 142], [3145, 995], [3216, 235], [3280, 558],
]
// 立方体底座外圈光环的位置
const RING = { cx: 2650, cy: 922, rx: 525, ry: 114 }

const textUrl = computed(() => (props.lang === 'zh' ? textZhUrl : textEnUrl))
const bands = computed(() => BANDS[props.lang])

const textPieces = computed(() => {
  const b = bands.value
  const pieces = [
    { key: 'title', clip: clip(TEXT, [TEXT[0], b.title[0], TEXT[2], b.title[1]]), delay: 0.1 },
    { key: 'sub', clip: clip(TEXT, [TEXT[0], b.sub[0], TEXT[2], b.sub[1]]), delay: 0.3 },
  ]
  COLUMNS.forEach(([x0, x1], i) => {
    pieces.push({ key: `label${i}`, clip: clip(TEXT, [x0, b.labels[0], x1, b.labels[1]]), delay: 0.62 + i * 0.1 })
  })
  return pieces
})
const iconPieces = COLUMNS.map(([x0, x1], i) => ({
  key: `icon${i}`,
  clip: clip(ICONS, [Math.max(x0, ICONS[0]), ICONS[1], Math.min(x1, ICONS[2]), ICONS[3]]),
  delay: 0.5 + i * 0.1,
}))

const ringStyle = {
  left: `${((RING.cx - RING.rx) / W) * 100}%`,
  top: `${((RING.cy - RING.ry) / H) * 100}%`,
  width: `${((RING.rx * 2) / W) * 100}%`,
  height: `${((RING.ry * 2) / H) * 100}%`,
}
const dotStyle = ([x, y]: [number, number], i: number) => ({
  left: `${(x / W) * 100}%`,
  top: `${(y / H) * 100}%`,
  animationDelay: `${0.6 + i * 0.08}s, ${1.4 + ((i * 0.7) % 3)}s`,
  animationDuration: `0.6s, ${3.2 + (i % 4) * 0.6}s`,
})

// ---- 鼠标视差：鼠标在横幅上移动时，立方体、光点、文字按不同深度轻微位移 ----
const root = ref<HTMLElement | null>(null)
let rafId = 0
let target = { x: 0, y: 0 }
let currentPos = { x: 0, y: 0 }
const parallaxEnabled =
  typeof window !== 'undefined' &&
  window.matchMedia?.('(hover: hover) and (pointer: fine)').matches &&
  !window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

function tick() {
  currentPos.x += (target.x - currentPos.x) * 0.08
  currentPos.y += (target.y - currentPos.y) * 0.08
  root.value?.style.setProperty('--mx', currentPos.x.toFixed(3))
  root.value?.style.setProperty('--my', currentPos.y.toFixed(3))
  if (Math.abs(target.x - currentPos.x) > 0.001 || Math.abs(target.y - currentPos.y) > 0.001) {
    rafId = requestAnimationFrame(tick)
  } else {
    rafId = 0
  }
}
function onPointerMove(e: PointerEvent) {
  if (!parallaxEnabled || !root.value || e.pointerType !== 'mouse') return
  const r = root.value.getBoundingClientRect()
  target = { x: ((e.clientX - r.left) / r.width) * 2 - 1, y: ((e.clientY - r.top) / r.height) * 2 - 1 }
  if (!rafId) rafId = requestAnimationFrame(tick)
}
function onPointerLeave() {
  target = { x: 0, y: 0 }
  if (!rafId) rafId = requestAnimationFrame(tick)
}

// 第一次显示时等图片解码完再开始入场，避免动画播到一半图片才出现
const ready = ref(false)
onMounted(async () => {
  const urls = [bgUrl, cubeUrl, shadowUrl, iconsUrl, textUrl.value]
  await Promise.all(
    urls.map((src) => {
      const img = new Image()
      img.src = src
      return img.decode().catch(() => undefined)
    }),
  )
  ready.value = true
})
onUnmounted(() => cancelAnimationFrame(rafId))
</script>

<template>
  <div
    ref="root"
    class="hero-art absolute inset-y-0 left-0 h-full aspect-[3392/1120]"
    :class="{ 'is-playing': ready && active }"
    role="img"
    :aria-label="alt"
    @pointermove="onPointerMove"
    @pointerleave="onPointerLeave"
  >
    <img :src="bgUrl" alt="" aria-hidden="true" class="absolute inset-0 w-full h-full" draggable="false" fetchpriority="high" />

    <!-- 底座光环：两道波纹从底座向外扩散 -->
    <div class="ring-layer absolute inset-0" aria-hidden="true">
      <span class="ripple" :style="ringStyle" />
      <span class="ripple ripple-2" :style="ringStyle" />
    </div>

    <!-- 立方体投影：立方体浮起时变淡、略收小 -->
    <div class="cube-shadow absolute" :style="box(SHADOW)" aria-hidden="true">
      <img :src="shadowUrl" alt="" class="cube-shadow-img w-full h-full" draggable="false" />
    </div>

    <!-- 立方体：入场上浮、持续悬浮、扫光 -->
    <div class="cube absolute" :style="box(CUBE)" aria-hidden="true">
      <div class="cube-parallax w-full h-full">
        <div class="cube-float w-full h-full">
          <img :src="cubeUrl" alt="" class="w-full h-full" draggable="false" />
          <span class="cube-shine" :style="{ maskImage: `url(${cubeUrl})`, WebkitMaskImage: `url(${cubeUrl})` }" />
        </div>
      </div>
    </div>

    <!-- 环绕光点：依次亮起后轻轻浮动 -->
    <div class="dots-layer absolute inset-0" aria-hidden="true">
      <span v-for="(d, i) in DOTS" :key="i" class="dot" :style="dotStyle(d, i)" />
    </div>

    <!-- 图标与文字：标题、副标题、四个图标依次入场 -->
    <div class="copy-layer absolute inset-0" aria-hidden="true">
      <img
        v-for="p in iconPieces"
        :key="p.key"
        :src="iconsUrl"
        alt=""
        class="piece piece-icon absolute"
        :style="{ ...box(ICONS), clipPath: p.clip, animationDelay: `${p.delay}s` }"
        draggable="false"
      />
      <img
        v-for="p in textPieces"
        :key="`${lang}-${p.key}`"
        :src="textUrl"
        alt=""
        class="piece piece-text absolute"
        :style="{ ...box(TEXT), clipPath: p.clip, animationDelay: `${p.delay}s` }"
        draggable="false"
      />
    </div>
  </div>
</template>

<style scoped>
.hero-art {
  --mx: 0;
  --my: 0;
}

/* ---------- 入场：未播放时各层保持原位（静止画面与原图一致），播放时从起始状态动画到原位 ---------- */
.is-playing .piece-text {
  animation: hero-rise 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.is-playing .piece-icon {
  animation: hero-pop 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}
.is-playing .cube {
  animation: hero-cube-in 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.15s both;
}
.is-playing .dot {
  animation-name: hero-dot-in, hero-dot-float;
  animation-timing-function: ease-out, ease-in-out;
  animation-iteration-count: 1, infinite;
  animation-direction: normal, alternate;
  animation-fill-mode: both, none;
}

@keyframes hero-rise {
  from {
    opacity: 0;
    transform: translateY(28px);
    filter: blur(6px);
  }
  to {
    opacity: 1;
    transform: none;
    filter: none;
  }
}
@keyframes hero-pop {
  from {
    opacity: 0;
    transform: translateY(18px) scale(0.92);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes hero-cube-in {
  from {
    opacity: 0;
    transform: translateY(5%) scale(0.94);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

/* ---------- 立方体：持续缓慢悬浮 + 鼠标视差 + 周期性扫光 ---------- */
.cube-parallax {
  transform: translate3d(calc(var(--mx) * -12px), calc(var(--my) * -8px), 0);
}
.is-playing .cube-float {
  animation: hero-float 6s ease-in-out 1.4s infinite;
}
@keyframes hero-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-1.8%);
  }
}
.cube-shine {
  position: absolute;
  inset: 0;
  pointer-events: none;
  mask-size: 100% 100%;
  -webkit-mask-size: 100% 100%;
  background: linear-gradient(105deg, transparent 38%, rgba(255, 255, 255, 0.55) 48%, rgba(255, 255, 255, 0) 58%);
  background-size: 250% 100%;
  background-position: 150% 0;
  mix-blend-mode: soft-light;
  opacity: 0;
}
.is-playing .cube-shine {
  animation: hero-shine 5s ease-in-out 1.6s infinite;
}
@keyframes hero-shine {
  0% {
    background-position: 150% 0;
    opacity: 1;
  }
  35%,
  100% {
    background-position: -50% 0;
    opacity: 1;
  }
}

/* ---------- 投影随悬浮同步变化 ---------- */
.is-playing .cube-shadow {
  animation: hero-fade-in 1.2s ease-out 0.15s both;
}
.cube-shadow-img {
  transform-origin: 50% 92%;
  transform: translate3d(calc(var(--mx) * -6px), calc(var(--my) * -4px), 0);
}
.is-playing .cube-shadow-img {
  animation: hero-shadow 6s ease-in-out 1.4s infinite;
}
@keyframes hero-fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes hero-shadow {
  0%,
  100% {
    opacity: 1;
    scale: 1;
  }
  50% {
    opacity: 0.55;
    scale: 0.97;
  }
}

/* ---------- 底座波纹 ---------- */
.ring-layer {
  transform: translate3d(calc(var(--mx) * -6px), calc(var(--my) * -4px), 0);
}
.ripple {
  position: absolute;
  border-radius: 50%;
  border: 2px solid rgba(85, 173, 115, 0.55);
  box-shadow: 0 0 18px rgba(85, 173, 115, 0.35);
  opacity: 0;
}
.is-playing .ripple {
  animation: hero-ripple 4.8s cubic-bezier(0.2, 0.6, 0.3, 1) 1.2s infinite;
}
.is-playing .ripple-2 {
  animation-delay: 3.6s;
}
@keyframes hero-ripple {
  0% {
    transform: scale(0.82);
    opacity: 0;
  }
  15% {
    opacity: 0.9;
  }
  100% {
    transform: scale(1.45);
    opacity: 0;
  }
}

/* ---------- 光点 ---------- */
.dots-layer {
  transform: translate3d(calc(var(--mx) * -20px), calc(var(--my) * -14px), 0);
}
.dot {
  position: absolute;
  width: 0.77%;
  aspect-ratio: 1;
  /* 以光点中心定位（百分比外边距按宽度计算，对正方形刚好居中） */
  margin-left: -0.385%;
  margin-top: -0.385%;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #a5f0ae 0%, #34c153 38%, #1d9a3a 72%, #137a2c 100%);
  box-shadow: 0 0 0 0 rgba(52, 193, 83, 0.35);
}
@keyframes hero-dot-in {
  from {
    opacity: 0;
    transform: scale(0.2);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes hero-dot-float {
  from {
    transform: translateY(0);
    box-shadow: 0 0 0 0 rgba(52, 193, 83, 0.35);
  }
  to {
    transform: translateY(-7px);
    box-shadow: 0 0 10px 3px rgba(52, 193, 83, 0.35);
  }
}

/* ---------- 文字层随鼠标反向轻移，增加纵深感 ---------- */
.copy-layer {
  transform: translate3d(calc(var(--mx) * 5px), calc(var(--my) * 3px), 0);
}

.cube-parallax,
.ring-layer,
.dots-layer,
.copy-layer {
  will-change: transform;
}
</style>
