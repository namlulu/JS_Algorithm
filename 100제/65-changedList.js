const a = [1, 2, 3, 4];
const b = ['a', 'b', 'c', 'd'];
let results = [];

for (let i in a) {
  let maker = [];
  if (i % 2 === 0) {
    maker.push(a[i], b[i]);
  } else if (i % 2 === 1) {
    maker.push(b[i], a[i]);
  }

  results.push(maker);
}
console.log(results);
