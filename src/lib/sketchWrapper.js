import p5 from 'p5'
import p5SVGInit from 'p5.js-svg'
import { paperSizes, currentSize } from './paperSizes.js'
import { createControls } from './controls.js'

p5SVGInit(p5)

export function initSketch(drawFn) {
  let p5Instance = null

  function exportSVG() {
    if (!p5Instance) return

    // Save current renderer state
    let size = paperSizes[currentSize]

    console.log('exportSVG: p5Instance.SVG =', p5Instance.SVG)
    console.log('exportSVG: p5Instance._renderer before =', p5Instance._renderer)

    // Create temporary SVG canvas
    p5Instance.createCanvas(size.width, size.height, p5Instance.SVG)

    console.log('exportSVG: p5Instance._renderer after createCanvas =', p5Instance._renderer)
    console.log('exportSVG: p5Instance._renderer.svg =', p5Instance._renderer.svg)

    p5Instance.background(255)
    drawFn(p5Instance) // TEST

    console.log('exportSVG: after draw, svg content =', p5Instance._renderer.svg?.outerHTML?.substring(0, 200))

    // Save the SVG using saveSVG() from p5.js-svg
    let fileName = window.location.pathname.split('/').filter(Boolean).pop() || 'sketch'
    console.log('exportSVG: calling saveSVG with filename =', fileName)
    p5Instance.saveSVG(`${fileName}.svg`)

    // Restore regular canvas
    p5Instance.createCanvas(size.width, size.height)
    p5Instance.background(255)
    drawFn(p5Instance)
  }

  // Create the p5 sketch with standard setup
  let sketch = (p) => {
    p.setup = () => {
      let size = paperSizes[currentSize]
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

  // Create container structure
  const body = document.body
  body.innerHTML = ''

  // Create p5 instance
  p5Instance = new p5(sketch)

  // Add controls with size change and save handlers
  const controls = createControls(
    (newSize) => {
      p5Instance.resizeCanvas(newSize.width, newSize.height)
      p5Instance.redraw()
    },
    exportSVG
  )
  body.insertBefore(controls, body.firstChild)

  // Add main container for p5 canvas
  const main = document.createElement('main')
  body.appendChild(main)

  return { p5Instance, controls, main }
}
