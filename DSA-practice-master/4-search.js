// ================================================== Linear Search ==================================================

// let nums = [1,0,3,5,4,6,2]; //single index search

// function linearSearch(arr,target){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] === target) return i;
//     }
//     return -1;
// }

// console.log(linearSearch(nums,2));

//  ;//multiple index search

// function linearSearch(arr,target){
//     let result = [];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]=== target) result.push(i);
//     }
//     // return result.length === 0 ? -1 : result ;

// }

// console.log(linearSearch(nums,0));


// ==================================================== Binary search =======================================================
// for a binary search needs a sorted array then only we can search efficiently;


// // let nums = [1,0,3,5,4,6,2,3,1,0];
// `let nums = [-3,-1,0,4,6,9,10]

// const binarySearch = (arr,target) =>{
//     let start = 0;
//     let end = arr.length-1;

//     while(start <= end){
//         let middle = Math.floor((start + end)/2);

//         if(arr[middle] === target) return middle;
//         else if(arr[middle] < target) start = middle + 1;
//         else end = middle - 1;
//     }
//     return -1;
// }

// console.log(binarySearch(nums,1));

// // //~~~ Time complexity - O(logn)
// // //~~~ Space complexity - O(1)

//----------------------------------- Kth missing element

// let nums = [2,3,4,7,11];

// function findKthMissing(arr, k){
//     let count = 0;

//     for(let i=0;i<arr.length;i++){
//         if(arr[i] <= k + count) count++
//     }
//     return k + count;
// }

// console.log(findKthMissing(nums,5))

//-------------------------------- maximum no of posittive or negetive integer 

let nums = [-3, -1, 0, 4, 6, 9, 10];

function maxOfInteger(arr) {
    return Math.max(lowerBound(arr), upperBound(arr));
}

function upperBound(arr) {
    let low = 0,
        high = arr.length - 1;

    while (low < high) {
        let mid = Math.ceil((low + high) / 2);

        if (arr[mid] < 0) low = mid;
        else high = mid - 1;
    }
    return arr[0] >= 0 ? 0 : low + 1;
}


function lowerBound(arr) {
    let low = 0,
        high = arr.length - 1;

    while (low < high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] > 0) high = mid;
        else low = mid + 1;
    }
    return arr[arr.length-1] <= 0 ? 0 : arr.length - low;
}

console.log(maxOfInteger([-3, -1,0, 4, 6, 9, 10]));
