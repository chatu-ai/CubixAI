<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'
import deviceUrl from '@/assets/hero/zft/device-front.webp'
import boxTopUrl from '@/assets/hero/zft/box-top.webp'
import boxFrontUrl from '@/assets/hero/zft/box-front.webp'
import boxSideUrl from '@/assets/hero/zft/box-side.webp'
import crabUrl from '@/assets/hero/zft/crab.webp'
import hermesUrl from '@/assets/hero/zft/hermes.webp'

/**
 * 首页第三张横幅：智方体（AgentStation）真实开箱。
 * 包装盒是天地盖：外面的盒盖（黑色顶面 + 金色「智方体 · AgentStation」、蓝色四周）整个罩住里面的黑色内盒，
 * 内盒里是黑色内托，智方体屏幕朝上平躺在凹槽里。全部用 CSS 3D 按真实比例搭在同一个透视空间里
 * （浏览器自动处理前后遮挡），贴图来自包装盒实拍视频和真机照片。
 *   放下：包装盒轻轻放到桌面；
 *   开盖：盒盖先慢慢往上拔（内盒被带起一点又落下），拔出后移到后面，竖着靠在内盒后沿上，金色标题正对观众；
 *   取出：智方体从内托里平着提起来，翻成竖直，打开背后支架，立在盒子左前方；
 *   开机：屏幕亮起 ChatU Mate 工作台，OpenClaw 龙虾探头，OpenClaw / Hermes「已就绪」，「数据不出盒」。
 * 地面阴影单独放在下面一层（永远在物体后面），龙虾在两层之间（从设备后面探出来）。
 * 位置用原图坐标（3392 × 1120，与第一张横幅同比例）按百分比摆放；3D 尺寸用 cqw（横幅宽度的 1%）。
 * 静止画面（未播放、减少动态效果）就是动画结束时的样子。手机上设备不取出，留在盒里开机。
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

// 透视空间原点（包装盒中心）、龙虾、卡片、封盖标签的位置（原图坐标）
const ORIGIN = at(2740, 625)
const CRAB: Box = [2185, 262, 2335, 400]
const CARDS_AT = at(2510, 915)
const SEAL_AT = at(2420, 190)

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
      <!-- 地面阴影：单独一层，永远在物体后面 -->
      <div class="zft-scene zft-shadows" :style="ORIGIN">
        <div class="zft-world">
          <span class="sh sh-box" />
          <span class="sh sh-lid" />
          <span class="sh sh-dev" />
          <span class="sh sh-dev-edge" />
        </div>
      </div>

      <!-- 龙虾：在设备后面，从屏幕上沿探出来 -->
      <div class="zft-crab absolute" :style="box(CRAB)">
        <img :src="crabUrl" alt="" class="zft-crab-img w-full h-full" draggable="false" />
      </div>

      <!-- 包装盒、设备：同一个 3D 空间 -->
      <div class="zft-scene zft-main" :style="ORIGIN">
        <div class="zft-world">
          <div class="zft-boxgrp">
            <!-- 内盒（黑色）+ 内托，设备平躺在内托凹槽里 -->
            <div class="zft-base">
              <div class="w w-back" />
              <div class="w w-left" />
              <div class="w w-front" />
              <div class="w w-right" />
              <div class="zft-insert">
                <span class="zft-recess"><span class="zft-notch" /></span>
              </div>

              <div class="zft-dev">
                <div class="d d-front">
                  <img :src="deviceUrl" alt="" draggable="false" />
                  <span class="zft-screen-off" />
                  <span class="zft-screen-glow" />
                </div>
                <div class="d d-back" />
                <div class="d d-top" />
                <div class="d d-bottom" />
                <div class="d d-left" />
                <div class="d d-right" />
                <div class="d d-stand" />
              </div>
            </div>

            <!-- 盒盖：黑色顶面 + 蓝色四周 -->
            <div class="zft-lid">
              <div class="f f-back" />
              <div class="f f-left" />
              <div class="f f-front" />
              <div class="f f-right" />
              <div class="f f-top"><span class="zft-glint" /></div>
            </div>
          </div>
        </div>
      </div>

      <!-- 「数据不出盒」 -->
      <div class="zft-seal" :style="SEAL_AT">
        <span class="zft-seal-icon"><Icon icon="lucide:lock-keyhole" /></span>
        <span class="zft-seal-text">{{ t('home.hero.zft.seal') }}</span>
      </div>

      <!-- 智能体卡片：OpenClaw、Hermes「已就绪」 -->
      <div class="zft-cards" :style="CARDS_AT">
        <div class="zft-card" style="animation-delay: 4.05s">
          <span class="zft-avatar zft-avatar-claw"><img :src="crabUrl" alt="" draggable="false" /></span>
          <span class="zft-card-name">OpenClaw <em>{{ t('home.hero.zft.ready') }}</em></span>
        </div>
        <div class="zft-card" style="animation-delay: 4.2s">
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
  /* 盒盖外形：实物长 : 宽 : 高 ≈ 1.3 : 1 : 0.5 */
  --bw: 16.5cqw;
  --bd: 12.69cqw;
  --bh: 6.35cqw;
  /* 内盒：比盒盖四周各小一点、矮一点 */
  --iw: 16.1cqw;
  --id: 12.29cqw;
  --ih: 6cqw;
  /* 设备：长 × 高 × 厚（正面图 922 × 606） */
  --dw: 15cqw;
  --dh: 9.86cqw;
  --dt: 1cqw;
  --blue: 64, 150, 255;
}

