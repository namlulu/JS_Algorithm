function swap(tree, firstIndex, secondIndex) {
  let temp = tree[firstIndex];
  tree[firstIndex] = tree[secondIndex];
  tree[secondIndex] = temp;
}

function heapify(tree, index, treeSize) {
  let leftIndex = index * 2;
  let rightIndex = index * 2 + 1;
  let largest = index;

  if (0 < leftIndex < treeSize && tree[largest] < tree[leftIndex]) {
    largest = leftIndex;
  }

  if (0 < rightIndex < treeSize && tree[largest] < tree[rightIndex]) {
    largest = rightIndex;
  }

  if (index !== largest) {
    swap(tree, index, largest);
    heapify(tree, largest, treeSize);
  }
}

function reverseHeapify(tree, index) {
  const treeSize = tree.length;
  let parentIndex = Math.floor(index / 2);

  if (0 < parentIndex < treeSize && tree[index] > tree[parentIndex]) {
    swap(tree, index, parentIndex);
    reverseHeapify(tree, parentIndex);
  }
}

class PriorityQueue {
  constructor() {
    this.heap = [undefined];
  }

  insert(data) {
    this.heap.push(data);
    reverseHeapify(this.heap, this.heap.length - 1);
  }

  extractMax() {
    swap(this.heap, 1, this.heap.length - 1);
    const storedData = this.heap.pop();
    heapify(this.heap, 1, this.heap.length);
    return storedData;
  }

  log() {
    return this.heap;
  }
}

const ex = new PriorityQueue();

ex.insert(6);
ex.insert(9);
ex.insert(1);
ex.insert(3);
ex.insert(10);
ex.insert(11);
ex.insert(13);

console.log(ex.extractMax());
console.log(ex.extractMax());
console.log(ex.extractMax());
console.log(ex.extractMax());
console.log(ex.extractMax());
console.log(ex.extractMax());
console.log(ex.extractMax());
