// Create a queue and enqueue nodes: 10 → 20 → 30.
// Dequeue one node and print all elements.
// Check if the queue becomes empty after dequeuing everything.

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class queueLL {
  constructor(data) {
    this.front = null;
    this.rear = null;
    this.length = 0
  }

  enqueue(data){
    let newNode = new Node(data)
    if(this.front === null){
      this.front = this.rear = newNode
      return 
    }
    if(this.front === -1){
      this.front = 0
    }
    this.rear.next = newNode;
    this.rear = newNode
    this.length++
  }

  dequeue(){
    if(this.front === null){
      console.log('Queue Underflow')
      return 
    }
    this.front = this.front.next
    if(this.front === null){
      this.rear = null
    }
    this.length--
  }

  display(){
    if(this.front ===null){
      console.log('Queue is empty')
      return 
    }
    let curr = this.front
    let result = ''
    while(curr){
      result += curr.data + '-'
      curr = curr.next
    }
    console.log(result)
    return
  }
}

let QL = new queueLL()
QL.enqueue(10)
QL.display()
QL.enqueue(20)
QL.display()
QL.enqueue(30)
QL.display()
QL.dequeue()
QL.display()