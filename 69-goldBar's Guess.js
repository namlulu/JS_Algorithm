const prompt = require('prompt-sync')();
let number = Number(prompt('input N : '));

const sosuArray = [];

for (let i = 2; i < number; i++) {
  let count = 0;
  for (j = 1; j <= i; j++) {
    if (i % j === 0) {
      count += 1;
    }
  }
  if (count === 2) {
    sosuArray.push(i);
  }
}

for (let i = 0; i < sosuArray.length; i++) {
  for (let j = 0; j < sosuArray.length; j++) {
    if (number === sosuArray[i] + sosuArray[j]) {
      console.log(sosuArray[i], sosuArray[j]);
    }
  }
}
