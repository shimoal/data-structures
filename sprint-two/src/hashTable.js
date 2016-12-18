var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];

  bucket.push([k, v]);
  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);
  var value;
  _.each(bucket, function(tuple) {
    if (tuple[0] === k) {
      value = tuple[1];
    }
  });
  return value;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  _.each(bucket, function(tuple, i) {
    if (tuple[0] === k) {
      bucket.splice(i, 1);
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?

 HashTable.insert: O(n)
 HashTable.retrieve: O(n)
 HashTable.remove: O(n)
  
 */


