// 逐帧录制首页横幅：第一张（搭积木动画）5 秒 → 切到第二张（ChatU）5 秒 → 切到第三张（智方体）4 秒，每秒 30 帧。
// 用法：node marketing/banner-video/capture.cjs <输出目录> <网站地址> <语言，如 zh-CN / en-US / ja-JP / ko-KR> [--vertical]
// 需要 Playwright（Chromium）。录制时暂停所有动画、逐帧推进时间，所以画面不会掉帧，和配乐严格对齐。
// --vertical：给竖屏版准备素材——按 2 倍分辨率录制，切换时跳过横向滑动（竖屏版自己做转场），
//             并把第二、三张文字块的位置写到 <输出目录>/layout.json，供 compose_vertical.py 裁剪重排。
const fs = require('node:fs')
const { chromium } = require('playwright')
const [out, base, locale, mode] = process.argv.slice(2)
const VERTICAL = mode === '--vertical'
const FPS = 30
// 各张录制时长，与 make_bgm.py 中的 SLIDE / SLIDE2 一致（5.0 秒、10.0 秒切换）
const SLIDE1 = 5.0
const SLIDE2 = 5.0
const SLIDE3 = 4.0 // 入场动画约 2.7 秒，之后停在结束画面

;(async () => {
  const browser = await chromium.launch()
  const ctx = await browser.newContext({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: VERTICAL ? 2 : 1, locale })
  await ctx.addInitScript(() => {
    try {
      localStorage.setItem('cookie-consent', 'rejected')
    } catch {}
    // 关掉横幅自动轮播（每张 5 秒 / 8 秒的定时器），由脚本控制切换时机
    const st = window.setTimeout
    window.setTimeout = (f, d, ...a) => (d >= 5000 ? 0 : st(f, d, ...a))
  })
  await ctx.route('**/hm.baidu.com/**', (r) => r.abort())
  const page = await ctx.newPage()
  // 各语言首页：中文 /，英文 /en，日文 /ja，韩文 /ko
  const prefix = { 'en-US': '/en', 'ja-JP': '/ja', 'ko-KR': '/ko' }[locale] || ''
  await page.goto(base + (prefix || '/'), { waitUntil: 'networkidle' })
  await page.waitForSelector('.hero-art.is-playing')
  // 视频里不显示切换按钮
  await page.addStyleTag({
    content: '[aria-roledescription="carousel"] > button, [aria-roledescription="carousel"] > div.absolute { display: none !important }',
  })
  const box = await page.locator('[aria-roledescription="carousel"]').boundingBox()
  const h = Math.round(box.height)
  const clip = { x: box.x, y: box.y, width: Math.round(box.width), height: h - (h % 2) }

  // 暂停所有动画并记下各自的起点；之后每一帧把时间设为「起点 + 帧时间」
  const seek = (ms) =>
    page.evaluate((ms) => {
      for (const a of document.getAnimations()) {
        if (!window.__base.has(a)) {
          a.pause()
          window.__base.set(a, a.currentTime || 0)
        }
        a.currentTime = window.__base.get(a) + ms
      }
    }, ms)
  // 第一张：横幅动画从 0 开始，其余（如第二张光环旋转）保持当前进度
  await page.evaluate(() => {
    window.__base = new Map()
    for (const a of document.getAnimations()) {
      a.pause()
      window.__base.set(a, a.effect?.target?.closest?.('.hero-art') ? 0 : a.currentTime || 0)
    }
  })
  let f = 0
  const shot = () => page.screenshot({ path: `${out}/f${String(f).padStart(4, '0')}.png`, clip })
  const record = async (seconds) => {
    for (let i = 0; i < Math.round(seconds * FPS); i++, f++) {
      await seek((i * 1000) / FPS)
      await shot()
    }
  }
  // 竖屏版要知道第二、三张文字块的位置（文字在第 n 张横幅里的那个 p 的外层）
  const layout = { scale: 2, clip }
  const textRect = (slide) =>
    page.evaluate((slide) => {
      const track = document.querySelector('[aria-roledescription="carousel"] .grid')
      const el = track.children[slide].querySelector('p')
      const r = el.parentElement.getBoundingClientRect()
      return { x: r.x, y: r.y, width: r.width, height: r.height }
    }, slide)
  // 点第 n 个指示点切换（开始 0.5 秒的滑动过渡），继续逐帧；新出现的入场动画从 0 开始
  const switchTo = async (slide, key) => {
    await page.evaluate((slide) => {
      for (const a of document.getAnimations()) a.play()
      const dots = [...document.querySelector('[aria-roledescription="carousel"] button[aria-current="true"]').parentElement.children]
      dots[slide].click()
    }, slide)
    await page.waitForTimeout(30)
    if (VERTICAL) {
      // 直接把横向滑动的过渡播完，从静止位置开始录
      await page.evaluate(() => {
        for (const a of document.getAnimations()) if (a instanceof CSSTransition) a.finish()
      })
      await page.waitForTimeout(50)
      layout[key] = await textRect(slide)
    }
    await page.evaluate(() => {
      window.__base = new Map()
      for (const a of document.getAnimations()) {
        a.pause()
        window.__base.set(a, a.currentTime || 0)
      }
    })
  }
  await record(SLIDE1)
  await switchTo(1, 'chatuText')
  await record(SLIDE2)
  await switchTo(2, 'zftText')
  await record(SLIDE3)
  if (VERTICAL) fs.writeFileSync(`${out}/layout.json`, JSON.stringify(layout, null, 1))
  console.log(`${locale}: ${f} frames, ${clip.width}×${clip.height}`)
  await browser.close()
})()
