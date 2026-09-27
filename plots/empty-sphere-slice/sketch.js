import { rayAndCircleIntersectionPoints } from '../../src/lib/intersectRayAndCircle.js';
import { initSketch } from '../../src/lib/sketchWrapper.js';

initSketch((p) => {
  const W = p.width;
  const H = p.height;

  p.stroke(p.inkColor());
  p.strokeWeight(2);
  p.noFill();

  const numGrids = 10;
  for (var i = 0; i < numGrids; ++i) {
    const circleRadius = W * 0.2 * (1 * Math.sin((2 * 3.14) * (0.33 + i) / numGrids));
    drawGridWithHole(p, {
      gridSize: W * 0.5,
      numLines: 10,
      circleCenter: [0.5 * W, 0.5 * W],
      circleRadius,
      translateZ: -100 + i * 60,
      layerName: `${i % 5}`,
    });
  }
});

function drawGridWithHole(p, { gridSize, numLines, circleCenter, circleRadius, translateZ, layerName }) {
  const [cX, cY] = circleCenter;
  const s = gridSize;

  const cR = circleRadius;

  const tY = -0.5 * s + cY;
  const bY = 0.5 * s + cY;
  const rX = -0.5 * s + cX;
  const lX = 0.5 * s + cX;

  // Isometric view: rotate the flat grid 45deg in-plane, then squash
  // vertically - the closed-form 2D equivalent of tilting this page flat
  // and viewing it from an isometric camera angle. All geometry above
  // (square corners, scan-line endpoints, circle intersections) is still
  // computed in the original "face-on" coordinate space; we only bend it
  // through this map right before drawing. That's on purpose: p5.svg-dual
  // bakes per-point transforms into path-based shapes correctly, but a
  // canvas-level push()/rotate()/pop() around line()/quad() calls does NOT
  // make it into the exported SVG - see cylindrical-text/sketch.js for the
  // same by-hand-transform workaround.
  const ISO_ANGLE = p.radians(30);
  const isoCos = Math.cos(ISO_ANGLE);
  const isoSin = Math.sin(ISO_ANGLE);

  const iso = ([x, y]) => {
    const dx = x - cX;
    const dy = y - cY;
    return [cX + (dx - dy) * isoCos, translateZ + cY + (dx + dy) * isoSin];
  };

  const isoLine = (a, b) => {
    const [x1, y1] = iso(a);
    const [x2, y2] = iso(b);
    p.line(x1, y1, x2, y2);
  };

  // p.quad(...iso(tr), ...iso(br), ...iso(bl), ...iso(tl));
  // p.circle(cX, cY, cR * 2)

  p.withLayer(layerName, () => {
    // scan lines, top to bottom
    for (var i = 1; i < numLines; ++i) {
      const x = rX + 1 - (i * (rX - lX)) / numLines;
      const intersectionPoints = rayAndCircleIntersectionPoints([x, tY], [0, 1], [cX, cY], cR);

      if (intersectionPoints.length > 0) {
        const [tP, bP] = intersectionPoints;
        isoLine([x, tY], tP);
        isoLine(bP, [x, bY]);
      } else {
        isoLine([x, tY], [x, bY]);
      }
    }

    // scan lines, left to right
    for (var i = 1; i < numLines; ++i) {
      const y = bY + 1 - (i * (bY - tY)) / numLines;
      const intersectionPoints = rayAndCircleIntersectionPoints([lX, y], [-1, 0], [cX, cY], cR);

      if (intersectionPoints.length > 0) {
        const [lP, rP] = intersectionPoints;
        isoLine([lX, y], lP);
        isoLine(rP, [rX, y]);
      } else {
        isoLine([lX, y], [rX, y]);
      }
    }
  });
}
