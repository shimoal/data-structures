var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var sizeOfStack = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    sizeOfStack++;
    storage[sizeOfStack] = value;
  };

  someInstance.pop = function() {
    if (sizeOfStack > 0) {
      var popped = storage[sizeOfStack];
      delete storage[sizeOfStack];
      sizeOfStack--;
      return popped;
    }
  };

  someInstance.size = function() {
    return sizeOfStack;
  };

  return someInstance;
};
