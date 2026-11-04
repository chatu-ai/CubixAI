# CubixAI

Corporate website built with Vue 3, TypeScript, Vite and Tailwind CSS.

## Development

Use Node.js 22.12 or newer.

```sh
npm ci
npm run dev
```

## Validation and build

```sh
npm test
npm run build
npm run preview
```

The build runs Vue/TypeScript checks and writes production files to `dist/`.
Do not commit build output, `dist.zip`, or Python caches.

## Images

```sh
npm run images:convert
```

The converter losslessly encodes PNG/JPEG assets as WebP and updates their
references in source files. It also fixes PNG/JPEG content incorrectly named
`.webp`, without changing image dimensions or visible pixels. Existing WebP
images are left untouched, so repeated runs do not reduce image quality.
Invalid images and output-name conflicts fail before conversions are written;
existing target files are never intentionally overwritten.

```sh
npm run images:previews
```

This regenerates the six displayed certificate previews (up to 640 x 480).
The certificate carousel loads these previews lazily; clicking one opens the
unchanged original. Unreferenced images and the existing image registry are
preserved.

Vite optimizes production images separately during the build.

## Interface behavior

The contact-page language selector is only shown on contact pages and switches
between their existing localized routes. Other pages no longer navigate to
contact pages when changing contact language. Non-Chinese translation bundles
load on demand; the application waits for the initial language before mounting.

Unit tests cover gallery selection, image priority, certificate links, language
switching, and modal focus/scroll behavior. Run them separately with
`npm run test:unit`; `npm test` runs both script and interface tests.

## Deployment

GitHub Actions runs tests and builds on pushes to `main` or `master`, then
uploads `dist/` to Tencent COS and refreshes the CDN. The workflow can also be
started manually. Deployment requires the repository secrets referenced in
[the workflow](.github/workflows/ci.yml).
