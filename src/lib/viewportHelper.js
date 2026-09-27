import * as Viewport from 'viewport'

// Thin p5 binding around Viewport.js (https://github.com/RobMakesThings/Viewport.js),
// a 3D line renderer. Viewport itself is passed to sketches untouched as `v`
// (so example code copies over as-is); this helper is `vh`, and adds a
// default scene, a p5-style transform stack, and canvas-aware render/draw.
export class ViewportHelper {
  #p
  #matrix = Viewport.Matrix.identity()
  #stack = []

  constructor(p) {
    this.#p = p
    this.scene = new Viewport.Scene()
  }

  vec(x = 0, y = 0, z = 0) {
    return new Viewport.Vector(x, y, z)
  }

  #toVec(x, y, z) {
    return x instanceof Viewport.Vector ? x : this.vec(x, y, z)
  }

  // The current transform, as a Viewport Matrix
  get matrix() {
    return this.#matrix
  }

  // p5-style transform stack. Each call post-multiplies, so transforms apply
  // in the local frame just like p5: translate() then rotate() spins in place.
  push() {
    this.#stack.push(this.#matrix)
  }

  pop() {
    if (this.#stack.length === 0) throw new Error('vh.pop() without matching vh.push()')
    this.#matrix = this.#stack.pop()
  }

  resetMatrix() {
    this.#matrix = Viewport.Matrix.identity()
  }

  translate(x, y, z) {
    this.#matrix = this.#matrix.mult(Viewport.Translate(this.#toVec(x, y, z)))
  }

  // Angle in radians. Same direction as Viewport's rot() (and ln), which is
  // clockwise looking down the axis, i.e. opposite the right-hand rule.
  rotate(angle, axis) {
    this.#matrix = this.#matrix.mult(Viewport.rot(axis, angle))
  }

  rotateX(angle) {
    this.rotate(angle, this.vec(1, 0, 0))
  }

  rotateY(angle) {
    this.rotate(angle, this.vec(0, 1, 0))
  }

  rotateZ(angle) {
    this.rotate(angle, this.vec(0, 0, 1))
  }

  scale(x, y = x, z = x) {
    this.#matrix = this.#matrix.mult(Viewport.Matrix.identity().scale(this.#toVec(x, y, z)))
  }

  // Wrap a shape in the current transform, e.g. to feed into CSG
  transform(shape) {
    return new Viewport.TransformedShape(shape, this.#matrix)
  }

  // Add a shape to vh.scene under the current transform
  add(shape) {
    this.scene.add(this.transform(shape))
    return shape
  }

  // Render a scene (vh.scene by default) to 2D Paths sized to the canvas.
  // Camera defaults match the Viewport.js examples: looking at the origin
  // with +Z up.
  render({
    scene = this.scene,
    eye = this.vec(6, 10, 15),
    center = this.vec(0, 0, 0),
    up = this.vec(0, 0, 1),
    fovy = 30,
    near = 0.01,
    far = 100,
    step = 0.1,
  } = {}) {
    const p = this.#p
    return scene.render(eye, center, up, p.width, p.height, fovy, near, far, step)
  }

  // Draw rendered Paths as polylines with the current stroke. Viewport's
  // output is Y-up, so flip it into p5's Y-down space.
  draw(paths) {
    const p = this.#p
    p.push()
    p.noFill()
    for (const path of paths.paths) {
      p.beginShape()
      for (const vert of path.verts) {
        p.vertex(vert.x, p.height - vert.y)
      }
      p.endShape()
    }
    p.pop()
  }
}
