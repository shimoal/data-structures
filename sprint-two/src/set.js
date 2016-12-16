var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; 
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.contains(item)) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  var contains = false;
  _.each(this._storage, function(value) {
    if (value === item) {
      contains = true;
    }
  });
  return contains;
};

setPrototype.remove = function(item) {
  var idx;
  _.each(this._storage, function(value, i) {
    if (item === value) {
      idx = i;
    }
  });
  this._storage.splice(idx, 1);
};

/*
 * Complexity: What is the time complexity of the above functions?
 add: O(n)
 contains: O(n)
 remove: O(n)
 */
