/* 
Function: findKey

Goal: Find the key in an object based on a given callback function.
Return: The found key or undefined if no key is found.
Parameters:
object: The object to search for keys.
callback: The callback function used to determine if a key is found.
Explanation: This function retrieves an array of keys from the object and iterates over them. For each key, it invokes the callback function with the corresponding value. If the callback function returns a truthy value, the key is returned. If no key satisfies the callback function, undefined is returned. */

const findKey = (object, callback) => {

  const keys = Object.keys(object);

  for (const item of keys) {
    if (callback(object[item])) {
      return item;
    }
  }
  return undefined;
};

module.exports = findKey