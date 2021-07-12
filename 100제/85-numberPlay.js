const prompt = require('prompt-sync')();
const inputNumber = Number(prompt('input Number'));

let answer;

for (let i = 0; i < inputNumber; i++) {
  let queue = [];

  if (i === 0) {
    answer = '1';
    continue;
  } else {
    const answerArray = answer.split('');
    const types = new Set(answerArray);
    const typesSort = [...types].sort();

    for (let i in typesSort) {
      const count = answerArray.filter((item) => item === typesSort[i]).length;
      queue.push(count);
    }

    answer = '';
    for (let i = 0; i < queue.length; i++) {
      const num = Number(i + 1);
      answer += num.toString() + String(queue[i]);
    }
  }
}
console.log(answer);
