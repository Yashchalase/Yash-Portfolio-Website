// Renders the app to static HTML so crawlers and first paint get real content.
// Runs after `vite build` (client) and `vite build --ssr` (server bundle).
import { readFile, writeFile, rm } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const dist = resolve('dist')
const ssrDir = resolve('dist-ssr')

const template = await readFile(resolve(dist, 'index.html'), 'utf8')
const { render } = await import(pathToFileURL(resolve(ssrDir, 'entry-server.js')).href)

const marker = '<div id="root"></div>'
if (!template.includes(marker)) throw new Error('prerender: #root placeholder not found in dist/index.html')

await writeFile(resolve(dist, 'index.html'), template.replace(marker, `<div id="root">${render()}</div>`))
await rm(ssrDir, { recursive: true, force: true })
console.log('prerender: dist/index.html written')
