// Sort [5,1,4,2,8] using bubble sort (draw each swap)

function bubbleSort(arr){
  for(let i=0;i<arr.length-1;i++){
    for(let j=0;j<arr.length-i-1;j++){
      if(arr[j]>arr[j+1]){
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
      }
    }
  }
  return arr
}

console.log(bubbleSort([5,1,4,2,8]))


// Sort an almost sorted array like [1,2,3,5,4] using optimized bubble sort.
function isSorted(arr){
  for(let i=0;i<arr.length-1;i++){
    let swapped = false;
    for(let j=0;j<arr.length-i-1;j++){
      if(arr[j]>arr[j+1]){
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
        swapped = true
      }
    }
    if(!swapped) break;
  }
  return arr
}

console.log(isSorted([1, 2, 3, 5, 4]))

// Count the number of swaps made
function sortCount(arr){
  let swapped = 0
  for(let i=0;i<arr.length-1;i++){
    for(let j=0;j<arr.length-i-1;j++){
      if(arr[j]>arr[j+1]){
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
        swapped++
      }
    }
  }
  console.log(`it taken ${swapped} swapped`)
  return arr
}

console.log(sortCount([8,1,0,6,1,5,9,6]))