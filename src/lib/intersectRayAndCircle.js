import p5 from 'p5';

const vec = (x) => new p5.Vector(...x);

// https://math.stackexchange.com/questions/3894559/how-to-check-if-a-ray-intersects-a-circle
export function rayAndCircleDoesIntersect(origin, direction, circleCenter, r) {
  // Determine if line intersects with circle
  // Define ray as                                          𝑟(𝑡)=𝑜+𝑡𝑒
  // Define circle center 𝑐 and radius 𝑅
  // Find the distance along the ray closest to the center  𝑡=𝑒⋅(𝑐−𝑜)
  // Find closest point on ray to the circle center         𝑝=𝑜+𝑡𝑒
  // Check if points is inside the radius                   ‖𝑝−𝑐‖≤𝑅
  // Optimized, check square of the distance                (𝑝−𝑐)⋅(𝑝−𝑐)≤𝑅2
  const o = vec(origin);
  const e = vec(direction);
  const c = vec(circleCenter);

  // Find distance along ray closest to center. Dot product of e * (c - o)
  // e is unit vector, heading top to bottom.
  const diff = p5.Vector.sub(c, o);
  const t = e.dot(diff);

  // // Find closest point on ray to circle center 𝑝=𝑜+𝑡𝑒
  const closestPoint = p5.Vector.add(o, p5.Vector.mult(e, t));

  // Now check square of distance
  const psc = closestPoint.copy().sub(c);
  const doesIntersect = psc.dot(psc) <= r ** 2;

  return doesIntersect;
}

// https://www.bluebill.net/2021/circle_ray_intersection.html
export function rayAndCircleIntersectionPoints(origin, direction, circleCenter, r) {
  if (!rayAndCircleDoesIntersect(origin, direction, circleCenter, r)) {
    return [];
  }

  const c = vec(circleCenter);
  const p = vec(origin);
  const v = vec(direction);

  const u = p5.Vector.sub(c, p);
  const u1 = p5.Vector.mult(v, p5.Vector.dot(u, v));
  const u2 = p5.Vector.sub(u, u1);

  const d = u2.dist(vec([0, 0]));
  const m = Math.sqrt(r ** 2 - d ** 2);

  const p1 = p5.Vector.add(p5.Vector.add(p, u1), p5.Vector.mult(v, -m));
  const p2 = p5.Vector.add(p5.Vector.add(p, u1), p5.Vector.mult(v, m));

  return [[p1.x, p1.y], [p2.x, p2.y]];
}
