import { initSketch } from '../../src/lib/sketchWrapper.js';

initSketch({
  includes: ['toko'],
  draw: ({ p, toko }) => {
    toko.setSeed('hello-toko-xyz');
    p.noFill();
    p.stroke(p.inkColor());

    const grid = new toko.Grid(3, 3, p.width, p.height);
    grid.splitRecursive(3, 0.5, 20, toko.Grid.SPLIT_LONGEST);

    grid.cells.forEach((c) => {
      p.rect(c.x, c.y, c.width, c.height);
    });
  },
});
