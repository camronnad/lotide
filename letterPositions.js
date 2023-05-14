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

module.exports = letterPosistions


