// bubble sort (18)
// insertion sort (31)
// selecton sort (46)
// quick sort (61)
// merge sort (79)
// stack with array fixed (104)
// stack with array (163)
// stack with linkelist (220)
// stack with queue (276)
// queue with array (326)
// queue with array fixed (376)
// queue with linkedlist
// queue with stack
// circular queue with fixed size (425)
// circular queue 
// hashtable with collision

let arr = [2,5,6,3,2,6,4]

function bubbleSort(arr){
  for(let i=0;i<arr.length-1;i++){
    for(let j=0;j<arr.length-i-1;j++){
      if(arr[j]>arr[j+1]){
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
      }
    }
  }
  return arr
}

// console.log(bubbleSort(arr))

function insertionSort(arr){
  for(let i=0;i<arr.length;i++){
    let temp = arr[i]
    let j=i-1
    while(j>=0 && arr[j]>temp){
      arr[j+1] = arr[j]
      j--
    }
    arr[j+1] = temp
  }
  return arr
}

// console.log(insertionSort(arr))

function selectionSort(arr){
  for(let i=0;i<arr.length-1;i++){
    let min = i
    for(let j=i+1;j<arr.length;j++){
      if(arr[j]<arr[min]){
        min = j
      }
    }
    [arr[min],arr[i]] = [arr[i],arr[min]]
  }
  return arr
}

// console.log(selectionSort(arr))

function quickSort(arr){
  if(arr.length<=1) return arr
  let pivot = arr[arr.length-1],
  left = [],
  right = []
  for(let i=0;i<arr.length-1;i++){
    if(arr[i]<pivot){
      left.push(arr[i])
    }else{
      right.push(arr[i])
    }
  }
  return [...quickSort(left),pivot,...quickSort(right)]
}

// console.log(quickSort(arr))

function mergeSort(arr){
  if(arr.length<=1)return arr
  let mid = Math.floor(arr.length/2),
  left = arr.slice(0,mid),
  right = arr.slice(mid)
  return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right){
  let result = [],
  i=0,j=0
  while(i<left.length && j<right.length){
    if(left[i]<right[j]){
      result.push(left[i])
      i++
    }else{
      result.push(right[j])
      j++
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j))
}

// console.log(mergeSort(arr))

class stackWithArrayFixed{
  constructor(data){
    this.stack = new Array(data)
    this.size = data
    this.length = -1
  }

  push(data){
    if(this.length === this.size-1){
      console.log('Stack overflow')
      return 
    }
    this.length++
    this.stack[this.length] = data
    return 
  }

  pop(){
    if(this.length === -1){
      console.log('Stack underflow')
      return 
    }
    this.stack.pop()
    this.length--
    return 
  }

  peek(){
    if(this.length === -1){
      console.log('Stack is empty')
      return 
    }
    console.log(this.stack[this.length])
  }

  display(){
    if(this.length == -1){
      console.log('Stack is empty')
      return 
    }
    let result = ''
    for(let i=0;i<this.length;i++){
      result+=this.stack[i] + '-'
    }
    console.log(result)
  }
}

// let sw = new stackWithArrayFixed(5)
// sw.push(10)
// sw.push(20)
// sw.push(30)
// sw.push(40)
// sw.display()
// sw.push(50)
// sw.display()
// sw.pop()
// sw.display()

class stackWithArray{
  constructor(){
    this.stack = []
    this.length = -1
  }

  push(data){
    this.length++
    this.stack[this.length] = data;
  }

  pop(){
    if(this.length  === -1){
      console.log('Stack underflow')
      return
    }
    this.length--
  }

  peek(){
    if(this.length === -1){
      console.log('Stack underflow')
      return
    }
    console.log(this.stack[this.length])
  }

  display(){
    if(this.length === -1){
      console.log('Stack underflow')
      return
    }
    let result =''
    for(let i=0;i<=this.length;i++){
      result+=this.stack[i] + '->'
    }
    console.log(result)
  }
}

// let sa = new stackWithArray()
// sa.push(10)
// sa.push(20)
// sa.push(30)
// sa.push(40)
// sa.display()
// sa.peek()
// sa.pop()
// sa.display()

class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class sll{
  constructor(){
    this.top = null;
  }

  push(data){
    let newNode = new Node(data)
    if(this.top === null){
      this.top = newNode
      return
    }
    newNode.next = this.top;
    this.top = newNode
  }

  pop(){
    if(this.top === null){
      console.log('Stack underflow')
      return
    }
    this.top = this.top.next
  }

  peek(){
    if(this.top === null){
      console.log('Stack underflow')
      return
    }
    console.log(this.top.data)
  }

  display(){
    if(this.top === null){
      console.log('Stack underflow')
      return
    }
    let curr = this.top
    let result = ''
    while(curr){
      result += curr.data + '->'
      curr = curr.next
    }
    console.log(result)
  }
}

// let lls = new sll()
// lls.push(10)
// lls.peek()
// lls.push(20)
// lls.push(30)
// lls.push(40)
// lls.display()
// lls.pop()
// lls.display()

