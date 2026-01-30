import { paperSizes, currentSize, setCurrentSize } from './paperSizes.js'

export function createControls(onSizeChange, onSave) {
  const controls = document.createElement('div')
  controls.id = 'controls'
  controls.innerHTML = `
    <label for="paperSize">Paper Size:</label>
    <select id="paperSize">
      <option value="A4">A4 (210 x 297 mm)</option>
      <option value="A2">A2 (420 x 594 mm)</option>
    </select>
    <button id="saveButton">Export SVG</button>
  `

  const select = controls.querySelector('#paperSize')
  select.value = currentSize
  select.addEventListener('change', (e) => {
    const newSize = e.target.value
    setCurrentSize(newSize)
    if (onSizeChange) {
      onSizeChange(paperSizes[newSize])
    }
  })

  const saveButton = controls.querySelector('#saveButton')
  saveButton.addEventListener('click', () => {
    if (onSave) {
      onSave()
    }
  })

  return controls
}
