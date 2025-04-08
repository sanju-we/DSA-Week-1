const arr = [6,5,4,3,9,8,0]
function result(arr,val) {
  for(let i=0;i<arr.length-1;i++){
    for (let j = i+1; j < arr.length; j++) {
      if(arr[i]+arr[j]==val){
        const ans = [arr[i],arr[j]]
        return ans
      }
    }
  }
  return false 
}

// time complexity : O(n*n)T
// space : O(1)S

console.log(result([6,5,4,3,9,8,0],10))