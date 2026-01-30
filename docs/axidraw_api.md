[ NAV ![](images/navbar-cad8cdcb.png) ](#){#nav-button}

:::: toc-wrapper
[![](images/logo-cfb1e564.png){.logo}](#){#logobutton}

::: search
:::

<!-- -->

- [Introduction](#introduction){.toc-h1 .toc-link
  data-title="Introduction"}
- [About AxiDraw](#about-axidraw){.toc-h1 .toc-link
  data-title="About AxiDraw"}
- [Installation](#installation){.toc-h1 .toc-link
  data-title="Installation"}
- [Quick start: Plotting SVG](#quick-start-plotting-svg){.toc-h1
  .toc-link data-title="Quick start: Plotting SVG"}
- [Quick start: Interactive XY](#quick-start-interactive-xy){.toc-h1
  .toc-link data-title="Quick start: Interactive XY"}
- [Example scripts](#example-scripts){.toc-h1 .toc-link
  data-title="Example scripts"}
- [Setting options](#setting-options){.toc-h1 .toc-link
  data-title="Setting options"}
- [Options (General)](#options-general){.toc-h1 .toc-link
  data-title="Options (General)"}
  - [speed_pendown](#speed_pendown){.toc-h2 .toc-link
    data-title="speed_pendown"}
  - [speed_penup](#speed_penup){.toc-h2 .toc-link
    data-title="speed_penup"}
  - [accel](#accel){.toc-h2 .toc-link data-title="accel"}
  - [pen_pos_down](#pen_pos_down){.toc-h2 .toc-link
    data-title="pen_pos_down"}
  - [pen_pos_up](#pen_pos_up){.toc-h2 .toc-link data-title="pen_pos_up"}
  - [pen_rate_lower](#pen_rate_lower){.toc-h2 .toc-link
    data-title="pen_rate_lower"}
  - [pen_rate_raise](#pen_rate_raise){.toc-h2 .toc-link
    data-title="pen_rate_raise"}
  - [pen_delay_down](#pen_delay_down){.toc-h2 .toc-link
    data-title="pen_delay_down"}
  - [pen_delay_up](#pen_delay_up){.toc-h2 .toc-link
    data-title="pen_delay_up"}
  - [const_speed](#const_speed){.toc-h2 .toc-link
    data-title="const_speed"}
  - [model](#model){.toc-h2 .toc-link data-title="model"}
  - [penlift](#penlift){.toc-h2 .toc-link data-title="penlift"}
  - [port](#port){.toc-h2 .toc-link data-title="port"}
  - [port_config](#port_config){.toc-h2 .toc-link
    data-title="port_config"}
- [Options (Plot)](#options-plot){.toc-h1 .toc-link
  data-title="Options (Plot)"}
  - [mode](#mode){.toc-h2 .toc-link data-title="mode"}
    - [plot](#plot){.toc-h3 .toc-link data-title="plot"}
    - [layers](#layers){.toc-h3 .toc-link data-title="layers"}
    - [cycle](#cycle){.toc-h3 .toc-link data-title="cycle"}
    - [align](#align){.toc-h3 .toc-link data-title="align"}
    - [toggle](#toggle){.toc-h3 .toc-link data-title="toggle"}
    - [manual](#manual){.toc-h3 .toc-link data-title="manual"}
    - [sysinfo](#sysinfo){.toc-h3 .toc-link data-title="sysinfo"}
    - [version](#version){.toc-h3 .toc-link data-title="version"}
    - [res_plot, res_home](#res_plot-res_home){.toc-h3 .toc-link
      data-title="res_plot, res_home"}
  - [manual_cmd](#manual_cmd){.toc-h2 .toc-link data-title="manual_cmd"}
    - [fw_version](#fw_version){.toc-h3 .toc-link
      data-title="fw_version"}
    - [lower_pen, raise_pen](#lower_pen-raise_pen){.toc-h3 .toc-link
      data-title="lower_pen, raise_pen"}
    - [walk_x, walk_y](#walk_x-walk_y){.toc-h3 .toc-link
      data-title="walk_x, walk_y"}
    - [walk_mmx, walk_mmy](#walk_mmx-walk_mmy){.toc-h3 .toc-link
      data-title="walk_mmx, walk_mmy"}
    - [walk_home](#walk_home){.toc-h3 .toc-link data-title="walk_home"}
    - [enable_xy, disable_xy](#enable_xy-disable_xy){.toc-h3 .toc-link
      data-title="enable_xy, disable_xy"}
    - [res_read](#res_read){.toc-h3 .toc-link data-title="res_read"}
    - [res_adj_in, res_adj_mm](#res_adj_in-res_adj_mm){.toc-h3 .toc-link
      data-title="res_adj_in, res_adj_mm"}
    - [strip_data](#strip_data){.toc-h3 .toc-link
      data-title="strip_data"}
    - [list_names](#list_names){.toc-h3 .toc-link
      data-title="list_names"}
    - [read_name](#read_name){.toc-h3 .toc-link data-title="read_name"}
    - [write_name](#write_name){.toc-h3 .toc-link
      data-title="write_name"}
    - [bootload](#bootload){.toc-h3 .toc-link data-title="bootload"}
  - [dist](#dist){.toc-h2 .toc-link data-title="dist"}
  - [layer](#layer){.toc-h2 .toc-link data-title="layer"}
  - [copies](#copies){.toc-h2 .toc-link data-title="copies"}
  - [page_delay](#page_delay){.toc-h2 .toc-link data-title="page_delay"}
  - [auto_rotate](#auto_rotate){.toc-h2 .toc-link
    data-title="auto_rotate"}
  - [preview](#preview){.toc-h2 .toc-link data-title="preview"}
  - [rendering](#rendering){.toc-h2 .toc-link data-title="rendering"}
  - [reordering](#reordering){.toc-h2 .toc-link data-title="reordering"}
  - [random_start](#random_start){.toc-h2 .toc-link
    data-title="random_start"}
  - [hiding](#hiding){.toc-h2 .toc-link data-title="hiding"}
  - [report_time](#report_time){.toc-h2 .toc-link
    data-title="report_time"}
  - [digest](#digest){.toc-h2 .toc-link data-title="digest"}
  - [webhook](#webhook){.toc-h2 .toc-link data-title="webhook"}
  - [webhook_url](#webhook_url){.toc-h2 .toc-link
    data-title="webhook_url"}
- [Options (Interactive)](#options-interactive){.toc-h1 .toc-link
  data-title="Options (Interactive)"}
  - [units](#units){.toc-h2 .toc-link data-title="units"}
- [Additional parameters](#additional-parameters){.toc-h1 .toc-link
  data-title="Additional parameters"}
- [Error handling](#error-handling){.toc-h1 .toc-link
  data-title="Error handling"}
  - [Keyboard interrupts](#keyboard-interrupts){.toc-h2 .toc-link
    data-title="Keyboard interrupts"}
- [Functions: General](#functions-general){.toc-h1 .toc-link
  data-title="Functions: General"}
  - [load_config](#load_config){.toc-h2 .toc-link
    data-title="load_config"}
- [Functions: Plot](#functions-plot){.toc-h1 .toc-link
  data-title="Functions: Plot"}
  - [plot_setup](#plot_setup){.toc-h2 .toc-link data-title="plot_setup"}
  - [plot_run](#plot_run){.toc-h2 .toc-link data-title="plot_run"}
- [Functions: Interactive](#functions-interactive){.toc-h1 .toc-link
  data-title="Functions: Interactive"}
  - [interactive](#interactive){.toc-h2 .toc-link
    data-title="interactive"}
  - [connect](#connect){.toc-h2 .toc-link data-title="connect"}
  - [disconnect](#disconnect){.toc-h2 .toc-link data-title="disconnect"}
  - [update](#update){.toc-h2 .toc-link data-title="update"}
  - [goto](#goto){.toc-h2 .toc-link data-title="goto"}
  - [moveto](#moveto){.toc-h2 .toc-link data-title="moveto"}
  - [lineto](#lineto){.toc-h2 .toc-link data-title="lineto"}
  - [go](#go){.toc-h2 .toc-link data-title="go"}
  - [move](#move){.toc-h2 .toc-link data-title="move"}
  - [line](#line){.toc-h2 .toc-link data-title="line"}
  - [penup](#penup){.toc-h2 .toc-link data-title="penup"}
  - [pendown](#pendown){.toc-h2 .toc-link data-title="pendown"}
  - [draw_path](#draw_path){.toc-h2 .toc-link data-title="draw_path"}
  - [delay](#delay){.toc-h2 .toc-link data-title="delay"}
  - [block](#block){.toc-h2 .toc-link data-title="block"}
  - [current_pos](#current_pos){.toc-h2 .toc-link
    data-title="current_pos"}
  - [turtle_pos](#turtle_pos){.toc-h2 .toc-link data-title="turtle_pos"}
  - [current_pen, turtle_pen](#current_pen-turtle_pen){.toc-h2 .toc-link
    data-title="current_pen, turtle_pen"}
  - [usb_command, usb_query](#usb_command-usb_query){.toc-h2 .toc-link
    data-title="usb_command, usb_query"}
- [API Changelog](#api-changelog){.toc-h1 .toc-link
  data-title="API Changelog"}
- [Copyright](#copyright){.toc-h1 .toc-link data-title="Copyright"}

<!-- -->

- [AxiDraw Documentation Home](https://axidraw.com/docs)
- [Evil Mad Scientist Home](https://shop.evilmadscientist.com/)
- [Contact us](https://shop.evilmadscientist.com/contact)
::::

:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: page-wrapper
::: dark-box
:::

::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: content
# Introduction

The AxiDraw Python module is an application programming interface (API)
for AxiDraw, designed to let you control the AxiDraw from within your
own Python scripts.

This Python module supports the AxiDraw with two distinct control
approaches:

- Plotting SVG files, and
- Interactive XY motion control through \"moveto/lineto\" type commands
  and vertex lists.

To distinguish between these two control methods, we will refer to them
as the **Plot** context and the **Interactive** context, for plotting
SVG files or using XY motion control commands, respectively. Certain
options and functions can only be used in one or the other context.
Please see [Quick start: Plotting SVG](#quick-start-plotting-svg) and
[Quick start: Interactive XY](#quick-start-interactive-xy) for more
information.

If you wish to use the AxiDraw from the command line interface or within
shell scripts or other environments that make use of shell commands,
please see the separate documentation for the [AxiDraw
CLI](https://axidraw.com/doc/cli_api/).

# About AxiDraw

The [AxiDraw](https://axidraw.com) writing and drawing machine is a
modern pen plotter designed and manufactured by [Evil Mad Scientist
Laboratories](https://shop.evilmadscientist.com) in Sunnyvale,
California.

For general information about getting started with and operating the
AxiDraw, please see our extensive PDF user guide, available
[here](https://axidraw.com/guide).

AxiDraw software development is hosted at
[github](https://github.com/evil-mad/axidraw). The central documentation
site for AxiDraw is at the [Evil Mad Scientist
wiki](http://axidraw.com/docs); many additional development resources
are listed there.

AxiDraw owners may request technical and other product support by
contacting us directly through our [contact
form](https://shop.evilmadscientist.com/contact), [discord
chat](https://discord.gg/axhTzmr), or through our github [issues
list](https://github.com/evil-mad/axidraw/issues).

# Installation

**One line install**

If you already have Python 3.8 or newer installed, use the following in
a terminal:\
`python -m pip install https://cdn.evilmadscientist.com/dl/ad/public/AxiDraw_API.zip`

This procedure installs both the AxiDraw Python module and the [AxiDraw
CLI](https://axidraw.com/doc/cli_api/). The link is permanent and will
be kept up to date. The current release version is 3.9.6.

If you use this method, you may *also* want to [download the zip
file](https://cdn.evilmadscientist.com/dl/ad/public/AxiDraw_API.zip)
conventionally, since the download includes example python scripts, an
example configuration file, an example SVG file, and instructions for
un-installing the software.

**Standard install**

Download the API [from this permanent
link](https://cdn.evilmadscientist.com/dl/ad/public/AxiDraw_API.zip).
The current release version is 3.9.6.

Please see Installation.txt included with the download for full
installation instructions.

(Abbreviated instructions: Install [Python
3](https://www.python.org/downloads/). Unzip the archive, move into the
directory, and use `python -m pip install .` to install the software.)

**Upgrading**

If you already have this software installed, we recommend the following
method to upgrade:
`python -m pip install https://cdn.evilmadscientist.com/dl/ad/public/AxiDraw_API.zip --upgrade --upgrade-strategy eager`

# Quick start: Plotting SVG

> ::: codetitle
> Quick start: Plotting SVG
> :::
>
> Quick start example; Typical usage:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw   # Import the module
ad = axidraw.AxiDraw()          # Create class instance
ad.plot_setup(FILE_NAME)        # Load file & configure plot context
            # Plotting options can be set, here after plot_setup().
ad.plot_run()                   # Plot the file
```
:::

> Example 1: Plot a file named AxiDraw_trivial.svg

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw   
ad = axidraw.AxiDraw()
ad.plot_setup("AxiDraw_trivial.svg")
ad.plot_run()
```
:::

> Example 2: Plot two copies of an SVG document contained within a
> string called input_svg, with full reordering enabled, and collect the
> output SVG as a string:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup(input_svg)
ad.options.reordering = 2
output_svg = ad.plot_run(True)  
```
:::

> plot_run(True) will generate output SVG. output_svg is a string
> equivalent to the contents of an SVG file.

The examples shown here will load and plot a file, using default option
values. Four lines of code are needed: to import the module, create a
class instance, load a file and select the **Plot** context, and begin
plotting.

In addition to plotting a file, the API includes the ability to set a
wide range of configuration options, and a number of utility functions.
The options available in the **Plot** context include those described
below in the [Options: General](#options-general) and [Options:
Plot](#options-plot) sections. Options may be set at any point after
[`plot_setup()`](#plot_setup) and before [`plot_run()`](#plot_run). For
more about the functions available in the **Plot** context, see
[Functions: general](#functions-general) and [Functions:
Plot](#functions-plot).

An SVG input is required for most operations that are outside of the
**Interactive** context. (Certain utility modes that do not perform any
plotting do allow the file input to be omitted, even in **Plot**
context.) This SVG input may be the name (or full path) of an SVG file
or it may be a string that contains the contents of an SVG document.

By default, no *output* SVG is returned as part of the plotting process.
However, in some situations it may be use useful to have the program
generate and return output SVG. The SVG returned by `plot_run(True)` is
a string containing the contents of an SVG file. Keeping that output SVG
allows the capability to pause and subsequently resume a plot in
progress, or to preview a plot. See further discussion under
[`res_plot`](#res_plot-res_home) and [`rendering`](#rendering) below.

# Quick start: Interactive XY

> ::: codetitle
> Quick start: Interactive XY
> :::
>
> Example: Draw a single line in Interactive context:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw   # import module
ad = axidraw.AxiDraw()          # Initialize class
ad.interactive()                # Enter interactive context
if not ad.connect():            # Open serial port to AxiDraw;
    quit()                      #   Exit, if no connection.
                                # Absolute moves follow:
ad.moveto(1, 1)                 # Pen-up move to (1 inch, 1 inch)
ad.lineto(2, 1)                 # Pen-down move, to (2 inch, 1 inch)
ad.moveto(0, 0)                 # Pen-up move, back to origin.
ad.disconnect()                 # Close serial port to AxiDraw
```
:::

The **Interactive** context is a separate mode of operation that that
accepts direct XY motion control commands. It does not use an SVG file
as an input.

Interactive control requires a persistent session, and only works from
within a Python script.

Once the Python module is imported, call the
[`interactive()`](#interactive) method to enter the **Interactive**
context. To establish a USB connection to the AxiDraw, use
[`connect()`](#connect), which returns `True` when successfully
connected. You must also use [`disconnect()`](#disconnect) at the end of
your session to terminate the USB session.

Options may be specified at any point after the `interactive()` call.
The options will be applied when you call `connect()`. If you change one
or more options after calling `connect()`, use the [`update()`](#update)
method to process the changes to the options before calling additional
motion commands.

The options available in the **Interactive** context include those
described below in the [Options: General](#options-general) and
[Options: Interactive](#options-interactive) sections. The options
described in [Options: Plot](#options-plot) *do not* apply in the
**Interactive** context.

# Example scripts

> ::: codetitle
> Example scripts
> :::
>
> Run an example script called \"plot_inline.py\" by calling the
> following from the command line (terminal/command prompt):

::: highlight
``` {.highlight .plaintext}
python plot_inline.py
```
:::

> Note that example scripts are not installed system-wide. For Python to
> find the file (plot_inline.py), it is easiest to call this command
> from within the directory where that file is located.

The `examples_py_axidraw` folder in the [API download](#installation)
contains a number of example scripts that demonstrate various features
of the AxiDraw Python API.

The files include:

- plot.py --- Demonstrate use of axidraw module in \"plot\" mode (in the
  **Plot** context), to plot an SVG file.

- estimate_time.py --- Demonstrate use of the \"plot\" mode, to estimate
  the time that it will take to plot an SVG file.

- plot_inline.py --- Demonstrate use of the \"plot\" mode, to create and
  plot SVG elements without a separate SVG file.

- toggle.py --- Demonstrate use of the \"toggle\" mode (still in
  **Plot** context), to toggle the pen up and down.

- interactive_xy.py --- Demonstrate basic XY motion commands with the
  axidraw Python module in **Interactive** context.

- interactive_draw_path.py --- Demonstrate drawing continuous paths from
  coordinate lists in the **Interactive** context.

- interactive_penheights.py --- Demonstrate use of the **Interactive**
  context, to set the pen to different heights.

- turtle_pos.py --- Demonstrate **Interactive** context, showing out of
  bounds motion handling and querying physical and turtle positions.

- low_level_usb.py --- Demonstrate advanced low-level USB command
  features of axidraw Python module in **Interactive** context.

- interactive_usb_com.py --- Second example of low-level USB command
  features of axidraw Python module in **Interactive** context.

- report_pos_mm.py --- Self-contained script that uses a low-level USB
  query to report and print the current XY position of the carriage.

# Setting options

> ::: codetitle
> Setting options
> :::
>
> One or more options may be specified with the following syntax:

::: highlight
``` {.highlight .python .tab-python}
options.option_name = value
```
:::

> Example 1: Set the pen-up position to 70% height before plotting,
> making use of the Plot context:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup("file.svg")
ad.options.pen_pos_up = 70      # set pen-up position
ad.plot_run()
```
:::

> Example 2: Set the pen-up position to 70% height before plotting,
> making use of the Interactive context:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw   # import module
ad = axidraw.AxiDraw()          # Initialize class
ad.interactive()                # Enter interactive context
ad.options.pen_pos_up = 70      # set pen-up position
if not ad.connect():            # Open serial port to AxiDraw;
    quit()                      #   Exit, if no connection.
ad.moveto(1, 1)                 # Absolute pen-up move, to (1 inch, 1 inch)
ad.lineto(0, 0)                 # Absolute pen-down move, back to origin.
ad.disconnect()                 # Close serial port to AxiDraw
```
:::

Most plotting options can be set directly like variables within Python.
The particular options and their values are detailed in the sections
below. For options that you do not directly specify, the default value
will be used.

Options should be set after initialization into either the **Plot**
context or the **Interactive** context, with [`plot_setup`](#plot_setup)
or [`interactive()`](#interactive) respectively.

The default value of most options are set within the axidraw_conf.py
configuration file, within the files installed by the API. These include
the pen up and pen down heights, basic speed settings, and so forth.

(Beyond the options documented in this API, the configuration file
includes some additional defaults that can be overridden, if necessary,
with the supplementary [`params`](#additional-parameters) syntax.)

A few specific options (including pen heights and plotting speed) can
also be set by encoding settings into the SVG file. The mechanism for
doing this is called \"[AxiDraw Layer
Control](http://wiki.evilmadscientist.com/AxiDraw_Layer_Control)\", and
it involves using special escape codes in the name of the layer(s) in
the SVG file. Several additional commands such as timed delays and
forced pauses can be controlled through this mechanism as well.

The order of preference for options and parameters is as follows:

**1.** Options and values values specified in the SVG file (as in, by
layer names) overrule those specified either by your script or in
axidraw_conf.py.

**2.** Options and values specified by your script overrule those in
axidraw_conf.py.

As an aside, if you also use Inkscape for plotting SVG files, please
note that option values and settings that you select from within the
Inkscape GUI are NOT consulted and do not affect plotting from outside
Inkscape.

# Options (General)

The following is a list of \"General\" options: options that can be set
in either the **Plot** or **Interactive** contexts. Each of these is
described individually, after the list.

  Option             Description
  ------------------ ---------------------------------------------------
  `speed_pendown`    Maximum XY speed when the pen is down (plotting).
  `speed_penup`      Maximum XY speed when the pen is up.
  `accel`            Relative acceleration/deceleration speed.
  `pen_pos_down`     Pen height when the pen is down (plotting).
  `pen_pos_up`       Pen height when the pen is up.
  `pen_rate_lower`   Speed of lowering the pen-lift motor.
  `pen_rate_raise`   Speed of raising the pen-lift motor.
  `pen_delay_down`   Added delay after lowering pen.
  `pen_delay_up`     Added delay after raising pen.
  `const_speed`      Option: Use constant speed when pen is down.
  `model`            Select model of AxiDraw hardware.
  `port`             Specify a USB port or AxiDraw to use.
  `port_config`      Override how the USB ports are located.

These general options are always applicable. They can be used in both
the **Plot** and **Interactive** contexts.

## speed_pendown

> ::: codetitle
> speed_pendown
> :::
>
> Example 1: Set up to plot with a maximum pen-down speed of 20%
> selected, making use of the Plot context:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup("file.svg")
ad.options.speed_pendown = 20
ad.plot_run()
```
:::

> Example 2: Set up to plot with a maximum pen-down speed of 20%
> selected, making use of the Interactive context:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw
ad = axidraw.AxiDraw()       
ad.interactive()             
ad.options.speed_pendown = 20
```
:::

*Pen-down Movement Speed*

**Syntax: `options.speed_pendown = value`**

Specify the speed limit for the XY carriage when the pen is down. That
is, the maximum speed that the pen may move at while writing or drawing.
This value is expressed as a percentage of maximum travel speed.

Pen-down movements use smooth acceleration unless the const_speed option
is selected. Increasing this maximum speed tends to greatly affect
behavior at corners and precision, but has a lesser impact on the
average speed and total plotting time, especially on documents that
consist of many small movements.

Allowed values: Integers from 1 to 110.

**Default:** 25, set in axidraw_conf.py

## speed_penup

> ::: codetitle
> speed_penup
> :::
>
> Example 1: Set up to plot with a maximum pen-up speed of 50% selected,
> making use of the Plot context:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup("file.svg")
ad.options.speed_penup = 50
ad.plot_run()
```
:::

> Example 2: Set up to plot with a maximum pen-up speed of 50% selected,
> making use of the Interactive context:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw
ad = axidraw.AxiDraw()
ad.interactive()
ad.options.speed_penup = 50
```
:::

*Pen-up Movement Speed*

**Syntax: `options.speed_penup = value`**

Specify the speed limit for the XY carriage when the pen is up. That is,
the maximum speed that the pen may move at while moving between paths
that will be plotted. This value is expressed as a percentage of maximum
travel speed.

Pen-up movements use smooth acceleration whether or not the const_speed
option is selected. Increasing this maximum speed tends to have a minor
effect on plot quality, but can have a significant affect on total
plotting time, especially on documents that have many large pen-up
movements.

Allowed values: Integers from 1 to 110.

**Default:** 75, set in axidraw_conf.py

## accel

> ::: codetitle
> accel
> :::
>
> Example 1: Set up to plot with an acceleration value of 80% selected,
> making use of the Plot context:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup("file.svg")
ad.options.accel = 80
ad.plot_run()
```
:::

> Example 2: Set up to plot with an acceleration value of 80% selected,
> making use of the Interactive context:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw
ad = axidraw.AxiDraw()
ad.interactive()
ad.options.accel = 80
```
:::

*Acceleration Factor*

**Syntax: `options.accel = value`**

Specify the relative acceleration/deceleration speed. This value is
expressed as a percentage of maximum acceleration rate. The acceleration
rate does not affect the top speed that can be achieved, but does
influence how long it takes to get to different speeds.

Allowed values: Integers from 1 to 100.

**Default:** 75, set in axidraw_conf.py

## pen_pos_down

> ::: codetitle
> pen_pos_down
> :::
>
> Example 1: Prepare to plot, with the pen-down height set to 20%,
> making use of the Plot context:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup("file.svg")
ad.options.pen_pos_down = 20
ad.plot_run()
```
:::

> Example 2: Prepare to plot, with the pen-down height set to 20%,
> making use of the Interactive context:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw
ad = axidraw.AxiDraw()
ad.interactive()
ad.options.pen_pos_down = 20
```
:::

*Pen-down Position*

**Syntax: `options.pen_pos_down = value`**

Specify the height of the pen when the pen is lowered (plotting). This
value is expressed as a percentage of the vertical travel.

Depending on the operation that you are executing, setting this value
may not immediately move the pen height to this position; rather, it
sets the height that will be used as the pen-down position value.

Allowed values: Integers from 0 to 100.

**Default:** 40, set in axidraw_conf.py

## pen_pos_up

> ::: codetitle
> pen_pos_up
> :::
>
> Example 1: Prepare to plot, with the pen-up height set to 80%, making
> use of the Plot context:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup("file.svg")
ad.options.pen_pos_up = 80
ad.plot_run()
```
:::

> Example 2: Prepare to plot, with the pen-up height set to 80%, making
> use of the Interactive context:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw
ad = axidraw.AxiDraw()
ad.interactive()
ad.options.pen_pos_up = 80
```
:::

*Pen-up Position*

**Syntax: `options.pen_pos_up = value`**

Specify the height of the pen when the pen is raised (not plotting).
This value is expressed as a percentage of the vertical travel.

Depending on the operation that you are executing, setting this value
may not immediately move the pen height to this position; rather, it
sets the height that will be used as the pen-up position value.

Allowed values: Integers from 0 to 100.

**Default:** 60, set in axidraw_conf.py

## pen_rate_lower

> ::: codetitle
> pen_rate_lower
> :::
>
> Example 1: Set up to plot, with the pen set to lower very slowly to
> the paper (5% speed), making use of the Plot context:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup("file.svg")
ad.options.pen_rate_lower = 5
ad.plot_run()
```
:::

> Example 2: Set up to plot, with the pen set to lower very slowly to
> the paper (5% speed), making use of the Interactive context:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw
ad = axidraw.AxiDraw()
ad.interactive()
ad.options.pen_rate_lower = 5
```
:::

*Pen Lowering Rate*

**Syntax: `options.pen_rate_lower = value`**

Specify the rate at which the pen is lowered from the pen-up position to
the pen-down position. This value is expressed as a relative percentage.

Allowed values: Integers from 1 to 100.

**Default:** 50, set in axidraw_conf.py

## pen_rate_raise

> ::: codetitle
> pen_rate_raise
> :::
>
> Example 1: Set up to plot, with the pen set to raise very quickly to
> the paper (90% speed), making use of the Plot context:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup("file.svg")
ad.options.pen_rate_raise = 90
ad.plot_run()
```
:::

> Example 2: Set up to plot, with the pen set to raise very quickly to
> the paper (90% speed), making use of the Interactive context:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw
ad = axidraw.AxiDraw()
ad.interactive()
ad.options.pen_rate_raise = 90
```
:::

*Pen Raising Rate*

**Syntax: `options.pen_rate_raise = value`**

Specify the rate at which the pen is raised from the pen-down position
to the pen-up position. This value is expressed as a relative
percentage.

Allowed values: Integers from 1 to 100.

**Default:** 75, set in axidraw_conf.py

## pen_delay_down

> ::: codetitle
> pen_delay_down
> :::
>
> Example 1: Add an extra delay of 250 ms, each time the pen is lowered,
> making use of the Plot context:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup("file.svg")
ad.options.pen_delay_down = 250
ad.plot_run()
```
:::

> Example 2: Add an extra delay of 250 ms, each time the pen is lowered,
> making use of the Interactive context:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw
ad = axidraw.AxiDraw()
ad.interactive()
ad.options.pen_delay_down = 250
```
:::

*Delay after lowering pen*

**Syntax: `options.pen_delay_down = value`**

Optional delay after lowering pen (ms). When lowering the pen, the
AxiDraw will normally pause for a given period of time, so as to allow
the pen to finish lowering before beginning horizontal pen-down
movements. The period of time is calculated from the Pen Lowering Rate
as well as the vertical distance to be traveled.

You can optionally modify the amount of delay time by adding some number
of milliseconds, given by `pen_delay_down`, to the calculated delay, for
example to intentionally begin moving before the pen is fully down, or
to ensure that the pen is making solid contact before moving. The value
of this option may be positive or negative, but if the total delay
(calculated travel time + `pen_delay_down`) is less than zero, then a
total delay time of zero will be used.

Allowed values: Integers from -500 to 500.

**Default:** 0, set in axidraw_conf.py

## pen_delay_up

> ::: codetitle
> pen_delay_up
> :::
>
> Example 1: Add an extra delay of 250 ms, each time the pen is raised,
> making use of the Plot context:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup("file.svg")
ad.options.pen_delay_up = 250
ad.plot_run()
```
:::

> Example 2: Add an extra delay of 250 ms, each time the pen is raised,
> making use of the Interactive context:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw
ad = axidraw.AxiDraw()
ad.interactive()
ad.options.pen_delay_up = 250
```
:::

*Delay after raising pen*

**Syntax: `options.pen_delay_up = value`**

Optional delay after raising pen (ms). When raising the pen, the AxiDraw
will normally pause for a given period of time, so as to allow the pen
to finish going up before beginning horizontal pen-up movements. The
period of time is calculated from the Pen Raising Rate as well as the
vertical distance to be traveled.

You can optionally modify the amount of delay time by adding some number
of milliseconds, given by `pen_delay_up`, to the calculated delay, for
example to intentionally begin moving before the pen is fully up, or to
ensure that the pen is fully above the paper before moving. The value of
this option may be positive or negative, but if the total delay
(calculated travel time + `pen_delay_up`) is less than zero, then a
total delay time of zero will be used.

Allowed values: Integers from -500 to 500.

**Default:** 0, set in axidraw_conf.py

## const_speed

> ::: codetitle
> const_speed
> :::
>
> Example 1: Set up to plot, configuring for constant speed when pen is
> down, making use of the Plot context:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup("file.svg")
ad.options.const_speed = True
ad.plot_run()
```
:::

> Example 2: Set up to plot, configuring for constant speed when pen is
> down, making use of the Interactive context:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw
ad = axidraw.AxiDraw()
ad.interactive()
ad.options.const_speed = True
```
:::

*Plot with constant pen-down speed*

**Syntax: `options.const_speed = True`**

Use constant speed when pen is down.

By default, this option is disabled, and the AxiDraw will use
acceleration so as to achieve higher maximum speeds. Some applications
will benefit from using constant-speed motion instead.

This feature may be enabled by setting `const_speed` equal to `True`.

Allowed values: `True`, `False`.

**Default:** `False`, set in axidraw_conf.py

## model

> ::: codetitle
> model
> :::
>
> Example 1: Set plotting size limits for the AxiDraw V3/A3, making use
> of the Plot context:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup("file.svg")
ad.options.model = 2
ad.plot_run()
```
:::

> Example 2: Set plotting size limits for the AxiDraw V3/A3, making use
> of the Interactive context:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw
ad = axidraw.AxiDraw()
ad.interactive()
ad.options.model = 2
```
:::

*AxiDraw hardware model*

**Syntax: `options.model = value`**

Select which model of AxiDraw hardware you are using. This is used to
set the limits of travel. These bounds are set by dead reckoning, under
the assumption that a given session (plot or interactive session) was
started with the carriage in the Home Corner, and that no loss of
position control has occurred. Movements are clipped to occur within
these limits.

Limits are not checked when using manual walk commands.

Allowed values: Integers from 1 to 7:

- `1` - AxiDraw V2, V3, or SE/A4
- `2` - AxiDraw V3/A3 or SE/A3
- `3` - AxiDraw V3 XLX
- `4` - AxiDraw MiniKit
- `5` - AxiDraw SE/A1
- `6` - AxiDraw SE/A2
- `7` - AxiDraw V3/B6

**Default:** 1 (AxiDraw V2, V3, or SE/A4), set in axidraw_conf.py

The physical size definitions for each model type are also configured in
axidraw_conf.py.

## penlift

> ::: codetitle
> model
> :::
>
> Example 1: Plot a file, using default pen-lift configuration.

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup("file.svg")
ad.options.penlift = 1
ad.plot_run()
```
:::

> Example 2: Plot a file, using narrow-band brushless pen-lift servo
> motor.

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup("file.svg")
ad.options.penlift = 3
ad.plot_run()
```
:::

*Pen lift servo configuration*

**Syntax: `options.penlift = value`**

Select the hardware configuration for the AxiDraw\'s pen-lift servo
mechanism. Unless changed, this option leaves your AxiDraw configured to
use its factory-standard pen-lift servo.

The default value, `1`, specifies to use the default configuration for
the AxiDraw model. A value of `2` explicitly selects to use a
\"standard\" PWM-controlled hobby servo, controlled at output \"B1\",
the lowest set of three pins on an AxiDraw\'s EBB control board. (Since
*all AxiDraw models thus far do use this as their default*, the value
`2` currently produces the same results as a value of `1`, regardless of
AxiDraw model.)

A value of `3` configures the servo output to instead (A) be directed to
output pin \"B2\", the third set up on the AxiDraw\'s EBB control board
(two positions higher than normal) and (B) produce a control signal
appropriate for a narrow-band brushless pen-lift servo motor.

Allowed values: Integers from 1 to 3:

- `1` - Default for AxiDraw model.
- `2` - Standard servo (lowest connector position)
- `3` - Narrow-band brushless servo (3rd position up)

**Default:** 1 (Default for AxiDraw model), set in axidraw_conf.py

## port

> ::: codetitle
> port
> :::
>
> Example 1: Specify to use the USB port enumerated as
> /dev/cu.usbmodem1441, making use of the Plot context:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup("file.svg")
ad.options.port = "/dev/cu.usbmodem1441"
ad.plot_run()
```
:::

> Example 2: Specify to use the USB port enumerated as
> /dev/cu.usbmodem1441, making use of the Interactive context:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw
ad = axidraw.AxiDraw()
ad.interactive()
ad.options.port = "/dev/cu.usbmodem1441"
if not ad.connect():
    quit()
```
:::

> Example 3: Specify to use the AxiDraw with USB Nickname \"UV LED
> Array\", making use of the Plot context:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup("file.svg")
ad.options.port = "UV LED Array"
ad.plot_run()
```
:::

> Example 4: Specify to use the AxiDraw with USB Nickname \"UV LED
> Array\", making use of the Interactive context:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw
ad = axidraw.AxiDraw()
ad.interactive()
ad.options.port = "UV LED Array"
if not ad.connect():
    quit()
```
:::

*Specify a USB port or named AxiDraw to use*

**Syntax: `options.port = value`**

By default, the AxiDraw software works with the first available AxiDraw
located on USB. Alternately, you can use the port option to specify a
particular machine. You can specify the machine using the USB port
enumeration (e.g., `COM6` on Windows or `/dev/cu.usbmodem1441` on a Mac)
or by using an assigned USB nickname.

If any port is specified, then the software will attempt to open the
connection to that (and only that) AxiDraw or USB port. It will return
an error if the port or AxiDraw cannot be found. This behavior may be
overridden by use of the `port_config` option.

USB port enumerations are typically not permanent; they may change with
events as simple as unplugging a device and plugging it back in.

For a more permanent designation, you can assign an \"AxiDraw USB
Nickname\" to a given machine as well. This USB nickname may be read and
written using the manual commands. (See [`manual_cmd`](#manual_cmd) for
additional information.)

Be aware that if multiple AxiDraw units are connected to one computer,
it may not be trivial to identify which physical machine is currently
identified as which USB device. You may wish to try an identifying
action, for example raising the pen, to indicate which machine is which.

Allowed values of the port option are strings, which specify either the
USB port or AxiDraw USB nickname to use.

**Default:** `None`, set in axidraw_conf.py

## port_config

> ::: codetitle
> port_config
> :::
>
> Example 1: Plot *only* to an AxiDraw with USB Nickname \"UV LED
> Array\"; Return an error if that unit is not found, explicitly using
> the default value (0) of port_config, within the Plot context:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup("file.svg")
ad.options.port="UV LED Array"
ad.options.port_config = 0
ad.plot_run()
```
:::

> Example 2: Plot *only* to an AxiDraw with USB Nickname \"UV LED
> Array\"; Return an error if that unit is not found, explicitly using
> the default value (0) of port_config, within the Interactive context:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw
ad = axidraw.AxiDraw()
ad.interactive()
ad.options.port="UV LED Array"
ad.options.port_config = 0
```
:::

> Example 3: Plot to the first available AxiDraw found on USB, making
> use of the Plot context:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup("file.svg")
ad.options.port_config = 1
ad.plot_run()
```
:::

> Example 4: Plot to the first available AxiDraw found on USB, making
> use of the Interactive context:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw
ad = axidraw.AxiDraw()
ad.interactive()
ad.options.port_config = 1
```
:::

*Override how the USB ports are located*

**Syntax: `options.port_config = value`**

By default, the software handles assignments of USB ports as follows:

- If no `port` value is specified, the first AxiDraw located via USB
  will be used.

- If a `port` value is specified, then the software will attempt to
  communicate only with that specified AxiDraw.

The `port_config` option can override this behavior. Allowed values of
this option are integers 0 and 1:

- `0` - Do not override; use standard \"port\" option behavior.
- `1` - Address only the first AxiDraw located via USB

If `port_config` is 0, then the software will follow the default
behavior described above.

If `port_config` is 1, then the software will communicate only with the
first AxiDraw located, even if a value of `port` is specified.

**Default:** 0, set in axidraw_conf.py

# Options (Plot)

The following is a list of options that can be set in the **Plot**
context, and which are not applicable in the **Interactive** context.

Each of these arguments will be described individually, after the list.

  Option           Description
  ---------------- ----------------------------------------------------
  `mode`           Specify general mode of operation.
  `manual_cmd`     Specify which \"manual\" mode command to use.
  `dist`           Distance input for certain manual commands.
  `layer`          Specify which layer(s) to plot in the layers mode.
  `copies`         Specify the number of copies to plot.
  `page_delay`     Specify delay between pages, for multiple copies.
  `auto_rotate`    Enable auto-rotate when plotting.
  `preview`        Perform offline simulation of plot only.
  `rendering`      Render motion when using preview.
  `reordering`     Optimize plot order before plotting.
  `random_start`   Randomize start positions of closed paths.
  `hiding`         Enable hidden-line removal
  `report_time`    Report time and distance after the plot.
  `digest`         Return plot digest instead of full SVG
  `webhook`        Enable webhook alerts.
  `webhook_url`    URL for webhook alerts.

## mode

> ::: codetitle
> mode
> :::
>
> Example 1: Plot all document layers that have a layer name beginning
> with the number 1:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup("file.svg")
ad.options.mode = "layers"
ad.options.layer = 1
ad.plot_run()
```
:::

> Example 2: Cycle the pen up or down, using \"cycle\" mode:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup()
ad.options.mode = "cycle"
ad.plot_run()
```
:::

> Example 3: Disable the XY stepper motors, using \"manual\" mode:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup()
ad.options.mode = "manual"
ad.options.manual_cmd = "disable_xy"
ad.plot_run()
```
:::

*General mode of operation*

Specify the general mode of operation, within in the **Plot** context.
This is equivalent to selecting a function \"tab\" in the Inkscape-based
GUI for AxiDraw Control.

The following is a list of allowed values of the mode option. Each of
these modes will be described in detail, after the list.

  Value        Description
  ------------ ----------------------------------------------------------------------------
  `plot`       Plot the file. **\[DEFAULT\]**
  `layers`     Plot a single layer (or set of layers), selected by `layer` option
  `cycle`      A setup mode: Lower and then raise the pen
  `align`      A setup mode: Raise pen, disable XY stepper motors
  `toggle`     A setup mode: Raise the pen if it is lowered, or vice versa
  `manual`     Execute a utility command, specified by [`manual_cmd`](#manual_cmd) option
  `sysinfo`    Query EBB firmware version and report system information
  `version`    Report AxiDraw software version number
  `res_plot`   Resume a plot in progress, using stored plot progress data
  `res_home`   Return AxiDraw to home, using stored plot progress data

**Default:** `'plot'`, set in axidraw_conf.py

The `mode` option is only applicable within the **Plot** context; it
cannot be used within an **Interactive** context session.

### plot

> ::: codetitle
> mode: plot
> :::
>
> Example 1: Plot a file called file.svg, explicitly setting plot mode:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup("file.svg")
ad.options.mode = "plot" # Default; you can comment out this line.
ad.plot_run()
```
:::

> Example 2: Plot a file called file.svg, using multiple modes including
> plot:

::: highlight
``` {.highlight .python .tab-python}
import time
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup("file.svg")

ad.options.mode = "toggle" # Configure to toggle pen up/down
ad.plot_run()              # Execute that toggle
time.sleep(1.000)          # Wait one second
ad.plot_run()              # Toggle pen again
time.sleep(1.000)          # Wait one second
ad.options.mode = "plot"   # Configure back into plot mode
ad.plot_run()              # plot the file
```
:::

*Plot the SVG file*

**Syntax: `options.mode = "plot"`**

The plot mode is for plotting an SVG file. This the default mode of
operation, when in the **Plot** context, and in most cases does not need
to be explicitly specified. One case where you may need to explicitly
switch the mode to `plot` is if you should switch to another mode and
then need to switch back.

Plot modes are only applicable for use within the **Plot** context.

### layers

> ::: codetitle
> mode: layers
> :::
>
> Example 1: Plot all document layers that have a layer name beginning
> with the number 1:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup("file.svg")
ad.options.mode = "layers"
ad.options.layer = 1
ad.plot_run()
```
:::

> Example 2: Render a preview of how a layer called \"5-blue\" (the only
> layer in file.svg that has a name starting with the number 5) will
> plot, including pen-up travel, and estimate how long that layer will
> take to plot. Save the output SVG into a variable called
> \"output_svg\":

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup("file.svg")
ad.options.mode = "layers"
ad.options.layer = 5
ad.options.preview = True
ad.options.rendering = 3
output_svg = ad.plot_run(True)
```
:::

*Plot a single layer (or set of layers)*

**Syntax: `options.mode = "layers"`**

Plot a single layer (or set of layers), selected by the
[`layer`](#layer) option.

When using the default (plot) mode, the entire document will be plotted.
That is to say all paths, on all visible layers of the SVG document,
will be plotted. You can instead use layers mode to plot a single layer
or group of layers, for example to plot only layers that should be
plotted in one color of ink.

If you plot in layers mode, only visible layers that have layer names
beginning with the selected number will plot. The selected number is
given by the value of the `layer` option, and may be in the range of 0 -
1000.

For example, a layer named \"5-red\" will be plotted if the number 5 is
selected, but layers named \"guide lines\", \"55\", or \"2-black\" will
be skipped.

Layers mode is equivalent to plotting from the \"Layers\" tab of AxiDraw
Control within Inkscape.

Sublayers and other named groups are **not** considered to be layers for
this or other software features that operate by layers; only
\"top-level\" layers can be addressed in `layers` mode.

See the description of the \"layer\" option below for additional
information. For more information about options available based on layer
name, and how to create layers when generating SVG outside of Inkscape,
please see the [AxiDraw Layer
Control](http://wiki.evilmadscientist.com/AxiDraw_Layer_Control)
documentation.

Plot modes are only applicable for use within the **Plot** context.

### cycle

> ::: codetitle
> mode: cycle
> :::
>
> Example: Cycle the pen down and then up, using \"cycle\" mode:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup()
ad.options.mode = "cycle"
ad.plot_run()
```
:::

*Cycle the pen down and back up*

**Syntax: `options.mode = "cycle"`**

This is a setup mode that can be used used to prepare the AxiDraw for
use. It will lower the pen, wait 0.5 seconds, and then raise the pen.
Cycling before inserting your pen ensures that your pen holder starts in
the pen-up position, with current pen-up and pen-down heights applied.

Cycle mode is equivalent to selecting the \"Setup\" tab of AxiDraw
Control (within Inkscape) and choosing the \"Cycle pen down then up\"
option within that tab.

An SVG file input to `plot_setup()` is allowed but not required for this
mode to operate correctly.

If you wish to only lower or raise the pen, not cycle down and up, use
the [`toggle`](#toggle) mode or the
[lower_pen/raise_pen](#lower_pen-raise_pen) manual commands instead.

Plot modes are only applicable for use within the **Plot** context.

### align

> ::: codetitle
> mode: align
> :::
>
> Example: Put the AxiDraw into Align mode:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup()
ad.options.mode = "align"
ad.plot_run()
```
:::

*Raise pen and disable XY stepper motors*

**Syntax: `options.mode = "align"`**

This is a setup mode that may be used used to prepare the AxiDraw for
use. It will raise the pen to the \"pen up\" position and turn off
(disengage) the XY stepper motors. In this configuration, one can
manually move the carriage to the home corner and insert a pen.

Note that the pen will only be raised if it was in the down state or
indeterminate state. It will not be raised if it was already in the
pen-up state.

This mode is equivalent to selecting the \"Setup\" tab of AxiDraw
Control (within Inkscape) and choosing the \"Raise pen, turn off
motors\" option within that tab. Both raising the pen and turning off
the XY motors are actions that can also be initiated in manual mode.

An SVG file input to `plot_setup()` is allowed but not required for this
mode to operate correctly.

Plot modes are only applicable for use within the **Plot** context.

### toggle

> ::: codetitle
> mode: toggle
> :::
>
> Example: Toggle the pen up or down, using \"toggle\" mode:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup()
ad.options.mode = "toggle"
ad.plot_run()
```
:::

*Toggle the pen position from up to down, or vice versa.*

**Syntax: `options.mode = "toggle"`**

This is a setup mode that may be used used to prepare the AxiDraw for
use. It will alternately raise or lower the pen each time that it is
called.

This mode is equivalent to selecting the \"Setup\" tab of AxiDraw
Control (within Inkscape) and choosing the \"Toggle pen between UP,
DOWN\" option within that tab.

An SVG file input to `plot_setup()` is allowed but not required for this
mode to operate correctly.

If you wish to only lower or raise the pen --- not toggle to the
opposite state --- use one of the
[lower_pen/raise_pen](#lower_pen-raise_pen) manual commands instead.

Note that `lower_pen` will only lower the pen if it was in the up state
or an indeterminate state. It will not be lowered if it was already in
the pen-down state.

Similarly, `raise_pen` will only raise the pen if it was in the down
state or an indeterminate state. It will not be raised if it was already
in the pen-up state.

Plot modes are only applicable for use within the **Plot** context.

### manual

> ::: codetitle
> mode: manual
> :::

::: highlight
``` {.highlight .plaintext}
Examples for the different manual commands are given along the description
of each individual manual_cmd item.
```
:::

*Execute a \"manual\" command*

**Syntax: `options.mode = "manual"`**

Execute one of several \"manual\" utility commands, chosen from a list
and specified with the `manual_cmd` argument.

See the description of [`manual_cmd`](#manual_cmd) for additional
information about the available commands.

This mode is equivalent to selecting the \"Manual\" tab of AxiDraw
Control within Inkscape.

An SVG file input to `plot_setup()` is allowed but not required for
commands in manual mode.

Plot modes are only applicable for use within the **Plot** context.

### sysinfo

> ::: codetitle
> mode: sysinfo
> :::
>
> Example: Request sysinfo:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup()
ad.options.mode = "sysinfo"
ad.plot_run()
```
:::

> Typical response (example on Mac):

::: highlight
``` {.highlight .plaintext}
This is AxiDraw Control version 3.9.6.
Your AxiDraw Control software is up to date.

Your AxiDraw has firmware version 2.7.0.
An update is available to EBB firmware v. 2.8.1;
To download the updater, please visit: axidraw.com/fw


Additional system information:
3.10.6 (main, Aug 30 2022, 04:58:14) [Clang 13.1.6 (clang-1316.0.21.2.5)]
Voltage readout: 296 (~ 9.08 V).
Current setpoint: 483 (~ 0.89 A).
```
:::

*Report system information*

**Syntax: `options.mode = "sysinfo"`**

Query firmware version and report additional system information. This
mode is equivalent to selecting the \"Version\" tab of AxiDraw Control
within Inkscape.

The information items listed are:

- The firmware revision for the AxiDraw\'s EBB control board.
- Whether a firmware update is available.
- The version number of the AxiDraw software.
- Whether a software update is available.
- Detailed version information of the Python interpreter running the
  script, as given by Python\'s sys.version command.
- Estimated voltage input at the EBB, as well as motor current setpoint.

An SVG file input to `plot_setup()` is allowed but not required for this
mode to operate correctly.

Plot modes are only applicable for use within the **Plot** context.

### version

> ::: codetitle
> mode: version
> :::
>
> Example: Query software version:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup()
ad.options.mode = "version"
ad.plot_run()
```
:::

> Typical response:

::: highlight
``` {.highlight .plaintext}
3.8.0
```
:::

> Alternative: read the version_string variable or **version** instead:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
axidraw_version_string1 = axidraw.__version__

ad = axidraw.AxiDraw()
axidraw_version_string2 = ad.version_string

print(axidraw_version_string1)
print(axidraw_version_string2)
```
:::

> Typical response:

::: highlight
``` {.highlight .plaintext}
3.8.0
3.8.0
```
:::

*AxiDraw Software Version*

**Syntax: `options.mode = "version"`**

Query and report AxiDraw software version. This mode is not available in
the GUI (Inkscape) based version of this software.

An SVG file input to `plot_setup()` is allowed but not required for this
mode to operate correctly.

Rather than running `plot_run()` in `version` mode, it is generally
easier and more useful to instead read the `version_string` variable or
`axidraw.__version__` provided by the Python module, as shown in the
example.

Plot modes are only applicable for use within the **Plot** context.

### res_plot, res_home

> ::: codetitle
> modes: res_plot, res_home
> :::
>
> Example: Plot a file until it is paused (by button press or by AxiDraw
> Layer Control). Wait 5 seconds. Then move the XY carriage home. Wait 5
> more seconds. Then, resume plotting:

::: highlight
``` {.highlight .python .tab-python}
import time
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup("file.svg")
output_svg = ad.plot_run(True)
time.sleep(5)
ad.plot_setup(output_svg)
ad.options.mode = "res_home"
output_homed = ad.plot_run(True)
time.sleep(5)
ad.plot_setup(output_homed)
ad.options.mode = "res_plot"
ad.plot_run()
```
:::

*Resume a paused plot or return to Home position*

**Syntax: `options.mode = "res_plot"`**

**Syntax: `options.mode = "res_home"`**

It is possible to pause a plot underway, and save the progress of the
plot such that the plot can be resumed later. These two \"resume\" modes
allow you to continue working with a plot that has been paused with
progress saved.

Background: When using AxiDraw Control through the Inkscape GUI, the
following workflow is used to pause and resume plots that are underway:

1.  The plot is paused by pressing the physical pause button on the
    AxiDraw, or using Control+C on the keyboard, if keyboard pausing is
    enabled with [`keyboard_pause`](#error-handling). (Plots can also be
    paused at predefined points with [AxiDraw Layer
    Control](http://wiki.evilmadscientist.com/AxiDraw_Layer_Control).)
2.  The plot pauses after finishing the current line segment.
3.  The SVG file is updated, saving an index of progress through the
    file and last-known XY carriage location.
4.  The user may then use the Resume tab to return the carriage home or
    to resume the plot, using the stored plot progress data from the
    file as a reference.

The same basic procedure may be used through the Python API, if the
updated SVG is collected by as the output of [`plot_run`](#plot_run),
for example as: `output_svg = plot_run(True)`.

The two \"resume\" modes available are:

1.  **res_home**: Return to Home Corner (only)
2.  **res_plot**: Resume plotting (From Home or Where Paused)

Please note that these modes can only be used *if* the file contains a
stored record of the last-known carriage position, as well as the
progress through the file. These records are generated automatically
when a plot is paused, and included in the output SVG. You must use this
output SVG as the *input* to the next plotting cycle, by using
[`plot_setup`](#plot_setup).

The position that a plot will be resumed at can be read and set by the
[`res_read`](#res_read) and
[`res_adj_in`](#res_adj_in-res_adj_mm)/[`res_adj_mm`](#res_adj_in-res_adj_mm)
manual commands.

The resume functionality allows the chained action of first moving to
the home position (if and only if performed via `res_home` and saving
the progress of having done so) and then using `res_plot` to resume
plotting.

If you are setting other options in your plot, be sure and leave those
options set (or set them again if necessary) when using `res_home` or
`res_plot`. Resuming without setting (e.g.) the right pen height or
AxiDraw model can result in unexpected output.

Plot modes are only applicable for use within the **Plot** context.

## manual_cmd

*Specify the manual command to execute*

**Syntax: `options.manual_cmd = "command_name"`**

This option allows you to specify exactly which particular \"manual\"
command will be executed if the `mode` is set to `manual`. This option
is ignored if any mode other than manual is active.

Please note that while some of these commands do perform movements,
these commands should not be considered \"real time\" control commands.
They are intended as utility commands, for test, setup, and calibration.
(If you need real-time movement commands, consider using the
**Interactive** context instead.)

An SVG document input to `plot_setup()` is allowed but not required in
manual mode. However, several of the commands (such as `res_adj_in`,
`strip_data`, etc.) are *not useful* unless input or input and output
SVG are specified. For manual commands such as `raise_pen` that do not
interact with the SVG document, execution is typically faster without
SVG input file.

The following is a list of allowed values of the `manual_cmd` option.
Each of these commands will be described in detail, after the list.

  Value          Description
  -------------- --------------------------------------------------------
  `fw_version`   Query firmware version **\[DEFAULT\]**
  `lower_pen`    Lower the pen
  `raise_pen`    Raise the pen
  `walk_x`       Walk carriage in X by a distance given in inches
  `walk_y`       Walk carriage in Y by a distance given in inches
  `walk_mmx`     Walk carriage in X by a distance given in mm
  `walk_mmy`     Walk carriage in Y by a distance given in mm
  `walk_home`    Walk carriage to position where motors were enabled
  `enable_xy`    Enable (energize) XY stepper motors
  `disable_xy`   Disable (de-energize) XY stepper motors
  `res_read`     Read position where a paused plot will resume
  `res_adj_in`   Adjust resume position of paused plot in inches
  `res_adj_mm`   Adjust resume position of paused plot in mm
  `strip_data`   Strip plotter data from file
  `list_names`   Read USB \"nickname\" or port of all attached machines
  `read_name`    Read the USB \"nickname\" of the AxiDraw
  `write_name`   Write the USB \"nickname\" of the AxiDraw
  `bootload`     Enter EBB bootloader mode

**Default:** `'fw_version'`, set in axidraw_conf.py

The `manual_cmd` options are only applicable for use within the **Plot**
context. They cannot be used within an **Interactive** context session.

### fw_version

> ::: codetitle
> manual_cmd: fw_version
> :::
>
> Example: Query the EBB firmware version:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup()
ad.options.mode = "manual"
ad.options.manual_cmd = "fw_version"
ad.plot_run()
firmware_version = ad.fw_version_string 
```
:::

> Typical response:

::: highlight
``` {.highlight .plaintext}
EBBv13_and_above EB Firmware Version 2.8.1
```
:::

*Manual command: Query firmware version*

**Syntax: `options.manual_cmd = "fw_version"`**

Query and report the firmware version of the AxiDraw\'s EBB control
board. This is the default option in manual mode.

In addition to printing firmware version this way, calling
[`plot_run()`](#plot_run) *in any mode* that connects to the AxiDraw
over USB creates a Python string variable, `fw_version_string` that you
can access and use within a script.

As of this writing, the current firmware version is 2.8.1. To update the
firmware on your AxiDraw, please see [these
instructions](https://wiki.evilmadscientist.com/Updating_EBB_firmware).

The `manual_cmd` options are only applicable for use within the **Plot**
context. They cannot be used within an **Interactive** context session.

### lower_pen, raise_pen

> ::: codetitle
> manual_cmd: lower pen, raise pen
> :::
>
> Example 1: Lower the pen:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup()
ad.options.mode = "manual"
ad.options.manual_cmd = "lower_pen"
ad.plot_run()
```
:::

> Example 2: Raise the pen, very slowly (10% speed), to 70% height:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup()
ad.options.mode = "manual"
ad.options.manual_cmd = "raise_pen"
ad.options.pen_rate_raise = 10
ad.options.pen_pos_up = 70
ad.plot_run()
```
:::

*Manual commands: Lower or raise the pen holder*

**Syntax: `options.manual_cmd = "lower_pen"`**

**Syntax: `options.manual_cmd = "raise_pen"`**

The `lower_pen` and `raise_pen` manual commands will, respectively,
lower or raise the pen holder. These are often useful for setup and
verification.

The `manual_cmd` options are only applicable for use within the **Plot**
context. They cannot be used within an **Interactive** context session.

### walk_x, walk_y

> ::: codetitle
> manual_cmd: walk_x, walk_y
> :::
>
> Example 1: Move the carriage 1 inch in the y direction (one inch
> forward and away from Home):

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup()
ad.options.mode = "manual"
ad.options.manual_cmd = "walk_y"
ad.options.dist = 1.0
ad.plot_run()
```
:::

> Example 2: Move the carriage 1.5 inches in the +x direction, and then
> back:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup()
ad.options.mode = "manual"
ad.options.manual_cmd = "walk_x"
ad.options.dist = 1.5
ad.plot_run()
ad.options.dist = -1.5
ad.plot_run()
```
:::

> Example 3: Move the carriage in a square, 10.0 cm on a side, with
> different speeds for each segment of movement:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup()
ad.options.mode = "manual"
ad.options.manual_cmd = "walk_x"
ad.options.dist = 3.937
ad.plot_run()
ad.options.manual_cmd = "walk_y"
ad.options.dist = 3.937
ad.plot_run()
ad.options.manual_cmd = "walk_x"
ad.options.dist = -3.937
ad.plot_run()
ad.options.manual_cmd = "walk_y"
ad.options.dist = -3.937
ad.plot_run()
```
:::

*Manual commands: Walk the carriage in the X or Y direction, inch units*

**Syntax: `options.manual_cmd = "walk_x"`**

**Syntax: `options.manual_cmd = "walk_y"`**

These two \"walk\" commands will move the AxiDraw carriage by a distance
in inches given by the value of the `dist` option, along one axis or the
other.

The `dist` option has a default value of 1.0. This distance is given in
inches, when using the `walk_x` or `walk_y` manual commands. If you
would prefer to use millimeter units, see the [`walk_mmx`,
`walk_mmy`](#walk_mmx-walk_mmy) commands instead.

The `walk_x` and `walk_y` movements are relative to the current position
(not absolute), and are NOT checked versus the current carriage position
for sane range of motion. Use caution: They can easily run the AxiDraw
past its safe range of motion.

Walk movements are \"out of band\" movements; they can provide a means
of offsetting the XY position of the AxiDraw carriage before starting a
plot or an interactive session. (The position where a plot starts will
be the origin for that plot, and the position where an interactive
session starts will be the origin for that session.) This ability to
offset the origin may occasionally provide utility in test, setup, and
calibration routines.

After making manual movements, and before plotting, you may wish to
manually return the AxiDraw carriage to the Home corner. Alternately,
you can use the [`walk_home`](#walk_home) manual command to \"reset\"
any walks, returning the carriage to the position where the motors were
first enabled.

Please note that these \"walk\" commands are not meant as a substitute
for full motion control. Use the Interactive context if you need a full
range of direct XY motion commands.

The `manual_cmd` options are only applicable for use within the **Plot**
context. They cannot be used within an **Interactive** context session.

### walk_mmx, walk_mmy

> ::: codetitle
> manual_cmd: walk_mmx, walk_mmy
> :::
>
> Example 1: Move the carriage 1 mm in the y direction (one millimeter
> forward and away from Home):

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup()
ad.options.mode = "manual"
ad.options.manual_cmd = "walk_mmy"
ad.options.dist = 1.0
ad.plot_run()
```
:::

> Example 2: Move the carriage 2.0 inches (5.08 mm) in the +x direction,
> and then back:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup()
ad.options.mode = "manual"
ad.options.manual_cmd = "walk_mmx"
ad.options.dist = 50.8
ad.plot_run()
ad.options.dist = -50.8
ad.plot_run()
```
:::

> Example 3: Move the carriage in a square, 10.0 cm on a side, with
> different speeds for each side of movement:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup()
ad.options.mode = "manual"
ad.options.manual_cmd = "walk_mmx"
ad.options.dist = 100
ad.plot_run()
ad.options.manual_cmd = "walk_mmy"
ad.options.dist = 100
ad.plot_run()
ad.options.manual_cmd = "walk_mmx"
ad.options.dist = -100
ad.plot_run()
ad.options.manual_cmd = "walk_mmy"
ad.options.dist = -100
ad.plot_run()
```
:::

*Manual commands: Walk the carriage in the X or Y direction, mm units*

**Syntax: `options.manual_cmd = "walk_mmx"`**

**Syntax: `options.manual_cmd = "walk_mmy"`**

These two \"walk\" commands will move the AxiDraw carriage by a distance
in millimeters given by the value of the `dist` option, along one axis
or the other.

The `dist` option has a default value of 1.0. This distance is given in
millimeters, when using the `walk_mmx` or `walk_mmy` manual commands. If
you would prefer to use inch units, see the [`walk_x`,
`walk_y`](#walk_x-walk_y) commands instead.

The `walk_mmx` and `walk_mmy` movements are relative to the current
position (not absolute), and are NOT checked versus the current carriage
position for sane range of motion. Use caution: They can easily run the
AxiDraw past its safe range of motion.

Walk movements are \"out of band\" movements; they can provide a means
of offsetting the XY position of the AxiDraw carriage before starting a
plot or an interactive session. (The position where a plot starts will
be the origin for that plot, and the position where an interactive
session starts will be the origin for that session.) This ability to
offset the origin may occasionally provide utility in test, setup, and
calibration routines.

After making manual movements, and before plotting, you may wish to
manually return the AxiDraw carriage to the Home corner. Alternately,
you can use the [`walk_home`](#walk_home) manual command to \"reset\"
any walks, returning the carriage to the position where the motors were
first enabled.

Please note that these \"walk\" commands are not meant as a substitute
for full motion control. Use the Interactive context if you need a full
range of direct XY motion commands.

The `manual_cmd` options are only applicable for use within the **Plot**
context. They cannot be used within an **Interactive** context session.

### walk_home

> ::: codetitle
> manual_cmd: walk_home
> :::
>
> Example 1: Make 20 random moves each in X and Y, each in the range 0-2
> mm, using walk_mmx and walk_mmy, and then return Home with walk_home,
> even though we\'re not directly keeping track of the position.

::: highlight
``` {.highlight .python .tab-python}
import random
from pyaxidraw import axidraw
ad = axidraw.AxiDraw()
ad.plot_setup()
ad.options.mode = "manual"

for x in range(20):
    ad.options.manual_cmd = "walk_mmx"
    ad.options.dist = 2 * random.random()
    ad.plot_run()
    ad.options.manual_cmd = "walk_mmy"
    ad.options.dist = 2 * random.random()
    ad.plot_run()

ad.options.manual_cmd = "walk_home"
ad.plot_run()
```
:::

> Example 2: Walk the carriage Home (more precisely, to the position
> where the motors were first enabled), if it ended up in some other
> position when a plot was stopped.

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup()
ad.options.mode = "manual"
ad.options.manual_cmd = "walk_home"
ad.plot_run()
```
:::

*Manual command: Walk the carriage back to its initial position*

**Syntax: `options.manual_cmd = "walk_home"`**

The `walk_home` manual command is a special \"manual walk\" type command
that moves the carriage to the initial position where the motors were
enabled.

In normal operation, where the AxiDraw is located in the Home position
before enabling the motors, starting a plot, or using other manual walk
commands, `walk_home` will return the AxiDraw to the Home position. But,
if the motors were initially enabled in some different position, this
command will instead return the AxiDraw to that other position.

This command can be used to reset the AxiDraw carriage position ---
moving it back to Home --- after one or more manual walk commands.

It can also be used to return the AxiDraw to the Home position, for
example after pausing a plot that will not be resumed.

Note that changing the motor resolution will generally count as
\"re-enabling\" the motors with the new resolution, and may alter the
position that `walk_home` will return to.

The `walk_home` command requires EBB firmware 2.6.2 or newer.

The `manual_cmd` options are only applicable for use within the **Plot**
context. They cannot be used within an **Interactive** context session.

### enable_xy, disable_xy

> ::: codetitle
> manual_cmd: enable_xy, disable_xy
> :::
>
> Example 1: Enable the XY stepper motors:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup()
ad.options.mode = "manual"
ad.options.manual_cmd = "enable_xy"
ad.plot_run()
```
:::

> Example 2: Disable the XY stepper motors:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup()
ad.options.mode = "manual"
ad.options.manual_cmd = "disable_xy"
ad.plot_run()
```
:::

*Manual commands: Enable or Disable the XY motors*

**Syntax: `options.manual_cmd = "enable_xy"`**

**Syntax: `options.manual_cmd = "disable_xy"`**

These two commands turn on or turn off, respectively, power to the pair
of stepper motors that controls the XY position of the AxiDraw carriage.

Stepper motor power is off by default at power up. It is often useful to
turn off power to the XY motors so that the carriage can be manually
moved to the home corner, prior to plotting.

The `manual_cmd` options are only applicable for use within the **Plot**
context. They cannot be used within an **Interactive** context session.

### res_read

> ::: codetitle
> manual_cmd: res_read
> :::
>
> Example: Read pause position from file.svg. Also populate variable
> \"resume_position\" with that distance.

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup("file.svg")
ad.options.mode = "manual"
ad.options.manual_cmd = "res_read"
ad.plot_run()
resume_position = ad.res_dist
print(f"resume_position : {resume_position:.3f} mm")
```
:::

> Typical response, with a file paused at 200 mm of pen-down travel:

::: highlight
``` {.highlight .plaintext}
Plot was paused after 200.000 mm (7.874 inches) of pen-down travel.
resume_position : 200.000 mm
```
:::

> Typical responses, for a file that finished plotting normally:

::: highlight
``` {.highlight .plaintext}
No in-progress plot data found in file.
To set up the plot to be resumed at a given point, add an offset.
resume_position : 0.000 mm
```
:::

> Typical response, with a file that has had its resume position
> adjusted:

::: highlight
``` {.highlight .plaintext}
Plot was originally paused after 200.000 mm (7.874 inches) of
pen-down travel. The resume position was then adjusted to
225.400 mm (8.874 inches).
resume_position : 225.400 mm
```
:::

*Manual command: Read position where a paused plot will resume*

**Syntax: `options.manual_cmd = "res_read"`**

When a plot is paused, the progress through the file is saved in the SVG
document so that the plot may be resumed later with
[`res_plot`](#res_plot-res_home) mode. The `res_read` manual command
reads the SVG and reports that progress as human-readable text.

Plot progress is measured as the total path length of *pen-down
movement* from the beginning of the plot to where it was paused. One may
adjust that distance, so it is more proper to say that it measures the
pen-down distance from the beginning of the plot to the point *where the
AxiDraw would resume plotting* with [`res_plot`](#res_plot-res_home)
mode.

The \"beginning of the plot\" refers to the first vertex of the first
plottable object in the SVG document. (Exactly what that object is
depends on which optimizations are applied and, for example, whether the
plot was started in Layers mode.)

The \"beginning of the plot\" still refers to the first plottable
object, even when a plot is resumed with
[`res_plot`](#res_plot-res_home) mode; it is *not* the position from
which the plot was resumed. For example, if a plot were paused after
plotting paths with a total arc length of 250 mm, and then resumed and
paused again after drawing another 100 mm, `res_plot` would report a
value of 350 mm.

In addition to printing the resume position, running this manual command
with [`plot_run()`](#plot_run) also creates a Python variable,
`res_dist` that contains the resume position in millimeters.

The resume position can be adjusted with the
[`res_adj_in`](#res_adj_in-res_adj_mm) and
[`res_adj_mm`](#res_adj_in-res_adj_mm) commands. See the
[`res_plot`](#res_plot-res_home) mode description for further discussion
of pause-and-resume methods when using this API.

The `manual_cmd` options are only applicable for use within the **Plot**
context. They cannot be used within an **Interactive** context session.

### res_adj_in, res_adj_mm

> ::: codetitle
> manual_cmd: res_adj_in, res_adj_mm
> :::
>
> Example 1: Adjust resume position from file.svg, such that when
> resumed it would start 20 mm before its pause position. Also populate
> variable \"resume_position\" with that new distance.

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup("file.svg")
ad.options.mode = "manual"
ad.options.manual_cmd = "res_adj_mm"
ad.options.dist = -20
output_svg = ad.plot_run(True)  
resume_position = ad.res_dist
print(f"New resume_position : {resume_position:.3f} mm")
```
:::

> Typical response, with a file paused at 200 mm of pen-down travel:

::: highlight
``` {.highlight .plaintext}
Plot was paused after 200.000 mm of pen-down travel.
After adding a new offset of -20.000 mm, the resume position
    is now set at 180.000 mm.
New resume_position : 180.000 mm
```
:::

> Example 2: Configure a document to begin printing (when used with
> res_plot mode) after 12.5 inches of pen-down distance.

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup("file.svg")
ad.options.mode = "manual"
ad.options.manual_cmd = "res_adj_in"
ad.options.dist = 12.5
output_svg = ad.plot_run(True)  
resume_position = ad.res_dist
print(f"New resume_position : {resume_position:.3f} mm")
```
:::

> Typical response, with a file that was not initially paused:

::: highlight
``` {.highlight .plaintext}
This document was configured to start plotting at the beginning
of the file. After adding a new offset of 12.500 inches, the
resume position is now set at 12.500 inches.
New resume_position : 317.500 mm
```
:::

*Manual commands: Adjust resume position of paused plot*

**Syntax: `options.manual_cmd = "res_adj_in"`**

**Syntax: `options.manual_cmd = "res_adj_mm"`**

These two commands adjust the position where a paused plot will resume,
by a distance given by the value of the [`dist`](#dist) option and units
selected by choosing either `res_adj_in` or `res_adj_mm`. See the
[`res_read`](#res_read) command description for how to read the existing
resume position and for an extended discussion of what that position
means.

The `dist` option has a default value of 1.0 and can be positive or
negative. Its value, in units of inches when using `res_adj_in`, and in
millimeters when using `res_adj_mm`, is added to the the current resume
position to produce the new position.

If the new resume position is less than or equal to zero, it will reset
to zero (the beginning of the plot), where
[`res_plot`](#res_plot-res_home) mode cannot \"resume\" the plot. The
resume position can also be set to a distance longer than the total
pen-down length of the plot. In that case, `res_plot` mode can be run,
but nothing will print (since the resume point is after the end of the
plot).

If an SVG document does not have any in-progress plot saved, it *is*
possible to use `res_adj_in` or `res_adj_mm` to add an offset from zero,
and then start a plot at that position using `res_plot`. This provides a
means of starting a plot partway through, even if it did not begin as a
paused plot.

As with [`res_read`](#res_read), running the `res_adj_in` or
`res_adj_mm` manual command with [`plot_run()`](#plot_run) creates a
Python variable, `res_dist` that contains the new resume position in
millimeters.

It may be helpful to know the total pen-down length of a plot. If so,
Running a plot preview with the `report_time` option enabled can
calculate that for you.

The `manual_cmd` options are only applicable for use within the **Plot**
context. They cannot be used within an **Interactive** context session.

### strip_data

> ::: codetitle
> manual_cmd: strip_data
> :::
>
> Example: Strip AxiDraw data from file.svg and save the resulting SVG
> as a string in a variable named output_svg:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup("file.svg")
ad.options.mode = "manual"
ad.options.manual_cmd = "strip_data"
output_svg = ad.plot_run(True)  
```
:::

*Manual command: Strip plotter data from SVG file*

**Syntax: `options.manual_cmd = "strip_data"`**

The command removes any AxiDraw specific plotter data (such as saved
position data for the pause and resume feature) from the input file.

In practice this command has no effect unless there is an input SVG file
and the output SVG is both generated and saved.

The `manual_cmd` options are only applicable for use within the **Plot**
context. They cannot be used within an **Interactive** context session.

### list_names

> ::: codetitle
> manual_cmd: list_names
> :::
>
> Example. List connected AxiDraw units:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup()
ad.options.mode = "manual"
ad.options.manual_cmd = "list_names"
ad.plot_run()
axidraw_list = ad.name_list
```
:::

> Typical response (with two connected AxiDraw units, on Mac):

::: highlight
``` {.highlight .plaintext}
East
/dev/cu.usbmodem1441
```
:::

> Typical response (with two connected AxiDraw units, on Windows):

::: highlight
``` {.highlight .plaintext}
East
COM4
```
:::

*Manual command: List connected AxiDraw units*

**Syntax: `options.manual_cmd = "list_names"`**

List connected AxiDraw units, by USB \"nickname\" or by their USB port
enumeration. AxiDraw units with firmware v2.5.5 or newer may have a USB
\"nickname\" assigned to them. Units with older firmware will be listed
as port designations.

This list of connected units does not indicate whether or not an AxiDraw
is presently busy with another task; it simply lists each unit that is
detected by your computer\'s USB interface.

In addition to printing the list of names, running this manual command
with `plot_run()` also creates a Python list variable, `name_list` that
contains the names.

See documentation for `read_name` and `write_name` below for more about
AxiDraw naming.

The `manual_cmd` options are only applicable for use within the **Plot**
context. They cannot be used within an **Interactive** context session.

### read_name

> ::: codetitle
> manual_cmd: read_name
> :::
>
> Example: Read the USB Nickname from a single connected AxiDraw:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup()
ad.options.mode = "manual"
ad.options.manual_cmd = "read_name"
ad.plot_run() 
```
:::

> Typical response:

::: highlight
``` {.highlight .plaintext}
AxiDraw nickname: AxiDraw 16
```
:::

*Manual command: Read AxiDraw USB Nickname*

**Syntax: `options.manual_cmd = "read_name"`**

The `read_name` option is for reading an assigned USB \"nickname.\" A
nickname may be assigned to a given AxiDraw if it has firmware version
2.5.5 or newer. Nicknames are not required, but may be helpful when
operating more than one AxiDraw: You can specify the given machine by
name. (See the [`port`](#port) option for additional information.)

When reading the name, it may be helpful to disconnect all AxiDraw units
other than that one, so that you can be sure of which AxiDraw you are
communicating with. Alternately, you can use an identifying action (say,
toggling the pen) to identify which unit you are communicating with, or
specify a `port` option.

The `manual_cmd` options are only applicable for use within the **Plot**
context. They cannot be used within an **Interactive** context session.

### write_name

> ::: codetitle
> manual_cmd: write_name
> :::
>
> Example 1: Write a USB Nickname (\"AxiDraw 17\") to a single connected
> AxiDraw:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup()
ad.options.mode = "manual"
ad.options.manual_cmd = "write_nameAxiDraw 17"
ad.plot_run() 
```
:::

> Typical response:

::: highlight
``` {.highlight .plaintext}
Nickname written. Rebooting EBB.
```
:::

> Example 2: Clear the USB Nickname from the Axidraw nicknamed \"AxiDraw
> 17\":

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup()
ad.options.port = "AxiDraw 17"
ad.options.mode = "manual"
ad.options.manual_cmd = "write_name"
ad.plot_run() 
```
:::

*Manual command: Write AxiDraw USB Nickname*

**Syntax: `options.manual_cmd = "write_name[NICKNAME]"`**

The `write_name` command is for assigning a USB \"nickname\". A nickname
may be assigned to a given AxiDraw if it has firmware version 2.5.5 or
newer. Nicknames are not required, but may be helpful when operating
more than one AxiDraw: You can specify the given machine by name. (See
the [`port`](#port) option for additional information.)

When writing the name, it may be helpful to disconnect all AxiDraw units
other than that one, so that you can be sure of which AxiDraw you are
communicating with. Alternately, you can use an identifying action (say,
toggling the pen) to identify which unit you are communicating with, or
specify a [`port`](#port) option.

When using `write_name`, the name itself is specified by concatenating
the name with the `write_name` option. For example as `write_nameNorth`
to assign the nickname \"North\". The name may be up to 16 characters
long. Using a nickname of at least 3 characters is recommended. Writing
an empty string (with nothing following `write_name`) will clear the
nickname.

Assigned Nicknames are semi-permanent; they will persist when power is
cycled, but can be overwritten by this command, (or other utilities that
assign a nickname), and will be erased (reset to default) if you should
run a firmware update at some point in the future.

Since the nickname is stored in a certain flash memory cell that can
only be written a finite number of times, avoid applications that
involve automated, repeated changes to the nickname tag.

This option is only applicable for use within the **Plot** context.

### bootload

> ::: codetitle
> manual_cmd: bootload
> :::
>
> Example: Put the AxiDraw into bootloader mode:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup()
ad.options.mode = "manual"
ad.options.manual_cmd = "bootload"
ad.plot_run()
```
:::

*Manual command: Enter EBB Bootloader Mode*

**Syntax: `options.manual_cmd = "bootload"`**

This command will put the AxiDraw\'s EBB control board into bootloader
mode. This is a special mode that is sometimes used as part of the
process of updating the EBB firmware. This command is not used in any
part of normal AxiDraw operation.

Bootloader mode may be identified by a particular rhythmic blinking of
LEDs on the control board. If you should accidentally enter bootloader
mode, disconnect the AxiDraw from both USB and power and then connect
them again.

See fw_version for more about firmware versions and updating.

The `manual_cmd` options are only applicable for use within the **Plot**
context. They cannot be used within an **Interactive** context session.

## dist

> ::: codetitle
> dist
> :::
>
> Example 1: Move the carriage 1.5 inches in the +x direction:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup()
ad.options.mode = "manual"
ad.options.manual_cmd = "walk_x"
ad.options.dist = 1.5
ad.plot_run()
```
:::

> Example 2: Adjust resume position from file.svg, such that when
> resumed it would start 20 mm before its pause position.

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup("file.svg")
ad.options.mode = "manual"
ad.options.manual_cmd = "res_adj_mm"
ad.options.dist = -20
output_svg = ad.plot_run(True)
```
:::

*Distance for Walk and Adjust Resume Position manual commands*

**Syntax: `options.dist = value`**

The `dist` option provides the amount of distance for
[`manual`](#manual) mode commands, when the manual command specified by
[`manual_cmd`](#manual_cmd) requires a distance input. The value of
`dist` is a floating point number that may be positive or negative. Its
default value is 1.0.

The units of the distance given by `dist` are selected by choosing a
specific manual command. The distance is in millimeters for manual walk
commands [`walk_mmx`](#walk_mmx-walk_mmy) or
[`walk_mmy`](#walk_mmx-walk_mmy) and for the
[`res_adj_mm`](#res_adj_in-res_adj_mm) command to adjust resume
position. The distance is in inches for manual walk commands
[`walk_x`](#walk_x-walk_y) or [`walk_y`](#walk_x-walk_y) and for the
[`res_adj_in`](#res_adj_in-res_adj_mm) command to adjust resume
position.

Values of `dist` should be chosen with care, since no limit checking is
performed. This is especially true with the manual walk commands, which
are relative to the current position (not absolute), and are **NOT**
checked for safe range of motion. These are fully manual commands, and
can easily run the AxiDraw past its safe range of motion.

Allowed values: Floating point numbers (not limit checked).

**Default:** 1.0, set in axidraw_conf.py

**Compatibility note**: This option was previously named `walk_dist`,
and renamed to `dist` as of software version 3.8. The old name
`walk_dist` is deprecated but still functional in python scripts that
set it (and do not set `dist`). The `walk_dist` syntax will be removed
in a future release.

This option is only applicable for use within the **Plot** context.

## layer

> ::: codetitle
> layer
> :::
>
> Example: Plot only layers with layer name beginning with \"3\":

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup("file.svg")
ad.options.mode = "layers"
ad.options.layer = 3
ad.plot_run()
```
:::

*Select layer(s) to plot when in layers mode*

**Syntax: `options.layer = value`**

Specify a number which indicates which layer (or layers) will be plotted
when plotting in [`layers`](#layers) mode.

Normally, when plot mode is selected, we plot paths from all layers. You
can also choose to plot a single layer or group of layers, for example
to plot only a single color of ink.

Plotting in [`layers`](#layers) mode, with a given layer specified by
this option will plot only layers whose names begin with the selected
number. While only a single integer value may be given for `layer`, that
value may match with multiple layer names, so that any number of layers
may be selected for plotting.

For example, suppose that your file has layers with the following names:

- \"guide lines\"
- \"5-red\"
- \"2 black\"
- \"55\"
- \"5 Outlines\"

Then, if a `layer` value of 5 is given in [`layers`](#layers) mode, the
two layers named \"5-red\" and \"5 Outlines\" will be plotted, while the
layers named \"guide lines\", \"55\", and \"2 black\" will be skipped.

Allowed values: Integers from 1 to 1000.

**Default:** 1, given by `default_Layer` in axidraw_conf.py

This option is only applicable for use within the **Plot** context.

## copies

> ::: codetitle
> copies
> :::
>
> Example 1: Plot a file two times, using default options:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup("file.svg")
ad.options.copies = 2
ad.plot_run()
```
:::

> Example 2: Plot a file continuously (until pause button pressed):

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup("file.svg")
ad.options.copies = 0
ad.plot_run()
```
:::

> Example 3: Plot a file 25 times, with a 5 s delay between each plot:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup("file.svg")
ad.options.copies = 25
ad.options.page_delay = 5
ad.plot_run()
```
:::

*Number of copies to plot*

**Syntax: `options.copies = value`**

If `copies` has a value other than 0, then a plot that is started in
[`plot`](#plot) mode or [`layers`](#layers) mode will be plotted that
number of times. This option has no effect in modes other than plot or
layers.

An optional delay may be chosen between subsequent plots (e.g., for
changing paper) with the [`page_delay`](#page_delay) option.

A value of 0 copies is a special value that will begin plotting a
continuous sequence of copies, without a scheduled end. The sequence
will continue until the physical pause button is pressed, unless the
file itself specifies a pause through [AxiDraw Layer
Control](http://wiki.evilmadscientist.com/AxiDraw_Layer_Control).

A set of plots in progress can be canceled at any time by pressing the
physical pause button on the AxiDraw. If a plot is active when the
button is pressed, it will stop at that location in the usual way
(saving progress in the output file, if an output file is specified). If
the pause button is pressed while at home waiting between copies, then
it simply exits without plotting any additional copies and without an
error message.

Allowed values: Integers from 0 to 9999.

**Default:** 1, set in axidraw_conf.py

This option is only applicable for use within the **Plot** context.

## page_delay

> ::: codetitle
> page_delay
> :::
>
> Example 1: Plot a file 2 times, with a 5 s delay between plots

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup("file.svg")
ad.options.copies = 2
ad.options.page_delay = 5
ad.plot_run()
```
:::

> Example 2: Plot continuously, with a 30 s delay between each plot:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup("file.svg")
ad.options.copies = 0
ad.options.page_delay = 30
ad.plot_run()
```
:::

*Delay between copies*

**Syntax: `options.page_delay = value`**

When plotting multiple copies, specify the delay in seconds between
subsequent plots.

This value is used to specify the time interval that the AxiDraw dwells
at the home position between subsequent layer or document plots, when
plotting multiple copies. See the description of [`copies`](#copies) for
more information.

Allowed values: Non-negative numbers.

**Default:** 15; set in axidraw_conf.py

This option is only applicable for use within the **Plot** context.

## auto_rotate

> ::: codetitle
> auto_rotate
> :::
>
> Example 1: Plot a file, with auto_rotate disabled:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup("file.svg")
ad.options.auto_rotate = False
ad.plot_run()
```
:::

*Enable auto-rotate*

**Syntax: `options.auto_rotate = value`**

Disable auto-rotate; preserve plot orientation.

By default \"auto rotate\" is enabled: If the SVG file being plotted has
a page size that is taller than it is wide, then it will print in
landscape mode rather than portrait mode.

Auto-rotate may be disabled by setting the auto_rotate option to
`False`. If auto_rotate is disabled, plot orientation will be preserved,
which may result in clipping of the artwork to the available plot area.

Allowed values: `True`, `False`.

**Default:** `True`; set in axidraw_conf.py

This option is only applicable for use within the **Plot** context.

## preview

> ::: codetitle
> preview
> :::
>
> Example 1: Do not plot a file, but report how long it will take to
> plot.

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup("file.svg")
ad.options.preview = True
ad.options.report_time = True
ad.plot_run()
```
:::

> Example 2: Preview a file, generating a rendered preview of all
> motion, making use of the rendering option to generate output SVG as
> \"output_svg\" that could be saved as an SVG file

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup("file.svg")
ad.options.preview = True
ad.options.rendering = 3
output_svg = ad.plot_run(True)
```
:::

*Plot Preview*

**Syntax: `options.preview = value`**

Plot Preview is an offline simulation mode where the serial port is not
used, and the AxiDraw does not move. This can be useful for one or more
of the following reasons:

- To estimate (in combination with [`report_time`](#report_time)) the
  duration of a plot.
- To render (if an output file is given) a graphical representation of
  the plot, to verify that the file will plot correctly.
- To perform a \"preflight check\" for any errors that might be
  encountered while plotting the file.

Since it is an offline simulation, it can be used even without an
AxiDraw present.

Note that the Plot Preview can be used in combination with other modes.
If enabled, no serial communication will be attempted, so certain
operations (e.g., raise pen) will neither function nor produce an error.

If Plot Preview is enabled, then it can also produce graphical output if
both an appropriate value of the [`rendering`](#rendering) option is
chosen and an output file is generated.

Allowed values: `True`, `False`.

**Default:** `False`, set in axidraw_conf.py

This option is only applicable for use within the **Plot** context.

## rendering

> ::: codetitle
> rendering
> :::
>
> Example: Preview a file, generating a rendered preview of pen-up
> motion:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup("file.svg")
ad.options.preview = True
ad.options.rendering = 2
output_svg = ad.plot_run(True)
```
:::

*Rendering style*

**Syntax: `options.rendering = value`**

When plotting with Plot Preview ([`preview`](#preview)) enabled and with
SVG output generated, you can create a rendered preview of how the SVG
document will plot. The rendering style option allows you to select
which part (if any) of the plotting is rendered.

Note also that this option is only applicable to the three modes which
parse and plot the SVG document: plot (default), layers, and res_plot.

When a preview is rendered, that preview is added to the output SVG
document, in a special \"documentation\" layer that will not be plotted.
(For more information about documentation layers, please see the
[AxiDraw Layer
Control](http://wiki.evilmadscientist.com/AxiDraw_Layer_Control)
documentation.)

The preview layer has sub-layers for showing the pen-up and/or pen-down
movement of the carriage, depending which are generated. The rendering
style option selects which of these (if any) are rendered.

Allowed values: Integers from 0 to 3:

- `0` - Do not render previews
- `1` - Render pen-down movement only
- `2` - Render pen-up movement only
- `3` - Render all movement, both pen-up and pen-down **\[DEFAULT\]**

**Default:** 3 (render all movement), set in axidraw_conf.py

This option is only applicable for use within the **Plot** context.

## reordering

> ::: codetitle
> reordering
> :::
>
> Example 1: Plot an SVG file (file.svg), reordering for speed including
> allowing path reversal prior to plotting.

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup("file.svg")
ad.options.reordering = 2
ad.plot_run()
```
:::

> Example 2: Preview how an SVG file (file.svg) will plot with basic
> optimization, reordering elements for speed but preserving their
> directions. SVG objects in the output SVG will be preserved in their
> original order.

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup("file.svg")
ad.options.preview = True
ad.options.rendering = 2
ad.options.reordering = 1
output_svg = ad.plot_run(True)
```
:::

*Specify level of plot optimization*

**Syntax: `options.reordering = value`**

When so selected with the `reordering` option, a plot optimization tool
is used to re-order elements in the input SVG prior to plotting or
rendering a preview. By changing the order and (optionally) direction of
paths, the plot duration can be lowered by reducing the amount of pen-up
travel required during the plot.

The `reordering` option is only applicable in the **Plot** context, and
only when in the modes that parse and plot the SVG document: plot
(default), layers, and res_plot.

**Normal order of plotting**

Normally and by default, each path within a SVG document is plotted
(with one exception) in the same order and in the same direction as it
appears in the document. This order is generally the order in which the
objects were created. In a graphical vector editor like Inkscape, newer
objects are drawn on top of older ones; a \"lower\" object is one that
appears earlier in the document.

The exception is that if one path ends very close to where another
begins (and if those paths are not separated by layers), then those two
paths are normally joined together, skipping an unnecessary pen lift.
The maximum gap that can be joined is given by the `min_gap` parameter
in the axidraw_conf.py configuration file.

The default option, which generally respects the original document
order, is often preferable, for example in handwriting-like
applications, where you may wish the writing to be in the same order
that a person would write the words, e.g. right-to-left, top-to-bottom
on the page.

**How reordering works**

When you plot an SVG document, the following operations occur:

1.  A temporary copy of the SVG document is made.
2.  Graphical elements like circles and rectangles are rendered into
    paths.
3.  The document is separated by layers.
4.  Within each layer:
    - All groups, sub-layers, and compound paths are broken apart.
    - Paths are joined together if one starts where another ends.
    - The paths are re-ordered for speed.
5.  The document is plotted (or the preview is rendered).
6.  The document is reverted to the temporary copy.
7.  If rendering a preview, the preview paths are added to the document.

Path sorting uses a \"greedy\" algorithm, a suboptimal but relatively
fast approach. Depending on the nature of the SVG document, it can
reduce the pen-up travel distance by 50-90% and reduce the plotting time
by 30-50%. Potential time savings should be weighed against the
execution time of the sort, which may be considerable for documents with
a great number of separate objects. In most cases reordering adds only a
few seconds before plotting starts and results in a significant overall
time savings.

If path reversal is allowed, then:

- The stage of joining two paths with coincident ends will check to see
  if paths can be joined if one or both are reversed.
- Sorting the paths for speed will consider reversing each path.

If path reversal is not allowed, then every path will be plotted in the
same direction as it occurs in the document, even if that results in a
slower plot.

You may find it helpful to run plots with [`preview`](#preview),
[`rendering`](#rendering), and/or [`report_time`](#report_time) enabled.
With those tools, you can visualize the effect that optimization has
with different values of `reordering` and estimate the plot duration on
documents that have and have not been sorted.

**Re-ordering is by layer**

The optimization tool is layer-aware: All objects will be left on their
original layers. That makes it safe to use on multicolor plots where
colors are separated by layers.

An SVG document without layers can still be optimized. The document
root, the set of elements that are not in layers, is re-ordered as
though it is a single layer.

If the SVG contains elements in document root that are separated by
layers, each set of elements that *is not separated by layers* is
treated as a virtual layer for the purposes of reordering.

**Changes to the document are not saved**

The changes to the order of elements in the SVG document are *ephemeral*
and only made to the temporary copy. If you save an output SVG, the
objects in that output SVG will retain their original order.

For example, if your SVG document has deeply nested groups, you can plot
it with the `reordering` of 2, but if you save the output SVG, it will
retain your original grouping.

**Values of the reordering option**

Allowed values: Integers from 0 to 4:

- 0: Least; Only connect adjoining paths. **\[DEFAULT\]**
- 1: Basic; Also reorder paths for speed
- 2: Full; Also allow path reversal
- 3: \[Deprecated; currently gives same behavior as 2.\]
- 4: None; Strictly preserve file order

The `reordering` values of 0 and 4 are identical except that the
\"strict\" value of 4 also disables path joining. Path joining may be
disabled separately via the `min_gap` parameter.

**Default:** 0 (Plot in original order, connecting adjoining paths to
reduce unnecessary pen lifts), given by `reordering` in axidraw_conf.py

This option is only applicable for use within the **Plot** context.

## random_start

> ::: codetitle
> random_start
> :::
>
> Example: Plot a file, randomizing the start position of closed shapes
> within that file:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup("file.svg")
ad.options.random_start = True
ad.plot_run()
```
:::

*Randomize start positions of closed paths*

**Syntax: `options.random_start = True`**

Randomize start locations of closed paths.

By default, this option is disabled, and the AxiDraw will draw closed
paths in the direction that they are given in the file (or possibly, the
reverse of that, depending on the [`reordering`](#reordering) option).

A pen may form a visible mark at the location where it is lowered or
raised. In artwork where the same closed shape is repeated many times,
that can cause a seam-like visual artifact if many of those marks line
up at matching points on the repeated shapes.

With the `random_start` option, the start position of closed paths ---
paths where the start points and end points are coincident --- will be
randomized, which can help to hide that specific type of visual
artifact.

This feature may be enabled by setting `random_start` equal to `True`.

Allowed values: `True`, `False`.

**Default:** `False`, set in axidraw_conf.py

This option is only applicable for use within the **Plot** context.

## hiding

> ::: codetitle
> hiding
> :::
>
> Example: Plot a file, using hidden-line removal:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup("file.svg")
ad.options.hiding = True
ad.plot_run()
```
:::

*Enable hidden-line removal*

**Syntax: `options.hiding = True`**

By default, this option is disabled, and the AxiDraw will draw all paths
(or objects that can be directly represented as paths) in the SVG
document. All fill and stroke (outline) properties of individual objects
are ignored. Phrased differently, All paths are normally plotted as
though there is a stroke along the path and no fill.

When the `hiding` option is enabled, the AxiDraw software will instead
plot paths (or not) based (1) on their fill and stroke properties and
(2) whether or not they are occluded behind other objects. An object
that does not have a stroke property (e.g., no outline in Inkscape) will
not plot, nor will one hidden behind a solid fill. Typically, when
working with documents that include filled regions, this means that the
AxiDraw output will visually resemble the original SVG artwork more
closely. In cases of ambiguity, consider running Plot Preview
([`preview`](#preview)) with rendering enabled in order to understand
how the document is processed.

There are two important drawbacks to bear in mind. First, the `hiding`
option requires additional processing time before plotting, especially
in instances with large numbers of objects to process. Second,
hidden-line removal **does not** preserve the orientation of individual
SVG strokes. We generally recommend using the
[`reordering`](#reordering) option, with \"full\" reordering (
`options.reordering = 2`) to orient the output paths for efficient
plotting.

In cases where the processing time becomes large, or when processing
repeatedly might be needed (as in, when a document might be paused and
resumed during the plotting process), it may be convenient to instead
process the document *once*, separately, using the [`digest`](#digest)
option.

This feature may be enabled by setting `hiding` equal to `True`.

Allowed values: `True`, `False`.

**Default:** `False`, set in axidraw_conf.py

This option is only applicable for use within the **Plot** context.

## report_time

> ::: codetitle
> report_time
> :::
>
> Example 1: Plot a file and report time elapsed:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup("file.svg")
ad.options.report_time = True
ad.plot_run()
```
:::

> Example 2: Preview a file and read out variables giving time and
> distance:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup("file.svg")
ad.options.report_time = True
ad.options.preview = True
ad.plot_run()
time_elapsed = ad.time_elapsed
time_estimate = ad.time_estimate 
dist_pen_down = ad.distance_pendown
dist_pen_total = ad.distance_total
pen_lifts = ad.pen_lifts
```
:::

*Report time and distance*

**Syntax: `options.report_time = value`**

Report time and distance plotted after each plot finishes.

By default, this option is disabled. Enabling it will print a report of
time and distance travelled after each plot finishes. Using this feature
in combination with Plot Preview ([`preview`](#preview)) can provide you
with a time estimate of each plot, without requiring the use of the
AxiDraw.

Note also that this option is only applicable to the three modes which
parse and plot the SVG document: `plot` (default), `layers`, and
`res_plot`.

When resuming a plot with `res_plot` mode, please be aware that the
distances reported will reflect the pen-down distance *since the
beginning of the document*, rather than since the plot resumed.
(Distances are calculated this way, using the total pen-down distance
through the document, to ensure that a plot can be paused and resumed,
even if started in `res_plot` mode.)

Whether or not `report_time` is enabled, calling
[`plot_run()`](#plot_run) in an applicable mode will also populate five
numeric Python variables that can be accessed from within a script:

  Variable             Meaning
  -------------------- ----------------------------------------
  `time_elapsed`       Elapsed time (s)
  `time_estimate`      Estimated time (s)
  `distance_pendown`   Distance traveled with the pen down, m
  `distance_total`     Distance traveled, total, m.
  `pen_lifts`          Number of pen lifts

Both time variables are in units of seconds. The execution time of the
`plot_run()` command is given by `time_elapsed`. This may be only a
fraction of a second when running small documents with Plot Preview
enabled, or lengthy when plotting documents. The estimated duration of
the plot when working with Plot Preview enabled is given by
`time_estimate`. When plotting a document (with Plot Preview not
enabled), the value of `time_estimate` is equal to `time_elapsed`.

Both distance variables are in units of meters. The total distance
traveled by the AxiDraw Carriage is given by `distance_total`, including
pen-up and pen-down travel. The distance of pen-down travel alone is
given by `distance_pendown`.

The `pen_lifts` value reports the number of times that the pen was
lifted during the plot.

The `report_time` option may be enabled by setting `report_time` equal
to `True`.

Allowed values: `True`, `False`.

**Default:** `False`, set in axidraw_conf.py

This option is only applicable for use within the **Plot** context.

## digest

> ::: codetitle
> digest
> :::
>
> Example 1: Plot a file, returning the \"Plob\" plot digest instead of
> the full SVG:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup("file.svg")
ad.options.digest = 1
output_plob = ad.plot_run(True)
```
:::

> Example 2: Do not plot the document. Instead, generate the \"Plob\"
> plot digest only:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup("file.svg")
ad.options.digest = 2
output_plob = ad.plot_run(True)
```
:::

*Plot digest output option*

**Syntax: `options.digest = value`**

When a `digest` value greater than 0 is chosen,
[`plot_run(True)`](#plot_run) will not return the (lightly modified)
input SVG, but instead a \"plot digest object\", or **Plob**. A Plob is
a restricted-format subset of SVG that the AxiDraw software \"digests\"
the file into before plotting.

In detail, the Plob is a new file generated from the input SVG after:

- Removing hidden and non-printable layers and objects
- Removing ignored layers, if working in [`layers`](#layers) mode.
- Reducing all plottable shapes and paths to vertex lists
- Applying, then removing any transformations
- Removing all style information
- Applying the auto-rotate function (if enabled)
- Cropping all paths at the plot edges
- Joining together sufficiently close path ends (unless disabled)
- Randomizing the start point of closed paths (if enabled)
- Reordering paths in the document for speed (if enabled)
- Flattening the document structure
- Adding metadata including the hardware model

Generating the Plob is **destructive**; any SVG shapes such as
rectangles or original paths that were present in the original SVG
document will *not* be present in the Plob output. Keep a copy of your
original SVG document.

A Plob file may be used as the input to the AxiDraw software, just like
any other SVG input. Plotting a Plob prepared for the same AxiDraw model
allows the AxiDraw software to skip all of the steps above and
immediately begin plotting the document. Note however, that once
generated, the Plob file cannot be modified at all, or it will no longer
be recognized as a valid Plob file. (Two exceptions: Pause/resume data
and plot preview updates are permitted modifications.)

If a plot underway is paused while the `digest` option is enabled, the
output Plob will include plot progress data for resuming the plot, just
as a regular SVG would. Partial plots \-- those paused while plotting or
that resume plotting in the middle of the document \-- still contain the
entire Plob including the parts that are not printed in those
situations.

The `digest` option may be helpful in a variety of situations, including
but not limited to:

- Processing a document *once* into a Plob that can be plotted many
  times
- Using different computers for document preparation versus plotting
- Improving the speed of operations that involve pause and resume cycles
- Separating a document with named layers into separate files

If a `digest` value of `1` is chosen, `plot_run(True)` will return an
output Plob instead of the full SVG, but no other changes occur. Plots
and plot previews will proceed normally.

A `digest` value of `2` overrides most software functions, to *only*
generate the Plob and perform no other function. (Internally, it sets
[`preview`](#preview) to True and disables running previews and time
estimates.) Using this option minimizes the total time for Plob
generation, as there is no need to wait for a plot or preview to finish.

Allowed values: Integers from 0 to 2:

- `0` - Disabled; No change to behavior or output **\[DEFAULT\]**
- `1` - Output \"plob\" digest, not full SVG, when outputting file
- `2` - Disable plots and previews; generate digest only

**Default:** 0 (Disabled), set in axidraw_conf.py

This option is only applicable for use within the **Plot** context.

## webhook

> ::: codetitle
> webhook
> :::
>
> Example: Plot a file and generate a webhook notification, to a
> specific URL when the plot finishes.

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup("file.svg")
ad.options.webhhook = True
ad.options.webhhook_url = "https://url.to.post.to/"
ad.plot_run()
```
:::

*Enable webhook alerts*

**Syntax: `options.webhook = value`**

If the `webhook` option is enabled and an URL is provided via the
[`webhook_url`](#webhook_url) option, then the software will post to
that URL when a plot completes.

This feature can be used in combination with various services including
[IFTTT](http://ifttt.com), to provide various forms of notifications
such as email alerts, mobile alerts, or integration with other hardware
or software.

When enabled, webhook alerts are only generated when a plot finishes (or
is paused) and all three of these conditions are met:

1.  When actually plotting to the AxiDraw (not in `preview` mode),
2.  In a mode that plots a document: `plot` (default), `layers`, or
    `res_plot`, and
3.  An URL is provided via the `webhook_url` option.

The data posted to the URL is JSON formatted and contains the following
key/value pairs:

  Key        Value
  ---------- --------------------
  `value1`   Document name
  `value2`   Elapsed time
  `value3`   Port (if provided)

The \"Port\" value here is taken from the [`port`](#port) option. If you
are operating multiple named AxiDraw machines, this value can be used to
indicate which machine has completed a plot.

Allowed values: `True`, `False`.

**Default:** `False`, set in axidraw_conf.py

This option is only applicable for use within the **Plot** context.

## webhook_url

> ::: codetitle
> webhook_url
> :::
>
> Example: Plot a file and generate a webhook notification, to a
> specific URL when the plot finishes.

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup("file.svg")
ad.options.webhhook = True
ad.options.webhhook_url = "https://url.to.post.to/"
ad.plot_run()
```
:::

*URL for webhook alerts*

**Syntax: `options.webhook_url = value`**

The URL to post data to, if the [`webhook`](#webhook) option is enabled.

The `webhook` option has no effect unless a URL is also provided, via
this option.

An extended discussion about webhooks, including instructions for
setting up mobile notifications via IFTTT, is available
[here](https://wiki.evilmadscientist.com/Webhooks).

**Default:** None, set in axidraw_conf.py

# Options (Interactive)

One option, `units`, applies only in the **Interactive** context, within
a Python script.

## units

> ::: codetitle
> units
> :::
>
> Example: Move to different positions, given in inch and cm units:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw
ad = axidraw.AxiDraw()
ad.interactive()
if not ad.connect():            # Open serial port to AxiDraw
    quit()
ad.moveto(1, 1)                 # Pen-up move to (1, 1) inch
ad.options.units = 1            # set working units to cm.
ad.update()                     # Process changes to options 
ad.line(5.08, 5.08)             # Relative line of (2, 2) inches
ad.moveto(0,0)                  # Pen-up move, back to origin.
ad.disconnect()                 # Close serial port to AxiDraw
```
:::

*Plot units*

**Syntax: `options.units = value`**

Set the units for movement commands given in the **Interactive**
context. If you change the units after calling `connect()`, use the
`update()` method to process that change before calling additional
motion commands.

The `units` option cannot presently be set in a configuration file.

Allowed values: Integers from 0 to 2:

- `0` - Inches **\[DEFAULT\]**
- `1` - Centimeters
- `2` - Millimeters

**Default:** 0 (inches; not adjustable).

This option is only applicable for use within the **Interactive**
context.

# Additional parameters

> ::: codetitle
> Additional parameters
> :::
>
> One or more parameters may be specified with the following syntax:

::: highlight
``` {.highlight .python .tab-python}
params.parameter_name = value
```
:::

> Example 1: Use the \"skip_voltage_check\" parameter to disable
> monitoring of the AxiDraw\'s input power level. This example will
> suppress the warning about low voltage level if you run this snippet
> with input power disconnected from the machine.

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()                  # create class instance "ad"
ad.plot_setup("file.svg")
ad.params.skip_voltage_check = True     # Disable check of motor input power
ad.plot_run()
```
:::

> Example 2: Read out boolean parameter for whether clipping to page is
> enabled.
>
> Also enabling digital output pin B3 to be high (on) when the pen is
> down, using the special \"use_b3_out\" parameter.

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw       # import module
ad = axidraw.AxiDraw()              # Initialize class
ad.interactive()                    # Enter interactive context
clipping = ad.params.clip_to_page   # Read "clip_to_page" parameter value
ad.params.use_b3_out = True         # enable digital output B3.
if not ad.connect():                # Open serial port to AxiDraw;
    quit()                          #   Exit, if no connection.
ad.moveto(1, 1)                     # Pen-up move
ad.lineto(0, 0)                     # Pen-down move back to origin
ad.disconnect()                     # Close serial port to AxiDraw
```
:::

As a supplement to the many options detailed above, there are additional
parameters available in the axidraw_conf.py configuration file that are
not normally adjusted in the course of typical applications.

For any parameter that has a default value defined in the
axidraw_conf.py configuration file and that *does not* have an option
name defined above, you can set that parameter value in analogy with the
`params` syntax examples given here. You can also read the value of any
parameter, as though it were any other Python variable.

For your reference, an example configuration file can be in the API
download at:\
`examples_config/axidraw_conf_copy.py`

Many of the default parameter values (such as travel limits) have
carefully chosen values. In cases where you need to override parameters,
proceed with caution, since the potential exists for behavior and/or
damage of an unpredictable nature. You are welcome to contact technical
support for situation-specific advice.

Advanced feature; use with great care.

# Error handling

> ::: codetitle
> Error handling
> :::
>
> Example 1: Plot a file, raising RunTime error on failure to connect,
> pause button press, loss of connection, or keyboard interrupt

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()              # create class instance "ad"
ad.plot_setup("file.svg")

ad.keyboard_pause = True            # Enable keyboard interrupt to pause plot

ad.errors.connect = True        # Raise error on failure to connect
ad.errors.button = True         # Raise error on pause button press
ad.errors.keyboard = True       # Raise error on keyboard interrupt
ad.errors.disconnect = True     # Raise error on loss of connection
try:
    ad.plot_run()
except RuntimeError:
    print(f"plot failed with error {ad.errors.code}")
```
:::

> Example 2: Plot a file without raising extra runtime errors, but
> checking for an error code after plot_run returns:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup("file.svg")
output_svg = ad.plot_run(True)
if ad.errors.code == 102:
    print("plot paused by button press.")
```
:::

This API allows you to configure whether or not certain error conditions
will raise a Python error. Some actions --- such as calling an
interactive movement function before connecting to the AxiDraw --- will
**always** raise a `RuntimeError`. However, one may prefer to raise an
error or *not raise an error* when (e.g.,) the pause button is pressed
in the middle of a plot.

The following four variables are available, and can be set `True` to
cause the API to raise a `RuntimeError` when the given condition is met.
If you do set them, do so before [`plot_run()`](#plot_run) in the
**Plot** context or [`connect()`](#connect) in the **Interactive**
context.

  Variable              Raise error:
  --------------------- -----------------------------------------------------
  `errors.connect`      On failure to connect (default: False)
  `errors.button`       When pause button is pressed (default: False)
  `errors.keyboard`     On keyboard interrupt (if enabled) (default: False)
  `errors.disconnect`   On loss of USB connection (default: False)

It is important to note that raising one of these errors will halt
execution of the current function, which will prevent functions
including [`plot_run(True)`](#plot_run) from returning data and thus
hindering the ability to resume a plot.

It may be preferable to allow the function to terminate normally,
collecting its return data, and then to query the variable `errors.code`
which can indicate these same error conditions:

  `errors.code` value   Meaning
  --------------------- --------------------------------------------
  0                     No error; operation nominal
  101                   Failed to connect
  102                   Stopped by pause button press
  103                   Stopped by keyboard interrupt (if enabled)
  104                   Lost USB connectivity

## Keyboard interrupts

While Python scripts can *typically* be stopped by a Control+C keyboard
operation, resulting in a `KeyboardInterrupt` error, a more graceful
interrupt can be enabled by setting the `keyboard_pause` variable to
`True`. If `keyboard_pause` is set to `True` in your script, then a
Control+C keyboard interrupt will stop a plot much in the same way that
pressing the pause button will, potentially allowing the plot to be
resumed later. Alternately, it can be caused to raise a `RuntimeError`
if `errors.keyboard` is set also set to `True`.

`keyboard_pause` is `False` by default. If you wish to set it `True`, do
so prior to [`plot_run()`](#plot_run) in the **Plot** context or
[`connect()`](#connect) in the **Interactive** context.

# Functions: General

One function, `load_config()`, is available within both the **Plot** and
**Interactive** context.

## load_config

> ::: codetitle
> load_config()
> :::
>
> Example 1: Loading settings from a file, and use the Interactive
> context

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw
ad = axidraw.AxiDraw()
ad.interactive()
ad.load_config("axidraw_conf_copy.py")
if not ad.connect():            # Open serial port to AxiDraw;
    quit()                      #   Exit, if no connection.
ad.moveto(1, 1)                 # Move to (1, 1) inch
ad.lineto(3.5, 1)               # Line to (3.5, 1) inch
ad.moveto(0, 0)                 # Raise pen, return home
ad.disconnect()                 # Close serial port
```
:::

> Example 2: Plot a file, using settings from a configuration file

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw   
ad = axidraw.AxiDraw()
ad.plot_setup("AxiDraw_trivial.svg")
ad.load_config("axidraw_conf_copy.py")
ad.plot_run()
```
:::

*Load settings from AxiDraw configuration file*

**Syntax: `load_config(file name or path)`**

The `load_config` function reads an AxiDraw configuration file and
applies the settings within that file. The configuration file argument
to the function (\"file name or path\") is required. It can be either
the name of the configuration file or the path to the file. The function
can be called in either the **Plot** or **Interactive** context; use
[`plot_setup()`](#plot_setup) or [`interactive()`](#interactive) before
calling `load_config()`.

It is never *necessary* to use the `load_config` function. All options
and parameters can be set directly within your Python script using the
normal [syntax to specify options](#setting-options) along with the
[`params` syntax](#additional-parameters). However, `load_config()` does
provide a method of separating settings out from the script, which can
be helpful when working with multiple sets of options, or to ensure a
uniform method for setting options when also working with the [AxiDraw
CLI](https://axidraw.com/doc/cli_api/#config).

An example configuration file can be in the API download at:
`examples_config/axidraw_conf_copy.py`

You can duplicate, move, rename, and edit this file as needed, though
you should keep the \".py\" file extension. You may wish to use
different configuration files to have quick settings ready for (for
example) draft versus final plotting speeds, different size AxiDraw
models, different paper size limits, which particular AxiDraw unit to
plot to, or previewing without plotting. Configuration files do not need
to be as complex as the example file; it is perfectly reasonable to use
a configuration file that specifies even just a single option value.

This function can be used in both the **Plot** and **Interactive**
contexts.

# Functions: Plot

This is the Python function reference for the functions available within
the **Plot** context. These functions do not apply in the
**Interactive** context.

Each function will be described individually, after the list.

  Function         Description
  ---------------- ---------------------------------------------
  `plot_setup()`   Parse SVG file and initialize Plot context.
  `plot_run()`     Perform the specified Plot context action.

## plot_setup

> ::: codetitle
> plot_setup()
> :::
>
> Example: Plot a file until it is paused (by button press or by AxiDraw
> Layer Control). Wait 5 seconds. Then move the XY carriage home.

::: highlight
``` {.highlight .python .tab-python}
import time
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup("file.svg")
output_svg = ad.plot_run(True)
time.sleep(5)
ad.plot_setup(output_svg)
ad.options.mode = "res_home"
output_homed = ad.plot_run(True)
```
:::

*Initialize Plot context and Parse SVG input*

**Syntax: `plot_setup(svg_input=None)`**

The `plot_setup` function parses the input SVG and initializes the
various configuration option variables. Calling this function configures
the software into the **Plot** context. This function must be called
before setting the values of any configuration option variables.

The SVG file argument to the function (\"svg_input\") is optional. If
provided, it may be the name or path of an SVG file (which will be
opened and parsed) or it may be a string that contains the contents of
an SVG file. The example shown illustrates calling `plot_setup` with
both an SVG file as input as well as a string containing the contents of
an SVG file.

If it is called without a file name argument, as `plot_setup()` or
`plot_setup(None)`, then the **Plot** context will still be initialized
but it will not have an SVG file available to plot. This approach be
helpful when using utility modes that do not plot the file (
[`cycle`](#cycle), [`align`](#align), [`toggle`](#toggle),
[`manual`](#manual), [`sysinfo`](#sysinfo), [`version`](#version)) since
no file need be provided. Execution of these utility modes may also be
*faster* (particularly versus large SVG inputs), since the input file
will not be parsed.

This function is only applicable for use with the **Plot** context.

## plot_run

> ::: codetitle
> plot_run()
> :::
>
> Example 1: Cycle the pen down then up, using \"cycle\" mode:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup()
ad.options.mode = "cycle"
ad.plot_run()
```
:::

> Example 2: Plot file.svg and capture the output as output_svg:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw 
ad = axidraw.AxiDraw()
ad.plot_setup("file.svg")
output_svg = ad.plot_run(True)
```
:::

*Perform the action that is configured within Plot context*

**Syntax: `plot_run(output=False)`**

This function performs the action (plotting or otherwise) as set by the
configuration variables that you have specified. Broadly speaking, this
is the function that \"runs the AxiDraw software\" when working in the
**Plot** context.

By default, no output is returned by this function. If you would like to
generate SVG output, call `plot_run(True)`, for example as:
`output_svg = ad.plot_run(True)`

The output that is returned is a normally an output string consisting of
the serialized contents of an SVG file. The output SVG contains the same
SVG drawing that it accepted as input, but may also have plot progress
saved in the file, or a rendered preview contained within it. You may
choose to save this output SVG as an SVG file. (In addition to this full
SVG output, the [`digest`](#digest) option also provides a way to return
a limited \"plot digest object\" instead.)

If the **Plot** context was initialized without an input SVG file (using
`plot_setup()` or `plot_setup(None)`), then the output returned will be
an \"empty\" SVG placeholder file.

If the [`digest`](#digest) option is enabled, any SVG returned will be
in the restricted \"Plob\" digest format. The `digest` option can also
disable plots and previews entirely.

This function is only applicable for use with the **Plot** context.

# Functions: Interactive

This is the Python function reference for the functions available within
the **Interactive** context. These functions do not apply in the
**Plot** context.

Each function will be described individually, after the list.

  Function          Description
  ----------------- -------------------------------------------
  `interactive()`   Initialize Interactive context.
  `connect()`       Open serial connection to AxiDraw.
  `disconnect()`    Close serial connection to AxiDraw.
  `update()`        Apply changes to options.
  `goto()`          Absolute move to (x,y) location.
  `moveto()`        Absolute pen-up move to (x,y) location.
  `lineto()`        Absolute pen-down move to (x,y) location.
  `go()`            Relative move of distance (Δx,Δy).
  `move()`          Relative pen-up move of (Δx,Δy).
  `line()`          Relative pen-down move of (Δx,Δy).
  `penup()`         Raise the pen.
  `pendown()`       Lower the pen.
  `draw_path()`     Draw a path defined by a coordinate list.
  `delay()`         Execute a hardware-timed delay.
  `block()`         Wait for all motion commands to complete.
  `current_pos()`   Query machine XY position.
  `turtle_pos()`    Query turtle XY position.
  `current_pen()`   Query if machine pen state is up.
  `turtle_pen()`    Query if turtle pen state is up.
  `usb_command()`   Low-level serial command.
  `usb_query()`     Low-level serial query.

## interactive

> ::: codetitle
> interactive()
> :::
>
> Example: Draw a single line in Interactive context, using absolute
> moves:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw   # import module
ad = axidraw.AxiDraw()          # Initialize class
ad.interactive()                # Enter interactive context
if not ad.connect():            # Open serial port to AxiDraw;
    quit()                      #   Exit, if no connection.
ad.moveto(1, 1)                 # Pen-up move to (1,1) inches
ad.lineto(2, 1)                 # Pen-down move, to (2,1) inches
ad.moveto(0, 0)                 # Pen-up move, back to origin
ad.disconnect()                 # Close serial port to AxiDraw
```
:::

*Initialize Interactive context*

**Syntax: `interactive()`**

The `interactive()` function configures the software into the
**Interactive** context. This function must be called before setting the
the values of any configuration option variables within **Interactive**
context.

This function is only applicable for use with the **Interactive**
context.

## connect

> ::: codetitle
> connect()
> :::
>
> Example 1: Draw a single line in Interactive context using relative
> moves, with a pen-down speed of 20%:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw  
ad = axidraw.AxiDraw()
ad.interactive()
ad.options.speed_pendown = 20
connected = ad.connect()
if not connected:
    quit()
ad.move(1, 1)
ad.line(1, 1)
ad.move(-2, -2)  # Pen-up move back to origin
ad.disconnect()
```
:::

> Example 2: The same, but using the \"connected\" variable to check for
> a connection:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw  
ad = axidraw.AxiDraw()
ad.interactive()
ad.options.speed_pendown = 20
ad.connect()
if not ad.connected:
    quit()
ad.move(1, 1)
ad.line(1, 1)
ad.move(-2, -2)  # Pen-up move back to origin
ad.disconnect()
```
:::

*Open serial connection to AxiDraw*

**Syntax: `connect()`**

The nature of an **Interactive** context session is that you directly
specify not only every individual movement, but also when the session
begins and ends. The `connect()` function a USB serial connection to the
AxiDraw. It also applies any option values that you have set after
calling [`interactive()`](#interactive). The port must be closed with
the [`disconnect()`](#disconnect) function at the end of your session.

Most functions in the interactive API, including all motion commands,
will raise an error if they are called before `connect()` or when there
is otherwise not an active connection to the AxiDraw hardware. The
`connect()` function returns either `True` or `False`, respectively, if
it successfully connected or did not. A variable, `connected`, is also
set to `True` upon a successful connection. Disconnecting via
[`disconnect()`](#disconnect) as well as certain errors in USB
communication will set `connected` to `False`. You can poll this
variable to check if the connection appears to be active.

In addition to opening the USB connection, `connect()` is also used to
process and apply any plot options that you wish to set. If you wish to
change one or more options *after* calling `connect()`, use the
[`update()`](#update) method to process the changes to the options
before calling additional motion commands.

In detail, `connect()` does the following:

- Parse and apply settings
- Try to open the USB connection to AxiDraw
- Return `False` if no connection is available.
- Raise the pen
- Enable the XY stepper motors (if not already enabled)
- Set the current XY position to (0, 0)
- Set the `connected` variable to `True`
- Return `True`

Options that specify the USB port or its behavior ([`port`](#port) or
[`port_config`](#port_config)) must be specified before (not after)
opening the port with `connect()`.

Verify that the connection was successful before using motion commands.

Use `disconnect()` to close the connection to the AxiDraw at the end of
your session.

This function can only be used within the **Interactive** context.

## disconnect

> ::: codetitle
> disconnect()
> :::
>
> Example: Open and close an interactive connection to AxiDraw:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw  
ad = axidraw.AxiDraw()
ad.interactive()
if not ad.connect():            # Open serial port to AxiDraw;
    quit()                      #   Exit, if no connection.
ad.disconnect()
```
:::

*Close serial connection to AxiDraw*

**Syntax: `disconnect()`**

The `disconnect()` function closes a serial connection to AxiDraw that
was opened with the [`connect()`](#connect) function. It also sets the
`connected` variable to `False`.

This function can only be used within the **Interactive** context.

## update

> ::: codetitle
> update()
> :::
>
> Example: Use update() to apply changes to options after connect():

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw   # import module
ad = axidraw.AxiDraw()          # Initialize class
ad.interactive()                # Enter interactive context
if not ad.connect():            # Open serial port to AxiDraw;
    quit()                      #   Exit, if no connection.
ad.moveto(1, 1)                 # Pen-up move to (1, 1) inch
ad.options.units = 1            # set working units to cm.
ad.options.speed_pendown = 10   # set pen-down speed to 10%
ad.update()                     # Process changes to options 
ad.move(5.08, 5.08)             # Relative move: (2, 2) inches
ad.moveto(0,0)                  # Pen-up move, back to origin.
ad.disconnect()                 # Close serial port to AxiDraw
```
:::

*Apply changes to options, within Interactive context*

**Syntax: `update()`**

Plot options may be specified at any point after the `interactive()`
call. Options given before [`connect()`](#connect) will be applied by
`connect()`.

If, however, you change one or more options after calling `connect()`,
you must use the `update()` method to process and apply those changes
before calling additional motion commands. Changing options and using
motion commands before calling `update()` may lead to undefined
behavior.

Note that options which select the USB port or a particular AxiDraw
([`port`](#port) or [`port_config`](#port_config)) must be specified
before opening the port with `connect()`; they cannot be adjusted once
the port is already open, even by `update()`.

This function can only be used within the **Interactive** context.

## goto

> ::: codetitle
> goto()
> :::
>
> Example: Draw a square using goto() for absolute position moves, in
> combination with penup() and pendown() commands in the Interactive
> context.

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw
ad = axidraw.AxiDraw()
ad.interactive()
ad.options.speed_pendown = 50   # set pen-down speed to 50%
if not ad.connect():            # Open serial port to AxiDraw;
    quit()                      #   Exit, if no connection.
ad.goto(1, 1)                   # Move to (1, 1) inch
ad.pendown()                    # Lower pen
ad.goto(3.5, 1)                 # Move to (3.5, 1) inch
ad.goto(3.5, 3.5)               # Move to (3.5, 3.5) inch
ad.goto(1, 3.5)                 # Move to (1, 3.5) inch
ad.goto(1, 1)                   # Move to (1, 1) inch
ad.penup()                      # Raise pen
ad.goto(0, 0)                   # Move to Home (0, 0)
ad.disconnect()                 # Close serial port
```
:::

*Absolute move to (x,y) location*

**Syntax: `goto(final_x, final_y)`**

The `goto(x,y)` command is an absolute move command, that moves the
carriage to the final XY position that you have specified. In
combination with setting options and using [`penup()`](#penup) and
[`pendown()`](#pendown), it is sufficient to provide essentially any
type of movement that is required.

The arguments to `goto()` are floating point numbers that represent the
movement destination position. The units are in inches, unless specified
otherwise with the [`units`](#units) option. In most cases both
arguments should be non-negative, since all allowed positions are in the
(positive,positive) quadrant with respect to the Home position.

The limits of travel are given by the hardware model, as specified with
the [`model`](#model) option. Limit checking assumes that the session
has been started with the AxiDraw carriage located at the Home position.

Relative movement commands can be used together with absolute movement
commands as needed.

This function can only be used within the **Interactive** context.

## moveto

> ::: codetitle
> moveto()
> :::
>
> Example: Draw a square using moveto() and lineto() absolute position
> movement commands in the Interactive context.

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw
ad = axidraw.AxiDraw()
ad.interactive()
ad.options.speed_pendown = 50   # set pen-down speed to 50%
if not ad.connect():            # Open serial port to AxiDraw;
    quit()                      #   Exit, if no connection.
ad.moveto(1, 1)                 # Move to (1, 1) inch
ad.lineto(3.5, 1)               # Move to (3.5, 1) inch
ad.lineto(3.5, 3.5)
ad.lineto(1, 3.5)
ad.lineto(1, 1)
ad.moveto(0, 0)                 # Raise pen, return home
ad.disconnect()                 # Close serial port
```
:::

*Absolute pen-up move to (x,y) location*

**Syntax: `moveto(final_x, final_y)`**

The `moveto(x,y)` command is an absolute move command, that performs a
pen-up movement of the carriage to the final XY position that you have
specified. In combination with setting options and using the
[`lineto()`](#lineto) function, it is sufficient to provide essentially
any type of movement that is required.

The function works by raising the pen (if it is not already raised) and
then performing a [`goto()`](#goto) movement to the given position.

The arguments to `moveto()` are floating point numbers that represent
the movement destination position. The units are in inches, unless
specified otherwise with the [`units`](#units) option. In most cases
both arguments should be non-negative, since all allowed positions are
in the (positive,positive) quadrant with respect to the Home position.

The limits of travel are given by the hardware model, as specified with
the [`model`](#model) option. Limit checking assumes that the session
has been started with the AxiDraw carriage located at the Home position.

This function can only be used within the **Interactive** context.

## lineto

> ::: codetitle
> lineto()
> :::
>
> Example: Draw a square using moveto() and lineto() absolute position
> movement commands in the Interactive context.

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw
ad = axidraw.AxiDraw()
ad.interactive()
if not ad.connect():            # Open serial port to AxiDraw;
    quit()                      #   Exit, if no connection.
ad.moveto(1, 1)                 # Move to (1, 1) inch
ad.lineto(3.5, 1)               # Move to (3.5, 1) inch
ad.lineto(3.5, 3.5)
ad.lineto(1, 3.5)
ad.lineto(1, 1)
ad.moveto(0, 0)                  # Raise pen, return home
ad.disconnect()                 # Close serial port
```
:::

*Absolute pen-down move to (x,y) location*

**Syntax: `lineto(final_x, final_y)`**

The `lineto(x,y)` command is an absolute move command, that performs a
pen-down movement of the carriage to the final XY position that you have
specified. In combination with setting options and using the
[`moveto()`](#moveto) function, it is sufficient to provide essentially
any type of movement that is required.

The function works by lowering the pen (if it is not already lowered)
and then performing a [`goto()`](#goto) movement to the given position.

The arguments to `lineto()` are floating point numbers that represent
the movement destination position. The units are in inches, unless
specified otherwise with the [`units`](#units) option. In most cases
both arguments should be non-negative, since all allowed positions are
in the (positive,positive) quadrant with respect to the Home position.

The limits of travel are given by the hardware model, as specified with
the [`model`](#model) option. Limit checking assumes that the session
has been started with the AxiDraw carriage located at the Home position.

This function can only be used within the **Interactive** context.

## go

> ::: codetitle
> go()
> :::
>
> Example: Draw a square using go() for relative position moves, in
> combination with penup() and pendown() commands in the Interactive
> context.

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw
ad = axidraw.AxiDraw()
ad.interactive()
ad.options.speed_pendown = 50   # set pen-down speed to 50%
if not ad.connect():            # Open serial port to AxiDraw;
    quit()                      #   Exit, if no connection.
ad.go(1, 1)                     # Move to (1, 1) inch
ad.pendown()                    # Lower pen
ad.go(2.5, 0)                   # Move to (3.5, 1) inch
ad.go(0, 2.5)                   # Move to (3.5, 3.5) inch
ad.go(-2.5, 0)                  # Move to (1, 3.5) inch
ad.go(0, -2.5)                  # Move to (1, 1) inch
ad.penup()                      # Raise pen
ad.go(-1, -1)                   # Move to Home position
ad.disconnect()                 # Close serial port
```
:::

*Relative move by (x,y) with respect to current location*

**Syntax: `go(delta_x, delta_y)`**

The `go(x,y)` command is a relative move command, that moves the
carriage by the distances that you have specified. In combination with
setting options and using [`penup()`](#penup) and
[`pendown()`](#pendown), it is sufficient to provide essentially any
type of movement that is required.

The arguments to `go()` are floating point numbers that represent the
movement distances. The units are in inches, unless specified otherwise
with the [`units`](#units) option.

The limits of travel are given by the hardware model, as specified with
the [`model`](#model) option. Limit checking assumes that the session
has been started with the AxiDraw carriage located at the Home position.

Relative movement commands can be used together with absolute movement
commands as needed.

This function can only be used within the **Interactive** context.

## move

> ::: codetitle
> move()
> :::
>
> Example: Draw a square using move() and line() relative position
> movement commands in the Interactive context.

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw
ad = axidraw.AxiDraw()
ad.interactive()
if not ad.connect():        # Open serial port to AxiDraw;
    quit()                  #   Exit, if no connection.
ad.move(1, 1)               # Move to (1, 1) inch
ad.line(2.5, 0)             # Lower pen, move to (3.5, 1) inch
ad.line(0, 2.5)             # Move to (3.5, 3.5) inch
ad.line(-2.5, 0)            # Move to (1, 3.5) inch
ad.line(0, -2.5)            # Move to (1, 1) inch
ad.move(-1, -1)             # Raise pen, return home
ad.disconnect()             # Close serial port
```
:::

*Relative pen-up move by (x,y) with respect to current location*

**Syntax: `move(delta_x, delta_y)`**

The `move(x,y)` command is a relative move command, that performs a
pen-up movement of the carriage by the distances that you have
specified. In combination with setting options and using the
[`line()`](#line) function, it is sufficient to provide essentially any
type of movement that is required.

The function works by raising the pen (if it is not already raised) and
then performing a [`go()`](#go) movement with the given distances

The arguments to `move()` are floating point numbers that represent the
movement distances. The units are in inches, unless specified otherwise
with the [`units`](#units) option.

The limits of travel are given by the hardware model, as specified with
the [`model`](#model) option. Limit checking assumes that the session
has been started with the AxiDraw carriage located at the Home position.

This function can only be used within the **Interactive** context.

## line

> ::: codetitle
> line()
> :::
>
> Example: Draw a square using move() and line() relative position
> movement commands in the Interactive context.

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw
ad = axidraw.AxiDraw()
ad.interactive()
if not ad.connect():        # Open serial port to AxiDraw;
    quit()                  #   Exit, if no connection.
ad.move(1, 1)               # Move to (1, 1) inch
ad.line(2.5, 0)             # Lower pen, move to (3.5, 1) inch
ad.line(0, 2.5)             # Move to (3.5, 3.5) inch
ad.line(-2.5, 0)            # Move to (1, 3.5) inch
ad.line(0, -2.5)            # Move to (1, 1) inch
ad.move(-1, -1)             # Raise pen, return home
ad.disconnect()             # Close serial port
```
:::

*Relative pen-down move by (x,y) with respect to current location*

**Syntax: `line(delta_x, delta_y)`**

The `line(x,y)` command is a relative move command, that performs a
pen-up movement of the carriage by the distances that you have
specified. In combination with setting options and using the
[`move()`](#move) function, it is sufficient to provide essentially any
type of movement that is required.

The function works by raising the pen (if it is not already raised) and
then performing a [`go()`](#go) movement with the given distances

The arguments to `line()` are floating point numbers that represent the
movement distances. The units are in inches, unless specified otherwise
with the [`units`](#units) option.

The limits of travel are given by the hardware model, as specified with
the [`model`](#model) option. Limit checking assumes that the session
has been started with the AxiDraw carriage located at the Home position.

This function can only be used within the **Interactive** context.

## penup

> ::: codetitle
> penup()
> :::
>
> Example: Draw a line using go() and goto() for movement, in
> combination with penup() and pendown() commands in the Interactive
> context.

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw
ad = axidraw.AxiDraw()
ad.interactive()
ad.options.pen_pos_down = 20    # Set some options
ad.options.pen_pos_up = 80
ad.options.pen_rate_raise = 90
ad.options.accel = 80

if not ad.connect():            # Open serial port to AxiDraw;
    quit()                      #   Exit, if no connection.
ad.goto(1, 1)                   # Move to (1, 1) inch
ad.pendown()                    # Lower pen
ad.go(2.5, 2.5)                 # Move by (2.5, 2.5) inch
ad.penup()                      # Raise pen
ad.goto(0, 0)                   # Move to Home position
ad.disconnect()                 # Close serial port
```
:::

*Raise the pen*

**Syntax: `penup()`**

The `penup()` command is a command to raise the pen while in Interactive
context. It is particularly useful in combination with the [`go()`](#go)
and [`goto()`](#goto) commands, which cause movements but do not raise
or lower the pen.

Note that, `penup()` will only raise the pen if it was in the down state
or an indeterminate state. It will not be raised if it was already in
the pen-up state.

This function can only be used within the **Interactive** context.

## pendown

> ::: codetitle
> pendown()
> :::
>
> Example: Draw some lines using mixed movement commands, in combination
> with penup() and pendown() commands in the Interactive context.

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw
ad = axidraw.AxiDraw()
ad.interactive()
if not ad.connect():       # Open serial port to AxiDraw;
    quit()                 #   Exit, if no connection.
ad.moveto(1, 1)            # Pen-up move to (1, 1) inch
ad.pendown()               # Lower pen
ad.go(2.5, -1)             # Move by (2.5, -1) inch
ad.penup()                 # Raise pen
ad.go(0, 3)                # Move by (0, 3) inch
ad.lineto(0, 0)            # Pen-down move to home corner
ad.penup()                 # Raise pen
ad.disconnect()            # Close serial port
```
:::

*Lower the pen*

**Syntax: `pendown()`**

The `pendown()` command is a command to lower the pen while in
Interactive context. It is particularly useful in combination with the
[`go()`](#go) and [`goto()`](#goto) commands, which cause movements but
do not raise or lower the pen.

By default, whenever the \"turtle\" (theoretical) XY position is outside
of the travel limits, (1) the physical XY position is clipped to remain
within those limits, and (2) the pen is kept lifted. Accordingly, if
`pendown()` is called while the pen is outside of travel limits, the
turtle pen (theoretical pen) will be lowered, but the pen will not
physically be lowered.

(So long as the turtle pen remains down, any turtle motion that brings
the turtle into bounds will cause the pen to be lowered at the position
where the turtle and physical pen enters the bounds.)

The theoretical and physical pen states can be read with the
[`current_pen`](#current_pen-turtle_pen) and
[`turtle_pen`](#current_pen-turtle_pen) functions.

Automatic pen lifts at the bounds of travel and the limitation against
physically lowering the pen while motion is clipped may be disabled by
setting `auto_clip_lift = False` in the config file or via
[`params`](#additional-parameters).

Note that `pendown()` will only lower the pen if it was in the up state
or an indeterminate state. It will not be lowered if it was already in
the pen-down state.

This function can only be used within the **Interactive** context.

## draw_path

> ::: codetitle
> draw_path()
> :::
>
> Example 1: Draw a square using draw_path(), with explicitly given
> vertices:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw
ad = axidraw.AxiDraw()
ad.interactive()
if not ad.connect():            # Open serial port to AxiDraw;
    quit()                      #   Exit, if no connection.
ad.moveto(1, 1)                 # Pen-up move to (1, 1) inch
ad.options.units = 1            # Switch to cm units
ad.update()                     # Process changes to options
# Make a list of points to draw a square, 1 cm on a side:
points = [[2, 2], [3, 2], [3, 3], [2, 3], [2, 2]]
ad.draw_path(points)            # Plot the path
ad.moveto(0, 0)                 # Return Home
ad.disconnect()                 # Close serial port
```
:::

> Example 2: Draw a sine wave, 100 mm wide, using draw_path():

::: highlight
``` {.highlight .python .tab-python}
import math
from pyaxidraw import axidraw
ad = axidraw.AxiDraw()
ad.interactive()
ad.options.units = 2        # Set mm units
if not ad.connect():        # Open serial port to AxiDraw;
    quit()                  #   Exit, if no connection.

# Make a list of points to draw a square, 1 cm on a side:
vertices = []
for vertex in range(1000):
    x_position = vertex/10
    y_position = 25 + 10 * math.sin(math.tau * vertex / 100)
    vertices.append([x_position, y_position])
ad.draw_path(vertices)      # Plot the path
ad.moveto(0, 0)             # Return Home
ad.disconnect()             # Close serial port
```
:::

*Draw a path from a list of vertices*

**Syntax: `draw_path(vertex_list)`**

The `draw_path()` command is a command to plot a continuous pen-down
shape within the Interactive context. It allows one to compose a
coordinate list within a python script and then have the AxiDraw draw
the resulting, potentially complex, path.

The argument vertex_list is a python list of (at least two) 2-element
lists, where each 2-element list `[x_position, y_position]` represents
an (x, y) coordinate pair. The units of the coordinates can be set with
the [`units`](#units) option.

When called, `draw_path()` executes the following actions:

- Clip the input path at the travel bounds
- Raise the pen
- Execute a pen-up move to the start of the path
- Lower the pen
- Move the pen along the defined path
- Raise the pen

If the input path exceeds the travel bounds, only the portion within
travel bounds will be drawn. If the path leaves the travel bounds and
re-enters, then multiple pen-down paths will be created from that, with
automatic pen-up moves between them. If the initial vertex is outside of
the travel bounds, the first pen-up move will be to the point where the
path enters the travel bounds. And, if the last coordinate is out of
bounds, the final [turtle position](#turtle_pos) will be that of the
last vertex in the input path, and different from the
[`current_pos`](#current_pos).

Please note that the `auto_clip_lift` parameter that can disable
automatic pen lits on individual XY motion commands is ignored by
`draw_path()`. `draw_path()` always clips paths and raises the pen at
the travel bounds.

The interactive_draw_path.py [example script](#example-scripts) contains
additional examples of using `draw_path()`.

This function can only be used within the **Interactive** context.

For more complex path drawing capabilities, consider using the plot
context with SVG files or inline-generated SVG.

## delay

> ::: codetitle
> delay()
> :::
>
> Example: Draw two line segments, separated by a 2.5 second interval:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw
ad = axidraw.AxiDraw()
ad.interactive()

if not ad.connect():            # Open serial port to AxiDraw;
    quit()                      #   Exit, if no connection.
ad.goto(1, 1)                   # Move to (1, 1) inch
ad.pendown()                    # Lower pen
ad.go(1, 1)                     # Move by (1, 1) inch
ad.delay(2500)                  # Wait 2.5 seconds
ad.go(1, 1)                     # Move by (1, 1) inch
ad.penup()                      # Raise pen
ad.goto(0, 0)                   # Move to Home position
ad.disconnect()                 # Close serial port
```
:::

*Execute a hardware-timed delay*

**Syntax: `delay(time_ms)`**

The `delay()` command is a command to execute a hardware-timed delay
while in Interactive context. It effectively calls for a movement
command that lasts `time_ms` milliseconds, but where the total movement
distance is zero.

The `delay()` command is different from (e.g.,) the `sleep` command in
Python in that the time delay is queued with other motion control
commands and executed by the AxiDraw\'s EBB control board. It can be
used to insert a delay between motion commands that would otherwise be
adjoining.

This function can only be used within the **Interactive** context.

## block

> ::: codetitle
> block()
> :::
>
> Example: Use block() to ensure that motion is complete before reading
> step position:

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw
ad = axidraw.AxiDraw()
ad.interactive()
if not ad.connect():            # Open serial port to AxiDraw;
    quit()                      #   Exit, if no connection.
ad.goto(1, 1)                   # Move to (1, 1) inch
ad.pendown()                    # Lower pen
ad.go(1, 1)                     # Move by (1, 1) inch
ad.delay(2500)                  # Wait 2.5 seconds
ad.block()                      # Wait until delay is complete
step_pos = ad.usb_query("QS\r") # Query step position
print("Step pos: " + step_pos)
ad.penup()                      # Raise pen
ad.goto(0, 0)                   # Move to Home position
ad.disconnect()                 # Close serial port
```
:::

*Wait for all motion commands to complete*

**Syntax: `block()`**

The `block` command polls the AxiDraw to determine if any motion
commands are currently executing or queued to execute. If so, it checks
again, every 50 ms, until all existing motion commands are completed,
and then returns.

Standard **Interactive** context motion commands are typically made of
relatively short motion segments that are automatically queued, and the
`block` command isn\'t necessary or helpful in most common use cases.
However, in certain circumstances, such as when using [low-level usb
commands](#usb_command-usb_query) or sequencing external equipment,
`block()` may be helpful to ensure that no motion commands are executing
at some point in the script.

This function can only be used within the **Interactive** context.

## current_pos

> ::: codetitle
> current_pos()
> :::
>
> Example: Move to two different positions, reporting turtle and
> physical position after each move. The first position (2,1) is in
> bounds, so the turtle and physical position agree. The second position
> (2,-1) is out of bounds. The new turtle position is (2,-1), but
> physical motion is clipped at (2,0) to remain within the bounds of
> motion.

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw
ad = axidraw.AxiDraw()
ad.interactive()
if not ad.connect():            # Open serial port to AxiDraw;
    quit()                      #   Exit, if no connection.
ad.moveto(2, 1)                 # Pen-up move to (2, 1) inch
xy = ad.turtle_pos()            # Query turtle position
print(f"Turtle XY position: {xy[0]:f}, {xy[1]:f}")
xy = ad.current_pos()           # Query current position
print(f"Physical XY position: {xy[0]:f}, {xy[1]:f}")

ad.moveto(2,-1)                 # Pen-up move to (2,-1) inch
xy = ad.turtle_pos()            # Query turtle position
print(f"Turtle XY position: {xy[0]:f}, {xy[1]:f}")
xy = ad.current_pos()           # Query current position
print(f"Physical XY position: {xy[0]:f}, {xy[1]:f}")

ad.disconnect()                 # Close serial port
```
:::

*Query the last-known machine position*

**Syntax: `current_pos()`**

The `current_pos()` function queries and reports the last known XY
machine position.

The function returns a 2-element tuple, giving the last-known (x,y)
machine position. Position values are given in the currently active
units, as set by the [`units`](#units) option. If you do not explicitly
set units, the function returns values in the default inch units.

Plotter travel is *clipped* to remain within the bounds of travel, and
the physical machine position will not agree with the \"turtle\"
position, if a movement outside of bounds is requested. See
[`turtle_pos`](#turtle_pos) to query the current turtle position.

For the physical up or down state of the pen, use the
[`current_pen`](#current_pen-turtle_pen) function.

This function can only be used within the **Interactive** context.

## turtle_pos

> ::: codetitle
> turtle_pos()
> :::
>
> Example: Move to two different positions, reporting turtle and
> physical position after each move. The first position (2,1) is in
> bounds, so the turtle and physical position agree. The second position
> (2,-1) is out of bounds. The new turtle position is (2,-1), but
> physical motion is clipped at (2,0) to remain within the bounds of
> motion.

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw
ad = axidraw.AxiDraw()
ad.interactive()
if not ad.connect():            # Open serial port to AxiDraw;
    quit()                      #   Exit, if no connection.
ad.moveto(2, 1)                 # Pen-up move to (2, 1) inch
xy = ad.turtle_pos()            # Query turtle position
print(f"Turtle XY position: {xy[0]:f}, {xy[1]:f}")
xy = ad.current_pos()           # Query current position
print(f"Physical XY position: {xy[0]:f}, {xy[1]:f}")

ad.moveto(2, -1)                # Pen-up move to (2, -1) inch
xy = ad.turtle_pos()            # Query turtle position
print(f"Turtle XY position: {xy[0]:f}, {xy[1]:f}")
xy = ad.current_pos()           # Query current position
print(f"Physical XY position: {xy[0]:f}, {xy[1]:f}")

ad.disconnect()                 # Close serial port
```
:::

*Query the last-known turtle XY position*

**Syntax: `turtle_pos()`**

The `turtle_pos()` function queries and reports the last known XY
\"turtle\" position. The turtle is a theoretical device that represents
the requested pen position. It is repositioned by the various
Interactive mode motion commands but not constrained or clipped by any
hardware travel limits.

The returned value is a 2-element tuple, giving the last-known (x,y)
turtle position. Position values are given in the currently active
units, as set by the [`units`](#units) option. If you do not explicitly
set units, the function returns values in the default inch units.

Plotter travel is *clipped* to remain within the bounds of travel, and
the physical machine position will not agree with the \"turtle\"
position, if a movement outside of bounds is requested. See
[`current_pos`](#current_pos) to query the current machine position.

For the theoretical up or down state of the pen, use the
[`turtle_pen`](#current_pen-turtle_pen) function.

This function can only be used within the **Interactive** context.

## current_pen, turtle_pen

> ::: codetitle
> current_pen(), turtle_pen()
> :::
>
> Example: Command four pen-down lines to be drawn, from (5, 5) to (5,
> 3), (5, 1), (5, 1), and (5, -3), reporting turtle and physical
> position and pen state after each move. The first two lines, to (5, 3)
> and (5, 1) are normal moves within travel limits. The third line is
> clipped at position (5, 0), and the physical pen pen is raised there.
> The fourth line is entirely out of bounds, and no movement is made.
> The turtle and physical positions (both XY and pen state) agree so
> long as the turtle is within bounds.

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw
ad = axidraw.AxiDraw()
ad.interactive()
ad.options.units = 1                # Set units to cm
if not ad.connect():                # Open serial port to AxiDraw;
    quit()                          #   Exit, if no connection.

ad.moveto(5, 5)                     # Pen-up absolute move to (5, 5) cm.

for _rep in range(0, 4):            # Repeat four times:
    ad.line(0, -2)                  # Pen-down move by -1 cm in Y

    xy = ad.turtle_pos()            # Query turtle position
    print(f"Turtle   XY position: {xy[0]:f}, {xy[1]:f}")
    xy = ad.current_pos()           # Query machine position
    print(f"Physical XY position: {xy[0]:f}, {xy[1]:f}")

    pen_up = ad.turtle_pen()        # Query turtle pen state
    print("Turtle   pen up: " + str(pen_up))
    pen_up = ad.current_pen()       # Query machine pen state
    print("Physical pen up: " + str(pen_up))

ad.moveto(0, 0)                     # return home
ad.disconnect()                     # Close serial port to AxiDraw
```
:::

*Query if physical pen state is up, Query if turtle pen state is up*

**Syntax: `current_pen()`**

**Syntax: `turtle_pen()`**

The `current_pen()` function queries and reports the physical pen state,
with `True` representing pen up and `False` representing pen down. The
`turtle_pen()` function queries and reports the theoretical or
\"turtle\" pen state, with `True` representing pen up and `False`
representing pen down.

In addition to general use, these functions may be particularly helpful
when motion exceeds the configured bounds of travel. Plotter travel is
*clipped* to remain within the bounds of travel. If travel outside of
those limits is commanded, then the physical machine position (including
pen state) will differ from the theoretical, or \"turtle\" position.
(See the description of [`turtle_pen`](#turtle_pen) for more about the
turtle.)

By default, whenever the turtle is outside of the travel bounds
(whenever the motion is clipped at its limits), the pen is physically
raised and kept up, even if the turtle is still configured in the
pen-down state.

Thus, it may be useful to query the actual pen state with
`current_pen()`, as well as the theoretical pen state with
`turtle_pen()`.

The physical pen will remain in the pen up state until the turtle is
brought back within bounds. If necessary, an automatic pen-up movement
will be added to move the pen to the place where the turtle begins its
next pen-down travel within bounds.

Automatic pen lifts at the bounds of travel may be overridden by setting
`auto_clip_lift = False` in the config file or via
[`params`](#additional-parameters).

These functions can only be used within the **Interactive** context.

## usb_command, usb_query

> ::: codetitle
> usb_command(), usb_query()
> :::
>
> Example: Enter interactive context, move using moveto(). Query and
> print internal hardware step position, and return home using the
> firmware HM command.

::: highlight
``` {.highlight .python .tab-python}
from pyaxidraw import axidraw
ad = axidraw.AxiDraw()
ad.interactive()
if not ad.connect():            # Open serial port to AxiDraw;
    quit()                      #   Exit, if no connection.
ad.moveto(2, 1)                 # Pen-up move to (2, 1) inch
step_pos = ad.usb_query("QS\r") # Query step position
print("Step pos: " + step_pos)
ad.usb_command("HM,3200\r")     # Return home at 3200 steps/s
ad.disconnect()                 # Close serial port
```
:::

*Issue a low-level command or query over USB*

**Syntax: `usb_command(command)`**

**Syntax: `usb_query(query)`**

The `usb_command()` function allows you to issue a direct command to the
AxiDraw\'s EBB driver board over USB while in Interactive context. The
matching `usb_query()` function can be used for various types of
queries.

While these two \"raw USB\" serial interface functions are powerful,
they also present certain hazards. They essentially bypass all syntax
and context checking, as well as the software counters, speed, position,
and limit checks that otherwise ensure safe and reliable operation.

To be perfectly clear: We recommend against using `usb_command` and
`usb_query` except in cases where you need access to features of the
command set that are not otherwise accessible through this API. When
using them, proceed with caution, since the potential exists for
behavior and/or damage of an unpredictable nature. You are welcome to
contact technical support for situation-specific advice.

The `command` or `query` argument is a string formatted in accordance
with the EBB serial command set, [documented
here](http://evil-mad.github.io/EggBot/ebb.html). Results returned by
`usb_query` are stripped of leading and trailing whitespace using the
python `.strip()` method.

Advanced feature; use with great care.

These functions can only be used within the **Interactive** context.

# API Changelog

Revision Notes: Summary of changes affecting API.

Please note that the changelog.txt file included with the download is
more comprehensive and includes details about older releases that are no
longer listed below.

**v 3.9.6 (2023-12)**

Maintenance release: Adds Python 3.12, drop 3.7. Python 3.8 - 3.12 are
now supported.

Archived release
[here](https://cdn.evilmadscientist.com/dl/ad/public/ad_api/AxiDraw_API_396.zip).

**v 3.9.4 (2023-09)**

Pen-lift servo motor initialization routines rewritten for more
consistent behavior. As part of this, the [`update()`](#update) function
now itself applies pen height changes. For example, if the pen-up height
[`pen_pos_up`](#pen_pos_up) changes, calling `update()` with the pen up
will immediately move to the new pen-up height, rather than at the next
[`penup()`](#penup) command.

Last version to support Python 3.7.

Archived release
[here](https://cdn.evilmadscientist.com/dl/ad/public/ad_api/AxiDraw_API_394.zip).

**v 3.9 (2023-05)**

New option in **Plot** context, [`hiding`](#hiding), enables new
hidden-line removal feature.

Added new [`res_read`](#res_read),
[`res_adj_in`](#res_adj_in-res_adj_mm) and
[`res_adj_mm`](#res_adj_in-res_adj_mm) manual commands, which allow one
to read and/or adjust the the position at which a paused plot will be
resumed. Added new variable `res_dist` to provide the numeric distance
from [`res_read`](#res_read).

Added new [`load_config`](#load_config) function to load settings from a
configuration file.

Added new [`block`](#block) function to wait for all motion commands to
complete.

The numeric time report values noted in the description of the
[`report_time`](#report_time) option are now always populated, even if
`report_time` is not enabled.

Archived release (3.9.3)
[here](https://cdn.evilmadscientist.com/dl/ad/public/ad_api/AxiDraw_API_393.zip).

**v 3.8 (2023-01)**

Added new [`penlift`](#penlift) option, to enable brushless servo
option.

Renamed the `walk_dist` option to [`dist`](#dist). The old name
`walk_dist` is deprecated (and temporarily still functional in python
scripts that use it).

New parameters in the axidraw_conf.py include file: `button_interval`
controlling interval of polling the physical pause button and 6 others
that support the new servo option.

Archived release
[here](https://cdn.evilmadscientist.com/dl/ad/public/ad_api/AxiDraw_API_381.zip).

**v 3.7.2 (2022-11-09)**

Add [four new variables](#error-handling) to configure which types of
error conditions raise a RuntimeError, and add a new variable
`errors.code` making it easier to detect error conditions when not
raising an error.

Plots run via the Python API can now be paused by a keyboard interrupt
if the `keyboard_pause` variable is enabled, as detailed in the new
[error handling](#error-handling) section.

The `fw_version_string` variable is now always populated by
[`plot_run()`](#plot_run) when connected to the AxiDraw.

Removed \"bezier_segmentation_tolerance\" and \"smoothness\" parameters
from configuration file; replaced with a single \"curve_tolerance\"
parameter.

Raise RuntimeError on failure to load SVG files.

Add support for Python 3.11. Python 3.7 - 3.11 are now supported.

3.7.2 Archive release
[here](https://cdn.evilmadscientist.com/dl/ad/public/ad_api/AxiDraw_API_372.zip).

**v 3.6 (2022-10-01)**

New function in interactive context, [`delay`](#delay), which adds a
hardware-timed delay.

Defaults for [`mode`](#mode), [`manual_cmd`](#manual_cmd), and
`walk_dist` can now be set inside the configuration file.

Archived release
[here](https://cdn.evilmadscientist.com/dl/ad/public/ad_api/AxiDraw_API_360.zip).

**v 3.5 (2022-08-10)**

New function in interactive context, [`draw_path`](#draw_path), draws a
vertex list.

Added new setup mode, [`cycle`](#cycle), to assist with setting pen
height.

Added two new [example scripts](#example-scripts), turtle_pos.py and
interactive_draw_path.py.

New parameter in the axidraw_conf.py configuration file: `servo_pin`
(accessible via [`params`](#additional-parameters)) for re-assigning the
pen-lift servo digital output to a different output pin.

Archived release
[here](https://cdn.evilmadscientist.com/dl/ad/public/ad_api/AxiDraw_API_350.zip).

**v 3.4 (2022-07-22)**

Added a new \"strict\" value to [`reordering`](#reordering) that
disables all optimizations including path joining. Changed description
(but **not** behavior) of the other values for clarity.

New parameters in the axidraw_conf.py configuration file:
`preview_color_up` and `preview_color_down`, (accessible via
[`params`](#additional-parameters)) allow one to set the colors used in
preview rendering.

Archived release
[here](https://cdn.evilmadscientist.com/dl/ad/public/ad_api/AxiDraw_API_341.zip)

**v 3.3 (2022-06-11)**

Expand [`model`](#model) option values with AxiDraw V3/B6.

Drop support for Python 3.6. Python 3.7 or newer is now required.

Archived release
[here](https://cdn.evilmadscientist.com/dl/ad/public/ad_api/AxiDraw_API_330.zip)

**v 3.2 (2022-02-24)**

Expand [`model`](#model) option values with AxiDraw SE/A1, SE/A2.

Improved model for time duration of raising/lowering pen-lift servo
motor; two adjustable parameters added to the configuration file.

New [`walk_home`](#walk_home) command added to the list of [manual
commands](#manual_cmd).

New `connected` variable available in Interactive context.

v 3.2.1 (bugfix) adds two new python example files.

3.2.1 archive release
[here](https://cdn.evilmadscientist.com/dl/ad/public/ad_api/AxiDraw_API_321.zip).

**v 3.1 (2022-01-05)**

New plot digest feature: The [`digest`](#digest) option can enable
saving an optimized \"Plob\", or plot digest object, rather than the
full SVG output

New Webhook notifications feature. Added [`webhook`](#webhook) and
[`webhook_url`](#webhook_url) options.

New parameter in the axidraw_conf.py configuration file: `report_lifts`
enables reporting the number of pen lifts in a plot. New `pen_lifts`
variable added to those available with [`report_time`](#report_time).

Archived release
[here](https://cdn.evilmadscientist.com/dl/ad/public/ad_api/AxiDraw_API_310r1.zip).

**v 3.0 (2021-10-12)**

Added new [`random_start`](#random_start) feature to randomize the start
position of closed paths.

Significant changes to plot optimization:

- Improved automatic path joining.
- New sub-path optimization: All sub-paths on a layer can now be
  re-ordered.
- New feature can optionally reverse paths during optimization.
- New option to randomize start position of closed paths
- Layer aware sorting (and other per-layer control) is by top-level
  layers only, not sublayers.

As part of this, changes to the [`reordering`](#reordering) option:

- The previous values were 0-3. 0: No reordering (Default), 1: Reorder
  but preserve groups, 2: Reorder within groups, and 3: Break apart
  groups.
- The new values are 0-3. 0: No reordering (Default), 1: Reorder
  objects, preserving path orientation, and 2: Reorder objects, allow
  path reversal.
- The value of 3 is deprecated and may be removed in future versions. It
  behaves identically to a value of 2.

Additional changes:

- Added upgrade instructions to the [installation
  instructions](#installation).
- The `ebb_version` manual command, previously deprecated, has been
  removed.

Archived release
[here](https://cdn.evilmadscientist.com/dl/ad/public/ad_api/AxiDraw_API_302r1.zip).

**v 2.7.5 (2021-08-11)**

Improved handling of Interactive-context movements beyond travel bounds.

By default, whenever the \"turtle\" (theoretical XY) position is outside
of the travel limits, (1) the physical XY position is clipped to remain
within those limits, and (2) the pen is in kept in the pen-up state.
While both have always been the case in in the Plot context, both are
now true in the Interactive context as well.

(Previously, Interactive context motion was clipped, but the pen state
was not automatically raised when the motion was clipped.)

As part of this change:

- Interactive-context pen-down moves that begin and/or end outside of
  the bounds are now linked by automatic pen-up moves, giving more
  consistent and predictable behavior.
- The [`pendown`](#pendown) function, by default, no longer lowers the
  pen when the turtle position is outside of the plotting bounds.
- New [`current_pen`](#current_pen-turtle_pen) and
  [`turtle_pen`](#current_pen-turtle_pen) query functions.
- New parameter in the axidraw_conf.py configuration file:
  `auto_clip_lift`, which can disable automatic pen lifts at plotting
  bounds and the new behavior of [`pendown`](#pendown).

Add support for Python 3.10; Python 3.6-3.10 are now supported.

Archived release
[here](https://cdn.evilmadscientist.com/dl/ad/public/ad_api/AxiDraw_API_275r2.zip).

**v 2.7.4 (2021-06-17)**

Drop support for Python 3.5. Python 3.6 or newer is now required.

Results returned by the [`usb_query`](#usb_command-usb_query) function
are now stripped of whitespace; previously, they were not.

Archived release
[here](https://cdn.evilmadscientist.com/dl/ad/public/ad_api/AxiDraw_API_274r1.zip).

# Copyright

Copyright 2023 Windell H. Oskay, Evil Mad Scientist Laboratories
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

::: dark-box
:::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
