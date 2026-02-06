import { initSketch } from '../../src/lib/sketchWrapper.js';
import { intersectTwoCircles } from '../../src/lib/intersectTwoCircles.js';

initSketch((p) => {
  p.stroke(0);
  p.strokeWeight(1);
  p.noFill();

  const w = p.width * 0.8;
  const wPad = p.height * 0.05;
  const h = p.height * 0.8;
  const hPad = p.height * 0.1;

  const n = 64;
  const r = Math.floor(p.width / n);

  const coords = [];
  for (var i = 0; i < n; i++) {
    p.stroke(0);
    const x = (0.5 + 0.01 * (n - i) * Math.sin(-0.5 + (2 * Math.PI * i) / n)) * w;
    const y = (h * i) / n;
    coords.push({ x, y });
  }

  for (var i = 0; i < n; i++) {
    if (i == 0) {
      p.circle(coords[i].x + wPad, coords[i].y + hPad, r);
      continue;
    }

    const scaleR = n
    const scaleX = 1
    const scoleY = 1

    const x1 = coords[i - 1].x;
    const y1 = coords[i - 1].y;
    const r1 = r * (scaleR * (i - 1)/n)

    const x2 = coords[i].x;
    const y2 = coords[i].y;
    const r2 = r * (scaleR * i/n)

    const dist = Math.sqrt((x2 - x1)^2 + (y2 - y2)^2);
    const intersection = intersectTwoCircles(x1, y1, r1, x2, y2, r2);
  
    if (intersection.length > 0) {
      const [[i1x, i1y], [i2x, i2y]] = intersection
      const angle1 = Math.atan2(i1x - x2, i1y - y2);
      const angle2 = Math.atan2(i2x - x2, i2y - y2);
      p.arc(x2, y2, r2, r2, angle2, angle1);
    } else {
      p.circle(x2, y2, r2);
    }
    // p.arc(x2, y2, r, r, angle1, angle2);
  }

  // LET THIS BE A WORK IN PROGRESS.

  // Calculate offset for the second circle
  // const offsetX = (16 * (i % j)) / 2;
  // const offsetY = (8 * i) / j;
  // const x2 = x1 + offsetX;
  // const y2 = y1 + offsetY;

  // Calculate distance between circle centers
  // const dist = Math.sqrt(offsetX * offsetX + offsetY * offsetY);

  // Only draw the second circle if there's overlap
  // if (dist < r) {
  //   const [[i1x, i1y], [i2x, i2y]] = intersectTwoCircles(x1, y1, r / 2, x2, y2, r / 2);

  //   const angle1 = Math.atan2(i1y - y2, i1x - x2);
  //   const angle2 = Math.atan2(i2y - y2, i2x - x2);

  //   p.arc(x2, y2, r, r, angle2, angle1);
  //   // p.arc(x2, y2, r, r, angle1, angle2);
  // }
  // }
});
