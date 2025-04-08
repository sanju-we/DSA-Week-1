// Big O notation is a measure of how efficient an algorithm is. It's a way to describe the complexity of an algorithm in terms of the amount of -
// time or space it requires as the input size grows. It's usually expressed as a function of the input size, typically represented as 'n'.
// It's a way to describe the worst-case scenario, i.e. how much time/space the algorithm will take in the worst possible case.
// It's not a measure of the exact time/space required but rather an upper bound.
// It's usually expressed as a simple function of 'n', e.g. O(n), O(n^2), O(log n), O(n log n), etc.

// ====================================================== Time Complexcity =========================================================

// const funnyNumber = (arr)=>{    // 4-operations
//     for(i=0;i<arr.length;i++){
//         if(i===3) return arr[i];
//     }
// }

// const funnyNumber = (arr)=>{   // 1-operation
//     return arr[3];             // ~~ O(1)
// }

// const nums = [43,23,12,60,90]

// console.time('funnyNumber')
// console.log(funnyNumber(nums))
// console.timeEnd('funnyNumber')

// function someOperation(n){ ///always 3 - operation
//     return (n * (n + 5)) / 2 ;
// }

// console.log(someOperation(5));//  ~~ 2n+3 operation => O(n)

// function goingUpAndDown (n){


//     console.log('Going forward');

//     for (let i = 0;i < n; i++) {
//         console.log(i);
//     }

//     for (let j = n-1;j >= 0;j--){
//         console.log(j)
//     }
//     console.log('at the start!!');
    
// }

// goingUpAndDown(4)


// function workBoth (n){         //~~ n * n operation => O(n^2)
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             console.log(i, j);
//         }
//     }
// }

// workBoth(5);

// ======================================================= Space Complexity ===================================================

// function addition(arr){ //no problem wether the array is small size or big size it gives only one value,with single space allocation;
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {       // ~~ O(1) complexity
//         sum += arr[i];
//     }
//     return sum;
// }

// const score = [23,54,90,76,10]
// console.log(addition(score));


// function pusher(arr){ //but here it will depends upon the size(n) of array, whether it increase its takes more spaces;
//     let newArr = [];

//     for(i=0; i<arr.length;i++){          // ~~ O(n) complexity
//         newArr.push(arr[i]);
//     }
//     return newArr;
// }

// const runs = [4,2,6,1,4,6]
// console.log(pusher(runs));

// function createMatrix(n){
//     let matrix = [];  

//     for (let i = 0; i < n; i++) {
//        matrix[i] = [];
//        for (let j = 0; j < n; j++) {    // ~~ O(n^2) complexity
//             matrix[i][j] = i+j;
//        }
//     }

//     return matrix;
// }

// console.log(createMatrix(10));



