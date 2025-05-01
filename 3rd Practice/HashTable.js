// Insert keys: "apple", "banana", "orange".
// Find a value for "banana".
// Handle collision when "bpple" (similar to "apple") is inserted.
// Delete a key and check if it's properly removed.
// Build a frequency counter for a string "aabbccdde" using hash table.


class HashTable{
  constructor(size){
    this.table = new Array(size)
    this.size = size
  }

  hash(key){
    let hash = 0
    for(let i=0;i<key.length;i++){
      hash += key.charCodeAt(i)
    }
    return hash%this.size
  }

  set(key,data){
    let index = this.hash(key)
    let bucket = this.table[index]
    if(!bucket){
      this.table[index] = [[key,data]]
    }else{
      let sameKeyItem = bucket.find((x)=>x[0]==key)
      if(sameKeyItem){
        sameKeyItem[1] = data
      }else{
        bucket.push([key,data])
      }
    }
  }

  get(key){
    let index = this.hash(key);
    let bucket = this.table[index]
    if(!bucket){
      console.log('No related data found!')
      return 
    }
    let sameKeyItem = bucket.find((item)=> item[0] === key)
    return sameKeyItem ? console.log(sameKeyItem[1]) : console.log('No related data found!')
  }

  remove(key){
    let index = this.hash(key);
    let bucket = this.table[index]
    if(bucket){
      let sameKeyItem = bucket.find((item)=> item[0] === key)
      if(sameKeyItem){
        bucket.splice(bucket.indexOf(sameKeyItem),1)
      }else{
        console.log('No match found')
        return 
      }
    }else{
      console.log('No match found')
    }
  }

  has(key){
    let index = this.hash(key)
    let bucket = this.table[index]
    if(bucket){
      let sameKeyItem = bucket.find((item)=> item[0] === key)
      if(sameKeyItem){
        console.log('The key is availablle')
      }else{
        console.log('No match keys found')
      }
    }else{
      console.log('NO match found')
    }
  }

  freequency(val){
    let free = {}
    for(let char of val){
      free[char] = (free[char] || 0) +1
    } 
    console.log(free)
    return free
  }
}

let hash = new HashTable(5)
hash.set("apple",10)
hash.set("banana",20)
hash.set("orange",30)
hash.get('banana')
hash.set("bpple",40)
hash.get('bpple')
hash.remove('bpple')
hash.has('a')
hash.freequency('aabbccdde')