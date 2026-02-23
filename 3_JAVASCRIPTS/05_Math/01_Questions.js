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

// Given an integer n, return the number of trailing zeroes in n!.
// Note that n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.

// Example 1:
// Input: n = 3
// Output: 0
// Explanation: 3! = 6, no trailing zero.

// Example 2:
// Input: n = 5
// Output: 1
// Explanation: 5! = 120, one trailing zero.

// Example 3:
// Input: n = 0
// Output: 0

// function trailingZeroes(n) {
//   // base case
//   if (n <= 1) return 0;

//   let fact = 1;

//   for (let i = 1; i <= n; i++) {
//     fact *= i;
//   }
//   let count = 0;
//   let temp = fact;
//   while (temp % 10 === 0) {
//     count += 1;
//     temp = Math.floor(fact / 10);
//   }
//   return count;
// }
// let n = 7;
// console.log("Number of Trailing Zeros are:", trailingZeroes(n));

// 2nd Appraoch
// function trailingZeroes(n) {
//   let count = 0;
//   while (n > 0) {
//     n = Math.floor(n / 5);
//     count += n;
//   }
//   return count;
// }
// let n = 7;
// console.log("Number of Trailing Zeros are:", trailingZeroes(n));


// Given an integer number n, return the difference between the product of its digits and the sum of its digits.

// Example 1:

// Input: n = 234
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15
// Example 2:

// Input: n = 4421
// Output: 21
// Explanation: 
// Product of digits = 4 * 4 * 2 * 1 = 32 
// Sum of digits = 4 + 4 + 2 + 1 = 11 
// Result = 32 - 11 = 21

// var subtractProductAndSum = function(n) {
//     let product = 1,sum = 0;
//     while(n > 0){
//         let lastDigit = n % 10 ;
//         sum += lastDigit;
//         product *= lastDigit;
//         n = Math.floor(n/10);
//     };
//     return product - sum ;

    
// };
// let n = 234;
// console.log("subtractProductAndSum:",subtractProductAndSum(n));

// Given a binary array nums, return the maximum number of consecutive 1's in the array.

// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
// Example 2:

// Input: nums = [1,0,1,1,0,1]
// Output: 2

// function findMaxConsecutiveOnes(nums){
//     let maxCount = 0;
//     let currentCount = 0 ;
//     for(let i =0; i<nums.length; i++){
//         if(nums[i] === 1){
//             currentCount++;
//             maxCount = Math.max(maxCount , currentCount);
//         }else{
//             currentCount = 0;
//         }
//     }
//     return maxCount;
// };
// let nums = [1,0,2,1,1,1,1];
// console.log("The Max Consecutive ones:",findMaxConsecutiveOnes(nums));

// Given an integer num, return the number of steps to reduce it to zero.

// In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.
// Example 1:

// Input: num = 14
// Output: 6
// Explanation: 
// Step 1) 14 is even; divide by 2 and obtain 7. 
// Step 2) 7 is odd; subtract 1 and obtain 6.
// Step 3) 6 is even; divide by 2 and obtain 3. 
// Step 4) 3 is odd; subtract 1 and obtain 2. 
// Step 5) 2 is even; divide by 2 and obtain 1. 
// Step 6) 1 is odd; subtract 1 and obtain 0.

function numberOfSteps(nums){
    let step = 0;
    while(nums > 0){
        if(nums % 2 === 0){
            step++;
            nums = nums /2
        }else if( nums %2 !==0){
            step++;
            nums = nums-1
        }
    }
    return step;

}
let nums = 123
console.log("The Number of Steps:",numberOfSteps(nums))
