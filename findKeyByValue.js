const assertEqual = function (actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);

  }
};


//Implement the function findKeyByValue which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.

const findKeyByValue = (obj, value) => {
  for (const key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }
  return undefined;
};

const bestTVShowsByGenre = {
  drama: "The Wire",
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

