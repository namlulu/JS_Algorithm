let square = 5;
let area = 3;
let mine = [
  [1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
];

let answer = 0;
let pre = 0;
let rowOfCount = square - area + 1;

for (let i = 0; i < rowOfCount - 1; i++) {
  for (let j = 0; j < rowOfCount - 1; j++) {
    let answerSmall = 0;
    for (let k = 0; k < area; k++) {
      for (let m = 0; m < area; m++) {
        answerSmall += mine[i + k][j + m];
      }
    }
    if (answer < answerSmall) {
      answer = answerSmall;
    }
  }
}

console.log(answer);
