// class Hashtable {
//     constructor(size){
//         this.table = new Array(size);
//         this.size = size;
//     }

//     hash(key){
//         let total = 0;
//         for(let i=0;i<key.length;i++){
//             total += key.charCodeAt(i);
//         }
//         return total % this.size;
//     }

//     set(key,value){
//         const index = this.hash(key);
//         console.log(index);
        
//         // this.table[index] = value;
//         let bucket = this.table[index];
//         if(!bucket){
//             this.table[index] = [[key, value]];
//         }else{
//             const sameKeyItem = bucket.find(item => item[0]=== key);
//             if(sameKeyItem) sameKeyItem[1] = value;
//             else bucket.push([key, value])
//         }

//     }


//     get(key){
//         const index = this.hash(key);
//         // return this.table[index];

//         const bucket = this.table[index];
//         if(bucket){
//             const sameKeyItem = bucket.find(item => item[0] === key);
//             if(sameKeyItem) return sameKeyItem[1]
//             else return undefined;
//         }
//     }
//     remove(key){
//         const index = this.hash(key);
//         this.table[index] = undefined;
//     }
//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]) {
//                 console.log(i,this.table[i]);
//             }
//         }
//     }
// }

// const table = new Hashtable(5);
// table.set("name","aswin")
// table.set('age','21');
// table.set('ow','sinan')
// console.log(table.get('ow'))
// table.remove('name')
// table.display()
// console.log(table)

//-------------------------------------------------------------------------------

// class HashTable {
//     constructor(size=10){
//         this.table = new Array(size);
//         this.size = size;
//     }
//     hash(key){
//         let hash = 0;
//         let Prime = 31;
//         for(let char of key){
//             hash = (hash * Prime + char.charCodeAt(0)) % this.size; 
//         }
//         // console.log(hash);
//         return hash;
//     }
    
//     set(key, value){
//         const index = this.hash(key);
//         // this.table[index] = value;
//         const bucket = this.table[index];
//         if(!bucket){
//             this.table[index] = [[key, value]];
//         }else{
//             const sameKeyItem = bucket.find(item => item[0] === key);
//             if(sameKeyItem) sameKeyItem[1] = value;
//             else bucket.push([key, value]);
//         }
//     }
//     get(key){
//         const index = this.hash(key);
//         const bucket = this.table[index];
        
//         if(bucket) {
//             const sameKeyItem = bucket.find(item => item[0] === key);
//             if(sameKeyItem) return sameKeyItem[1];
//         }
//         return undefined;
//     }
//     remove(key){
//         const index = this.hash(key);
//         const bucket = this.table[index];
//         if(bucket){
//             const sameKeyItem = bucket.find(item => item[0] === key);
//             if(sameKeyItem) bucket.splice(bucket.indexOf(sameKeyItem),1)
//         }
//         return 'no such key-value !!'
//     }
// }

// const newTable = new HashTable(5);
// newTable.set('name','aswin');
// newTable.set('mane','asreya');
// newTable.set('manzce','asreya');
// newTable.set('mazxzxxne','asreya');
// newTable.set('ma','asreya');
// newTable.set('mafdsahghg00','asreya');
// newTable.set('mafdsahghpoopogLFJFW','asreya');
// newTable.remove('mafdsahghpoopogLFJFW');
// newTable.remove('manzce');
// newTable.remove('mazxzxxne');
// newTable.remove('ma');
// newTable.remove('mafdsahghg00');

// console.log(newTable.get('manzce'))

// console.log(newTable);

//--------------------------------------------------------

