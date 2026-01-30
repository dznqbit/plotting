// Paper sizes at 96 DPI
export const paperSizes = {
  A4: { width: 794, height: 1123 },  // 210 x 297 mm
  A2: { width: 1587, height: 2245 }  // 420 x 594 mm
}

export let currentSize = 'A4'

export function setCurrentSize(size) {
  currentSize = size
}
