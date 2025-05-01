function isBalanced(s){
  let result = []
  let map = {
    '(':')',
    '{':'}',
    '[':']'
  }

  for(let char of s){
    if(char==='(' || char==='{' || char==='['){
      result.push(char)
    }else if(char===')' || char==='}' || char===']'){
      let last = result.pop()
      if(map[last]!==char) return false
    }
  }
  return result.length === 0
}

console.log(isBalanced('((({{}})))')) 