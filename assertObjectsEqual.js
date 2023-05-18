/* Function: assertObjectsEqual

Goal: Compare two objects and output an assertion message indicating their equality.
Return: None.
Parameters:
actual: The actual object to be compared.
expected: The expected object to be compared.
Explanation: This function uses the eqObjects function to compare the equality of actual and expected objects. It also utilizes the inspect function from the 'util' module to convert the objects into a human-readable string representation. If the objects are equal, it logs an assertion message with a passed status. Otherwise, it logs an assertion message with a failed status.

*/

const {eqObjects} = require('./index');

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`) 

  }
};

module.exports = assertObjectsEqual