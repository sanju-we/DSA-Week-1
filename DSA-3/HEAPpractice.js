// class MINHeap{
//   constructor(){
//     this.Heap = []
//   }

//   getParent(i) { return Math.floor((i - 1) / 2); }
//   getLeft(i) { return 2 * i + 1; }
//   getRight(i) { return 2 * i + 2; }

//   minHeap(arr){
//     this.buildHeap(arr)
//   }

//   buildHeap(arr){
//     this.Heap = arr
//     for(let i=this.getParent(this.Heap.length-1);i>=0;i--){
//       this.shiftDown(i)
//     }
//   }

//   shiftDown(currIndex){
//     let endIndex = this.Heap.length-1
//     let leftIndex = this.getLeft(currIndex)
//     while(leftIndex <= endIndex){
//       let rightIndex = this.getRight(currIndex)
//       let indexToShift = 0;
//       if(rightIndex<=endIndex && this.Heap[rightIndex] < this.Heap[leftIndex]){
//         indexToShift = rightIndex
//       }else{
//         indexToShift = leftIndex
//       }
//       if (this.Heap[currIndex] > this.Heap[indexToShift]){
//         [this.Heap[currIndex],this.Heap[indexToShift]] = [this.Heap[indexToShift],this.Heap[currIndex]]
//         currIndex = indexToShift
//         leftIndex = this.getLeft(currIndex)
//       }else{
//         return 
//       }
//     }
//   }

//   shiftUp(currIndex){
//     let parent = this.getParent(currIndex)
//     while(currIndex > 0 && this.Heap[parent] > this.Heap[currIndex]){
//       [this.Heap[currIndex],this.Heap[parent]] = [this.Heap[parent],this.Heap[currIndex]]
//       currIndex = parent;
//       parent = this.getParent(currIndex)
//     }
//   }

//   peek(){
//     if(this.Heap.length === 0){
//       console.log('Heap is empty')
//       return 
//     }
//     return this.Heap[0]
//   }

//   remove(){
//     [this.Heap[0],this.Heap[this.Heap.length-1]] = [this.Heap[this.Heap.length-1],this.Heap[0]]
//     this.Heap.pop()
//     this.shiftDown(0)
//   }

//   insert(data){
//     this.Heap.push(data)
//     this.shiftUp(this.Heap.length-1)
//   }
// }

class MINHeap {
  constructor() {
    this.Heap = [];
  }

  getParent(i) { return Math.floor((i - 1) / 2); }
  getLeft(i) { return 2 * i + 1; }
  getRight(i) { return 2 * i + 2; }

  minHeap(arr) {
    this.buildHeap(arr);
  }

  buildHeap(arr) {
    this.Heap = arr;
    for (let i = this.getParent(this.Heap.length - 1); i >= 0; i--) {
      this.shiftDown(i);
    }
  }

  shiftDown(currIndex) {
    let endIndex = this.Heap.length - 1;
    let leftIndex = this.getLeft(currIndex);
    while (leftIndex <= endIndex) {
      let rightIndex = this.getRight(currIndex);
      let indexToShift;
      if (
        rightIndex <= endIndex &&
        this.Heap[rightIndex] < this.Heap[leftIndex]
      ) {
        indexToShift = rightIndex;
      } else {
        indexToShift = leftIndex;
      }

      if (this.Heap[currIndex] > this.Heap[indexToShift]) {
        [this.Heap[currIndex], this.Heap[indexToShift]] = [this.Heap[indexToShift],this.Heap[currIndex]];
        currIndex = indexToShift;
        leftIndex = this.getLeft(currIndex);
      } else {
        return;
      }
    }
  }

  shiftUp(currIndex) {
    let parent = this.getParent(currIndex);
    while (currIndex > 0 && this.Heap[parent] > this.Heap[currIndex]) {
      [this.Heap[currIndex], this.Heap[parent]] = [
        this.Heap[parent],
        this.Heap[currIndex],
      ];
      currIndex = parent;
      parent = this.getParent(currIndex);
    }
  }

  peek() {
    if (this.Heap.length === 0) {
      console.log("Heap is empty");
      return null;
    }
    return this.Heap[0];
  }

  remove() {
    if (this.Heap.length === 0) return null;
    const min = this.Heap[0];
    const end = this.Heap.pop();
    if (this.Heap.length > 0) {
      this.Heap[0] = end;
      this.shiftDown(0);
    }
    return min;
  }

  insert(data) {
    this.Heap.push(data);
    this.shiftUp(this.Heap.length - 1);
  }

  printHeap() {
    console.log(this.Heap);
  }  
}

let heap = new MINHeap()
heap.minHeap([4,5,2,6,1,3])
console.log(heap.peek())
heap.remove()
console.log(heap.peek())
heap.remove()
console.log(heap.peek())
heap.remove()
console.log(heap.peek())
heap.remove()
console.log(heap.peek())
heap.remove()
console.log(heap.peek())
heap.remove()
console.log(heap.peek())
heap.insert(8)
console.log(heap.peek())
heap.insert(7)
console.log(heap.peek())
heap.insert(2)
console.log(heap.peek())
heap.insert(4)
console.log(heap.peek())
heap.printHeap()

function fn(num){
  return num
}
function fns(num){
  return num
}
let ss = (fn(5),fns(10))
console.log(ss)