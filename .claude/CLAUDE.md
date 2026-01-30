# Plotter Project Context
Art project using pen plotters.

# Hardware
## Uunatek iDraw H SE, A2 Size
This plotter implements the Axidraw Python API, but it's faster and cheaper.

## API Reference
- `docs/axidraw_quickref.md` - Quick reference for common AxiDraw functions
- `docs/axidraw_api.md` - Complete API documentation (use Grep to search for specific functions)

## Project Structure
- `plots/` - Individual plot projects, each in its own directory
  - Each plot directory contains:
    - `sketch.js` - p5.js sketch code
    - `index.html` - HTML entry point (minimal boilerplate)
    - `plot.py` - (optional) Python script for actual plotting
- `src/` - Shared UI components and utilities
- `docs/` - API references and documentation

## p5.js Development with Vite
This project uses Vite for a clean development experience:

### Getting Started
```bash
npm run dev        # Start development server at http://localhost:5173
npm run build      # Build for production
npm run preview    # Preview production build
```

### Creating a New Sketch
1. Run `npm run new your-sketch-name` to scaffold a new sketch
2. Edit `plots/your-sketch-name/sketch.js` with your drawing code
3. Update `index.html` to add it to the homepage
4. Click "Export SVG" button (or press 'S') to save vector files for plotting

### Features
- SVG export for pen plotting (using p5.js-svg)
- Paper size picker (A4/A2) automatically injected
- Hot module reload during development
- All p5.js boilerplate handled by shared layout
- Canvas sizes: A4 (794x1123px), A2 (1587x2245px) at 96 DPI
