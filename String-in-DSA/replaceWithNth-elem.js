class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
  }

  insert(data){
    let newNode = new Node(data)
    if(this.head == null){
      this.head = newNode;
      this.tail = newNode
      return;
    }
    this.tail.next = newNode;
    this.tail = newNode;
  }

  display(){
    let curr = this.head;
    let result = '';
    while(curr != null){
      result += curr.data + '-'
      curr = curr.next;
    }
    console.log(result,"Null")
  }

  insertArr(arr){
    for(let val of arr){
      this.insert(val)
    }
  }

  encrypt(n){
    let curr = this.head;
    while(curr != null){
      let char = curr.data;
      if(char >= 'a' && char <= 'z'){
        curr.data = String.fromCharCode(((char.charCodeAt(0)-97+n)%26)+97)
      }
      curr = curr.next
    }
  }
}

let LL = new LinkedList()

LL.insert('s')
const arr = ['a','n','j','z']
LL.insertArr(arr)
LL.display()
LL.encrypt(2)
LL.display()