// BFS Count if ShortestPath between of thw edges.
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
    count++;
    let size = queue.length;
    //
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      if (node === end) {
        return count;
      }
      //
      for (let n of graph[node]) {
        if (!visited.includes(n)) {
          visited.push(n);
          queue.push(n);
        }
      }
      //
    }
  }
}

console.log(solution());
