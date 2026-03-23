// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.

// Example 1:

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation:
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7

// var maxSlidingWindow = function(nums, k) {
//     let sum =0;
//     let max =-Infinity;
//     for(let i=0; i<k; i++){
//         sum += nums[i];
//         console.log("Sum in loop")
//     };
//     max = sum;
//     let num = []
//     for(let i=k-2; i<nums.length-k-1; i++){
//         sum += nums[i]; // add element;
//         console.log("After the Subracting Sum:",sum)
//         console.log("After the Subracting Sum:",sum)
//         max =Math.max(max,sum);
//         console.log("Max Sum:",sum)
//         num.push(max);
//     }
//     return num;
// };
// let nums = [1,3,-1,-3,5,3,6,7], k = 3;
// console.log("maxSlidingWindow:",maxSlidingWindow(nums, k));

// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.
// Example 1:

// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
// Example 2:

// Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
// Output: 10
// Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

// var longestOnes = function(nums, k) {
//    let left =0;
//    let zeroCount =0;
//    let maxLength = -Infinity;
//    for(let right =0; right < nums.length; right++){
//     // Expand
//     if(nums[right] === 0){
//         zeroCount++;
//     }
//     // shrink
//     while(zeroCount > k){
//         if(nums[left] === 0){
//             zeroCount--;
//         }
//         left++;
//     }
//     maxLength = Math.max(maxLength , right-left + 1);
//    }
//    return maxLength;
// };
// let nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3;
// console.log("LongestOnes:",longestOnes(nums , k));

// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

// Example 1:

// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.
// Example 2:

// Input: s = "aeiou", k = 2
// Output: 2
// Explanation: Any substring of length 2 contains 2 vowels.

var maxVowels = function (s, k) {
  let sum = 0;
  let vowels = "aeiou";
  let max = -Infinity;
  for (let i = 0; i < k; i++) {
    if (vowels.includes(s[i])) {
      sum += 1;
    }
  }
  max = sum;
  for (let i = k; i < s.length; i++) {
    // Add new char
    if (vowels.includes(s[i])) {
      sum += 1;
    }
    // remove old character
    if (vowels.includes(s[i - k])) {
      sum += 1;
    }
    max = Math.max(max, sum);
  }
  return max;
};
let s = "abciiidef",
  k = 3;
console.log("MaxVowels:", maxVowels(s, k));
