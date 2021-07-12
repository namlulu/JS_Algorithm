const prompt = require('prompt-sync')();
const inputArray = prompt('Input Numbers: ').split(' ');

const count = Number(inputArray[1]);

let index = 0;
const queue = [];

for (let i = 0; i < Number(inputArray[0]); i++) {
  queue.push(i + 1);
}

console.log(queue);

while (queue.length > 2) {
  if (index > queue.length - 1) {
    index -= queue.length;
  }
  queue.splice(index, 1);
  index += count;
  index -= 1;
}

console.log(queue);
