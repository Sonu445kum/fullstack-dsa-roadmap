// Find maximum element in array
// const arr = [1, 2, 3, 4, 5, 6, 7, 89];
// let maxValue = arr[0];
// function max(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (maxValue < arr[i]) {
//       maxValue = arr[i];
//     }
//   }
//   return maxValue;
// }

// console.log("Max Value in the Arrays:", max(arr));
// Find minimum element in array
// const arr = [0,1, 2, 3, 4, 5, 6, 7, 89];
// let minValue = Infinity;
// function min(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (minValue > arr[i]) {
//       minValue = arr[i];
//     }
//   }
//   return minValue;
// }

// console.log("Max Value in the Arrays:", min(arr));
// Find second largest element
// let firstMax=-Infinity;
// let secMax =-Infinity;
// let thirdMax =-Infinity;
// function finSecMax(arr){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] > firstMax){
//             thirdMax=secMax;
//             secMax=firstMax;
//             firstMax=arr[i];
//         }else if(arr[i]>secMax){
//             secMax=arr[i];
//         }else if(arr[i] > thirdMax){
//             thirdMax=arr[i];
//         }
//     }
//     return  {firstMax,secMax,thirdMax};
// };
// const arr = [9,3,21,4,56,90];
// console.log(finSecMax(arr))

// Remove duplicates from array

// Find duplicate elements

// Find sum of array elements

// Find average of array

// Merge two arrays

// Find intersection of arrays

// Find union of arrays

// Rotate array by k steps

// Reverse an array

// Check if array is sorted

// Find missing number in array

// Count frequency of elements
// let count=0;
// function countFrequency(arr){
//     for(let i=0; i<arr.length; i++){

//     }

// }
// const arr =[1,2,2,3,4,5,6,7];

// Flatten array (1 level)

// Flatten array (deep)

// Chunk array into subarrays

// Remove falsy values

// Find longest increasing subsequence (basic)

// Find max subarray sum

// function moveAllZero(arr) {
//     let index = 0;

