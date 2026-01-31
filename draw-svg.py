#!/usr/bin/env python3
import sys
import select
from pyaxidraw import axidraw

# Check if there's data on STDIN (with timeout)
if not select.select([sys.stdin], [], [], 0.0)[0]:
    print("Error: No SVG data provided on STDIN", file=sys.stderr)
    print("Usage: cat file.svg | python draw-svg.py", file=sys.stderr)
    sys.exit(1)

svg_data = sys.stdin.read()
if not svg_data.strip():
    print("Error: Empty SVG data", file=sys.stderr)
    sys.exit(1)

ad = axidraw.AxiDraw()
ad.plot_setup(svg_data)
ad.load_config("axidraw_conf.py")
ad.plot_run()
