


//======================================== Quick Sort ===================================

// function quickSort(arr){
//     //[8,20,-2,4,-6] , size = 5;
//     //[8,20,-2,4] ,size = 4;
//     //[8,20] ,size = 2;
    
//     if(arr.length < 2){
//         return arr;
//     }
//     let pivot = arr[arr.length-1] //-6 //4
//     let left = [];
//     let right = [];
//     for(let i =0;i<arr.length - 1;i++){
//         // 8,20,-2,4 < -6
//         // 8,20,-2 < 4
//         // 8 < 20
//         if(arr[i] < pivot){
//             left.push(arr[i]); // left [] // left [-2] // left [8];
//         }else{
//             right.push(arr[i]);  // right [8,20,-2,4] // right [8,20] // right [];
//         }
//     }
//      //     [], -6, [8, 20,-2, 4]          [-6, -2, 4, 8, 20]
//      //                                          ^
//      //        [-2], 4, [8,20]               [-2, 4, 8, 20]
//      //                                          ^
//      //         [8], 20, []                   [8, 20]
//      //              ------------------========> ^     
//     return [...quickSort(left), pivot, ...quickSort(right)]
// }

// const arr = [8,20,-2,4,-6]
// console.log(arr)
// console.log(quickSort(arr))




function quickSort(arr){
    if(arr.length < 2) return arr;
    let pivot = arr[arr.length-1];
    let left = [];
    let right = [];

    for(let i=0;i<arr.length-1;i++){
        if(arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }
    
    return [...quickSort(left), pivot, ...quickSort(right)];
}
const arr = [8,20,-2,4,-6]
console.log(arr)
console.log(quickSort(arr))