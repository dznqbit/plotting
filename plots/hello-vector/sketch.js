import { initSketch } from '../../src/lib/sketchWrapper.js'

initSketch(({ p, v }) => {
  // Ring of cubes, each spun in place
  for (let i = 0; i < 8; i++) {
    v.push()
    v.rotateZ(i * v.radians(45))
    v.translate(3, 0, 0)
    v.rotateZ(v.radians(20))
    v.scale(0.5)
    v.add(new v.Cube())
    v.pop()
  }

  const paths = v.render({ eye: v.vec(8, 10, 12), fovy: 40 })

  p.stroke(p.inkColor())
  p.strokeWeight(2)
  v.draw(paths)
})
