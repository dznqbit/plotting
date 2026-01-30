#!/usr/bin/env node

import { mkdirSync, writeFileSync, readFileSync } from 'fs'
import { join } from 'path'

const sketchName = process.argv[2]

if (!sketchName) {
  console.error('Usage: npm run new <sketch-name>')
  process.exit(1)
}

const plotsDir = join(process.cwd(), 'plots', sketchName)

// Create directory
try {
  mkdirSync(plotsDir, { recursive: true })
} catch (err) {
  console.error(`Error creating directory: ${err.message}`)
  process.exit(1)
}

// Create index.html
const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${sketchName}</title>
  <link rel="stylesheet" href="/src/style.css">
</head>
<body>
  <script type="module" src="./sketch.js"></script>
</body>
</html>
`

// Create sketch.js
const sketchJs = `import { initSketch } from '../../src/lib/sketchWrapper.js'

initSketch((p) => {
  // Your sketch here
  p.stroke(0)
  p.strokeWeight(2)
  p.noFill()
  p.circle(p.width / 2, p.height / 2, 200)
})
`

writeFileSync(join(plotsDir, 'index.html'), indexHtml)
writeFileSync(join(plotsDir, 'sketch.js'), sketchJs)

console.log(`✓ Created sketch: ${sketchName}`)
console.log(`  - plots/${sketchName}/index.html`)
console.log(`  - plots/${sketchName}/sketch.js`)
console.log(`\nView at: http://localhost:5173/plots/${sketchName}/`)
console.log(`\nDon't forget to add it to index.html!`)
