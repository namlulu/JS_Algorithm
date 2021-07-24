function solution(s) {
  let str = s.split('');

  while (checkHas(str)) {
    deletePair(str);
  }

  return str.length === 0 ? 1 : 0;
}

function checkHas(str) {
  let index = 0;

  while (index < str.length) {
    if (str[index] === str[index + 1]) {
      return true;
    }
    index += 1;
  }

  return false;
}

function deletePair(str) {
  let index = 0;

  while (index < str.length) {
    if (str[index] === str[index + 1]) {
      str.splice(index, 2);
      index += 1;
    } else {
      index += 1;
    }
  }
}

console.log(solution('cdcd'));
