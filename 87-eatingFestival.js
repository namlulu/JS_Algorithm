const people = ['홍길동', '엄석대', '연개소문', '김첨지'];
const scores = [2, 1, 10, 0];

let answer = {};
let newObject = [];

for (let i = 0; i < people.length; i++) {
  newObject.push({
    name: people[i],
    score: scores[i],
  });
}
newObject.sort((a, b) => {
  return b.score - a.score;
});

newObject.forEach((item, index) => {
  answer[item.name] = index + 1;
});

console.log(answer);
