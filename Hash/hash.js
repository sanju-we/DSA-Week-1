class HashTable{
  constructor(size){
    this.table = new Array(size)
    this.size = size
  }

  hash(key){
    let total = 0;
    for(let i=0;i<key.length;i++){
      total += key.charCodeAt(i)
    }
    return total % this.size
  }

  set(key,value){
    const index = this.hash(key)
    const bucket = this.table[index]
    if(!bucket){
      this.table[index] = [[key,value]]
    }else{
      const sameKeyItem = bucket.find(item => item[0] === key)
      if(sameKeyItem){
        sameKeyItem[1] = value
      }else{
        bucket.push([key,value])
      }
    }
  }

  get(key){
    const index = this.hash(key)
    const bucket = this.table[index]
    if(bucket){
      const sameKeyItem = bucket.find(item => item[0] === key)
      return sameKeyItem ? console.log(sameKeyItem[1]) : undefined
  }
    return undefined
  }

  remove(key){
    const index = this.hash(key)
    const bucket = this.table[index]
    if(bucket){
      const sameKeyItem = bucket.find(item => item[0] === key)
      if(sameKeyItem){
        bucket.splice(bucket.indexOf(sameKeyItem),1)
      }
    }
  }

  display(){
    for(let i=0;i<this.table.length;i++){
      if(this.table[i]){
        console.log(i,this.table[i])
      }
    }
  }
}

const table = new HashTable(5)
table.set('name','sanju')
table.set('age',20)
// table.display()
table.set('mane','saj') //hashing collision
table.set('maen','jas') //hashing collision
table.get('maen') //hashing collision
// table.display()
table.set('name','sanjay')
table.remove('age')
table.display()