class Graph {
  constructor() {
    this.map = {}; 
  }

  addVertex(vertex) {
    if (!this.map[vertex]) {
      this.map[vertex] = [];
    }
  }

  insert(vertex, edge, isBidirectional = false) {
    this.addVertex(vertex);
    this.addVertex(edge);
    
    this.map[vertex].push(edge);
    if (isBidirectional) {
      this.map[edge].push(vertex);
    }
  }

  display() {
    for (let vertex in this.map) {
      console.log(vertex + " -> " + this.map[vertex].join(", "));
    }
  }
}

let graph = new Graph()
graph.insert(5,2,true)
graph.insert(5,8)
graph.insert(6,2)
graph.insert(8,9,true)
graph.insert(66,10,true)
graph.display()

function checkRiverSizes(matrix) {
  const visited = Array.from({ length: matrix.length }, () =>
    Array(matrix[0].length).fill(false)
  );

  const sizes = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (visited[i][j]) continue;
      traverseNode(i, j, matrix, visited, sizes);
    }
  }

  return sizes;
}

function traverseNode(i, j, matrix, visited, sizes) {
  let currentRiverSize = 0;
  const stack = [[i, j]];

  while (stack.length) {
    const [currI, currJ] = stack.pop();

    if (
      currI < 0 || currI >= matrix.length ||
      currJ < 0 || currJ >= matrix[0].length ||
      visited[currI][currJ]
    ) {
      continue;
    }

    visited[currI][currJ] = true;

    if (matrix[currI][currJ] === 0) continue;

    currentRiverSize++;

    // Push all adjacent nodes
    stack.push([currI - 1, currJ]); // Up
    stack.push([currI + 1, currJ]); // Down
    stack.push([currI, currJ - 1]); // Left
    stack.push([currI, currJ + 1]); // Right
  }

  if (currentRiverSize > 0) sizes.push(currentRiverSize);
}
