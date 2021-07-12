const prompt = require('prompt-sync')();

const sentence = prompt('Input sentence : ');
const word = prompt('Input word : ');

console.log(sentence.indexOf(word));
