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

initSketch((p) => {
  // Your sketch here
  p.stroke(0)
  p.strokeWeight(2)
  p.noFill()
  p.circle(p.width / 2, p.height / 2, 200)
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
