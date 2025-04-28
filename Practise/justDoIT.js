// 1. Bubble Sort                 ✅
// 2. Selection Sort              ✅
// 3. insertion Sort              ✅
// 4. mergesort                   ✅
// 5. quick Sort                  ✅
// 6. reverse stack               ✅
// 7. stack with array            ✅
// 8. stack with linkedlist       ✅
// 9. stack with queue
// 10. queue with array           ✅
// 11. queue with linkedlist      ✅
// 12. queue with stack

const arr = [5,4,6,1,0,32,520,4]

function BubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]]
  }
  return arr
}

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = temp
  }
  return arr
}

function QuickSort(arr) {
  if (arr.length === 0) return arr
  let pivot = arr[arr.length - 1]
  let right = [], left = []
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return [...QuickSort(left), pivot, ...QuickSort(right)]
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  let result = []
  let i = 0, j = 0
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i])
      i++
    } else {
      result.push(right[j])
      j++
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j))
}

function SelectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let temp = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = temp
  }
  return arr
}

function BSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}

function ReverseStack(stack) {
  if (stack.length === 0) return stack
  let temp = stack.pop()
  ReverseStack(stack)
  insertAtAbottom(stack, temp)
}

function insertAtAbottom(stack, item) {
  if (stack.length === 0) {
    return stack.push(item)
  }
  let temp = stack.pop()
  insertAtAbottom(stack, item)
  return stack.push(temp)
}

console.log(ReverseStack(arr))

class stack {
  constructor(val) {
    this.size = val;
    this.item = new Array(val);
    this.top = -1
  }

  push(val) {
    if (this.top === this.size - 1) {
      console.log('Stcak overflow')
      return
    }
    this.top += 1
    this.item[this.top] = val;
  }

  pop() {
    if (this.top === -1) {
      console.log('Stcak underFolw')
      return null
    }
    const poped = this.item[this.top]
    this.top--
    return poped;
  }

  peek() {
    if (this.top === -1) {
      console.log('Stcak underFolw')
      return
    }
    console.log(this.item[this.top])
    return
  }

  isEmpty() {
    return this.top === -1
  }

  length() {
    console.log(this.top)
  }

  display() {
    if (this.top === -1) {
      console.log('Stcak is empty')
      return
    }
    console.log('stcak elements:')
    for (let i = this.top; i >= 0; i--) {
      console.log(this.item[i])
    }
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class linkedlist {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  push(data) {
    let newNode = new Node(data)
    newNode.next = this.head
    this.head = newNode
    this.length++
  }

  pop() {
    if (this.head === null) {
      console.log('Stack underfolw')
      return
    }
    this.head = this.head.next;
    this.length--
  }

  peek() {
    if (this.isEmpty()) {
      console.log('Stcak is empty')
      return null;
    }
    console.log(this.head.data)
  }

  display() {
    if (this.isEmpty()) {
      console.log('stack is empty')
      return
    }
    let curr = this.head;
    while (curr) {
      console.log(curr.data)
      curr = curr.next
    }
  }

  isEmpty() {
    return this.head === null
  }
}

class Queue {
  constructor() {
    this.item = []
  }

  enqueue(data) {
    this.item.push(data);
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log('Queue is Empty')
      return
    }
    this.item.shift()
  }

  isEmpty() {
    return this.item.length === 0;
  }

  peek() {
    console.log(this.item[0])
  }

  display() {
    if (this.isEmpty()) {
      console.log('Queue is empty')
      return
    }
    console.log(this.item.join('<-'))
    return
  }
}

class Qlinkedlist {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  enqueue(data) {
    let newNode = new Node(data)
    if (this.isEmpty()) {
      this.front = this.rear = newNode
    } else {
      this.rear.next = newNode;
      this.rear = newNode
    }
    this.length++
  }

  dequeue(){
    if(this.isEmpty()){
      console.log('Queue underFlow')
      return 
    }
    this.front = this.front.next;
    if(!this.front){
      this.rear = null
    }
    this.length--
    return
  }

  peek(){
    if(this.length === 0){
      console.log('Queue is empty')
      return
    }
    console.log(this.front.data)
  }

  isEmpty(){
    return this.length === 0
  }

