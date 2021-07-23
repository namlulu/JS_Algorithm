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

function heapsort(tree) {
  let treeLength = tree.length;

  for (let i = treeLength; i >= 1; i--) {
    heapify(tree, i, treeLength);
  }

  for (let i = treeLength - 1; i >= 1; i--) {
    swap(tree, 1, i);
    heapify(tree, 1, i);
  }
}

const tree = [null, 15, 5, 12, 14, 9, 10, 6, 2, 11, 1];
heapsort(tree);
console.log(tree);
