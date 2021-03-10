const prompt = require('prompt-sync')();

const scores = prompt('Input sentence : ')
  .split(' ')
  .sort((a, b) => a - b);

let studentList = [];
let count = 0;

while (studentList.length < 3) {
  const winner = scores.pop();
  if (!studentList.includes(winner)) {
    studentList.push(winner);
  }
  count += 1;
}

console.log(studentList);
console.log(count);
