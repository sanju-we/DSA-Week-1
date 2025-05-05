class TreeNode{
  constructor(data){
    this.data = data
    this.children = []
  }

  addChild(childNode){
    this.children.push(childNode)
  }
}

function calculateHeight(node){
  if(!node) return 0
  if(node.children.length === 0) return 1;

  const childrenHeights = node.children.map((child) => calculateHeight(child))
  return 1+Math.max(...childrenHeights)
}

function calculateDepth(root , targetNode,depth = 0){
  if(!root) return -1;
  if(root === targetNode) return  depth

  for(const child of root.children){
    const d = calculateDepth(child,targetNode,depth+1);
    if(d!= -1) return d;
  }

  return  -1
}

function findDegree(node){
  if(!node) return 0
  return node.children.length
}

const root = new TreeNode(1)
const node1 = new TreeNode(2)
const node2 = new TreeNode(3)
const node3 = new TreeNode(4)
const node4 = new TreeNode(5)

root.addChild(node1)
root.addChild(node2)
node1.addChild(node3)
node1.addChild(node4)

/*
Tree structure:
        1
      /   \
     2     3
    / \
   4   5
*/

console.log(calculateHeight(root))
console.log(calculateDepth(root,node4))
console.log(findDegree(node2))