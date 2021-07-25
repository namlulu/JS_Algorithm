function solution(citations) {
  let answer = 0;
  const arr = citations.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    const checkResult = possibleCheck(arr, arr[i]);

    if (checkResult && arr[i] > answer) {
      answer = arr[i];
    }
  }

  return answer;
}

function possibleCheck(arr, val) {
  const count = arr.filter((item) => item >= val).length;
  const rest = arr.length - count;

  if (count >= val && rest <= val) {
    return true;
  } else {
    return false;
  }
}

console.log(solution([3, 0, 6, 1, 5]));
