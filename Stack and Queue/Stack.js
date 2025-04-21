class Stack{
  constructor(){
    this.items = [];
  }
  push(data){
    this.items.push(data);
  }
  pop(){
    if(this.items.length === 0) return null;
    return this.items.pop();
  }
  isEmpty(){
    return this.items.length === 0;
  }
  peek(){
    if(this.items.length === 0) return null;
    return this.items[this.items.length-1];
  }
  size(){
    return this.items.length;
  }
  clear(){
    this.items = [];
  }
  print(){
    console.log(this.items.join(' '));
  }
}

let stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
let c = stack.pop()
console.log(c)
console.log(stack.peek())
stack.print()
