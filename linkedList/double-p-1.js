class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor(data) {
    this.data = data
    this.prev = null
    this.next = null
  }

  Insert(data){
    let newNode = new Node(data)

    if(this.head == null){
      this.head = newNode
    }else{
      this.tail.next = newNode;
      newNode.prev = this.tail
    }
    this.tail = newNode
  }

  insertFirst(data){
    let newNode = new Node(data)
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode
  }

  insertAfter(nextTo,data){
    let newNode = new Node(data)
    let curr = this.head;
    while(curr != null && curr.data != nextTo){
      curr = curr.next
    }
    if(curr == null){
      console.log('No matches found')
      return;
    }
    newNode.next = curr.next;
    curr.next = newNode
    newNode.prev = curr
  }

  insertBefore(beforTo,data){
    let newNode = new Node(data);
    let curr = this.head
    while(curr != null && curr.data != beforTo){
      curr = curr.next;
    }
    if(curr == null){
      console.log('No matches found')
      return
    }
    newNode.prev = curr.prev;
    newNode.next = curr;
    if(curr.prev != null){
      curr.prev.next = newNode;
    }else{
      this.head = newNode
    }
    curr.prev = newNode;
  }

  display(){
    let temp = this.head
    let result = ""
    while(temp !=null){
      result+= temp.data + ' - '
      temp = temp.next
    }
    console.log(result,"Null")
  }

  displayReverse(){
    let temp = this.tail
    while(temp !=null){
      console.log(temp.data)
      temp = temp.prev
    }
  }
}

let LL = new LinkedList()
LL.Insert(10)
LL.Insert(20)
LL.Insert(30)
LL.insertFirst(5)
LL.insertAfter(5,6)
LL.insertBefore(6,8)
LL.display()
// LL.displayReverse()