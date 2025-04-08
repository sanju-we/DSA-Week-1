
// ============================================================ String ===============================================================


const str = 'Aswin is very good boy !!'
console.log(str);
// console.log('---------------------------------');

// console.log`Aswin`
// console.log(str.startsWith('A'))//boolean
// console.log(str.endsWith('!'))//boolean

// console.log(str.indexOf('b'))
// console.log(str.lastIndexOf('o')); //  20

// //extracting substring
// console.log(str.substring(14));
// console.log(str.substring(14,18));// start:end
// console.log(str.substring(14,-1));// other than selected

// console.log(str.slice(4));//slice before index 4
// console.log(str.slice(-4));//sliceing from reverse (before index 4)
// console.log(str.slice(4,7));//4-index to before 7-index
// console.log(str.slice(4,-3));// both side slicing (before 4-index && reverse also(before index 3))
// console.log(str.slice(-6,-4))//sliceing from reverse (before index 6),once more cutting out of index from back

// just imagine
// let toBeConverted = 123;
// console.log((toBeConverted));
// console.log(String(toBeConverted));

toBeConverted = {name:'aswin'}
// console.log(toBeConverted)
// console.log(String(toBeConverted))//not effective,we cant 
// console.log(JSON.stringify(toBeConverted))//now we can stringfy the objects

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// console.log('A' === 'a');//ASCII value or code (because of 65 !== 97)
// console.log(str.charCodeAt(0));//65 (get the ASCII value of index)
// console.log(String.fromCharCode(65));// ASCII to letters

//string comparison
// const str1 = 'apple';
// const str2 = 'apple';
// console.log(str1.localeCompare(str2)); // 0 complete match
// const str1 = 'apple';
// const str2 = 'appl';
// console.log(str1.localeCompare(str2)); // 1 partial match
// const str1 = 'appl';
// const str2 = 'apple';
// console.log(str1.localeCompare(str2)); // -1 no match

// console.log(str.includes('A'))// returns booleans

//split and join
// const str1 = 'mern stack developer'
// const arr1 = ['apple','banana']
// console.log(str1.split(''))
// console.log(arr1.join(' and '));


// ========================================================== Question =================================================

// //Ques1:------------ Truncate the text

// function truncate(str, maxlength){
//     if(str.length > maxlength)
//         return str.slice(0,maxlength) + "...";
//     else return str;
// }

// console.log(truncate('Aswin is good boy',8));

//--------------------------------------------------------------------

// //Ques2:-------------- Paliandrome number

// function ispaliandrome(x){
//     return x > 0 ? false : (x === +x.toString().split('').reverse().join(''))  //+ is used to convert to number;
// }

// // console.log(ispaliandrome(12));

// //-----------------------------------------------------------------

// //Ques3:---------------- Hamming distance

// function hammingDistance(x,y){
//     if(x.length !== y.length){
//         throw new Error('String must be equal length')
//     }
//     let distance = 0;

//     for(i=0;i<x.length;i++){
//        if(x[i] !== y[i]){
//         distance++;
//        }
//     }
//     return distance;
// }

// // console.log(hammingDistance('apple','aoplw'))

//-----------------------------------------------------------------

// //Ques4:---------------- Hamming distance in leet code 461;

// function hammingDistanceLeet(x,y){
//     x = x.toString(2);
//     y = y.toString(2);
//  console.log(x,y);
 

//     if(x.length < y.length){
//         while(x.length !== y.length) x ="0"+x
//     }else{
//         while(x.length !== y.length) y ="0"+y
//     }
//     console.log(x,y);

//     let distance = 0;

//     for(i=0;i<x.length;i++){
//        if(x[i] !== y[i]){
//         distance++;
//        }
//     }
//     return distance;
// }

// console.log(hammingDistanceLeet(1,4))

//-----------------------------------------------------------

// //Ques5:--------------------- Valid Anagram

// function isAnagram(s,t){
//     if(s.length !== t.length) return false;
//     // s = s.split('').sort().join('')
//     // t = t.split('').sort().join('')
//     // console.log(s,t);
    

//     let obj1 = {};
//     let obj2 = {};

//     for(let i= 0; i<s.length ;i++){
//         obj1[s[i]] = (obj1[s[i]] || 0 ) + 1;
//         obj2[t[i]] = (obj2[t[i]] || 0 ) + 1;
//     }
//     console.log(obj1,obj2);
    

//     for(let key in obj1){
//         if(obj1[key] !== obj2[key]) return false;
//     }

//     return true;

// }
// console.log(isAnagram('rat','car'))


// leetcode-------------------------------------------

// var intToRoman = function(num) {
//     const romanNum = {
//     M: 1000,
//     CM: 900,
//     D: 500,
//     CD: 400,
//     C: 100,
//     XC: 90,
//     L: 50,
//     XL: 40,
//     X: 10,
//     IX: 9,
//     V: 5,
//     IV: 4,
//     I: 1,
//   }
//   var str = ''
//    for (var i of Object.keys(romanNum)) {
//     console.log(Object.keys(romanNum));
//     console.log(romanNum[i]);
//     var q = Math.floor(num / romanNum[i])
//     console.log(q,i);
//     num = num - q * romanNum[i]
//     console.log(num);
//     console.log(i.repeat(q));
    
//     str += i.repeat(q);
//   }
//   return str

// };

// console.log(intToRoman(12));

// let strs = ["flower","flight","flow"]

// var longestCommonPrefix = function(strs) {
//     let count = 0;
//     for(let i = 0;i<strs.length;i++){
//         for (let j = i+1; j < strs.length; j++) {
//             if(strs[i][j].localeCompare(strs[j][j]) === 0){
//                 count++
//                 console.log(strs[i])
//             }
//         }
        
//     }

//     return count
// };

// console.log(longestCommonPrefix(strs));
