/* 
Function: countOnly

Goal: Count the occurrences of specific items in an array and return the counts in an object.
Return: An object containing the counts of specific items.
Parameters:
allItems: An array of all items to be searched.
itemsToCount: An object specifying the items to be counted.
Explanation: This function iterates over each name in the allItems array. If itemsToCount[name] is true, it increments the count of name in the namesObject object. If name doesn't exist in namesObject, it adds it as a property and initializes its count to 1. Finally, it returns the namesObject object with the counts of specific items.

*/

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
};

module.exports = countOnly