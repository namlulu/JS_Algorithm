const graph = {
  A: ['E', 'C', 'B'],
  B: ['A'],
  C: ['A'],
  D: ['E', 'F'],
  E: ['D', 'A'],
  F: ['D'],
};

function dfs(graph, start) {
  let visited = [];
  let stack = [start];

  while (stack.length !== 0) {
    const element = stack.pop();
    if (!visited.includes(element)) {
      visited.push(element);
      const subNode = graph[element]
        .filter((item) => !visited.includes(item))
        .reverse();
      for (let i of subNode) {
        stack.push(i);
      }
    }
  }
  return visited;
}

console.log(dfs(graph, 'E'));
