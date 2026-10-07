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
