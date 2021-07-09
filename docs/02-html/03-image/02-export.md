---
title: Exporting rules
---

We need to think about the loading speed, and the image's quality. so, we need to think what format is the best for each image.


## Format features

**JPEG**(.jpg)

* JPEG format is using a lossy compression method, and not support transparency color.
* If the image has a lot of colors, JPG compression makes it smaller than PNG compression, so you should choose JPG format.
* You should export JPG images with quality **80% (0.8)**, unless you have special reason.

**PNG**(.png)

* PNG format is using lossless compression method, and support transparency color.
* Recently, PNG format supported animation also (APNG), but several browsers are not supporting APNG format yet.
* You should choose PNG format when you need translucent expression.

**GIF**(.gif)

* GIF format is also using lossless compression method.
* GIF format is able to include only transparent color, not translucent color.
* We won't use GIF format basically, but if you need GIF animation you can choose this.
  * *If IE11 is finished supporting, we can use APNG format so we won't use this format any cases*

**SVG**(.svg)

* SVG format is vector-based graphics unlike other format, so SVG format does NOT lose any quality if they are zoomed or resized
* SVG has gradation functions but it's not supported on some of browser yet
* When SVG file has complex paths data,
* When SVG file has complex paths data, there is a possibility to effect to browser performance
* You should use SVG format for the graphics made by combination of simple paths (e.g. Logo, Icon)

**Webp**(.webp)

* Now we're thinking that we need to support or not