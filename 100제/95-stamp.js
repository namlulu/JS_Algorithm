const stamp = [
  [1, 1, 1, 2],
  [2, 0, 0, 0],
  [1, 1, 1, 1],
  [0, 0, 0, 0],
];
const rotate = 1;
const maxRow = stamp.length;
const maxCol = stamp[0].length;
let answer = Array.from(Array(maxRow), () => Array(maxCol).fill(null));

function findNum(n) {
  return Math.abs(n - 4) - 1;
}

for (let row = 0; row < maxRow; row++) {
  for (let col = 0; col < maxCol; col++) {
    answer[col][findNum(row)] = stamp[row][col];
  }
}

for (let row = 0; row < maxRow; row++) {
  for (let col = 0; col < maxCol; col++) {
    answer[row][col] += stamp[row][col];
  }
}

console.log(answer);
