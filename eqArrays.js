/*
Function: eqArrays

Goal: Compare two arrays and determine if they are equal.
Return: Boolean value indicating the equality of the arrays.
Parameters:
array1: The first array to be compared.
array2: The second array to be compared.
Explanation: This function checks for the following conditions:
If either array1 or array2 is falsy, or their lengths are different, it returns false.
It then iterates over each index in array1 and compares the elements at the corresponding index in array1 and array2. If any pair of elements is not equal, it returns false.
If the loop completes without finding any unequal pairs, it returns true, indicating that the arrays are equal.
*/

const eqArrays = function(array1, array2) {

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

module.exports = eqArrays