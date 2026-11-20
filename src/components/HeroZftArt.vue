<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'
import deviceUrl from '@/assets/hero/zft/device.webp'
import boxTopUrl from '@/assets/hero/zft/box-top.webp'
import boxFrontUrl from '@/assets/hero/zft/box-front.webp'
import boxSideUrl from '@/assets/hero/zft/box-side.webp'
import crabUrl from '@/assets/hero/zft/crab.webp'
import hermesUrl from '@/assets/hero/zft/hermes.webp'

/**
 * 首页第三张横幅：智方体（AgentStation）。
 * 主角是真实的蓝黑色包装盒（黑色盒盖 + 金色「智方体 · AgentStation」、蓝色侧面），按真实比例用 CSS 3D 搭出来，
 * 贴图从包装盒实拍视频中校正透视后提取；设备正面来自真机照片，屏幕换成 ChatU Mate 工作台界面。
 *   开箱即用：包装盒从上方落下 → 盒盖掀起 → 光从盒中射出，智方体从盒里升起、落到盒子前方 → 屏幕开机；
 *   预置智能体：OpenClaw 龙虾从屏幕后探出头，OpenClaw / Hermes「已就绪」卡片弹出；
 *   数据不出盒：盒盖盖回，盒子上方亮起「数据不出盒」，之后数据光点不断流进盒子。
 * 包装盒分成「后面三面」「前面两面」「盒盖」三层，设备夹在中间（升起时先在盒内，飞出后到最前面）。
 * 位置用原图坐标（3392 × 1120，与第一张横幅同比例）按百分比摆放；3D 尺寸用 cqw（横幅宽度的 1%）。
 * 静止画面（未播放、减少动态效果）就是动画结束时的样子。
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

// 包装盒中心、设备、龙虾、卡片、封盖标签的位置（原图坐标）
// 盒子在右、设备在左，互不遮挡：盒盖的金色标题和盒身的蓝色侧面完整露出来
const BOX = { x: 2905, y: 515 }
const DEVICE: Box = [1880, 500, 2500, 921]
const CRAB: Box = [2290, 352, 2458, 510]
// 两张小卡片并排在盒子下方（宽度随文字），右边留出空间，鼠标移上去出现的右侧箭头不会压到卡片
const CARDS_AT = at(2560, 822)
const FLOOR = { x: 2620, y: 910, rx: 780, ry: 110 }
// 设备图里屏幕的位置（device.webp 924 × 628 中的 61,56 – 861,556）
const SCREEN = { left: '6.6%', top: '8.9%', width: '86.6%', height: '79.6%' }

const floorStyle = {
  left: `${((FLOOR.x - FLOOR.rx) / W) * 100}%`,
  top: `${((FLOOR.y - FLOOR.ry) / H) * 100}%`,
  width: `${((FLOOR.rx * 2) / W) * 100}%`,
  height: `${((FLOOR.ry * 2) / H) * 100}%`,
}

// 数据光点：从四周飞向包装盒（单位 cqw，相对盒子中心）
const particles = Array.from({ length: 12 }, (_, i) => {
  const angle = (200 + i * (140 / 11) + ((i * 37) % 7) - 3) * (Math.PI / 180)
  const r0 = 17 + ((i * 53) % 5)
  const r1 = 6
  return {
    '--fx': `${Math.cos(angle) * r0}cqw`,
    '--fy': `${Math.sin(angle) * r0 * 0.6}cqw`,
    '--tx': `${Math.cos(angle) * r1}cqw`,
    '--ty': `${Math.sin(angle) * r1 * 0.6}cqw`,
    animationDelay: `${3.4 + i * 0.21}s`,
    animationDuration: `${2.2 + (i % 4) * 0.25}s`,
  }
})

// 第一次显示时等图片解码完再开始入场
const ready = ref(false)
onMounted(async () => {
  await Promise.all(
    [deviceUrl, boxTopUrl, boxFrontUrl, boxSideUrl, crabUrl, hermesUrl].map((src) => {
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
    class="zft-art absolute inset-y-0 left-[-71.5cqw] sm:left-1/2 sm:-translate-x-1/2 h-full aspect-[3392/1120]"
    :class="{ 'is-playing': ready && active, 'is-waiting': !ready && active }"
    :style="{ '--tex-top': `url(${boxTopUrl})`, '--tex-front': `url(${boxFrontUrl})`, '--tex-side': `url(${boxSideUrl})` }"
    role="img"
    :aria-label="alt"
  >
    <div class="zft-bg absolute inset-0" aria-hidden="true" />

    <div class="zft-stage absolute inset-0" aria-hidden="true">
      <!-- 地面阴影、盒盖盖回时的冲击波 -->
      <span class="zft-floor" :style="floorStyle" />
      <span class="zft-ripple" :style="floorStyle" />
      <!-- 开盒时从盒中射出的光芒和光柱 -->
      <span class="zft-burst" :style="at(BOX.x, BOX.y - 40)" />
      <span class="zft-beam" :style="at(BOX.x, BOX.y)" />

      <!-- 包装盒后面三面（盒内可见的部分） -->
      <div class="zft-scene zft-z1" :style="at(BOX.x, BOX.y)">
        <div class="zft-box zft-drop">
          <div class="f f-back" />
          <div class="f f-left" />
          <div class="f f-bottom" />
        </div>
      </div>

      <!-- 智方体：从盒中升起，落到盒子前方，屏幕开机 -->
      <div class="zft-device absolute" :style="box(DEVICE)">
        <div class="zft-float w-full h-full">
          <img :src="deviceUrl" alt="" class="w-full h-full" draggable="false" />
          <span class="zft-screen-dark" :style="SCREEN" />
          <span class="zft-screen-flash" :style="SCREEN" />
        </div>
      </div>

      <!-- 包装盒前面两面（正面「智方体 · AgentStation」、侧面标志） -->
      <div class="zft-scene zft-z3" :style="at(BOX.x, BOX.y)">
        <div class="zft-box zft-drop">
          <div class="f f-front" />
          <div class="f f-right" />
        </div>
      </div>

      <!-- 盒盖：黑底金字 -->
      <div class="zft-scene zft-z4" :style="at(BOX.x, BOX.y)">
        <div class="zft-box zft-drop">
          <div class="zft-lid">
            <div class="f f-top"><span class="zft-glint" /></div>
          </div>
        </div>
      </div>

      <!-- 盒子上方的「数据不出盒」 -->
      <!-- 放在盒子左上方，不挡盒盖上的金色标题 -->
      <div class="zft-seal" :style="at(BOX.x - 310, BOX.y - 350)">
        <span class="zft-seal-icon"><Icon icon="lucide:lock-keyhole" /></span>
        <span class="zft-seal-text">{{ t('home.hero.zft.seal') }}</span>
      </div>

      <!-- 龙虾（在设备后面，从屏幕上沿探出来） -->
      <div class="zft-crab absolute" :style="box(CRAB)">
        <img :src="crabUrl" alt="" class="zft-crab-img w-full h-full" draggable="false" />
      </div>

      <!-- 智能体卡片：OpenClaw、Hermes「已就绪」 -->
      <div class="zft-cards" :style="CARDS_AT">
        <div class="zft-card" style="animation-delay: 2.15s">
          <span class="zft-avatar zft-avatar-claw"><img :src="crabUrl" alt="" draggable="false" /></span>
          <span class="zft-card-name">OpenClaw <em>{{ t('home.hero.zft.ready') }}</em></span>
        </div>
        <div class="zft-card" style="animation-delay: 2.3s">
          <span class="zft-avatar"><img :src="hermesUrl" alt="" draggable="false" /></span>
          <span class="zft-card-name">Hermes <em>{{ t('home.hero.zft.ready') }}</em></span>
        </div>
      </div>

      <!-- 数据光点：不断流进盒子 -->
      <span v-for="(p, i) in particles" :key="i" class="zft-dot" :style="{ ...at(BOX.x, BOX.y), ...p }" />
    </div>
  </div>
</template>

<style scoped>
.zft-art {
  container-type: inline-size;
  /* 包装盒尺寸：实物长 : 宽 : 高 ≈ 1.3 : 1 : 0.5 */
  --bw: 16.5cqw;
  --bd: 12.69cqw;
  --bh: 6.35cqw;
  --blue: 64, 150, 255;
}

