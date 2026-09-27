import { paperSizes, currentSize, setCurrentSize } from './paperSizes.js'

export function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// Default filename base: the sketch's page title, falling back to its
// directory name (e.g. /plots/concentric-circles/ -> concentric-circles)
function defaultSketchName() {
  const fromTitle = slugify(document.title || '')
  if (fromTitle) return fromTitle
  const segments = window.location.pathname.split('/').filter(Boolean)
  return slugify(segments[segments.length - 1] || 'plot') || 'plot'
}

export function createControls(onSizeChange, onSave) {
  const controls = document.createElement('div')
  controls.id = 'controls'
  const options = Object.entries(paperSizes)
    .map(([key, size]) => `<option value="${key}">${size.label}</option>`)
    .join('')

  controls.innerHTML = `
    <div class="controls-row">
      <input type="text" id="sketchName" aria-label="Sketch name" spellcheck="false">
      <select id="paperSize" aria-label="Paper size">
        ${options}
      </select>
    </div>
    <div class="controls-row">
      <input type="text" id="filename" aria-label="Filename" readonly>
      <button id="saveButton">SVG</button>
    </div>
  `

  const nameInput = controls.querySelector('#sketchName')
  const select = controls.querySelector('#paperSize')
  const filenameInput = controls.querySelector('#filename')

  const updateFilename = () => {
    filenameInput.value = [nameInput.value, select.value].filter(Boolean).join('-')
  }

  nameInput.value = defaultSketchName()
  select.value = currentSize
  updateFilename()

  nameInput.addEventListener('input', updateFilename)

  select.addEventListener('change', (e) => {
    const newSize = e.target.value
    setCurrentSize(newSize)
    updateFilename()
    if (onSizeChange) {
      onSizeChange(paperSizes[newSize])
    }
  })

  const save = () => {
    if (onSave) {
      onSave(filenameInput.value)
    }
  }

  controls.querySelector('#saveButton').addEventListener('click', save)

  // Lets keyboard shortcuts trigger the same export as the button
  controls.save = save

  return controls
}
