const takeUntil = function (array, callback) {
  const results = []
  for (const item of array) {
    const isTrue = callback(item)
    if (isTrue) {
      return results;
    } else {
      results.push(item)
    }
    
  }
}

module.exports = takeUntil
