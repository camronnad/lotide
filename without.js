/*
Function: without

Goal: Create a new array by removing specified items from a source array.
Return: A new array with items removed.
Parameters:
source: The source array from which to remove items.
itemsToRemove: An array containing the items to be removed from the source array.
Explanation: This function iterates over each element in the source array and checks if it is not included in the itemsToRemove array. If it is not included, the element is added to the result array. Finally, it returns the result array, which contains the elements from the source array with the specified items removed. */

const without = function (source, itemsToRemove) {
  const result = []
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      result.push(source[i]);
     
    
    }
  }
  return result;
};

module.exports = without