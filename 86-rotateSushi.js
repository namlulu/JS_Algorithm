const prompt = require('prompt-sync')();

const point = [1, 1, 3, 2, 5];
let dish = 3;

function solution(point, dish) {
  let answer = 0;
  dish -= 1;

  let copy = point.slice();
  copy.sort();

  while (true) {
    const element = point.shift();

    if (element === copy[0]) {
      if (dish === 0) {
        break;
      }

      dish -= 1;
      copy.shift();
    } else {
      point.push(element);

      if (dish === 0) {
        dish = point.length - 1;
      } else {
        dish -= 1;
      }
    }
    answer += 1;
  }

  return answer;
}

console.log(solution(point, dish));
