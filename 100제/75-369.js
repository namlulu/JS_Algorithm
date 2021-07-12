const prompt = require('prompt-sync')();

const inputNumber = Number(prompt('Input N: '));

let checkArray = [];

for (let i = 1; i <= inputNumber; i++) {
  let chnageString = String(i);

  for (let j = 0; j < chnageString.length; j++) {
    if (
      chnageString[j] !== '3' &&
      chnageString[j] !== '6' &&
      chnageString[j] !== '9'
    ) {
      checkArray.push(i);
      break;
    }
  }
}

console.log(checkArray);
console.log(inputNumber - checkArray.length);
