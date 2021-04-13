const prompt = require('prompt-sync')();
const inputString = prompt('input a string : ').split('');

let answer = '';
let store = inputString[0];
let count = 0;

for (let i of inputString) {
  if (i === store) {
    count++;
  } else {
    answer += `${i}${count}`;
    store = i;
    count = 1;
  }
}

answer += `${store}${count}`;
console.log(answer);
