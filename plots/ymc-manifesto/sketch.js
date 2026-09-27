import { initSketch } from '../../src/lib/sketchWrapper.js';
import fontUrl from '../../src/fonts/ArchivoBlack-Regular.ttf';

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

const TEXT = `YMC is a Seattle music collective, meeting center, memetic channel,
message conduit, media chamber, and meat cooker. It exists as an intentionally real
bulwark against the synthetic hallucinations of the digital space. We seek to accelerate
connection and creation; we seek to destroy only barriers.`
  .toUpperCase()
  .replaceAll('\n', ' ');

const FONT_SIZE = 48;
const RADIUS_X = 100; // width (horizontal) radius of the cylinder's cross-section, in px
const RADIUS_Z = 20; // depth (front-to-back) radius - smaller than RADIUS_X "smooshes" the
// circle into a wide oval, so the tight squish/rotation near the true
// tangent (previously RADIUS_X == RADIUS_Z, i.e. a circle) only kicks
// in close to the very edge instead of over a big swath of characters
const PITCH_PER_WRAP = 20; // vertical distance climbed per full revolution - the twist rate
const MIN_FORESHORTEN = 0.001; // hide glyphs squished thinner than this, right at the silhouette
const FLIP_HORIZONTAL = false; // mirror the whole design across a vertical centerline
const LETTER_SPACING = 6; // extra px of gap between characters, along the wrap (tracking)
const INITIAL_ROTATION = 0 // -0.9 * Math.PI; // phase-shifts where the text starts around the cylinder

// Transforms a local glyph-outline point the same way the flat p.text()
// version did: rotate first, THEN mirror/foreshorten (in the now-rotated
// frame), then place at the character's position on the cylinder. Rotating
// first is what keeps each glyph's "up" direction pointing up on both the
// front and back of the cylinder - mirroring first (rotating the already-
// mirrored shape) is what caused the back half to lean the wrong way and
// the Z-twist near the edges.
function transformPoint(px, py, { tilt, foreshorten, x, y, flipAroundX }) {
  const rx = px * Math.cos(tilt) - py * Math.sin(tilt);
  const ry = px * Math.sin(tilt) + py * Math.cos(tilt);
  const sx = rx * foreshorten;
  const sy = ry;
  let wx = x + sx;
  const wy = y + sy;
  // Mirroring the fully-transformed point (rather than folding the flip
  // into RADIUS/theta upstream) reflects whatever was already correctly
  // computed, so it can't reintroduce the rotation-direction bugs the
  // tilt/foreshorten math went through earlier.
  if (flipAroundX !== undefined) {
    wx = 2 * flipAroundX - wx;
  }
  return [wx, wy];
}

// Draws one character's glyph outline (possibly multiple contours, e.g. the
// inner/outer rings of an "O") as transformed vertex-based shapes.
function drawGlyph(p, glyphPath, offsetX, offsetY, placement) {
  let open = false;
  for (const cmd of glyphPath.commands) {
    if (cmd.type === 'Z') {
      p.endShape(p.CLOSE);
      open = false;
      continue;
    }

    if (cmd.type === 'M') {
      if (open) p.endShape(p.CLOSE);
      p.beginShape();
      open = true;
    }

    if (cmd.type === 'M' || cmd.type === 'L') {
      const [x, y] = transformPoint(cmd.x - offsetX, cmd.y - offsetY, placement);
      p.vertex(x, y);
    } else if (cmd.type === 'Q') {
      const [cx, cy] = transformPoint(cmd.x1 - offsetX, cmd.y1 - offsetY, placement);
      const [x, y] = transformPoint(cmd.x - offsetX, cmd.y - offsetY, placement);
      p.quadraticVertex(cx, cy, x, y);
    } else if (cmd.type === 'C') {
      const [c1x, c1y] = transformPoint(cmd.x1 - offsetX, cmd.y1 - offsetY, placement);
      const [c2x, c2y] = transformPoint(cmd.x2 - offsetX, cmd.y2 - offsetY, placement);
      const [x, y] = transformPoint(cmd.x - offsetX, cmd.y - offsetY, placement);
      p.bezierVertex(c1x, c1y, c2x, c2y, x, y);
    }
  }
  if (open) p.endShape(p.CLOSE);
}

