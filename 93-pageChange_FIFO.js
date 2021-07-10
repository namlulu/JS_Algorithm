function solution(string, frame) {
  const newArray = string.split('');
  let defaultCount = 0;
  let missCount = 0;

  const queue = [];

  for (let i in newArray) {
    if (!queue.includes(newArray[i])) {
      if (queue.length >= frame) {
        queue.shift();
      }
      missCount += 1;
      queue.push(newArray[i]);
    } else {
      defaultCount += 1;
    }
  }

  return missCount * 6 + defaultCount;
}

console.log(solution('BCBAEBCE', 3));
console.log(solution('ABCABCABC', 3));
