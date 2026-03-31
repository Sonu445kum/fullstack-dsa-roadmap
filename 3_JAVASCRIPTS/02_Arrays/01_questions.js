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

// function twoSum(numbers , target){
//     let n = numbers.length; 
//     let left = 0;
//     let right = n -1;
//     while(left < right){
//         let sum = numbers[left] + numbers[right];
//         // check sum === target
//         if(sum === target){
//             return[left+1 , right+1];
//         }else if(sum < target){
//             left++;
//         }else{
//             right--;
//         }
//     }
// };
// numbers = [2,7,11,15], target = 9;
// console.log("TwoSum:",twoSum(numbers,target));

// var sortArray = function(nums) {
//     return mergeSort(nums);
// };

// function mergeSort(arr) {
//     if (arr.length <= 1) return arr;

//     let mid = Math.floor(arr.length / 2);

//     let left = mergeSort(arr.slice(0, mid));
//     let right = mergeSort(arr.slice(mid));

//     return merge(left, right);
// }

// function merge(left, right) {
//     let result = [];
//     let i = 0, j = 0;

//     while (i < left.length && j < right.length) {
//         if (left[i] < right[j]) {
//             result.push(left[i]);
//             i++;
//         } else {
//             result.push(right[j]);
//             j++;
//         }
//     }

//     // remaining elements
//     return result.concat(left.slice(i)).concat(right.slice(j));
// }
// let nums = [5,2,3,1];
// console.log("mergeSort:",sortArray(nums));

// Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.

// You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.

 

// Example 1:

// Input: nums = [1,2,1,3,2,5]
// Output: [3,5]
// Explanation:  [5, 3] is also a valid answer.
// Example 2:

// Input: nums = [-1,0]
// Output: [-1,0]
// Example 3:

// Input: nums = [0,1]
// Output: [1,0]

// 1st Appraoch;
// var singleNumber = function(nums) {
//    let freq = {};
//    for(let num of nums){
//     freq[num] = (freq[num] || 0) + 1;
//    };
//    let arr = [];
//    for(let [key,value] of Object.entries(freq)){
//     if(value === 1){
//         arr.push(Number(key));
//     }
//    }
   
//    return arr;
// };
// let nums = [1,2,1,3,2,5];
// console.log("SingleNumber:",singleNumber(nums)); // t.c->18ms

// 2nd Approach -> optimal
// var singleNumber = function(nums) {
//     let freq = {};
    
//     for(let num of nums){
//         freq[num] = (freq[num] || 0) + 1;
//     }

//     let result = [];
//     for(let key in freq){
//         if(freq[key] === 1){
//             result.push(Number(key));
//         }
//     }

//     return result;
// };
// let nums = [1,2,1,3,2,5];
// console.log("SingleNumber:",singleNumber(nums)); // t.c->13ms

// Given an integer array nums, return the most frequent even element.

// If there is a tie, return the smallest one. If there is no such element, return -1.

 

// Example 1:

// Input: nums = [0,1,2,2,4,4,1]
// Output: 2
// Explanation:
// The even elements are 0, 2, and 4. Of these, 2 and 4 appear the most.
// We return the smallest one, which is 2.
// Example 2:

// Input: nums = [4,4,4,9,2,4]
// Output: 4
// Explanation: 4 is the even element appears the most.

// var mostFrequentEven = function(nums) {
//     let freq = {};
//     for(let num of nums){
//         freq[num] = (freq[num] || 0) + 1;
//     };
//     let mostFreq =0;
//     let result = -1;
//     for(let key in freq){
//         let num = Number(key);
//         if(num % 2 === 0){
//             if(freq[key] > mostFreq || freq[key] === mostFreq && num < result){
//                 mostFreq = freq[key];
//                 result = num;
//             }
//         }
//     }
//     return result;
// };
// let nums = [0,1,2,2,4,4,1];
// console.log("MostFrequentEven:",mostFrequentEven(nums))

// Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.

// Return the largest lucky integer in the array. If there is no lucky integer return -1.

 

// Example 1:

// Input: arr = [2,2,3,4]
// Output: 2
// Explanation: The only lucky number in the array is 2 because frequency[2] == 2.
// Example 2:

