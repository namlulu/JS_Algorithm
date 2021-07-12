const a = [
  [1, 2],
  [2, 4],
];

const b = [
  [1, 0],
  [0, 3],
];

function muitiply(a1, b1) {
  const a1Data = [a1.length, a[0].length];
  const b1Data = [b1.length, b[1].length];

  console.log(a1Data, b1Data);

  let results = [];

  if (a1Data[1] !== b1Data[0]) {
    return -1;
  } else {
    for (let i = 0; i < a1Data[1]; i++) {
      let addOne = [];
      for (let j = 0; j < a1Data[1]; j++) {
        let value = 0;
        for (let k = 0; k < a1Data[1]; k++) {
          value += a[i][k] * b[k][j];
        }
        addOne.push(value);
      }
      results.push(addOne);
    }
    return results;
  }
}

console.log(muitiply(a, b));
