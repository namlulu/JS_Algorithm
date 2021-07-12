const prompt = require('prompt-sync')();

const Input = prompt('Input String');

console.log(Input.split('').reverse().join(''));
