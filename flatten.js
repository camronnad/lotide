/* Function: flatten

Goal: Flatten a nested array into a single-level array.
Return: The flattened array.
Parameters:
originalArray: The original array to be flattened.
Explanation: This function initializes an empty array flattenedArray to store the flattened elements. It iterates over each element in the originalArray using a for loop. If the current element is an array (Array.isArray(originalArray[i])), it iterates over each element of the nested array and pushes them into flattenedArray. If the current element is not an array, it is directly pushed into flattenedArray. Finally, the function returns the flattenedArray, which is the resulting flattened array. */

const flatten = function (originalArray) {
  const flattenedArray = [];
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
