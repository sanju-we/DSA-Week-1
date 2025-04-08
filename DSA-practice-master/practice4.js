class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1].push(vertex2);
    }
    if (this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2].push(vertex1);
    }
  }
  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (v) => v !== vertex2
      );
    }
    if (this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (v) => v !== vertex1
      );
    }
  }
  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      for (let neighbor of this.adjacencyList) {
        this.adjacencyList[neighbor] = this.adjacencyList[neighbor].filter(
          (v) => v !== vertex
        );
      }
      delete this.adjacencyList[vertex];
    }
  }
  // A
  // B
  // C
  // F
  // E
  // D

  // SET : A,B,C,F,E,D
  // LOG : A,B,C,F,E,D
  DFS(start, visited = new Set()) {
    if (visited.has(start)) return null;
    visited.add(start);
    console.log(start);
    for (let neighbor of this.adjacencyList[start]) {
      if (!visited.has(neighbor)) {
        this.DFS(neighbor, visited);
      }
    }
  }
  //    D
  //    F
  //    A
  //    B
  //    E
  //    C
  // SET : D,F,A,B,E,C
  // Q : [C]
  // LOG : D,F
  BFS(start) {
    let visited = new Set();
    visited.add(start);
    const queue = [start];
    while (queue.length > 0) {
      const node = queue.shift(); // B
      console.log(node);
      for (let neighbor of this.adjacencyList[node]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }
  //
  // START = A , END = F 
  // PATH : 
  // QUEUE : [[A,B,F]]
  // SET : A,B,C,D,F
  findShortestPath(start, end) {
    const visited = new Set();
    const queue = [[start]];
    visited.add(start);
    while (queue.length > 0) {
      const path = queue.shift(); // [A,B,F]
      const node = path[path.length - 1]; // F
      if (node === end) {
        return path;
      }
      for (let neighbor of this.adjacencyList[node]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push([...path, neighbor]);
        }
      }
    }
  }
  // START = A , END = F 
  // PATH : 
  // QUEUE : '[[A,C],[A,D],[A,B,F]]
  // SET : 
  findAllPath(start, end) {
    const queue = [[start]];
    const result = [];
    while (queue.length > 0) {
      const path = queue.shift(); // [A,C]
      const node = path[path.length - 1]; // C
      if (node === end) {
        result.push(path);
      }
      for (let neighbor of this.adjacencyList[node]) {
        if (!path.includes(neighbor)) {
          queue.push([...path, neighbor]);
        }
      }
    }
    return result;
  }
  findCycle(start, visited = new Set(), stack = new Set()) {
    if (stack.has(start)) return true;
    if (visited.has(start)) return false;
    stack.add(start);
    visited.add(start);
    for (let neighbor of this.adjacencyList[start]) {
      if (this.findCycle(neighbor, visited, stack)) {
        return true;
      }
    }
    stack.delete(start);
    return false;
  }
}

const newGraph = new Graph();

newGraph.addVertex("A");
newGraph.addVertex("B");
newGraph.addVertex("C");
newGraph.addVertex("D");
newGraph.addVertex("E");
newGraph.addVertex("F");

newGraph.addEdge("A", "B");
newGraph.addEdge("C", "A");
newGraph.addEdge("C", "B");
newGraph.addEdge("B", "F");
newGraph.addEdge("E", "F");
newGraph.addEdge("F", "D");
newGraph.addEdge("A", "D");

console.log(newGraph);
// newGraph.DFS('A');
// newGraph.BFS('D');

console.log("");
// console.log(newGraph.findShortestPath("A", "F"));
// newGraph.findShortestPath("A", "F")
console.log(newGraph.findAllPath('A', 'F'));
// console.log(newGraph.findCycle('A'));

//----------------------------------------------------------------------------tree practice --------------------------------------
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

}

class Tree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data)
    if (!this.root) this.root = newNode;
    else this.insertNode(this.root, newNode);
  }
  insertNode(root, newNode) {
    if (newNode.data < root.data) {
      if (root.left === null) root.left = newNode;
      else this.insertNode(root.left, newNode);
    } else {
      if (root.right === null) root.right = newNode;
      else this.insertNode(root.right, newNode);
    }

  }

  search(root, target) {
    if (!root) {
      return false;
    } else {
      if (target === root.data) return true;
      else if (target < root.data) return this.search(root.left, target);
      else return this.search(root.right, target);
    }
  }

  min(root){
    if(!root.left) return root.data;
    else return this.min(root.left)
  }

  delete(target){
    this.root = this.deleteNode(this.root,target);
  }
  deleteNode(root,target){
    if(root === null) return root;
    if(target < root.data){
       root.left = this.deleteNode(root.left, target);
    }else if(target > root.data){
       root.right = this.deleteNode(root.right, target);
    }else{
      if(!root.left) return root.right;
      else if(!root.right) return root.left;
      root.data = this.min(root.right);
      root.right = this.deleteNode(root.right,root.data)
    }
    return root;
  }

  preorder(root){
    if(root){
      console.log(root.data);
      this.preorder(root.left);
      this.preorder(root.right);
    }
  }

  inorder(root){
    if(root){
      this.inorder(root.left);
      console.log(root.data);
      this.inorder(root.right);
    }
  }
  
  postOrder(root){
    if(root){
      this.postOrder(root.left)
      this.postOrder(root.right)
      console.log(root.data);
    }
  }

  // BSF
  levelOrder(){
    const queue = [];
    queue.push(this.root);
    while(queue.length){
      let current = queue.shift();
      console.log(current.data);

      if(current.left) queue.push(current.left);
      if(current.right) queue.push(current.right);
    }
  }

  DSF(start,visited = new Set()){
    if(visited.has(start)) return null;
    visited.has(start);
    console.log(start)
    for(let neighbor of adjacencyList[start]){
      if(!visited.has(neighbor)) this.DSF(neighbor, visited);
    }
  }


  BSF(start){
    let visited = new Set()
    visited.add(start)
    const queue = [start];
    while(queue.length > 0){
      let node = queue.shift()
      console.log(node);
      for(let neighbor of adjacencyList[node]){
        if(!visited.has(neighbor)){
          visited.add(neighbor)
          queue.push(neighbor)
        }
      }
    }
  }


}