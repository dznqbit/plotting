import { defineConfig } from 'vite'
import { resolve } from 'path'
import { readdirSync, statSync } from 'fs'

// Automatically detect all sketch directories in plots/
function getSketchEntries() {
  const plotsDir = resolve(__dirname, 'plots')
  const entries = { main: resolve(__dirname, 'index.html') }

  try {
    const items = readdirSync(plotsDir)
    for (const item of items) {
      const itemPath = resolve(plotsDir, item)
      if (statSync(itemPath).isDirectory()) {
        const indexPath = resolve(itemPath, 'index.html')
        entries[`plots/${item}/index`] = indexPath
      }
    }
  } catch (e) {
    // plots directory doesn't exist yet
  }

  return entries
}

// Viewport.js lives in a sibling checkout (../Viewport.js), outside the Vite root
const viewportDir = resolve(__dirname, '../Viewport.js')
// Same for Toko (../Toko) - aliased to its source root, not the dist bundle
const tokoDir = resolve(__dirname, '../Toko')

export default defineConfig({
  resolve: {
    alias: [
      { find: 'viewport', replacement: resolve(viewportDir, 'src/viewport.js') },
      { find: 'toko', replacement: resolve(tokoDir, 'src') },
      // Toko imports a vendored CommonJS build of chroma.js, which the dev
      // server serves as-is (no default export) - swap in the npm ESM build
      { find: /^.*\/assets\/js\/chroma\/[^/]+\/chroma\.min\.cjs$/, replacement: resolve(__dirname, 'node_modules/chroma-js/index.js') }
    ]
  },
  server: {
    fs: {
      allow: [__dirname, viewportDir, tokoDir]
    }
  },
  build: {
    rollupOptions: {
      input: getSketchEntries()
    }
  }
})
