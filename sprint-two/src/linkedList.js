var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.tail === null) {
      list.tail = Node(value);
      if (list.head === null) {
        list.head = list.tail;
      }
    } else {
      list.tail.next = Node(value);
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function() {
    var removedVal = list.head.value;
    if (list.head.next === null) {
      list.head = null;
      list.tail = null;
    } else {
      list.head = list.head.next;
    }
    return removedVal;
  };

  list.contains = function(target) {

    var node = list.head;

    while (node) {
      if (node.value === target) {
        return true;
      }
      node = node.next;
    }

    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addToTail = O(1)
 removeHead = O(1)
 contains = O(n)
 */
