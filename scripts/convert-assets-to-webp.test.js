import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import { test } from 'node:test'
import sharp from 'sharp'
import { convertAssets } from './convert-assets-to-webp.js'

async function fixture(t) {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'cubixai-images-'))
  await fs.mkdir(path.join(root, 'src', 'assets'), { recursive: true })
  t.after(() => fs.rm(root, { recursive: true, force: true }))
  return root
}

async function png() {
  return sharp({
    create: {
      width: 8,
      height: 6,
      channels: 4,
      background: { r: 32, g: 96, b: 160, alpha: 0.5 },
    },
  }).png().toBuffer()
}

test('fixes mislabeled PNG losslessly and is idempotent', async (t) => {
  const root = await fixture(t)
  const file = path.join(root, 'src', 'assets', 'image.webp')
  const original = await png()
  await fs.writeFile(file, original)

  const result = await convertAssets(root)
  assert.equal(result.converted, 1)
  assert.equal(result.updatedFiles, 0)
  const converted = await fs.readFile(file)
  const metadata = await sharp(converted).metadata()
  assert.equal(metadata.format, 'webp')
  assert.equal(metadata.width, 8)
  assert.equal(metadata.height, 6)
  assert.equal(metadata.hasAlpha, true)
  assert.deepEqual(
    await sharp(converted).raw().toBuffer(),
    await sharp(original).raw().toBuffer()
  )

  assert.equal((await convertAssets(root)).converted, 0)
  assert.deepEqual(await fs.readFile(file), converted)
})

test('leaves valid WebP files byte-for-byte unchanged', async (t) => {
  const root = await fixture(t)
  const file = path.join(root, 'src', 'assets', 'valid.webp')
  const original = await sharp(await png()).webp().toBuffer()
  await fs.writeFile(file, original)
  assert.equal((await convertAssets(root)).converted, 0)
  assert.deepEqual(await fs.readFile(file), original)
})

test('updates exact references including spaces, uppercase extensions and CSS URLs', async (t) => {
  const root = await fixture(t)
  const assets = path.join(root, 'src', 'assets')
  await fs.mkdir(path.join(assets, 'nested'))
  const oldFile = path.join(assets, 'nested', 'photo (1).PNG')
  await fs.writeFile(oldFile, await png())
  const codeFile = path.join(root, 'src', 'example.vue')
  const content = [
    "import img from '@/assets/nested/photo (1).PNG'",
    'new URL("../assets/nested/photo (1).PNG", import.meta.url)',
    'url(/assets/nested/photo (1).PNG)',
    "const query = './assets/nested/photo (1).PNG?v=1'",
    "const unrelated = '@/assets/nested/photo (1).PNG.backup'",
    "const missing = '@/assets/missing.png'",
  ].join('\n')
  await fs.writeFile(codeFile, content)

  const result = await convertAssets(root)
  assert.equal(result.converted, 1)
  assert.equal(result.updatedFiles, 1)
  assert.equal((await sharp(path.join(assets, 'nested', 'photo (1).webp')).metadata()).format, 'webp')
  await assert.rejects(fs.access(oldFile), { code: 'ENOENT' })
  assert.equal(
    await fs.readFile(codeFile, 'utf8'),
    content.replaceAll('photo (1).PNG', 'photo (1).webp')
      .replace('photo (1).webp.backup', 'photo (1).PNG.backup')
  )
})

test('converts JPEG inputs without changing decoded pixels', async (t) => {
  const root = await fixture(t)
  const original = await sharp(await png()).jpeg().toBuffer()
  await fs.writeFile(path.join(root, 'src', 'assets', 'photo.jpg'), original)
  await convertAssets(root)
  assert.deepEqual(
    await sharp(path.join(root, 'src', 'assets', 'photo.webp')).raw().toBuffer(),
    await sharp(original).raw().toBuffer()
  )
})

test('rejects existing output names without changing either image', async (t) => {
  const root = await fixture(t)
  const pngFile = path.join(root, 'src', 'assets', 'image.png')
  const webpFile = path.join(root, 'src', 'assets', 'image.webp')
  const original = await png()
  const existing = await sharp(original).webp().toBuffer()
  await fs.writeFile(pngFile, original)
  await fs.writeFile(webpFile, existing)
  await assert.rejects(convertAssets(root), /Output already exists/)
  assert.deepEqual(await fs.readFile(pngFile), original)
  assert.deepEqual(await fs.readFile(webpFile), existing)
})

test('rejects duplicate output names before writing any conversion', async (t) => {
  const root = await fixture(t)
  const assets = path.join(root, 'src', 'assets')
  await fs.writeFile(path.join(assets, 'image.png'), await png())
  await fs.writeFile(path.join(assets, 'image.jpg'), await sharp(await png()).jpeg().toBuffer())
  await assert.rejects(convertAssets(root), /Duplicate output/)
  await assert.rejects(fs.access(path.join(assets, 'image.webp')), { code: 'ENOENT' })
})

test('invalid input fails before changing other images or references', async (t) => {
  const root = await fixture(t)
  const assets = path.join(root, 'src', 'assets')
  const original = await png()
  const codeFile = path.join(root, 'src', 'example.ts')
  const code = "import img from '@/assets/valid.png'"
  await fs.writeFile(path.join(assets, 'valid.png'), original)
  await fs.writeFile(path.join(assets, 'broken.webp'), 'not an image')
  await fs.writeFile(codeFile, code)
  await assert.rejects(convertAssets(root), /unsupported image format/i)
  assert.deepEqual(await fs.readFile(path.join(assets, 'valid.png')), original)
  assert.equal(await fs.readFile(codeFile, 'utf8'), code)
  await assert.rejects(fs.access(path.join(assets, 'valid.webp')), { code: 'ENOENT' })
})
