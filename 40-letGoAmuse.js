const prompt = require('prompt-sync')();

function checkWeight() {
  const UPPERLINE = parseInt(prompt('Input how much? : '), 10);
  const NUMBERS = parseInt(prompt('Input how many? : '), 10);
  let sum = 0;
  let count = 0;

  for (let i = 1; i <= NUMBERS; i++) {
    const person = parseInt(prompt('Weight? : ', 10));
    sum += person;
    if (sum <= UPPERLINE) {
      count = i;
    }
  }
  console.log(sum);
  console.log(count);
}

checkWeight();
