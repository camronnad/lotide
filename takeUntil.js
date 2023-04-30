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

};

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
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0 );

console.log(results1);
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ])
assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ])