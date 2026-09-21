import { rayAndCircleDoesIntersect, rayAndCircleIntersectionPoints } from '../../src/lib/intersectRayAndCircle.js';
import { initSketch } from '../../src/lib/sketchWrapper.js';

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

  const cR = (s * 0.65) / 2; // Size of circle

  // TL - TR
  // |     |
  // BL - BR
  const tY = -0.5 * s + cY;
  const bY = 0.5 * s + cY;
  const rX = -0.5 * s + cX;
  const lX = 0.5 * s + cX;

  const tr = [rX, tY];
  const br = [rX, bY];
  const bl = [lX, bY];
  const tl = [lX, tY];

  p.quad(...tr, ...br, ...bl, ...tl);

  // scan lines, top to bottom
  for (var i = 1; i < numLines; ++i) {
    const x = rX + 1 - (i * (rX - lX)) / numLines;
    const intersectionPoints = rayAndCircleIntersectionPoints([x, tY], [0, 1], [cX, cY], cR);
    
    if (intersectionPoints.length > 0) {
      const [tP, bP] = intersectionPoints;
      p.line(x, tY, tP[0], tP[1])
      p.line(bP[0], bP[1], x, bY)
    } else {
      p.line(x, tY, x, bY);
    }
  }

  // scan lines, left to right
  for (var i = 1; i < numLines; ++i) {
    const y = bY + 1 - (i * (bY - tY)) / numLines;
    const intersectionPoints = rayAndCircleIntersectionPoints([lX, y], [-1, 0], [cX, cY], cR);

    if (intersectionPoints.length > 0) {
      const [lP, rP] = intersectionPoints;
      p.line(lX, y, lP[0], lP[1])
      p.line(rP[0], rP[1], rX, y)
    } else {
      p.line(lX, y, rX, y);
    }
  }

  // p.ellipse(cX, cY, 2 * cR, 2 * cR);
});
