const prompt = require('prompt-sync')();

const inputString = prompt('Input String: ')
  .split(' ')
  .map((n) => Number(n));

function check(array) {
  array.sort((a, b) => a - b);

  console.log(array);

  for (let i = 0; i < array.length - 1; i++) {
    console.log(array[i + 1]);
    if (array[i] + 1 !== array[i + 1]) {
      return 'NO';
    }
  }
  return 'YES';
}

console.log(check(inputString));
