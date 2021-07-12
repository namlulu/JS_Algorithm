const prompt = require('prompt-sync')();

const student = prompt('Input name : ').split(' ');
const score = prompt('input score : ').split(' ');

const answer = {};

for (let i = 0; i < student.length; i += 1) {
  answer[student[i]] = parseInt(score[i], 10);
}

console.log(answer);
