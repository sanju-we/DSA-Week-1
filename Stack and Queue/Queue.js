class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }
    return this.items.shift();
  }

  peek() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }
    return this.items[0];
  }

  display() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }
    console.log("Queue elements:", this.items.join(" -> "));
  }

  isEmpty() {
    return this.items.length === 0;
  }
}
