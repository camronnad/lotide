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

module.exports = countLetters