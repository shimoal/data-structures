var Stack = function() {
  this.sizeOfStack = 0;
};

Stack.prototype = {
  push: function(value) {
    this.sizeOfStack++;
    this[this.sizeOfStack] = value;
  },
  pop: function() {
    var popped = this[this.sizeOfStack];
    delete this[this.sizeOfStack];
    if (this.sizeOfStack > 0) {
      this.sizeOfStack--;
    }
    return popped;
  },
  size: function() {
    return this.sizeOfStack;
  }
};

Stack.prototype.constructor = Stack;
