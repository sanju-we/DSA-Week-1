// Node class
class Node {
  constructor(data) {
    this.data = data; // Stores the actual value
    this.next = null; // Pointer to the next node
  }
}
// in top we are creating a model LL. each and every element contain data and a next pointer to the next value

// Linked List class
class LinkedList {
  constructor() {
    this.head = null; // Head of the list
  }

  // Insert at the beginning
  insertAtBeginning(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Insert at the end
  insertAtEnd(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let temp = this.head;
    while (temp.next) {
      temp = temp.next;
    }
    temp.next = newNode;
  }

  // Insert at a specific position
  insertAtPosition(data, position) {
    if (position === 0) {
      this.insertAtBeginning(data);
      return;
    }
    let newNode = new Node(data);
    let temp = this.head;
    for (let i = 0; i < position - 1; i++) {
      if (!temp) {
        console.log("Position out of range");
        return;
      }
      temp = temp.next;
    }
    newNode.next = temp.next;
    temp.next = newNode;
  }

  // Delete a node by value
  deleteNode(value) {
    if (!this.head) return;

    if (this.head.data === value) {
      this.head = this.head.next;
      return;
    }

    let temp = this.head;
    while (temp.next && temp.next.data !== value) {
      temp = temp.next;
    }

    if (temp.next) {
      temp.next = temp.next.next;
    } else {
      console.log("Value not found in the list");
    }
  }

  // Search for a value
  search(value) {
    let temp = this.head;
    while (temp) {
      if (temp.data === value) {
        return true;
      }
      temp = temp.next;
    }
    return false;
  }

  // Display the linked list
  display() {
    let temp = this.head;
    let result = "";
    while (temp) {
      result += temp.data + " → ";
      temp = temp.next;
    }
    console.log(result + "NULL");
  }
}

// Testing the Linked List
let ll = new LinkedList();
ll.insertAtEnd(10);
ll.insertAtEnd(20);
ll.insertAtEnd(30);
ll.insertAtBeginning(5);
ll.insertAtPosition(15, 2);

console.log("Linked List:");
ll.display();

console.log("Searching for 20:", ll.search(20));  // True
console.log("Searching for 100:", ll.search(100)); // False

ll.deleteNode(15);
console.log("After deleting 15:");
ll.display();

let node1 = new Node(10);
console.log(node1);
