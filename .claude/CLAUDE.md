# Plotter Project Context
Art project using pen plotters.

# Hardware
## Uunatek iDraw H SE, A2 Size
This plotter implements the Axidraw Python API, but it's faster and cheaper.

## API Reference
- `docs/axidraw_quickref.md` - Quick reference for common AxiDraw functions
- `docs/axidraw_api.md` - Complete API documentation (use Grep to search for specific functions)

## Project Structure
- `plots/` - Individual plot scripts (Python and p5.js HTML sketches)
- `docs/` - API references and documentation

## p5.js Setup
Browser-based p5.js sketches are in `plots/` directory:
- `template.html` - Basic p5.js template for new sketches
- Press 'S' key to save sketch as PNG
- Canvas defaults to A4 size (794x1123px at 96 DPI)
