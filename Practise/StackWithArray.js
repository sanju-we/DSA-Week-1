class stack{
  constructor(val){
    this.size = val;
    this.item = new Array(val)
    this.top = -1
  }

  push(val){
    if(this.top === this.size-1){
      console.log("Stack overFlow...!")
      return 
    }
    this.top++
    this.item.push(val)
  }

  pop() {
    if(this.top === -1){
      console.log("Stack UnderFlow...!")
      return 
    }
    this.item.pop()
  }

  isEmpty(){
    return console.log(this.item.length === 0)
  }

  peak(){
    if(this.isEmpty()){
      console.log('Stack is empty')
      return 
    }
    return console.log(this.item[this.item.length-1])
  }

  size(){
    this.item.length()
  }

  display(){
    console.log('Stack elements =', this.item.filter((x)=>x!=undefined).join("<-"))
  }
}

const SS = new stack(5)

SS.push(10)
SS.push(20)
SS.push(30)
SS.push(40)
SS.push(50)
SS.pop()
SS.peak()
SS.isEmpty()
SS.display()