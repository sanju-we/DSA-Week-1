// Big-O-Notation
function arrySum(arr){ // O(1)
  let sum = 0
  for(i=0;i<arr.length;i++){
    sum+=arr[i] //n*O(1)
  }
  return sum //O(1)
}

// O(n) = (T = n*O(1))
// This is linear
// -----------------------------------------------------

function a(arr){ //O(1)
  v = arr[0] //O(1)
  return v //O(1)
}

// T = O(1) + O(1) + O(1)
// T = O(3) represting it as O(1)
//  This is contant 

