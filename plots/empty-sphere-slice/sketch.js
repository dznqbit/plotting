import { initSketch } from '../../src/lib/sketchWrapper.js';
import { PI } from 'p5';

initSketch((p) => {
  const W = p.width;
  const H = p.height;

  p.stroke(p.inkColor());
  p.strokeWeight(2);
  p.noFill();

  const cX = 0.5 * W;
  const cY = 0.5 * H;
  const s = W / 2; // Size of square
  const numLines = 10;

  // TL - TR
  // |     |
  // BL - BR
  const tY = -0.5 * s + cY
  const bY = 0.5 * s + cY
  const rX = -0.5 * s + cX
  const lX = 0.5 * s + cX
  
  const tr = [rX, tY];
  const br = [rX, bY];
  const bl = [lX, bY];
  const tl = [lX, tY];

  p.quad(...tr, ...br, ...bl, ...tl);

  // scan lines, top to bottom
  for (var i = 0; i < numLines; ++i) {
    const x = rX + 1 - (i * (rX - lX) / numLines);
    p.line(x, tY, x, bY);
  }

  // scan lines, left to right
  for (var i = 0; i < numLines; ++i) {
    const y = bY + 1 - (i * (bY - tY) / numLines);
    p.line(lX, y, rX, y);
  }
});
