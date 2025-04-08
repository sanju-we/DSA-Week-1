// function bubbleSort(arr){
//     for(let i=0;i<arr.length;i++){
//       for(let j=0;j<arr.length;j++){
//         if(arr[j] > arr[j+1]){
//           [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//         }
//       }
//     }
//     return arr;
//   }
  
//   console.log(bubbleSort([8,20,-2,4,-6]))

//---------------------------------------------
// function insertionSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let key = arr[i]
//         let j = i-1;
//         while(j>=0 && arr[j] > key){
//             arr[j+1] = arr[j];
//             j--;
//         }
//         arr[j+1] = key;
//     }
//     return arr;
// }

// console.log(insertionSort([8,20,-2,4,-6]))

//------------------------------------------

// function selectionSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let min = i;
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j] < arr[min]){
//                 min = j
//             }
//         }
//         if(min!==i){
//             [arr[i],arr[min]] = [arr[min],arr[i]]
//         }
//     }
//     return arr;
// }

// console.log(selectionSort([8,20,-2,4,-6]))

//-------------------------------------------

// function quickSort(arr){
//     if(arr.length < 2) return arr;
//     let pivot = arr[arr.length-1];
//     let left = [];
//     let right = [];
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i] < pivot) left.push(arr[i]);
//         else right.push(arr[i])
//     }

//     return [...quickSort(left), pivot, ...quickSort(right)]
// }

// console.log(quickSort([8,20,-2,4,-6]))

//----------------------------------------------------

// function mergeSort(arr){
//     if(arr.length < 2) return arr;    
//     let mid = Math.floor(arr.length/2);
//     let leftArr = arr.slice(0,mid);
//     let rightArr = arr.slice(mid);

//     return merge(mergeSort(leftArr),mergeSort(rightArr));
// }

// function merge(leftArr,rightArr) {
//     let sortedArr=[];
//     while(leftArr.length && rightArr.length){
//         if(leftArr[0] <= rightArr[0]) sortedArr.push(leftArr.shift())
//         else sortedArr.push(rightArr.shift())
//     }
//     return [...sortedArr, ...leftArr, ...rightArr]
// }

// console.log(mergeSort([8,20,-2,4,-6]))

//----------------------------------------

// class Stack {
//     constructor(){
//         this.stack = [];
//     }
//     push(x){
//         this.stack.push(x);
//     }
//     pop(){
//         if(this.isEmpty()) return 'empty!!';
//         return this.stack.pop();
//     }
//     top(){
//         if(this.isEmpty()) return 'empty!!';
//         return this.stack[this.size()-1]
//     }
//     isEmpty(){
//         return this.size() === 0;
//     }
//     size(){
//         return this.stack.length;
//     }
// }

// const newStack = new Stack();
// newStack.push(12)
// newStack.push(2)
// newStack.push(-1)
// newStack.push(90)
// newStack.pop(90)
// console.log(newStack.top())
// console.log(newStack.isEmpty());
// console.log(newStack);


//----------------------------------------

// class Queue {
//     constructor(){
//         this.queue = [];
//     }
//     enqueue(x){
//         this.queue.push(x);
//     }
//     dequeue(){

//         return this.queue.shift();
//     }
//     top(){
//         return this.queue[0];
//     }


// }

// const newQueue = new Queue();
// newQueue.enqueue(10)
// newQueue.enqueue(1)
// newQueue.enqueue(-2)
// newQueue.enqueue(82)
// newQueue.dequeue()
// console.log(newQueue.top())
// console.log(newQueue)

//----------------------------------------------
