<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import bgUrl from '@/assets/hero/hero-bg.webp'
import cubeUrl from '@/assets/hero/hero-cube.webp'
import shadowUrl from '@/assets/hero/hero-shadow.webp'
import iconsUrl from '@/assets/hero/hero-icons.webp'
import textZhUrl from '@/assets/hero/hero-text-zh.webp'
import textEnUrl from '@/assets/hero/hero-text-en.webp'
import trayUrl from '@/assets/hero/cube/tray.webp'
import b1Url from '@/assets/hero/cube/b1.webp'
import b2Url from '@/assets/hero/cube/b2.webp'
import b3Url from '@/assets/hero/cube/b3.webp'
import b4Url from '@/assets/hero/cube/b4.webp'
import b5Url from '@/assets/hero/cube/b5.webp'
import b6Url from '@/assets/hero/cube/b6.webp'
import b7Url from '@/assets/hero/cube/b7.webp'
import b8Url from '@/assets/hero/cube/b8.webp'
import lidUrl from '@/assets/hero/cube/lid.webp'

/**
 * 首页第一张横幅的分层动画版。
 * 原横幅图被拆成背景、立方体、文字、图标几层（静止时叠起来和原图一致），各层分别做入场、悬浮和鼠标视差动画。
 * 所有坐标都是原图像素（3392 × 1120），按百分比摆放，任何屏幕宽度下都和原图对齐。
 *
 * 立方体入场是「搭积木」：先弹出空的底座，8 块积木从上方由下往上依次砸进槽里（落地压扁、回弹、底座震一下），
 * 最后顶盖重重砸下：整个立方体一沉、闪白、底座冲击波、画面震动，8 个光点从立方体中心炸开飞到原位。
 * 底座和积木由 hero-cube.webp 拆出（src/assets/hero/cube/），叠起来与原立方体一致，所以动画结束的画面与原图相同。
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

// ---- 搭积木：积木在立方体图层（833 × 963）内的位置，按落下顺序排列（先底层后上层，顶盖最后） ----
const CW = 833
const CH = 963
const BLOCK_START = 0.35 // 第一块积木开始落下的时间（秒）
const BLOCK_GAP = 0.09 // 相邻两块积木的间隔
const BLOCKS: { src: string; box: Box; rot: number; from: number }[] = [
  { src: b1Url, box: [78, 388, 408, 848], rot: -5, from: 130 },
  { src: b2Url, box: [419, 612, 642, 854], rot: 4, from: 120 },
  { src: b3Url, box: [657, 552, 748, 716], rot: 7, from: 125 },
  { src: b4Url, box: [417, 325, 647, 718], rot: -4, from: 135 },
  { src: b5Url, box: [654, 408, 752, 577], rot: 6, from: 120 },
  { src: b6Url, box: [182, 311, 414, 557], rot: -6, from: 130 },
  { src: b7Url, box: [78, 263, 171, 418], rot: -7, from: 125 },
  { src: b8Url, box: [656, 270, 754, 437], rot: 5, from: 120 },
]
const LID: Box = [92, 81, 743, 454]
const cubeBox = ([x0, y0, x1, y1]: Box) => ({
  left: `${(x0 / CW) * 100}%`,
  top: `${(y0 / CH) * 100}%`,
  width: `${((x1 - x0) / CW) * 100}%`,
  height: `${((y1 - y0) / CH) * 100}%`,
})
const blocks = BLOCKS.map((b, i) => ({
  ...b,
  img: cubeBox(b.box),
  wrap: {
    // 旋转以积木自身中心为轴
    transformOrigin: `${((b.box[0] + b.box[2]) / 2 / CW) * 100}% ${((b.box[1] + b.box[3]) / 2 / CH) * 100}%`,
    '--from': `-${b.from}%`,
    '--rot': `${b.rot}deg`,
    animationDelay: `${BLOCK_START + i * BLOCK_GAP}s`,
  },
  imgDelay: `${BLOCK_START + i * BLOCK_GAP}s`,
}))
const lidImg = cubeBox(LID)

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
// 光点在顶盖砸下时从立方体中心炸开：起点相对光点自身的偏移（光点直径 = 原图宽的 0.77%）
const DOT_SIZE = W * 0.0077
const BURST_FROM = { x: CUBE[0] + CW / 2, y: CUBE[1] + CH * 0.45 }
const dotStyle = ([x, y]: [number, number], i: number) => ({
  left: `${(x / W) * 100}%`,
  top: `${(y / H) * 100}%`,
  '--fx': `${((BURST_FROM.x - x) / DOT_SIZE) * 100}%`,
  '--fy': `${((BURST_FROM.y - y) / DOT_SIZE) * 100}%`,
  animationDelay: `${1.55 + i * 0.025}s, ${2.45 + ((i * 0.7) % 3)}s`,
  animationDuration: `0.85s, ${3.2 + (i % 4) * 0.6}s`,
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
  const urls = [bgUrl, cubeUrl, shadowUrl, iconsUrl, textUrl.value, trayUrl, lidUrl, ...BLOCKS.map((b) => b.src)]
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
    :class="{ 'is-playing': ready && active, 'is-waiting': !ready && active }"
    role="img"
    :aria-label="alt"
    @pointermove="onPointerMove"
    @pointerleave="onPointerLeave"
  >
    <!-- 顶盖砸下时整幅画面轻微震动 -->
    <div class="quake absolute inset-0">
      <img :src="bgUrl" alt="" aria-hidden="true" class="absolute inset-0 w-full h-full" draggable="false" fetchpriority="high" />

      <!-- 底座光环：顶盖砸下时一圈冲击波，之后两道波纹从底座向外扩散 -->
      <div class="ring-layer absolute inset-0" aria-hidden="true">
        <span class="shock-fill" :style="ringStyle" />
        <span class="shock" :style="ringStyle" />
        <span class="shock shock-2" :style="ringStyle" />
        <span class="ripple" :style="ringStyle" />
        <span class="ripple ripple-2" :style="ringStyle" />
      </div>

      <!-- 立方体投影：立方体浮起时变淡、略收小 -->
      <div class="cube-shadow absolute" :style="box(SHADOW)" aria-hidden="true">
        <img :src="shadowUrl" alt="" class="cube-shadow-img w-full h-full" draggable="false" />
      </div>

      <!-- 立方体：空底座弹出 → 积木依次砸入 → 顶盖砸下；之后持续悬浮、扫光 -->
      <div class="cube absolute" :style="box(CUBE)" aria-hidden="true">
        <div class="cube-parallax w-full h-full">
          <div class="cube-float w-full h-full">
            <div class="cube-jolt absolute inset-0">
              <img :src="trayUrl" alt="" class="tray absolute inset-0 w-full h-full" draggable="false" />
              <div v-for="(b, i) in blocks" :key="i" class="blk absolute inset-0" :style="b.wrap">
                <img :src="b.src" alt="" class="blk-img absolute" :style="{ ...b.img, animationDelay: b.imgDelay }" draggable="false" />
              </div>
              <div class="blk blk-lid absolute inset-0">
                <img :src="lidUrl" alt="" class="blk-img absolute" :style="lidImg" draggable="false" />
              </div>
              <span class="cube-shine" :style="{ maskImage: `url(${cubeUrl})`, WebkitMaskImage: `url(${cubeUrl})` }" />
              <span class="cube-flash" :style="{ maskImage: `url(${cubeUrl})`, WebkitMaskImage: `url(${cubeUrl})` }" />
            </div>
          </div>
        </div>
      </div>

      <!-- 环绕光点：顶盖砸下时从立方体中心炸开，之后轻轻浮动 -->
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
  </div>
</template>

<style scoped>
.hero-art {
  --mx: 0;
  --my: 0;
}

/* ---------- 入场：未播放时各层保持原位（静止画面与原图一致），播放时从起始状态动画到原位 ---------- */
/* 图片还在加载时先隐藏要做入场的图层，避免先闪一下完整画面再从头播放 */
.is-waiting .cube,
.is-waiting .cube-shadow,
.is-waiting .dot,
.is-waiting .piece {
  opacity: 0;
}
.is-playing .piece-text {
  animation: hero-rise 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.is-playing .piece-icon {
  animation: hero-pop 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}
.is-playing .dot {
  animation-name: hero-dot-burst, hero-dot-float;
  animation-timing-function: cubic-bezier(0.18, 1.3, 0.4, 1), ease-in-out;
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

/* ---------- 搭积木 ----------
 * 时间线（秒）：0.05 底座弹出 → 0.35 起每 0.09 秒落下一块积木（落地约在 0.3 秒后）→ 1.15 顶盖落下，1.53 砸实
 * → 冲击波、闪白、画面震动、光点炸开 → 1.8 扫光，2.45 开始悬浮和底座波纹。 */
.tray {
  transform-origin: 50% 80%;
}
.is-playing .tray {
  animation: hero-tray-in 0.55s cubic-bezier(0.3, 0.9, 0.4, 1) 0.05s both;
}
@keyframes hero-tray-in {
  0% {
    opacity: 0;
    transform: translateY(6%) scale(0.78);
  }
  60% {
    opacity: 1;
    transform: translateY(-1%) scale(1.04);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}

/* 每块积木：外层负责下落和回弹（从立方体上方 --from 处、带 --rot 倾斜砸下），内层图片负责落地压扁 */
.blk-img {
  transform-origin: 50% 100%;
}
.is-playing .blk {
  animation: hero-drop 0.62s linear both;
}
.is-playing .blk-img {
  animation: hero-squash 0.62s linear both;
}
@keyframes hero-drop {
  0% {
    opacity: 0;
    transform: translateY(var(--from)) rotate(var(--rot));
    animation-timing-function: cubic-bezier(0.55, 0, 1, 0.45);
  }
  12% {
    opacity: 1;
  }
  48% {
    transform: translateY(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.25, 0.7, 0.4, 1);
  }
  63% {
    transform: translateY(-3.2%) rotate(calc(var(--rot) * -0.2));
    animation-timing-function: cubic-bezier(0.6, 0, 0.9, 0.5);
  }
  76% {
    transform: translateY(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.25, 0.7, 0.4, 1);
  }
  87% {
    transform: translateY(-0.7%) rotate(0deg);
    animation-timing-function: ease-in;
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotate(0deg);
  }
}
@keyframes hero-squash {
  0% {
    transform: scale(0.95, 1.08);
  }
  45% {
    transform: scale(0.96, 1.07);
    animation-timing-function: cubic-bezier(0.3, 0, 0.6, 1);
  }
  51% {
    transform: scale(1.1, 0.84);
    animation-timing-function: ease-out;
  }
  62% {
    transform: scale(0.96, 1.05);
  }
  74% {
    transform: scale(1.025, 0.975);
  }
  86%,
  100% {
    transform: scale(1, 1);
  }
}

/* 顶盖：从更高处放大着砸下，压扁更狠 */
.blk-lid {
  transform-origin: 50.1% 27.8%;
}
.is-playing .blk-lid {
  animation: hero-slam 0.85s linear 1.15s both;
}
.is-playing .blk-lid .blk-img {
  animation: hero-slam-squash 0.85s linear 1.15s both;
}
@keyframes hero-slam {
  0% {
    opacity: 0;
    transform: translateY(-95%) scale(1.4) rotate(-4deg);
    animation-timing-function: cubic-bezier(0.55, 0, 0.95, 0.45);
  }
  14% {
    opacity: 1;
  }
  45% {
    transform: translateY(0) scale(1) rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0.7, 0.4, 1);
  }
  58% {
    transform: translateY(-2.4%) scale(1) rotate(0.6deg);
    animation-timing-function: cubic-bezier(0.6, 0, 0.9, 0.5);
  }
  70% {
    transform: translateY(0) scale(1) rotate(0deg);
    animation-timing-function: cubic-bezier(0.25, 0.7, 0.4, 1);
  }
  81% {
    transform: translateY(-0.5%) scale(1) rotate(0deg);
    animation-timing-function: ease-in;
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1) rotate(0deg);
  }
}
@keyframes hero-slam-squash {
  0% {
    transform: scale(1, 1.04);
  }
  43% {
    transform: scale(0.98, 1.05);
    animation-timing-function: cubic-bezier(0.3, 0, 0.6, 1);
  }
  49% {
    transform: scale(1.07, 0.8);
    animation-timing-function: ease-out;
  }
  60% {
    transform: scale(0.97, 1.06);
  }
  72% {
    transform: scale(1.015, 0.985);
  }
  84%,
  100% {
    transform: scale(1, 1);
  }
}

/* 整个立方体：每块积木落地时底座一震，顶盖砸实时整体一沉再弹起 */
.cube-jolt {
  transform-origin: 50% 100%;
}
.is-playing .cube-jolt {
  animation: hero-jolt 2s linear both;
}
@keyframes hero-jolt {
  0%,
  32% {
    transform: translateY(0) scale(1, 1);
  }
  32.4%,
  36.9%,
  41.4%,
  45.9%,
  50.4%,
  54.9%,
  59.4%,
  63.9% {
    transform: translateY(0.45%) scale(1, 1);
  }
  34.6%,
  39.1%,
  43.6%,
  48.1%,
  52.6%,
  57.1%,
  61.6%,
  66.4% {
    transform: translateY(-0.12%) scale(1, 1);
  }
  69%,
  76.4% {
    transform: translateY(0) scale(1, 1);
  }
  77.1% {
    transform: translateY(2%) scale(1.035, 0.95);
  }
  80.1% {
    transform: translateY(-0.8%) scale(0.985, 1.025);
  }
  83.5% {
    transform: translateY(0.3%) scale(1.008, 0.993);
  }
  87.5%,
  100% {
    transform: translateY(0) scale(1, 1);
  }
}

/* 顶盖砸实：立方体闪白 */
.cube-flash {
  position: absolute;
  inset: 0;
  pointer-events: none;
  mask-size: 100% 100%;
  -webkit-mask-size: 100% 100%;
  background: radial-gradient(
    ellipse 70% 60% at 50% 32%,
    rgba(255, 255, 255, 0.95),
    rgba(214, 255, 222, 0.55) 45%,
    rgba(214, 255, 222, 0) 80%
  );
  opacity: 0;
}
.is-playing .cube-flash {
  animation: hero-flash 0.7s ease-out 1.53s both;
}
@keyframes hero-flash {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 0.85;
  }
  100% {
    opacity: 0;
  }
}

