import * as tokoFunctions from 'toko/toko-library/functions/index.js'
import * as tokoClasses from 'toko/toko-library/classes/index.js'
import { libraryState } from 'toko/toko-library/core/state.js'
import { ContextManager } from 'toko/toko-library/core/context.js'
import * as tokoConstants from 'toko/toko-library/config/constants.js'

// Toko (https://github.com/bcorporaal/Toko): grids, seeded RNG, noise, color
// palettes, easing. Its own entry point auto-initializes against global-mode
// p5 and dumps every function onto window; we skip that and build the same
// `toko` object it would expose. Our ../Toko checkout (branch instance-mode)
// calls p5 through ContextManager instead of p5 globals, so we point that at
// this sketch's p5 instance - preview and SVG export each have their own.
//
// Enable with `includes: ['toko']` in initSketch, then:
//
//   draw: ({ p, toko }) => {
//     p.stroke(p.inkColor())
//     p.strokeWeight(2)
//     p.noFill()
//
//     // --- Seeded randomness ---
//     // toko.random() and friends draw from one seeded RNG, restarted at the
//     // top of every draw, so the SVG export matches the preview. Set a seed
//     // to pick a different (but repeatable) outcome.
//     toko.setSeed('my-sketch')
//
//     // --- Grids ---
//     // toko.Grid lays out cells in canvas pixels; splitRecursive() subdivides
//     // them using that same RNG.
//     const grid = new toko.Grid(3, 3, p.width, p.height)
//     grid.splitRecursive(3, 0.5, 20, toko.Grid.SPLIT_LONGEST)
//     for (const c of grid.cells) {
//       p.rect(c.x, c.y, c.width, c.height)
//       p.circle(c.x + c.width / 2, c.y + c.height / 2, toko.random(10, 40))
//     }
//   }

// Toko's random()/setSeed() etc. go through one module-level default RNG,
// normally created by its init()
if (!libraryState.RNG) {
  libraryState.RNG = new tokoClasses.RNG()
}

export function createToko(p) {
  ContextManager.setContext(p)
  // Restart the default RNG's sequence from its current seed, so every draw
  // (preview redraws, SVG export) gets the same numbers - the exported plot
  // has to match what's on screen.
  libraryState.RNG.resetSeed()

  const toko = { ...tokoConstants, ...tokoClasses }
  // A few functions (gradientCircle, pulse) still call p5 through `this`
  for (const [name, value] of Object.entries(tokoFunctions)) {
    toko[name] = typeof value === 'function' ? value.bind(p) : value
  }
  return toko
}
