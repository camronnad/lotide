const eqArrays = function(array1, array2) {

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
const assertArraysEqual = function(array1, array2) {

  if (eqArrays(array1, array2)) {
    console.log(`✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌ Assertion Failed: ${array1} !== ${array2}`);


  }

};

const map = (array, callback) => {
  const results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};


const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, function(word) { 
  return word[0]
});
console.log(results1);

assertArraysEqual(results1, [ "g", "c", "t", "m", "t"])
