// how to find the Preffix sum
// let nums = [....];
// let n = nums.length;

// let prefix = new Array(n);
// prefix[0] = nums[0];

// for (let i = 1; i < n; i++) {
//     prefix[i] = prefix[i - 1] + nums[i];
// }
// let num =[1,2,3,4]

// find the subarray sum with k
// var subarraySum = function (nums, k) {
//   let map = new Map();
//   map.set(0, 1);
//   let sum = 0;
//   let count = 0;
//   for (let num of nums) {
//     sum += num;
//     if (map.has(sum - k)) {
//       count += map.get(sum - k);
//     }
//     map.set(sum, (map.get(sum) || 0) + 1);
//   }
//   return count;
// };
// let nums = [4,5,0,-2,-3,1], k = 5;
// console.log("SubarraySum:",subarraySum(nums, k));

// Given an integer array nums and an integer k, return the number of non-empty subarrays that have a sum divisible by k.

// A subarray is a contiguous part of an array.

// Example 1:

// Input: nums = [4,5,0,-2,-3,1], k = 5
// Output: 7
// Explanation: There are 7 subarrays with a sum divisible by k = 5:
// [4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]
// Example 2:

// Input: nums = [5], k = 9
// Output: 0

// var subarraysDivByK = function (nums, k) {
//   let map = new Map();
//   map.set(0, 1);
//   let sum = 0;
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//     let rem = sum % k;
//     // if the remainder is negative
//     if (rem < 0) rem += k;
//     if (map.has(rem)) {
//       count += map.get(rem);
//     }
//     map.set(rem, (map.get(rem) || 0) + 1);
//   }
//   return count;
// };
// ((nums = [4, 5, 0, -2, -3, 1]), (k = 5));
// console.log("SubarrayDivByK:", subarraysDivByK(nums, k));

// Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum goal.

// A subarray is a contiguous part of the array.

 

// Example 1:

// Input: nums = [1,0,1,0,1], goal = 2
// Output: 4
// Explanation: The 4 subarrays are bolded and underlined below:
// [1,0,1,0,1]
// [1,0,1,0,1]
// [1,0,1,0,1]
// [1,0,1,0,1]
// Example 2:

// Input: nums = [0,0,0,0,0], goal = 0
// Output: 15

function numSubarraysWithSum(nums , goal){
    let map = new Map();
    map.set(0 , 1);
    let count = 0;
    let sum = 0;
    for(let num of nums){
        sum += num;

        // check sum - goal is already present or not in map
        // if the sum - goal is present ,then incrment the count
        if(map.has(sum - goal)){
            count += map.get(sum - goal);
        }
        map.set(sum , (map.get(sum) || 0) + 1);
    }
    return count;
};
let nums = [1,0,1,0,1], goal = 2;
console.log("numSubarraysWithSum:",numSubarraysWithSum(nums , goal));

