//Graph using an adjacency matrix:
var Graph = function() {
  this.vertices = [];
  this.edges = [];
  this.newArr = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  _.each(this.edges, function(edge) {
    edge.push(0);
  });
  this.vertices.push(node);
  this.newArr.push(0);
  this.edges.push(this.newArr);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var containsValue = false;
  _.each(this.vertices, function(vertex) {
    if (vertex === node) {
      containsValue = true;
    }
  });
  return containsValue;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var idx;
  _.each(this.vertices, function(vertex, i) {
    if (vertex === node) {
      idx = i;
    }
  });

  this.vertices.splice(idx, 1);
  this.newArr.pop();
  this.edges.splice(idx, 1);

  _.each(this.edges, function(edge) {
    edge.splice(idx, 1);
  });
  
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var fromIdx, toIdx;

  _.each(this.vertices, function(vertex, i) {
    if (fromNode === vertex) {
      fromIdx = i;
    }
    if (toNode === vertex) {
      toIdx = i;
    }
  });

  return this.edges[fromIdx][toIdx] === 1 ? true : false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var fromIdx, toIdx;

  _.each(this.vertices, function(vertex, i) {
    if (vertex === fromNode) {
      fromIdx = i;
    }
    if (vertex === toNode) {
      toIdx = i;
    }
  });
  
  this.edges[toIdx][fromIdx] = 1;
  this.edges[fromIdx][toIdx] = 1;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var fromIdx, toIdx;

  _.each(this.vertices, function(vertex, i) {
    if (vertex === fromNode) {
      fromIdx = i;
    }
    if (vertex === toNode) {
      toIdx = i;
    }
  });
  
  this.edges[toIdx][fromIdx] = 0;
  this.edges[fromIdx][toIdx] = 0;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {

  _.each(this.vertices, function(vertex) {
    cb(vertex);
  });

};

// /*
//  * Complexity: What is the time complexity of the above functions?
// addNode: O(n)
// contains: O(n)
// removeNode: O(n)
// addEdge: O(n)
// hasEdge: O(n)
// removeEdge: O(n)
// forEachNode: O(n)
//  */

//**************************************************************************************


// //Graph using nodes (non-advanced implementation):
// var Graph = function() {
// };

// var Vertex = function(value) {
//   this.edges = [];
//   this.value = value;
// };


// // Add a node to the graph, passing in the node's value.
// Graph.prototype.addNode = function(node) {
//   var newVertex = new Vertex(node);
//   this[node] = newVertex;
// };

// // Return a boolean value indicating if the value passed to contains is represented in the graph.
// Graph.prototype.contains = function(node) {

//   var doesContain = false;
//   _.each(this, function(vertex, key) {
//     if (node === Number(key)) {
//       doesContain = true;
//     }
//   });
//   return doesContain;
// };

// // Removes a node from the graph.
// Graph.prototype.removeNode = function(node) {
  
//   for (var currentNode in this) {
//     this.removeEdge(currentNode, node);
//   }

//   delete this[node];
// };

// // Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
// Graph.prototype.hasEdge = function(fromNode, toNode) {

//   var containsEdge = false;
//   if (this[fromNode]) {
//     _.each(this[fromNode].edges, function(edge) {
//       if (edge === toNode) {
//         containsEdge = true;
//       }
//     });
//   }
//   return containsEdge;
// };

// // Connects two nodes in a graph by adding an edge between them.
// Graph.prototype.addEdge = function(fromNode, toNode) {

//   this[fromNode].edges.push(toNode);
//   this[toNode].edges.push(fromNode);
// };

// // Remove an edge between any two specified (by value) nodes.
// Graph.prototype.removeEdge = function(fromNode, toNode) {
  
//   _.each(this[fromNode].edges, function(edge, idx, edges) {
//     if (edge === toNode) {
//       edges.splice(idx, 1);
//     }
//   });
//   _.each(this[toNode].edges, function(edge, idx, edges) {
//     if (edge === fromNode) {
//       edges.splice(idx, 1);
//     }
//   });
// };

// // Pass in a callback which will be executed on each node of the graph.
// Graph.prototype.forEachNode = function(cb) {

//   for (var currentNode in this) {
//     if (typeof this[currentNode] === 'object') {
//       cb(currentNode);
//     }
//   }

// };


// /*
//  * Complexity: What is the time complexity of the above functions?
// addNode: O(n)
// contains: O(n)
// removeNode: O(n)
// addEdge: O(n)
// hasEdge: O(n)
// removeEdge: O(n)
// forEachNode: O(n)

//  */


