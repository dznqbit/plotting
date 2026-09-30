import { initSketch } from '../../src/lib/sketchWrapper.js'

initSketch(({ p }) => {
  // Multi-layer circles
  p.stroke(p.inkColor())
  p.strokeWeight(2)
  p.noFill()
  p.circle(p.width / 2, p.height / 2, 200)
})
