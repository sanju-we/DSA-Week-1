// =================================================================== Array ================================================================

//Array declaration 

// const arr = new Array();//old method
const arr = ['apple','banana','orange'];
let person = {
    name: "aswin",
    age: 22
}
//  arr[3] = person;

console.log(arr.length);
// // console.log(arr[3].name);

// //Array- add or remove elements
// arr.push('cherry');
// // console.log(arr);

// arr.pop()
// // console.log(arr);

// //add to top of array
// arr.unshift('pineapple');
// // console.log(arr);

// //remove the top of array
// arr.shift()

// // for(let i=0;i<arr.length;i++){
// //     console.log(arr[i]);
// // }

// // let i=0;
// // while(i<arr.length){
// //     console.log(arr[i])
// //     i++
// // }

// //inbuilt loop methods
// const numbers = [1,2,3,4,5,6];

// const evenNums = numbers.map((items,index,array)=>{
//     return items*2;
// })
// // console.log(evenNums);

// const greaterThan5 = numbers.filter((item,index,array)=>{
//     return item > 3;
// })
// // console.log(greaterThan5);

// const sum = numbers.reduce((acc,curr)=>{ //------------------------reduce in javascript
//     return acc + curr;
// },0)//initialy the value of acc is 0 index of array
// // console.log(sum);

// const isthere = numbers.some((item,index,array)=>{ //------------------------some in javascript
//     return item > 3;
// }) //returns true or false

// // console.log(isthere);

// const isOk = numbers.every((item,index,array)=>{ //----------------------every in js
//     return item < 7;
// })//check every element the condition

// // console.log(isOk);

// const atleastOne = numbers.find((item,index,array)=>{ //----------------------find in js
//     return item < 10;
// })//returns the first element that satisfy the condition

// // console.log(atleastOne)

// //Spread operator and Rest operator

// let nums1 = [1,2,3];
// let nums2 = [4,5,6];

// // const arrNew = [nums1,nums2]; //---spread
// // console.log(arrNew);

// function newArr (...numbers){
//     return numbers
// }

// // console.log(newArr( nums1, nums2, 'hello', person, null, undefined))

// //more array method

// const newArr1 = nums1.concat(nums2,person,)
// // console.log(newArr1);

// //----slice------
// // console.log(arr)
// // ---------------slight differnce btw string and array

// // console.log(arr.slice(3));//remove element before index 3
// // console.log(arr.slice(-3));//return 3 element from reverse;


// 
// //----splice-------
// // console.log(arr)

// // ith console.log cheyidhtt karyallya.. karanmh ith illa 'arr' modify cheyaan;
// // arr.splice( 1, 2, 'oransdfge') // ----- (1-index crop start, 2 element from 1-index, insert 'orange' at 1-index)
// // console.log(arr);

// //-----Fill------
// // console.log(arr.fill(0))//complete replace
// // console.log(arr.fill(0,2))//replace from 2-index

// //-----findIndex----
// const find = numbers.findIndex((item)=> item === 6);// it takes a callback
// // console.log(find);

// //---flat array--
// const arr2 = [1,[2,3],4,[5,6,7]]
// // console.log(arr2.flat());

// const arr3 = [1,[2,3],4,[[5,6],7]]
// // console.log(arr3.flat(2))//second level flatten

// //---reverse--
// // console.log(numbers.reverse());

// //----sort---
// const num = [5,2,6,10,1,102,-10,-1]

// // console.log(num.sort((a,b)=> a-b));
// // console.log(num.sort((a,b)=> b-a));

// ================================================================ Question ===============================================================

// Question:1--------------------------- Second Largest number

// ~~~ bruteForce ~~~

// function secondLargestNum (arr){
//     let uniqueArr = Array.from(new Set(arr))     //used to convert the iteratable thing to array       //--------- O(n)

//     uniqueArr.sort((a,b)=> b-a);                 //------ O(nlogn)

//     if(uniqueArr.length >= 2){
//         return uniqueArr[1];
//     }else{
//         return -1;
//     }
// }

// console.log(secondLargestNum([1,2,3,4,5,5,6,10]))

//~~~ Time complexity - O(nlogn)
//~~~ Space complexity - O(1)


// ~~~ optimized ~~~ 

// function secondLargestOptimized(arr){
//     let largest = Number.NEGATIVE_INFINITY;
//     let secondLargest = Number.NEGATIVE_INFINITY;

