class QueueWithStacks {
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }

  // ✅ Enqueue: Push to inStack
  enqueue(value) {
    this.inStack.push(value);
  }

  // ✅ Dequeue: Pop from outStack, or transfer from inStack
  dequeue() {
    if (this.outStack.length === 0) {
      while (this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop());
      }
    }

    if (this.outStack.length === 0) {
      console.log("Queue is empty");
      return null;
    }

    return this.outStack.pop();
  }

  // ✅ Peek: See front of queue
  peek() {
    if (this.outStack.length === 0) {
      while (this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop());
      }
    }

    return this.outStack.length === 0 ? null : this.outStack[this.outStack.length - 1];
  }

  // ✅ Display: All elements in queue order
  display() {
    const temp = [...this.outStack].reverse().concat(this.inStack);
    console.log("Queue:", temp.join(" -> "));
  }

  // ✅ isEmpty: True if both stacks are empty
  isEmpty() {
    return this.inStack.length === 0 && this.outStack.length === 0;
  }
}
