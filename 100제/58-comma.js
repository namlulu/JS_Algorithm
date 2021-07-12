const prompt = require('prompt-sync')();

const inputNumber = parseInt(prompt('input a number : '), 10);

console.log(inputNumber.toLocaleString());

function comma(s) {
  if (s.length <= 3) {
    return s;
  } else {
    return comma(s.slice(0, s.length - 3) + ',' + s.slice(s.length - 3));
  }
}
