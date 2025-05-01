// Sort [5,2,4,7,1,3,2,6] using merge sort.
let Sort = [5,2,4,7,1,3,2,6]
function MergeSort(arr){
  if(arr.length<=1) return arr
  let mid = Math.floor(arr.length/2),
  left = arr.slice(0,mid),
  right = arr.slice(mid)
  return merge(MergeSort(left),MergeSort(right))
}

function merge(left,right){
  let result= [],
  i=0,
  j=0
  while(i<left.length&&j<right.length){
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

console.log(MergeSort(Sort))

// Merge two sorted arrays [1,3,5] and [2,4,6] into one sorted array.

function Merge(arr1,arr2){
  let result = [],i=0,j=0
  while(i<arr1.length&&j<arr2.length){
    if(arr1[i]<arr2[j]){
      result.push(arr1[i])
      i++
    }else{
      result.push(arr2[j])
      j++
    }
  }
  return result.concat(arr1.slice(i)).concat(arr2.slice(j))
}

console.log(Merge([1,3,5],[2,4,6]))

// Count how many times the merge() function is called.