const prompt = require('prompt-sync')();

const inputString = prompt('input String: ').split(',');
const inputNumber = parseInt(prompt(''), 10);

function solution(arr, count) {
  let comb = [];
  const recursive = (pre, array) => {
    for (let i = 0; i < array.length; i++) {
      comb.push(pre + array[i]);
      recursive(pre + array[i], array.slice(i + 1));
    }
  };

  recursive('', arr);

  console.log(comb.filter((element) => element.length === count));
}

solution(inputString, inputNumber);
