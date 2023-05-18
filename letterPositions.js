/* Function: letterPosistions

Goal: Find the positions of letters in a given sentence.
Return: An object containing the positions of letters.
Parameters:
sentence: The sentence to analyze and find the positions of letters.
Explanation: This function iterates over each letter in the sentence and keeps track of their positions. It stores the positions in an object result, where each letter is a property key, and its corresponding value is an array of positions. Finally, it returns the result object containing the positions of letters. */

const letterPosistions = function (sentence) {
  const result = {}
  const i = 0;
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

module.exports = letterPosistions


