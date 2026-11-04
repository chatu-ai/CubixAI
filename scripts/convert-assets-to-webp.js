import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')
const imageExts = ['.png', '.jpg', '.jpeg', '.webp']
const codeExts = ['.vue', '.ts', '.js', '.css', '.scss']

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true, recursive: true })
  const files = []
  for (const entry of entries) {
    if (entry.isFile()) {
      files.push(path.join(entry.parentPath ?? entry.path, entry.name))
    }
  }
  return files
}

export async function convertAssets(projectDir = rootDir) {
  const assetsDir = path.join(projectDir, 'src', 'assets')
  const srcDir = path.join(projectDir, 'src')
  const allFiles = await walk(assetsDir)
  const imageFiles = allFiles.filter((f) =>
    imageExts.includes(path.extname(f).toLowerCase())
  )
  const conversions = []

  for (const file of imageFiles) {
    const input = await fs.readFile(file)
    const metadata = await sharp(input).metadata()
    if (path.extname(file) === '.webp' && metadata.format === 'webp') {
      continue
    }
    if (!['png', 'jpeg', 'webp'].includes(metadata.format) || metadata.pages > 1) {
      throw new Error(`Unsupported image: ${path.relative(projectDir, file)}`)
    }
    const webpFile = file.replace(/\.(png|jpe?g|webp)$/i, '.webp')
    if (file !== webpFile && allFiles.includes(webpFile)) {
      throw new Error(`Output already exists: ${path.relative(projectDir, webpFile)}`)
    }
    if (conversions.some((item) => item.webpFile === webpFile)) {
      throw new Error(`Duplicate output: ${path.relative(projectDir, webpFile)}`)
    }
    const output = await sharp(input).webp({ lossless: true, effort: 4 }).toBuffer()
    conversions.push({ file, webpFile, input, output })
  }

  // Validate and prepare every conversion before changing any source files.
  const srcFiles = (await walk(srcDir)).filter((f) =>
    codeExts.includes(path.extname(f).toLowerCase())
  )
  const references = conversions.filter(({ file, webpFile }) => file !== webpFile)
  const updates = []
  for (const file of srcFiles) {
    const content = await fs.readFile(file, 'utf8')
    let newContent = content
    for (const conversion of references) {
      const oldName = path.relative(assetsDir, conversion.file).split(path.sep).join('/')
      const newName = path.relative(assetsDir, conversion.webpFile).split(path.sep).join('/')
      const escapedName = oldName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      const pattern = new RegExp(
        `((?:@/|(?:\\.\\./)+|\\./|/)assets/)${escapedName}(?=['"\`\\s)?#]|$)`,
        'g'
      )
      newContent = newContent.replace(pattern, (_match, prefix) => prefix + newName)
    }
    if (newContent !== content) {
      updates.push({ file, content: newContent })
    }
  }

  for (const { file, webpFile, output } of conversions) {
    await fs.writeFile(webpFile, output, { flag: file === webpFile ? 'w' : 'wx' })
  }
  for (const { file, content } of updates) {
    await fs.writeFile(file, content, 'utf8')
  }
  for (const { file, webpFile } of references) {
    await fs.unlink(file)
  }

  return {
    converted: conversions.length,
    updatedFiles: updates.length,
    bytesBefore: conversions.reduce((total, item) => total + item.input.length, 0),
    bytesAfter: conversions.reduce((total, item) => total + item.output.length, 0),
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  convertAssets()
    .then(({ converted, updatedFiles, bytesBefore, bytesAfter }) => {
      console.log(`Converted ${converted} images; updated ${updatedFiles} source files`)
      console.log(`Image bytes: ${bytesBefore} -> ${bytesAfter}`)
    })
    .catch((err) => {
      console.error(err)
      process.exitCode = 1
    })
}
