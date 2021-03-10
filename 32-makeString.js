const prompt = require('prompt-sync')();

const sentence = prompt('Input sentence : ');

const sentenceArrary = sentence.split(' ');
console.log(sentenceArrary.length);
