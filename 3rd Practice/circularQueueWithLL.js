class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularQueue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  enqueue(data) {
    let newNode = new Node(data)
    if (this.front === null) {
      this.front = this.rear= newNode
      this.rear.next = this.front
    }else{
      this.rear.next = newNode;
      this.rear = newNode;
      this.rear.next = this.front;
    }
    this.length++
  }

  dequeue(){
    if(this.front === null){
      console.log('Queue underflow')
      return 
    }
    this.front = this.front.next
    this.rear.next = this.front
    return 
  }

  peek(){
    if(this.front === null){
      console.log('Queue is empty')
      return 
    }
    console.log(this.front.data)
  }

  display(){
    if(this.front === null){
      console.log('Queue is empty')
      return 
    }
    let curr = this.front
    let result = ''
    do{
      result+=curr.data + '-';
      curr = curr.next;
    }while(curr != this.front)
    console.log(result)
  }
}

let CQ = new CircularQueue()
CQ.enqueue(10)
CQ.enqueue(20)
CQ.enqueue(30)
CQ.enqueue(40)
CQ.peek()
CQ.display()
CQ.dequeue()
CQ.display()
