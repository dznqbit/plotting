import * as Viewport from 'viewport'

// Thin p5 binding around Viewport.js (https://github.com/RobMakesThings/Viewport.js),
// a 3D line renderer. Exposes every Viewport export (Scene, Cube, Vector, ...)
// plus a few helpers that know the current canvas size, and a p5-style
// transform stack for building up v.scene.
export function makeViewport(p) {
  const vec = (x = 0, y = 0, z = 0) => new Viewport.Vector(x, y, z)
  const toVec = (x, y, z) => (x instanceof Viewport.Vector ? x : vec(x, y, z))

  const scene = new Viewport.Scene()

  // p5-style transform stack. Each call post-multiplies, so transforms apply
  // in the local frame just like p5: translate() then rotate() spins in place.
  let matrix = Viewport.Matrix.identity()
  const stack = []

  function push() {
    stack.push(matrix)
  }

  function pop() {
    if (stack.length === 0) throw new Error('v.pop() without matching v.push()')
    matrix = stack.pop()
  }

  function resetMatrix() {
    matrix = Viewport.Matrix.identity()
  }

  function translate(x, y, z) {
    matrix = matrix.mult(Viewport.Translate(toVec(x, y, z)))
  }

  // Angle in radians. Same direction as Viewport's rot() (and ln), which is
  // clockwise looking down the axis, i.e. opposite the right-hand rule.
  function rotate(angle, axis) {
    matrix = matrix.mult(Viewport.rot(axis, angle))
  }

  function scale(x, y = x, z = x) {
    matrix = matrix.mult(Viewport.Matrix.identity().scale(toVec(x, y, z)))
  }

  // Wrap a shape in the current transform, e.g. to feed into CSG
  function transform(shape) {
    return new Viewport.TransformedShape(shape, matrix)
  }

  // Add a shape to v.scene under the current transform
  function add(shape) {
    scene.add(transform(shape))
    return shape
  }

  // Render a scene (v.scene by default) to 2D Paths sized to the canvas.
  // Camera defaults match the Viewport.js examples: looking at the origin
  // with +Z up.
  function render(
    {
      scene: target = scene,
      eye = vec(6, 10, 15),
      center = vec(0, 0, 0),
      up = vec(0, 0, 1),
      fovy = 30,
      near = 0.01,
      far = 100,
      step = 0.1,
    } = {}
  ) {
    return target.render(eye, center, up, p.width, p.height, fovy, near, far, step)
  }

  // Draw rendered Paths as polylines with the current stroke. Viewport's
  // output is Y-up, so flip it into p5's Y-down space.
  function draw(paths) {
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

  return {
    ...Viewport,
    vec,
    scene,
    push,
    pop,
    resetMatrix,
    translate,
    rotate,
    rotateX: (angle) => rotate(angle, vec(1, 0, 0)),
    rotateY: (angle) => rotate(angle, vec(0, 1, 0)),
    rotateZ: (angle) => rotate(angle, vec(0, 0, 1)),
    scale,
    transform,
    add,
    render,
    draw,
  }
}
