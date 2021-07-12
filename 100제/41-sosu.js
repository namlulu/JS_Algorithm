const prompt = require('prompt-sync')();

const number = prompt('Input number : ');

// 2, 3, 5, 7, 11, 13, 17 ...

function check_prime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      console.log(`No`);
      return true;
    }
  }
  if (number === 1) {
    console.log(`No`);
    return true;
  }
  console.log(`Yes`);
}

check_prime(number);
