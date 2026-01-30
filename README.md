# Plotter Art
Generative art projects for the Uunatek iDraw H SE A2 plotter.

Two ways to build sketches
- [Axidraw Python API](https://axidraw.com/doc/py_api/)
- [P5.js](https://p5js.org)
  - [Uunatek article](https://uunatek.com/blogs/tips-and-tricks/how-to-code-digital-art-with-p5-js)

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
npm run new my-sketch
```

2. Edit `plots/my-sketch/sketch.js` with your p5.js code

3. Add your sketch to `index.html` to list it on the homepage

4. View at http://localhost:5173/plots/my-sketch/

Click "Export SVG" button (or press 'S') to save vector files for plotting.

## Project Structure

- `plots/` - Individual sketch projects (each with `sketch.js` and `index.html`)
- `src/lib/` - Shared layout components and utilities
- `docs/` - AxiDraw API documentation

## Projects