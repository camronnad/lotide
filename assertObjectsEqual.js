const eqObjects = (obj1, obj2) => {
  const array1 = Object.keys(obj1);
  const array2 = Object.keys(obj2);
  if (array1.length !== array2.length) {
    return false;
  }
  for (const key of array1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`) 

  }
}
const object1 = {a: 1, b: 2}
const object2 = {a: 1, b: 2}
assertObjectsEqual(object1,object2)