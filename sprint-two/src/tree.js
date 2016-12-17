var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; 
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target, node) {
  node = node || this;
  if (node.value === target) {
    return true;
  } 
  if (node.children.length > 0) {
    var result = false;
    _.each(node.children, function(child) {
      if (treeMethods.contains(target, child)) {
        result = true;
      }
    });

  } 

  return result;

};



/*
 * Complexity: What is the time complexity of the above functions?
addChild: O(1) 
contains: O(n)
 */
