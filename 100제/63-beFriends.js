const prompt = require('prompt-sync')();
const inputString = prompt('input a string : ').split(' ');
let answer = '';

for (let i of inputString) {
  answer += i[0];
}

console.log(answer);
