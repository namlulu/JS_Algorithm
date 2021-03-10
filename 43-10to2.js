const prompt = require('prompt-sync')();

let number = parseInt(prompt('Enter a Number : '), 10);
let store = [];
let result = '';

while (number) {
  store.push(number % 2);
  number = parseInt(number / 2, 10);
}

store.reverse();

store.forEach((n) => {
  result += n;
});

console.log(result);
