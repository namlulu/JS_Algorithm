const prompt = require('prompt-sync')();

let number = prompt('Enter a Number : ');
let sum = 0;

while (number !== 0) {
  sum += number % 10;
  number = Math.floor(number / 10);
}

console.log(sum);
