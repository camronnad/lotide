/* Function: assertEqual

Goal: Compare two values and output an assertion message indicating their equality.
Return: None.
Parameters:
actual: The actual value to be compared.
expected: The expected value to be compared.
Explanation: This function compares actual and expected values using strict equality (===). If the values are equal, it logs an assertion message with a passed status. Otherwise, it logs an assertion message with a failed status.
*/

const assertEqual = function(actual, expected) {
 
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);

  }
};


module.exports = assertEqual