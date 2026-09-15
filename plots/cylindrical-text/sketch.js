import { initSketch } from '../../src/lib/sketchWrapper.js'

// Wrap text helically around an imaginary vertical cylinder, viewed face-on -
// like the diagonal candy-stripe on a candy cane. Text spirals around the
// circumference while climbing the cylinder's height (PITCH_PER_WRAP controls
// how steep the twist is). The cylinder is treated as transparent: text past
// the equator is still drawn, mirrored horizontally, as if seen through the
// glass from the wrong side.
//
// NOTE: p.scale()/p.rotate() on p.text() only affects the on-screen canvas -
// the SVG export shim (p5.svg-dual.js) drops those transforms for text
// elements, so exported SVGs currently ignore the wrap/twist. Swapping to
// font.textToPoints() (manually transforming the glyph outline points
// ourselves, then drawing them as vertices) will fix that and is also what
// lets this support arbitrary .ttf/.woff fonts.

const TEXT = 'YMC YMC YMC YMC YMC YMC YMC YMC'
const FONT_SIZE = 48
const RADIUS = 150 // cylinder radius, in px
const PITCH_PER_WRAP = 220 // vertical distance climbed per full revolution - the twist rate
const MIN_FORESHORTEN = 0.08 // hide glyphs squished thinner than this, right at the silhouette

initSketch((p) => {
  p.textFont('Helvetica')
  p.textSize(FONT_SIZE)
  p.textAlign(p.CENTER, p.CENTER)
  p.noFill()
  p.strokeWeight(1.5)

  const centerX = p.width / 2
  const centerY = p.height / 2
  const pitch = PITCH_PER_WRAP / p.TWO_PI // vertical rise per radian of wrap

  const charWidths = TEXT.split('').map((ch) => p.textWidth(ch))
  const totalWidth = charWidths.reduce((sum, w) => sum + w, 0)

  let arcOffset = -totalWidth / 2
  for (let i = 0; i < TEXT.length; i++) {
    const ch = TEXT[i]
    const w = charWidths[i]
    const arcX = arcOffset + w / 2
    const theta = arcX / RADIUS // angle around the cylinder, radians - may span multiple wraps

    arcOffset += w

    // 1 = facing us, 0 = edge-on, negative = on the far side - the negative
    // sign fed into p.scale() below mirrors those glyphs horizontally
    const foreshorten = Math.cos(theta)

    // Right at the silhouette, dx/dtheta -> 0, so consecutive characters'
    // x positions barely move - they pile up almost on top of each other,
    // each squished to a near-zero-width, near-90deg sliver. Those
    // overlapping slivers are what produced the "Z-twist" glitch; they're
    // squished to near-invisibility anyway, so just skip them.
    if (Math.abs(foreshorten) < MIN_FORESHORTEN) continue

    const x = centerX + RADIUS * Math.sin(theta)
    const y = centerY + pitch * theta

    // Tilt tracks the curve's local slope (dy over dx), same as foreshorten
    // tracks its local width - but using |cos(theta)| instead of the signed
    // value, so it stays continuous (no sign flips) all the way around:
    // small near the front/back centers, swinging up toward vertical at the
    // edge-on silhouette.
    const tilt = Math.atan2(pitch, RADIUS * Math.abs(Math.cos(theta)))

    // Order matters here: rotating a glyph and THEN mirroring it (mirroring
    // the already-tilted shape, in world space) keeps its "up" direction
    // pointing up on both sides - only its left/right lean and reading
    // order flip. Mirroring first and rotating second (what earlier
    // versions did) mirrors the glyph before it's tilted, so the tilt gets
    // applied to already-mirrored content - which is what turned into
    // upside-down text on the back. The LAST-called of p.rotate()/p.scale()
    // is applied to the glyph first, so p.scale() has to be called first
    // here to get rotate-then-mirror.
    p.push()
    p.translate(x, y)
    p.scale(foreshorten, 1)
    p.rotate(tilt)
    p.stroke(p.inkColor())
    p.text(ch, 0, 0)
    p.pop()
  }
})
