//Insertion Sort
// Time Complexity: O(n^2) 

function insertionSort(arr){
  for(let i=0;i<arr.length;i++){
    let temp = arr[i]
    let j = i-1
    while(j>=0 && arr[j]>temp){
      arr[j+1] = arr[j]
      j--
    }
    arr[j+1] = temp
  }
  return arr
}

const arr = [4,85,96,74,1,96,465,5,359]
console.log(insertionSort(arr))