// Push 5 elements, then pop 2 elements.
class Stack{
  constructor(data){
    this.max = data;
    this.stack = new Array(data)
    this.top = -1
  }

  push(data){
    if(this.top === this.max-1){
      console.log('Stack overflow')
      return
    }
    this.stack.push(data)
    this.top+=1
  }

  pop(){
    if(this.top === -1){
      console.log('Stack underflow')
      return 
    }
    let popped = this.stack[this.top]
    this.stack.pop()
    this.top--
  }

  display(){
    console.log(this.stack.reverse().filter((x)=>x!=undefined).join('->'))
  }
}

let stack = new Stack(5)
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)
stack.pop()
stack.pop()
stack.pop()
stack.display()