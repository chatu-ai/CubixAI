<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'
import devicesUrl from '@/assets/hero/zft/devices.webp'
import crabUrl from '@/assets/hero/zft/crab.webp'
import hermesUrl from '@/assets/hero/zft/hermes.webp'

/**
 * 首页第三张横幅：智方体（AgentStation）。
 * 一个发蓝光的立方体（智方体的「方」、数据不出「盒」）讲完三个卖点：
 *   开箱即用：立方体出现 → 顶盖弹开、四面像纸盒一样摊平 → 光柱中主机和触控屏升起 → 屏幕开机；
 *   预置智能体：OpenClaw 龙虾从屏幕后探出来，OpenClaw / Hermes 两张「已就绪」卡片弹出；
 *   数据不出盒：四面翻回、顶盖砸回，变成玻璃罩罩住设备，盖上亮起「数据不出盒」，之后数据光点不断流进盒子。
 * 立方体用 CSS 3D 绘制，分成「后面三面」和「前面三面」两层，设备图片夹在中间，前面的玻璃面盖在设备上。
 * 位置用原图坐标（3392 × 1120，与第一张横幅同比例）按百分比摆放；3D 尺寸用 cqw（横幅宽度的 1%）。
 * 静止画面（未播放、减少动态效果）就是动画结束时的样子。
 * 设备、龙虾、Hermes 头像从现有产品图中抠出（src/assets/hero/zft/）。
 */
defineProps<{
  /** 当前是否正显示这一张：变为 true 时重新播放入场动画 */
  active: boolean
  alt: string
}>()
const { t } = useI18n()

const W = 3392
const H = 1120
type Box = [number, number, number, number]
const box = ([x0, y0, x1, y1]: Box) => ({
  left: `${(x0 / W) * 100}%`,
  top: `${(y0 / H) * 100}%`,
  width: `${((x1 - x0) / W) * 100}%`,
  height: `${((y1 - y0) / H) * 100}%`,
})
const at = (x: number, y: number) => ({ left: `${(x / W) * 100}%`, top: `${(y / H) * 100}%` })

// 立方体中心、设备、龙虾、卡片、盖子标签的位置（原图坐标）
const CUBE = { x: 2360, y: 560 }
const CUBE_EDGE = 3392 * 0.18 // 立方体边长（= 样式里的 --s: 18cqw）
const DEVICES: Box = [2015, 385, 2715, 905]
// 龙虾躲在触控屏后面，从屏幕上沿探出头和钳子
const CRAB: Box = [2462, 268, 2672, 508]
// 卡片右边留出空间，鼠标移上去出现的右侧箭头不会压到卡片
const CARD1: Box = [2835, 300, 3255, 480]
const CARD2: Box = [2835, 560, 3255, 740]
const FLOOR = { x: 2360, y: 862, rx: 560, ry: 135 }
// 设备图里触控屏显示区的位置（devices.webp 528 × 392 中的 298,17 – 510,370）
const SCREEN = { left: '56.6%', top: '5.2%', width: '39.6%', height: '88.6%' }

const floorStyle = {
  left: `${((FLOOR.x - FLOOR.rx) / W) * 100}%`,
  top: `${((FLOOR.y - FLOOR.ry) / H) * 100}%`,
  width: `${((FLOOR.rx * 2) / W) * 100}%`,
  height: `${((FLOOR.ry * 2) / H) * 100}%`,
}

// 屏幕右边缘 → 两张卡片的连线（原图坐标，SVG viewBox 与原图一致）
const SCREEN_RIGHT = DEVICES[0] + (DEVICES[2] - DEVICES[0]) * 0.966
const LINKS = [
  `M${SCREEN_RIGHT} 520 C 2760 520, 2780 ${(CARD1[1] + CARD1[3]) / 2}, ${CARD1[0]} ${(CARD1[1] + CARD1[3]) / 2}`,
  `M${SCREEN_RIGHT} 620 C 2760 620, 2780 ${(CARD2[1] + CARD2[3]) / 2}, ${CARD2[0]} ${(CARD2[1] + CARD2[3]) / 2}`,
]

