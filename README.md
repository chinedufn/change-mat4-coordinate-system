change-mat4-coordinate-system [![npm version](https://badge.fury.io/js/change-mat4-coordinate-system.svg)](http://badge.fury.io/js/change-mat4-coordinate-system) [![Build Status](https://travis-ci.org/chinedufn/change-mat4-coordinate-system.svg?branch=master)](https://travis-ci.org/chinedufn/change-mat4-coordinate-system)
===============

> Convert a 4x4 column major matrix from left handed to right handed coordinate system

## Background / Initial Motivation

Blender exports bone matrices in using a handed coordinate system, but WebGL uses a left handed coordinate system.

I used to know change coordinate systems by changing my final `gl_Position`'s coordinates, but I now need to manipulate
coordinates before I get to my vertex shader (to find the location and rotation of a bone so that I can render something
on top of it).
This module helps me with converting everything to left handed during compile time, so that I don't need to do any
coordinate system conversion during runtime.

## To Install

```sh
$ npm install --save change-mat4-coordinate-system
```

## Usage

```js
var changeMat4Coords = require('change-mat4-coordinate-system')

// Don't worry, both rotations and translations will be converted.
// It's just easier to demonstrate translations here.
var rightHandedMatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 5, 1, 1]

var leftHandedMatrix = changeMat4Coords.rightToLeft(rightHandedMatrix)

console.log(leftHandedMatrix)
// [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, -5, 1]
```

## License

MIT
