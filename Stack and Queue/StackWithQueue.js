class Stack {
  constructor() {
    this.q1 = [];
    this.q2 = [];
  }

  push(x) {
    this.q2.push(x);
    while (this.q1.length) {
      this.q2.push(this.q1.shift());
    }

    // Swap queues
    [this.q1, this.q2] = [this.q2, this.q1];
  }

  pop() {
    if (this.q1.length === 0) return null;
    return this.q1.shift();
  }

  peek() {
    return this.q1.length ? this.q1[0] : null;
  }

  isEmpty() {
    return this.q1.length === 0;
  }
}

const s = new Stack();
s.push(10);
s.push(20);
s.push(30);
console.log(s.peek());
console.log(s.pop()); 
console.log(s.pop()); 
