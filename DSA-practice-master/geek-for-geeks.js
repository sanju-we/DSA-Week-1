
//============================================================ Geeks for Geeks ===========================================================================4

// ~~~~~~~~~~~~~~~~~~~~~~ check Even or not

// function isEven(num){
//     return num % 2 === 0; //````````````````````````finding with reminder
// }

// let n = -9;
// if(isEven(n)){
//     console.log(true);
// }else{
//     console.log(false);
// }

// ```````````````````````````````````````````````````````````````````````````````

// function isEven(n){
//     return (n & 1) === 0 ; //--------------using bitwise operator;
// }

// console.log(isEven(23))

 
// ~~~~~~~~~~~~~~~~~~~~~~ multiple table

// function table(n,i=1){
//     if(i===11){
//         return;
//     }

//     console.log(`${i} x ${5} = ${i*n}`)
//     i++;
//     table(n,i);
// }

// table(5);

// Iterative JavaScript Code to find sum of digits

function sumOfDigits(n) {
    let sum = 0;
    while (n !== 0) {

        // Extract the last digit
        let last = n % 10;
        console.log(last);
        

        // Add last digit to sum
        sum += last;
        console.log(sum);
        

        // Remove the last digit
        n = Math.floor(n / 10);
    }
    return sum;
}

// Driver Code
let n = 12345;
console.log(sumOfDigits(n));