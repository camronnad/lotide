const eqArrays = function (array1, array2) {

  if (!array1 || !array2 || array1.length !== array2.length) {
    return false;
  }

  for (const index in array1) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }

  return true;

};
const assertArraysEqual = function (array1, array2) {

  if (eqArrays(array1, array2)) {
    console.log(`✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌ Assertion Failed: ${array1} !== ${array2}`);


  }

}

/*

Create a function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.

INPUT: an array with nested arrays
OUTPUT: a connected version in one array

*/
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




console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]
