var test = require('tape')
var glMat4 = require('gl-mat4')
var glVec3 = require('gl-vec3')

var changeMat4CoordSystem = require('./change-mat4-coordinate-system.js')

test('Translations', function (t) {
  var rightHandedMatrix = glMat4.create()
  glMat4.translate(rightHandedMatrix, rightHandedMatrix, [0, 5, 1])

  var leftHandedMatrix = changeMat4CoordSystem.rightToLeft(rightHandedMatrix)
  var leftHandedVertex = glVec3.transformMat4([], [0, 0, 0], leftHandedMatrix)

  t.deepEqual(leftHandedVertex, [0, 1, -5], 'Changed from right to left handed coordinates')
  t.end()
})
