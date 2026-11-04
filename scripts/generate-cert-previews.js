import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const filename = fileURLToPath(import.meta.url)
const rootDir = path.resolve(path.dirname(filename), '..')

export const certificateFiles = [
  '图片1.webp',
  '图片2.webp',
  '图片3.webp',
  '图片4.webp',
  'CubixAI大模型调度系统证书_01.webp',
  '企业智能销售后台管理系统证书_01.webp',
]

export async function generateCertificatePreviews(projectDir = rootDir) {
  const certificatesDir = path.join(projectDir, 'src', 'assets', 'zz')
  const previewsDir = path.join(certificatesDir, 'previews')
  await fs.mkdir(previewsDir, { recursive: true })
  const results = []
  for (const name of certificateFiles) {
    const source = await fs.readFile(path.join(certificatesDir, name))
    const preview = await sharp(source)
      .resize({ width: 640, height: 480, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 90, effort: 4 })
      .toBuffer()
    await fs.writeFile(path.join(previewsDir, name), preview)
    results.push({ name, originalBytes: source.length, previewBytes: preview.length })
  }
  return results
}

if (process.argv[1] && path.resolve(process.argv[1]) === filename) {
  generateCertificatePreviews()
    .then((results) => {
      for (const result of results) {
        console.log(`${result.name}: ${result.originalBytes} -> ${result.previewBytes} bytes`)
      }
    })
    .catch((error) => {
      console.error(error)
      process.exitCode = 1
    })
}