initSketch(
  ({ p }) => {
    const font = p.loadedFont;
    p.textFont(font);
    p.textSize(FONT_SIZE);
    p.noFill();
    p.strokeWeight(1.5);

    const centerX = p.width / 2;
    const centerY = p.height / 2;
    const pitch = PITCH_PER_WRAP / p.TWO_PI; // vertical rise per radian of wrap

    const charWidths = TEXT.split('').map((ch) => p.textWidth(ch));
    // Each character gets extra room along the wrap (LETTER_SPACING) without
    // stretching the glyph itself - it's still centered on its own actual
    // width, just placed within a wider slot.
    const charAdvances = charWidths.map((w) => w + LETTER_SPACING);

    // A single, font-wide vertical center (from ascender/descender, not each
    // glyph's own bounding box) so every character sits on the same visual
    // center line instead of jittering with each letter's height.
    const emScale = FONT_SIZE / font.font.unitsPerEm;
    const verticalCenter = -((font.font.ascender + font.font.descender) / 2) * emScale;

    // Characters are placed by angle, not raw pixels, so an even split of
    // "arc length" (advance / RADIUS_X, as this used to compute it) only
    // gives even *visual* spacing if the wrap advances at a constant rate
    // per radian. It doesn't: the path's true local speed is
    // sqrt((RADIUS_X * cos(theta))^2 + pitch^2), which collapses toward
    // just `pitch` at the tangent (cos(theta) -> 0) - many times slower
    // than RADIUS_X. Dividing by the constant RADIUS_X there hands out far
    // too little angle per character, which is what was clumping letters
    // at the edges. So walk through characters integrating the true local
    // speed instead, then re-center the whole run afterward.
    const charThetas = [];
    let theta = 0;
    for (let i = 0; i < TEXT.length; i++) {
      const localSpeed = Math.sqrt((RADIUS_X * Math.cos(theta)) ** 2 + pitch * pitch);
      const dtheta = charAdvances[i] / localSpeed;
      charThetas.push(theta + dtheta / 2);
      theta += dtheta;
    }
    const thetaOffset = INITIAL_ROTATION - theta / 2;

    for (let i = 0; i < TEXT.length; i++) {
      const ch = TEXT[i];
      const w = charWidths[i];
      const theta = charThetas[i] + thetaOffset; // angle around the cylinder, radians - may span multiple wraps

      // How face-on the surface is here: 1 = facing us, 0 = edge-on
      // (the true tangent, always exactly at theta = 90deg regardless of
      // the oval's proportions), negative = on the far side. This is the
      // surface normal's angle to the viewer for an ellipse cross-section
      // (x = RADIUS_X sin(theta), z = RADIUS_Z cos(theta)), not just
      // cos(theta) - with RADIUS_Z < RADIUS_X it falls off much more
      // gently away from center, only pinching hard very close to the
      // true edge instead of over a wide swath of characters. The sign
      // still matches plain cos(theta) exactly (same zero-crossings), so
      // it's a drop-in replacement for the mirroring logic below.
      const normalX = Math.sin(theta) / RADIUS_X;
      const normalZ = Math.cos(theta) / RADIUS_Z;
      const foreshorten = normalZ / Math.sqrt(normalX * normalX + normalZ * normalZ);

      // Tilt tracks the curve's local screen-space slope (dy over dx) of
      // the (x,y) wrap+climb path - this only depends on RADIUS_X (the
      // horizontal radius), not RADIUS_Z, since it's about the 2D path on
      // screen, not the 3D depth. Using |cos(theta)| keeps it continuous
      // (no sign flips) all the way around: small near the front/back
      // centers, swinging up toward vertical at the edge-on silhouette.
      const tilt = Math.atan2(pitch, RADIUS_X * Math.abs(Math.cos(theta)));

      // Characters are spaced by integrating the same local path speed
      // that `tilt` is derived from (see charThetas above), so a steeply
      // tilted glyph already gets a proportionally wider slot - no more
      // overlap to guard against there. The only thing left to hide is a
      // glyph squished to a near-zero-width sliver right at the true
      // tangent (foreshorten -> 0) - and RADIUS_Z controls how much of the
      // wrap that actually affects.
      if (Math.abs(foreshorten) < MIN_FORESHORTEN) continue;

      const x = centerX + RADIUS_X * Math.sin(theta);
      const y = centerY + pitch * theta;

      p.stroke(p.inkColor());
      const glyphPath = font.font.getPath(ch, 0, 0, FONT_SIZE);
      // Y/M/C get their own plot layer (e.g. for a pen-color change) - the
      // rest of the manifesto text is layer 1.
      const layerName = 'YMC'.includes(ch) ? '2-YMC' : '1-Text';
      p.withLayer(layerName, () => {
        drawGlyph(p, glyphPath, w / 2, verticalCenter, {
          tilt,
          foreshorten,
          x,
          y,
          flipAroundX: FLIP_HORIZONTAL ? centerX : undefined,
        });
      });
    }
  },
  {
    preload: (p) => {
      p.loadedFont = p.loadFont(fontUrl);
    },
  }
);
