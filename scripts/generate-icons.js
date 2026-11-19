// 把网站用到的 Iconify 图标从本地图标包（@iconify-json/*）抽出来，生成 src/icons/iconify-subset.json。
// 图标随网站一起打包，页面打开时不再从 api.iconify.design 下载（访客 IP 不会发给第三方）。
// 新增或更换图标后运行：npm run icons:generate
import fs from 'node:fs/promises'
import path from 'node:path'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const rootDir = path.resolve(path.dirname(__filename), '..')
const require = createRequire(import.meta.url)

export const PREFIXES = ['lucide', 'simple-icons']
export const OUTPUT = path.join('src', 'icons', 'iconify-subset.json')
const ICON_NAME = new RegExp(`\\b(${PREFIXES.join('|')}):([a-z0-9]+(?:-[a-z0-9]+)*)`, 'g')

async function listSourceFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const files = await Promise.all(
    entries.map((entry) => {
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) return listSourceFiles(full)
      return /\.(vue|ts|js)$/.test(entry.name) && !/\.test\.(ts|js)$/.test(entry.name) ? [full] : []
    }),
  )
  return files.flat()
}

/** 扫描 src 下所有源码里写到的图标名，例如 "lucide:arrow-right" */
export async function findUsedIcons(projectDir = rootDir) {
  const used = new Map(PREFIXES.map((prefix) => [prefix, new Set()]))
  for (const file of await listSourceFiles(path.join(projectDir, 'src'))) {
    const text = await fs.readFile(file, 'utf8')
    for (const [, prefix, name] of text.matchAll(ICON_NAME)) used.get(prefix).add(name)
  }
  return used
}

/** 从完整图标集里取出指定图标（含别名指向的原图标），保持 IconifyJSON 格式 */
export function subsetCollection(collection, names) {
  const subset = { prefix: collection.prefix, icons: {} }
  for (const key of ['width', 'height', 'left', 'top']) {
    if (collection[key] !== undefined) subset[key] = collection[key]
  }
  const missing = []
  const addIcon = (name) => {
    if (collection.icons[name]) {
      subset.icons[name] = collection.icons[name]
      return true
    }
    const alias = collection.aliases?.[name]
    if (alias && addIcon(alias.parent)) {
      subset.aliases ??= {}
      subset.aliases[name] = alias
      return true
    }
    return false
  }
  for (const name of [...names].sort()) {
    if (!addIcon(name)) missing.push(`${collection.prefix}:${name}`)
  }
  return { subset, missing }
}

export async function buildIconSubset(projectDir = rootDir) {
  const used = await findUsedIcons(projectDir)
  const collections = []
  const missing = []
  for (const prefix of PREFIXES) {
    const names = used.get(prefix)
    if (names.size === 0) continue
    const full = require(`@iconify-json/${prefix}/icons.json`)
    const result = subsetCollection(full, names)
    collections.push(result.subset)
    missing.push(...result.missing)
  }
  return { collections, missing }
}

if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  const { collections, missing } = await buildIconSubset()
  if (missing.length) {
    console.error(`这些图标在本地图标包里找不到：${missing.join(', ')}`)
    process.exit(1)
  }
  const out = path.join(rootDir, OUTPUT)
  await fs.mkdir(path.dirname(out), { recursive: true })
  await fs.writeFile(out, `${JSON.stringify(collections, null, 2)}\n`)
  const count = collections.reduce((n, c) => n + Object.keys(c.icons).length + Object.keys(c.aliases ?? {}).length, 0)
  console.log(`已生成 ${OUTPUT}：${count} 个图标`)
}
