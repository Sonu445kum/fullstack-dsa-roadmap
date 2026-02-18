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
function findCompliment(num){
    let mask = 0;
    let temp = num;

    // Create mask like 111... of same length
    while (temp > 0) {
        mask = (mask << 1) | 1;
        temp >>= 1;
    }

    return num ^ mask;

};
let num=5;
console.log("The Compliment of given Num:",findCompliment(num));

