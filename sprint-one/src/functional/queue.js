var Queue = function() {
  var someInstance = {};

  var storage = {};
  var sizeOfQueue = 0;
  var highestIndex = 0;
  var lowestIndex = 0;

  someInstance.enqueue = function(value) {
    sizeOfQueue++;
    storage[highestIndex] = value;
    highestIndex++;
  };

  someInstance.dequeue = function() {
    if (sizeOfQueue > 0) {
      sizeOfQueue--;
    }
    var dequeued = storage[lowestIndex];
    delete storage[lowestIndex];
    lowestIndex++;
    return dequeued;
  };

  someInstance.size = function() {
    return sizeOfQueue;
  };

  return someInstance;
};
