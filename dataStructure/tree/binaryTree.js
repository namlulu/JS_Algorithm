class Node {
  constructor(data) {
    this.data = data;
    this.leftChild = null;
    this.rightChild = null;
  }
}

rootNode = Node('A');
nodeB = Node('B');
nodeC = Node('c');

rootNode.leftChild = nodeB;
rootNode.rightChild = nodeC;
