const prompt = require('prompt-sync')();

const inputString = prompt('Input String: ').split('');

function check(params) {
  let count = 0;
  let counter = [];

  for (let i in params) {
    if (params[i] === '(') {
      count++;
    } else {
      count--;
    }
  }

  if (count !== 0) {
    return false;
  }

  for (let j in params) {
    if (params[j] === '(') {
      counter.push('(');
    } else if (params[j] === ')') {
      if (counter.length === 0) {
        return false;
      }
      counter.pop();
    }
  }
  return true;
}

console.log(check(inputString));
