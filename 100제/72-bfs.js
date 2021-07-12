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
    const element = queue.shift();
    if (!visited.includes(element)) {
      visited.push(element);
      const subNodes = graph[element].filter((item) => !visited.includes(item));
      for (let node of subNodes) {
        queue.push(node);
      }
    }
  }
  return visited;
}

console.log(bfs(graph, 'E'));
