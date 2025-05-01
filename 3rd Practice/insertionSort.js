// Sort [12, 11, 13, 5, 6] step-by-step.

function insertionSort(arr){
  for(let i=0;i<arr.length;i++){
    let temp = arr[i],
    j=i-1
    while(j>=0&&arr[j]>temp){
      arr[j+1] = arr[j]
      j--
    }
    arr[j+1] = temp
  }
  return arr
}

console.log(insertionSort([12, 11, 13, 5, 6]))

// Insert a new number 8 into [1,3,5,7] (keep sorted).
function insertionSorted(arr,val){
  let i = arr.length-1
  arr.push(0)
  while(i>=0 && arr[i]>val){
    arr[i+1]=arr[i]
    i--
  }
  arr[i+1] = val;
  return arr
}

console.log(insertionSorted([1,3,5,9],8))

// Sort a reverse sorted array [9,8,7,6,5] using insertion sort.
function sortReverseSorted(arr){
  for(let i=0;i<arr.length;i++){
    let key = arr[i]
    let j= i-1;
    while(j>=0 && arr[j]>key){
      arr[j+1] = arr[j]
      j--
    }
    arr[j+1] = key 
  }
  return arr
}

console.log(sortReverseSorted([9,8,7,6,5]))