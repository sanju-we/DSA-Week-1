// Implement a queue using two stacks.
// Enqueue 4 elements, dequeue 2 elements.
// Try to print elements left in the queue.

class queue{
  constructor(){
    this.s1 = []
    this.s2 = []
  }

  enqueue(data){
    this.s1.push(data)
  }

  dequeue(){
    if(this.s1.length === 0){
      console.log('Queue is empty')
      return 
    }
    while(this.s1.length>1){
      this.s2.push(this.s1.pop())
    }
    this.s1.pop()
    while(this.s2.length!=0){
      this.s1.push(this.s2.pop())
    }
  }

  display(){
    if(this.s1.length ===0){
      console.log('Queue is empty')
      return
    }
    console.log(this.s1.join('-'))
  }
}

let Q = new queue
Q.enqueue(10)
Q.enqueue(20)
Q.enqueue(30)
Q.dequeue()
Q.dequeue()
Q.display()
Q.dequeue()
Q.display()
Q.dequeue()
Q.display()