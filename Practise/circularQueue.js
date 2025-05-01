class circularQueue{
  constructur(data){
    this.maxLength = data;
    this.queue = new Array(data)
    this.front =-1
    this.rear =-1
  }

  enqueue(data){
    if((this.rear+1)%this.maxLength === this.front){
      console.log('Queue is full')
      return;
    }
    if(this.front === -1){
      this.front = 0
    }
    this.rear = (this.rear+1)%this.maxLength
    this.queue[this.rear] = data;
  }

  dequeue(){
    if(this.front === -1){
      console.log("Queue is empty")
      return
    }
    let value = this.queue[this.front]
    if((this.front+1)%this.maxLength === this.rear){
      this.front = this.rear = -1
    }else{
      this.front = (this.front+1)%this.maxLength
    }
    console.log('Dequeued item = ',value)
  }

  peek(){
    if(this.front === -1){
      console.log("Queue is empty")
      return
    }
    console.log(this.queue[this.front])
  }
}