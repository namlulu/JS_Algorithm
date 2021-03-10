const prompt = require('prompt-sync')();

const numbers = prompt('Input num : ');

const List = numbers.split(' ').map((a) => a * 1);
const sum = List.reduce((a, b) => a + b);
console.log(sum / List.length);
