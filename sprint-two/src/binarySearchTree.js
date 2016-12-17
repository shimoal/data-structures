var BinarySearchTree = function(value) {
  this.value = value;
  this.right = null;
  this.left = null;
};

BinarySearchTree.prototype.insert = function(value) {
  if (value < this.value) {
    if (this.left === null) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else if (value >= this.value) {
    if (this.right === null) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  var containsValue = false;
  if (this.value === value) {
    containsValue = true;
  }

  if (value < this.value && this.left) {
    return this.left.contains(value);
  } else if (value > this.value && this.right) {
    return this.right.contains(value);
  }

  return containsValue;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);

  if (this.right) {
    this.right.depthFirstLog(cb);
  }
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(log(n))
 contains: O(log(n))
 depthFirstLog: O(n)
 */
