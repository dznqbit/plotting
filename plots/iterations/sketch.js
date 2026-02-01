import { initSketch } from "../../src/lib/sketchWrapper.js";

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
    const x = 2 * r + ((i % j) / j) * w;
    const y = 3 * r + (Math.floor(i / j) / j) * h;

    p.push();
    p.beginClip();
    p.circle(x, y, r);
    p.endClip();

    p.circle(x, y, r);
    p.circle(x + (16 * (i % j)) / 2, y + 8 * i / j, r);
    p.pop();
  }
});
