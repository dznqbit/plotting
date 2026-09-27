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

export default defineConfig({
  resolve: {
    alias: {
      viewport: resolve(viewportDir, 'src/viewport.js')
    }
  },
  server: {
    fs: {
      allow: [__dirname, viewportDir]
    }
  },
  build: {
    rollupOptions: {
      input: getSketchEntries()
    }
  }
})