// Input: arr = [1,2,2,3,3,3]
// Output: 3
// Explanation: 1, 2 and 3 are all lucky numbers, return the largest of them.

// var findLucky = function(arr) {
//    let freq = {};
//    for(let num of arr){
//     freq[num] = (freq[num] || 0) + 1;
//    }
//    let max =0;
//    let result = -1;
//    for(let key in freq){
//     let num = Number(key);
//     if(num === freq[key] && num > max){
//         max = num;
//         result = max;
//     }
//    }
//    return result; 
// };
// let arr = [1,2,2,3,3,3];
// console.log("FindLucy:",findLucky(arr));

// You are given a 0-indexed integer array nums and a target element target.

// A target index is an index i such that nums[i] == target.

// Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.

 

// Example 1:

// Input: nums = [1,2,5,2,3], target = 2
// Output: [1,2]
// Explanation: After sorting, nums is [1,2,2,3,5].
// The indices where nums[i] == 2 are 1 and 2.
// Example 2:

// Input: nums = [1,2,5,2,3], target = 3
// Output: [3]
// Explanation: After sorting, nums is [1,2,2,3,5].
// The index where nums[i] == 3 is 3.

// var targetIndices = function(nums, target) {
//     // sort the nums
//     nums.sort((a,b)=> a- b);
//     let ans =[];

//     for(let i =0; i<nums.length; i++){
//         if(nums[i] === target){
//             ans.push(i);
//         }
//     } 
//     return ans; 
// };
// nums = [1,2,5,2,3], target = 3;
// console.log("targetIndices:",targetIndices(nums,target));

// Given a 0-indexed integer array nums, return the smallest index i of nums such that i mod 10 == nums[i], or -1 if such index does not exist.

// x mod y denotes the remainder when x is divided by y.

 

// Example 1:

// Input: nums = [0,1,2]
// Output: 0
// Explanation: 
// i=0: 0 mod 10 = 0 == nums[0].
// i=1: 1 mod 10 = 1 == nums[1].
// i=2: 2 mod 10 = 2 == nums[2].
// All indices have i mod 10 == nums[i], so we return the smallest index 0.

// var smallestEqual = function(nums) {
//     let minIndex =0;
//     let result = -1;
//     for(let i=0; i<nums.length; i++){
//         if((i % 10 === nums[i]) && result < minIndex){
//             minIndex = i;
//             result = minIndex;
//         }
//     }
//     return result;
// };
// let nums = [0,1,2];
// console.log("smallestEqual:",smallestEqual(nums));

// Brute Force
// find the subarray -> n*(n+1)/2;
// if n= 3 then total subarray = 3*4/2 = 6
// function findSubarray(arr){
//     let result =[];
//     for(let i=0; i<arr.length; i++){
//         let temp =[];
//         for(let j=i; j<arr.length; j++){
//             temp.push(arr[j]);
//             result.push([...temp]);
//         }
//     }
//     return result;
// }
// let arr = [1 ,2 ,3];
// console.log("findSubarray:",findSubarray(arr)); 

// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

 

// Example 1:

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:

// Input: nums = [5], k = 1
// Output: 5.00000

// function findMaxAverage(nums , k){
//     let sum =0;
//     let max = -Infinity;
//     // find the sum up to kth element
//     for(let i =0; i<k; i++){
//         sum += nums[i];
//     }
//     // assign sum into max;
//     max=sum;
//     // traverse loop after the kth element
//     for(let i=k; i<nums.length; i++){
//         sum += nums[i]; // add next element
//         sum -= nums[i-k]; // remove previous element
//         max = Math.max(max,sum); // find the max
//     }
//     return max/k; // return average;
// };
// let nums = [1,12,-5,-6,50,3], k = 4;
// console.log("Max Average:",findMaxAverage(nums,k));

// find the Longest subarray with sum <=k
// function longestSubArrSumAtMostK(arr,k){
//     let left =0;
//     let sum =0;
//     let maxLength =0;
//     for(let right =0; right < arr.length; right++){
//         // expand the array;
//         sum += arr[right];
//         // shrink window ->while condtions is invalid
//         while(sum > k){
//             sum -=arr[left];
//             left++;
//         }
//         // update the answer
//         maxLength = Math.max(maxLength , right - left + 1);
//     }
//     return maxLength;
// }
// let arr = [1,2,3,4] , k=3;
// console.log("LongestSubarray:",longestSubArrSumAtMostK(arr , k));

// Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

// Example 1:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.
// Example 2:

// Input: target = 4, nums = [1,4,4]
// Output: 1

// function minAverageSum(target , nums){
//     let left = 0;
//     let sum = 0;
//     let min = Infinity;
//     for(let right = 0; right < nums.length; right++){
//         // Expand the array
//         sum += nums[right];

//         // shrink- while conditon is Invalid
//         while(sum >= target){
//             min = Math.min(min , right - left + 1);
//             sum -= nums[left];
//             left++;
//         }  
//     }
//     return min === Infinity ? 0 : min;
// };
// let target = 7, nums = [2,3,1,2,4,3];
// console.log("Minimum Average Sum:",minAverageSum(target , nums));

// Given an integer array nums and an integer k, return true if nums has a good subarray or false otherwise.

// A good subarray is a subarray where:

// its length is at least two, and
// the sum of the elements of the subarray is a multiple of k.
// Note that:

// A subarray is a contiguous part of the array.
// An integer x is a multiple of k if there exists an integer n such that x = n * k. 0 is always a multiple of k.
 

// Example 1:

// Input: nums = [23,2,4,6,7], k = 6
// Output: true
// Explanation: [2, 4] is a continuous subarray of size 2 whose elements sum up to 6.

// function continuousSubarrSum(nums){
//     let map = new Map();
//     map.set(0 , -1);
//     let sum = 0 ;
//     for(let i = 0; i<nums.length; i++){
//         sum += nums[i];
//         // find the rem 
//         let rem = sum % k;
//         // now the map for the rem is present or not
//         if(map.has(rem)){
//             if(i - map.get(rem) > 1){
//                 return true;
//             }
//         }else{
//             map.set(rem , i);
//         }
//     }
//     return false;

// }
// let nums = [23,2,4,6,7], k = 6;
// console.log("Continuous SubArray Sum:",continuousSubarrSum(nums));

// You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

// You are given an integer array nums representing the data status of this set after the error.

// Find the number that occurs twice and the number that is missing and return them in the form of an array.

 

// Example 1:

// Input: nums = [1,2,2,4]
// Output: [2,3]
// Example 2:

// Input: nums = [1,1]
// Output: [1,2]


// var findErrorNums = function(nums) {
//   let freq = {};
//   let n = nums.length;
//   let total = (n * (n + 1)) / 2;
//   let sum = 0;
//   let dup = 0;

//   for (let num of nums) {
//     sum += num;
//     freq[num] = (freq[num] || 0) + 1;

//     if (freq[num] === 2) {
//       dup = num;
//     }
//   }

//   let missing = total - (sum - dup);

//   return [dup, missing];
// };
// let nums =[1,2,2,4];
// console.log("FindErrorNums:",findErrorNums(nums));

// Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).
 

// Example 1:

// Input: nums = [3,4,5,2]
// Output: 12 
// Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12. 
// Example 2:

// Input: nums = [1,5,4,5]
// Output: 16
// Explanation: Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16.

// var maxProduct = function(nums) {
//     let max =0;
//     for(let i=0; i<nums.length; i++){
//         for(let j=i+1; j<nums.length; j++){
//             let ans = (nums[i]-1)*(nums[j]-1);
//             max = Math.max(max , ans);
//         }
//     }
//     return max;
// };
// let nums = [3,4,5,2];
// console.log("maxProduct:",maxProduct(nums));

// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

// var runningSum = function(nums) {
//     for(let i=1; i<nums.length; i++){
//         nums[i] = nums[i-1] + nums[i];
//     }
//     return nums;
// };
// let nums = [1,2,3,4];
// console.log("runnningSum:",runningSum(nums));


// Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.

// Return the sorted array.

 

// Example 1:

// Input: nums = [1,1,2,2,2,3]
// Output: [3,1,1,2,2,2]
// Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.
// Example 2:

// Input: nums = [2,3,1,3,2]
// Output: [1,3,3,2,2]
// Explanation: '2' and '3' both have a frequency of 2, so they are sorted in decreasing order.

