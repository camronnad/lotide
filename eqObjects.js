const assertEqual = function (actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);

  }
};

//Implement the definition for function eqObjects which will take in two objects and returns true or false, based on a perfect match.

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


const shirtObject = { color: "red", size: "large" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), true);