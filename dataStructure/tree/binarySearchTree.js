class Node {
  constructor(data) {
    this.data = data;
    this.parent = null;
    this.leftChild = null;
    this.rightChild = null;
  }
}

function printInOrder(node) {
  if (node !== null) {
    printInOrder(node.leftChild);
    console.log(node.data);
    printInOrder(node.rightChild);
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  static findMin(node) {
    let temp = node;

    while (temp.leftChild !== null) {
      temp = temp.leftChild;
    }

    return temp;
  }

  delete(data) {
    const nodeToDelete = this.search(data);
    const parentNode = nodeToDelete.parent;

    // 지우려는 노드가 Leaf
    if (nodeToDelete.leftChild === null && nodeToDelete.rightChild === null) {
      if (this.root === nodeToDelete) {
        this.root = null;
      } else {
        if (nodeToDelete === parentNode.leftChild) {
          parentNode.leftChild = null;
        } else if (nodeToDelete === parentNode.rightChild) {
          parentNode.rightChild = null;
        }
      }
    } else if (nodeToDelete.leftChild === null) {
      if (nodeToDelete === this.root) {
        this.root = nodeToDelete.rightChild;
        this.root.parent = null;
      } else if (nodeToDelete === parentNode.leftChild) {
        parentNode.leftChild = nodeToDelete.rightChild;
        nodeToDelete.rightChild.parent = parentNode;
      } else {
        parentNode.rightChild = nodeToDelete.rightChild;
        nodeToDelete.rightChild.parent = parentNode;
      }
    } else if (nodeToDelete.rightChild === null) {
      if (nodeToDelete === this.root) {
        this.root = nodeToDelete.leftChild;
        this.root.parent = null;
      } else if (nodeToDelete === parentNode.leftChild) {
        parentNode.leftChild = nodeToDelete.leftChild;
        nodeToDelete.leftChild.parent = parentNode;
      } else {
        parentNode.rightChild = nodeToDelete.leftChild;
        nodeToDelete.leftChild.parent = parentNode;
      }
    } else {
      const successor = BinarySearchTree.findMin(nodeToDelete.rightChild);
      nodeToDelete.data = successor.data;

      if (successor === successor.parent.leftChild) {
        successor.parent.leftChild = successor.rightChild;
      } else {
        successor.parent.rightChild = successor.rightChild;
      }

      if (successor.rightChild !== null) {
        successor.rightChild.parent = successor.parent;
      }
    }
  }

  search(data) {
    let temp = this.root;

    while (temp !== null) {
      if (temp.data > data) {
        temp = temp.leftChild;
      } else if (temp.data < data) {
        temp = temp.rightChild;
      } else {
        return temp;
      }
    }
  }

  insert(data) {
    const newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let temp = this.root;

    while (temp !== null) {
      if (temp.data > data) {
        if (temp.leftChild === null) {
          temp.leftChild = newNode;
          newNode.parent = temp;
          return;
        } else {
          temp = temp.leftChild;
        }
      } else {
        if (temp.rightChild === null) {
          temp.rightChild = newNode;
          newNode.parent = temp;
          return;
        } else {
          temp = temp.rightChild;
        }
      }
    }
  }

  printSortedTree() {
    printInOrder(this.root);
  }
}

// 빈 이진 탐색 트리 생성
const bst = new BinarySearchTree();

// 데이터 삽입
bst.insert(7);
bst.insert(11);
bst.insert(9);
bst.insert(17);
bst.insert(8);
bst.insert(5);
bst.insert(19);
bst.insert(3);
bst.insert(2);
bst.insert(4);
bst.insert(14);

bst.delete(7);
bst.delete(11);

bst.printSortedTree();
