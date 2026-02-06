#!/usr/bin/env python3
"""
Flatten SVG clipPaths to actual paths for plotter compatibility.
"""
import xml.etree.ElementTree as ET
import sys

def flatten_svg(input_file, output_file):
    tree = ET.parse(input_file)
    root = tree.getroot()

    # Remove clipPath definitions from defs
    ns = {'svg': 'http://www.w3.org/2000/svg'}
    defs = root.find('.//svg:defs', ns)
    if defs is not None:
        root.remove(defs)

    # Find all groups with clip-path attributes and remove them
    for elem in root.findall('.//*[@clip-path]', ns):
        del elem.attrib['clip-path']

    tree.write(output_file, encoding='unicode', xml_declaration=True)
    print(f"Flattened SVG written to: {output_file}")

if __name__ == '__main__':
    if len(sys.argv) != 3:
        print("Usage: python flatten_svg.py input.svg output.svg")
        sys.exit(1)

    flatten_svg(sys.argv[1], sys.argv[2])
