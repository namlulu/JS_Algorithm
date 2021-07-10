const input = `0 0 0 0 0
0 1 0 0 0
0 1 0 0 0
0 0 1 0 0
0 0 0 1 0`
  .replace(/1/g, '!')
  .replace(/0/g, '1')
  .replace(/!/g, '0');

let reverseFarm = [];
for (let row of input.split('\n')) {
  reverseFarm.push(row.split(' '));
}

function solution(farm) {
  for (let i = 0; i < farm.length; i++) {
    for (let j = 0; j < farm.length; j++) {
      farm[i][j] = Number(farm[i][j]);
    }
  }

  for (let i = 1; i < farm.length; i++) {
    for (let j = 1; j < farm.length; j++) {
      if (farm[i][j] === 1) {
        let min;
        //
        if (farm[i - 1][j] >= farm[i][j - 1]) {
          min = farm[i][j - 1];
        }
        //
        else if (farm[i - 1][j] < farm[j - 1]) {
          min = farm[i - 1][j];
        }
        //
        if (min >= farm[i - 1][j - 1]) {
          min = farm[i - 1][j - 1];
        }

        farm[i][j] = min + 1;
      }
    }
  }
  return farm;
}

solution(reverseFarm);
