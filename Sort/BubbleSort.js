// Bubble Sort Algorithm
// Time Complexity: O(n^2) in the worst and average case
// Space Complexity: O(1) as it sorts in place

function BubbleSort(arr){
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-i-1;j++){
      if(arr[j]>arr[j+1]){
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
      }
    }
  }
  return arr
}

const arr = [5,8,2,1,0,3]
console.log(BubbleSort(arr))
