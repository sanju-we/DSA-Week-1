


//============================================================= Stack ===================================================================


class Stack {
    constructor() {
        this.stack = [];
    }
    push(element) {
        this.stack.push(element);
    }
    pop() {
        if (this.isEmpty()) {
            return 'Stack is empty !!, Can`t pop !!'
        } else {
            return this.stack.pop();
        }
    }
    peek() {
        return this.stack[this.size() - 1];
    }
    isEmpty() {
        return this.size() === 0;
    }
    size() {
        return this.stack.length;
    }
    print() {
         console.log(this.stack.join(' '))
    }

}

const newStack = new Stack()

newStack.push(120)
newStack.push(10)
newStack.push(-20)
newStack.push(30)
console.log(newStack.isEmpty())
console.log(newStack.peek())
console.log(newStack.print())

// console.log(newStack.pop())
// console.log(newStack.pop())
// console.log(newStack.pop())
// console.log(newStack.pop())
// console.log(newStack.pop())

console.log(newStack);

//```````````````````````````````````````````````````````````````` Questions ```````````````````````````````````````````````````

function reverseString(str){
    let splited = str.split(' ');
    let stack = [];
    for(let i of splited){
        stack.push(i)
    }

    let result = '';
    while(stack.length){
        let current = stack.pop();
        if(current){
            result += ' ' + current;
        }
    }

    return result.trim();
}

console.log(reverseString('a good   example'))

//`````````````````````````````````````````````````````````````````

//(){}[]
// function isvalid(s) {
//     let stack =[];
//     for (let i = 0; i < s.length; i++) {
//         let char = s[i];

//         if(char === '(' || char === '[' ||char === '{'){
//             stack.push(char)
//             console.log(stack);
            
//         }else if(char === ')' || char === ']' ||char === '}'){
//             if(isEmpty(stack)){
//                 return false;
//             }

//             let top = stack.pop();
//             console.log(top);
            
//             if((char===')' && top !== '(') || (char==='}' && top !== '{') || (char=== ']' && top !== '[')){
//                 return false;
//             }
//         }
//     }
//     return (isEmpty(stack));
// }
// function isEmpty(stack){ 
//     return stack.length === 0;
// }

// console.log(isvalid('{[][[[[[[[[[[[[[]]]]]]]]]]]]]}'))
// console.log(isvalid(']{}{}['))
// console.log(isvalid('{}{}[]{}'))