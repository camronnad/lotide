/* Function: takeUntil

Goal: Retrieve elements from an array until a specified condition (callback) is true.
Return: A new array containing elements from the original array until the condition is met.
Parameters:
array: The array from which to retrieve elements until the condition is met.
callback: The callback function used to determine the condition.
Explanation: This function iterates over the elements in the array and checks each element against the condition specified by the callback function. It stores the elements in a new array results until the condition is met. Once the condition is met, it immediately returns the results array. */

const takeUntil = function (array, callback) {
  const results = []
  for (const item of array) {
    const isTrue = callback(item)
    if (isTrue) {
      return results;
    } else {
      results.push(item)
    }
    
  }
}

module.exports = takeUntil
