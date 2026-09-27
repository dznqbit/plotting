import { initSketch } from '../../src/lib/sketchWrapper.js';

initSketch(({ p, v, vh }) => {
  const coll = [];

  vh.push();
  vh.translate(-90, -129, -55);
  vh.scale(60, 5, 1);
  coll.push(vh.transform(vh.cube()));
  vh.scene.add(vh.cube());
  vh.pop();

  vh.push();
  vh.translate(-86, -100, -70);
  vh.scale(60, 10, 1);
  coll.push(vh.transform(vh.cube()));
  vh.scene.add(vh.cube());
  vh.pop();

  vh.push();
  vh.translate(-86, -72, -95);
  vh.scale(55, 5.5, 1);
  coll.push(vh.transform(vh.cube()));
  vh.scene.add(vh.cube());
  vh.pop();

  vh.push();
  vh.translate(-86, -45, -105);
  vh.scale(55, 5.5, 1);
  coll.push(vh.transform(vh.cube()));
  vh.scene.add(vh.cube());
  vh.pop();

  vh.translate(-45, -45);
  vh.scale(1, 1, 20);
  vh.translate(0, 0, -4);

  // vh.push();
  // vh.translate(0.0, 0.0, 0);
  // // coll.push(vh.transform(vh.cube()));
  // vh.scene.add(vh.cube());
  // vh.pop();

  // vh.push();
  // vh.translate(-2, 0, 0);
  // coll.push(vh.transform(vh.cube()));
  // // vh.scene.add(vh.transform(vh.cube()));
  // vh.pop();

  for (let j = 0, mj = 4; j < mj; ++j) {
    for (let i = 0, mi = 6; i < mi; ++i) {
      vh.push();

      vh.scale(2);
      vh.translate(-8 * i, -14 * j, 0);

      if (i % 2 == 0) {
        vh.rotateZ(16 * j); // i**2 * (2 + 1 * mj + 0.00277 * mi));
      }

      if (i == 1 && j == 1) {
        coll.push(vh.transform(vh.cylinder()));
        vh.scene.add(vh.cylinder());
      } else {
        // coll.push(vh.transform(vh.cube()));
        vh.scene.add(vh.cube());
      }

      // vh.rotateX(60)
      // vh.translate(1, -0.5, 0.5)
      // vh.rotateZ(i * (360/mi));
      // vh.translate(-0.3, 0, 0)
      // vh.scene.add(vh.transform(vh.cube(20, 20, 20)), `${j}`);

      vh.pop();
    }
  }

  // for (var i = 0; i < 3; ++i) {
  //   vh.push();

  //   vh.translate(0, 0, 2 - 2*i);
  //   vh.rotateX(v.radians(20));
  //   vh.scene.add(vh.sphere(0.8, { style: 'outline' }), '1')
  //   // vh.scale(1, -2, 1);
  //   // coll.push(vh.transform(vh.sphere(1.2, { style: 'outline' }), '1'))
  //   vh.pop();
  // }

  // vh.scene.add(v.newDifference(...coll), '2');
  // vh.scene.add(v.newIntersection(...coll), '2');
  // vh.scene.add(v.newUnion(...coll), '2');

  const paths = vh.render({ center: vh.vec(0, 0, 0), eye: vh.vec(250, 250, 250), fovy: 25, far: 800 });

  p.stroke(p.inkColor());
  p.strokeWeight(2);
  vh.draw(paths);
});
