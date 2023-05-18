/* Function: middle

Goal: Retrieve the middle element(s) from an array.
Return: An array containing the middle element(s) of the input array.
Parameters:
array: The array from which to retrieve the middle element(s).
Explanation: This function returns the middle element(s) of the input array. If the array length is less than or equal to 2, it returns an empty array. If the array length is odd, it returns an array with the single middle element. If the array length is even, it returns an array with the two middle elements. */

const middle = function (array) { 
  if (array.length <= 2) { 
    return [];
}  
const middleIndex = Math.floor(array.length/2)
  if (array.length % 2 === 0) {
    return [array[middleIndex -1], array[middleIndex]];
  
  }  
else { 
return [array[middleIndex]]
}
  
}

module.exports = middle