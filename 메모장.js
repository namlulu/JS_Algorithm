function solution(numbers) {
  const answer = numbers
                        .map((v) => v.toString())
                        .sort((a, b) => (b + a) - (a + b))
                        .join('')
  return answer
}

console.log(solution([6, 10, 2]));
console.log(solution([3, 30, 34, 5, 9]));
console.log(solution([0, 0, 0, 0]));