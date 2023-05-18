/* 

Function: countLetters

Goal: Count the occurrences of each letter in a given sentence and return the counts in an object.
Return: An object containing the counts of each letter.
Parameters:
sentence: The sentence to be processed.
Explanation: This function initializes an empty object results to store the letter counts. It iterates over each character char in the sentence. If char is not a space, it checks if char exists as a property in results. If it doesn't, it adds char as a property to results and initializes its count to 1. If char already exists in results, its count is incremented by 1. If char is a space, it is ignored. Finally, the function returns the results object containing the counts of each letter.

*/



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
};

module.exports = countLetters