// function frequencySort(nums){
//     let freq = {};
//     // count the frequcency of Each Element
//     for(let num of nums){
//         freq[num] = (freq[num] || 0) + 1;
//     }
//     // now sort the frequecncy
//     nums.sort((a,b)=>{
//         if(freq[a] === freq[b]){
//             return freq[b] - freq[a];
//         }
//         return freq[a] - freq[b];
//     })
//     return nums;
// }
// let nums = [1,1,2,2,2,3];
// console.log("frequcenySort:",frequencySort(nums));

// Given an integer array nums (0-indexed) and two integers target and start, find an index i such that nums[i] == target and abs(i - start) is minimized. Note that abs(x) is the absolute value of x.

// Return abs(i - start).

// It is guaranteed that target exists in nums.

 

// Example 1:

// Input: nums = [1,2,3,4,5], target = 5, start = 3
// Output: 1
// Explanation: nums[4] = 5 is the only value equal to target, so the answer is abs(4 - 3) = 1.

// var getMinDistance = function(nums, target, start) {
//     let minDist = Infinity;
//     for(let i=0; i<nums.length; i++){
//         if(nums[i] === target){
//             minDist = Math.min(minDist, Math.abs(i- start));
//         }
//     }
//     return minDist;
// };
// let nums = [1,2,3,4,5], target = 5, start = 3;
// console.log("getMinDistance:",getMinDistance(nums , target , start));

// Given a 0-indexed integer array nums of length n and an integer k, return the number of pairs (i, j) where 0 <= i < j < n, such that nums[i] == nums[j] and (i * j) is divisible by k.
 

// Example 1:

// Input: nums = [3,1,2,2,2,1,3], k = 2
// Output: 4
// Explanation:
// There are 4 pairs that meet all the requirements:
// - nums[0] == nums[6], and 0 * 6 == 0, which is divisible by 2.
// - nums[2] == nums[3], and 2 * 3 == 6, which is divisible by 2.
// - nums[2] == nums[4], and 2 * 4 == 8, which is divisible by 2.
// - nums[3] == nums[4], and 3 * 4 == 12, which is divisible by 2.

// var countPairs = function(nums, k) {
//     let count =0;
//     for(let i=0; i<nums.length; i++){
//         for(let j=i+1; j<nums.length; j++){
//             if(nums[i] === nums[j]){
//                 let ans = i*j;
//                 if(ans % k===0){
//                     count++;
//                 }
//             }
//         }
//     }
//     return count;
// };
// let nums = [3,1,2,2,2,1,3], k = 2;
// console.log("CountPairs:",countPairs(nums , k));

// var buddyStrings = function(s, goal) {
//     for(let i=0; i<s.length; i++){
//         [s[i],s[i+1]] = [s[i+1],s[i]]
//         console.log(s)
//     }
//     console.log(s)
//     if(s === goal){
//         return true;
//     }
//     return false;
// };
// let s ="ab" , goal ="ba";
// console.log("buddyString:",buddyStrings(s,goal));

// Given an array arr of integers, check if there exist two indices i and j such that :

// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]
 

// Example 1:

// Input: arr = [10,2,5,3]
// Output: true
// Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]
// Example 2:

// Input: arr = [3,1,7,11]
// Output: false
// Explanation: There is no i and j that satisfy the conditions.

// var checkIfExist = function(arr) {
//    for(let i=0; i<arr.length; i++){
//     for(let j=i+1; j<arr.length; j++){
//         if(arr[i] === 2*arr[j] || 2*arr[i] === arr[j]){
//             return true;
//         }
//     }
//    }
//    return false; 
// };
// let arr = [10,2,5,3];
// console.log("CheckIfExist:",checkIfExist(arr));

// Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.

// The value of |x| is defined as:

// x if x >= 0.
// -x if x < 0.
 

// Example 1:

// Input: nums = [1,2,2,1], k = 1
// Output: 4
// Explanation: The pairs with an absolute difference of 1 are:
// - [1,2,2,1]
// - [1,2,2,1]
// - [1,2,2,1]
// - [1,2,2,1]

