import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
import path from 'node:path'
import { test } from 'node:test'
import { fileURLToPath } from 'node:url'
import { buildIconSubset, OUTPUT, subsetCollection } from './generate-icons.js'

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

test('committed icon subset matches every icon used in src', async () => {
  const { collections, missing } = await buildIconSubset(rootDir)
  assert.deepEqual(missing, [], 'some icons used in src do not exist in the local icon packages')
  const committed = JSON.parse(await fs.readFile(path.join(rootDir, OUTPUT), 'utf8'))
  assert.deepEqual(
    committed,
    collections,
    `${OUTPUT} is out of date: run "npm run icons:generate" after adding or changing icons`,
  )
})

test('subset keeps aliases together with their parent icon and reports unknown names', () => {
  const collection = {
    prefix: 'demo',
    width: 24,
    height: 24,
    icons: { a: { body: '<path/>' }, b: { body: '<g/>' } },
    aliases: { 'a-alias': { parent: 'a' } },
  }
  const { subset, missing } = subsetCollection(collection, new Set(['a-alias', 'nope']))
  assert.deepEqual(subset, {
    prefix: 'demo',
    width: 24,
    height: 24,
    icons: { a: { body: '<path/>' } },
    aliases: { 'a-alias': { parent: 'a' } },
  })
  assert.deepEqual(missing, ['demo:nope'])
})
