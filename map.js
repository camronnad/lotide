/* Function: map

Goal: Apply a callback function to each element of an array and return a new array with the results.
Return: A new array with the results of applying the callback function.
Parameters:
array: The array to be mapped.
callback: The callback function to be applied to each element.
Explanation: This function iterates over each item in the array and applies the callback function to it. The results of applying the callback function to each element are stored in a new array called results, which is then returned. */


const map = (array, callback) => {
  const results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map