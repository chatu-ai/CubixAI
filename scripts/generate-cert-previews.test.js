import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import { test } from 'node:test'
import sharp from 'sharp'
import { certificateFiles, generateCertificatePreviews } from './generate-cert-previews.js'

test('previews fit a double-density card without changing original or unused images', async (t) => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'cubixai-previews-'))
  t.after(() => fs.rm(root, { recursive: true, force: true }))
  const dir = path.join(root, 'src', 'assets', 'zz')
  await fs.mkdir(dir, { recursive: true })
  const source = await sharp({
    create: { width: 1300, height: 1600, channels: 3, background: '#eeeeee' },
  }).webp().toBuffer()
  for (const name of [...certificateFiles, 'unused.webp']) {
    await fs.writeFile(path.join(dir, name), source)
  }
  const results = await generateCertificatePreviews(root)
  assert.equal(results.length, 6)
  for (const name of certificateFiles) {
    const meta = await sharp(path.join(dir, 'previews', name)).metadata()
    assert.equal(meta.width, 390)
    assert.equal(meta.height, 480)
    assert.equal(meta.format, 'webp')
    assert.deepEqual(await fs.readFile(path.join(dir, name)), source)
  }
  assert.deepEqual(await fs.readFile(path.join(dir, 'unused.webp')), source)
  await assert.rejects(fs.access(path.join(dir, 'previews', 'unused.webp')), { code: 'ENOENT' })
})

test('small certificate previews are not enlarged', async (t) => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'cubixai-previews-'))
  t.after(() => fs.rm(root, { recursive: true, force: true }))
  const dir = path.join(root, 'src', 'assets', 'zz')
  await fs.mkdir(dir, { recursive: true })
  const source = await sharp({
    create: { width: 32, height: 48, channels: 3, background: '#ffffff' },
  }).webp().toBuffer()
  for (const name of certificateFiles) await fs.writeFile(path.join(dir, name), source)
  await generateCertificatePreviews(root)
  const meta = await sharp(path.join(dir, 'previews', certificateFiles[0])).metadata()
  assert.equal(meta.width, 32)
  assert.equal(meta.height, 48)
})
