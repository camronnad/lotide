/* Function: tail

Goal: Retrieve all elements of an array except for the first element.
Return: A new array containing all elements except the first element.
Parameters:
array: The array from which to retrieve the tail (all elements except the first).
Explanation: This function uses the slice method to create a new array that contains all elements of the input array starting from index 1 (excluding the first element). It then returns this new array, which represents the tail of the original array. */

const tail = function(array) {
  return array.slice(1);
};

module.exports = tail