// Single-stroke text for the plotter, from the SVG fonts bundled with the
// `hersheytext` package (EMS / Hershey engraving fonts). Unlike regular
// fonts, these glyphs are open strokes rather than filled outlines, so the
// pen draws each line once.
//
// The package's own JS helper needs Node (fs, cheerio), so this parses the
// SVG font files directly. Import one as raw text and hand it to
// parseHersheyFont:
//
//   import svg from 'hersheytext/svg_fonts/EMSReadability.svg?raw'
//   const font = parseHersheyFont(svg)
//   drawHersheyText(p, font, 'hello', x, baseline, 48)

// Glyph paths only use absolute M, L and C commands
function parsePath(d) {
  const tokens = d.match(/[MLC]|-?(?:\d+\.?\d*|\.\d+)(?:e-?\d+)?/gi) ?? [];
  const commands = [];
  let i = 0;
  const num = () => parseFloat(tokens[i++]);
  let type = null;
  while (i < tokens.length) {
    if (/^[MLC]$/i.test(tokens[i])) type = tokens[i++].toUpperCase();
    if (type === 'M' || type === 'L') {
      commands.push({ type, x: num(), y: num() });
      if (type === 'M') type = 'L'; // implicit lineto after a moveto
    } else if (type === 'C') {
      commands.push({ type, x1: num(), y1: num(), x2: num(), y2: num(), x: num(), y: num() });
    } else {
      throw new Error(`Unsupported path command in Hershey glyph: ${tokens[i]}`);
    }
  }
  return commands;
}

/**
 * @param {string} svgText - contents of an SVG font file
 * @returns {{ unitsPerEm: number, glyphs: Map<string, { advance: number, commands: object[] }>, defaultAdvance: number }}
 */
export function parseHersheyFont(svgText) {
  const doc = new DOMParser().parseFromString(svgText, 'image/svg+xml');
  const fontEl = doc.querySelector('font');
  const face = doc.querySelector('font-face');
  const defaultAdvance = parseFloat(fontEl.getAttribute('horiz-adv-x'));
  const glyphs = new Map();
  for (const g of doc.querySelectorAll('glyph')) {
    const d = g.getAttribute('d');
    glyphs.set(g.getAttribute('unicode'), {
      advance: parseFloat(g.getAttribute('horiz-adv-x')) || defaultAdvance,
      commands: d ? parsePath(d) : [],
    });
  }
  return { unitsPerEm: parseFloat(face.getAttribute('units-per-em')), glyphs, defaultAdvance };
}

/** Width of `text` in px at `size` */
export function hersheyTextWidth(font, text, size) {
  const scale = size / font.unitsPerEm;
  let width = 0;
  for (const ch of text) width += (font.glyphs.get(ch)?.advance ?? font.defaultAdvance) * scale;
  return width;
}

/**
 * Draws `text` with its left end at x and its baseline at y. Each stroke is
 * an open shape, so nothing gets closed back to its start.
 */
export function drawHersheyText(p, font, text, x, y, size) {
  const scale = size / font.unitsPerEm;
  // Glyph space is y-up from the baseline; the canvas is y-down
  const at = (gx, gy, ox) => [ox + gx * scale, y - gy * scale];
  let cursor = x;
  for (const ch of text) {
    const glyph = font.glyphs.get(ch);
    let open = false;
    for (const cmd of glyph?.commands ?? []) {
      if (cmd.type === 'M') {
        if (open) p.endShape();
        p.beginShape();
        p.vertex(...at(cmd.x, cmd.y, cursor));
        open = true;
      } else if (cmd.type === 'L') {
        p.vertex(...at(cmd.x, cmd.y, cursor));
      } else if (cmd.type === 'C') {
        p.bezierVertex(
          ...at(cmd.x1, cmd.y1, cursor),
          ...at(cmd.x2, cmd.y2, cursor),
          ...at(cmd.x, cmd.y, cursor),
        );
      }
    }
    if (open) p.endShape();
    cursor += (glyph?.advance ?? font.defaultAdvance) * scale;
  }
}
