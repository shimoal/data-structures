var Queue = function() {
  this.sizeOfQueue = 0;
  this.highestIndex = 0;
  this.lowestIndex = 0;
};

Queue.prototype.size = function() {
  return this.sizeOfQueue;
};

Queue.prototype.enqueue = function(value) {
  this.sizeOfQueue++;
  this[this.highestIndex] = value;
  this.highestIndex++;
};

Queue.prototype.dequeue = function() {
  if (this.sizeOfQueue > 0) {
    this.sizeOfQueue--;
    var dequeued = this[this.lowestIndex];
    delete this[this.lowestIndex];
    this.lowestIndex++;
    return dequeued;
  }
};

//Queue.prototype.constructor = Queue;
