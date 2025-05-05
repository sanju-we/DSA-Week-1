class TreeNode{
  constructor(data){
    this.data = data
    this.children = []
  }

  addChild(childNode){
    this.children.push(childNode)
  }
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