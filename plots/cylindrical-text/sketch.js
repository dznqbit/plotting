import { initSketch } from '../../src/lib/sketchWrapper.js'

initSketch((p) => {
  // Your sketch here
  p.stroke(p.inkColor())
  p.strokeWeight(2)
  p.noFill()
  p.circle(p.width / 2, p.height / 2, 200)
})
