function isBalanced(arr){
  let stack = []
  let pairs = {
    ')' : '(',
    '}' : '{',
    ']' : '['
  }

  for(let char of arr){
    if(char === '(' || char === '{' || char === '['){
      stack.push(char)
    }else if(char === ')' || char === '}' || char === ']'){
      if(stack.pop() !== pairs[char])
        return false
    }
  }
  return stack.length === 0
}


console.log(isBalanced("(){}[]"));
console.log(isBalanced("({[()]})"));
console.log(isBalanced("({[})"));
console.log(isBalanced("((()))"));
console.log(isBalanced("{[(])}"));
