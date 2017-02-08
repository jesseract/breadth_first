// Please read the comments and the code and implement the functions asked for
// in the comments. There are 2 parts, please complete both. Thanks!
//
// A tree is a data structure made up of nodes. Each node has a link to its
// parent and a value.

var Node = class {
  constructor(myParent, val) {
    this.myParent = myParent;
    this.val = val;
  }
}

// If we wanted to make this tree:
//       a
//     /   \
//    l     t
//   / \   / \
//  e   r e   d
//
// We'd do it like this:
var a = new Node(null, 'a');
var al = new Node(a, 'l');
var at = new Node(a, 't');
var ale = new Node(al, 'e');
var alr = new Node(al, 'r');
var ate = new Node(at, 'e');
var atd = new Node(at, 'd');

console.log('PART 1: START');
// Please write a function that takes a leaf node (one of the ones at the bottom
// of the tree with no children) and prints its value, then finds its parent and
// prints its value, and so on, to the top of the tree. The function should
// work for trees of any height, and the output if you call it with `ate` should
// be:
//   e
//   t
//   a

var walkUp = function(node) {
  //stop at null; print the node, then walk up the parent
  if (node === null) {
    return;
  } else {
    console.log(node.val);
    walkUp(node.myParent);
  }
};

walkUp(ate);

console.log('PART 1: END');

// If we have a node that knows about its children:
var NodeWithChildren = class {
  constructor(myParent, val) {
    this.myParent = myParent;
    this.val = val;
    if (myParent != null) {
      this.myParent.children.push(this);
    }
    this.children = [];
  }
}

// we can build the same tree as above:
var a = new NodeWithChildren(null, 'a');
var al = new NodeWithChildren(a, 'l');
var at = new NodeWithChildren(a, 't');
var ale = new NodeWithChildren(al, 'e');
var alr = new NodeWithChildren(al, 'r');
var ate = new NodeWithChildren(at, 'e');
var atd = new NodeWithChildren(at, 'd');


console.log('PART 2: START');
// Please write a function that walks the tree breadth first, and prints the
// vals, when called with `a` it should print:
//  a
//  l
//  t
//  e
//  r
//  e
//  d
var breadthFirst = function(node) {
  var queue = [node];
  while (queue.length > 0) {
    var thisNode = queue.shift();
    console.log(thisNode.val);
    queue = queue.concat(thisNode.children);
  }
};
breadthFirst(a);
console.log('PART 2: END');
console.log("That's all, thanks!");
