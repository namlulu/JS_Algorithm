const prompt = require('prompt-sync')();
console.log(prompt);
const number = Number(prompt('input number: '));

for (let i = 0; i < number; i++) {
  console.log(' '.repeat(number - i - 1) + '*'.repeat(2 * i + 1));
}