//     // Move non-zero elements forward
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== 0) {
//             arr[index] = arr[i];
//             index++;
//         }
//     }

//     // Fill remaining positions with zero
//     while (index < arr.length) {
//         arr[index] = 0;
//         index++;
//     }

//     return arr;
// }

// function moveAllZero(arr) {
//     let j = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== 0) {
//             [arr[i], arr[j]] = [arr[j], arr[i]];
//             j++;
//         }
//     }
//     return arr;
// }

// let arr = [1, 0, 30, 4, 0, 3];
// console.log(moveAllZero(arr));

// Sort array without using sort()
// function sortArr(arr){
//     for(let i=0; i < arr.length-1; i++){
//         for(let j=0; j < arr.length - i -1; j++){
//             if(arr[j] > arr[j+1]){
//                 [arr[j] , arr[j+1]] = [arr[j+1] , arr[j]];
//             }
//         }
//     }
//     return arr;
// }
// const arr=[4,3,2,5,6,7,1];
// console.log(sortArr(arr));

// Find kth largest element
// function kthLargestNum(arr){

// }

// Shuffle array
// You are given a large integer represented as an integer array digits,
//  where each digits[i] is the ith digit of the integer.
// The digits are ordered from most significant to least significant in left-to-right order.
// The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.

// var plusOne = function(digits) {
//     let pluseOne=1;
//     let sum=0;
//     for(let i=0; i<digits.length; i++){
//         sum=sum*10 + digits[i];
//     }
//     sum+=pluseOne;
//    let array=[...sum.toString()].map(Number);
//     return array;
// };
// const digits=[9];
// console.log(plusOne(digits));

// find the length of last word;
// let str ='Hello Wolrd sonu';
// function findLenLastWord(str){
//   let word=str.trim().split(" ");
//   word = word[word.length - 1].length;
//   return word;
// }
// console.log(findLenLastWord(str));

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4

// Example 3:
// Input: nums = [1]
// Output: 1
// first Approach:
// function findSingleNum(nums){

//   let single=0;
//   // base case
//   if(nums.length === 0) return;
//   if(nums.length === 1) return nums[0];
//   // recursive call
//   for(let i=0 ; i<nums.length; i++){
//     single=nums[i]^single;
//   }
//   return single;

// }

// 2nd Approach
// function findSingleNum(nums){
//   let single=0;
//   for(let num of nums){
//     single ^= num
//   }
//   return single;
// }
// let nums =[4,1,2,1,2];
// console.log("The Single Number:",findSingleNum(nums))

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.
// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Example 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4

// function searchInsertPost(nums,target){
//     let n = nums.length;
//     let start = 0, end  = n -1;
//     // if the element is found in the given arrays
//     while(start <=end){
//         let mid = Math.floor((start + end)/2);
//         if(nums[mid] === target) return mid;
//         else if(target > nums[mid]) start = mid + 1;
//         else if( target < nums[mid]) end = mid - 1 ;
//     }
//     // if the element is not found in the given array
//     return start;

// };
// // let nums =[1,3,5,6],target = 5;
// // let nums = [1,3,5,6], target = 2 ;
// let nums = [1,3,5,6], target = 7
// console.log("The Index of Search Element:",searchInsertPost(nums,target));

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// function majorityElement(nums){
//     let major = null;
//     let count = 0;
//     for(let num of nums){
//         if(count === 0){
//             major = num;
//         }
//         count += (num === major) ? 1 : -1;
//     };

//     return major;
// };
// let nums = [3,2,3];
// console.log("The Majority Element :",majorityElement(nums));

// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

// Given an integer array nums, return true if the given array is monotonic, or false otherwise.

// Example 1:

// Input: nums = [1,2,2,3]
// Output: true
// Example 2:

// Input: nums = [6,5,4,4]
// Output: true
// Example 3:

// Input: nums = [1,3,2]
// Output: false

// var isMonotonic = function(nums) {
//     let increasing = true;
//     let decreasing = true;

//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] < nums[i - 1]) {
//             increasing = false;
//         }
//         if (nums[i] > nums[i - 1]) {
//             decreasing = false;
//         }
//     }

//     return increasing || decreasing;
// };

// first appraoch
// var maximizeExpressionOfThree = function (nums) {
//   let max1 = -Infinity,
//     max2 = -Infinity,
//     min1 = Infinity;
//   let expressions = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > max1) {
//       max2 = max1;
//       max1 = nums[i];
//     } else if (nums[i] > max2) {
//       max2 = nums[i];
//     }
    
//     if (nums[i] < min1) {
//       min1 = nums[i];
//     }
//   }
//   expressions = max1 + max2 - min1;
//   return expressions;
// };
// let nums = [1, 4, 2, 5];
// console.log(maximizeExpressionOfThree(nums));

// var maximizeExpressionOfThree = function (nums) {
//   let max1 = -Infinity,
//     max2 = -Infinity,
//     min1 = Infinity;
//   let expressions = 0;
//   for (let num of nums) {
//     if (nums > max1) {
//       max2 = max1;
//       max1 = num;
//     } else if (num > max2) {
//       max2 = num;
//     }
    
//     if (nums < min1) {
//       min1 = nums;
//     }
//   }
//   expressions = max1 + max2 - min1;
//   return expressions;
// };
// let nums = [1, 4, 2, 5];
// console.log(maximizeExpressionOfThree(nums));


// var minimumDistance = function(nums) {
//     let map = new Map();
//     let minDist = Infinity;

//     for (let i = 0; i < nums.length; i++) {
//         if (!map.has(nums[i])) {
//             map.set(nums[i], []);
//         }
//         map.get(nums[i]).push(i);
//     }

//     for (let indices of map.values()) {
//         if (indices.length >= 3) {
//             for (let i = 0; i <= indices.length - 3; i++) {
//                 let first = indices[i];
//                 let third = indices[i + 2];
//                 minDist = Math.min(minDist, 2 * (third - first));
//             }
//         }
//     }

//     return minDist === Infinity ? -1 : minDist;
    
// };
// let nums = [1,2,1,1,3];
// console.log(minimumDistance(nums));

// merge short:
// var merge = function(nums1, m, nums2, n) {
//     let i = m - 1;          // last element in nums1
//     let j = n - 1;          // last element in nums2
//     let k = m + n - 1;      // last position of nums1

//     while (i >= 0 && j >= 0) {
//         if (nums1[i] > nums2[j]) {
//             nums1[k] = nums1[i];
//             i--;
//         } else {
//             nums1[k] = nums2[j];
//             j--;
//         }
//         k--;
//     }

//     // If nums2 still has elements left
//     while (j >= 0) {
//         nums1[k] = nums2[j];
//         j--;
//         k--;
//     }
// };
// let nums1 = [1,2,3,0,0,0], m = 3;
// let nums2 = [2,5,6], n = 3;
// console.log("The Merge Short of this:",merge(nums1 , m , nums2 , n));

// console.log(merge(nums1 , m , nums2 , n));

// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.
// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// Example 2:

// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.
// Example 3:

// Input: nums = [1,2,3]
// Output: 0

// var numIdenticalPairs = function(nums) {
//     let count = 0;
//     for(let i = 0 ; i <nums.length; i++){
//         for(let j = i+1; j<nums.length ; j++){
//             if(nums[i] === nums[j] && i < j){
//                 count++;
//             }
//         }
//     }
//     return count;
// };
// let nums = [1,2,3,1,1,3];
// console.log("The Number of Goods Pair:",numIdenticalPairs(nums));
//  T.C => O(n*n);

// var numIdenticalPairs = function(nums) {
//     let count = 0;
//     let freq = {};
//     for(let num of nums){
//         if(freq[num]){
//             count += freq[num];
//         }
//         freq[num] = (freq[num] | 0) + 1;
//     }
//     return count;
// };
// let nums = [1,2,3,1,1,3];
// console.log("The Number of Goods Pair:",numIdenticalPairs(nums));

// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

// Return the sum of all the unique elements of nums.

 

// Example 1:

// Input: nums = [1,2,3,2]
// Output: 4
// Explanation: The unique elements are [1,3], and the sum is 4.
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: 0
// Explanation: There are no unique elements, and the sum is 0.
// Example 3:

// Input: nums = [1,2,3,4,5]
// Output: 15
// Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.

// var sumOfUnique = function(nums) {
//     let freq = {};
//     for(let num of nums){
//         freq[num] = (freq[num] || 0) + 1;
//     }
//     let sum = 0;
//     for(let [key, value] of Object.entries(freq)){
//         if(value === 1){
//             sum +=Number(key);
//         }
//     }
//     return sum;
// };
// let nums = [1,1,1,1,1];
// console.log("SumOfUnique:",sumOfUnique(nums));

// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// function rotateArray(nums,k){
//     k = k%nums.length;
//     function reverse(arr,left,right){
//         while(left < right){
//             [arr[left],arr[right]]=[arr[right] , arr[left]];
//             left++;
//             right--;
//         }
//     }
//     // reverse the whole array
//     reverse(nums,0,nums.length -1);
//     // reverse the k element
//     reverse(nums,0,k-1);
//     // reverse the remaining elements
//     reverse(nums,k,nums.length - 1);
//     return nums;
    
// };
// let nums = [1,2,3,4,5,6,7] , k = 3;
// console.log("Rotate Array:",rotateArray(nums,k));

// You are given an integer array nums and an integer k.

// For each index i where 0 <= i < nums.length, change nums[i] to be either nums[i] + k or nums[i] - k.

// The score of nums is the difference between the maximum and minimum elements in nums.

// Return the minimum score of nums after changing the values at each index.

 

// Example 1:

// Input: nums = [1], k = 0
// Output: 0
// Explanation: The score is max(nums) - min(nums) = 1 - 1 = 0.
// Example 2:

// Input: nums = [0,10], k = 2
// Output: 6
// Explanation: Change nums to be [2, 8]. The score is max(nums) - min(nums) = 8 - 2 = 6.
// Example 3:

// Input: nums = [1,3,6], k = 3
// Output: 3
// Explanation: Change nums to be [4, 6, 3]. The score is max(nums) - min(nums) = 6 - 3 = 3.

// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

// A subarray is a contiguous non-empty sequence of elements within an array.

 

// Example 1:

// Input: nums = [1,1,1], k = 2
// Output: 2
// Example 2:

// Input: nums = [1,2,3], k = 3
// Output: 2

// function sumSubArrayByK(nums,k){
//     let map = {0:1},sum = 0 , count = 0;
//     for(let num of nums){
//         sum += num;

//         if(map[sum - k]){
//             count += map[sum - k];
//         }
//         map[sum] = (map[sum] || 0) + 1;
//     }
//     return count;
// };
// let nums = [1,2,3] , k = 3;
// console.log("The Sum of SubArray By K:",sumSubArrayByK(nums,k));

// Find the Kth Largest Element
// function kthLargest(nums) {

//     let map = {
//         firstMax: -Infinity,
//         secMax: -Infinity,
//         thirMax: -Infinity,
//         fourthMax: -Infinity,
//         fifthMax: -Infinity,
//         sixthMax: -Infinity,
//         sevenThMax: -Infinity
//     };

//     for (let num of nums) {

//         if (
//             num > map.firstMax &&
//             num > map.secMax &&
//             num > map.thirMax &&
//             num > map.fourthMax &&
//             num > map.fifthMax &&
//             num > map.sixthMax &&
//             num > map.sevenThMax
//         ) {

//             map.sevenThMax = map.sixthMax;
//             map.sixthMax = map.fifthMax;
//             map.fifthMax = map.fourthMax;
//             map.fourthMax = map.thirMax;
//             map.thirMax = map.secMax;
//             map.secMax = map.firstMax;
//             map.firstMax = num;
//         }
//     }

//     return [
//         map.firstMax,
//         map.secMax,
//         map.thirMax,
//         map.fourthMax,
//         map.fifthMax,
//         map.sixthMax,
//         map.sevenThMax
//     ];
// }

// let nums = [2,3,4,5,1,4,56,500,600];

// console.log(kthLargest(nums));

// function kthLargest(nums , k) {
//     // sort the elements
//     nums.sort((a,b)=>a-b); // its sort the element with ascending order -> [1,2,3,4,5,56,500,600]
//     return nums[k-1];
// }

// let nums = [2,3,4,5,1,4,56,500,600] , k=5;

// console.log(kthLargest(nums , k));

// Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

// A string is represented by an array if the array elements concatenated in order forms the string.

 

// Example 1:

// Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
// Output: true
// Explanation:
// word1 represents string "ab" + "c" -> "abc"
// word2 represents string "a" + "bc" -> "abc"
// The strings are the same, so return true.
// Example 2:

// Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
// Output: false

// var arrayStringsAreEqual = function(word1, word2) {
//     let sum1 ="",sum2 ="";
//     // find the sum1 for word1
//     for(let num of word1){
//         sum1 += num;
//     }
//     // find the sum2 for word2
//     for(let num of word2){
//         sum2 += num;
//     }
//     return sum1 === sum2;
// };
// // let word1 = ["ab", "c"], word2 = ["a", "bc"]; // true
// let word1 = ["a", "cb"], word2 = ["ab", "c"]; // false
// console.log("arrayStringsAreEqual:",arrayStringsAreEqual(word1 , word2));

// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

 

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.

// function intersectionTwoArray(nums1, nums2){
//     // create a set object
//     let set = new Set(nums1);
//     let result = new Set();

//     for(let num of nums2){
//         if(set.has(num)){
//             result.add(num)
//         }
//     }
//     return [...result];
// };
// let nums1 = [4,9,5], nums2 = [9,4,9,8,4];
// console.log("Interscetions Of Two Array:",intersectionTwoArray(nums1,nums2));

// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears at most twice, return an array of all the integers that appears twice.

// You must write an algorithm that runs in O(n) time and uses only constant auxiliary space, excluding the space needed to store the output

 

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]
// Example 2:

