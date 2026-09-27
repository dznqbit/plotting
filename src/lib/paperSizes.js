// Paper sizes at 96 DPI. widthMm/heightMm are the real-world dimensions -
// used to stamp explicit physical units on exported SVGs, so consumers
// (e.g. Inkscape) don't have to guess a DPI to convert the pixel-based
// width/height into a real-world plot size.
export const paperSizes = {
  A4: { width: 794, height: 1123, widthMm: 210, heightMm: 297, label: 'A4 (210 x 297 mm)' },
  A2: { width: 1587, height: 2245, widthMm: 420, heightMm: 594, label: 'A2 (420 x 594 mm)' },
  '7x10': { width: 673, height: 960, widthMm: 178, heightMm: 254, label: '7x10 (178 x 254 mm)' }
}

export let currentSize = '7x10'

export function setCurrentSize(size) {
  currentSize = size
}
