const eqArrays = function (array1, array2) {

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
const assertArraysEqual = function (array1, array2) {

  if (eqArrays(array1, array2)) {
    console.log(`✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌ Assertion Failed: ${array1} !== ${array2}`);


  }

}

/* Implement middle which will take in an array and return the middle-most element(s) of the given array.
Idea one:
count the number of items in the list than divide by 2, the rounded up and rounded down version of the number, if the number is even than then just divide by 2

Idea 2:
Subtract out the the begining and end parts of the list, and use a while statement to stop the subtracting when the loop gets to the middle of the list. An idea of a while statement that can be used is,


INPUT: 
OUTPUT:


*/

const middle = function (array) { 
  if (array.length <= 2) { 
    return [];
}  
let middleIndex = Math.floor(array.length/2)
  if (array.length % 2 === 0) {
    return [array[middleIndex -1], array[middleIndex]];
  
  }  
else { 
return [array[middleIndex]]
}
  
}


console.log(middle([1, 2, 3]))
console.log(middle([1, 2, 3, 4]))