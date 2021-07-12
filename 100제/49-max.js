const prompt = require('prompt-sync')();

let number = prompt('Enter a Number : ').split(' ');
const newArray = number.map((n) => Number(n));

newArray.sort((a, b) => b - a);

console.log(newArray[0]);
