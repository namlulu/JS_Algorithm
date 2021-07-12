let result = '';
let x = 'leeSeungWook';

for (let i = x.length - 1; i >= 0; i--) {
  result += x[i];
}

function f(str) {
  if (str.length === 1) {
    return str;
  }

  return str[str.length - 1] + f(str.substring(0, str.length - 1));
}

console.log(f('abcdefg'));
