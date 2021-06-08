const prompt = require('prompt-sync')();

const input = '0 1 0 0 0\n0 0 0 0 0\n0 0 0 1 0\n0 0 1 0 0\n0 0 0 0 0'.split(
  '\n'
);

console.log(input);

const array = [];

for (let i = 0; i < input.length; i++) {
  array.push(input[i].split(' '));
}

console.log(array);

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[0].length; j++) {
    if (array[i][j] === '1') {
      array[i][j] = 'f';
      if (i !== 0) {
        array[i - 1][j] = '*';
      }
      if (i !== array.length - 1) {
        array[i + 1][j] = '*';
      }
      if (j !== 0) {
        array[i][j - 1] = '*';
      }
      if (j !== array[0].length - 1) {
        array[i][j + 1] = '*';
      }
    }
  }
}

console.log(array);
