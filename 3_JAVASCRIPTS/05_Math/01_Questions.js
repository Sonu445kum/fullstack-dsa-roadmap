// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
// Example 1:
// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2
// Since 2 has only one digit, return it.

// function addDigits(num) {
//   while (num >= 10) {
//     let sum = 0;
//     // recursive call
//     while (num > 0) {
//       sum = sum + (num % 10);
//       num = Math.floor(num / 10);
//     }
//     num=sum;
//   }

//   return num;
// }
// let num = 11;
// console.log(addDigits(num));

// check the power3
// function isPower3(num){
//     // base case
//     if(num <=0) return false;
//     while(num % 3 === 0){
//         num = num / 3;
//     }
//     return num === 1;
// };
// let num=27;
// console.log(isPower3(num));

// check the power4
// function isPower4(num){
//     // base case
//     if(num <=0) return false;
//     while(num % 4 === 0){
//         num = num / 4;
//     }
//     return num === 1;
// };
// let num=16;
// console.log(isPower4(num));

// check the power5
// function isPower5(num){
//     // base case
//     if(num <=0) return false;
//     while(num % 5 === 0){
//         num = num / 5;
//     }
//     return num === 1;
// };
// let num=125;
// console.log(isPower5(num));

// find the tribonacci number
// function tribonacci(n){
//     // base case;
//     if(n===0) return 0;
//     if(n === 1 || n === 2) return 1;
//     // recursive call
//     let a=0,b=1,c=1;
//     for(let i=3; i<=n; i++){
//         let next = a+b+c;
//         a=b;
//         b=c;
//         c=next;
//     };
//     return c;
// };
// let n=4;
// console.log("The Tribonacci Number:",tribonacci(n));

// check the number is the Valid Perfect Sqaure
// function isPerfectSquare(num){
//     // base case
//     if(num <=0) return false;
//     for(let i=1; i<=num; i++){
//         if(num % i === 0 && i*i === num){
//             return true;
//         }
//     }
//     return false;

// };
// let num=2147483647;
// console.log("The Number is Perfect or not:",isPerfectSquare(num))

// 2nd Approach
// function isPerfectSquare(num) {
//   let left = 1,right = num;
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     let sqaure = mid * mid;
//     if (sqaure === num) return true;
//     else if (sqaure < num) left = mid + 1;
//     else if (sqaure > num) right = mid - 1;
//   }
//   return false;
// }
// let num = 144;
// console.log("The Number is Perfect or not:", isPerfectSquare(num));

var mySqrt = function(num) {
    if (num < 2) return num;

    let left = 1;
    let right = Math.floor(num / 2);
    let ans = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let square = mid * mid;

        if (square === num) {
            return mid;
        } else if (square < num) {
            ans = mid;       // store possible answer
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return ans;
};
let num = 4;
console.log("The Square Root of the Number:", mySqrt(num));
