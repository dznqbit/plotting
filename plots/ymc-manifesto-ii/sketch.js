import { initSketch } from '../../src/lib/sketchWrapper.js';
// import fontUrl from '../../src/fonts/ArchivoBlack-Regular.ttf'
// import fontUrl from '../../src/fonts/RetraConsole.ttf';
import fontUrl from '../../src/fonts/Dekatron-SemiBold.otf';

// Word-wrapped block of text filling a rectangle - no cylinder wrap, just
// straightforward flowed text. Characters are still drawn from their actual
// vector outlines (opentype.js Font.getPath(), via beginShape()/vertex()),
// same as ymc-manifesto, so it plots exactly what's on screen and Y/M/C
// keep their own plot layer for a pen-color change.

const TEXT =
  `YMC is a Seattle music collective/meeting center/memetic channel/message conduit/media chamber/meat cooker.
It exists as an intentionally real bulwark against the synthetic 
hallucinations of the digital space. We accelerate all connection and creation.
We destroy only barriers.`
    .toUpperCase()
    .replaceAll('\n', ' ');

const FONT_SIZE = 32;
const MARGIN_Y = 90; // rectangle inset from the canvas tp, in px
const MARGIN_X = 75; // rectangle inset from the canvas lr, in px
const LINE_HEIGHT = FONT_SIZE * 1.3;
const LETTER_SPACING = 14; // extra px of gap between characters (tracking)

// Transforms a local glyph-outline point - with tilt=0/foreshorten=1 (as
// used below) this reduces to a plain translate, but reusing the same
// function as the cylinder sketches means drawGlyph doesn't have to change.
function transformPoint(px, py, { tilt, foreshorten, x, y }) {
  const rx = px * Math.cos(tilt) - py * Math.sin(tilt);
  const ry = px * Math.sin(tilt) + py * Math.cos(tilt);
  const sx = rx * foreshorten;
  const sy = ry;
  return [x + sx, y + sy];
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
  (p) => {
    const font = p.loadedFont;
    p.textFont(font);
    p.textSize(FONT_SIZE);
    p.noFill();
    p.strokeWeight(1.5);

    const rectRight = p.width - MARGIN_X;

    // A single, font-wide vertical center (from ascender/descender, not each
    // glyph's own bounding box) so every character sits on the same visual
    // center line instead of jittering with each letter's height.
    const emScale = FONT_SIZE / font.font.unitsPerEm;
    const verticalCenter = -((font.font.ascender + font.font.descender) / 2) * emScale;

    let cursorX = MARGIN_X;
    let cursorY = MARGIN_Y;

    for (const ch of TEXT) {
      const w = p.textWidth(ch);

      // Wrap wherever a character stops fitting - words break freely
      if (cursorX > MARGIN_X && cursorX + w > rectRight) {
        cursorX = MARGIN_X;
        cursorY += LINE_HEIGHT;
        // Don't start a line with the space that triggered the wrap
        if (ch === ' ') continue;
      }

      const x = cursorX + w / 2;
      const y = cursorY + verticalCenter;

      p.stroke(p.inkColor());
      const glyphPath = font.font.getPath(ch, 0, 0, FONT_SIZE);
      // Y/M/C get their own plot layer (e.g. for a pen-color change) - the
      // rest of the manifesto text is layer 1.
      const layerName = 'YMC/'.includes(ch) ? '2-YMC' : '1-Text';
      p.withLayer(layerName, () => {
        drawGlyph(p, glyphPath, w / 2, verticalCenter, { tilt: 0, foreshorten: 1, x, y });
      });

      cursorX += w + LETTER_SPACING;
    }
  },
  {
    preload: (p) => {
      p.loadedFont = p.loadFont(fontUrl);
    },
  }
);
