#!/usr/bin/env python3

import os
import sys
import re
from pathlib import Path

sketch_name = ' '.join(sys.argv[1:]) if len(sys.argv) > 1 else None

if not sketch_name:
    print('Usage: python scripts/new-sketch.py <sketch name>', file=sys.stderr)
    print('Example: python scripts/new-sketch.py My Cool Sketch', file=sys.stderr)
    sys.exit(1)

# Create slug: lowercase with dashes instead of spaces
sketch_slug = re.sub(r'\s+', '-', sketch_name.lower())
sketch_slug = re.sub(r'[^a-z0-9-]', '', sketch_slug)  # Remove non-alphanumeric except dashes

plots_dir = Path.cwd() / 'plots' / sketch_slug

# Create directory
try:
    plots_dir.mkdir(parents=True, exist_ok=True)
except OSError as err:
    print(f'Error creating directory: {err}', file=sys.stderr)
    sys.exit(1)

# Create index.html
index_html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{sketch_name}</title>
  <link rel="stylesheet" href="/src/style.css">
</head>
<body>
  <script type="module" src="./sketch.js"></script>
</body>
</html>
"""

# Create sketch.js
sketch_js = """import { initSketch } from '../../src/lib/sketchWrapper.js'

initSketch({
  // Optional libraries, each adding args to draw(). 'viewport' adds
  // v (raw Viewport.js) and vh (ViewportHelper) for the 3D scene below -
  // drop it (and v, vh) for a plain 2D p5 sketch.
  includes: ['viewport'],
  draw: ({ p, v, vh }) => {
    // Your sketch here

    // Use p.inkColor() instead of hardcoding black - it flips to white
    // for the dev-mode dark canvas, but always exports as black ink.
    p.stroke(p.inkColor())
    p.strokeWeight(2)
    p.noFill()

    // --- 3D: Viewport scene (vh) ---
    // Shapes live in world units (vh.cube() is 2 across), +Z up, placed with
    // vh.translate/rotate/scale - a separate stack from p5's push/pop.
    // Nothing is drawn until vh.render(), which projects the scene through
    // the camera and removes hidden lines, returning 2D Paths sized to the
    // canvas. vh.draw() then strokes them with the current p5 stroke.
    vh.scene.add(vh.cube())
    const paths = vh.render({ eye: vh.vec(4, 4, 4) })
    vh.draw(paths)

    // --- 2D: native p5 ---
    // Draws immediately in canvas pixels (origin top-left, Y down), using
    // p5's own transforms. Flat ink on top of the render: it is not
    // occluded by, and does not occlude, anything in the 3D scene.
    p.circle(100, 100, 100)
  },
})
"""

(plots_dir / 'index.html').write_text(index_html)
(plots_dir / 'sketch.js').write_text(sketch_js)

# Update main index.html to include the sketch in the list
index_path = Path.cwd() / 'index.html'
index_content = index_path.read_text()

# Create new list item
new_item = f'      <li><a href="/plots/{sketch_slug}/" class="sketch-item">\n          {sketch_name}\n        </a></li>'

# Find the ul and add the new item before the closing tag
if '<ul id="plot-list">' in index_content and new_item not in index_content:
    # Insert before </ul>
    index_content = index_content.replace('    </ul>', f'{new_item}\n    </ul>')
    index_path.write_text(index_content)
    print(f'✓ Added link to index.html')

print(f'✓ Created sketch: {sketch_name}')
print(f'  - plots/{sketch_slug}/index.html')
print(f'  - plots/{sketch_slug}/sketch.js')
print(f'\nView at: http://localhost:5173/plots/{sketch_slug}/')
