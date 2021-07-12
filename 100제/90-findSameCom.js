function solution(rules, count, data) {
  const answer = [];
  const newRules = rules.split('');
  let num = 0;

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      if (newRules.includes(data[i][j])) {
        num += 1;
      }
    }

    if (num === count) {
      answer.push(data[i]);
    }

    num = 0;
  }
  return answer;
}

const data = ['EFGHIJKL', 'EFGHIJKM', 'UINONPN'];
console.log(solution('ABCDEFGH', 4, data));
