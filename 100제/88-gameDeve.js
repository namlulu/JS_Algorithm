function makeMap(hor, ver, char, block) {
  let matrix = [];

  for (let i = 0; i < ver; i++) {
    let smallMatrix = [];

    for (let j = 0; j < hor; j++) {
      if (i === char[1] && j === char[0]) {
        smallMatrix.push(1);
      } else {
        smallMatrix.push(0);
      }
    }
    matrix.push(smallMatrix);
  }

  for (let k = 0; k < block.length; k++) {
    matrix[block[k][0]][block[k][1]] = 2;
  }

  for (let m = 0; m < matrix.length; m++) {
    matrix[m].push(2);
    matrix[m].unshift(2);
  }

  matrix.push(Array(hor + 2).fill(2));
  matrix.unshift(Array(ver + 2).fill(2));

  console.log(matrix);
}

makeMap(
  4,
  5,
  [0, 0],
  [
    [0, 1],
    [1, 1],
    [2, 3],
    [1, 3],
  ]
);
