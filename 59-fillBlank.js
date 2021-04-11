const prompt = require('prompt-sync')();

const inputString = prompt('input a string : ');

function check(string) {
  if (string.length > 50) {
    return new Error('over 50 length.');
  }

  const len = string.length;
  const FIXED = 50;

  const newArray = Array(50).fill('=');
  newArray.splice(25 - len / 2, len, string);

  return newArray.join('');
}

console.log(check(inputString));
