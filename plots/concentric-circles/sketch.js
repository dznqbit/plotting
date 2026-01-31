import { initSketch } from '../../src/lib/sketchWrapper.js'

initSketch((p) => {
  p.stroke(0)
  p.strokeWeight(10)
  p.noFill()

  // Concentric circles
  let centerX = p.width / 2
  let centerY = p.height / 2
  let maxRadius = p.min(p.width, p.height) * 0.4
  let numCircles = 20

  for (let i = 0; i < numCircles; i++) {
    let radius = p.map(i, 0, numCircles - 1, 20, maxRadius)
    p.circle(centerX, centerY, radius * 2)
  }
})
