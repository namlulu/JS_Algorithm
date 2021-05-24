const prompt = require('prompt-sync')();
let number = Number(prompt('input N : '));
let finder = 0;
let cal = 0;

for (let i = 0; (i * (i - 1)) / 2 < number; i++) {
  finder = i;
  cal = (i * (i - 1)) / 2;
}

console.log(number - cal, finder + 1);
