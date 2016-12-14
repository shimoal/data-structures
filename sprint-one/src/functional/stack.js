var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var sizeOfStack = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    sizeOfStack++;
  };

  someInstance.pop = function() {
    sizeOfStack--;
  };

  someInstance.size = function() {
    return sizeOfStack;
  };

  return someInstance;
};
