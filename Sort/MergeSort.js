// Merge Sort algorithm implementation in JavaScript
// Time Complexity: O(n log n) on average and worst case
// Space Complexity: O(n) for the temporary array used in merging


function mergeSort(arr) {
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)
  return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right){
  let result = []
  let i=0, j=0;
  while(i<left.length && j<right.length){
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

const arr = [1, 3, 2, 4];
console.log(mergeSort(arr));