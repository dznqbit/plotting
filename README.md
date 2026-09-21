# Plotter Art
Generative art projects for the Uunatek iDraw H SE A2 plotter.

Two ways to build sketches
## [Axidraw Python API](https://axidraw.com/doc/py_api/)
We haven't done much here yet.

### [P5.js](https://p5js.org)
Drawing inspiration from this [Uunatek article](https://uunatek.com/blogs/tips-and-tricks/how-to-code-digital-art-with-p5-js), the standard flow is:
- Use [P5.js](https://p5js.org/reference/) to draw the shape on browser canvas.
- Use [p5.js-svg](https://github.com/zenozeng/p5.js-svg) to export the drawing as an SVG, targeting Inkscape.
- Open SVG in Inkscape and draw SVG


## Setup
```bash
# Python dependencies
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# JavaScript dependencies
npm install

# Start development server
npm run dev
```

Open http://localhost:5173 to view all sketches.

## Creating a New Sketch

1. Create a new sketch:
```bash
npm run new "My Sketch"
```

2. Edit `plots/my-sketch/sketch.js` with your p5.js code

3. View at http://localhost:5173/plots/my-sketch/

Click "Export SVG" button (or press 'S') to save vector files for plotting.

## Project Structure

- `plots/` - Individual sketch projects (each with `sketch.js` and `index.html`)
- `src/lib/` - Shared layout components and utilities
- `docs/` - AxiDraw API documentation

