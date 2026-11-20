<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'
import boxUrl from '@/assets/hero/zft/box-photo.webp'
import deviceUrl from '@/assets/hero/zft/device.webp'
import crabUrl from '@/assets/hero/zft/crab.webp'
import whaleUrl from '@/assets/hero/zft/whale.webp'
import logoUrl from '@/assets/hero/zft/agentstation-logo.svg'
import hermesUrl from '@/assets/hero/zft/hermes.webp'

/**
 * 首页第三张横幅：智方体（AgentStation）产品照。
 * 包装盒、设备都是实拍照片抠图（包装盒取自实拍视频，设备取自真机照片）。
 * 屏幕和真机一样是 Windows 桌面上开着 ChatU Mate 窗口（不是全屏），工作台里 DeepSeek Harness 放大、运行中；
 * 不做任何违反物理的动作，只有真实拍摄里会有的变化，看起来才真：
 *   镜头推近：画面从稍大、稍偏右慢慢推到位，近处的设备比远处的包装盒移动得多（视差）；
 *   反光：一道光从包装盒表面扫过；
 *   开机：屏幕是开机启动画面（黑底白色 AgentStation 标志）→ 过渡到桌面 → 工作台，DeepSeek Harness 卡片亮两下；
 *   之后 DeepSeek 小鲸鱼从设备后面探头，DeepSeek Harness / OpenClaw / Hermes「已就绪」，「数据不出盒」。
 * 位置用原图坐标（3392 × 1120，与第一张横幅同比例）按百分比摆放；尺寸用 cqw（横幅宽度的 1%）。
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

// 包装盒照片 1133 × 568（顶面按透视压扁了一点，和设备照片的拍摄高度一致），设备照片 924 × 628（原图坐标）。
// 按实物比例：设备宽度约为包装盒正面宽度的 0.9 倍；设备离镜头更近，放在左前方、略压住盒子左边
const BOX: Box = [2460, 455, 3170, 811]
const DEVICE: Box = [1850, 425, 2500, 867]
// 地面接触阴影：盒子底边、设备底边
const BOX_SHADOW: Box = [2475, 778, 3155, 843]
const DEVICE_SHADOW: Box = [1865, 838, 2490, 894]
const WHALE: Box = [2228, 268, 2440, 453]
// 三张「已就绪」卡片排一行，在设备和包装盒下面；左边要让开底部居中的翻页按钮（窄屏时按钮右端约在 x≈1915）
const CARDS_AT = at(1960, 890)
// 「数据不出盒」左边对齐在小鲸鱼右侧（各语言长度不同，韩文最长，往右延伸不会压到鲸鱼）
const SEAL_AT = at(2470, 392)

// 第一次显示时等图片解码完再开始入场
const ready = ref(false)
onMounted(async () => {
  await Promise.all(
    [boxUrl, deviceUrl, whaleUrl, crabUrl, hermesUrl].map((src) => {
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
    :style="{ '--box': `url(${boxUrl})` }"
    role="img"
    :aria-label="alt"
  >
    <div class="zft-bg absolute inset-0" aria-hidden="true" />

    <div class="zft-stage absolute inset-0" aria-hidden="true">
      <!-- 镜头：整体推近 -->
      <div class="zft-cam absolute inset-0">
        <!-- 远处：包装盒 -->
        <div class="zft-far absolute inset-0">
          <span class="zft-shadow" :style="box(BOX_SHADOW)" />
          <div class="zft-box absolute" :style="box(BOX)">
            <img :src="boxUrl" alt="" class="w-full h-full" draggable="false" />
            <span class="zft-sheen" />
          </div>
        </div>

        <!-- 近处：设备（小鲸鱼在设备后面，从屏幕上沿探出来） -->
        <div class="zft-near absolute inset-0">
          <div class="zft-whale absolute" :style="box(WHALE)">
            <img :src="whaleUrl" alt="" class="zft-whale-img w-full h-full" draggable="false" />
          </div>
          <span class="zft-shadow zft-shadow-dev" :style="box(DEVICE_SHADOW)" />
          <div class="zft-device absolute" :style="box(DEVICE)">
            <img :src="deviceUrl" alt="" class="w-full h-full" draggable="false" />
            <!-- 设备图 924 × 628 中屏幕在 61,56 – 861,556 -->
            <!-- 屏幕上 DeepSeek Harness 卡片的位置（设备图坐标 248,176 – 815,294） -->
            <span class="zft-ds-ring" />
            <span class="zft-screen-off" />
            <!-- 开机启动画面：黑底上的白色 AgentStation 标志 -->
            <img :src="logoUrl" alt="" class="zft-screen-logo" draggable="false" />
            <span class="zft-screen-glow" />
          </div>
        </div>
      </div>

      <!-- 「数据不出盒」 -->
      <div class="zft-seal" :style="SEAL_AT">
        <span class="zft-seal-icon"><Icon icon="lucide:lock-keyhole" /></span>
        <span class="zft-seal-text">{{ t('home.hero.zft.seal') }}</span>
      </div>

      <!-- 智能体卡片：DeepSeek Harness、OpenClaw、Hermes「已就绪」 -->
      <div class="zft-cards" :style="CARDS_AT">
        <div class="zft-card" style="animation-delay: 1.9s">
          <span class="zft-avatar zft-avatar-whale"><img :src="whaleUrl" alt="" draggable="false" /></span>
          <span class="zft-card-name">DeepSeek Harness <em>{{ t('home.hero.zft.ready') }}</em></span>
        </div>
        <div class="zft-card" style="animation-delay: 2.05s">
          <span class="zft-avatar zft-avatar-claw"><img :src="crabUrl" alt="" draggable="false" /></span>
          <span class="zft-card-name">OpenClaw <em>{{ t('home.hero.zft.ready') }}</em></span>
        </div>
        <div class="zft-card" style="animation-delay: 2.2s">
          <span class="zft-avatar"><img :src="hermesUrl" alt="" draggable="false" /></span>
          <span class="zft-card-name">Hermes <em>{{ t('home.hero.zft.ready') }}</em></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.zft-art {
  container-type: inline-size;
  --blue: 64, 150, 255;
}

/* ---------- 底 ---------- */
.zft-bg {
  background:
    radial-gradient(ellipse 32% 50% at 76% 52%, rgba(var(--blue), 0.14), rgba(var(--blue), 0) 70%),
    radial-gradient(ellipse 40% 60% at 100% 0%, rgba(120, 190, 255, 0.28), rgba(120, 190, 255, 0) 70%),
    radial-gradient(ellipse 35% 50% at 0% 100%, rgba(150, 200, 255, 0.25), rgba(150, 200, 255, 0) 70%),
    linear-gradient(180deg, #f7faff 0%, #eaf2ff 100%);
}

/* ---------- 照片、阴影 ---------- */
.zft-cam,
.zft-far,
.zft-near {
  transform-origin: 72% 70%;
}
.zft-shadow {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(closest-side, rgba(16, 36, 80, 0.42), rgba(16, 36, 80, 0.2) 55%, rgba(16, 36, 80, 0) 100%);
}
.zft-shadow-dev {
  background: radial-gradient(closest-side, rgba(12, 24, 52, 0.5), rgba(12, 24, 52, 0.22) 50%, rgba(12, 24, 52, 0) 100%);
}
.zft-box img,
.zft-device img {
  position: absolute;
  inset: 0;
}
.zft-box {
  filter: drop-shadow(0 0.5cqw 0.9cqw rgba(16, 36, 80, 0.16));
}
.zft-device {
  filter: drop-shadow(0 0.6cqw 1cqw rgba(12, 24, 52, 0.22));
}
/* 包装盒表面扫过的反光：只落在盒子上（用盒子照片本身做遮罩） */
.zft-sheen {
  position: absolute;
  inset: 0;
  background: linear-gradient(105deg, rgba(255, 255, 255, 0) 38%, rgba(255, 255, 255, 0.34) 47%, rgba(255, 255, 255, 0.1) 52%, rgba(255, 255, 255, 0) 60%);
  background-size: 260% 100%;
  background-position: 100% 0;
  mask-image: var(--box);
  mask-size: 100% 100%;
  -webkit-mask-image: var(--box);
  -webkit-mask-size: 100% 100%;
  mix-blend-mode: screen;
  pointer-events: none;
}
/* 屏幕：熄屏时是带反光的黑玻璃，开机后显示工作台 */
.zft-screen-off,
.zft-screen-glow {
  position: absolute;
  left: 6.6%;
  top: 8.9%;
  width: 86.6%;
  height: 79.6%;
  border-radius: 0.1cqw;
  pointer-events: none;
  opacity: 0;
}
.zft-screen-off {
  background:
    linear-gradient(118deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.05) 32%, rgba(255, 255, 255, 0) 33%),
    #060b16;
}
.zft-screen-glow {
  background: radial-gradient(ellipse at 50% 50%, rgba(150, 195, 255, 0.95), rgba(70, 120, 235, 0.8) 60%, rgba(25, 55, 150, 0.75));
}

