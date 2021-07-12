const prompt = require('prompt-sync')();
function doong(r, j) {
  let answer = [];
  for (let i = 0; i < j.length; i++) {
    answer.push('pass');
  }

  for (let i = 0; i < j.length; i++) {
    let p = 0;
    while (p < r.length - 1) {
      p += j[i];
      r[p - 1] -= 1;

      if (r[p - 1] < 0) {
        answer[i] = 'fail';
      }
    }
  }

  return answer;
}

const rock = prompt('돌의 내구도')
  .split(' ')
  .map((n) => parseInt(n, 10));
const jump = prompt('토끼의 점프력')
  .split(' ')
  .map((n) => parseInt(n, 10));

console.log(doong(rock, jump));
