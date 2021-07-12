const num = '1723';
const len = 2;
console.log(solution(num, len));

function solution(chars, length) {
  let result = [];

  const recursive = (pre, chars) => {
    for (let i = 0; i < chars.length; i++) {
      result.push(pre + chars[i]);
      recursive(pre + chars[i], chars.slice(i + 1));
    }
  };

  recursive('', chars);

  result = result.filter((x) => x.length === length).sort();

  return result[result.length - 1];
}
