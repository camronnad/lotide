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

const letterPosistions = function (sentence) {
  const result = {}
  let i = 0
  for (const letter of sentence) {

    if (result[letter]) {
      result[letter].push(i)
    } else {
      result[letter] = [i]
    }
i++;
  }

  return result;
}

const result = letterPosistions('hello')
console.log(result)
assertArraysEqual(result.h, [0]);
assertArraysEqual(result.e, [1]);
assertArraysEqual(result.l, [2, 3]);
assertArraysEqual(result.o, [4]);








