/**
 * 构建后为每个页面地址生成一份网页文件（npm run build 的最后一步）。
 * 原理见 src/seo/staticPages.ts。
 *
 * 输出：
 *   dist/index.html            首页（加上各语言版本链接）
 *   dist-routes/manifest.json  [{ key: 'en/products/chatu', file: '001.html' }, ...]
 *   dist-routes/NNN.html       各页面的网页文件
 * 不放进 dist/：/en 和 /en/products/chatu 在 COS 里分别是文件 en 和 en/products/chatu，
 * 本地文件系统里 en 不能既是文件又是文件夹；而且这些文件没有扩展名，要单独按网页类型上传（scripts/upload_route_pages.py）。
 */
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { runnerImport } from 'vite'

const root = fileURLToPath(new URL('..', import.meta.url))
const distDir = `${root}dist`
const outDir = `${root}dist-routes`

const { module } = await runnerImport(`${root}src/seo/staticPages.ts`, {
  root,
  configFile: false,
  logLevel: 'error',
  resolve: { alias: { '@': `${root}src` } },
})

const indexHtml = await readFile(`${distDir}/index.html`, 'utf8')
const pages = module.staticPages()

await rm(outDir, { recursive: true, force: true })
await mkdir(outDir, { recursive: true })
const manifest = []
let n = 0
for (const page of pages) {
  const html = module.renderPage(indexHtml, page)
  if (page.key === '') {
    await writeFile(`${distDir}/index.html`, html)
    continue
  }
  const file = `${String(++n).padStart(3, '0')}.html`
  await writeFile(`${outDir}/${file}`, html)
  manifest.push({ key: page.key, file })
}
await writeFile(`${outDir}/manifest.json`, `${JSON.stringify(manifest, null, 2)}\n`)
console.log(`已生成 ${manifest.length} 个页面的网页文件（dist-routes/），首页 dist/index.html 已加上各语言版本链接`)