class stackWqueue{
  constructor(){
    this.q1 = []
    this.q2 = []
  }

  push(data){
    this.q1.push(data)
  }

  pop(){
    if(this.q1.length === 0){
      console.log('Stack underFlow')
      return
    }
    while(this.q1.length > 1){
      this.q2.push(this.q1.shift())
    }

    [this.q2,this.q1] = [this.q1,this.q2]
  }

  peek(){
    if(this.q1.length === 0){
      console.log('Stack underFlow')
      return
    }
    console.log(this.q1[this.q1.length-1])
  }

  display(){
    if(this.q1.length === 0){
      console.log('Stack underFlow')
      return
    }
    console.log(this.q1.join('->'))
  }
}

// let sq = new stackWqueue()
// sq.push(10)
// sq.push(20)
// sq.push(30)
// sq.push(40)
// sq.peek()
// sq.display()
// sq.pop()
// sq.display()

class queueWarray{
  constructor(){
    this.queue = []
    this.front = -1;
    this.rear = -1;
  }

  enqueue(data){
    if(this.front == -1) this.front = 0
    this.rear++
    this.queue[this.rear] = data
  }

  dequeue(){
    if(this.queue.length === 0){
      console.log('Queue undeflow')
      return 
    }
    this.queue.shift()
    this.rear--
  }

  peek(){
    if(this.queue.length === 0){
      console.log('Queue undeflow')
      return 
    }
    console.log(this.queue[this.front])
  }

  display(){
    if(this.queue.length === 0){
      console.log('Queue undeflow')
      return 
    }
    console.log(this.queue.join('->'))
  }
}

// let qa = new queueWarray()
// qa.enqueue(10)
// qa.enqueue(20)
// qa.enqueue(30)
// qa.enqueue(40)
// qa.enqueue(50)
// qa.peek()
// qa.display()
// qa.dequeue()
// qa.display()

class queueWfa{
  constructor(size){
    this.queue = new Array(size)
    this.maxLength = size;
    this.front = -1
    this.rear = -1
  }

  enqueue(data){
    if(this.rear === this.maxLength-1){
      console.log('queue overflow')
      return 
    }
    if(this.front === -1){
      this.front = 0
    }
    this.rear++
    this.queue[this.rear] = data
  }

  dequeue(){
    if(this.front === -1){
      console.log('Queue underflow')
      return 
    }
    this.front++
  }

  peek(){
    if(this.front === -1){
      console.log('Queue underflow')
      return 
    }
    console.log(this.queue[this.front])
  }

  display(){
    if(this.front === -1){
      console.log('Queue underflow')
      return 
    }
    let result = ''
    for(let i= this.front;i<=this.rear;i++){
      result+= this.queue[i]
    }
    console.log(result)
  }
}

class circularQueueFixed{
  constructor(data){
    this.queue = new Array(data)
    this.size = data
    this.front = -1
    this.rear = -1
  }

  enqueue(data){
    if((this.rear+1)%this.size === this.front){
      console.log('Queue overflow')
      return 
    }
    if(this.front === -1)this.front=0
    this.rear = (this.rear+1)%this.size
    this.queue[this.rear] = data
  }

  dequeue(){
    if(this.front === -1){
      console.log('Queue underflow')
      return 
    }
    if(this.front === this.rear){
      this.front = this.rear = -1
    }else{
      this.front = (this.front+1)%this.size
    }
  }

  peek(){
    if(this.front === -1){
      console.log('Queue is empty')
      return 
    }
    console.log(this.queue[this.front])
  }
}



// class Node{
//   constructor(data){
//     this.data = data;
//     this.next = null;
//   }
// }

class circularQueue{
  constructor(){
    this.front = null;
    this.rear = null;
  }

  enqueue(data){
    let newNode = new Node(data)
    if(this.front === null){
      this.front = this.rear = newNode;
      this.rear.next = this.front
    }else{
      this.rear.next = newNode;
      this.rear = newNode;
      this.rear.next = this.front
    }
    return 
  }

  dequeue(){
    if(this.front === null){
      console.log('Queue is empty')
      return 
    }
    this.front = this.front.next;
    this.rear.next = this.front
  }

  peek(){
    if(this.front === null){
      console.log('Queue is empty')
      return 
    }
    console.log(this.front.data)
  }

  display(){
    if(this.front === null){
      console.log('Queue is empty')
      return 
    }
    let curr = this.front
    let result = ''
    do{
      result+=curr.data + '->'
      curr = curr.next
    }while(curr != this.front)
    console.log(result)
  }
}


class hashTable{
  constructor(size){
    this.table = new Array(size)
    this.size = size;
  }

  hash(key){
    let result = 0
    for(let i=0;i<key.length;i++){
      result += key.charCodeAt(i)
    }
    return result%this.size;
  }

