let result = 0;
let x = '35412'.split('');

for (let i = 0; i < x.length; i++) {
  result += parseInt(x[i], 10);
}

console.log(result);

function f(str) {
  if (str.length === 1) {
    return parseInt(str, 10);
  }

  return parseInt(str[0], 10) + f(str.substring(1, str.length));
}

console.log(f('35412'));
