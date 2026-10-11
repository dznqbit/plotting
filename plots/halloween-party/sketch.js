import { initSketch } from '../../src/lib/sketchWrapper.js'

// Pumpkin seams in pseudo-3D.
//
// Each seam is a meridian: a 2D profile curve (radius r, height y) swept
// around the vertical axis to angle theta. The profile is a cubic bezier, and
// both the sweep-to-plane (r, y) -> (r cos θ, y, r sin θ) and the orthographic
// projection are linear, so projecting the bezier's control points gives the
// exact projected curve - we can hand them straight to p.bezier.

const SECTIONS = 10
const TILT = 0.35 // radians, camera pitch: tips the top of the pumpkin toward the viewer
const SPIN = 0.2 // radians, rotation of the pumpkin around its vertical axis

// Seam profile in (r, y) units relative to pumpkin radius; y is up.
// Starts in the stem dimple, bulges out to full width, tucks back in at the base.
const PROFILE = [
  { r: 0.12, y: 0.42 }, // top, in the dimple around the stem
  { r: 1.35, y: 0.75 }, // pulls the shoulder out and up
  { r: 1.3, y: -0.8 }, // pulls the belly out and down
  { r: 0.15, y: -0.5 }, // bottom, tucked under
]

// Stem: a tapered tube around a bent spine, rising out of the dimple.
// Each spine control point is a cubic bezier control point; the radius
// tapers along it.
const STEM_SPINE = [
  { x: 0, y: 0.42, z: 0 },
  { x: 0, y: 0.6, z: 0 },
  { x: 0.02, y: 0.72, z: 0 },
  { x: 0.12, y: 0.8, z: 0.02 },
]
const STEM_RADII = [0.1, 0.09, 0.08, 0.075]
const STEM_LINES = 4
const RING_SAMPLES = 32 // vertices for the stem's cut-off top

function sweep({ r, y }, theta) {
  return { x: r * Math.cos(theta), y, z: r * Math.sin(theta) }
}

// Rotate about the x axis by `tilt`, then drop z (orthographic)
function project({ x, y, z }, tilt) {
  const yt = y * Math.cos(tilt) - z * Math.sin(tilt)
  return { x, y: yt }
}

initSketch({
  includes: [],
  draw: ({ p }) => {
    p.stroke(p.inkColor())
    p.strokeWeight(2)
    p.noFill()

    const cx = p.width / 2
    const cy = p.height / 2
    const radius = p.width * 0.3

    // Screen y points down, model y points up
    const toScreen = ({ x, y }) => [cx + x * radius, cy - y * radius]

    const closedPath = (pts) => {
      p.beginShape()
      for (const [x, y] of pts) p.vertex(x, y)
      p.endShape(p.CLOSE)
    }

    const top = []
    const butt = []
    for (let i = 0; i < SECTIONS; i++) {
      const theta = SPIN + (i / SECTIONS) * p.TWO_PI
      const pts = PROFILE.map((pt) => toScreen(project(sweep(pt, theta), TILT)))
      p.bezier(...pts.flat())
      top.push(pts[0])
      butt.push(pts[pts.length - 1])
    }

    // Join the seams' ends into closed rings at the stem dimple and the base
    closedPath(top)
    closedPath(butt)

    // Stem: lines running up the tube, offset from the spine by the tapering radius
    const stemPoint = (i, phi) => {
      const { x, y, z } = STEM_SPINE[i]
      const r = STEM_RADII[i]
      return { x: x + r * Math.cos(phi), y, z: z + r * Math.sin(phi) }
    }
    for (let j = 0; j < STEM_LINES; j++) {
      const phi = SPIN + (j / STEM_LINES) * p.TWO_PI
      const pts = STEM_SPINE.map((_, i) => toScreen(project(stemPoint(i, phi), TILT)))
      p.bezier(...pts.flat())
    }

    // Stem's cut-off top
    const capIndex = STEM_SPINE.length - 1
    const cap = []
    for (let k = 0; k < RING_SAMPLES; k++) {
      const phi = (k / RING_SAMPLES) * p.TWO_PI
      cap.push(toScreen(project(stemPoint(capIndex, phi), TILT)))
    }
    closedPath(cap)
  },
})
