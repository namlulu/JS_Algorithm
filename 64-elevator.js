const prompt = require('prompt-sync')();
let inputString = Number(prompt('input N : '));

let result = 0;

while (true) {
  if (inputString % 7 === 0) {
    result += parseInt(inputString / 7);
    console.log(result);
    break;
  }
  inputString -= 3;
  result += 1;
  if (inputString < 0) {
    console.log(-1);
    break;
  }
}
