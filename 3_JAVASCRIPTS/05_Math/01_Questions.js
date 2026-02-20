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

// var mySqrt = function(num) {
//     if (num < 2) return num;

//     let left = 1;
//     let right = Math.floor(num / 2);
//     let ans = 0;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
//         let square = mid * mid;

//         if (square === num) {
//             return mid;
//         } else if (square < num) {
//             ans = mid;       // store possible answer
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }

//     return ans;
// };
// let num = 4;
// console.log("The Square Root of the Number:", mySqrt(num));

// A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. A divisor of an integer x is an integer that can divide x evenly.

// Given an integer n, return true if n is a perfect number, otherwise return false.

// Example 1:

// Input: num = 28
// Output: true
// Explanation: 28 = 1 + 2 + 4 + 7 + 14
// 1, 2, 4, 7, and 14 are all divisors of 28.
// Example 2:

// Input: num = 7
// Output: false
// first approach:
// var checkPerfectNumber = function(num) {
//     let sum = 0;
//     for(let i = 1; i < num; i++){
//         if(num % i === 0){
//             sum += i;
//         }
//     }
//     if(sum === num){
//         return true;
//     }else{
//         return false;
//     }

// };
// let num = 6 ;
// console.log("This Number is Perfect or not:",checkPerfectNumber(num));

// 2nd Approach
// var checkPerfectNumber = function (num) {
 
//     if (num <= 1) return false;

//     let sum = 1; // 1 is always divisor (except 1 itself)

//     for (let i = 2; i * i <= num; i++) {
//         if (num % i === 0) {
//             sum += i;

//             if (i !== num / i) {
//                 sum += num / i;
//             }
//         }
//     }

//     return sum === num;
// };
// let num = 6;
// console.log("This Number is Perfect or not:", checkPerfectNumber(num));

// You are given a non-negative floating point number rounded to two decimal places celsius, that denotes the temperature in Celsius.

// You should convert Celsius into Kelvin and Fahrenheit and return it as an array ans = [kelvin, fahrenheit].

// Return the array ans. Answers within 10-5 of the actual answer will be accepted.

// Note that:

// Kelvin = Celsius + 273.15
// Fahrenheit = Celsius * 1.80 + 32.00
 

// Example 1:

// Input: celsius = 36.50
// Output: [309.65000,97.70000]
// Explanation: Temperature at 36.50 Celsius converted in Kelvin is 309.65 and converted in Fahrenheit is 97.70.
// Example 2:

// Input: celsius = 122.11
// Output: [395.26000,251.79800]
// Explanation: Temperature at 122.11 Celsius converted in Kelvin is 395.26 and converted in Fahrenheit is 251.798.

// var convertTemperature = function(celsius) {
//     let ans = [];
//     let Kelvin = celsius + 273.15;
//     ans.push(Kelvin);
//     let Fahrenheit = celsius * 1.80 + 32 ;
//     ans.push(Fahrenheit);
//     return ans;
// };
// let celsius = 36.50;
// console.log(convertTemperature(celsius));

// You are given an integer n. Your task is to compute the GCD (greatest common divisor) of two values:

// sumOdd: the sum of the smallest n positive odd numbers.

// sumEven: the sum of the smallest n positive even numbers.

// Return the GCD of sumOdd and sumEven.

 

// Example 1:

// Input: n = 4

// Output: 4

// Explanation:

// Sum of the first 4 odd numbers sumOdd = 1 + 3 + 5 + 7 = 16
// Sum of the first 4 even numbers sumEven = 2 + 4 + 6 + 8 = 20
// Hence, GCD(sumOdd, sumEven) = GCD(16, 20) = 4.

// var gcdOfOddEvenSums = function(n) {
//     let sumOdd = 0;
//     let sumEven = 0;
//     for(let i=1; i<=n; i++){
//          sumOdd += 2*i -1;
//          sumEven+= 2*i;   
//     }
//     let a=sumEven,b=sumOdd;

//     while(b !==0){
//         [a , b ]= [b,a % b];
//     }
//     return a;
// };
// let n =9;
// console.log("The GCD of SumOdd and SumEven:",gcdOfOddEvenSums(n));

// Given an integer n, return true if n has exactly three positive divisors. Otherwise, return false.

// An integer m is a divisor of n if there exists an integer k such that n = k * m.

 

// Example 1:

// Input: n = 2
// Output: false
// Explantion: 2 has only two divisors: 1 and 2.
// Example 2:

// Input: n = 4
// Output: true
// Explantion: 4 has three divisors: 1, 2, and 4.

// var isThree = function(n) {
//     let count = 0;
//     for(let i = 1; i<=n; i++){
//         if(n % i === 0){
//             count++;
//         }
//     }
//     return count === 3;
    
// };
// let n = 9;
// console.log(isThree(n));