const prompt = require('prompt-sync')();

const graph = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B', 'F'],
  F: ['C', 'E'],
};

let edges = prompt('input two edges : ').split(' ');

const start = edges[0];
const end = edges[1];

let visited = [start];
let queue = [start];

function solution() {
  let count = -1;

  while (queue.length !== 0) {
    count += 1;

    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      if (node === end) {
        return count;
      }

      for (let next_node in graph[node]) {
        if (!visited.includes(graph[node][next_node])) {
          visited.push(graph[node][next_node]);
          queue.push(graph[node][next_node]);
        }
      }
    }
  }
}

console.log(solution());
