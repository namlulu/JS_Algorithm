const prompt = require('prompt-sync')();

const [a, b] = prompt('Input numbers : ')
  .split(' ')
  .map((element) => parseInt(element, 10));

function solution(a, b) {
  const dayArray = [`SUN`, `MON`, `TUE`, `WED`, `THU`, `FRI`, `SAT`];
  const answer = new Date(`2020-${a}-${b}`);
  console.log(dayArray[answer.getDay()]);
}

solution(a, b);
