class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insert(data) {
    let newNode = new Node(data)
    let temp = this.head;
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
      return
    } else {
      this.tail.next = newNode;
      this.tail = newNode
    }
  }

  findMidd() {
    let slow = this.head;
    let fast = this.head;
    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    console.log(slow.data)
  }

  removeDuplicate() {
    let temp = this.head
    while (temp != null && temp.next != null) {
      if (temp.data == temp.next.data) {
        temp.next = temp.next.next;
        if (temp.next == null) {
          this.tail = temp;
        }
      } else {
        temp = temp.next
      }
    }
  }

  mergeTwoLists(list1, list2) {
    for (let val of list1) {
      for (let char of list2) {
        if (val == char) {

        }
      }
    }
  };

  display() {
    let temp = this.head
    while (temp) {
      console.log(temp.data)
      temp = temp.next
    }
  }
}

let LL = new LinkedList()

LL.insert(10)
LL.insert(20)
LL.insert(20)
LL.insert(30)
LL.insert(20)
LL.insert(50)
LL.insert(90)
// LL.insert(90)
// LL.insert(90)
LL.findMidd()
LL.removeDuplicate()
LL.display()