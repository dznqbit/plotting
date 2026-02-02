import { initSketch } from '../../src/lib/sketchWrapper.js';
import { intersectTwoCircles } from '../../src/lib/intersectTwoCircles.js';

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
    p.stroke(0);
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
      const [[i1x, i1y], [i2x, i2y]] = intersectTwoCircles(x1, y1, r / 2, x2, y2, r / 2);

      const angle1 = Math.atan2(i1y - y2, i1x - x2);
      const angle2 = Math.atan2(i2y - y2, i2x - x2);

      p.arc(x2, y2, r, r, angle2, angle1);
      // p.arc(x2, y2, r, r, angle1, angle2);
    }
  }
});
