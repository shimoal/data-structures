

// Instantiate a new graph
var Graph = function() {
  var storage = Object.create(Graph.prototype);
  storage.vertices = [];
  storage.edges = [];

  storage.newArr = [];

  return storage;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  _.each(this.edges, function(edge) {
    edge.push(0);
  });
  this.vertices.push(node);
  this.newArr.push(0);
  this.edges.push(this.newArr);
  console.log(this.edges);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var contains = false;
  _.each(this.vertices, function(vertex) {
    if (vertex === node) {
      contains = true;
    }
  });
  return contains;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.vertices; i++) {
    if (this.vertices[i] === node) {
      this.vertices.splice(i, 1);
    }
  }
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
  for (var i = 0; i < this.vertices.length; i++) {
    if (fromNode === this.vertices[i]) {
      fromIdx = i;
    } 
    if (toNode === this.vertices[i]) {
      toIdx = i;
    }
  }
  this.edges[fromIdx][toIdx] = 1;

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  console.log("debugger");
  debugger;
  var fromIdx, toIdx;

  _.each(this.vertices, function(vertex, i) {
    if (vertex === fromNode) {
      fromIdx = i;
    }
    if (vertex === toNode) {
      toIdx = i;
    }
  });

  this.edges[fromIdx][toIdx] = 0;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


