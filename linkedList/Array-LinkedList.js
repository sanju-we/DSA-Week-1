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
    let newNode = new Node(data);
    if(this.head == null){
      this.head = newNode;
      this.tail = newNode;
      return
    }else{
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  display(){
    let curr = this.head;
    let result = ''
    while(curr != null){
      result+= curr.data + '-'
      curr = curr.next;
    }
    console.log(result,"Null")
  }
}

const arr = [1,2,3,4,5,6,7,8,9,10]

let LL = new LinkedList()
for(let values of arr){
  LL.insert(values)
}
LL.display()