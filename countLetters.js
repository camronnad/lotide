const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`🍏🍏Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🍎🍎Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (sentence) {
  const results = {};
  for (const char of sentence) {
   if(char !== " ") {
    if (!results[char]) {
      results[char] = 1;
    } else {
    results[char]++;
    }
   } else {
    
   }

  }
  return results;
}
 const counts = countLetters("lighthouse in the house")
console.log("final counts", counts);