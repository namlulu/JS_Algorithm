const prompt = require('prompt-sync')();

function bubble(arr) {
  let result = arr.slice();
  console.log(result);

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = i; j < result.length - 1; j++) {
      if (result[j] > result[j + 1]) {
        let temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }
  return result;
}

const items = prompt('Input Number : ')
  .split(' ')
  .map((n) => {
    return parseInt(n, 10);
  });

console.log(bubble(items));