// var countKDifference = function(nums, k) {
//     let count = 0;
//     for(let i = 0; i < nums.length; i++){
//         for(let j=i+1; j<nums.length; j++){
//             let ans = Math.abs(nums[i] - nums[j]); 
//             if(ans === k){
//                 count++;
//             }
//         }
//     }
//     return count;
// };
// let nums = [1,2,2,1], k = 1;
// console.log("countKDifference:",countKDifference(nums , k));

// You are given a 0-indexed, strictly increasing integer array nums and a positive integer diff. A triplet (i, j, k) is an arithmetic triplet if the following conditions are met:

// i < j < k,
// nums[j] - nums[i] == diff, and
// nums[k] - nums[j] == diff.
// Return the number of unique arithmetic triplets.

 

// Example 1:

// Input: nums = [0,1,4,6,7,10], diff = 3
// Output: 2
// Explanation:
// (1, 2, 4) is an arithmetic triplet because both 7 - 4 == 3 and 4 - 1 == 3.
// (2, 4, 5) is an arithmetic triplet because both 10 - 7 == 3 and 7 - 4 == 3. 

// var arithmeticTriplets = function(nums, diff) {
//     let count =0;
//     for(let i=0; i<nums.length; i++){
//         for(let j=i+1; j<nums.length; j++){
//             for(let k=j+1; k<nums.length; k++){
//                 if (((nums[j] - nums[i])=== diff) && ((nums[k] - nums[j])=== diff)){
//                     count++;
//                 }
//             }
//         }
//     }
//     return count;
// };
// let nums = [0,1,4,6,7,10], diff = 3;
// console.log("arithmeticTriplets:",arithmeticTriplets(nums,diff));

// You are given a 0-indexed array of positive integers nums. Find the number of triplets (i, j, k) that meet the following conditions:

// 0 <= i < j < k < nums.length
// nums[i], nums[j], and nums[k] are pairwise distinct.
// In other words, nums[i] != nums[j], nums[i] != nums[k], and nums[j] != nums[k].
// Return the number of triplets that meet the conditions.

 

// Example 1:

// Input: nums = [4,4,2,4,3]
// Output: 3
// Explanation: The following triplets meet the conditions:
// - (0, 2, 4) because 4 != 2 != 3
// - (1, 2, 4) because 4 != 2 != 3
// - (2, 3, 4) because 2 != 4 != 3
// Since there are 3 triplets, we return 3.
// Note that (2, 0, 4) is not a valid triplet because 2 > 0.

// var unequalTriplets = function(nums) {
//     let count =0;
//     for(let i=0; i<nums.length; i++){
//         for(let j=i+1; j<nums.length; j++){
//             for(let k=j+1; k<nums.length; k++){
//                 if((nums[i] !== nums[j]) && (nums[i] !== nums[k]) && (nums[j] !== nums[k])){
//                     count++;
//                 }
//             }
//         }
//     }
//     return count;
// };
// let nums = [4,4,2,4,3];
// console.log("uniqueTriplets:",unequalTriplets(nums));

// var duplicateNumbersXOR = function(nums) {
//     let freq = {};
//     for(let num of nums){
//         freq[num] =(freq[num] || 0) + 1;
//     } 
//     let xor =0;
//     for(let num in freq){
//         if(freq[num] === 2){
//             xor ^= Number(num);
//         }
//     }
//     return xor;
// };
// let nums = [1,2,2,1];
// console.log("duplicateNumberXor:",duplicateNumbersXOR(nums))

// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

 

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]

// var findDisappearedNumbers = function(nums) {
//     let result = [];
//     let set = new Set(nums);
//     for(let i=1; i<=nums.length; i++){
//         if(!set.has(i)){
//             result.push(i);
//         }
//     }
//     return result;
// };
// let nums = [4,3,2,7,8,2,3,1];
// console.log("FindDisappearsNumbers:",findDisappearedNumbers(nums));

// Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, return that integer.

 

// Example 1:

// Input: arr = [1,2,2,6,6,6,6,7,10]
// Output: 6
// Example 2:

// Input: arr = [1,1]
// Output: 1

// var findSpecialInteger = function(arr) {
//     let freq =[];
//     for(let num of arr){
//         freq[num] = (freq[num] || 0) + 1;
//     }
//     let n =arr.length;
//     for(let [key,value] of Object.entries(freq)){
//         if (value > n / 4) {
//             return Number(key);
//         } 
//     }
// };
// let arr = [1,2,2,6,6,6,6,7,10];
// console.log("FindsSpecialInteger:",findSpecialInteger(arr));

