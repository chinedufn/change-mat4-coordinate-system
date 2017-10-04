var quatFromMat3 = require('gl-quat/fromMat3')
var mat3FromMat4 = require('gl-mat3/from-mat4')
var mat4FromRotTrans = require('gl-mat4/fromRotationTranslation')

module.exports = {
  rightToLeft: rightToLeft
}

/**
 * Change a matrix's coordinate system from right handed to left
 *
 * Right handed is Z up, left handed is Y up
 */
function rightToLeft (matrix4) {
  // Swap the translation from right to left
  var swap = matrix4[14]
  matrix4[14] = -matrix4[13]
  matrix4[13] = swap

  // Swap the rotation from right to left
  // by first converting it into a quaternion
  var rotation = mat3FromMat4([], matrix4)
  var rotationQuat = quatFromMat3([], rotation)

  swap = rotationQuat[2]
  rotationQuat[2] = -rotationQuat[1]
  rotationQuat[1] = swap

  return mat4FromRotTrans([], rotationQuat, [
    matrix4[12],
    matrix4[13],
    matrix4[14]
  ])
}