/* ---------- 底 ---------- */
.zft-bg {
  background:
    radial-gradient(ellipse 30% 55% at 76% 45%, rgba(var(--blue), 0.2), rgba(var(--blue), 0) 70%),
    radial-gradient(ellipse 40% 60% at 100% 0%, rgba(120, 190, 255, 0.28), rgba(120, 190, 255, 0) 70%),
    radial-gradient(ellipse 35% 50% at 0% 100%, rgba(150, 200, 255, 0.25), rgba(150, 200, 255, 0) 70%),
    linear-gradient(180deg, #f7faff 0%, #eaf2ff 100%);
}
.zft-floor,
.zft-ripple {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.zft-floor {
  background: radial-gradient(closest-side, rgba(20, 50, 110, 0.28), rgba(20, 50, 110, 0.1) 55%, rgba(20, 50, 110, 0) 100%);
}
.zft-ripple {
  border: 0.12cqw solid rgba(var(--blue), 0.75);
  box-shadow: 0 0 1.2cqw rgba(var(--blue), 0.5);
  opacity: 0;
}

/* ---------- 3D 包装盒 ---------- */
.zft-scene {
  position: absolute;
  width: 0;
  height: 0;
  perspective: 120cqw;
}
.zft-z1 {
  z-index: 1;
}
.zft-z3 {
  z-index: 3;
}
.zft-z4 {
  z-index: 4;
}
.zft-box {
  position: absolute;
  transform-style: preserve-3d;
  transform: rotateX(-33deg) rotateY(-27deg);
}
.zft-lid {
  position: absolute;
  transform-style: preserve-3d;
}
.f {
  position: absolute;
  background-size: 100% 100%;
  backface-visibility: visible;
}
/* 正面、背面：长 × 高 */
.f-front,
.f-back {
  width: var(--bw);
  height: var(--bh);
  left: calc(var(--bw) / -2);
  top: calc(var(--bh) / -2);
}
.f-front {
  background-image: var(--tex-front);
  transform: translateZ(calc(var(--bd) / 2));
  box-shadow: inset 0 0.25cqw 0.4cqw rgba(255, 255, 255, 0.18);
}
.f-back {
  background: linear-gradient(180deg, #2c5f99, #3a76b8);
  transform: rotateY(180deg) translateZ(calc(var(--bd) / 2));
}
/* 侧面：宽 × 高 */
.f-right,
.f-left {
  width: var(--bd);
  height: var(--bh);
  left: calc(var(--bd) / -2);
  top: calc(var(--bh) / -2);
}
.f-right {
  background-image: var(--tex-side);
  transform: rotateY(90deg) translateZ(calc(var(--bw) / 2));
  filter: brightness(0.86);
}
.f-left {
  background: linear-gradient(180deg, #2a5a92, #3870ad);
  transform: rotateY(-90deg) translateZ(calc(var(--bw) / 2));
}
/* 顶、底：长 × 宽 */
.f-top,
.f-bottom {
  width: var(--bw);
  height: var(--bd);
  left: calc(var(--bw) / -2);
  top: calc(var(--bd) / -2);
}
.f-top {
  background-image: var(--tex-top);
  transform: rotateX(90deg) translateZ(calc(var(--bh) / 2));
  overflow: hidden;
  box-shadow:
    inset 0 0 0 0.08cqw rgba(255, 255, 255, 0.12),
    0 0 1.2cqw rgba(0, 0, 0, 0.15);
}
.f-bottom {
  background: #10243f;
  transform: rotateX(-90deg) translateZ(calc(var(--bh) / 2));
}
/* 盒盖上周期性扫过的高光 */
.zft-glint {
  position: absolute;
  inset: 0;
  background: linear-gradient(115deg, rgba(255, 255, 255, 0) 40%, rgba(255, 240, 200, 0.35) 48%, rgba(255, 255, 255, 0) 56%);
  background-size: 300% 100%;
  background-position: 100% 0;
}

/* ---------- 设备、龙虾 ---------- */
.zft-device {
  z-index: 6;
  filter: drop-shadow(0 1.1cqw 1.4cqw rgba(15, 35, 80, 0.28));
}
.zft-crab {
  z-index: 5;
}
.zft-screen-dark,
.zft-screen-flash {
  position: absolute;
  border-radius: 0.15cqw;
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

/* ---------- 封盖标签 ---------- */
.zft-seal {
  position: absolute;
  z-index: 7;
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

/* ---------- 卡片 ---------- */
.zft-cards {
  position: absolute;
  z-index: 7;
  display: flex;
  gap: 0.6cqw;
}
.zft-card {
  display: flex;
  align-items: center;
  height: 2.5cqw;
  gap: 0.6cqw;
  padding: 0 0.8cqw 0 0.2cqw;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.86);
  border: 0.06cqw solid rgba(var(--blue), 0.3);
  box-shadow: 0 0.6cqw 1.8cqw rgba(30, 90, 200, 0.14);
  backdrop-filter: blur(6px);
}
.zft-avatar {
  flex: none;
  width: 2.1cqw;
  height: 2.1cqw;
  border-radius: 50%;
  overflow: hidden;
  box-shadow:
    0 0 0 0.12cqw #fff,
    0 0 0 0.24cqw rgba(var(--blue), 0.35);
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
.zft-card-name {
  display: flex;
  align-items: center;
  gap: 0.4cqw;
  font-size: 0.9cqw;
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

/* ---------- 数据光点（只在播放时出现） ---------- */
.zft-dot {
  position: absolute;
  z-index: 8;
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

/* ---------- 光芒、光柱 ---------- */
.zft-burst {
  position: absolute;
  width: 40cqw;
  aspect-ratio: 1;
  margin: -20cqw 0 0 -20cqw;
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
.zft-beam {
  position: absolute;
  z-index: 2;
  width: 16cqw;
  height: 26cqw;
  margin: -26cqw 0 0 -8cqw;
  background: linear-gradient(180deg, rgba(var(--blue), 0) 0%, rgba(150, 205, 255, 0.55) 60%, rgba(220, 240, 255, 0.9) 100%);
  mask-image: linear-gradient(90deg, transparent, #000 30%, #000 70%, transparent);
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 30%, #000 70%, transparent);
  transform-origin: 50% 100%;
  opacity: 0;
}

/* ============ 动画 ============
 * 时间线（秒）：0 包装盒落下 → 0.45 落地 → 0.65 盒盖掀起 → 0.8 光芒、光柱 → 0.95 设备从盒中升起，1.75 落到盒前
 * → 1.8 屏幕开机 → 2.05 龙虾探头 → 2.15 卡片弹出 → 2.55 盒盖盖回，2.95 合上：冲击波、「数据不出盒」→ 3.4 起数据光点循环。 */
.is-waiting .zft-stage {
  opacity: 0;
}
/* 注意：带 preserve-3d 的元素上不能做 opacity 动画（浏览器会把 3D 压平），淡入放在外层 .zft-scene 上 */
.is-playing .zft-scene {
  animation: zft-fade 0.12s linear both;
}
@keyframes zft-fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.is-playing .zft-drop {
  animation: zft-drop 0.7s linear both;
}
@keyframes zft-drop {
  0% {
    transform: translateY(-26cqw) rotateX(-33deg) rotateY(-45deg) rotateZ(6deg);
    animation-timing-function: cubic-bezier(0.55, 0, 0.9, 0.45);
  }
  64% {
    transform: translateY(0) rotateX(-33deg) rotateY(-27deg);
    animation-timing-function: ease-out;
  }
  78% {
    transform: translateY(-1.2cqw) rotateX(-33deg) rotateY(-27deg);
    animation-timing-function: ease-in;
  }
  90%,
  100% {
    transform: translateY(0) rotateX(-33deg) rotateY(-27deg);
  }
}
.is-playing .zft-floor {
  animation: zft-floor 0.7s ease-in both;
}
@keyframes zft-floor {
  from {
    opacity: 0;
    transform: scale(0.4);
  }
  64%,
  to {
    opacity: 1;
    transform: none;
  }
}
/* 盒盖：掀起悬停，再盖回 */
.is-playing .zft-lid {
  animation: zft-lid 3s linear both;
}
@keyframes zft-lid {
  0%,
  21.7% {
    transform: translate3d(0, 0, 0) rotateX(0deg) rotateZ(0deg);
    animation-timing-function: cubic-bezier(0.2, 0.8, 0.3, 1);
  }
  36% {
    transform: translate3d(2cqw, -9cqw, 1cqw) rotateX(-48deg) rotateZ(-4deg);
    animation-timing-function: ease-in-out;
  }
  85% {
    transform: translate3d(2.3cqw, -9.6cqw, 1cqw) rotateX(-50deg) rotateZ(-5deg);
    animation-timing-function: cubic-bezier(0.6, 0, 0.9, 0.6);
  }
  96% {
    transform: translate3d(0, 0, 0) rotateX(0deg) rotateZ(0deg);
    animation-timing-function: ease-out;
  }
  98% {
    transform: translate3d(0, -0.5cqw, 0) rotateX(0deg) rotateZ(0deg);
  }
  100% {
    transform: translate3d(0, 0, 0) rotateX(0deg) rotateZ(0deg);
  }
}
.is-playing .zft-glint {
  animation: zft-glint 5s ease-in-out 3.2s infinite;
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
.is-playing .zft-burst {
  animation: zft-burst 1.1s cubic-bezier(0.2, 0.7, 0.3, 1) 0.78s both;
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
.is-playing .zft-beam {
  animation: zft-beam 1.1s ease-out 0.75s both;
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
/* 设备：先在盒子里（夹在后面三面和前面两面之间），升出盒口后排到最前面，落到盒子前方 */
.is-playing .zft-device {
  animation: zft-device 0.85s linear 0.95s both;
}
@keyframes zft-device {
  0% {
    z-index: 2;
    opacity: 0;
    transform: translate(114%, -44%) scale(0.4);
    animation-timing-function: cubic-bezier(0.2, 0.7, 0.4, 1);
  }
  8% {
    opacity: 1;
  }
  /* 升出盒口（下沿越过盒子正面上沿）后就排到最前面，盖在悬着的盒盖前 */
  17% {
    z-index: 2;
  }
  19% {
    z-index: 6;
  }
  38% {
    transform: translate(110%, -112%) scale(0.5);
    animation-timing-function: ease-in-out;
  }
  86% {
    transform: translate(0, 1.5%) scale(1);
    animation-timing-function: ease-out;
  }
  100% {
    z-index: 6;
    opacity: 1;
    transform: translate(0, 0) scale(1);
  }
}
.is-playing .zft-float {
  animation: zft-float 5s ease-in-out 3.4s infinite;
}
@keyframes zft-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-2%);
  }
}
.is-playing .zft-screen-dark {
  animation: zft-screen-off 2.05s linear both;
}
@keyframes zft-screen-off {
  0%,
  88% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.is-playing .zft-screen-flash {
  animation: zft-scan 0.45s ease-in-out 1.75s both;
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
  animation: zft-crab 0.6s cubic-bezier(0.3, 1.5, 0.5, 1) 2.05s both;
}
@keyframes zft-crab {
  from {
    opacity: 0;
    transform: translateY(55%) scale(0.85);
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
  animation: zft-wiggle 4s ease-in-out 2.7s infinite;
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
.is-playing .zft-seal {
  animation: zft-seal 0.5s cubic-bezier(0.3, 1.6, 0.5, 1) 2.95s both;
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
  animation: zft-ripple 1s cubic-bezier(0.1, 0.7, 0.3, 1) 2.9s both;
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
    transform: scale(1.4);
  }
}
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

/* 手机：横幅图左移，包装盒在右半边；设备、龙虾、卡片放不下，隐藏 */
@media (max-width: 639px) {
  .zft-device,
  .zft-crab,
  .zft-cards {
    display: none;
  }
}

/* 减少动态效果：直接显示最终画面 */
@media (prefers-reduced-motion: reduce) {
  .zft-art * {
    animation-delay: 0s !important;
  }
}
</style>
