function MergeSort(arr){
  if(arr.length<=1) return arr
  let mid = Math.floor(arr.length/2)
  let left = arr.slice(0,mid)
  let right = arr.slice(mid)
  return merge(MergeSort(left),MergeSort(right))
}

function merge(left,right){
  let result = []
  let i=0, j=0
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

const arr = [2,1,5,2,6,3,1,42,52,63,852,7]
console.log(MergeSort(arr))