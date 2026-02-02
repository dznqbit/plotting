import { initSketch } from "../../src/lib/sketchWrapper.js";
import { intersectTwoCircles } from "../../src/lib/intersectTwoCircles.js"

initSketch((p) => {
  p.stroke(0);
  p.strokeWeight(1);
  p.noFill();

  const w = p.width;
  const h = p.height;

  const n = 16;
  const j = 4;
  const r = Math.floor(p.width / n);

  for (var i = 0; i < n; i++) {
    const x1 = 2 * r + ((i % j) / j) * w;
    const y1 = 3 * r + (Math.floor(i / j) / j) * h;

    // Draw the main circle (clip boundary)
    p.circle(x1, y1, r);

    // Calculate offset for the second circle
    const offsetX = (16 * (i % j)) / 2;
    const offsetY = (8 * i) / j;
    const x2 = x1 + offsetX;
    const y2 = y1 + offsetY;

    // Calculate distance between circle centers
    const dist = Math.sqrt(offsetX * offsetX + offsetY * offsetY);

    // Only draw the second circle if there's overlap
    if (dist < r) {
      const [[i1x, i1y], [i2x, i2y]] = intersectTwoCircles(x1, y1, r, x2, y2, r)
      p.line(i1x,  i1y, i2x, i2y);
      p.circle(x2, y2, r);
    }
  }
});
