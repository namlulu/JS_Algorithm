let total_score = [];

for (let k = 0; k < 7; k++) {
  let class_score = [];

  for (let j = 0; j < 30; j++) {
    let student_score = [];

    for (let i = 0; i < 5; i++) {
      student_score.push(Math.floor(Math.random() * 100) + 1);
    }

    class_score.push(student_score);
  }

  total_score.push(class_score);
}
//
const eachTeamAvg = total_score.map((team) => {
  const sum = team.map((person) => {
    return person.reduce((acc, cur) => acc + cur) / person.length;
  });

  console.log(sum);

  return sum.reduce((acc, cur) => acc + cur) / team.length;
});

console.log(`각 반의 평균 ${eachTeamAvg}`);

//
const eachBest = total_score.map((team) => {
  const sum = team.map((person) => {
    return person.reduce((acc, cur) => acc + cur) / person.length;
  });

  return sum.reduce((acc, cur) => (acc < cur ? cur : acc));
});

console.log(`각 반의 1등 평균 ${eachBest}`);

//
let allAvg = 0;

for (let i in eachTeamAvg) {
  allAvg += eachTeamAvg[i];
}

console.log(`전교 평균 ${allAvg / eachTeamAvg.length}`);
