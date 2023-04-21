const assertEqual = function(actual, expected) {
  //compare the two arguments
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);

  }
};


assertEqual("Bootcamp", "Bootcamp");
assertEqual(4, 4);