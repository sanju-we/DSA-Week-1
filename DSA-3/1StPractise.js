// tree 
// BST
// MinHEAP
// Graph
// Trie (Prefixes)

class tree {
  constructor(data) {
    this.data = data;
    this.children = []
  }

  addChild(node) {
    this.children.push(node)
  }
}

function getHeight(node) {
  if (!node || node.children.length === 0) return 0
  let height = node.children.map(getHeight)
  return 1 + Math.max(...height)
}

function getDepth(root, target, depth = 0) {
  if (!root) return -1
  if (root == target) return depth;
  for (let child of root.children) {
    let d = getDepth(child, target, depth)
    if (d != -1) return d;
  }
  return -1
}

function Traverse(node) {
  console.log(node.data)
  for (let child of node.children) {
    Traverse(child)
  }
}

function degree(node) {
  return node.children.length
}

// let root = new tree(10)
// let node1 = new tree(20)
// let node2 = new tree(30)
// root.addChild(node1)
// root.addChild(node2)
// node1.addChild(new tree(25))
// Traverse(root)
// console.log(degree(root))

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let newNode = new Node(data)
    if (this.root === null) {
      this.root = newNode
      return
    }
    let curr = this.root
    while (true) {
      if (data < curr.data) {
        if (curr.left === null) {
          curr.left = newNode;
          break
        } else {
          curr = curr.left
        }
      } else {
        if (curr.right === null) {
          curr.right = newNode;
          break
        } else {
          curr = curr.right;
        }
      }
    }
  }

  kthSmall(k) {
    let count = 0;
    let result = null;

    const kthHelper = (curr) => {
      if (curr == null || result != null) return;

      kthHelper(curr.left); 

      count++;
      if (count === k) {
        result = curr.data; 
        return;
      }

      kthHelper(curr.right); 
    };

    kthHelper(this.root);
    return result;
  }

  constains(data) {
    let curr = this.root;
    while (curr) {
      if (data < curr.data) {
        curr = curr.left
      } else if (data < curr.data) {
        curr = curr.right;
      } else {
        return true
      }
    }
    return false
  }

  remove(val) {
    this.removeHelper(val, this.root, null)
  }

  removeHelper(val, curr, parent) {
    while (curr) {
      if (val < curr.data) {
        parent = curr
        curr = curr.left;
      } else if (val > curr.data) {
        parent = curr
        curr = curr.right
      } else {
        if (curr.left != null && curr.right != null) {
          curr.data = this.getMin(curr.right)
          this.removeHelper(curr.data, curr.right, curr)
        } else {
          let child = curr.left != null ? curr.left : curr.right
          if (parent === null) this.root = child;
          else if (parent.left === curr) parent.left = child;
          else parent.right = child
        }
        break;
      }
    }
  }

  getMin(node) {
    while (node.left != null) {
      node = node.left
    }
    return node.data
  }

  inOrder() {
    this.inOrderHelper(this.root)
  }

  inOrderHelper(curr) {
    if (curr != null) {
      this.inOrderHelper(curr.left)
      console.log(curr.data)
      this.inOrderHelper(curr.right)
    }
  }

  preOrder() {
    this.preOrderHelper(this.root)
  }

  preOrderHelper(curr) {
    if (curr != null) {
      console.log(curr.data)
      this.preOrderHelper(curr.left)
      this.preOrderHelper(curr.right)
    }
  }

  postOrder() {
    this.postOrderHelper(this.root)
  }

  postOrderHelper(curr) {
    if (curr != null) {
      this.postOrderHelper(curr.left)
      this.postOrderHelper(curr.right)
      console.log(curr.data)
    }
  }
}

let bst = new BST()
bst.insert(1)
bst.insert(2)
bst.insert(3)
bst.insert(5)
bst.insert(7)
bst.insert(8)
bst.insert(9)
bst.insert(13)
bst.insert(11)
bst.insert(10)
bst.insert(12)
bst.insert(14)
bst.insert(16)
bst.insert(18)
console.log(bst.kthSmall(1))
// bst.inOrder()
// bst.remove(1)
// bst.inOrder()

class minHeap {
  constructor() {
    this.heap = []
  }

  getParent(i) { return Math.floor((i - 1) / 2) }
  getLeft(i) { return 2 * i + 1 }
  getRight(i) { return 2 * i + 2 }

  buildUp(arr) {
    this.heap = arr;
    for (let i = this.getParent(this.heap.length - 1); i >= 0; i--) {
      this.shiftDown(i)
    }
  }

