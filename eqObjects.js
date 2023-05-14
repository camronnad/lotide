const eqObjects = (obj1, obj2) => {
  const array1 = Object.keys(obj1);
  const array2 = Object.keys(obj2);
  if (array1.length !== array2.length) {
    return false;
  }
  for (const key of array1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects
