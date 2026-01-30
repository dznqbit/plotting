import { initSketch } from '../../src/lib/sketchWrapper.js'

initSketch((p) => {
  // Your sketch here
  p.stroke(0)
  p.strokeWeight(2)
  p.noFill()
  p.circle(p.width / 2, p.height / 2, 200)
})
