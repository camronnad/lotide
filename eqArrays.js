const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);

  }
};
/**
 ==> Make a function "eqArrays" which takes in two arrays and returns true or false, based on a perfect match!

 Step 1: Turn the arrays in to strings so they can compared(maybe using .join?)
 Step 2: Use if statement comparing those two strings.
 Step 3: Return statement!
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


assertEqual(eqArrays([1, 2, 3], [3, 2, 2]), false); // => should PASS

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);