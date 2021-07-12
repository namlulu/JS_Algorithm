const prompt = require('prompt-sync')();

const number = parseInt(prompt('Input num'), 10);

if (number % 3 === 0) {
  console.log('Jak');
} else {
  console.log(number);
}
