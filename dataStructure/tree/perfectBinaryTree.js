function getParentIndex(tree, index) {
  const check = Math.floor(index / 2);

  if (0 < check && check < tree.length) {
    return check;
  }

  return null;
}

function getLeftChildIndex(tree, index) {
  const check = index * 2;

  if (0 < check && check < tree.length) {
    return check;
  }

  return null;
}

function getRightChildIndex(tree, index) {
  const check = index * 2 + 1;

  if (0 < check && check < tree.length) {
    return check;
  }

  return null;
}

const rootNodeIndex = 1;
const TREE = [null, 1, 5, 12, 11, 9, 10, 14, 2, 10];

let leftChildIndex = getLeftChildIndex(TREE, rootNodeIndex);
let rightChildIndex = getRightChildIndex(TREE, rootNodeIndex);

console.log(TREE[leftChildIndex]);
console.log(TREE[rightChildIndex]);

let parentIndex = getParentIndex(TREE, 9);
console.log(TREE[parentIndex]);

parentIndex = getParentIndex(TREE, 1);
console.log(parentIndex);

leftChildIndex = getLeftChildIndex(TREE, 6);
console.log(leftChildIndex);

rightChildIndex = getRightChildIndex(TREE, 8);
console.log(rightChildIndex);
