// BST

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let curr = this.root;
    let newNode = new TreeNode(val)
    if (curr === null) {
      this.root = newNode;
      return
    }
    while (true) {
      if (val < curr.val) {
        if (curr.left === null) {
          curr.left = newNode;
          break;
        } else {
          curr = curr.left;
        }
      } else {
        if (curr.right === null) {
          curr.right = newNode;
          break;
        } else {
          curr = curr.right;
        }
      }
    }
  }

  contains(val) {
    let curr = this.root;
    while (curr != null) {
      if (val < curr.val) {
        curr = curr.left;
      } else if (val > curr.val) {
        curr = curr.right
      } else {
        return true
      }
    }
    return false
  }

  // remove(val) {
  //   this.removeHelper(val, this.root, null)
  // }

  // removeHelper(val, curr, parent) {
  //   while (curr != null) {
  //     if (val < curr.val) {
  //       parent = curr;
  //       curr = curr.left;
  //     } else if (val > curr.val) {
  //       parent = curr;
  //       curr = curr.right;
  //     } else {
  //       if (curr.left != null && curr.right != null) {
  //         curr.val = this.getMin(curr.right)
  //         this.removeHelper(curr.val,curr.right,curr)
  //       } else {
  //         if (parent === null){
  //           if(curr.right === null){
  //             this.root = curr.left;
  //           }else{
  //             this.root = curr.right;
  //           }
  //         }else{
  //           if (parent.left == curr) {
  //             if (curr.right === null) {
  //               parent.left = curr.left
  //             }else{
  //               parent.left = curr.right
  //             }
  //           }else{
  //             if (curr.left === null) {
  //               parent.right = curr.left
  //             }else{
  //               parent.right = curr.right
  //             }
  //           }
  //         }
  //       }
  //       break
  //     }
  //   }
  // }

  // getMin(node){
  //   if (node.left == null) {
  //     return node.val;
  //   } else {
  //     return this.getMin(node.left)
  //   }
  // }

  remove(val) {
    this.removeHelper(val, this.root, null);
  }
  
  removeHelper(val, curr, parent) {
    while (curr != null) {
      if (val < curr.val) {
        parent = curr;
        curr = curr.left;
      } else if (val > curr.val) { 
        parent = curr;
        curr = curr.right;
      } else {
        // Node found
        if (curr.left != null && curr.right != null) {
          curr.val = this.getMin(curr.right);
          this.removeHelper(curr.val, curr.right, curr);
        } else {
          // Node with one child or no child
          let child = curr.left !== null ? curr.left : curr.right;
  
          if (parent === null) {
            this.root = child;
          } else if (parent.left === curr) {
            parent.left = child;
          } else {
            parent.right = child;
          }
        }
        break;
      }
    }
  }
  
  getMin(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node.val;
  }
  
  inOrder(){
    this.inOrderHelper(this.root)
  }
  inOrderHelper(node){
    if(node!=null){
      this.inOrderHelper(node.left)
      console.log(node.val)
      this.inOrderHelper(node.right)
    }
  }

  preOrder(){
    this.preOrderHelper(this.root)
  }
  preOrderHelper(node){
    if(node!=null){
      console.log(node.val);
      this.preOrderHelper(node.left)
      this.preOrderHelper(node.right)
    }
  }

  postOrder(){
    this.postOrderHelper(this.root)
  }
  postOrderHelper(node){
    if(node!=null){
      this.postOrderHelper(node.left)
      this.postOrderHelper(node.right)
      console.log(node.val)
    }
  }

  
// find the nearest value of n
  findClosest(target){
    let curr = this.root
    let closest = curr.val;
    while(curr){
      if(Math.abs(target-closest) > Math.abs(target-curr.val)){
        closest = curr.val;
      } 
      if(target < curr.val) curr = curr.left
      else if(target>curr.val) curr = curr.right;
      else break;
    }
    return closest
  }
}

let bst = new BST()
bst.insert(10)
bst.insert(15)
bst.insert(8)
bst.insert(7)
bst.insert(9)
bst.insert(11)
// bst.remove(9)
// console.log(bst.contains(9))
bst.inOrder() // expecting OutPut : 7,8,9,10,11,15
bst.preOrder() // expecting OutPut : 10,8,7,9,15,11
bst.postOrder() // expecting OutPut : 7,9,8,11,15,10
console.log(bst.findClosest(12))

// tree ex:-
//         10
//       /    \
//      8      11
//    /   \       \
//  7       9       15


