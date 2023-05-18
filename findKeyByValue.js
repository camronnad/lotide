/* Function: findKeyByValue

Goal: Find the key in an object based on a given value.
Return: The found key or undefined if no key is found.
Parameters:
obj: The object to search for keys.
value: The value to find the corresponding key for.
Explanation: This function iterates over each key in the obj object. For each key, it compares the corresponding value obj[key] with the given value. If a match is found, the key is returned. If no match is found, the function returns undefined. */

const findKeyByValue = (obj, value) => {
  for (const key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue