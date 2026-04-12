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

// You are given a string word that consists of digits and lowercase English letters.

// You will replace every non-digit character with a space. For example, "a123bc34d8ef34" will become " 123  34 8  34". Notice that you are left with some integers that are separated by at least one space: "123", "34", "8", and "34".

// Return the number of different integers after performing the replacement operations on word.

// Two integers are considered different if their decimal representations without any leading zeros are different.

// Example 1:

// Input: word =
// Output: 3
// Explanation: The three different integers are "123", "34", and "8". Notice that "34" is only counted once.

// var numDifferentIntegers = function(word) {
//     let words = word.match(/\d+/g) || [];
//     let set = new Set();
//     for(let num of words){
//         set.add(BigInt(num).toString());
//     }
//     return set.size;
// };
// let word = "a1b01c001";
// console.log("numDiffrentInteger:",numDifferentIntegers(word))

// Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

// Return the sorted string. If there are multiple answers, return any of them.

// Example 1:

// Input: s = "tree"
// Output: "eert"
// Explanation: 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

// var frequencySort = function(s) {
//     let freq = {};
//     for(let char of s){
//         freq[char] = (freq[char] || 0) + 1;
//     }
//     // return freq;
//     // now we have to sort the character by ascending Order:
//     let res = "";
//     for(let key in freq){

//     }
// };
// let s = "tree";
// console.log("SortCharacter By Frequency:",frequencySort(s));

// var smallerNumbersThanCurrent = function(nums) {
//     let count =0;
//     let arr =[];
//     for(let i=0; i<nums.length; i++){
//         for(let j=i+1; j<nums.length; j++){
//             if(nums[j] < nums[i]){
//                 count++;
//             }
//         }
//         arr.push(count);

//     }
//     console.log("Arr:",arr);
//     return arr;
// };
// let nums = [8,1,2,2,3];
// console.log("smallerNumbers:",smallerNumbersThanCurrent(nums));

// A distinct string is a string that is present only once in an array.

// Given an array of strings arr, and an integer k, return the kth distinct string present in arr. If there are fewer than k distinct strings, return an empty string "".

// Note that the strings are considered in the order in which they appear in the array.

// Example 1:

// Input: arr = ["d","b","c","b","c","a"], k = 2
// Output: "a"
// Explanation:
// The only distinct strings in arr are "d" and "a".
// "d" appears 1st, so it is the 1st distinct string.
// "a" appears 2nd, so it is the 2nd distinct string.
// Since k == 2, "a" is returned.

// var kthDistinct = function(arr, k) {
//     let freq = {};
//     for(let char of arr){
//         freq[char] = (freq[char] || 0) + 1;
//     }
//     let ans = [];
//     for(let [key,value] of Object.entries(freq)){
//         if(value === 1){
//             ans.push(key);
//         }
//     }
//     if(ans.length >=k){
//         return ans[k-1];
//     }
//     return "";

// };
// let arr = ["d","b","c","b","c","a"], k = 2;
// console.log("KthDistinct:",kthDistinct(arr,k));

// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// Example 1:

// Input: s = "egg", t = "add"

// Output: true

// Explanation:

// The strings s and t can be made identical by:

// Mapping 'e' to 'a'.
// Mapping 'g' to 'd'.

//  var isophormic = function(s,t){
//     // base case
//     if(s.length !== t.length) return false;
//     // taking two Map Object
//     let mapST = {};
//     let mapTS = {};

//     for(let i =0; i<s.length; i++){
//         let charS = s[i];
//         let charT = t[i];
//         // checking s->t mapping
//         if(mapST[charS] && mapST[charS] !== charT){
//             return false;
//         }
//         // checking t->s mapping
//         if(mapTS[charT] && mapTS[charT] !== charS){
//             return false;
//         }
//         mapST[charS] = charT;
//         mapTS[charT] = charS;
//     }
//     return true;
// };
// let s = "egg", t = "add";
// console.log("Isophormic:",isophormic(s,t));

// Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

// Return the sorted string. If there are multiple answers, return any of them.

// Example 1:

// Input: s = "tree"
// Output: "eert"
// Explanation: 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

// var frequencySort = function(s){
//     let freq = {};
//     for(let char of s){
//         freq[char] = (freq[char] || 0) + 1;
//     }
//     // split string into array
//     let arr = s.split('');
//     // now apply sort methods
//     arr.sort((a,b)=>{
//         if(freq[b] === freq[a]){
//             return a.localeCompare(b);
//         }
//         return freq[b] - freq[a];
//     })
//     // now convert array into string
//     return arr.join('');
// }
// let s = "tree";
// console.log("frequencySort:",frequencySort(s));

// Given an array of strings words and an integer k, return the k most frequent strings.

// Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.

// Example 1:

// Input: words = ["i","love","leetcode","i","love","coding"], k = 2
// Output: ["i","love"]
// Explanation: "i" and "love" are the two most frequent words.
// Note that "i" comes before "love" due to a lower alphabetical order.

// var topKFrequent = function (words, k) {
//   let freq = {};
//   // count the frequency of Each Word;
//   for (let word of words) {
//     freq[word] = (freq[word] || 0) + 1;
//   }
//   let ans = [];
//   for (let [key, value] of Object.entries(freq)) {
//     if (value >= 1) {
//       ans.push(key);
//     }
//   }
//   //    sort by frequency;
//   ans.sort((a, b) => {
//     if (freq[a] === freq[b]) {
//       return a.localeCompare(b);
//     }
//     return freq[b] - freq[a];
//   });
//   let newArr = [];
//   for (let i = 0; i < k; i++) {
//     newArr[i] = ans[i];
//   }
//   return newArr;
// };
// let words = [
//     "the",
//     "day",
//     "is",
//     "sunny",
//     "the",
//     "the",
//     "the",
//     "sunny",
//     "is",
//     "is",
//   ],
//   k = 4;
// console.log("topFrequent:", topKFrequent(words, k));

// var findMissingElements = function(nums) {
//    let set = new Set(nums);
//    let ans = [];
//    let min = Math.min(...nums);
//    let max = Math.max(...nums);
//     for(let i=min; i<=max; i++){
//         if(!set.has(i)){
//             ans.push(i)
//         }
//     }
//     ans.sort((a,b)=>a-b);
//     return ans;
// };
// let nums =[1,2,4,5];
// console.log("find the missing Element:",findMissingElements(nums));

// You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.

// Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.

 

// Example 1:

// Input: letters = ["c","f","j"], target = "a"
// Output: "c"
// Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.

// var nextGreatestLetter = function(letters, target) {
//     for(let i =0; i<letters.length;  i++){
//         if(letters[i] > target){
//         return letters[i];
//         }
//     }
//     return letters[0];
// };
// let letters = ["c","f","j"], target = "a";
// console.log("nextGreatestLetter:",nextGreatestLetter(letters , target));
