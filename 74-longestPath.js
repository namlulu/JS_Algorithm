// Amoung BFS, the Largest one is lonegest one.
const graph = {
  1: [2, 3, 4],
  2: [1, 3, 4, 5, 6],
  3: [1, 2, 7],
  4: [1, 2, 5, 6],
  5: [2, 4, 6, 7],
  6: [2, 4, 5, 7],
  7: [3, 5, 6],
};

const user_input = [1, 7];
const start = user_input[0];
const end = user_input[1];

let queue = [start];
let visited = [];

function solution(input_queue, visited) {
  let node = input_queue[0];
  let length = 0;

  if (node === end) {
    return visited.length;
  }

  if (visited.includes(node)) {
    return visited.length;
  } else {
    visited.push(node);
  }

  let maxArray = [];

  for (let n in graph[node]) {
    input_queue.push(graph[node][n]);

    maxArray.push(length, solution(input_queue, visited));
    length = Math.max(...maxArray);

    input_queue.shift();
  }
  console.log(maxArray);
  return length;
}

console.log(solution(queue, visited));
