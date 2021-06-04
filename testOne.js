const prompt = require('prompt-sync')();

let num = Number(prompt());
let scores = [];

for (let i = 1; i <= num; i++) {
  scores.push(prompt().split(' '));
}

const pre = scores.map((item) => {
  const object = {};
  for (let i = 1; i <= 6; i++) {
    object[i] = item.filter((element) => element === String(i)).length;
  }
  return object;
});

const post = pre.map((item) => {
  const values = Object.values(item);
  console.log(values);
  if (values.indexOf(4) >= 0) {
    return 50000 + (values.indexOf(4) + 1) * 5000;
  } else if (values.indexOf(3) >= 0) {
    return 10000 + (values.indexOf(3) + 1) * 1000;
  } else if (values.filter((element) => element === 2).length === 2) {
    let store = [];
    for (let j in item) {
      if (item[j] === 2) {
        store.push(j);
      }
    }
    return 2000 + store[0] * 500 + store[1] * 500;
  } else if (values.filter((element) => element === 2).length === 1) {
    return 1000 + (values.indexOf(2) + 1) * 100;
  } else {
    return (values.lastIndexOf(1) + 1) * 100;
  }
});

console.log(Math.max(...post));
