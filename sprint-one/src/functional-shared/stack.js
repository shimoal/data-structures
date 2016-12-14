var Stack = function() {
  var storage = {};
  storage.sizeOfStack = 0;
  _.extend(storage, stackMethods);
  return storage;
};

var stackMethods = {
  push: function(value) {
    this.sizeOfStack++;
    this[this.sizeOfStack] = value;
  },
  pop: function() {
    if (this.sizeOfStack > 0) {
      var popped = this[this.sizeOfStack];
      delete this[this.sizeOfStack];
      this.sizeOfStack--;
      return popped;
    }
  },
  size: function() {
    return this.sizeOfStack;
  }
};


