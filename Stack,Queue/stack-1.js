class Stack{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.top = null;
    this.tail = null;
  }

  push(data){
    let newNode = new Stack(data)
    if(this.top == null){
      this.top = newNode;
    }else{
      newNode.next = this.top;
      this.top = newNode
    }
  }

  pop(){
    if(this.top == null){
      console.log('Stack underFolw')
      return
    }
    this.top = this.top.next
  }

  display(){
    let curr = this.top;
    while(curr != null){
      console.log(curr.data)
      curr = curr.next
    }
  }
}

let LL = new LinkedList()
LL.push(1)
LL.push(2)
LL.push(3)
LL.push(4)
LL.pop()
LL.display()