class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  // ➤ Insertion
  insert(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (value === current.value) return; // no duplicates
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  // ➤ Search (contains)
  contains(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      current = value < current.value ? current.left : current.right;
    }
    return false;
  }

  // ➤ Deletion
  delete(value, node = this.root, parent = null) {
    if (!node) return;

    if (value < node.value) {
      this.delete(value, node.left, node);
    } else if (value > node.value) {
      this.delete(value, node.right, node);
    } else {
      // Node found

      // Case 1: Node with 2 children
      if (node.left && node.right) {
        let successor = node.right;
        while (successor.left) successor = successor.left;
        node.value = successor.value;
        this.delete(successor.value, node.right, node);
      }
      // Case 2 & 3: One child or no child
      else {
        const child = node.left || node.right;
        if (!parent) {
          this.root = child;
        } else if (parent.left === node) {
          parent.left = child;
        } else {
          parent.right = child;
        }
      }
    }
  }
}
