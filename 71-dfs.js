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
    let node = stack.pop();
    if (!visited.includes(node)) {
      visited.push(node);
    }

    let subNode = graph[node]
      .filter((element) => !visited.includes(element))
      .reverse();

    for (let i of subNode) {
      stack.push(i);
    }
  }
  return visited;
}

console.log(dfs(graph, 'E'));
