const prompt = require('prompt-sync')();

const Alphabet = prompt('Input name : ');

if (Alphabet === Alphabet.toLocaleUpperCase()) {
  console.log(`Yes`);
} else {
  console.log(`No`);
}
