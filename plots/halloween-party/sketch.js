import { initSketch } from '../../src/lib/sketchWrapper.js';

// Pumpkin seams, drawn as architectural views.
//
// Each seam is a meridian: a 2D profile curve (radius r, height y) swept
// around the vertical axis to angle theta. The profile is a cubic bezier, and
// both the sweep-to-plane (r, y) -> (r cos θ, y, r sin θ) and the orthographic
// projection are linear, so projecting the bezier's control points gives the
// exact projected curve - we can hand them straight to p.bezier.
//
// Every view is the same orthographic projection with a different camera
// pitch: a plan looks straight down, an elevation looks straight on, and
// 'tilted' is the axonometric in-between. Plan and elevation are axis-aligned,
// which makes hidden lines easy to drop exactly: in plan only the upper half
// of each seam (stem to widest point) faces the camera, and in elevation only
// the seams on the near side do.

const SECTIONS = 9;
// How far each lobe swells past the seams, as a radius multiplier
const LOBE_BULGE = 1.11;
const OUTLINE_SAMPLES = 720; // vertices for the plan's scalloped perimeter
const SPIN = 0.24; // radians, rotation of the pumpkin around its vertical axis

// Camera setups. `tilt` pitches the camera down; `yaw` turns the pumpkin
// about its vertical axis before viewing; `style` picks which lines to draw.
const KINDS = {
  plan: { tilt: Math.PI / 2, yaw: 0, style: 'plan' },
  elevation: { tilt: 0, yaw: 0, style: 'elevation' },
  // Side elevation: turned so the pumpkin's +x side faces the camera
  elevation2: { tilt: 0, yaw: Math.PI / 2, style: 'elevation' },
  tilted: { tilt: 0.75, yaw: 0, style: 'tilted' }, // tips the top of the pumpkin toward the viewer
};

// Which views to draw, and where their centers sit as fractions of the page.
// Plan sits above the front elevation (third-angle convention), so the two
// line up vertically.
// Pumpkin radius as a fraction of page width. A view can override it with its own `size`.
const SIZE = 0.15;

const y1 = 0.25
const y2 = 0.5

const VIEWS = [
  { kind: 'plan', at: [0.25, y2] },
  { kind: 'elevation', at: [0.25, y1] },
  { kind: 'elevation2', at: [0.75, y1] },
  { kind: 'tilted', at: [0.75, y2] }
];

// Vertical stretch of the body; 1 is the profile as written below
const HEIGHT = 1.45;

// Seam profile in (r, y) units relative to pumpkin radius; y is up.
// Starts in the stem dimple, bulges out to full width, tucks back in at the base.
const PROFILE = [
  { r: 0.12, y: 0.42 }, // top, in the dimple around the stem
  { r: 1.35, y: 0.75 }, // pulls the shoulder out and up
  { r: 1.3, y: -0.8 }, // pulls the belly out and down
  { r: 0.15, y: -0.5 }, // bottom, tucked under
].map(({ r, y }) => ({ r, y: y * HEIGHT }));

// Stem: a tapered tube around a bent spine, rising out of the dimple.
// Each spine control point is a cubic bezier control point; the radius
// tapers along it.
// Written relative to the dimple, then lifted to wherever the dimple ends up,
// so the stem keeps its own size when HEIGHT changes.
const STEM_SPINE = [
  { x: 0, y: 0, z: 0 },
  { x: 0, y: 0.18, z: 0 },
  { x: 0.02, y: 0.3, z: 0 },
  { x: 0.12, y: 0.38, z: 0.02 },
].map((pt) => ({ ...pt, y: pt.y + PROFILE[0].y }));
const STEM_RADII = [0.1, 0.09, 0.08, 0.075];
const STEM_LINES = 4;
const RING_SAMPLES = 32; // vertices for the stem's cut-off top

// Hidden-line removal for the tilted view, via a depth buffer: the body and
// stem surfaces are sampled densely and splatted into a coarse screen grid
// that remembers the nearest depth per cell. A line point is visible if
// nothing in its cell is meaningfully nearer.
const CLIP_TILTED = true;
const DEPTH_CELL = 2; // px per depth buffer cell
const DEPTH_EPSILON = 0.22; // model units; slack so lines on a surface don't hide themselves
const CLIP_STEPS = 120; // visibility samples per curve
// Where a surface turns away from the camera, one cell spans a wide range of
// depths and visibility flickers. Flickers this short (in samples) get smoothed out.
const MIN_GAP = 4; // shorter hidden gaps are filled in
const MIN_RUN = 6; // shorter visible runs are dropped

