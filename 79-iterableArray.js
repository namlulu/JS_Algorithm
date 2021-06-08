const prompt = require('prompt-sync')();

const l = [10, 20, 25, 27, 34, 35, 39]; //기존 입력 값
const n = Number(prompt('Rotate Number: '));

function rotate(inL, inN) {
  const origin = inL.slice();
  const queue = inL.slice();
  for (let i = 0; i < inN; i++) {
    const element = queue.pop();
    queue.unshift(element);
  }

  let diff = [];

  for (let i = 0; i < origin.length; i++) {
    diff.push(Math.abs(origin[i] - queue[i]));
  }

  console.log(diff);

  const minValue = Math.min(...diff);
  console.log(`index: ${diff.indexOf(minValue)}`);
  console.log(
    `value: ${origin[diff.indexOf(minValue)]}, ${queue[diff.indexOf(minValue)]}`
  );
}

rotate(l, n);
