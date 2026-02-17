// Reverse words in a sentence
// let sentence="Hi bro where are you";
// let reverseWord=sentence.split("").reverse().join('');
// console.log(reverseWord);
// Find longest word
// let sentence ="Hi bro where are you";
// function countMaxWord(sentence){
//     let word =sentence.split(" ");
//     let max="";
//     for(w of word){
//         if(w.length > max.length){
//             max=w;
//         }
//     };
//     return max;
// };
// console.log("The Max Word:",countMaxWord(sentence));

// Find shortest word
// let sentence = "Hi bro where are you";
// function countMaxWord(sentence) {
//   let word = sentence.split(" ");
//   let min =word[0];
//   for (w of word) {
//     if (w.length < min.length) {
//       min = w;
//     }
//   }
//   return min;
// }
// console.log("The Min Word:", countMaxWord(sentence));

// Count character frequency
// let freq={};
// function countFrequency(str){
//     for(let ch of str){
//         freq[ch] =(freq[ch] || 0) + 1;
//     }
//     return freq;
// };
// let str="applemangoele";
// console.log("The Frequency of Character:",countFrequency(str));

// Check anagram
// function checkAnagram(str1,str2){
//     return str1.split("").sort().join("") === str2.split("").sort().join("");
// }
// let str1="listen";
// let str2="slient";
// console.log("The String is Anagram is or not:",checkAnagram(str1,str2));

// Remove duplicate characters
// function findDulicate(str){
//     let res="";
//     let dup=new Set();
//     for(let ch of str ){
//         if(!dup.has(ch)){
//             dup.add(ch);
//             res+=ch;
//         }
//     };
//     return res;
// };
// let str='hellooly';
// console.log("The  Remove Duplicate Character:",findDulicate(str));

// Find first non-repeating character
// function nonRepeatingCharacter(str){
//     let freq={};
//     // count the frequency
//     for(let ch of str){
//         freq[ch] =(freq[ch] || 0) + 1;
//     }
//     // find the non repeating character
//     for(let ch of str){
//         if(freq[ch] === 1){
//             return ch;
//         }
//     }
//     return -1;
// };
// console.log("First Non-Repeating Character:",nonRepeatingCharacter("hello"));
// console.log("First Non-Repeating Character:",nonRepeatingCharacter("yellow"));
// console.log("First Non-Repeating Character:",nonRepeatingCharacter("swiss"));

// Find first repeating character
// function RepeatingCharacter(str){
//     let set = new Set();
//     for(let ch of str){
//         if(set.has(ch)){
//             return ch;
//         };
//         set.add(ch);
//     }
//     return -1;
// };
// console.log("First Repeating Character:",RepeatingCharacter("hello"));
// console.log("First Repeating Character:",RepeatingCharacter("yellow"));
// console.log("First Repeating Character:",RepeatingCharacter("swiss"));

// Check string rotation

// Replace all spaces with dash
// let str ="heloo bro where are you right now";
// let replaceAllwithDash =str.split(" ").join('-');
// console.log(replaceAllwithDash);

// Check valid palindrome (ignore symbols)

// Find longest substring without repeating chars
// function findLongestSubstr(str){
//     let left=0;
//     let set = new Set();
//     let maxLength=0;

//     for(let i=0; i<str.length; i++){
//         while(set.has(str[i])){
//             set.delete(str[left]);
//             left++;
//         }
//         set.add(str[i]);
//         maxLength=Math.max(maxLength,i-left+1);
//     }
//     return maxLength;
// };
// let str="heloobrohow are you";
// console.log("Longest Substring:",findLongestSubstr(str));

// Count vowels & consonants
// let vowels=['a','i','o','u','e','A','E','I','O','U'];
// let vowelsCount=0;
// let consonantsCount=0;
// let str='applemonu';
// function countVow_Consonants(str){
//     for(let i=0; i<str.length; i++){
//         if(vowels.includes(str[i])){
//         vowelsCount++;
//         }else{
//         consonantsCount++;
//         }

//     }
//     return {vowelsCount,consonantsCount};
// }
// console.log(countVow_Consonants(str));

// Check string startsWith manually
// function startsWithManual(str,prefix){
//     if(prefix.length > str.length){
//         return false;
//     };
//     for(let i=0; i<prefix.length; i++){
//         if(str[i] !== prefix[i]){
//             return false;
//         }
//     }
//     return true;

// }
// console.log(startsWithManual("javascript", "java")); // true
// console.log(startsWithManual("javascript", "script")); // false

// Check string endsWith manually
// function endsWithManual(str,suffix){
//     if(suffix.length > str.length) return false;
//     // startIndex
//     let startIndex=str.length - suffix.length;
//     for(let i=0; i<suffix.length ; i++){
//         if(str[startIndex + i] !==suffix[i]){
//             return false;
//         }
//     }
//     return true;

// }
// console.log(endsWithManual("javascript", "script")); // true
// console.log(endsWithManual("javascript", "java")); // false

// Truncate string

// Repeat string N times

// Find all substrings
// let str="abc";
// function findAllStr(str){
//     let result =[];
//     for(let i=0; i<str.length; i++){
//         for(let j=i+1; j<=str.length; j++){
//             result.push(str.slice(i,j));
//         }
//     }
//     return result;
// };
// console.log("The Longest Substring:",findAllStr(str));

// String compression

// Check balanced brackets in string
// function isBalanced(str) {
//   let stack = [];
//   let map = {
//     ")": "(",
//     "}": "{",
//     "]": "[",
//   };
//   for (ch of str) {
//     if (ch === "(" || ch === "{" || ch === "[") {
//       stack.push(ch);
//     } else if (ch === ")" || ch === "}" || ch === "]") {
//       if (stack.length === 0 || stack.pop() !== map[ch]) {
//         return false;
//       }
//     }
//   }
//   return stack.length === 0;
// }
// console.log(isBalanced("(){}[]"));     // true
// console.log(isBalanced("({[]})"));     // true
// console.log(isBalanced("(]"));         // false
// console.log(isBalanced("({)"));        // false
// console.log(isBalanced("((()))"));     // true
// console.log(isBalanced("((())"));      // false

// Replace spaces with -
// let str="Hello how are you";
// let replaceSpaces=str.split(" ").join('-');
// console.log(replaceSpaces);

// Find ASCII value of characters
// let char=['a','b','c','d','e'];
// function asciiValue(char){
//     for(let ch of char){
//     console.log(ch, "=>", ch.charCodeAt(0));
// }
// }
// asciiValue(char);

// Swap first & last word
// let str ="Hi i M sonu roy";
// function swapFirstLastWord(str){
//    let words = str.split(" ");

//     let temp = words[0];
//     words[0] = words[words.length - 1];
//     words[words.length - 1] = temp;

//     return words.join(" ");
// };
// console.log("Swap first and last:",swapFirstLastWord(str));

// Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.
// You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

// Example 1:

// Input: num1 = "11", num2 = "123"
// Output: "134"
// Example 2:

// Input: num1 = "456", num2 = "77"
// Output: "533"
// Example 3:

// Input: num1 = "0", num2 = "0"
// Output: "0"

// function addTwoString(num1, num2) {
//   let i = num1.length - 1;
//   let j = num2.length - 1;
//   let carry = 0;
//   let result = "";
//   while (i >= 0 || j >= 0 || carry > 0) {
//     let digit1 = i >= 0 ? num1[i] - '0' : 0;
//     let digit2 = j >= 0 ? num2[j] - '0' : 0;
//     let sum = digit1 + digit2 + carry;

//     result = (sum % 10) + result;
//     carry = Math.floor(sum / 10);
//     i--;
//     j--;
//   }
//   return result;
// }
// let num1 = "121";
// let num2 = "121";
// console.log("The Sum Of the Two String:", addTwoString(num1, num2));

// check the two string is anagram or not
function isAnagram(s,t){
  // base case
  if(s.length !== t.length) return false;
  let map ={};
  for(let char of s){
    map[char] = (map[char] || 0) + 1;
  };
  for(let char of t){
    if(!map[char]) return false;
    map[char]--;
  }
  return true;
};
let s="listen";
let t="slient";
console.log("The Two string is Anagram or not:",isAnagram(s,t));
