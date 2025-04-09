class Node{
  constructor(data){
    this.front = data;
    this.rear = null;
  }
}

class Stack{
  constructor(){
    this.front = null;
    this.rear = null;
  }

  display(){
    let curr = this.front
    while(curr != null){
      console.log(curr.front)
      curr = curr.next
    }
  }

  enqueue(data){
    let newNode = new Node(data)
    if(this.rear == null){
      this.front = this.rear = newNode;
      return;
    }
    this.rear.next = newNode;
    this.rear = newNode
  }

  dequeue(){
    if(this.front == null){
      console.log('Empty')
      return
    }
    this.front = this.front.next;
    if(this.front == null){
      this.rear = null;
    }
  }
}

let S = new Stack()
S.enqueue(10)
S.enqueue(20)
S.enqueue(30)
S.enqueue(40)
S.enqueue(50)
S.dequeue()
S.display()