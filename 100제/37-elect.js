const prompt = require('prompt-sync')();

const students = prompt('Input sentence : ').split(' ');

let countObj = {};

for (let i = 0; i < students.length; i++) {
  if (students[i] in countObj) {
    countObj[students[i]] += 1;
  } else {
    countObj[students[i]] = 1;
  }
}

const winner = Object.keys(countObj).reduce((a, b) => {
  return countObj[a] > countObj[b] ? a : b;
});

console.log(countObj);
console.log(
  `${winner} is selected as represetive by ${countObj[winner]} polls.`
);
