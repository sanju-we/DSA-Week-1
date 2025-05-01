// Insert elements until the queue is full.
// Delete a few elements and insert again (circular behavior).
// Print the queue after every operation.

class circular{
  constructor(size){
    this.queue = new Array(size)
    this.maxLength = size;
    this.front = -1;
    this.rear = -1;
  }

  enqueue(data){
    if((this.rear+1)%this.maxLength === this.front){
      console.log('Queue overflow')
      return 
    }
    if(this.front === -1) this.front = 0;
    this.rear = (this.rear+1)%this.maxLength
    this.queue[this.rear] = data;
  }

  dequeue(){
    if(this.front === -1){
      console.log('Queue is empty')
      return 
    }
    let item = this.queue[this.front]
    if(this.front === this.rear){
      this.front = this.rear = -1
    }else{
      this.front = (this.front+1)%this.maxLength
    }
    return 
  }

  peek(){
    if(this.front === -1){
      console.log('Queue is empty')
      return 
    }
    console.log(this.queue[this.front])
    return 
  }
}