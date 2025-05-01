// Sort [64, 25, 12, 22, 11] using selection sort.
function selectionSort(arr){
  for(let i=0;i<arr.length-1;i++){
    let min = i
    for(let j=i+1;j<arr.length;j++){
      if(arr[j]<arr[min]){
        min = j
      }
    }
    [arr[i],arr[min]] = [arr[min],arr[i]]
  }
  return arr;
}

console.log(selectionSort([64, 25, 12, 22, 11]))