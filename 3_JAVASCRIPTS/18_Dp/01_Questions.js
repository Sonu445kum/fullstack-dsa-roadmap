// Find the  fibbonacci number:
// this is Memoizations Form;
// function fib(n , memo = {}){
//     if(n in memo) return memo[n];
//     if(n <= 1) return n;
//     memo[n] = fib(n-1, memo) + fib(n-2, memo);
//     return memo[n];
// }
// let n=13;
// console.log("Fibbonacci Number:",fib(n));

// Tabulations form:
// function fib(n){
//     let dp = new Array(n+1).fill(0);
//     dp[1] = 1;
//     for(let i=2; i<=n; i++){
//         dp[i] = dp[i-1] + dp[i-2];
//     }
//     return dp[n];
// };
// let n=13;
// console.log("Fibbonacci:",fib(n));


// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// var climbStairs = function(n){
//     let dp  = new Array(n+1).fill(0);
//     dp[0] = 1;
//     dp[1] = 1;
//     for(let i=2; i<=n; i++){
//         dp[i] = dp[i-1] + dp[i-2];
//     };
//     return dp[n];
// };
// let n = 3;
// console.log("Total Ways to CLimbs Stairs:",climbStairs(n));

// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.

// var rob = function(nums) {
//     let n = nums.length;
//     if(n === 1) return nums[0];
//     let dp = new Array(n+1).fill(0);
//     dp[0] = nums[0];
//     dp[1] = Math.max(nums[0] , nums[1]);
//     for(let i=2; i<=n; i++){
//         dp[i] = Math.max(nums[i]+dp[i-2] ,dp[i-1]);
//     }
//     return dp[n-1];
// };
// let nums = [1,2,3,1];
// console.log("Robs:",rob(nums));

// function knapsack(nums, target){
//     let n = nums.length;
//     let dp = new Array(target + 1).fill(false);

//     dp[0] = true;

//     for(let num of nums){
//         for(let j = target; j >= num; j--){
//             dp[j] = dp[j] || dp[j - num];
//         }
//     }

//     return dp[target];
// };
// let nums = [1,2,3,1] ,target=6;
// console.log("Knapsacks:",knapsack(nums , target));

// var canPartition = function(nums) {
//     let sum = nums.reduce((a,b) => a+b, 0);
//     if(sum % 2 !== 0) return false;

//     let target = sum / 2;
//     let dp = new Array(target + 1).fill(false);
//     dp[0] = true;

//     for(let num of nums){
//         for(let j = target; j >= num; j--){
//             dp[j] = dp[j] || dp[j - num];
//         }
//     }

//     return dp[target];
// };
// let nums = [1,2,3,1];
// console.log("canPartition:",canPartition(nums));

var findTargetSumWays = function(nums, target) {
    let sum = nums.reduce((a,b) => a+b, 0);

    if((sum + target) % 2 !== 0 || sum < Math.abs(target)) return 0;

    let P = (sum + target) / 2;

    let dp = new Array(P + 1).fill(0);
    dp[0] = 1;

    for(let num of nums){
        for(let j = P; j >= num; j--){
            dp[j] += dp[j - num];
        }
    }

    return dp[P];
};
let nums = [1,2,3,1], target = 4;
console.log("findTargetSumdays:",findTargetSumWays(nums , target));