import { paperSizes, currentSize, setCurrentSize } from './paperSizes.js'

export function createControls(onSizeChange, onSave) {
  const controls = document.createElement('div')
  controls.id = 'controls'
  const options = Object.entries(paperSizes)
    .map(([key, size]) => `<option value="${key}">${size.label}</option>`)
    .join('')

  controls.innerHTML = `
    <label for="paperSize">Paper Size:</label>
    <select id="paperSize">
      ${options}
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
