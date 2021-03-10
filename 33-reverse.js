const prompt = require('prompt-sync')();

const sentence = prompt('Input sentence : ').split(' ');

console.log(sentence.reverse().join(' '));
