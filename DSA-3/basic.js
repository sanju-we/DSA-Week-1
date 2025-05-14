

class BTNode{
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null
  }
}

function inOrder(node){
  if(!node) return ;
  inOrder(node.left)
  console.log(node.val)
  inOrder(node.right)
}

function preOrder(node){
  if(!node) return ;
  console.log(node.val)
  preOrder(node.left)
  preOrder(node.right)
}

function postOrder(node){
  if(!node) return ;
  postOrder(node.left)
  postOrder(node.right)
  console.log(node.val)
}

function isComplete(root) {
  if (!root) return true;

  let queue = [root];
  let end = false;

  while (queue.length) {
    let node = queue.shift();
    if (!node) {
      end = true;
    } else {
      if (end) return false;
      queue.push(node.left);
      queue.push(node.right);
    }
  }
  return true;
}

function isFull(node) {
  if (!node) return true;
  if (!node.left && !node.right) return true;
  if (node.left && node.right)
    return isFull(node.left) && isFull(node.right);
  return false;
}

function getDepthForPerfect(node) {
  let d = 0;
  while (node) {
    d++;
    node = node.left;
  }
  return d;
}

function isPerfect(node, depth = 0, level = 0) {
  if (!node) return true;
  if (!node.left && !node.right) return depth === level + 1;
  if (!node.left || !node.right) return false;
  return (
    isPerfect(node.left, depth, level + 1) &&
    isPerfect(node.right, depth, level + 1)
  );
}


let rootNode =new BTNode(5)
rootNode.left = new BTNode(4)
rootNode.right = new BTNode(6)
rootNode.left.left = new BTNode(3)
rootNode.left.right = new BTNode(2)

inOrder(rootNode)
preOrder(rootNode)
postOrder(rootNode)
console.log(isComplete(rootNode))
console.log(isFull(rootNode))

// heap

function heapify(arr, n, i) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];  // Swap
    heapify(arr, n, largest);  // Heapify the affected subtree
  }
}

function heapSort(arr) {
  let n = arr.length;

  // Step 1: Build Max-Heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // Step 2: Extract elements from heap
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]]; // Swap max to end
    heapify(arr, i, 0); // Heapify root elyement
  }

  return arr;
}

const arr = [12, 11, 13, 5, 6, 7];
console.log("Sorted:", heapSort(arr));  // Output: [5, 6, 7, 11, 12, 13]




class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let ch of word) {
      if (!node.children[ch]) {
        node.children[ch] = new TrieNode();
      }
      node = node.children[ch];
    }
    node.isEndOfWord = true;
  }

  search(word) {
    let node = this.root;
    for (let ch of word) {
      if (!node.children[ch]) return false;
      node = node.children[ch];
    }
    return node.isEndOfWord;
  }

  delete(word) {
    const deleteRec = (node, word, index) => {
      if (index === word.length) {
        if (!node.isEndOfWord) return false;
        node.isEndOfWord = false;
        return Object.keys(node.children).length === 0;
      }
      const ch = word[index];
      if (!node.children[ch]) return false;
      const shouldDeleteChild = deleteRec(node.children[ch], word, index + 1);
      if (shouldDeleteChild) {
        delete node.children[ch];
        return Object.keys(node.children).length === 0 && !node.isEndOfWord;
      }
      return false;
    };
    deleteRec(this.root, word, 0);
  }
}

// Usage
const trie = new Trie();
trie.insert("cat");
trie.insert("can");
trie.insert("dog");

console.log(trie.search("cat")); // true
console.log(trie.search("car")); // false
trie.delete("cat");
console.log(trie.search("cat")); // false
