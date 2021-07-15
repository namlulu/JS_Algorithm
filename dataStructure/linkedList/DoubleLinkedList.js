class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  show() {
    let string = '|';
    let iterator = this.head;

    while (iterator instanceof Node) {
      string += ` ${iterator.data} |`;
      iterator = iterator.next;
    }

    return string;
  }

  findNode(index) {
    let iterator = this.head;

    for (let i = 0; i < index; i++) {
      iterator = iterator.next;
    }

    return iterator;
  }

  findNodeWithData(data) {
    let iterator = this.head;

    while (iterator instanceof Node) {
      if (iterator.data === data) {
        return iterator;
      }

      iterator = iterator.next;
    }

    return null;
  }

  push(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  unshift(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  insertAfter(previousNode, data) {
    const newNode = new Node(data);

    if (previousNode === this.tail) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    } else {
      newNode.prev = previousNode;
      newNode.next = previousNode.next;

      previousNode.next.prev = newNode;
      previousNode.next = newNode;
    }
  }

  delete(nodeToDelete) {
    if ((this.head === this.tail) === nodeToDelete) {
      this.head = null;
      this.tail = null;
    } else if (this.head === nodeToDelete) {
      this.head = this.head.next;
      this.head.prev = null;
    } else if (this.tail === nodeToDelete) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      nodeToDelete.prev.next = nodeToDelete.next;
      nodeToDelete.next.prev = nodeToDelete.prev;
    }
  }
}

const my_list = new LinkedList();

my_list.push(11);
my_list.push(7);
my_list.push(5);
my_list.push(2);
my_list.push(3);

console.log(my_list.show());
console.log(my_list.head.data);
console.log(my_list.tail.data);
