import { initSketch } from '../../src/lib/sketchWrapper.js'

initSketch(({ p, v, vh }) => {
  const cubes = [];
  
  for (var i = 0; i < 4; ++i) {
    vh.push()
    // vh.rotateZ(v.radians(0));
    // vh.translate(0.2 * i, 0, 0.01 * i**2 + 0.3 * i);
    
    // vh.rotateX(v.radians(-50));
    // vh.rotateZ(v.radians(2));
    // vh.translate(0.05 * i**2 + 0.1 * i, 1 * i, 0.02 * i**1.2);
    vh.translate(0, 0, i)
    vh.scale(1, 1, 1)
    cubes.push(vh.transform(new v.Cube()));
    vh.pop();
  }

  // vh.scene.add(v.newIntersection(...cubes));
  vh.scene.add(v.newUnion(...cubes));

  const paths = vh.render({ center: vh.vec(0, 0, 0), eye: vh.vec(4, 4, 4), fovy: 80 });

  p.stroke(p.inkColor())
  p.strokeWeight(2)
  vh.draw(paths)
})