// Input: nums = [1,1,2]
// Output: [1]
// Example 3:

// Input: nums = [1]
// Output: []
// First approach
// var findDuplicates = function(nums) {
//     let freq = {};
//     let result =[];
//     for(let num of nums){
//         freq[num] = (freq[num] || 0) + 1;
//     }
//     // apply second loops
//     for(let [key ,value] of Object.entries(freq)){
//         if(value > 1){
//             result.push(Number(key));
//         }
//     }
//     return result;
// };
// let nums = [4,3,2,7,8,2,3,1];
// console.log("FindDuplicate:",findDuplicates(nums));

// 2nd Appraoch
// var findDuplicates = function(nums) {
//     let result =[];
//     for(let i =0; i<nums.length; i++){
//         let index =Math.abs(nums[i]) - 1;
//         // if the element are already present
//         if(nums[index] < 0){
//             result.push(Math.abs(nums[i]));
//         }else{
//             nums[index] = -nums[index];
//         }
//     }
//     return result;
// };
// let nums = [4,3,2,7,8,2,3,1];
// console.log("FindDuplicate:",findDuplicates(nums));

// var findDisappearedNumbers = function(nums) {
//     let result = [];
//     // sort the all element of the given array
//     nums.sort((a,b)=>a-b);
//     console.log("Sort nums:",nums);
//     let set = new Set(nums);
//     console.log("Sort nums:",set);
//     for(let i =1; i<=set.size; i++){
//         if(set[i] !== i){
//             result.push(i+1);
//         }
//     }
//     return result;
// };
// let nums = [4,3,2,7,8,2,3,1];
// console.log("findDisappearedNumber:",findDisappearedNumbers(nums));

// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2

// Output: [1,2]

// Example 2:

// Input: nums = [1], k = 1

// Output: [1]

// Example 3:

// Input: nums = [1,2,1,2,1,2,3,1,3,2], k = 2

// Output: [1,2]

// function topKFrequent(nums,k){
//     let freq = {};
//     for(let num of nums){
//         freq[num] = (freq[num] || 0) + 1;
//     }
//     // sort the value of Freq
//     let sortedNum =Object.entries(freq).sort((a,b)=>b[1]-a[1]);
//     let ans = [];
//     for(let i = 0; i<k; i++){
//         ans.push(Number(sortedNum[i][0]))
//     }
//     return ans;
// }
// nums = [1,2,1,2,1,2,3,1,3,2], k = 2;
// console.log("topKfrequent:",topKFrequent(nums,k));

// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers index1 and index2, each incremented by one, as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.

 

// Example 1:

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

function twoSum(numbers , target){
    let n = numbers.length; 
    let left = 0;
    let right = n -1;
    while(left < right){
        let sum = numbers[left] + numbers[right];
        // check sum === target
        if(sum === target){
            return[left+1 , right+1];
        }else if(sum < target){
            left++;
        }else{
            right--;
        }
    }
};
numbers = [2,7,11,15], target = 9;
console.log("TwoSum:",twoSum(numbers,target));
