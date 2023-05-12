const tail = function(array) {
  if (array === []) {
    return undefined;
  }
  return array.slice(1);
};

module.exports = tail