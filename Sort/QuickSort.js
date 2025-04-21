// QuickSort algorithm implementation in JavaScript
// Time Complexity: O(n log n) on average, O(n^2) in the worst case

const arr = [4,5,3,1,2];

function QuickSort(arr){
  if(arr.length <= 1) return arr
  let pivot = arr[arr.length-1]
  let left = [], right = []
  for(let i=0;i<arr.length-1;i++){
    if(arr[i]<pivot){
      left.push(arr[i])
    }else{
      right.push(arr[i])
    }
  }
  return [...QuickSort(left),pivot,...QuickSort(right)]
}

console.log(QuickSort(arr))