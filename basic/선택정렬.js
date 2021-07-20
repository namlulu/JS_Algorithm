let a = [10, 11, 9, 2, 3, 6, 5, 4];
let answer = [];

while (a.length > 0) {
  const minValue = Math.min(...a);
  a.splice(a.indexOf(minValue), 1);
  answer.push(minValue);
}

console.log(answer);
