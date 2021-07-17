const sha256 = require('crypto-js/sha256');

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  log() {
    let str = '';

    iterator = this.head;

    while (iterator instanceof Node) {
      str += `${iterator.key}: ${iterator.value} \n`;
      iterator = iterator.next;
    }

    return str;
  }

  findNodeWithKey(key) {
    let iterator = this.head;

    while (iterator instanceof Node) {
      if (iterator.key === key) {
        return iterator;
      }

      iterator = iterator.next;
    }

    return null;
  }

  push(key, value) {
    const newNode = new Node(key, value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  delete(nodeToDelete) {
    if (nodeToDelete === this.head && nodeToDelete === this.tail) {
      this.head = null;
      this.tail = null;
    } else if (nodeToDelete === this.head) {
      this.head = this.head.next;
      this.head.prev = null;
    } else if ((nodeToDelete === this, this)) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      nodeToDelete.prev.next = nodeToDelete.next;
      nodeToDelete.next.prev = nodeToDelete.prev;
    }

    return nodeToDelete;
  }
}

class HashTable {
  constructor(capacity) {
    this._capacity = capacity;
    this._table = new Array(this._capacity).fill(new LinkedList());
  }

  log() {
    let str = '';

    for (let linkedList of this._table) {
      str += linkedList.log();
    }

    return str;
  }

  hash(key) {
    return (
      sha256('영훈').words.reduce((pre, cur) => pre + cur) % this._capacity
    );
  }

  lookUpValue(key) {}

  insert(key, value) {}
}