// 数据光点：从四周飞向立方体，到玻璃壁处被「吸收」（单位 cqw，相对立方体中心）
const particles = Array.from({ length: 12 }, (_, i) => {
  const angle = (125 + i * (140 / 11) + ((i * 37) % 7) - 3) * (Math.PI / 180)
  const r0 = 21 + ((i * 53) % 5)
  const r1 = 9.5
  return {
    '--fx': `${Math.cos(angle) * r0}cqw`,
    '--fy': `${Math.sin(angle) * r0 * 0.62}cqw`,
    '--tx': `${Math.cos(angle) * r1}cqw`,
    '--ty': `${Math.sin(angle) * r1 * 0.62}cqw`,
    animationDelay: `${3.5 + i * 0.19}s`,
    animationDuration: `${2.2 + (i % 4) * 0.25}s`,
  }
})

// 第一次显示时等图片解码完再开始入场
const ready = ref(false)
onMounted(async () => {
  await Promise.all(
    [devicesUrl, crabUrl, hermesUrl].map((src) => {
      const img = new Image()
      img.src = src
      return img.decode().catch(() => undefined)
    }),
  )
  ready.value = true
})
</script>

<template>
  <div
    class="zft-art absolute inset-y-0 left-[-46cqw] sm:left-1/2 sm:-translate-x-1/2 h-full aspect-[3392/1120]"
    :class="{ 'is-playing': ready && active, 'is-waiting': !ready && active }"
    role="img"
    :aria-label="alt"
  >
    <!-- 底：浅蓝渐变 + 立方体背后的光晕 + 透视网格地面 -->
    <div class="zft-bg absolute inset-0" aria-hidden="true" />
    <div class="zft-grid absolute inset-0" aria-hidden="true" />

    <div class="zft-stage absolute inset-0" aria-hidden="true">
      <!-- 地面光圈、合盒时的冲击波 -->
      <span class="zft-floor" :style="floorStyle" />
      <span class="zft-ripple" :style="floorStyle" />
      <!-- 开盒时从盒中射出的光芒和光柱 -->
      <span class="zft-burst" :style="at(CUBE.x, CUBE.y + 140)" />
      <span class="zft-beam" :style="at(CUBE.x, CUBE.y)" />

      <!-- 立方体后面三面（在设备后方） -->
      <div class="zft-scene" :style="at(CUBE.x, CUBE.y)">
        <div class="zft-cube">
          <div class="w w-bottom"><div class="face face-floor" /></div>
          <div class="w w-back"><div class="face face-side" /></div>
          <div class="w w-left"><div class="face face-side" style="animation-delay: 0.04s" /></div>
        </div>
      </div>

      <!-- 龙虾（在设备后面，从屏幕后探出来） -->
      <div class="zft-crab absolute" :style="box(CRAB)">
        <img :src="crabUrl" alt="" class="zft-crab-img w-full h-full" draggable="false" />
      </div>

      <!-- 主机 + 触控屏：从盒中升起，屏幕开机 -->
      <div class="zft-devices absolute" :style="box(DEVICES)">
        <div class="zft-float w-full h-full">
          <img :src="devicesUrl" alt="" class="w-full h-full" draggable="false" />
          <span class="zft-screen-dark" :style="SCREEN" />
          <span class="zft-screen-flash" :style="SCREEN" />
        </div>
      </div>

      <!-- 立方体前面三面（玻璃，盖在设备前方） -->
      <div class="zft-scene" :style="at(CUBE.x, CUBE.y)">
        <div class="zft-cube">
          <div class="w w-front"><div class="face face-side face-glass" style="animation-delay: 0.08s" /></div>
          <div class="w w-right"><div class="face face-side face-glass" style="animation-delay: 0.12s" /></div>
          <div class="w w-top"><div class="face face-lid face-glass" /></div>
        </div>
      </div>

      <!-- 盖子上的「数据不出盒」 -->
      <!-- 放在盖子偏左，避开右边探头的龙虾 -->
      <div class="zft-seal" :style="at(CUBE.x - 150, CUBE.y - CUBE_EDGE * 0.48)">
        <span class="zft-seal-icon"><Icon icon="lucide:lock-keyhole" /></span>
        <span class="zft-seal-text">{{ t('home.hero.zft.seal') }}</span>
      </div>

      <!-- 屏幕到卡片的连线 -->
      <svg class="zft-links absolute inset-0 w-full h-full" :viewBox="`0 0 ${W} ${H}`" fill="none">
        <path v-for="(d, i) in LINKS" :key="i" :d="d" pathLength="1" :style="{ animationDelay: `${1.95 + i * 0.15}s` }" />
      </svg>

      <!-- 智能体卡片：OpenClaw、Hermes「已就绪」 -->
      <div class="zft-card" :style="{ ...box(CARD1), animationDelay: '2s' }">
        <span class="zft-avatar zft-avatar-claw"><img :src="crabUrl" alt="" draggable="false" /></span>
        <span class="zft-card-body">
          <span class="zft-card-name">OpenClaw <em>{{ t('home.hero.zft.ready') }}</em></span>
          <span class="zft-card-desc">{{ t('home.hero.zft.openclaw') }}</span>
        </span>
      </div>
      <div class="zft-card" :style="{ ...box(CARD2), animationDelay: '2.15s' }">
        <span class="zft-avatar"><img :src="hermesUrl" alt="" draggable="false" /></span>
        <span class="zft-card-body">
          <span class="zft-card-name">Hermes <em>{{ t('home.hero.zft.ready') }}</em></span>
          <span class="zft-card-desc">{{ t('home.hero.zft.hermes') }}</span>
        </span>
      </div>

      <!-- 数据光点：不断流进盒子 -->
      <span v-for="(p, i) in particles" :key="i" class="zft-dot" :style="{ ...at(CUBE.x, CUBE.y + 60), ...p }" />
    </div>
  </div>
