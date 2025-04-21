function BubbleSort(arr){
  for(let i=0;i<arr.length-1;i++){
    for(let j=0;j<arr.length-i-1;j++){
      if(arr[j]>arr[j+1]){
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
      }
    }
  }
  return arr
}

const arr = [85,96,1,52,6,34,2]
console.log(BubbleSort(arr))