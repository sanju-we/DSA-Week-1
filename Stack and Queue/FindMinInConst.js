class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];  // Keep track of minimums
  }

  push(x) {
    this.stack.push(x);
    if (
      this.minStack.length === 0 ||
      x <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(x);
    }
  }

  pop() {
    let popped = this.stack.pop();
    if (popped === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
    return popped;
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }

  display() {
    console.log("Stack:", this.stack.join(" "));
    console.log("Min Stack:", this.minStack.join(" "));
  }
}

