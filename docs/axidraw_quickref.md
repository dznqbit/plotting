# AxiDraw Python API Quick Reference

Quick reference for the most commonly used AxiDraw API functions. For detailed documentation, see `axidraw_api.md`.

## Setup & Connection

### Interactive Context
```python
from pyaxidraw import axidraw
ad = axidraw.AxiDraw()
ad.interactive()                # Initialize Interactive context
```

### Connection Management
```python
ad.connect()                    # Open serial connection to AxiDraw
                                # Returns True/False for success/failure
ad.disconnect()                 # Close serial connection

ad.update()                     # Apply option changes after connect()
```

### Plot Context
```python
ad.plot_setup("file.svg")       # Parse SVG file and initialize Plot context
ad.plot_run()                   # Execute the plot
```

## Movement Commands - Absolute

```python
ad.goto(x, y)                   # Move to absolute position (x,y)
ad.moveto(x, y)                 # Pen-up move to absolute position (x,y)
ad.lineto(x, y)                 # Pen-down move to absolute position (x,y)
```

## Movement Commands - Relative

```python
ad.go(dx, dy)                   # Move by relative distance (dx,dy)
ad.move(dx, dy)                 # Pen-up move by relative distance (dx,dy)
ad.line(dx, dy)                 # Pen-down move by relative distance (dx,dy)
```

## Pen Control

```python
ad.penup()                      # Raise the pen
ad.pendown()                    # Lower the pen
```

## Path Drawing

```python
# Draw a path from a list of vertices
vertices = [[x1, y1], [x2, y2], [x3, y3], ...]
ad.draw_path(vertices)          # Draws pen-down path through all vertices
```

## Utility Functions

```python
ad.delay(time_ms)               # Hardware-timed delay in milliseconds
ad.block()                      # Wait for all motion commands to complete

xy = ad.current_pos()           # Query physical XY position (returns tuple)
xy = ad.turtle_pos()            # Query theoretical XY position (returns tuple)
```

## Common Options

### Speed & Acceleration
```python
ad.options.speed_pendown = 25   # Pen-down speed (1-110, default: 25)
ad.options.speed_penup = 75     # Pen-up speed (1-110, default: 75)
ad.options.accel = 75           # Acceleration (1-100, default: 75)
```

### Pen Position & Timing
```python
ad.options.pen_pos_down = 40    # Pen-down height (0-100, default: 40)
ad.options.pen_pos_up = 60      # Pen-up height (0-100, default: 60)
ad.options.pen_rate_lower = 50  # Pen lowering rate (1-150, default: 50)
ad.options.pen_rate_raise = 75  # Pen raising rate (1-150, default: 75)
ad.options.pen_delay_down = 0   # Delay after lowering pen (ms, default: 0)
ad.options.pen_delay_up = 0     # Delay after raising pen (ms, default: 0)
```

### Units
```python
ad.options.units = 0            # 0: inches (default), 1: cm, 2: mm
```

### Hardware Configuration
```python
ad.options.model = 2            # AxiDraw model (1-7, default: 2)
ad.options.port = None          # USB port or named AxiDraw (default: None)
```

### Plot-Specific Options
```python
ad.options.mode = "plot"        # Mode: "plot", "layers", "align", "toggle", etc.
ad.options.preview = False      # Generate preview without plotting
ad.options.reordering = 0       # Path reordering (0-4, default: 0)
```

## Basic Example

```python
from pyaxidraw import axidraw

ad = axidraw.AxiDraw()
ad.interactive()
if not ad.connect():
    quit()

# Draw a square
ad.moveto(1, 1)                 # Move to starting position
ad.lineto(3, 1)                 # Draw bottom edge
ad.lineto(3, 3)                 # Draw right edge
ad.lineto(1, 3)                 # Draw top edge
ad.lineto(1, 1)                 # Draw left edge
ad.moveto(0, 0)                 # Return home

ad.disconnect()
```

## Notes

- Default units are inches. Use `ad.options.units` to change.
- Position (0,0) is the Home corner (lower left).
- All option changes after `connect()` require calling `ad.update()` before motion commands.
- Motion is clipped to hardware travel limits automatically.
- For detailed information on any function, see `axidraw_api.md`.
