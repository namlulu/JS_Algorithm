const prompt = require('prompt-sync')();

const sentence = prompt('Input sentence : ');

const sentenceSort = sentence
  .split(' ')
  .sort((a, b) => a - b)
  .join(' ');

if (sentence === sentenceSort) {
  console.log('Yes');
} else {
  console.log(`No`);
}
