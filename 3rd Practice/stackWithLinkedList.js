//Push 5 nodes into stack.
// Pop 3 nodes and print the stack.
// Peek the top without popping.

class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.top = null
  }

  push(data){
    let newNode = new Node(data)
    if(this.top === null){
      this.top = newNode
      return 
    }
    newNode.next = this.top
    this.top = newNode
    return 
  }

  pop(){
    if(this.top === null){
      console.log('Stack underflow')
      return
    }
    this.top = this.top.next;
    return 
  }

  peek(){
    if(this.top === null){
      console.log('Stack is empty')
      return 
    }
    console.log(this.top.data)
  }

  display(){
    let curr = this.top
    let result = ''
    while(curr){
      result += curr.data + '-'
      curr = curr.next
    }
    console.log(result)
  }
}

let stack  = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.peek()
stack.display()