/* ---------- 底 ---------- */
.zft-bg {
  background:
    radial-gradient(ellipse 30% 55% at 76% 48%, rgba(var(--blue), 0.16), rgba(var(--blue), 0) 70%),
    radial-gradient(ellipse 40% 60% at 100% 0%, rgba(120, 190, 255, 0.28), rgba(120, 190, 255, 0) 70%),
    radial-gradient(ellipse 35% 50% at 0% 100%, rgba(150, 200, 255, 0.25), rgba(150, 200, 255, 0) 70%),
    linear-gradient(180deg, #f7faff 0%, #eaf2ff 100%);
}

/* ---------- 3D 空间 ----------
 * 原点在包装盒中心，y 向下为正，地面在 y = 盒高 / 2 = 3.175cqw，z 向观众为正。 */
.zft-scene {
  position: absolute;
  width: 0;
  height: 0;
  perspective: 120cqw;
}
.zft-shadows {
  z-index: 1;
}
.zft-crab {
  z-index: 2;
}
.zft-main {
  z-index: 3;
}
.zft-world,
.zft-boxgrp,
.zft-base,
.zft-lid,
.zft-dev {
  position: absolute;
  transform-style: preserve-3d;
}
/* 镜头：从右前上方往下看 */
.zft-world {
  transform: rotateX(-24deg) rotateY(-27deg);
}
.w,
.f,
.d,
.sh,
.zft-insert {
  position: absolute;
  backface-visibility: visible;
}

/* ---------- 地面阴影 ---------- */
.sh {
  border-radius: 1.2cqw;
}
.sh-box {
  width: calc(var(--bw) + 1cqw);
  height: calc(var(--bd) + 1cqw);
  left: calc((var(--bw) + 1cqw) / -2);
  top: calc((var(--bd) + 1cqw) / -2);
  background: rgba(20, 40, 85, 0.3);
  box-shadow: 0 0 2.2cqw 1cqw rgba(20, 40, 85, 0.24);
  transform: translate3d(0, 3.2cqw, 0) rotateX(90deg);
}
/* 竖着靠在内盒后面的盒盖 */
.sh-lid {
  width: var(--bw);
  height: 6.6cqw;
  left: calc(var(--bw) / -2);
  top: -3.3cqw;
  background: rgba(20, 40, 85, 0.22);
  box-shadow: 0 0 1.8cqw 0.6cqw rgba(20, 40, 85, 0.18);
  transform: translate3d(0, 3.2cqw, -10.4cqw) rotateX(90deg);
}
/* 立在桌上的设备：底边和支架之间 */
.sh-dev {
  width: calc(var(--dw) + 0.6cqw);
  height: 4cqw;
  left: calc((var(--dw) + 0.6cqw) / -2);
  top: -2cqw;
  border-radius: 50%;
  background: radial-gradient(closest-side, rgba(15, 35, 80, 0.36), rgba(15, 35, 80, 0.16) 60%, rgba(15, 35, 80, 0) 100%);
  transform: translate3d(-17.4cqw, 3.2cqw, 6.6cqw) rotateY(20deg) translateZ(-0.5cqw) rotateX(90deg);
}
/* 设备底边贴着桌面的那条接触阴影 */
.sh-dev-edge {
  width: var(--dw);
  height: 0.7cqw;
  left: calc(var(--dw) / -2);
  top: -0.35cqw;
  border-radius: 50%;
  background: rgba(10, 25, 60, 0.45);
  box-shadow: 0 0 0.5cqw 0.15cqw rgba(10, 25, 60, 0.3);
  transform: translate3d(-17.4cqw, 3.2cqw, 6.6cqw) rotateY(20deg) translateZ(0.75cqw) rotateX(90deg);
}

/* ---------- 内盒、内托 ---------- */
/* 内盒中心高度：地面 3.175 − 内盒高 6 / 2 = 0.175cqw */
.w {
  height: var(--ih);
  top: calc(var(--ih) / -2);
  box-shadow: inset 0 0.08cqw 0 rgba(255, 255, 255, 0.16);
}
.w-front,
.w-back {
  width: calc(var(--iw) + 0.06cqw);
  left: calc((var(--iw) + 0.06cqw) / -2);
}
.w-left,
.w-right {
  width: calc(var(--id) + 0.06cqw);
  left: calc((var(--id) + 0.06cqw) / -2);
}
/* 外侧看得到的两面 */
.w-front {
  background: linear-gradient(180deg, #2a303c, #1a1e27);
  transform: translate3d(0, 0.175cqw, calc(var(--id) / 2));
}
.w-right {
  background: linear-gradient(180deg, #222731, #14171e);
  transform: translate3d(calc(var(--iw) / 2), 0.175cqw, 0) rotateY(90deg);
}
/* 只看得到里侧的两面：越往下越暗 */
.w-back {
  background: linear-gradient(180deg, #2d3340 0%, #151921 55%);
  transform: translate3d(0, 0.175cqw, calc(var(--id) / -2)) rotateY(180deg);
}
.w-left {
  background: linear-gradient(180deg, #292f3b 0%, #12151c 55%);
  transform: translate3d(calc(var(--iw) / -2), 0.175cqw, 0) rotateY(-90deg);
}
/* 内托顶面比内盒口低 1.6cqw */
.zft-insert {
  width: var(--iw);
  height: var(--id);
  left: calc(var(--iw) / -2);
  top: calc(var(--id) / -2);
  background: linear-gradient(180deg, #1d222b, #232833);
  transform: translate3d(0, -1.225cqw, 0) rotateX(90deg);
}
/* 放设备的凹槽，前沿有一个方便抠出来的半圆缺口 */
.zft-recess {
  position: absolute;
  left: 0.5cqw;
  right: 0.5cqw;
  top: 1.15cqw;
  bottom: 1.15cqw;
  border-radius: 0.7cqw;
  background: #10131a;
  box-shadow:
    inset 0 0.45cqw 0.7cqw rgba(0, 0, 0, 0.9),
    0 0.08cqw 0 rgba(255, 255, 255, 0.07);
}
.zft-notch {
  position: absolute;
  left: 50%;
  bottom: -1.1cqw;
  width: 2.4cqw;
  height: 2.4cqw;
  margin-left: -1.2cqw;
  border-radius: 50%;
  background: #10131a;
  box-shadow: inset 0 0.4cqw 0.5cqw rgba(0, 0, 0, 0.85);
}

/* ---------- 盒盖 ---------- */
.f {
  background-size: 100% 100%;
}
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
.f-top {
  width: var(--bw);
  height: var(--bd);
  left: calc(var(--bw) / -2);
  top: calc(var(--bd) / -2);
  background-image: var(--tex-top);
  transform: rotateX(90deg) translateZ(calc(var(--bh) / 2));
  overflow: hidden;
}
/* 盒盖印刷面上周期性扫过的反光 */
.zft-glint {
  position: absolute;
  inset: 0;
  background: linear-gradient(115deg, rgba(255, 255, 255, 0) 40%, rgba(255, 240, 200, 0.3) 48%, rgba(255, 255, 255, 0) 56%);
  background-size: 300% 100%;
  background-position: 100% 0;
}
/* 盒盖最终竖着靠在内盒后沿上：顶面正对观众，略向前倾 */
.zft-lid {
  transform: translate3d(0, -3.465cqw, -9.32cqw) rotateY(0deg) rotateX(-96deg) rotateZ(0deg);
}

/* ---------- 设备 ---------- */
/* 最终立在盒子左前方：背后支架撑着，向后仰 15°，转向观众 */
.zft-dev {
  transform: translate3d(-17.4cqw, -1.715cqw, 6.6cqw) rotateY(20deg) rotateX(15deg);
}
.d-front,
.d-back {
  width: var(--dw);
  height: var(--dh);
  left: calc(var(--dw) / -2);
  top: calc(var(--dh) / -2);
  border-radius: 0.62cqw;
}
.d-front {
  transform: translateZ(calc(var(--dt) / 2));
}
.d-front img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
.d-back {
  background: linear-gradient(180deg, #4a4f57, #33373e);
  transform: rotateY(180deg) translateZ(calc(var(--dt) / 2));
}
/* 四条边：铝合金 */
.d-top,
.d-bottom {
  width: calc(var(--dw) - 0.7cqw);
  height: var(--dt);
  left: calc((var(--dw) - 0.7cqw) / -2);
  top: calc(var(--dt) / -2);
}
.d-top {
  background:
    repeating-linear-gradient(90deg, transparent 0 62%, rgba(20, 24, 30, 0.75) 62% 66%, transparent 66% 70%) 58% 50% / 1.2cqw 40% no-repeat,
    linear-gradient(180deg, #d5dae1, #a9b0ba);
  transform: rotateX(90deg) translateZ(calc(var(--dh) / 2));
}
.d-bottom {
  background: linear-gradient(180deg, #8d949e, #6b727c);
  transform: rotateX(-90deg) translateZ(calc(var(--dh) / 2));
}
.d-left,
.d-right {
  width: var(--dt);
  height: calc(var(--dh) - 0.7cqw);
  left: calc(var(--dt) / -2);
  top: calc((var(--dh) - 0.7cqw) / -2);
}
.d-right {
  background: linear-gradient(90deg, #b9c0c9, #9198a2);
  transform: rotateY(90deg) translateZ(calc(var(--dw) / 2));
}
.d-left {
  background: linear-gradient(90deg, #9198a2, #b9c0c9);
  transform: rotateY(-90deg) translateZ(calc(var(--dw) / 2));
}
/* 背后支架：铰链在背面中部，打开 30° 撑在桌上 */
.d-stand {
  width: calc(var(--dw) * 0.76);
  height: calc(var(--dh) * 0.52);
  left: calc(var(--dw) * -0.38);
  top: calc(var(--dh) * -0.02);
  border-radius: 0 0 0.4cqw 0.4cqw;
  background: linear-gradient(180deg, #3d4148, #2c3036);
  transform-origin: 50% 0;
  transform: translateZ(calc(var(--dt) / -2 - 0.04cqw)) rotateX(-30deg);
}
/* 屏幕：熄屏时是带反光的黑玻璃，开机后显示工作台（device-front.webp 922 × 606 中屏幕在 60,37 – 860,537） */
.zft-screen-off,
.zft-screen-glow {
  position: absolute;
  left: 6.5%;
  top: 6.1%;
  width: 86.8%;
  height: 82.5%;
  border-radius: 0.1cqw;
  pointer-events: none;
  opacity: 0;
}
.zft-screen-off {
  background:
    linear-gradient(118deg, rgba(255, 255, 255, 0.13) 0%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0) 31%),
    #060b16;
}
.zft-screen-glow {
  background: radial-gradient(ellipse at 50% 50%, rgba(140, 190, 255, 0.95), rgba(60, 110, 230, 0.75) 60%, rgba(20, 50, 140, 0.7));
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

/* ============ 动画 ============
 * 时间线（秒）：0 包装盒放到桌上 → 0.9 盒盖慢慢往上拔（1.25 内盒被带起又落下）→ 1.45 拔出 → 2.3 盒盖靠到内盒后面
 * → 2.4 设备从内托里平着提起 → 2.85 翻成竖直、打开支架 → 3.35 立在桌上 → 3.45 屏幕开机
 * → 3.95 龙虾探头 → 4.05 卡片 → 4.3「数据不出盒」。 */
.is-waiting .zft-stage {
  opacity: 0;
}
/* 注意：带 preserve-3d 的元素上不能做 opacity 动画（浏览器会把 3D 压平），淡入放在外层 .zft-scene 上 */
.is-playing .zft-scene {
  animation: zft-fade 0.15s linear both;
}
@keyframes zft-fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* 放下：从低处轻轻落到桌面，稍微一顿 */
.is-playing .zft-boxgrp {
  animation: zft-place 0.75s linear both;
}
@keyframes zft-place {
  0% {
    transform: translateY(-5cqw);
    animation-timing-function: cubic-bezier(0.45, 0, 0.85, 0.5);
  }
  60% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  72% {
    transform: translateY(-0.35cqw);
    animation-timing-function: ease-in;
  }
  84%,
  100% {
    transform: translateY(0);
  }
}
.is-playing .sh-box {
  animation: zft-sh-box 0.75s linear both;
}
@keyframes zft-sh-box {
  0% {
    opacity: 0;
    transform: translate3d(0, 3.2cqw, 0) rotateX(90deg) scale(1.15);
    animation-timing-function: ease-in;
  }
  60%,
  100% {
    opacity: 1;
    transform: translate3d(0, 3.2cqw, 0) rotateX(90deg) scale(1);
  }
}

/* 开盖：天地盖拔得慢，先一点点往上（内盒被带起来），松开后快速拔出，移到后面竖着靠在内盒后沿 */
.is-playing .zft-lid {
  animation: zft-lid 2.45s linear both;
}
@keyframes zft-lid {
  0%,
  36.7% {
    transform: translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg) rotateZ(0deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  /* 1.3s：拔起 1.2cqw，微微歪一点 */
  53% {
    transform: translate3d(0, -1.2cqw, 0) rotateY(0deg) rotateX(0deg) rotateZ(1.2deg);
    animation-timing-function: cubic-bezier(0.3, 0, 0.2, 1);
  }
  /* 1.65s：完全拔出，盒盖下沿高过内盒口 */
  67.3% {
    transform: translate3d(0.3cqw, -7.6cqw, 0.2cqw) rotateY(0deg) rotateX(0deg) rotateZ(-0.8deg);
    animation-timing-function: ease-in-out;
  }
  /* 1.95s：往后移，同时立起来 */
  79.6% {
    transform: translate3d(0.2cqw, -8.5cqw, -6.5cqw) rotateY(0deg) rotateX(-55deg) rotateZ(-0.4deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  /* 2.3s：靠到内盒后沿上 */
  93.9% {
    transform: translate3d(0, -3.465cqw, -9.32cqw) rotateY(0deg) rotateX(-97.5deg) rotateZ(0deg);
    animation-timing-function: ease-out;
  }
  100% {
    transform: translate3d(0, -3.465cqw, -9.32cqw) rotateY(0deg) rotateX(-96deg) rotateZ(0deg);
  }
}
.is-playing .sh-lid {
  animation: zft-sh-on 0.35s ease-out 2.05s both;
}
/* 盒盖拔出时内盒被带起一点又落下 */
.is-playing .zft-base {
  animation: zft-tug 0.5s linear 1.1s both;
}
@keyframes zft-tug {
  0% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  40% {
    transform: translateY(-0.4cqw);
    animation-timing-function: ease-in;
  }
  70% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  82% {
    transform: translateY(-0.08cqw);
    animation-timing-function: ease-in;
  }
  100% {
    transform: translateY(0);
  }
}
.is-playing .zft-glint {
  animation: zft-glint 5s ease-in-out 4.6s infinite;
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

/* 取出：从内托里平着提起 → 翻成竖直、移到盒子左前方 → 轻轻放到桌上 */
.is-playing .zft-dev {
  animation: zft-dev 1.05s linear 2.4s both;
}
@keyframes zft-dev {
  0% {
    transform: translate3d(0, -1.725cqw, 0) rotateY(0deg) rotateX(90deg);
    animation-timing-function: cubic-bezier(0.35, 0, 0.4, 1);
  }
  /* 2.8s：提出内盒口 */
  38% {
    transform: translate3d(0, -7cqw, 0.6cqw) rotateY(0deg) rotateX(88deg);
    animation-timing-function: ease-in-out;
  }
  /* 3.1s：边移边立起来 */
  67% {
    transform: translate3d(-10cqw, -5.6cqw, 5cqw) rotateY(13deg) rotateX(38deg);
    animation-timing-function: ease-out;
  }
  /* 3.3s：快到桌面 */
  86% {
    transform: translate3d(-17.2cqw, -2.05cqw, 6.6cqw) rotateY(20deg) rotateX(15deg);
    animation-timing-function: ease-in-out;
  }
  100% {
    transform: translate3d(-17.4cqw, -1.715cqw, 6.6cqw) rotateY(20deg) rotateX(15deg);
  }
}
.is-playing .d-stand {
  animation: zft-stand 0.3s ease-in-out 2.95s both;
}
@keyframes zft-stand {
  from {
    transform: translateZ(calc(var(--dt) / -2 - 0.04cqw)) rotateX(0deg);
  }
  to {
    transform: translateZ(calc(var(--dt) / -2 - 0.04cqw)) rotateX(-30deg);
  }
}
.is-playing .sh-dev,
.is-playing .sh-dev-edge {
  animation: zft-sh-on 0.35s ease-in 3.1s both;
}
@keyframes zft-sh-on {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* 开机：黑屏 → 背光亮起 → 工作台 */
.is-playing .zft-screen-off {
  animation: zft-screen-off 3.9s linear both;
}
@keyframes zft-screen-off {
  0%,
  89% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.is-playing .zft-screen-glow {
  animation: zft-screen-glow 0.6s ease-out 3.45s both;
}
@keyframes zft-screen-glow {
  0% {
    opacity: 0;
  }
  35% {
    opacity: 0.85;
  }
  100% {
    opacity: 0;
  }
}

/* 龙虾：从屏幕后面向上探出来，之后不时扭一扭 */
.zft-crab-img {
  transform-origin: 50% 80%;
}
.is-playing .zft-crab {
  animation: zft-crab 0.6s cubic-bezier(0.3, 1.5, 0.5, 1) 3.95s both;
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
  animation: zft-wiggle 4s ease-in-out 4.6s infinite;
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
  animation: zft-seal 0.5s cubic-bezier(0.3, 1.6, 0.5, 1) 4.3s both;
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

/* 手机：横幅图左移，包装盒在右半边；设备不取出，留在内托里开机；
 * 龙虾、卡片放不下，「数据不出盒」会和标题挤在一起（副标题里已有这句），都隐藏 */
@media (max-width: 639px) {
  .zft-dev,
  .is-playing .zft-dev {
    animation: none;
    transform: translate3d(0, -1.725cqw, 0) rotateY(0deg) rotateX(90deg);
  }
  .d-stand,
  .is-playing .d-stand {
    animation: none;
    transform: translateZ(calc(var(--dt) / -2 - 0.04cqw));
  }
  .sh-dev,
  .sh-dev-edge,
  .zft-crab,
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
