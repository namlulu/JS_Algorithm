function solution(n, wires) {
  let count = [];
  for (let wire of wires) {
    let rCount = 2;
    let current = 0;
    const newWires = wires.filter((item) => item !== wire);

    while (true) {
      console.log(newWires);
      let left = newWires[current][0];
      let right = newWires[current][1];
      newWires.splice(current, 1);

      let indexNum = newWires.findIndex((item) => {
        return item.includes(left) || item.includes(right);
      });

      if (indexNum) break;

      rCount += 1;
      current = indexNum;
    }

    count.push(rCount);
  }
  return count;
}

console.log(
  solution(9, [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ])
);
