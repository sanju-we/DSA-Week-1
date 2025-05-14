//Basic Tree
class treeNode{
  constructor(val){
    this.val = val;
    this.children = []
  }

  addChildren(childNode){
    this.children.push(childNode)
  }
}

let root = new treeNode('A')
let node1 = new treeNode('B')
let node2 = new treeNode('C')

root.addChildren(node1)
root.addChildren(node2)

node1.addChildren(new treeNode('D'))
node1.addChildren(new treeNode('E'))

function getHeight(node) {
  if (!node || node.children.length === 0) return 0;
  let heights = node.children.map(getHeight);
  return 1 + Math.max(...heights);
}

function getDepth(root, target, depth = 0) {
  if (!root) return -1;
  if (root === target) return depth;
  for (const child of root.children) {
    const d = getDepth(child, target, depth + 1);
    if (d !== -1) return d;
  }
  return -1;
}

function traversTree(Node){
  console.log(Node.val)
  for(let child of Node.children){
    traversTree(child)
  }
}

function degree(node){
  return node.children.length
}


console.log(getHeight(root))
console.log(getDepth(root,node2))
console.log(degree(node2))

traversTree(root)
