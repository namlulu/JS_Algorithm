let result = '';
let x = 11;

while (true) {
  if (x % 2 === 0) {
    result = '0' + result;
  } else if (x % 2 === 1) {
    result = '1' + result;
  }

  x = Math.floor(x / 2);

  if (x === 1 || x === 0) {
    result = String(x) + result;
    break;
  }
}

console.log(result);

function f(n) {
  if (n === 1 || n === 0) {
    return String(n);
  }

  return f(Math.floor(n / 2)) + String(n % 2);
}

console.log(f(11));
