//
class FixedStack {
  constructor(capacity) {
    this.capacity = capacity;
    this.items = new Array(capacity);
    this.top = -1;
  }

  // Push an element to the top of the stack
  push(element) {
    if (this.top === this.capacity - 1) {
      console.log("Stack Overflow - Cannot add more elements");
      return;
    }
    this.top++;
    this.items[this.top] = element;
  }

  // Pop an element from the top of the stack
  pop() {
    if (this.top === -1) {
      console.log("Stack Underflow - No elements to pop");
      return null;
    }
    const popped = this.items[this.top];
    this.top--;
    return popped;
  }

  // Peek at the top element without removing it
  peek() {
    if (this.top === -1) return null;
    return this.items[this.top];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.top === -1;
  }

  // Check if the stack is full
  isFull() {
    return this.top === this.capacity - 1;
  }

  // Display stack elements
  display() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return;
    }
    console.log("Stack contents:");
    for (let i = this.top; i >= 0; i--) {
      console.log(this.items[i]);
    }
  }
}


//Dynamic Stack
class Stack {
  constructor() {
    this.items = []; // internal array to store elements
  }

  // Push an element to the top of the stack
  push(element) {
    this.items.push(element);
  }

  // Pop an element from the top of the stack
  pop() {
    if (this.isEmpty()) {
      console.log("Stack Underflow - No elements to pop");
      return null;
    }
    return this.items.pop();
  }

  // Peek at the top element without removing it
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the size of the stack
  size() {
    return this.items.length;
  }

  // Display all elements in the stack
  display() {
    console.log("Stack contents:", this.items.join(" <- "));
  }
}
