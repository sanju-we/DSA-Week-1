function selectionSort(arr){
  for(let i=0;i<arr.length-1;i++){
    let min = i
    for(let j=i+1;j<arr.length;j++){
      if(arr[j]<arr[min]){
        min = j
      }
    }
    [arr[min],arr[i]] = [arr[i],arr[min]]
  }
  return arr
}

let arr = [1,5,2,6,3,4,8,2,6]
console.log(selectionSort(arr))