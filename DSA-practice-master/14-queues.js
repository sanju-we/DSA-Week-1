



//===================================================== Queues =================================================================================

// class Queue {
//     constructor(){
//         this.queue = [];
//     }
//     size(){
//         return this.queue.length;
//     }
//     isEmpty(){
//         return this.size() === 0;
//     }

//     enQueue(element){
//         this.queue.push(element);
//     }
//     deQueue(){
//         if(this.isEmpty()) return 'underflow !!';
//         else this.queue.shift();
//     }
//     front(){
//         if(this.isEmpty()) return 'No elements !!'
//         else return this.queue[0];
//     }
//     print(){
//         console.log(this.queue.join(' ,'));
//     }
// }

// const newQueue = new Queue();
// newQueue.enQueue(0)
// newQueue.enQueue(10)
// newQueue.enQueue(20)
// newQueue.enQueue(40)
// newQueue.enQueue(-23)
// newQueue.deQueue()
// console.log(newQueue.size())
// newQueue.print()
// // newQueue.deQueue()
// // newQueue.deQueue()
// // newQueue.deQueue()


// console.log(newQueue)

//````````````````````````````````````````````````````````````````` Questions ``````````````````````````````````````````````````````````````````

//Implement Stack using Queue (by prototype)

// const MyStack = function (){
//     this.q1 = [];
//     this.q2 = [];
// }
// ////// push(10)
// ////// push(20)
// ////// push(30)
// //////q1 = [30,20,10,]
// //////q2 = []
// MyStack.prototype.push = function (x){
//     while(this.q1.length !== 0){
//         this.q2.push(this.q1.shift())
//     }
//     this.q1.push(x);
//     while(this.q2.length !== 0){
//         this.q1.push(this.q2.shift())
//     }
// }

// MyStack.prototype.pop = function (){
//     return this.q1.shift()
// }

// MyStack.prototype.top = function (){
//     return this.q1[0]
// }
// MyStack.prototype.isEmpty = function (){
//     return this.size() === 0; 
// }
// MyStack.prototype.size = function (){
//     return this.q1.length;
// }

// MyStack.prototype.print = function (){
//     console.log(this.q1.reverse().join(' ,'))
// }


// const newStack = new MyStack();
// newStack.push(0)
// newStack.push(12)
// newStack.push(-23)
// newStack.pop()
// console.log(newStack.top())
// newStack.print()

// console.log(newStack)


//sort---
//stack nte middle
//double hash map
// double ended queue--
//circular queue--
//

//`````````````````````````````````````````````````````````````````(class method)```

// class Stack {
//     constructor(){
//         this.q1 = [];
//         this.q2 = [];
//     }
//////     q1= []
//////     q2= []
//     print(){
//         console.log(this.q1.join(' ,'))
//     }
//     push(element){
//         while(this.q1.length !== 0){
//             this.q2.push(this.q1.shift())
//         }
//         this.q1.push(element);
//         while(this.q2.length !== 0){
//             this.q1.push(this.q2.shift())
//         }
//     }
//     pop(){
//         this.q1.shift()
//     }
// }
// const newStack = new Stack();

// newStack.push(12);
// newStack.push(23);
// newStack.push(55);
// // newStack.pop();
// // newStack.push(0);
// // newStack.push(-2);
// newStack.print()

// // console.log(newStack)

//implement Queue using Stack 

//----------------------------------------------------

function quickSort(arr,low=0,high=arr.length-1){
    if(low<high){
      let pivotIndex = pivotHelper(arr,low,high);
      quickSort(arr,low,pivotIndex-1);
      quickSort(arr,pivotIndex+1,high);
    }
    return arr;
  }
  
function pivotHelper(arr,low,high){
  let pivot = arr[high];
  let i = low-1;
  for(let j=low;j<high;j++){
    if(arr[j]<pivot){
      i++;
      [arr[i],arr[j]] = [arr[j],arr[i]];
    }
  }
  [arr[i+1],arr[high]] = [arr[high],arr[i+1]];
  return i+1;
}


