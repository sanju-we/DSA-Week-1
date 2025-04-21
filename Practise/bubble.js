const arr = [5,2,6,3,1,4,9,2,56,3,2,1,52,7]

function BubbleSort(arr){
  let length = arr.length;
  for(let i=0;i<length-1;i++){
    for(let j=0;j<length-i-1;j++){
      if(arr[j]>arr[j+1]){
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
      }
    }
  }
  return arr
}

console.log(BubbleSort(arr))

function insertionSort(arr){
  for(let i=0;i<arr.length;i++){
    let temp = arr[i]
    let j = i-1;
    while(j>=0 && arr[j]> temp){
      arr[j+1] = arr[j]
      j--
    }
    arr[j+1]=temp
  }
  return arr
}

console.log(insertionSort(arr))





const str = 'ujnas'


function reverse(str){
  let stack = []
  for(let char of str){
    stack.push(char)
  }
  let ans = ''
  while(stack.length>0){
    ans += stack.pop()
  }
  return ans
}

console.log(reverse(str))


function hasDuplicate(str){
  const map = {}
  for(let char of str){
    if(map[char]) return true
    map[char] = true
  }
  return false
}

console.log(hasDuplicate('hello'))

const students = [
  {name: 'John', age: 20},
  {name: 'Jane', age: 22},
]

function sortByAge(students){
  return students.sort((a,b)=>(a.age - b.age))
}
console.log(sortByAge(students))

// remove duplicates from string using map

function removeDup(str){
  let map = {}
  let result = ''
  for(let char of str){
    if(!map[char]){
      result += char
      map[char] = true
    }
  }
  return result
}
console.log(removeDup('sanjuuuuu'))


function longestCountinesRepeat(str){
  if(str.length === 0) return ''
  let maxChar = str[0] ,maxCount = 1, count = 1
  for(let i=1;i<str.length;i++){
    if(str[i] == str[i-1]){
      count++
    }else{
      if(count>maxCount){
        maxCount = count
        maxChar = str[i-1]
      }
      count = 1
    }
  }
  if(count>maxCount){
    maxCount = count
    maxChar = str[str.length-1]
  }
  return maxChar.repeat(maxCount)
}
console.log(longestCountinesRepeat('a'))

function secondLongest(str){
  const secLongest = str.split(' ').sort((a,b)=>b.length-a.length)
  return secLongest[1]
}
console.log(secondLongest('Sanju is learning data structures and algorithms'))


function mergeArr(arr1,arr2){
  let i=0,j=0,result=[]
  while(i<arr1.length && j<arr2.length){
    if(arr1[i]<arr2[j]){
      result.push(arr1[i])
      i++
    }else{
      result.push(arr2[j])
      j++
    }
  }
  return result
}

console.log(mergeArr([1,3,5],[2,4,6]))

function insertAtBottom(stack,item){
  if(stack.length==0){
    stack.push(item)
    return 
  }
  let temp = stack.pop()
  insertAtBottom(stack,item)
  stack.push(temp)
}

function reverseStack(stack){
  if(stack.length>0){
    let temp = stack.pop()
    reverseStack(stack)
    insertAtBottom(stack,temp)
  }
}

let stack = [1,2,3,4,5]
reverseStack(stack)
console.log(stack)

function mergeSortStr(str){
  if(str.length<=1) return str
  let mid = Math.floor(str.length/2)
  let left = str.slice(0,mid)
  let right = str.slice(mid)
  return merge(mergeSortStr(left),mergeSortStr(right))
}

function merge(left,right){
  let result = []
  let i=0,j=0
  while(i<left.length && j<right.length){
    if(left[i]<right[j]){
      result.push(left[i])
      i++
    }else{
      result.push(right[j])
      j++
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j))
}
console.log(mergeSortStr([1,5,2,3,6,8,4,5]))


class circularQueue {
  constructor(size){
    this.queue = new Array(size)
    this.size = size
    this.front = -1
    this.rear = -1
  }

  enqueue(value){
    if((this.rear+1)%this.size == this.front){
      console.log('Queue is full')
      return 
    }
    if(this.front == -1) this.front = 0
    this.rear = (this.rear+1) % this.size
    this.queue[this.rear] = value
  }

  dequeue(){
    if(this.front == -1){
      console.log('Queue is empty') 
      return 
    }
    let item = this.queue[this.front]
    if(this.front == this.rear){
      this.front = this.rear = -1
    }else{
      this.front = (this.front+1)%this.size
    }
    return console.log(item)
  }
}

let cq = new circularQueue(5)
cq.enqueue(1)
cq.enqueue(2)
cq.enqueue(3)
cq.enqueue(4)
cq.enqueue(5)
cq.enqueue(6)
cq.dequeue()