</template>

<style scoped>
.zft-art {
  container-type: inline-size;
  --s: 18cqw; /* 立方体边长（脚本里的 CUBE_EDGE 与此一致） */
  --half: 9cqw;
  --blue: 64, 150, 255;
}

/* ---------- 底 ---------- */
.zft-bg {
  background:
    radial-gradient(ellipse 30% 55% at 70% 52%, rgba(var(--blue), 0.22), rgba(var(--blue), 0) 70%),
    radial-gradient(ellipse 40% 60% at 100% 0%, rgba(120, 190, 255, 0.28), rgba(120, 190, 255, 0) 70%),
    radial-gradient(ellipse 35% 50% at 0% 100%, rgba(150, 200, 255, 0.25), rgba(150, 200, 255, 0) 70%),
    linear-gradient(180deg, #f7faff 0%, #eef4ff 100%);
}
.zft-grid {
  background-image:
    linear-gradient(rgba(var(--blue), 0.12) 1px, transparent 1px),
    linear-gradient(90deg, rgba(var(--blue), 0.12) 1px, transparent 1px);
  background-size: 2.4cqw 2.4cqw;
  mask-image: radial-gradient(ellipse 26% 30% at 70% 80%, #000 0%, transparent 100%);
  -webkit-mask-image: radial-gradient(ellipse 26% 30% at 70% 80%, #000 0%, transparent 100%);
  transform: perspective(60cqw) rotateX(58deg);
  transform-origin: 70% 80%;
}

/* ---------- 地面光圈 ---------- */
.zft-floor,
.zft-ripple {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.zft-floor {
  background: radial-gradient(closest-side, rgba(var(--blue), 0.35), rgba(var(--blue), 0.12) 55%, rgba(var(--blue), 0) 100%);
}
.zft-ripple {
  border: 0.12cqw solid rgba(var(--blue), 0.75);
  box-shadow: 0 0 1.2cqw rgba(var(--blue), 0.5);
  opacity: 0;
}

/* ---------- 3D 立方体 ---------- */
.zft-scene {
  position: absolute;
  width: 0;
  height: 0;
  perspective: 160cqw;
}
.zft-cube {
  position: absolute;
  transform-style: preserve-3d;
  transform: rotateX(-16deg) rotateY(-38deg);
}
.w {
  position: absolute;
  width: var(--s);
  height: var(--s);
  left: calc(var(--s) / -2);
  top: calc(var(--s) / -2);
  transform-style: preserve-3d;
}
.w-front {
  transform: translateZ(var(--half));
}
.w-back {
  transform: rotateY(180deg) translateZ(var(--half));
}
.w-right {
  transform: rotateY(90deg) translateZ(var(--half));
}
.w-left {
  transform: rotateY(-90deg) translateZ(var(--half));
}
.w-top {
  transform: rotateX(90deg) translateZ(var(--half));
}
.w-bottom {
  transform: rotateX(-90deg) translateZ(var(--half));
}
.face {
  position: absolute;
  inset: 0;
  border: 0.14cqw solid rgba(120, 190, 255, 0.95);
  border-radius: 0.25cqw;
  background: linear-gradient(135deg, rgba(170, 215, 255, 0.16), rgba(var(--blue), 0.06));
  box-shadow:
    0 0 0.9cqw rgba(var(--blue), 0.55),
    inset 0 0 1.4cqw rgba(var(--blue), 0.3);
}
.face-floor {
  background: radial-gradient(closest-side, rgba(var(--blue), 0.25), rgba(var(--blue), 0.06));
}
/* 前面三面是玻璃：合盒后一道斜向高光周期性扫过（伪元素，静止时在面外看不见） */
.face-glass {
  background: linear-gradient(135deg, rgba(190, 225, 255, 0.14), rgba(var(--blue), 0.05));
  overflow: hidden;
}
.face-glass::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, rgba(255, 255, 255, 0) 38%, rgba(255, 255, 255, 0.45) 46%, rgba(255, 255, 255, 0) 54%);
  background-size: 300% 100%;
  background-position: 100% 0;
}
.face-side {
  transform-origin: 50% 100%; /* 侧面以底边为轴倒下 / 立起 */
}

/* ---------- 盖子标签 ---------- */
.zft-seal {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 0.45cqw;
  padding: 0.38cqw 0.9cqw 0.38cqw 0.42cqw;
  border-radius: 999px;
  background: linear-gradient(135deg, #2f7bff, #1a56d6);
  color: #fff;
  font-size: 0.82cqw;
  font-weight: 600;
  white-space: nowrap;
  box-shadow: 0 0.4cqw 1.4cqw rgba(26, 86, 214, 0.35);
  transform: translate(-50%, -50%);
}
.zft-seal-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5cqw;
  height: 1.5cqw;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  font-size: 0.95cqw;
}

/* ---------- 连线、卡片 ---------- */
.zft-links path {
  stroke: rgba(var(--blue), 0.7);
  stroke-width: 3;
  stroke-dasharray: 0.02 0.012;
}
.zft-card {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 0.7cqw;
  padding: 0 0.9cqw;
  border-radius: 0.9cqw;
  background: rgba(255, 255, 255, 0.82);
  border: 0.06cqw solid rgba(var(--blue), 0.3);
  box-shadow: 0 0.6cqw 1.8cqw rgba(30, 90, 200, 0.14);
  backdrop-filter: blur(6px);
}
.zft-avatar {
  flex: none;
  width: 3.3cqw;
  height: 3.3cqw;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 0 0 0.12cqw #fff, 0 0 0 0.24cqw rgba(var(--blue), 0.35);
}
.zft-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.zft-avatar-claw {
  background: radial-gradient(circle at 40% 35%, #fff1ef, #ffd9d3);
  padding: 0.35cqw;
}
.zft-avatar-claw img {
  object-fit: contain;
}
.zft-card-body {
  display: flex;
  flex-direction: column;
  gap: 0.2cqw;
  min-width: 0;
}
.zft-card-name {
  display: flex;
  align-items: center;
  gap: 0.4cqw;
  font-size: 1.05cqw;
  font-weight: 700;
  color: #0f1f3d;
  white-space: nowrap;
}
.zft-card-name em {
  font-style: normal;
  font-size: 0.6cqw;
  font-weight: 600;
  color: #12a150;
  background: #e3f7ea;
  border-radius: 999px;
  padding: 0.08cqw 0.45cqw;
}
.zft-card-desc {
  font-size: 0.66cqw;
  line-height: 1.35;
  color: #5b6b86;
}

/* ---------- 数据光点（只在播放时出现） ---------- */
.zft-dot {
  position: absolute;
  width: 0.42cqw;
  height: 0.42cqw;
  margin: -0.21cqw 0 0 -0.21cqw;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, #ffffff, #7db7ff 45%, #2f7bff 100%);
  box-shadow:
    0 0 0.5cqw rgba(var(--blue), 0.9),
    0 0 1.2cqw rgba(var(--blue), 0.45);
  opacity: 0;
}

/* ============ 动画 ============
 * 时间线（秒）：0 立方体出现 → 0.62 顶盖弹飞、四面倒下摊平 → 0.85 光柱中设备升起 → 1.45 屏幕开机
 * → 1.75 龙虾探出 → 1.95 连线、卡片弹出 → 2.7 四面立起 → 2.9 顶盖砸回 → 3.25 封盖标签、冲击波 → 3.5 起数据光点循环。 */
.is-waiting .zft-stage {
  opacity: 0;
}
.is-playing .zft-scene {
  animation: zft-appear 0.6s cubic-bezier(0.3, 1.3, 0.5, 1) both;
}
@keyframes zft-appear {
  from {
    opacity: 0;
    transform: scale(0.7);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

/* 侧面：整段 3.6 秒的单一关键帧（倒下 → 摊平 → 立起），不同面用 animation-delay 错开 */
.is-playing .face-side {
  animation: zft-side 3.6s linear both;
}
@keyframes zft-side {
  0%,
  17.2% {
    transform: rotateX(0deg);
    animation-timing-function: cubic-bezier(0.5, 0, 0.9, 0.5);
  }
  27.8% {
    transform: rotateX(-96deg);
    animation-timing-function: ease-out;
  }
  30% {
    transform: rotateX(-86deg);
    animation-timing-function: ease-in-out;
  }
  32%,
  75% {
    transform: rotateX(-90deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  84.7% {
    transform: rotateX(5deg);
    animation-timing-function: ease-out;
  }
  88%,
  100% {
    transform: rotateX(0deg);
  }
}
/* 顶盖：弹飞消失，最后从高处砸回 */
.is-playing .face-lid {
  animation: zft-lid 3.6s linear both;
}
@keyframes zft-lid {
  0%,
  17% {
    transform: translateZ(0);
    opacity: 1;
    animation-timing-function: cubic-bezier(0.2, 0.7, 0.4, 1);
  }
  27% {
    transform: translateZ(26cqw) rotateX(-25deg);
    opacity: 0;
  }
  79% {
    transform: translateZ(30cqw);
    opacity: 0;
    animation-timing-function: cubic-bezier(0.6, 0, 1, 0.6);
  }
  82% {
    opacity: 1;
  }
  89% {
    transform: translateZ(0);
    animation-timing-function: ease-out;
  }
  91.5% {
    transform: translateZ(1.2cqw);
    animation-timing-function: ease-in;
  }
  94%,
  100% {
    transform: translateZ(0);
    opacity: 1;
  }
}
/* 合盒后玻璃上一道高光扫过，之后周期性重复 */
.is-playing .face-glass::after {
  animation: zft-glint 5s ease-in-out 3.3s infinite;
}
@keyframes zft-glint {
  0% {
    background-position: 100% 0;
  }
  30%,
  100% {
    background-position: 0% 0;
  }
}

/* 光芒、光柱 */
.zft-burst {
  position: absolute;
  width: 44cqw;
  aspect-ratio: 1;
  margin: -22cqw 0 0 -22cqw;
  border-radius: 50%;
  background: repeating-conic-gradient(
    from 0deg,
    rgba(var(--blue), 0) 0deg,
    rgba(var(--blue), 0.45) 3deg,
    rgba(var(--blue), 0) 7deg,
    rgba(var(--blue), 0) 14deg
  );
  mask-image: radial-gradient(circle closest-side, transparent 12%, #000 26%, rgba(0, 0, 0, 0.5) 60%, transparent 100%);
  -webkit-mask-image: radial-gradient(circle closest-side, transparent 12%, #000 26%, rgba(0, 0, 0, 0.5) 60%, transparent 100%);
  opacity: 0;
}
.is-playing .zft-burst {
  animation: zft-burst 1.1s cubic-bezier(0.2, 0.7, 0.3, 1) 0.72s both;
}
@keyframes zft-burst {
  0% {
    opacity: 0;
    transform: scale(0.4) rotate(-12deg);
  }
  15% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(1.15) rotate(15deg);
  }
}
.zft-beam {
  position: absolute;
  width: 15cqw;
  height: 30cqw;
  margin: -16cqw 0 0 -7.5cqw;
  background: linear-gradient(180deg, rgba(var(--blue), 0) 0%, rgba(140, 200, 255, 0.55) 55%, rgba(var(--blue), 0.75) 100%);
  mask-image: linear-gradient(90deg, transparent, #000 30%, #000 70%, transparent);
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 30%, #000 70%, transparent);
  transform-origin: 50% 100%;
  opacity: 0;
}
.is-playing .zft-beam {
  animation: zft-beam 1s ease-out 0.75s both;
}
@keyframes zft-beam {
  0% {
    opacity: 0;
    transform: scaleY(0.2);
  }
  25% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scaleY(1);
  }
}

/* 设备升起、屏幕开机、之后轻轻悬浮 */
.is-playing .zft-devices {
  animation: zft-rise 0.7s cubic-bezier(0.25, 1.25, 0.5, 1) 0.85s both;
}
@keyframes zft-rise {
  from {
    opacity: 0;
    transform: translateY(24%) scale(0.92);
  }
  30% {
    opacity: 1;
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.is-playing .zft-float {
  animation: zft-float 5s ease-in-out 3.6s infinite;
}
@keyframes zft-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-2.5%);
  }
}
.zft-screen-dark,
.zft-screen-flash {
  position: absolute;
  border-radius: 0.2cqw;
  pointer-events: none;
  opacity: 0;
}
.zft-screen-dark {
  background: #07122b;
}
.zft-screen-flash {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.95) 50%, rgba(255, 255, 255, 0) 60%);
  background-size: 100% 300%;
  background-repeat: no-repeat;
  background-position: 0 100%;
}
.is-playing .zft-screen-dark {
  animation: zft-screen-off 1.75s linear both;
}
@keyframes zft-screen-off {
  0%,
  86% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.is-playing .zft-screen-flash {
  animation: zft-scan 0.45s ease-in-out 1.42s both;
}
@keyframes zft-scan {
  from {
    opacity: 1;
    background-position: 0 100%;
  }
  to {
    opacity: 1;
    background-position: 0 0;
  }
}

/* 龙虾：从屏幕后面向上探出来，之后不时扭一扭 */
.zft-crab-img {
  transform-origin: 50% 80%;
}
.is-playing .zft-crab {
  animation: zft-crab 0.6s cubic-bezier(0.3, 1.5, 0.5, 1) 1.75s both;
}
@keyframes zft-crab {
  from {
    opacity: 0;
    transform: translateY(48%) scale(0.85);
  }
  25% {
    opacity: 1;
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.is-playing .zft-crab-img {
  animation: zft-wiggle 4s ease-in-out 2.3s infinite;
}
@keyframes zft-wiggle {
  0%,
  100% {
    transform: rotate(0);
  }
  6% {
    transform: rotate(-8deg);
  }
  12% {
    transform: rotate(7deg);
  }
  18% {
    transform: rotate(-4deg);
  }
  24%,
  99% {
    transform: rotate(0);
  }
}

/* 连线描出、卡片弹出 */
.zft-links path {
  stroke-dashoffset: 0;
}
.is-playing .zft-links path {
  animation: zft-link 0.45s ease-out both;
}
@keyframes zft-link {
  from {
    opacity: 0;
    stroke-dashoffset: 1;
  }
  to {
    opacity: 1;
    stroke-dashoffset: 0;
  }
}
.is-playing .zft-card {
  animation: zft-card 0.55s cubic-bezier(0.3, 1.4, 0.5, 1) both;
}
@keyframes zft-card {
  from {
    opacity: 0;
    transform: translateX(8%) scale(0.85);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

/* 合盒：封盖标签弹出、地面冲击波 */
.is-playing .zft-seal {
  animation: zft-seal 0.5s cubic-bezier(0.3, 1.6, 0.5, 1) 3.25s both;
}
@keyframes zft-seal {
  from {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
.is-playing .zft-ripple {
  animation: zft-ripple 1s cubic-bezier(0.1, 0.7, 0.3, 1) 3.2s both;
}
@keyframes zft-ripple {
  0% {
    opacity: 0;
    transform: scale(0.55);
  }
  10% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(1.6);
  }
}

/* 数据光点循环 */
.is-playing .zft-dot {
  animation-name: zft-dot;
  animation-timing-function: cubic-bezier(0.4, 0, 0.8, 0.6);
  animation-iteration-count: infinite;
}
@keyframes zft-dot {
  0% {
    opacity: 0;
    transform: translate(var(--fx), var(--fy)) scale(1);
  }
  15% {
    opacity: 1;
  }
  85% {
    opacity: 1;
    transform: translate(var(--tx), var(--ty)) scale(0.8);
  }
  100% {
    opacity: 0;
    transform: translate(var(--tx), var(--ty)) scale(0.2);
  }
}

/* 减少动态效果：直接显示最终画面 */
@media (prefers-reduced-motion: reduce) {
  .zft-art * {
    animation-delay: 0s !important;
  }
}
</style>
