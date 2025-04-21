// selection sort algorithm
// Time complexity: O(n^2)

function selectionSort(arr){
  for(let i=0;i<arr.length-1;i++){
    let min = i;
    for(let j=i+1;j<arr.length;j++){
      if(arr[min]>arr[j]){
        min = j;
      }
    }
    [arr[i],arr[min]] = [arr[min],arr[i]]
  }
  return arr
}

const arr = [4,5,3,1,2]
console.log(selectionSort(arr))