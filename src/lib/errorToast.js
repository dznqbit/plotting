// Surfaces uncaught errors as a toast pinned to the bottom of the page, so a
// broken sketch doesn't just silently render a blank canvas.
//
// Browsers don't let a page open DevTools, so clicking an error does the next
// best thing in dev: it asks Vite to open the offending file:line in your
// editor (via Vite's built-in /__open-in-editor endpoint). The full error is
// still logged to the console as usual.

const MAX_ERRORS = 5

let container = null

function ensureContainer() {
  if (!container) {
    container = document.createElement('div')
    container.id = 'error-toasts'
  }
  // Attach to <html> rather than <body>: initSketch() wipes body.innerHTML,
  // which would otherwise take any early errors down with it.
  if (!container.isConnected) {
    document.documentElement.appendChild(container)
  }
  return container
}

// Find the first stack frame that points at our own source (not p5 or other
// pre-bundled deps) and turn it into a path Vite's open-in-editor understands.
function sourceLocation(error) {
  const stack = error?.stack || ''
  const frameRe = /(https?:\/\/[^\s)]+):(\d+):(\d+)/g
  for (const [, url, line, col] of stack.matchAll(frameRe)) {
    let parsed
    try {
      parsed = new URL(url)
    } catch {
      continue
    }
    if (parsed.origin !== location.origin) continue
    if (parsed.pathname.includes('/node_modules/')) continue

    // /@fs/abs/path is how Vite serves files outside the root (e.g. Viewport.js)
    const file = parsed.pathname.startsWith('/@fs/')
      ? parsed.pathname.slice('/@fs'.length)
      : parsed.pathname.slice(1)
    return { file: decodeURIComponent(file), line, col }
  }
  return null
}

function openInEditor({ file, line, col }) {
  fetch(`/__open-in-editor?file=${encodeURIComponent(`${file}:${line}:${col}`)}`)
}

function showError(error) {
  const root = ensureContainer()
  const loc = sourceLocation(error)

  const toast = document.createElement('div')
  toast.className = 'error-toast'
  toast.title = loc
    ? 'Click to open in editor. Full trace in DevTools console (⌥⌘J).'
    : 'Full trace in DevTools console (⌥⌘J).'

  const message = document.createElement('span')
  message.className = 'error-toast-message'
  message.textContent = error?.message || String(error)
  toast.appendChild(message)

  if (loc) {
    const where = document.createElement('span')
    where.className = 'error-toast-location'
    where.textContent = `${loc.file}:${loc.line}`
    toast.appendChild(where)
    toast.classList.add('clickable')
    toast.addEventListener('click', () => openInEditor(loc))
  }

  const close = document.createElement('button')
  close.className = 'error-toast-close'
  close.textContent = '×'
  close.title = 'Dismiss'
  close.addEventListener('click', (e) => {
    e.stopPropagation()
    toast.remove()
  })
  toast.appendChild(close)

  root.appendChild(toast)
  while (root.children.length > MAX_ERRORS) {
    root.firstChild.remove()
  }
}

window.addEventListener('error', (e) => showError(e.error ?? e.message))
window.addEventListener('unhandledrejection', (e) => showError(e.reason))
