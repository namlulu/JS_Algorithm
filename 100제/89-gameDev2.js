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

  return matrix;
}

function move(map, mv) {
  let row = 1;
  let col = 1;

  for (let i of map) {
    if (i.includes(1)) {
      x = map.indexOf(i);
      y = i.indexOf(1);
    }
  }

  for (let i = 0; i < mv.length; i++) {
    const value = mv[i];

    switch (value) {
      case 1:
        row -= 1;
      case 2:
        row += 1;
      case 3:
        col -= 1;
      case 4:
        col += 1;
    }
  }

  map[1][1] = 0;
  map[row][col] = 1;

  return map;
}

const mapOne = makeMap(
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

console.log(move(mapOne, [2, 2, 2, 4, 4, 4]), 5);
