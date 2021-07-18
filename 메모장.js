function solution(numbers) {
  let answer = [];

  numbers.forEach((item) => {
    let twoNumber = '0' + item.toString(2);
    const lastIdx = twoNumber.length - 1;

    if (twoNumber[lastIdx] === '0') {
      answer.push(item + 1);
    } else {
      for (let i = lastIdx; i >= 0; i--) {
        if (twoNumber[i] === '0') {
          answer.push(
            parseInt(
              twoNumber.substring(0, i) +
                '10' +
                twoNumber.substring(i + 2, lastIdx + 1),
              2
            )
          );
          break;
        }
      }
    }
  });

  return answer;
}
