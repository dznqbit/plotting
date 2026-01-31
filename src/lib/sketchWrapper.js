import p5 from 'p5'
import p5SVG from './p5.svg-dual.js'
import { paperSizes, currentSize } from './paperSizes.js'
import { createControls } from './controls.js'

// Initialize p5.js-svg (dual mode for v1 and v2 compatibility)
// Nabbed this from https://github.com/bcorporaal/Toko
p5SVG(p5)

let p5Instance = null

export function initSketch(drawFn) {
  function exportSVG() {
    let size = paperSizes[currentSize]

    // Create hidden container for temporary SVG canvas
    const hiddenContainer = document.createElement('div')
    hiddenContainer.style.display = 'none'
    document.body.appendChild(hiddenContainer)

    // Create a new p5 instance with SVG renderer
    let svgSketch = (p) => {
      let canvas;
      p.setup = () => {
        p.pixelDensity(1) // Force pixel density to 1 to avoid scaling issues
        canvas = p.createCanvas(size.width, size.height, p.SVG)
        canvas.parent(hiddenContainer)
        
        // Draw immediately in setup
        drawFn(p)

        // Generate filename with timestamp
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5)
        const filename = `plot-${currentSize}-${timestamp}.svg`

        // Fix the SVG viewBox to match canvas dimensions
        if (p._renderer.svg) {
          const svg = p._renderer.svg

          // Use p.width/p.height instead of size since they might differ
          // Double the viewBox to compensate for 2x scaling in the SVG coordinates
          svg.setAttribute('viewBox', `0 0 ${p.width * 2} ${p.height * 2}`)
          svg.setAttribute('width', p.width)
          svg.setAttribute('height', p.height)

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
    p.setup = () => {
      let size = paperSizes[currentSize]
      // Force pixel density to 1 for consistent sizing
      p.pixelDensity(1)
      // Create regular canvas by default
      p.createCanvas(size.width, size.height)
      p.background(255)
      p.noLoop()
    }

    p.draw = () => {
      p.background(255)
      drawFn(p)
    }

    p.keyPressed = () => {
      if (p.key === 's' || p.key === 'S') {
        exportSVG()
        return false
      }
    }
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
