class CircularQueue {
  constructor(maxLength) {
    this.queue = new Array(maxLength);
    this.maxLength = maxLength;
    this.front = -1;
    this.rear = -1;
  }

  // Enqueue operation
  enqueue(value) {
    if ((this.rear + 1) % this.maxLength === this.front) {
      console.log("Queue is Full. Cannot add:", value);
      return;
    }
    if (this.front === -1) {
      this.front = 0;
    }
    this.rear = (this.rear + 1) % this.maxLength;
    this.queue[this.rear] = value;
    console.log("Inserted:", value);
  }

  // Dequeue operation
  dequeue() {
    if (this.front === -1) {
      console.log("Queue is Empty. Cannot dequeue.");
      return;
    }
    const value = this.queue[this.front];
    if (this.front === this.rear) {
      // only one element was there
      this.front = this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.maxLength;
    }
    console.log("Removed:", value);
    return value;
  }

  // Peek operation
  peek() {
    if (this.front === -1) {
      console.log("Queue is Empty.");
      return null;
    }
    return this.queue[this.front];
  }

  // Display operation
  display() {
    if (this.front === -1) {
      console.log("Queue is Empty.");
      return;
    }
    let result = [];
    let i = this.front;
    while (true) {
      result.push(this.queue[i]);
      if (i === this.rear) break;
      i = (i + 1) % this.maxLength;
    }
    console.log("Queue:", result.join(" -> "));
  }
}
