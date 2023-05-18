/* The function assertArraysEqual is used to compare two arrays and assert whether they are equal or not. Here's an explanation of its goal, return value, and parameters:

Goal:
The goal of the assertArraysEqual function is to compare two arrays and provide a message indicating whether they are equal or not.

Return:
This function does not have a return value. It outputs the comparison result as a console log message.

Parameters:

array1: The first array to be compared.
array2: The second array to be compared.
*/

const {eqArrays} = require('./index');

const assertArraysEqual = function (array1, array2) {

  if (eqArrays(array1, array2)) {
    console.log(`✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌ Assertion Failed: ${array1} !== ${array2}`);


  }

};

module.exports = assertArraysEqual