/* 顶盖砸实：整幅画面震动（略放大，震动时边缘不露底） */
.is-playing .quake {
  animation: hero-quake 0.55s linear 1.53s both;
}
@keyframes hero-quake {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  8% {
    transform: translate(-0.3%, 0.55%) scale(1.012);
  }
  20% {
    transform: translate(0.28%, -0.45%) scale(1.01);
  }
  34% {
    transform: translate(-0.2%, 0.3%) scale(1.007);
  }
  50% {
    transform: translate(0.12%, -0.18%) scale(1.004);
  }
  68% {
    transform: translate(-0.05%, 0.08%) scale(1.002);
  }
}

/* ---------- 立方体：持续缓慢悬浮 + 鼠标视差 + 周期性扫光 ---------- */
.cube-parallax {
  transform: translate3d(calc(var(--mx) * -12px), calc(var(--my) * -8px), 0);
}
.is-playing .cube-float {
  animation: hero-float 6s ease-in-out 2.45s infinite;
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
  animation: hero-shine 5s ease-in-out 1.8s infinite;
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
  animation: hero-fade-in 0.6s ease-out 0.05s both;
}
.cube-shadow-img {
  transform-origin: 50% 92%;
  transform: translate3d(calc(var(--mx) * -6px), calc(var(--my) * -4px), 0);
}
.is-playing .cube-shadow-img {
  animation: hero-shadow 6s ease-in-out 2.45s infinite;
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

/* ---------- 底座：顶盖砸实时一圈冲击波，之后两道波纹循环扩散 ---------- */
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
  animation: hero-ripple 4.8s cubic-bezier(0.2, 0.6, 0.3, 1) 2.45s infinite;
}
.is-playing .ripple-2 {
  animation-delay: 4.85s;
}
.shock,
.shock-fill {
  position: absolute;
  border-radius: 50%;
  opacity: 0;
}
.shock {
  border: 3px solid rgba(120, 220, 150, 0.9);
  box-shadow:
    0 0 24px rgba(85, 173, 115, 0.6),
    inset 0 0 18px rgba(85, 173, 115, 0.4);
}
.shock-fill {
  background: radial-gradient(closest-side, rgba(200, 255, 210, 0.8), rgba(85, 173, 115, 0.35) 55%, rgba(85, 173, 115, 0) 100%);
}
.is-playing .shock {
  animation: hero-shock 0.9s cubic-bezier(0.1, 0.75, 0.3, 1) 1.53s both;
}
.is-playing .shock-2 {
  animation-duration: 1.15s;
  animation-delay: 1.65s;
}
.is-playing .shock-fill {
  animation: hero-shock-fill 0.7s ease-out 1.53s both;
}
@keyframes hero-shock {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  8% {
    opacity: 1;
  }
  100% {
    transform: scale(1.9);
    opacity: 0;
  }
}
@keyframes hero-shock-fill {
  0% {
    transform: scale(0.4);
    opacity: 0;
  }
  12% {
    opacity: 0.9;
  }
  100% {
    transform: scale(1.35);
    opacity: 0;
  }
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
/* 从立方体中心（--fx, --fy）飞到原位，带一点过冲 */
@keyframes hero-dot-burst {
  0% {
    opacity: 0;
    transform: translate(var(--fx), var(--fy)) scale(0.3);
  }
  15% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: translate(0, 0) scale(1);
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

/* 减少动态效果：所有入场直接显示最终画面（全局样式已把时长缩到几乎为 0，这里再去掉延迟） */
@media (prefers-reduced-motion: reduce) {
  .hero-art * {
    animation-delay: 0s !important;
  }
}

.cube-parallax,
.ring-layer,
.dots-layer,
.copy-layer {
  will-change: transform;
}
</style>
