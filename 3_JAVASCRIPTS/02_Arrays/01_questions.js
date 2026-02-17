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
