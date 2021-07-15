class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
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

  push(data) {
    const newNode = new Node(data);

    if (!(this.head instanceof Node)) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
  }

  findNode(index) {
    let iterator = this.head;

    for (let i = 0; i < index; i++) {
      iterator = iterator.next;
    }

    return iterator;
  }

  shift() {
    const data = this.head.data;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }

    return data;
  }

  unshift(data) {
    const newNode = new Node(data);

    if (!(this.head instanceof Node)) {
      this.tail = newNode;
    } else {
      newNode.next = this.head;
    }
    this.head = newNode;
  }

  insert(previousNode, data) {
    const newNode = new Node(data);

    if (previousNode.next === this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      newNode.next = previousNode.next;
      previousNode.next = newNode;
    }
  }

  delete(previousNode) {
    if (previousNode.next === this.tail) {
      previousNode.next = null;
      this.tail = previousNode;
    } else {
      previousNode.next = previousNode.next.next;
    }
  }
}

const my_list = new LinkedList();

my_list.push(2);
my_list.push(3);
my_list.push(5);
my_list.push(7);
my_list.push(11);

my_list.delete(my_list.findNode(2));
console.log(my_list.show());

my_list.shift();
console.log(my_list.show());
