class Node{
  constructor(data){
    this.data = data,
    this.next = null
  }
}

class LinkedList{
  constructor(){
    this.head = null
  }

  insertBeggin(data){
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  display(){
    let current = this.head
    let result = ''
    while(current){
      result += current.data + " → "
      current = current.next
    }
    console.log(result,"Null")
  }
}

let LL = new LinkedList()
LL.insertBeggin(20)
LL.insertBeggin(10)
LL.display()

