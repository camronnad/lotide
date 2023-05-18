/*
Function: eqObjects

Goal: Compare two objects and determine if they are equal.
Return: Boolean value indicating the equality of the objects.
Parameters:
obj1: The first object to be compared.
obj2: The second object to be compared.
Explanation: This function performs the following steps:
It creates two arrays array1 and array2 by extracting the keys from obj1 and obj2, respectively.
If the lengths of array1 and array2 are different, it returns false.
It then iterates over each key in array1 and compares the corresponding values obj1[key] and obj2[key]. If any pair of values is not equal, it returns false.
If the loop completes without finding any unequal pairs, it returns true, indicating that the objects are equal. */

const eqObjects = (obj1, obj2) => {
  const array1 = Object.keys(obj1);
  const array2 = Object.keys(obj2);
  if (array1.length !== array2.length) {
    return false;
  }
  for (const key of array1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects
