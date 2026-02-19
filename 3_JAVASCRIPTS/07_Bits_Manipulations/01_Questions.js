// You are given an integer n and an integer start.
// Define an array nums where nums[i] = start + 2 * i (0-indexed) and n == nums.length.
// Return the bitwise XOR of all elements of nums.

// Example 1:
// Input: n = 5, start = 0
// Output: 8
// Explanation: Array nums is equal to [0, 2, 4, 6, 8] where (0 ^ 2 ^ 4 ^ 6 ^ 8) = 8.
// Where "^" corresponds to bitwise XOR operator.

// Example 2:
// Input: n = 4, start = 3
// Output: 8
// Explanation: Array nums is equal to [3, 5, 7, 9] where (3 ^ 5 ^ 7 ^ 9) = 8.
// first Approach
// function xorOperations(n, start) {
//   let emptyArr = [];
//   for (let i = 0; i < n; i++) {
//     emptyArr[i] = start + 2 * i;
//   }
//   let ans = emptyArr[0];
//   for (let i = 1; i < n; i++) {
//     ans = emptyArr[i] ^ ans;
//   }
//   return ans;
// }
// let n = 5,
//   start = 0;
// // let n= 4 , start = 3;
// console.log("The XorOperations:", xorOperations(n, start));

// 2nd Appraoch for more Optimized
// function xorOperations(n, start) {
//   let ans=0;
//   for(let i=0; i<n; i++){
//     ans^=(start + 2 * i);
//   }
//   return ans;

// }
// // let n = 5, start = 0;
// let n= 4 , start = 3;
// console.log("The XorOperations:", xorOperations(n, start));

// find the Compliment
// function findCompliment(num){
//     let mask = 0;
//     let temp = num;

//     // Create mask like 111... of same length
//     while (temp > 0) {
//         mask = (mask << 1) | 1;
//         temp >>= 1;
//     }

//     return num ^ mask;

// };
// let num=5;
// console.log("The Compliment of given Num:",findCompliment(num));

// Given a positive integer n, write a function that returns the number of set bits in its binary representation (also known as the Hamming weight).
// Example 1:

// Input: n = 11

// Output: 3

// Explanation:

// The input binary string 1011 has a total of three set bits.

// Example 2:

// Input: n = 128

// Output: 1

// Explanation:

// The input binary string 10000000 has a total of one set bit.
// var hammingWeight = function(n) {
//     let count =0;
//     while(n > 0){
//         n = n & (n-1);
//         count++;
//     }
//     return count;
    
// };
// let n=11;
// console.log(hammingWeight(n));


// Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

// You must implement a solution with a linear runtime complexity and use only constant extra space.
// Example 1:

// Input: nums = [2,2,3,2]
// Output: 3
// Example 2:

// Input: nums = [0,1,0,1,0,1,99]
// Output: 99

// function findUnique(nums){
//     let ones = 0;
//     let twices = 0;
//     for(let num of nums){
//         ones = (ones ^ num) & ~twices;
//         twices = (twices ^ num) & ~ones;
//     };
//     return ones;

// };
// let nums =[2,2,2,3,3,3,4,4,4,5];
// console.log("The unique num:",findUnique(nums));

