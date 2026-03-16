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

// The XOR sum of a list is the bitwise XOR of all its elements. If the list only contains one element, then its XOR sum will be equal to this element.

// For example, the XOR sum of [1,2,3,4] is equal to 1 XOR 2 XOR 3 XOR 4 = 4, and the XOR sum of [3] is equal to 3.
// You are given two 0-indexed arrays arr1 and arr2 that consist only of non-negative integers.

// Consider the list containing the result of arr1[i] AND arr2[j] (bitwise AND) for every (i, j) pair where 0 <= i < arr1.length and 0 <= j < arr2.length.

// Return the XOR sum of the aforementioned list.

 

// Example 1:

// Input: arr1 = [1,2,3], arr2 = [6,5]
// Output: 0
// Explanation: The list = [1 AND 6, 1 AND 5, 2 AND 6, 2 AND 5, 3 AND 6, 3 AND 5] = [0,1,2,0,2,1].
// The XOR sum = 0 XOR 1 XOR 2 XOR 0 XOR 2 XOR 1 = 0.

// Brute Force
// function getXorSum(arr1,arr2){
//     let sum =0;
//     for(let i=0; i<arr1.length; i++){
//         for(let j=0; j<arr2.length; j++){
//             sum ^= (arr1[i] & arr2[j]);
//         }
//     }
//     return sum;
// };
// // let arr1 = [1,2,3], arr2 = [6,5]; // output ->0
// let arr1 =[12],arr2 =[4]; // output -> 4
// console.log("The XorSum:",getXorSum(arr1, arr2));

// optimal Appraoch
function getXorSum(arr1,arr2){
   let xorSum1 =0 ,xorSum2 =0;
    // find xorSum1 for first array
    for(let num of arr1){
        xorSum1 ^=num;
    }
    // find xorSum2 for 2nd Array
    for(let num of arr2){
        xorSum2 ^=num;
    }
    // return
    return xorSum1 & xorSum2;
};
// let arr1 = [1,2,3], arr2 = [6,5]; // output ->0
let arr1 =[12],arr2 =[4]; // output -> 4
console.log("The XorSum:",getXorSum(arr1, arr2));
