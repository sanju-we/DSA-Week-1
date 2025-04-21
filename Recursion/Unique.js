function Unique(str){
  let freq = {}

  for(let char of str){
    freq[char] = (freq[char] || 0) +1
  }

  let result = ''
  for(let val of str){
    if(freq[val] == 1){
      result += val
    }
  }
  console.log(freq)
  return result
}

console.log(Unique('sanju'))