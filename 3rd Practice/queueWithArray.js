// Enqueue 5 numbers, dequeue 2 numbers.
// Peek the front after each enqueue.
// Check overflow when array is full.

class QueueArray{
  constructor(data){
    this.queue = new Array(data)
    this.maxLength = data
    this.front = -1
    this.rear = -1
  }
  
  enqueue(data){
    if(this.rear === this.maxLength-1){
      console.log('Stack overflow') 
      return
    }
    if(this.front === -1) this.front = 0
    this.rear++
    this.queue[this.rear] = data
  }

  dequeue(){
    if(this.isEmpty()){
      console.log('Stack underflow')
      return 
    }
    let popped = this.queue.shift()
    this.rear--
    return 
  }

  isEmpty(){
    return this.queue.length === 0
  }

  peek(){
    if(this.queue.length === 0){
      console.log('Stack is empty')
      return 
    }
    console.log(this.queue[this.front])
    return 
  }
}

let QA = new QueueArray(5)
QA.enqueue(10)
QA.peek()
QA.enqueue(20)
QA.peek()
QA.enqueue(30)
QA.peek()
QA.enqueue(40)
QA.peek()
QA.enqueue(50)
QA.peek()
QA.dequeue()
QA.dequeue()
QA.dequeue()
QA.dequeue()
QA.enqueue(60)
QA.peek()
QA.dequeue()
QA.enqueue(70)
QA.dequeue()
QA.peek()
QA.dequeue()
QA.dequeue()