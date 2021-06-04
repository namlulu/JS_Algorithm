const prompt = require('prompt-sync')();

const firstInput = prompt('Input One: ');
const secondInput = prompt('Input Two: ');

// 계속 쪼개는 작업 => 쪼갠 것 끼리 교집합 => 가장 큰 값을 출력
function solution(string) {
  let answer = [];
  for (let i = 1; i < string.length + 2; i++) {
    for (let j = 0; j < i; j++) {
      answer.push(string.slice(j, i));
    }
  }
  return answer;
}

function findAnswer(oneArray, twoArray) {
  const inter = oneArray.filter((ele) => twoArray.includes(ele));
  inter.sort((a, b) => b.length - a.length);
  return inter[0].length;
}

let caseOne = solution(firstInput);
let caseTwo = solution(secondInput);

console.log(findAnswer(caseOne, caseTwo));
