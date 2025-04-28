// Node class
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Stack class using Linked List
class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  // Push: Add item to the top
  push(data) {
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
  }

  // Pop: Remove item from the top
  pop() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return null;
    }
    const popped = this.top.data;
    this.top = this.top.next;
    this.length--;
    return popped;
  }

  // Peek: View top item
  peek() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return null;
    }
    return this.top.data;
  }

  // Check if stack is empty
  isEmpty() {
    return this.top === null;
  }

  // Size of the stack
  size() {
    return this.length;
  }

  // Display stack elements
  display() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return;
    }
    let current = this.top;
    let stackStr = '';
    while (current) {
      stackStr += current.data + ' ';
      current = current.next;
    }
    console.log("Stack elements:", stackStr.trim());
  }
}