// Parameter where the profile is widest (r'(t) = 0): the pumpkin's equator,
// and the edge of what a plan view can see.
const T_WIDEST = (() => {
  const [p0, p1, p2, p3] = PROFILE.map((pt) => pt.r);
  const a = p1 - p0;
  const b = p2 - p1;
  const c = p3 - p2;
  // r'(t) / 3 = (a - 2b + c) t² + 2(b - a) t + a
  const A = a - 2 * b + c;
  const B = 2 * (b - a);
  if (Math.abs(A) < 1e-9) return -a / B;
  const disc = Math.sqrt(B * B - 4 * A * a);
  return [(-B - disc) / (2 * A), (-B + disc) / (2 * A)].find((t) => t >= 0 && t <= 1);
})();

const R_WIDEST = (() => {
  const t = T_WIDEST;
  const u = 1 - t;
  const w = [u * u * u, 3 * u * u * t, 3 * u * t * t, t * t * t];
  return PROFILE.reduce((sum, pt, i) => sum + pt.r * w[i], 0);
})();

// Lobed body: the surface radius at angle theta is the seam profile's radius
// scaled up by a bump that's 1 at each seam and LOBE_BULGE midway between.
// Because the scale doesn't depend on height, every outline of the body is
// just the seam profile scaled.
function lobeScale(theta) {
  const span = (2 * Math.PI) / SECTIONS;
  const across = ((((theta - SPIN) % span) + span) % span) / span;
  return 1 + (LOBE_BULGE - 1) * Math.sin(Math.PI * across);
}

// How far the body reaches toward screen +x in an elevation turned by `yaw`,
// relative to the seam profile: the most any lobe sticks out that way.
function silhouetteScale(yaw) {
  let best = 0;
  for (let k = 0; k < OUTLINE_SAMPLES; k++) {
    const theta = (k / OUTLINE_SAMPLES) * 2 * Math.PI;
    best = Math.max(best, lobeScale(theta) * Math.cos(theta + yaw));
  }
  return best;
}

// Point on the seam profile at parameter t
function evalProfile(t) {
  const u = 1 - t;
  const w = [u * u * u, 3 * u * u * t, 3 * u * t * t, t * t * t];
  return {
    r: PROFILE.reduce((sum, pt, i) => sum + pt.r * w[i], 0),
    y: PROFILE.reduce((sum, pt, i) => sum + pt.y * w[i], 0),
  };
}

// A point on the stem tube's surface, at spine control point i, angle phi around it
function stemPoint(i, phi) {
  const { x, y, z } = STEM_SPINE[i];
  const r = STEM_RADII[i];
  return { x: x + r * Math.cos(phi), y, z: z + r * Math.sin(phi) };
}

function sweep({ r, y }, theta) {
  return { x: r * Math.cos(theta), y, z: r * Math.sin(theta) };
}

// Turn about the y axis by `yaw` (so sweep(pt, θ) lands at sweep(pt, θ + yaw)),
// rotate about the x axis by `tilt`, then drop z (orthographic). `depth` is
// the dropped coordinate: larger is nearer the camera.
function project({ x, y, z }, tilt, yaw) {
  const xr = x * Math.cos(yaw) - z * Math.sin(yaw);
  const zr = x * Math.sin(yaw) + z * Math.cos(yaw);
  const yt = y * Math.cos(tilt) - zr * Math.sin(tilt);
  const depth = y * Math.sin(tilt) + zr * Math.cos(tilt);
  return { x: xr, y: yt, depth };
}

function cubic3([p0, p1, p2, p3], t) {
  const u = 1 - t;
  const w = [u * u * u, 3 * u * u * t, 3 * u * t * t, t * t * t];
  const at = (k) => w[0] * p0[k] + w[1] * p1[k] + w[2] * p2[k] + w[3] * p3[k];
  return { x: at('x'), y: at('y'), z: at('z') };
}

