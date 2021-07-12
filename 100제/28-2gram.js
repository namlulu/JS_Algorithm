const prompt = require('prompt-sync')();

const word = prompt('Input name : ');

for (let i = 0; i < word.length - 1; i++) {
  console.log(`${word[i]} ${word[i + 1]}`);
}
