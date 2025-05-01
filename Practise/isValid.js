function isValid(str){ //O(n)T O(n)S
  let result = []
  let map = {
    '(':')',
    '[':']',
    '{':'}'
  }

  for(let char of str){
    if(char === '(' ||char === '[' ||char === '{'){
      result.push(char)
    }else if(char === ')' ||char === ']' ||char === '}'){
      let del = result.pop()
      if(map[del] !== char) return false
    }
  }
  return result.length === 0
}

console.log(isValid('{{{(([[]]))}}}'))