const flatten = function (originalArray) {
  let flattenedArray = []
  for (let i = 0; i < originalArray.length; i++) {
    if (Array.isArray(originalArray[i])) {
      for (let j = 0; j < originalArray[i].length; j++) {
        flattenedArray.push(originalArray[i][j])
      }

    } else {
      flattenedArray.push(originalArray[i])
    }
  }
  return flattenedArray;


};

module.exports = flatten
