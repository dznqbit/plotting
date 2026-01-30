import p5 from 'p5'
import { createControls } from './controls.js'

export function initSketch(sketchFn) {
  // Create container structure
  const body = document.body
  body.innerHTML = ''

  // Create p5 instance
  const p5Instance = new p5(sketchFn)

  // Add controls with size change handler
  const controls = createControls((newSize) => {
    p5Instance.resizeCanvas(newSize.width, newSize.height)
    p5Instance.redraw()
  })
  body.insertBefore(controls, body.firstChild)

  // Add main container for p5 canvas
  const main = document.createElement('main')
  body.appendChild(main)

  return { p5Instance, controls, main }
}