  display(){
    let curr = this.front;
    let result = ''
    while(curr){
      result+=curr.data+'<-'
      curr = curr.next
    }
    console.log(result)
  }
}

// console.log(BubbleSort(arr))
// console.log(selectionSort(arr))
// console.log(insertionSort(arr))
// console.log(QuickSort(arr))
// console.log(mergeSort(arr))
// console.log(SelectionSort(arr))
// console.log(BSort(arr))
// ReverseStack(arr)
// console.log(arr)

// stck with array
// let Stack = new stack(5)
// Stack.length()
// Stack.push(10)
// Stack.peek()
// Stack.push(20)
// Stack.push(20)
// Stack.push(20)
// Stack.push(20)
// Stack.length()
// Stack.peek()
// Stack.display()
// Stack.pop()
// Stack.display()

//stcak LL
// let stcak = new linkedlist()
// stcak.push(10)
// stcak.push(20)
// stcak.display()
// stcak.pop()
// stcak.display()
// stcak.pop()
// stcak.display()
// stcak.peek()

//Queue with stack
// let queue = new Queue()
// queue.enqueue(10)
// queue.peek()
// queue.enqueue(20)
// queue.enqueue(30)
// queue.display()
// queue.dequeue()
// queue.display()
// queue.dequeue()
// queue.display()

//Queue with LinkeList
// let Qll = new Qlinkedlist()
// Qll.enqueue(10)
// Qll.enqueue(20)
// Qll.peek()
// Qll.display()
// Qll.dequeue()
// Qll.dequeue()
// Qll.display()





function IS(arr){
  for(let i=0;i<arr.length;i++){
    let temp = arr[i]
    let j=i-1;
    while(j>=0 && arr[j]>arr[j+1]){
      [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
      j--
    }
  }
  return arr
}

function QS(arr){
  if(arr.length <= 1) return arr
  let pivot = arr[arr.length-1]
  let left = [],right = []
  for(let i=0;i<arr.length-1;i++){
    if(arr[i]<pivot){
      left.push(arr[i])
    }else{
      right.push(arr[i])
    }
  }
  return [...QS(left),pivot,...QS(right)]
}

function MS(arr){
  if(arr.length<=1) return arr
  let mid = Math.floor(arr.length/2),
  left = arr.slice(0,mid),
  right = arr.slice(mid)
  return M(MS(left),MS(right))
}

function M(left,right){
  let result = [],i=0,j=0;
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

function BS(arr){
  for(let i=0;i<arr.length-1;i++){
    for(let j=0;j<arr.length-i-1;j++){
      if(arr[j]>arr[j+1]){
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
      }
    }
  }
  return arr
}

function SS(arr){
  for(let i=0;i<arr.length;i++){
    let min = i
    for(let j=i+1;j<arr.length;j++){
      if(arr[j]<arr[min]){
        min = j;
      }
    }
    [arr[min],arr[i]] = [arr[i],arr[min]]
  }
  return arr
}

class HashTable{
  constructor(val){
    this.table = new Array(val);
    this.size = val;
  }

  hash(key){
    let total = 0;
    for(let i=0;i<key.length;i++){
      total+=key.charCodeAt(i)
    }
    return total%this.size
  }

  set(key,val){
    let index = this.hash(key)
    let bucket = this.table[index]
    if(!bucket){
      this.table[index] = [[key,val]]
    }else{
      let sameKeyItem = bucket.find(item=>item[0]===key)
      if(sameKeyItem){
        sameKeyItem[1] = val;
      }else{
        bucket.push([key,val])
      }
    }
  }

  get(key){
    let index = this.hash(key)
    let bucket = this.table[index]
    if(bucket){
      let sameKeyItem = bucket.find(item=>item[0] === key)
      return sameKeyItem ? console.log(sameKeyItem[1]) : console.log("No data in this key")
    }
    return console.log('No data in this Index')
  }

  remove(key){
    let index = this.hash(key)
    let bucket = this.table[index]
    if(bucket){
      let sameKeyItem = bucket.find(item=>item[0] === key)
      bucket.splice(bucket.indexOf(sameKeyItem),1)
      return console.log('Key item deleted successfully')
    }
  }

  display(){
    for(let i=0;i<this.table.length;i++){
      if(this.table[i]){
        console.log(i,this.table[i])
      }
    }
  }
}

let hash = new HashTable(3)
hash.set('name','sanju')
hash.set('mane','sneha')
hash.set('age',20)
hash.get('mane')
hash.remove('mane')
hash.get('mane')
hash.display()

// console.log(IS(arr))
// console.log(QS(arr))
// console.log(MS(arr))
// console.log(BS(arr))
// console.log(SS(arr))

function isAnagram(str1,str2){
  if(str1.length!=str2.length) return false;
  let map = {}
  for(let char of str1){
    map[char] = (map[char] || 0)+1
  }
  for(let char of str2){
    if(!map[char]) return false
    map[char]--
  }
  return true
}

function firstNonRepeatingChar(str){
  let map = {}
  for(let char of str){
    map[char] = (map[char] || 0)+1
  }
  for(let char of str){
    if(map[char] === 1) return char
  }
  return null
}

console.log(isAnagram("listen", "silent"))
console.log(firstNonRepeatingChar('hhlloo,'))