const prompt = require('prompt-sync')();

const number = prompt('Input sentence : ');

const NUMBER = 9;
let answer = '';

for (let i = 1; i <= NUMBER; i++) {
  answer += parseInt(number) * i + ' ';
}

console.log(answer);
