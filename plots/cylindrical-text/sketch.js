import { initSketch } from '../../src/lib/sketchWrapper.js'
import fontUrl from '../../src/fonts/ArchivoBlack-Regular.ttf'

// Wrap text helically around an imaginary vertical cylinder, viewed face-on -
// like the diagonal candy-stripe on a candy cane. Text spirals around the
// circumference while climbing the cylinder's height (PITCH_PER_WRAP controls
// how steep the twist is). The cylinder is treated as transparent: text past
// the equator is still drawn, mirrored horizontally, as if seen through the
// glass from the wrong side.
//
// Characters are drawn from their actual vector outlines (via the loaded
// font's underlying opentype.js Font.getPath()), not p.text(). We transform
// every outline point ourselves and draw them with beginShape()/vertex() -
// unlike p.text(), path-based shapes like this DO get their per-point
// transform baked in correctly by the SVG export shim (p5.svg-dual.js), so
// this version plots exactly what's on screen. Getting outlines this way
// (rather than p5's own textToPoints()) also preserves separate contours,
// so letters with holes (O, A, B...) render correctly instead of having
// their inner and outer rings connected by a stray line.

const TEXT = 'YMC YMC YMC YMC YMC YMC YMC YMC YMC YMC YMC YMC YMC YMC YMC YMC YMC YMC YMC YMC YMC YMC YMC YMC'
const FONT_SIZE = 48
const RADIUS = 150 // cylinder radius, in px
const PITCH_PER_WRAP = 220 // vertical distance climbed per full revolution - the twist rate
const MIN_FORESHORTEN = 0.08 // hide glyphs squished thinner than this, right at the silhouette
const FLIP_HORIZONTAL = false // mirror the whole design across a vertical centerline

// Transforms a local glyph-outline point the same way the flat p.text()
// version did: rotate first, THEN mirror/foreshorten (in the now-rotated
// frame), then place at the character's position on the cylinder. Rotating
// first is what keeps each glyph's "up" direction pointing up on both the
// front and back of the cylinder - mirroring first (rotating the already-
// mirrored shape) is what caused the back half to lean the wrong way and
// the Z-twist near the edges.
function transformPoint(px, py, { tilt, foreshorten, x, y, flipAroundX }) {
  const rx = px * Math.cos(tilt) - py * Math.sin(tilt)
  const ry = px * Math.sin(tilt) + py * Math.cos(tilt)
  const sx = rx * foreshorten
  const sy = ry
  let wx = x + sx
  const wy = y + sy
  // Mirroring the fully-transformed point (rather than folding the flip
  // into RADIUS/theta upstream) reflects whatever was already correctly
  // computed, so it can't reintroduce the rotation-direction bugs the
  // tilt/foreshorten math went through earlier.
  if (flipAroundX !== undefined) {
    wx = 2 * flipAroundX - wx
  }
  return [wx, wy]
}

// Draws one character's glyph outline (possibly multiple contours, e.g. the
// inner/outer rings of an "O") as transformed vertex-based shapes.
function drawGlyph(p, glyphPath, offsetX, offsetY, placement) {
  let open = false
  for (const cmd of glyphPath.commands) {
    if (cmd.type === 'Z') {
      p.endShape(p.CLOSE)
      open = false
      continue
    }

    if (cmd.type === 'M') {
      if (open) p.endShape(p.CLOSE)
      p.beginShape()
      open = true
    }

    if (cmd.type === 'M' || cmd.type === 'L') {
      const [x, y] = transformPoint(cmd.x - offsetX, cmd.y - offsetY, placement)
      p.vertex(x, y)
    } else if (cmd.type === 'Q') {
      const [cx, cy] = transformPoint(cmd.x1 - offsetX, cmd.y1 - offsetY, placement)
      const [x, y] = transformPoint(cmd.x - offsetX, cmd.y - offsetY, placement)
      p.quadraticVertex(cx, cy, x, y)
    } else if (cmd.type === 'C') {
      const [c1x, c1y] = transformPoint(cmd.x1 - offsetX, cmd.y1 - offsetY, placement)
      const [c2x, c2y] = transformPoint(cmd.x2 - offsetX, cmd.y2 - offsetY, placement)
      const [x, y] = transformPoint(cmd.x - offsetX, cmd.y - offsetY, placement)
      p.bezierVertex(c1x, c1y, c2x, c2y, x, y)
    }
  }
  if (open) p.endShape(p.CLOSE)
}

initSketch(
  ({ p }) => {
    const font = p.loadedFont
    p.textFont(font)
    p.textSize(FONT_SIZE)
    p.noFill()
    p.strokeWeight(1.5)

    const centerX = p.width / 2
    const centerY = p.height / 2
    const pitch = PITCH_PER_WRAP / p.TWO_PI // vertical rise per radian of wrap

    const charWidths = TEXT.split('').map((ch) => p.textWidth(ch))
    const totalWidth = charWidths.reduce((sum, w) => sum + w, 0)

    // A single, font-wide vertical center (from ascender/descender, not each
    // glyph's own bounding box) so every character sits on the same visual
    // center line instead of jittering with each letter's height.
    const emScale = FONT_SIZE / font.font.unitsPerEm
    const verticalCenter = -((font.font.ascender + font.font.descender) / 2) * emScale

    let arcOffset = -totalWidth / 2
    for (let i = 0; i < TEXT.length; i++) {
      const ch = TEXT[i]
      const w = charWidths[i]
      const arcX = arcOffset + w / 2
      const theta = arcX / RADIUS // angle around the cylinder, radians - may span multiple wraps

      arcOffset += w

      // 1 = facing us, 0 = edge-on, negative = on the far side - the negative
      // sign fed into transformPoint() mirrors those glyphs horizontally
      const foreshorten = Math.cos(theta)

      // Right at the silhouette, dx/dtheta -> 0, so consecutive characters'
      // x positions barely move - they pile up almost on top of each other,
      // each squished to a near-zero-width, near-90deg sliver. Skip them.
      if (Math.abs(foreshorten) < MIN_FORESHORTEN) continue

      const x = centerX + RADIUS * Math.sin(theta)
      const y = centerY + pitch * theta

      // Tilt tracks the curve's local slope (dy over dx), same as foreshorten
      // tracks its local width - using |cos(theta)| keeps it continuous (no
      // sign flips) all the way around: small near the front/back centers,
      // swinging up toward vertical at the edge-on silhouette.
      const tilt = Math.atan2(pitch, RADIUS * Math.abs(Math.cos(theta)))

      p.stroke(p.inkColor())
      const glyphPath = font.font.getPath(ch, 0, 0, FONT_SIZE)
      drawGlyph(p, glyphPath, w / 2, verticalCenter, {
        tilt,
        foreshorten,
        x,
        y,
        flipAroundX: FLIP_HORIZONTAL ? centerX : undefined,
      })
    }
  },
  {
    preload: (p) => {
      p.loadedFont = p.loadFont(fontUrl)
    },
  }
)
