const graph = {
  A: ['E', 'C', 'B'],
  B: ['A'],
  C: ['A'],
  D: ['E', 'F'],
  E: ['D', 'A'],
  F: ['D'],
};

function bfs(graph, start) {
  let visited = [];
  let queue = [start];

  while (queue.length !== 0) {
    let n = queue.shift();
    if (!visited.includes(n)) {
      visited.push(n);
      let sub = graph[n].filter((element) => !visited.includes(element));
      for (let i of sub) {
        queue.push(i);
      }
    }
  }
  return visited;
}

console.log(bfs(graph, 'E'));
