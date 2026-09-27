import * as Viewport from 'viewport'

// Thin p5 binding around Viewport.js (https://github.com/RobMakesThings/Viewport.js),
// a 3D line renderer. Viewport itself is passed to sketches untouched as `v`
// (so example code copies over as-is); this helper is `vh`, and adds a
// default scene, a p5-style transform stack, and canvas-aware render/draw.
export class ViewportHelper {
  #p
  #matrix = Viewport.Matrix.identity()
  #stack = []
  #outlines = []

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

  // Primitives, centered on the origin and wrapped in the current transform.
  // They return the shape without adding it, so it can go into CSG or
  // vh.scene.add(shape, layer). Defaults match `new v.Cube()`: 2 units across.

  // Width, height, depth along x, y, z, like p5's box()
  cube(w = 2, h = w, d = h) {
    const half = this.vec(w / 2, h / 2, d / 2)
    return this.transform(new Viewport.Cube(half.mulScalar(-1), half))
  }

  // Styles:
  //   'grid'    - lat/lng lines every `step` degrees
  //   'stripes' - `stripes` lines of latitude (v.HSphere)
  //   'outline' - just the silhouette, fitted to the camera at render time
  //   'yarn'    - `count` random great circles, like plain `new v.Sphere()`,
  //               but drawn from p.random() so p.randomSeed() makes the
  //               export match the preview
  sphere(r = 1, { style = 'outline', step = 15, stripes = 20, count = 150 } = {}) {
    const center = this.vec(0, 0, 0)
    let sphere
    switch (style) {
      case 'grid':
        sphere = new Viewport.Sphere(center, r)
        sphere.paths = () => this.#gridPaths(r, step)
        break
      case 'stripes':
        sphere = new Viewport.HSphere(center, r, stripes)
        break
      case 'outline':
        // eye/up get filled in by render(), once the camera is known
        sphere = new Viewport.OutlineSphere(center, r, null, null)
        this.#outlines.push({ shape: sphere, matrix: this.#matrix, useCameraUp: true })
        break
      case 'yarn':
        sphere = new Viewport.Sphere(center, r)
        sphere.paths = () => this.#yarnPaths(r, count)
        break
      default:
        throw new Error(`vh.sphere(): unknown style '${style}'`)
    }
    return this.transform(sphere)
  }

