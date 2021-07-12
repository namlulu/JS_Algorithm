const prompt = require('prompt-sync')();

let str = prompt('Enter a String : ').split('');
let answer = [];

for (let i of str) {
  if (i === i.toUpperCase()) {
    answer.push(i.toLowerCase());
  } else {
    answer.push(i.toUpperCase());
  }
}

console.log(answer.join(''));
