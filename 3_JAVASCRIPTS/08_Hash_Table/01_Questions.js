// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

 
// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// var romanToInt = function(s) {
//      const map = {
//         I: 1,
//         V: 5,
//         X: 10,
//         L: 50,
//         C: 100,
//         D: 500,
//         M: 1000
//     };

//     let total = 0;

//     for (let i = 0; i < s.length; i++) {
//         if (i < s.length - 1 && map[s[i]] < map[s[i + 1]]) {
//             total -= map[s[i]];
//         } else {
//             total += map[s[i]];
//         }
//     }

//     return total;
// };
// let  s = "III"
// console.log("Roman to Interger:",romanToInt(s))

// Given two binary strings a and b, return their sum as a binary string.
// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"

// var addBinary = function(a, b) {
//     let i = a.length - 1;
//     let j = b.length - 1;
//     let carry = 0;
//     let result = "";

//     while (i >= 0 || j >= 0 || carry) {
//         let sum = carry;

//         if (i >= 0) sum += Number(a[i--]);
//         if (j >= 0) sum += Number(b[j--]);

//         result = (sum % 2) + result;
//         carry = Math.floor(sum / 2);
//     }

//     return result;
// };
// let a = "1010", b = "1011" ;
// console.log("The Sum of Two Binary Number:",addBinary(a,b))

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Explanation:

// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

// var groupAnagrams = function(strs) {
//     let map = new Map();
//     for(let str of strs){
//         let key =str.split('').sort().join('');
//         if(!map.has(key)){
//             map.set(key,[])
//         }
//         map.get(key).push(str);
//     };
//     return [...map.values()]
// };
// let strs = ["eat","tea","tan","ate","nat","bat"];
// console.log("GroupAnagrams:",groupAnagrams(strs));

// Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.

// You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.

 

// Example 1:

// Input: nums = [1,2,0]
// Output: 3
// Explanation: The numbers in the range [1,2] are all in the array.
// Example 2:

// Input: nums = [3,4,-1,1]
// Output: 2
// Explanation: 1 is in the array but 2 is missing.

// function firstMissingPositive(nums){
//     let n = nums.length;
//     let set = new Set(nums);
//     for(let i = 1; i<=n; i++){
//         if(!set.has(i)){
//             return i;
//         }
//     }
// };
// let nums = [3,4,-1,1];
// console.log("First Missing Positive Integer:",firstMissingPositive(nums));

// You are given an integer array nums with the following properties:

// nums.length == 2 * n.
// nums contains n + 1 unique values, n of which occur exactly once in the array.
// Exactly one element of nums is repeated n times.
// Return the element that is repeated n times.

 

// Example 1:

// Input: nums = [1,2,3,3]
// Output: 3
// Example 2:

// Input: nums = [2,1,2,5,3,2]
// Output: 2

// first Approach
// var repeatedNTimes = function(nums) {
//     let freq ={};
//     for(let num of nums){
//         freq[num] = (freq[num] || 0) + 1;
//     }
//     for(let [key,value] of Object.entries(freq)){
//         if(value > 1){
//             return Number(key)
//         }
//     }
// };

// var repeatedNTimes = function(nums) {
//     let set = new Set();
//     for(let num of nums){
//         if(set.has(num)) return num;
//         set.add(num);
//     }
// };
// let nums = [1,2,3,3];
// console.log("repeatedTimes:",repeatedNTimes(nums));