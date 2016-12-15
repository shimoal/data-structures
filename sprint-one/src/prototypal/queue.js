var Queue = function() {
  var storage = Object.create(queueMethods);
  storage.sizeOfQueue = 0;
  storage.highestIndex = 0;
  storage.lowestIndex = 0;

  return storage;
};

var queueMethods = {
  enqueue: function(value) {
    this.sizeOfQueue++;
    this[this.highestIndex] = value;
    this.highestIndex++;
  },
  dequeue: function() {
    if (this.sizeOfQueue > 0) {
      this.sizeOfQueue--;
      var dequeued = this[this.lowestIndex];
      delete this[this.lowestIndex];
      this.lowestIndex++;
      return dequeued;
    }
  },
  size: function() {
    return this.sizeOfQueue;
  }
};