  set(key,data){
    let index = this.hash(key)
    let bucket = this.table[index]
    if(!bucket){
      this.table[index] = [[key,data]]
    }else{
      let sameKeyItem = bucket.find((item)=> item[0] === key)
      if(sameKeyItem){
        sameKeyItem[1] = data
      }else{
        bucket.push([key,data])
      }
    }
  }

  get(key){
    let index = this.hash(key)
    let bucket = this.table[index]
    if(bucket){
      let sameKeyItem = bucket.find((item)=>item[0]===key)
      sameKeyItem ? console.log(sameKeyItem[1]) : console.log('No match found')
    }
    return null
  }

  remove(key){
    let index = this.hash(key)
    let bucket = this.table[index]
    if(bucket){
      let sameKeyItem = bucket.find((item)=>item[0]===key)
      if(sameKeyItem){
        bucket.splice(bucket.indexOf(sameKeyItem),1)
      }
    }
  }

  has(key){
    let index = this.hash(key)
    let bucket = this.table[index]
    if(bucket){
      let sameKeyItem = bucket.find((item)=>item[0]===key)
      sameKeyItem ? console.log(sameKeyItem) : console.log('No match key found')
    }
  }
}

function isValid(str){
  let result = [],
  map={
    '{':'}',
    '[':']',
    '(':')'
  }
  for(let char of str){
    if(char === '(' || char === '[' || char === '{'){
      result.push(char)
    }else if(char === ')' || char === ']' || char === '}'){
      let popped = result.pop()
      if(map[popped] !== char) return false
    }
  }
  return result.length === 0
}

console.log(isValid('([[{{}}]])'))
console.log(isValid('([[{{}}]]'))


// practical im done in DSA-2 week third attempt

function bubbleSort(arr){
  let swap = 0
  for(let i=0;i<arr.length-1;i++){
      for(let j=0;j<arr.length-i-1;j++){
          if(arr[j]>arr[j+1]){
              [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
              swap++
          }
      }
  }
  return swap
}

function selectionSort(arr){
  for(let i=0;i<arr.length;i++){
      let min = i
      for(let j=i+1;j<arr.length;j++){
          if(arr[j]<arr[min]){
              min=j
          }
      }
      [arr[min],arr[i]] = [arr[i],arr[min]]
  }
  return arr
}

function mergeSort(arr){
  if(arr.length<=1)return arr
  let mid = Math.floor(arr.length/2),
  left = arr.slice(0,mid),
  right = arr.slice(mid)
  return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right){
  let result = [],
  i=0,j=0
  while(i<left.length && j<right.length){
      if(left[i]<right[j]){
          result.push(left[i])
          i++
      }else{
          result.push(right[j])
          j++
      }
  }
  return result.concat(left.slice(i)).concat(right.slice(j))
}

// console.log(mergeSort([1,5,2,6,3,4,8]))


class stackDynamic{
  constructor(){
      this.stack = []
      this.top = -1
  }
  
  push(data){
      console.log('data pushed')
      this.top++
      this.stack.push(data)
  }
  
  pop(){
      if(this.top === -1){
          console.log('Stack underflow')
          return 
      }
      this.stack.pop()
      this.top--
  }
  
  display(){
      if(this.stack.length === 0){
          console.log('Stack is empty')
          return 
      }
      console.log(this.stack.reverse().join(''))
  }
}

let stack = new stackDynamic()
let str = 'sanju'
for(let char of str){
  stack.push(char)
}

stack.display()


// function reverseStack(stack){
//     if(stack.length<=1) return stack
//     let temp = stack.pop()
//     insertAtBottom(stack,temp)
//     reverseStack(stack)
// }

// function insertAtBottom(stack,item){
//     if(stack.length<=1)return stack
//     if(stack.length === 0){
//         stack.push(item)
//         return 
//     }
//     let temp = stack.pop()
//     insertAtBottom(stack,item)
//     return stack.push(temp)
// }
// console.log(reverseStack([1,5,2,6]))


function nonRepeating(str){
  map={}
  for(let char of str){
      map[char] = (map[char] || 0)+1
  }
  for(let char of str){
      if(map[char] === 1)return char
  }
}

console.log(nonRepeating('adaas'))



class queue{
  constructor(data){
      this.queue = new Array(data)
      this.size = data
      this.front = -1
      this.rear = -1
  }
  
  enqueue(data){
      if(this.rear === this.size-1){
          console.log('Queue overflow')
          return 
      }
      if(this.front === -1){
          this.front = 0
      }
      this.rear++
      this.queue[this.rear] = data
  }
  
  dequeue(){
      if(this.front === -1){
          console.log('Queue underflow')
          return
      }
      if(this.front === this.rear){
          this.front = this.rear = -1
      }else{
          this.front++
      }
  }
  
  display(){
      if(this.front === -1){
          console.log('Queue underflow')
          return
      }
      let result = ''
      for(let i=this.front;i<=this.rear;i++){
          result+=this.queue[i]+'->'
      }
      console.log(result)
  }
}

let q = new queue(5)
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.enqueue(40)
q.enqueue(50)
q.dequeue()
q.dequeue()
q.display()