  shiftDown(currIndex) {
    let endIndex = this.heap.length - 1;
    let leftIndex = this.getLeft(currIndex)
    while (leftIndex <= endIndex) {
      let rightIndex = this.getRight(currIndex);
      let indexToShift;
      if (rightIndex <= endIndex && this.heap[rightIndex] < this.heap[leftIndex]) {
        indexToShift = rightIndex
      } else {
        indexToShift = leftIndex
      }
      if (this.heap[currIndex] > this.heap[indexToShift]) {
        [this.heap[currIndex], this.heap[indexToShift]] = [this.heap[indexToShift], this.heap[currIndex]]
        currIndex = indexToShift
        leftIndex = this.getLeft(currIndex)
      } else {
        return
      }
    }
  }

  remove() {
    if (this.heap.length === 0) return null;
    let removeValue = this.heap[0]
    let end = this.heap.pop()
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.shiftDown(0)
    }
    return removeValue
  }

  insert(val) {
    this.heap.push(val)
    this.shiftUp(this.heap.length - 1)
  }

  shiftUp(currIndex) {
    while (currIndex > 0) {
      let parent = this.getParent(currIndex)
      if (currIndex > 0 && this.heap[parent] > this.heap[currIndex]) {
        [this.heap[parent], this.heap[currIndex]] = [this.heap[currIndex], this.heap[parent]]
        currIndex = parent
      } else {
        break;
      }
    }
  }

  peek() {
    if (this.heap.length === 0) {
      console.log('Heap is empty')
      return
    }
    console.log(this.heap[0])
  }

  display() {
    console.log(this.heap)
  }
}

// let arr = [9, 5, 6, 2, 1]
// let heap = new minHeap()
// heap.buildUp(arr)
// heap.display()
// heap.peek()
// heap.remove()
// heap.peek()
// heap.display()



class Graph {
  constructor() {
    this.map = {}
  }

  addVertex(data) {
    if (!this.map[data]) {
      this.map[data] = []
    }
  }

  insert(vertex, edge, bidirection = false) {
    this.addVertex(vertex)
    this.addVertex(edge)

    this.map[vertex].push(edge)
    if (bidirection) {
      this.map[edge].push(vertex)
    }
  }

  remove(vertex) {
    if (!this.map[vertex]) return;

    for (let adj of this.map[vertex]) {
      this.map[adj] = this.map[adj].filter(v => v !== vertex);
    }

    delete this.map[vertex];
  }

  display() {
    for (let vertex in this.map) {
      console.log(vertex + '->' + this.map[vertex].join(', '))
    }
  }

  dfs(start) {
    const visited = new Set();
    this._dfsHelper(start, visited);
  }

  _dfsHelper(vertex, visited) {
    if (visited.has(vertex)) return;

    visited.add(vertex);
    console.log(vertex);

    for (let neighbor of this.map[vertex]) {
      if (!visited.has(neighbor)) {
        this._dfsHelper(neighbor, visited);
      }
    }
  }

  bfs(start) {
    const visited = new Set();
    const queue = [start];
    visited.add(start);
    
    while (queue.length > 0) {
      const vertex = queue.shift();
      console.log(vertex);
      
      for (let neighbor of this.map[vertex]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }
}

class TrieNode{
  constructor(){
    this.children = {};
    this.endOfWord = false
  }
}

class Trie{
  constructor(){
    this.root = new TrieNode()
  }

  insert(word){
    let curr = this.root
    for(let char of word){
      if(!curr.children[char]){
        curr.children[char] = new TrieNode()
      }
      curr = curr.children[char]
    }
    curr.endOfWord = true
  }

  search(word){
    let curr = this.root
    for(let char of word){
      if(!curr.children[char]) return false
      curr = curr.children[char]
    }
    return curr.endOfWord
  }

  longestPath() {
    let longest = '';

    const dfs = (node, path) => {
      if (node.endOfWord && path.length > longest.length) {
        longest = path;
      }

      for (let char in node.children) {
        dfs(node.children[char], path + char);
      }
    };

    dfs(this.root, '');
    return longest;
  }

  startWith(prefix){
    let curr = this.root;
    for(let char of prefix){
      if(!curr.children[char]) return false
      curr = curr.children[char]
    }
    return true
  }

  autoCompletion(prefix){
    let curr = this.root;
    for(let char of prefix){
      if(!curr.children[char]) return []
      curr = curr.children[char]
    }
    let result = []
    this.dfs(curr,prefix,result)
    return result
  }

  dfs(node,prefix,result){
    if(node.endOfWord){
      result.push(prefix)
    }
    for(let cher in node.children){
      this.dfs(node.children[cher],prefix+cher,result)
    }
  }
}

let trie = new Trie()
trie.insert('sanju')
trie.insert('sanjay')
trie.insert('sarooj kumar')
console.log(trie.search('sanju'))
console.log(trie.search('sanju'))
console.log(trie.startWith('s'))
console.log(trie.autoCompletion('s'))
console.log(trie.longestPath())