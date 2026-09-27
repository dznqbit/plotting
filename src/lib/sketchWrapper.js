import p5 from 'p5'
import p5SVG from './p5.svg-dual.js'
import { paperSizes, currentSize } from './paperSizes.js'
import { createControls } from './controls.js'

// Initialize p5.js-svg (dual mode for v1 and v2 compatibility)
// Nabbed this from https://github.com/bcorporaal/Toko
p5SVG(p5)

let p5Instance = null

// Dev-mode dark canvas. Exported SVGs are always black ink, so this only
// ever affects the on-screen preview, never the plot itself.
const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)')

const INKSCAPE_NS = 'http://www.inkscape.org/namespaces/inkscape'
const SVG_NS = 'http://www.w3.org/2000/svg'

// Builds a p.withLayer(name, drawFn) for SVG export: shapes drawn inside
// drawFn land in a top-level <g inkscape:groupmode="layer"> named `name`,
// instead of the flat default group - so AxiDraw's "layers" plot mode (or
// just Inkscape's layer panel) can address them separately, e.g. for a
// pen-color change partway through a plot. AxiDraw's layers mode expects a
// leading number in the layer name (e.g. "1-Text"), so `name` should
// include one. Calling it again with the same name reuses that layer
// rather than creating a duplicate.
function makeLayerHelper(p) {
  const svg = p._renderer.svg
  const ctx = p._renderer.drawingContext
  svg.setAttributeNS('http://www.w3.org/2000/xmlns/', 'xmlns:inkscape', INKSCAPE_NS)
  const layers = {}

  return (name, drawFn) => {
    let group = layers[name]
    if (!group) {
      group = document.createElementNS(SVG_NS, 'g')
      group.setAttributeNS(INKSCAPE_NS, 'inkscape:groupmode', 'layer')
      group.setAttributeNS(INKSCAPE_NS, 'inkscape:label', name)
      svg.appendChild(group)
      layers[name] = group
    }
    const previousElement = ctx.__currentElement
    ctx.__currentElement = group
    drawFn()
    ctx.__currentElement = previousElement
  }
}

export function initSketch(drawFn, { preload } = {}) {
  function exportSVG() {
    let size = paperSizes[currentSize]

    // Create hidden container for temporary SVG canvas
    const hiddenContainer = document.createElement('div')
    hiddenContainer.style.display = 'none'
    document.body.appendChild(hiddenContainer)

    // Create a new p5 instance with SVG renderer
    let svgSketch = (p) => {
      let canvas;
      if (preload) {
        p.preload = () => preload(p)
      }
      p.setup = () => {
        p.pixelDensity(1) // Force pixel density to 1 to avoid scaling issues
        canvas = p.createCanvas(size.width, size.height, p.SVG)
        canvas.parent(hiddenContainer)

        // Export is always print-correct: black ink, regardless of the dev preview theme
        p.isDarkMode = false
        p.inkColor = () => 0

        p.withLayer = makeLayerHelper(p)

        // Draw immediately in setup
        drawFn({ p })

        // Generate filename with timestamp
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5)
        const filename = `plot-${currentSize}-${timestamp}.svg`

        // Fix the SVG viewBox to match canvas dimensions
        if (p._renderer.svg) {
          const svg = p._renderer.svg

          // Path coordinates are drawn directly in the p.width/p.height
          // range, so the viewBox has to match that 1:1 - doubling it (as a
          // previous version of this did) shrinks everything to half scale
          // and pins it to the top-left corner instead of filling the sheet.
          svg.setAttribute('viewBox', `0 0 ${p.width} ${p.height}`)

          // Stamp real-world units (mm) on width/height rather than bare
          // pixel numbers, so consumers (e.g. Inkscape) don't have to guess
          // a DPI to convert to a physical plot size - a wrong guess there
          // is a likely source of small, consistent plotted-vs-onscreen
          // offsets even when the SVG's own coordinates are centered.
          if (size.widthMm && size.heightMm) {
            svg.setAttribute('width', `${size.widthMm}mm`)
            svg.setAttribute('height', `${size.heightMm}mm`)
          } else {
            svg.setAttribute('width', p.width)
            svg.setAttribute('height', p.height)
          }

          const svgData = new XMLSerializer().serializeToString(svg)
          const blob = new Blob([svgData], { type: 'image/svg+xml' })
          const url = URL.createObjectURL(blob)
          const link = document.createElement('a')
          link.href = url
          link.download = filename
          link.click()
          URL.revokeObjectURL(url)
        } else {
          console.error('No SVG element found in renderer!')
        }

        // Remove the temporary canvas and container after a short delay
        setTimeout(() => {
          p.remove()
          canvas.remove()
          hiddenContainer.remove()
        }, 100)
      }
    }

    // Create temporary p5 instance for SVG export
    new p5(svgSketch)
  }

  // Create the p5 sketch with standard setup
  let sketch = (p) => {
    // Dev preview only: inverted "paper" so late-night work is easier on the eyes.
    // Sketches should draw ink with p.inkColor() instead of hardcoding black.
    p.isDarkMode = darkModeQuery.matches
    p.inkColor = () => (p.isDarkMode ? 255 : 0)
    const paperColor = () => (p.isDarkMode ? 20 : 255)

    // No layer concept on the regular canvas preview - just draw normally
    p.withLayer = (name, fn) => fn()

    if (preload) {
      p.preload = () => preload(p)
    }

    p.setup = () => {
      let size = paperSizes[currentSize]
      // Force pixel density to 1 for consistent sizing
      p.pixelDensity(1)
      // Create regular canvas by default
      p.createCanvas(size.width, size.height)
      p.background(paperColor())
      p.noLoop()
    }

    p.draw = () => {
      p.background(paperColor())
      drawFn({ p })
    }

    p.keyPressed = () => {
      if (p.key === 's' || p.key === 'S') {
        exportSVG()
        return false
      }
    }

    darkModeQuery.addEventListener('change', (e) => {
      p.isDarkMode = e.matches
      p.redraw()
    })
  }

  // Create p5 instance
  p5Instance = new p5(sketch)

  // Create container structure
  const body = document.body
  body.innerHTML = ''

  // Add nav
  const nav = document.createElement('nav')
  nav.innerHTML = '<h1><a href="/" title="Index">Plots</a></h1>'
  body.appendChild(nav)

    // Add controls with size change and save handlers
  const controls = createControls(
    (newSize) => {
      p5Instance.resizeCanvas(newSize.width, newSize.height)
      p5Instance.redraw()
    },
    exportSVG
  )
  body.appendChild(controls, body.firstChild)

  // Add main container for p5 canvas
  const main = document.createElement('main')
  body.appendChild(main)

  return { p5Instance, controls, main }
}
