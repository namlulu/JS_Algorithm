const number = 1000;
let count = 0;

for (let i = 0; i <= number; i++) {
  console.log(String(i));

  const newI = String(i).split('');
  console.log(newI);
  for (let j of newI) {
    if (j === '1') {
      count++;
    }
  }
}

console.log(count);