// The piece of a 2D cubic bezier between parameters t0 and t1 (de Casteljau)
function bezierSegment(pts, t0, t1) {
  const split = ([p0, p1, p2, p3], t) => {
    const lerp = (a, b) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
    const a = lerp(p0, p1);
    const b = lerp(p1, p2);
    const c = lerp(p2, p3);
    const d = lerp(a, b);
    const e = lerp(b, c);
    const f = lerp(d, e);
    return [[p0, a, d, f], [f, e, c, p3]];
  };
  const [left] = split(pts, t1);
  return t0 <= 0 ? left : split(left, t0 / t1)[1];
}

// Smooths a visibility mask: fills short hidden gaps between visible runs,
// then drops short visible runs. Gaps touching an open end are left alone.
function despeckle(shown, closed = false) {
  const out = [...shown];
  const n = out.length;
  const runs = (value) => {
    const found = [];
    let i = 0;
    while (i < n) {
      if (out[i] !== value) {
        i++;
        continue;
      }
      let j = i;
      while (j < n && out[j] === value) j++;
      found.push([i, j]);
      i = j;
    }
    // Merge a run that wraps around a closed loop
    if (closed && found.length > 1 && found[0][0] === 0 && found.at(-1)[1] === n) {
      const [first] = found.splice(0, 1);
      found.at(-1)[1] = n + first[1];
    }
    return found;
  };
  const set = ([a, b], value) => {
    for (let i = a; i < b; i++) out[i % n] = value;
  };
  for (const run of runs(false)) {
    const interior = closed || (run[0] > 0 && run[1] < n);
    if (interior && run[1] - run[0] < MIN_GAP) set(run, true);
  }
  for (const run of runs(true)) {
    if (run[1] - run[0] < MIN_RUN) set(run, false);
  }
  return out;
}

// Splats the body and stem surfaces into a depth grid. Returns visible(pt3).
function buildDepthTest(project3, width, height) {
  const cols = Math.ceil(width / DEPTH_CELL);
  const rows = Math.ceil(height / DEPTH_CELL);
  const depth = new Float32Array(cols * rows).fill(-Infinity);
  const cell = (sx, sy) => {
    const ix = Math.floor(sx / DEPTH_CELL);
    const iy = Math.floor(sy / DEPTH_CELL);
    return ix < 0 || iy < 0 || ix >= cols || iy >= rows ? -1 : ix + iy * cols;
  };
  const splat = (pt3) => {
    const [sx, sy, d] = project3(pt3);
    const i = cell(sx, sy);
    if (i >= 0 && d > depth[i]) depth[i] = d;
  };

  // Lobed body
  const T_SAMPLES = 500;
  const THETA_SAMPLES = 1440;
  for (let i = 0; i <= T_SAMPLES; i++) {
    const { r, y } = evalProfile(i / T_SAMPLES);
    for (let k = 0; k < THETA_SAMPLES; k++) {
      const theta = (k / THETA_SAMPLES) * 2 * Math.PI;
      splat(sweep({ r: r * lobeScale(theta), y }, theta));
    }
  }

  // Stem tube and its cut-off top
  const PHI_SAMPLES = 240;
  const capIndex = STEM_SPINE.length - 1;
  for (let k = 0; k < PHI_SAMPLES; k++) {
    const phi = (k / PHI_SAMPLES) * 2 * Math.PI;
    const ctrl = STEM_SPINE.map((_, i) => stemPoint(i, phi));
    for (let j = 0; j <= 100; j++) splat(cubic3(ctrl, j / 100));
    const center = STEM_SPINE[capIndex];
    for (let j = 0; j <= 20; j++) {
      const edge = stemPoint(capIndex, phi);
      const f = j / 20;
      splat({
        x: center.x + (edge.x - center.x) * f,
        y: center.y,
        z: center.z + (edge.z - center.z) * f,
      });
    }
  }

  return (pt3) => {
    const [sx, sy, d] = project3(pt3);
    const i = cell(sx, sy);
    return i < 0 || d >= depth[i] - DEPTH_EPSILON;
  };
}

// Front half of a 2D cubic bezier, up to parameter t (de Casteljau)
function bezierHead([p0, p1, p2, p3], t) {
  const lerp = (a, b) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
  const a = lerp(p0, p1);
  const b = lerp(p1, p2);
  const c = lerp(p2, p3);
  const d = lerp(a, b);
  const e = lerp(b, c);
  return [p0, a, d, lerp(d, e)];
}

