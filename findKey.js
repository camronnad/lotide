const findKey = (object, callback) => {

  const keys = Object.keys(object)

  for (const item of keys) {
    if (callback(object[item])) {
      return item;
    }
  }
  return undefined;
}
module.exports = findKey