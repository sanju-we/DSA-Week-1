// ------------set-----------
// O(n)T

// ------------get-----------
// O(n)T

// ------------traverse-----------
// O(n)T

// ------------insert-in-head-----------
// O(1)T

// ------------insert-in-tail-----------
// in worst = O(n)T
// in best = O(1)T

// ------------init-----------
// O(1)ST

// ========= Node Creation ===========
class Node{
  constructor(data){
    this.data = data,
    this.next = null
  }
}

class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
  }

  insertFirst(data){
    let newNode = new Node(data)
    newNode.next = this.head;
    this.head = newNode;
  }

  insert(data) {

    let newNode = new Node(data)
    if(this.head == null){
      this.head = newNode
    }else{
      this.tail.next = newNode
    }
    this.tail = newNode
  }

  display(){
    if(this.head == null){
      console.log('empty')
      return 
    }
    let current = this.head
    let result = ''
    while(current != null){
      result += current.data + ' → '
      current = current.next;
    }
    console.log(result,"Null")
  }

  delete(data){
    let curr = this.head;
    let prev = null;
    if(curr != null && curr.data === data){
      this.head = curr.next
      return
    }

    while(curr != null && curr.data != data){
      prev = curr;
      curr = curr.next;
    }

    if(curr == this.tail){
      this.tail = prev;
      this.tail.next = null;
      return
    }
    
    if(curr == null){
      console.log('No matches found')
      return
    }

    prev.next = curr.next
  }  

  insertAfter(nextTo,data){
    let newNode = new Node(data);
    let curr = this.head;
    while(curr != null && curr.data != nextTo){
      curr = curr.next;
    }
    if(curr == null){
      console.log('No match Found')
      return
    }
    newNode.next = curr.next;
    curr.next = newNode;
  }
}

let LL = new LinkedList()
LL.display()

LL.insert(10)
LL.insert(20)
LL.insert(30)
LL.insert(60)

LL.display()

LL.insertFirst(5)
LL.insertFirst(6)

LL.insert(70)
LL.insert(80)

LL.display()
LL.delete(80)
LL.display()

LL.insertAfter(5,40)

LL.display()