//     for(let i=0;i<arr.length;i++){          //--------- O(n)
//         if(arr[i] > largest){
//             secondLargest = largest;
//             largest = arr[i];
//         }else if(arr[i] != largest && arr[i] > secondLargest){
//             secondLargest = arr[i]
//         }
//     }
//     return secondLargest;

// }

// //~~~ Time complexity - O(n)
// //~~~ Space complexity - O(1)

// console.log(secondLargestOptimized([1,2,3,4,5,5,6,10]))


// // Question:2 --------------------------- Rotate array by K

// // ~~ bruteforce ~~

// function rotate(arr,k){
//     return arr.splice(-k).concat(arr)        //--------- O(n)
// }

// console.log(rotate([1,2,3,4,5,6,7],3));      
// console.log(rotate([-1,-100,3,99],2));

// // //~~~ Time complexity - O(n)
// // //~~~ Space complexity - O(n)

// // ~~~ optimized ~~~

// function rotateOptimized(arr,k){

//     let size = arr.length;

//     if(size > k){
//         k = k % size;
//     }
    
//     reverse(arr,0,size-1);
//     reverse(arr,0,k-1);        //--------- O(n)
//     reverse(arr,k,size-1);

//     return arr;

// }

// function reverse(arr,left,right){
//     while(left < right){
//         let temp = arr[left];
//         arr[left++] = arr[right];
//         arr[right--] = temp;
//     }
// }

// console.log(rotateOptimized([1,2,3,4,5,6,7],3))
// console.log(rotateOptimized([-1, -100, 3, 99], 2))

// // //~~~ Time complexity - O(n)
// // //~~~ Space complexity - O(1)

// // [1,2,3,4,5,6,7] => [7,6,5,4,3,2,1] => [5,6,7|4,3,2,1] => [5,6,7|1,2,3,4]

// Question:3 --------------------------- Remove duplicate from Array

// ~~~ bruteforce ~~~

// function removeDup(arr){
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] === arr[i+1]){
//             arr.splice(i+1,1);         
//             i--;
//         }
//     }
//     return arr.length;
// }

// console.log(removeDup([1,2,2,3,3,3,4]))

// // ~~ optimized ~~

// function removeDupOptimal(arr){
//     if(arr.length === 0) return 0;
    
//     let i=0;

//     for(let j=0;j<arr.length;j++){
//         if(arr[i] !== arr[j]){
//             i++;
//             arr[i] = arr[j]
//         }
//     }
//     return i+1;
// }

// console.log(removeDupOptimal([1,2,2,3,3,3,4]));


// let arr = [1, 2, 3, 4, 5]
// // Traversing over arr[]
// for (let x of arr)
//     console.log(x)

// ----------------------------------------- Insert an element at a specific position in an Array
// function insertElement(arr, pos, x){
//     let i = arr.length - 1;
//     for (i; i >= pos; i--){
//         arr[i + 1] = arr[i];
//     }
//     arr[pos] = x;
//     return arr;
// }

// console.log(insertElement([1, 2, 3, 4, 5],1,8));

// question:4------------------------ Split an array into two equal Sum subarrays

// function splitPointer(arr,n){
//     let leftSum = 0;
//     for(let i=0;i<n;i++)
//         leftSum += arr[i];

//     let rightSum = 0;
//     for(let i= n-1;i >= 0;i--){
//         rightSum += arr[i];
//         leftSum -= arr[i];

//         if(leftSum === rightSum) return i;
//     }
//     return -1;
// }

// function printSubarray(arr,n){
//     let splitPoint = splitPointer(arr,n);

//     if(splitPoint == -1 || splitPoint == n) {
//         throw new Error('Not possible !!');
//     }
    
//     for(let i=0;i<n;i++){
//         if(splitPoint == i) console.log('');
//         console.log(arr[i]);
//     }
// }

// let arr = [1 , 2 , 3 , 4 , 5 , 5];
// let n = arr.length;

// printSubarray(arr,n);



//----------------------- reverse an array

// function reverseArray(arr){
//     let left = 0;
//     let right = arr.length-1;

//     while(left < right){
//         [arr[left],arr[right]] = [arr[right], arr[left]];

//         left++;
//         right--;
//     }
//     return arr;
// }

// console.log(reverseArray([1,2,3,4,5,6]));


