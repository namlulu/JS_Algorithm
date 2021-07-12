let pre = 0;
let cur = 1;
let index = 0;
let num = 6;

while (index < num) {
  let temp;
  temp = pre;
  pre = cur;
  cur = temp + cur;

  index += 1;
}

console.log(pre);

function f(num) {
  if (num === 1 || num === 2) {
    return 1;
  }
  return f(num - 2) + f(num - 1);
}

console.log(f(6));
