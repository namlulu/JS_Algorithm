const prompt = require('prompt-sync')();
let tower = prompt('input Towers : ').split(' ');
let rule = prompt('input rules : ');

let results = [];

console.log(tower);
console.log(rule);

for (let i = 0; i < tower.length; i++) {
  let tester = [];
  for (let j = 0; j < rule.length; j++) {
    if (tower[i].indexOf(rule[j]) !== -1) {
      tester.push(tower[i].indexOf(rule[j]));
    }
  }
  results.push(tester);
}

console.log(
  results.map((item) => {
    for (let i = 0; i < item.length - 1; i++) {
      if (item[i] > item[i + 1]) {
        return 'impossible';
      }
    }
    return 'possible';
  })
);
