class Node {
  constructor(data) {
    (this.data = data), (this.next = null);
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertData(data) {
    let newNode = new Node(data);
    if (this.head == null) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }

  display() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.data + " → ";
      current = current.next;
    }
    console.log(result, "Null");
  }

  delete(data) {
    let current = this.head;
    if (current.data == data) {
      current = current.next;
      return;
    }

    while (current.data !== data) {
      current = current.next;
    }
    current = current.next;
  }
}

let LL = new LinkedList();
LL.insertData(10);
LL.insertData(20);
LL.display();
LL.delete(10);
LL.insertData(30);
LL.display();