initSketch({
  includes: [],
  draw: ({ p }) => {
    p.strokeWeight(2);
    p.noFill();

    const closedPath = (pts) => {
      p.beginShape();
      for (const [x, y] of pts) p.vertex(x, y);
      p.endShape(p.CLOSE);
    };

    for (const view of VIEWS) {
      const { tilt, yaw, style } = KINDS[view.kind];
      const cx = p.width * view.at[0];
      const cy = p.height * view.at[1];
      const radius = p.width * (view.size ?? SIZE);

      // Screen y points down, model y points up
      const project3 = (pt3) => {
        const { x, y, depth } = project(pt3, tilt, yaw);
        return [cx + x * radius, cy - y * radius, depth];
      };
      const toScreen = (pt3) => project3(pt3).slice(0, 2);

      const visible =
        CLIP_TILTED && style === 'tilted' ? buildDepthTest(project3, p.width, p.height) : null;
      const pen = makePen(toScreen, visible);

      p.withLayer('1-Body', () => {
        p.stroke(p.inkColor());
        drawBody(style, yaw, toScreen, pen);
      });
      p.withLayer('2-Stem', () => {
        p.stroke(p.inkColor());
        drawStem(style, yaw, toScreen, pen);
      });
    }

    // Draws 3D curves, keeping only the parts `visible` passes (all of them if
    // it's null). Beziers stay exact beziers; loops become open polylines
    // wherever they're interrupted.
    function makePen(toScreen, visible) {
      const bezier3 = (ctrl3) => {
        const ctrl2 = ctrl3.map(toScreen);
        if (!visible) {
          p.bezier(...ctrl2.flat());
          return;
        }
        const mask = despeckle(
          Array.from({ length: CLIP_STEPS + 1 }, (_, i) => visible(cubic3(ctrl3, i / CLIP_STEPS))),
        );
        let start = null;
        for (let i = 0; i <= CLIP_STEPS; i++) {
          const t = i / CLIP_STEPS;
          const shown = mask[i];
          if (shown && start === null) start = t;
          if ((!shown || i === CLIP_STEPS) && start !== null) {
            const end = shown ? t : t - 1 / CLIP_STEPS;
            if (end > start) p.bezier(...bezierSegment(ctrl2, start, end).flat());
            start = null;
          }
        }
      };

      const loop3 = (pts3, subdivisions = 8) => {
        if (!visible) {
          closedPath(pts3.map(toScreen));
          return;
        }
        // Densify each edge so visibility can change partway along it
        const dense = pts3.flatMap((a, i) => {
          const b = pts3[(i + 1) % pts3.length];
          return Array.from({ length: subdivisions }, (_, j) => {
            const f = j / subdivisions;
            return { x: a.x + (b.x - a.x) * f, y: a.y + (b.y - a.y) * f, z: a.z + (b.z - a.z) * f };
          });
        });
        const shown = despeckle(dense.map(visible), true);
        const firstHidden = shown.indexOf(false);
        if (firstHidden < 0) {
          closedPath(dense.map(toScreen));
          return;
        }
        // Walk once around, starting from a hidden point so no run wraps
        let run = [];
        const flush = () => {
          if (run.length > 1) {
            p.beginShape();
            for (const [x, y] of run) p.vertex(x, y);
            p.endShape();
          }
          run = [];
        };
        for (let n = 1; n <= dense.length; n++) {
          const i = (firstHidden + n) % dense.length;
          if (shown[i]) run.push(toScreen(dense[i]));
          else flush();
        }
        flush();
      };

      return { bezier3, loop3 };
    }

    function drawBody(style, yaw, toScreen, pen) {
      const top = [];
      const butt = [];
      for (let i = 0; i < SECTIONS; i++) {
        const theta = SPIN + (i / SECTIONS) * p.TWO_PI;
        const pts3 = PROFILE.map((pt) => sweep(pt, theta));
        const pts = pts3.map(toScreen);
        top.push(pts3[0]);
        butt.push(pts3[pts3.length - 1]);

        if (style === 'plan') {
          // The lower half doubles back along the same line, out of sight
          p.bezier(...bezierHead(pts, T_WIDEST).flat());
        } else if (style === 'elevation') {
          // Seams on the far side are hidden
          if (Math.sin(theta + yaw) > 0) p.bezier(...pts.flat());
        } else {
          pen.bezier3(pts3);
        }
      }

      if (style === 'plan') {
        closedPath(top.map(toScreen));
        // Scalloped perimeter: the lobed body's radius at the equator, all the
        // way around. Cusps land on the seam ends.
        const perimeter = [];
        for (let k = 0; k < OUTLINE_SAMPLES; k++) {
          const theta = (k / OUTLINE_SAMPLES) * p.TWO_PI;
          perimeter.push(toScreen(sweep({ r: R_WIDEST * lobeScale(theta), y: 0 }, theta)));
        }
        closedPath(perimeter);
      } else if (style === 'elevation') {
        // Silhouette: the seam profile, scaled out to the widest lobe on each
        // side. Sweeping to -yaw / π - yaw puts it at screen right / left.
        const right = { theta: -yaw, scale: silhouetteScale(yaw) };
        const left = { theta: Math.PI - yaw, scale: silhouetteScale(yaw + Math.PI) };
        const edge = (pt, side) => toScreen(sweep({ r: pt.r * side.scale, y: pt.y }, side.theta));
        for (const side of [right, left]) {
          p.bezier(...PROFILE.flatMap((pt) => edge(pt, side)));
        }

        // Butt: the base ring is edge-on, so it's a line joining the two silhouette ends
        const base = PROFILE[PROFILE.length - 1];
        p.line(...edge(base, right), ...edge(base, left));
      } else {
        // Join the seams' ends into closed rings at the stem dimple and the base
        pen.loop3(top);
        pen.loop3(butt);
        // The outline is the edge of what's visible, so it never needs clipping
        closedPath(tiltedOutline(toScreen));
      }
    }

    // Outline of the lobed body from an arbitrary camera. There's no tidy
    // closed form once the camera is tilted, so: sample the surface densely,
    // project, and keep the farthest point from the body's center in each
    // direction. Assumes the outline is star-shaped around that center, which
    // holds for a pumpkin.
    function tiltedOutline(toScreen) {
      const T_SAMPLES = 200;
      const [ox, oy] = toScreen({ x: 0, y: 0, z: 0 });
      const best = new Array(OUTLINE_SAMPLES).fill(null);
      for (let i = 0; i <= T_SAMPLES; i++) {
        const { r, y } = evalProfile(i / T_SAMPLES);
        for (let k = 0; k < OUTLINE_SAMPLES; k++) {
          const theta = (k / OUTLINE_SAMPLES) * p.TWO_PI;
          const [sx, sy] = toScreen(sweep({ r: r * lobeScale(theta), y }, theta));
          const angle = Math.atan2(sy - oy, sx - ox);
          const bin = Math.floor(((angle + Math.PI) / p.TWO_PI) * OUTLINE_SAMPLES) % OUTLINE_SAMPLES;
          const dist = Math.hypot(sx - ox, sy - oy);
          if (!best[bin] || dist > best[bin].dist) best[bin] = { dist, pt: [sx, sy] };
        }
      }
      return best.filter(Boolean).map((b) => b.pt);
    }

    function drawStem(style, yaw, toScreen, pen) {
      // Lines running up the tube, offset from the spine by the tapering radius
      const stemLine = (phi) => {
        pen.bezier3(STEM_SPINE.map((_, i) => stemPoint(i, phi)));
      };

      const capIndex = STEM_SPINE.length - 1;

      if (style === 'elevation') {
        // Silhouette plus the near-side lines; the cut-off top is edge-on
        const left = -yaw;
        const right = Math.PI - yaw;
        stemLine(left);
        stemLine(right);
        for (let j = 0; j < STEM_LINES; j++) {
          const phi = SPIN + (j / STEM_LINES) * p.TWO_PI;
          if (Math.sin(phi + yaw) > 0) stemLine(phi);
        }
        p.line(...toScreen(stemPoint(capIndex, left)), ...toScreen(stemPoint(capIndex, right)));
        return;
      }

      for (let j = 0; j < STEM_LINES; j++) {
        stemLine(SPIN + (j / STEM_LINES) * p.TWO_PI);
      }

      // Stem's cut-off top
      const cap = [];
      for (let k = 0; k < RING_SAMPLES; k++) {
        const phi = (k / RING_SAMPLES) * p.TWO_PI;
        cap.push(stemPoint(capIndex, phi));
      }
      pen.loop3(cap, 2);
    }
  },
});
