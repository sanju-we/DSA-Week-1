// Implement push and pop using two queues.
// Make a push operation costly but pop operation easy.
// Push a string "abcde" and pop one-by-one.

class StackwQueue{
  constructor(){
    this.q1 = []
    this.q2 = []
  }

  push(data){
    this.q2.push(data)

    while(this.q1.length>0){
      this.q2.push(this.q1.shift())
    }

    [this.q1,this.q2] = [this.q2,this.q1]
  }

  pop(){
    if(this.q1.length === 0){
      console.log('Stack is empty')
      return null
    }
    return this.q1.shift()
  }

  isEmpty(){
    return this.q1.length === 0
  }
}

let stack = new StackwQueue()
let str = 'ujnas'
for(let char of str){
  stack.push(char)
}
while(!stack.isEmpty()){
  console.log(stack.pop())
}