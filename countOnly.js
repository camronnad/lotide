const countOnly = function (allItems, itemsToCount) {
  const namesObject = {}
  for (const name of allItems) {

    if (itemsToCount[name] === true) {
      if (namesObject[name]) {
      namesObject[name]++
      } else {
        namesObject[name] = 1
      }
      
    }
  }
  return namesObject;
}

module.exports = countOnly