/* 开机启动画面的标志：在屏幕正中（选择器带上 .zft-device，盖过上面设备照片的 inset: 0） */
.zft-device .zft-screen-logo {
  position: absolute;
  inset: auto;
  left: 50%;
  top: 48%;
  width: 46%;
  height: auto;
  transform: translate(-50%, -50%);
  filter: drop-shadow(0 0 0.35cqw rgba(190, 215, 255, 0.45));
  pointer-events: none;
  opacity: 0;
}

/* 开机后 DeepSeek Harness 卡片外圈亮两下 */
.zft-ds-ring {
  position: absolute;
  left: 26.84%;
  top: 27.95%;
  width: 61.36%;
  height: 18.79%;
  border-radius: 0.2cqw;
  box-shadow:
    0 0 0 0.1cqw rgba(var(--blue), 0.9),
    0 0 0.8cqw 0.15cqw rgba(var(--blue), 0.55);
  pointer-events: none;
  opacity: 0;
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
  transform: translateY(-50%);
  transform-origin: 0 50%;
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
.zft-avatar-whale {
  background: radial-gradient(circle at 40% 35%, #f1f4ff, #d9e1ff);
  padding: 0.25cqw;
}
.zft-avatar-claw img,
.zft-avatar-whale img {
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

/* ============ 动画 ============
 * 时间线（秒）：0～1.4 镜头推近（近处设备比远处盒子多移一点）→ 0.7 盒子表面扫过反光
 * → 0～1.45 屏幕是开机启动画面（黑底白色 AgentStation 标志）→ 1.6～2.1 过渡到桌面和工作台
 * → 1.8 小鲸鱼探头 → 1.9 / 2.05 / 2.2 三张卡片 → 2.15 DeepSeek Harness 卡片亮两下
 * → 2.35「数据不出盒」。 */
.is-waiting .zft-stage {
  opacity: 0;
}
.is-playing .zft-cam {
  animation: zft-cam 1.4s cubic-bezier(0.2, 0.6, 0.2, 1) both;
}
@keyframes zft-cam {
  from {
    opacity: 0;
    transform: scale(1.06);
  }
  25% {
    opacity: 1;
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.is-playing .zft-far {
  animation: zft-pan-far 1.4s cubic-bezier(0.2, 0.6, 0.2, 1) both;
}
@keyframes zft-pan-far {
  from {
    transform: translateX(0.9cqw);
  }
  to {
    transform: none;
  }
}
.is-playing .zft-near {
  animation: zft-pan-near 1.4s cubic-bezier(0.2, 0.6, 0.2, 1) both;
}
@keyframes zft-pan-near {
  from {
    transform: translateX(2.4cqw);
  }
  to {
    transform: none;
  }
}
.is-playing .zft-sheen {
  animation: zft-sheen 6s ease-in-out 0.7s infinite;
}
@keyframes zft-sheen {
  0% {
    background-position: 100% 0;
  }
  22%,
  100% {
    background-position: 0% 0;
  }
}

/* 开机：启动画面（黑底 + AgentStation 标志）→ 桌面和工作台 */
.is-playing .zft-screen-off {
  animation: zft-screen-off 2.1s linear both;
}
@keyframes zft-screen-off {
  0%,
  78% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.is-playing .zft-screen-logo {
  animation: zft-screen-logo 1.6s ease-out 0.05s both;
}
@keyframes zft-screen-logo {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.96);
  }
  20% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  88% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.is-playing .zft-screen-glow {
  animation: zft-screen-glow 0.55s ease-out 1.55s both;
}
@keyframes zft-screen-glow {
  0% {
    opacity: 0;
  }
  35% {
    opacity: 0.3;
  }
  100% {
    opacity: 0;
  }
}

.is-playing .zft-ds-ring {
  animation: zft-ds-ring 1s ease-out 2.15s 2 both;
}
@keyframes zft-ds-ring {
  0% {
    opacity: 0;
    transform: none;
  }
  25% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(1.05, 1.16);
  }
}

/* 小鲸鱼：从屏幕后面向上探出来，之后不时扭一扭 */
.zft-whale-img {
  transform-origin: 50% 80%;
}
.is-playing .zft-whale {
  animation: zft-whale 0.6s cubic-bezier(0.3, 1.5, 0.5, 1) 1.8s both;
}
@keyframes zft-whale {
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
.is-playing .zft-whale-img {
  animation: zft-wiggle 4s ease-in-out 2.5s infinite;
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
  animation: zft-seal 0.5s cubic-bezier(0.3, 1.6, 0.5, 1) 2.35s both;
}
@keyframes zft-seal {
  from {
    opacity: 0;
    transform: translateY(-50%) scale(0.3);
  }
  to {
    opacity: 1;
    transform: translateY(-50%) scale(1);
  }
}

/* 手机：横幅图左移，包装盒在右半边；设备、小鲸鱼、卡片会压到文字，隐藏；
 * 「数据不出盒」会和标题挤在一起（副标题里已有这句），也隐藏 */
@media (max-width: 639px) {
  .zft-near,
  .zft-seal,
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
