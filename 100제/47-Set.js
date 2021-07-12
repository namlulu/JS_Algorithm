const people = {
  tom: '010-5757-3163',
  tondy: '010-1234-4124',
  michael: '010-4445-1823',
};
const noDuplicate = new Set();

for (let i in people) {
  noDuplicate.add(people[i]);
}

console.log(noDuplicate.size);
