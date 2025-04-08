class Node {
  constructor(data) {
    this.data = data;
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insert(data) {
    let newNode = new Node(data);
    if (this.head == null) {
      this.head = newNode;
      return 
    };
    let curent = this.head
    while (curent.next !== null) {
      curent = curent.next
    }
    curent.next = newNode
  }

  display(){
    let current = this.head
    let result = ""
    while(current){
      result+= current.data + " → "
      current = current.next
    }
    console.log(result+"Null")
  }
}

let LL = new LinkedList();
LL.insert(12);
LL.insert(13);
LL.insert(14);
LL.insert(15);
LL.display()