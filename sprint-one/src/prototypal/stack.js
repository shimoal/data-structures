var Stack = function() {
  var storage = Object.create(stackMethods);
  storage.sizeOfStack = 0;

  return storage;
};

var stackMethods = {
  size: function() {
    return this.sizeOfStack;
  },
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
  }
};