// You are given an array of unique integers salary where salary[i] is the salary of the ith employee.

// Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted.



// Example 1:

// Input: salary = [4000,3000,1000,2000]
// Output: 2500.00000
// Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
// Average salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500
// Example 2:

// Input: salary = [1000,2000,3000]
// Output: 2000.00000
// Explanation: Minimum salary and maximum salary are 1000 and 3000 respectively.
// Average salary excluding minimum and maximum salary is (2000) / 1 = 2000

// var average = function(salary) {
//     let n = salary.length;
//     let max = Math.max(...salary);
//     let min = Math.min(...salary);
//     let sum =0;
//     for(let num of salary){
//         sum += num;
//     }
//     let total = min + max;
//     let avg = sum - total;
//     let diffrence = n - 2;
//     return avg/diffrence;
// };
// let  salary = [4000,3000,1000,2000];
// console.log("average:",average(salary));

// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: [3]
// Example 2:

// Input: nums = [1]
// Output: [1]
// Example 3:

// Input: nums = [1,2]
// Output: [1,2]

// var majorityElement = function(nums) {
//     let freq ={};
//     let ans =[];
//     for(let num of nums){
//         freq[num] = (freq[num] || 0) + 1;
//     }
//     for(let [key,value] of Object.entries(freq)){
//         if(value > nums.length/3){
//             ans.push(Number(key));
//         }
//     }
//     return ans;
// };
// let nums = [3,2,3];
// console.log("majorityElement:",majorityElement(nums));

// You are given an array nums consisting of positive integers.

// You have to take each integer in the array, reverse its digits, and add it to the end of the array. You should apply this operation to the original integers in nums.

// Return the number of distinct integers in the final array.

 

// Example 1:

// Input: nums = [1,13,10,12,31]
// Output: 6
// Explanation: After including the reverse of each number, the resulting array is [1,13,10,12,31,1,31,1,21,13].
// The reversed integers that were added to the end of the array are underlined. Note that for the integer 10, after reversing it, it becomes 01 which is just 1.
// The number of distinct integers in this array is 6 (The numbers 1, 10, 12, 13, 21, and 31)

// var countDistinctIntegers = function(nums) {
//     let n = nums.length;
//     let ans = [...nums];
//     for(let i=0; i<n; i++){
//         nums[i] = reverseDigit(nums[i]);
        
//     }
//     let newArr = ans.concat(nums);
//     console.log(newArr);
//     let count =0;
//     let set = new Set(newArr);
//     for(let num of set){
//         if(set.has(num)){
//             count++;
//         }
//         set.add(num);
//     }
//     return count;

    
// };
// let nums = [1,13,10,12,31];
// console.log("CountDistinctIntegers:",countDistinctIntegers(nums));

// function reverseDigit(n){
//     let rev = 0;
//     while(n > 0){
//         let lastDigit = n%10;
//         rev = rev*10 + lastDigit;
//         n = Math.floor(n/10);
//     }
//     return rev;
// }
// let n=12;
// console.log("reverseDigit:",reverseDigit(n));

// You are given a 0-indexed integer array nums of size 3 which can form the sides of a triangle.

// A triangle is called equilateral if it has all sides of equal length.
// A triangle is called isosceles if it has exactly two sides of equal length.
// A triangle is called scalene if all its sides are of different lengths.
// Return a string representing the type of triangle that can be formed or "none" if it cannot form a triangle.

 

// Example 1:

// Input: nums = [3,3,3]
// Output: "equilateral"
// Explanation: Since all the sides are of equal length, therefore, it will form an equilateral triangle.

var triangleType = function(nums) {
     let [a, b, c] = nums;

    if (
        (a + b <= c) ||
        (a + c <= b) ||
        (b + c <= a)
    ) {
        return "none";
    }
    if (a === b && b === c) {
        return "equilateral";
    }

    if (a === b || a === c || b === c) {
        return "isosceles";
    }

    return "scalene";
};
let nums = [3,3,3];
console.log("TriangleType:",triangleType(nums));