// function gotoLunch(person){
//     if(person === 5) return true;
//     console.log(person);
//     return gotoLunch(person + 1)
// }

// console.log(gotoLunch(1))

// function countDown(n){
//     if(n === 0) return 'Go !!'
//     console.log(n)
//     return countDown(n-1)
// }

// console.log(countDown(10))

// function multiply(arr){
//     let product = 1;
//     for(let i =0;i<arr.length;i++){
//         product *= arr[i];
//         console.log(product);
//     }
//     return product;
// }

// console.log(multiply([1,2,3,4,5]));

// function multiply(arr){
//     console.log(arr);
//     if(arr.length <= 0 ) return 1;
//     else return arr[arr.length-1] * multiply(arr.splice(0,arr.length-1))

// //  5 * multiply([1,2,3,4]) ~> 5 * 4 * multiply([1,2,3]) ~> 5 * 4 * 3 * multiply([1,2]) ~> 5 * 4 * 3 * 2 * multiply([1]) ~> 5 * 4 * 3 * 2 * 1 ~> return 120;
// }
// console.log(multiply([1,2,3,4,5]));


// function factorial(n){ //
//     if(n === 0) return 1;
//     if(n < 0) throw new Error('Try non-negative numbers!!');
//     return n * factorial(n-1);
// }

// console.log(factorial(5));

// function rangeOfNumber(startNum, endNum) {
//     if (endNum < startNum) {
//         return [];
//     } else {
//         const numbers = rangeOfNumber(startNum, endNum - 1);
//         numbers.push(endNum);
//         // console.log(numbers);

//         return numbers;
//     }
// }

// console.log(rangeOfNumber(0,5));

// function isPaliandrome(str){
//     if(str.length <= 1) return true;
//     if(str[0] !== str[str.length-1]) return false;

//     return isPaliandrome(str.slice(1,str.length - 1));
// }

// console.log(isPaliandrome(''));

// function fibinocci(n){ // in loop
//     if(n <= 1 ) return n;
//     let arr = [0,1];
//     for(let i=2;i<=n;i++){
//         arr.push(arr[i-2] + arr[i-1]);
//     }
//     return arr;
// }

// console.log(fibinocci(8));

// function fibonacci(n) {
//     if (n <= 1) return n;
//     else {
//         return fibonacci(n-1) + fibonacci(n - 2);
//     }
// }

// console.log(fibonacci(8))

function reverseString(str){
    if(str === '') return '';
    return reverseString(str.substr(1))+str.charAt(0);
}

// console.log(reverseString('aswin'));

// hello

//----Subsequent Calls: Each call follows the same pattern----

// reverseString('hello') => reverseString('ello') + 'h'       
// reverseString('ello') => reverseString('llo') + 'e'       
// reverseString('llo') => reverseString('lo') + 'l'       
// reverseString('lo') => reverseString('o') + 'l'       
// reverseString('o') => reverseString('') + 'o'       
// reverseString('') = ''

//----Results Unwind: The results from each call are combined----

// ---------reverseString('') => '' + 'o' = 'o'
// ---------reverseString('o') => 'o' + 'l' = 'ol'
// ---------reverseString('lo') => 'ol' + 'l' = 'oll'
// ---------reverseString('llo') => 'oll' + 'e' = 'olle'
// ---------reverseString('ello') => 'olle' + 'h' = 'olleh'


//Backtracking algorithms
function subsets(nums){
    let temp = [];
    let result = [];

    function recursiveSubset(nums,i){
        if(i === nums.length){
            return result.push([...temp])
        }

        temp.push(nums[i]);
        recursiveSubset(nums,i+1);
        temp.pop();
        recursiveSubset(nums,i+1);
    }

    recursiveSubset(nums,0);
    return result;
}

console.log(subsets([1,2,3,4]));