  #gridPaths(r, step) {
    const point = (lat, lng) => {
      lat = Viewport.radians(lat)
      lng = Viewport.radians(lng)
      return this.vec(r * Math.cos(lat) * Math.cos(lng), r * Math.cos(lat) * Math.sin(lng), r * Math.sin(lat))
    }
    const paths = []
    // Skip the poles themselves; every meridian converges there
    for (let lat = -90 + step; lat < 90; lat += step) {
      const verts = []
      for (let lng = 0; lng <= 360; lng++) verts.push(point(lat, lng))
      paths.push(new Viewport.Path(verts))
    }
    for (let lng = 0; lng < 360; lng += step) {
      const verts = []
      for (let lat = -90; lat <= 90; lat++) verts.push(point(lat, lng))
      paths.push(new Viewport.Path(verts))
    }
    return new Viewport.Paths(paths)
  }

  #yarnPaths(r, count) {
    const p = this.#p
    const randomUnitVector = () => {
      for (;;) {
        const v = this.vec(p.random(-1, 1), p.random(-1, 1), p.random(-1, 1))
        const len = v.length()
        if (len > 0 && len <= 1) return v.mulScalar(1 / len)
      }
    }
    const equator = []
    for (let lng = 0; lng <= 360; lng++) {
      const a = Viewport.radians(lng)
      equator.push(this.vec(r * Math.cos(a), r * Math.sin(a), 0))
    }
    const paths = []
    for (let i = 0; i < count; i++) {
      let m = Viewport.Matrix.identity()
      for (let j = 0; j < 3; j++) {
        m = m.rotate(randomUnitVector(), p.random(2 * Math.PI))
      }
      paths.push(new Viewport.Path(equator.map((v) => m.mulPosition(v))))
    }
    return new Viewport.Paths(paths)
  }

  // Axis along z. Styles:
  //   'outline' - end circles plus the two silhouette edges, fitted to the
  //               camera at render time
  //   'stripes' - rings around the axis (plain `new v.Cylinder()`)
  cylinder(r = 1, h = 2, { style = 'outline' } = {}) {
    let cylinder
    switch (style) {
      case 'outline':
        // Not v.OutlineCylinder: its silhouette edges are only approximate,
        // and when the axis points toward the camera they end up behind the
        // surface and get clipped. eye gets filled in by render().
        cylinder = new Viewport.Cylinder(r, -h / 2, h / 2)
        cylinder.paths = () => this.#cylinderOutlinePaths(cylinder.eye, r, -h / 2, h / 2)
        this.#outlines.push({ shape: cylinder, matrix: this.#matrix, useCameraUp: false })
        break
      case 'stripes':
        cylinder = new Viewport.Cylinder(r, -h / 2, h / 2)
        break
      default:
        throw new Error(`vh.cylinder(): unknown style '${style}'`)
    }
    return this.transform(cylinder)
  }

  // End circles plus the two silhouette edges, for a cylinder along z seen
  // from `eye` (in the cylinder's local space). The edges are the lines along
  // the side where the view ray just grazes it: in the xy plane, the tangent
  // points on the circle from the eye's projection.
  #cylinderOutlinePaths(eye, r, z0, z1) {
    const circle = (z) => {
      const verts = []
      for (let a = 0; a <= 360; a++) {
        const t = Viewport.radians(a)
        verts.push(this.vec(r * Math.cos(t), r * Math.sin(t), z))
      }
      return new Viewport.Path(verts)
    }
    const paths = [circle(z0), circle(z1)]

    // Looking straight down the axis (or from inside it) there's no side to see
    const dist = Math.hypot(eye.x, eye.y)
    if (dist > r) {
      const toEye = Math.atan2(eye.y, eye.x)
      const spread = Math.acos(r / dist)
      // Nudged just off the surface, so floating-point error can't make the
      // grazing view ray register as a hit on the cylinder itself
      const edgeR = r * 1.001
      for (const t of [toEye + spread, toEye - spread]) {
        const x = edgeR * Math.cos(t)
        const y = edgeR * Math.sin(t)
        paths.push(new Viewport.Path([this.vec(x, y, z0), this.vec(x, y, z1)]))
      }
    }
    return new Viewport.Paths(paths)
  }

  // Axis along z, base centered at z = -h/2, tip at z = h/2
  cone(r = 1, h = 2) {
    this.push()
    this.translate(0, 0, -h / 2)
    const cone = this.transform(new Viewport.Cone(r, h))
    this.pop()
    return cone
  }

  // Add a shape to vh.scene under the current transform, optionally on a
  // pen layer (e.g. "1-Black"; AxiDraw's layers mode wants a leading number)
  add(shape, layer = null) {
    this.scene.add(this.transform(shape), layer)
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
    layer,
  } = {}) {
    const p = this.#p
    // Outline shapes trace their silhouette from the eye, in their own
    // local (untransformed) space
    for (const { shape, matrix, useCameraUp } of this.#outlines) {
      const inverse = matrix.inverse()
      shape.eye = inverse.mulPosition(eye)
      if (useCameraUp) shape.up = inverse.mulDirection(up)
    }
    return scene.render(eye, center, up, p.width, p.height, fovy, near, far, step, layer)
  }

  // Render each layer separately, as a Map of layer name -> Paths. Shapes on
  // other layers still hide lines behind them. Takes the same options as
  // render().
  renderLayers(options = {}) {
    const { scene = this.scene } = options
    return new Map(scene.layers().map((layer) => [layer, this.render({ ...options, layer })]))
  }

  // Draw the output of renderLayers(), each layer into its own SVG layer.
  // Unlayered shapes (null) are drawn outside any layer.
  drawLayers(layers) {
    for (const [layer, paths] of layers) {
      if (layer === null) {
        this.draw(paths)
      } else {
        this.#p.withLayer(layer, () => this.draw(paths))
      }
    }
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
