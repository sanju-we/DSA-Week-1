// Sort [10, 80, 30, 90, 40, 50, 70] using quick sort.

function quickSort(arr){
  if(arr.length <=1) return arr
  let pivot = arr[arr.length-1],
  left = [],
  right =[]

  for(let i=0;i<arr.length-1;i++){
    if(arr[i]<pivot){
      left.push(arr[i])
    }else{
      right.push(arr[i])
    }
  }
  return [...quickSort(left),pivot,...quickSort(right)]
}

console.log(quickSort([9,7,5,11,12,2,14,3,10,6]))