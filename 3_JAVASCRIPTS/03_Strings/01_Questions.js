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
// function isAnagram(s,t){
//   // base case
//   if(s.length !== t.length) return false;
//   let map ={};
//   for(let char of s){
//     map[char] = (map[char] || 0) + 1;
//   };
//   for(let char of t){
//     if(!map[char]) return false;
//     map[char]--;
//   }
//   return true;
// };
// let s="listen";
// let t="slient";
// console.log("The Two string is Anagram or not:",isAnagram(s,t));

// Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.
// Example 1:

// Input: s = "Hello"
// Output: "hello"
// Example 2:

// Input: s = "here"
// Output: "here"
// Example 3:

// Input: s = "LOVELY"
// Output: "lovely"

// var toLowerCase = function(s) {
//     let lowerCase =s.toLowerCase();
//     return lowerCase;
// };
// let s = "Hellow";
// console.log("The LowerCase of the String:",toLowerCase(s));

// Given an array of strings words representing an English Dictionary, return the longest word in words that can be built one character at a time by other words in words.

// If there is more than one possible answer, return the longest word with the smallest lexicographical order. If there is no answer, return the empty string.

// Note that the word should be built from left to right with each additional character being added to the end of a previous word.

// Example 1:
// Input: words = ["w","wo","wor","worl","world"]
// Output: "world"
// Explanation: The word "world" can be built one character at a time by "w", "wo", "wor", and "worl".

// Example 2:
// Input: words = ["a","banana","app","appl","ap","apply","apple"]
// Output: "apple"
// Explanation: Both "apply" and "apple" can be built from other words in the dictionary. However, "apple" is lexicographically smaller than "apply".

// function findLongestWord(words) {
//   words.sort(); // lexicographical sort
//   let built = new Set([""]);
//   let max = "";

//   for (let word of words) {
//     if (built.has(word.slice(0, word.length - 1))) {
//       built.add(word);
//       if (word.length > max.length) {
//         max = word;
//       }
//     }
//   }

//   return max;
// }
// // let words = ["w","wo","wor","worl","world"];
// let words = ["a", "banana", "app", "appl", "ap", "apply", "apple"];
// console.log("The Longest Words:", findLongestWord(words));

// You are given a string title consisting of one or more words separated by a single space, where each word consists of English letters. Capitalize the string by changing the capitalization of each word such that:

// If the length of the word is 1 or 2 letters, change all letters to lowercase.
// Otherwise, change the first letter to uppercase and the remaining letters to lowercase.
// Return the capitalized title.

// Example 1:

// Input: title = "capiTalIze tHe titLe"
// Output: "Capitalize The Title"
// Explanation:
// Since all the words have a length of at least 3, the first letter of each word is uppercase, and the remaining letters are lowercase.

// var capitalizeTitle = function(title) {
//     return title
//         .toLowerCase()
//         .split(" ")
//         .map(word => {
//             if(word.length <= 2){
//                 return word;
//             }
//             return word[0].toUpperCase() + word.slice(1);
//         })
//         .join(" ");

// };
// let title = "capiTalIze tHe titLe";
// console.log("CapitalizeTitle:",capitalizeTitle(title));

// Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.

// Example 1:

// Input: s = "bcabc"
// Output: "abc"
// Example 2:

// Input: s = "cbacdcbc"
// Output: "acdb"

// var removeDuplicateLetters = function(s) {
//     let result = [...new Set(s)].join("");
//     console.log("res:",result);
//     let ans ="";
//     for(let i =result.length - 1; i>=0; i--){
//         ans +=result[i];
//     }
//     return ans;

// };
// s = "bcabc"; // "abc"
// console.log("Remove Duplicate Letter:",removeDuplicateLetters(s));

// You are given two strings s and t.

// String t is generated by random shuffling string s and then add one more letter at a random position.

// Return the letter that was added to t.

// Example 1:

// Input: s = "abcd", t = "abcde"
// Output: "e"
// Explanation: 'e' is the letter that was added.
// Example 2:

// Input: s = "", t = "y"
// Output: "y"
// 1st Appraoch
// var findTheDifference = function(s, t) {
//     let xor = 0;
//     for(let char of (s + t)){
//         xor ^= char.charCodeAt(0);
//     }
//     return String.fromCharCode(xor);

// };
// let s = "abcd", t = "abcde";
// console.log("Diffrences:",findTheDifference(s,t));

// 2nd Appraoch
// var findTheDifference = function(s, t) {
//     let freq = {};
//     for(let char of s){
//        freq[char] = (freq[char] || 0) + 1;
//     }
//     for(let char of t){
//         if(!freq[char]) return char;
//         freq[char]--;
//     }
// };
// let s = "abcd", t = "abcde";
// console.log("Diffrences:",findTheDifference(s,t));

// You are given a string s consisting of lowercase English letters ('a' to 'z').

// Your task is to:

// Find the vowel (one of 'a', 'e', 'i', 'o', or 'u') with the maximum frequency.
// Find the consonant (all other letters excluding vowels) with the maximum frequency.
// Return the sum of the two frequencies.

// Note: If multiple vowels or consonants have the same maximum frequency, you may choose any one of them. If there are no vowels or no consonants in the string, consider their frequency as 0.

// The frequency of a letter x is the number of times it occurs in the string.

// Example 1:

// Input: s = "successes"

// Output: 6

// Explanation:

// The vowels are: 'u' (frequency 1), 'e' (frequency 2). The maximum frequency is 2.
// The consonants are: 's' (frequency 4), 'c' (frequency 2). The maximum frequency is 4.
// The output is 2 + 4 = 6.

// var maxFreqSum = function(s) {
//    let freq ={};
//    let vowles = "aeiou";
//    for(let char of s){
//     freq[char] =(freq[char] || 0) + 1;
//    };
//    let maxVowels = 0;
//    let maxConsonants = 0;
//    for(let [key,value] of Object.entries(freq)){
//         if(vowles.includes(key)){
//             maxVowels = Math.max(maxVowels , value);
//         }else{
//             maxConsonants = Math.max(maxConsonants,value)
//         }
//    }
//    return maxVowels + maxConsonants;
// };
// let s = "successes";
// console.log("maxFreqSum:",maxFreqSum(s));

// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:

// Input: s = "Mr Ding"
// Output: "rM gniD"

// function reverseWord(s){
//     let result = [];
//     let word = s.split(" ");
//     for(let i =0 ; i<word.length; i++){
//         let str = word[i];
//         let rev = "";
//         for(let j=str.length - 1; j>=0; j--){
//             rev += str[j];
//         }
//         result.push(rev);
//     }
//     return result.join(" ");
// }
// ;let s = "Let's take LeetCode contest";
// console.log("Reverse Word:",reverseWord(s));

// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:

// Input: s = "leetcode"

// Output: 0

// Explanation:

// The character 'l' at index 0 is the first character that does not occur at any other index.

// Example 2:

// Input: s = "loveleetcode"

// Output: 2

// function firstUniqChar(s){
//     let freq ={};
//     for(let char of s){
//         freq[char] =(freq[char] || 0) + 1;
//     }
//     for(let i =0; i<s.length; i++){
//        if(freq[s[i]] === 1){
//         return i;
//        }
//     }
//     return -1;
// };
// let s = "loveleetcode";
// console.log("FirstUniqueChar:",firstUniqChar(s));

// Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.

// An alphanumeric string is a string consisting of lowercase English letters and digits.

// Example 1:

// Input: s = "dfa12321afd"
// Output: 2
// Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2.
// Example 2:

// Input: s = "abc1111"
// Output: -1
// Explanation: The digits that appear in s are [1]. There is no second largest digit.

// var secondHighest = function (s) {
//   let digit = s.match(/\d/g);
//   //  check the digit are number
//   if (!digit) return -1;
//   let firstMax = -1;
//   let secondMax = -1;
//   for (let d of digit) {
//     let num = Number(d);
//     // check for the firstMax
//     if (num > firstMax) {
//       secondMax = firstMax;
//       firstMax = num;
//     } else if (num < firstMax && num > secondMax) {
//       secondMax = num;
//     }
//   }
//   return secondMax;
// };
// let s = "dfa12321afd";
// console.log("secondHighest:", secondHighest(s));

// The power of the string is the maximum length of a non-empty substring that contains only one unique character.

// Given a string s, return the power of s.

 

// Example 1:

// Input: s = "leetcode"
// Output: 2
// Explanation: The substring "ee" is of length 2 with the character 'e' only.
// Example 2:

// Input: s = "abbcccddddeeeeedcba"
// Output: 5
// Explanation: The substring "eeeee" is of length 5 with the character 'e' only.

// function maxPower(s){
//   let max = 1;
//     let count = 1;
//     for (let i = 1; i < s.length; i++) {
//         if (s[i] === s[i - 1]) {
//             count++;
//         } else {
//             count = 1;
//         }
//         max = Math.max(max, count);
//     }
//     return max; 
// };
// let s = "abbcccddddeeeeedcba";
// console.log("maxPower :",maxPower(s));


// Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

// A string is palindromic if it reads the same forward and backward.

 

// Example 1:

// Input: words = ["abc","car","ada","racecar","cool"]
// Output: "ada"
// Explanation: The first string that is palindromic is "ada".
// Note that "racecar" is also palindromic, but it is not the first.
// Example 2:

// Input: words = ["notapalindrome","racecar"]
// Output: "racecar"
// Explanation: The first and only string that is palindromic is "racecar".
// Example 3:

// Input: words = ["def","ghi"]
// Output: ""
// Explanation: There are no palindromic strings, so the empty string is returned.

// var firstPalindrome = function(words) {
//     for(let i =0; i<words.length; i++){
//         if(isPalindrome(words[i])){
//             return words[i];
//         }
//     }
//     return ""; 
// };
// words = ["abc","car","ada","racecar","cool"];
// console.log("firstPlaindrome:",firstPalindrome(words));

// // function to check palindrome
// function isPalindrome(s){
//   if(s.length === 1) return true;
//   if(s.length < 1) return false;

//   for(let i = 0; i<s.length/2; i++){
//     if(s[i] !== s[s.length - i-1]){
//       return false;
//     }
//   }
//   return true;
// }
// let s ="nitini";
// console.log("S is palindrome or not:",isPalindrome(s));

// Given a string s, return true if s is a good string, or false otherwise.

// A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).

 

// Example 1:

// Input: s = "abacbc"
// Output: true
// Explanation: The characters that appear in s are 'a', 'b', and 'c'. All characters occur 2 times in s.
// Example 2:

// Input: s = "aaabb"
// Output: false
// Explanation: The characters that appear in s are 'a' and 'b'.
// 'a' occurs 3 times while 'b' occurs 2 times, which is not the same number of times.

// var areOccurrencesEqual = function(s) {
//     let freq = {};
//     for(let char of s){
//         freq[char] = (freq[char] || 0) + 1;
//     }
//     let arr = Object.values(freq);
//     return isEqual(arr);
// };
// let s = "abacbc";
// console.log("areOccurencesEqual:",areOccurrencesEqual(s));

// function isEqual(arr){
//     for(let i =1; i<arr.length; i++){
//         if(arr[i] !== arr[i-1]){
//             return false;
//         }
//     }
//     return true;
// }

// Given a string s and a character letter, return the percentage of characters in s that equal letter rounded down to the nearest whole percent.

 

// Example 1:

// Input: s = "foobar", letter = "o"
// Output: 33
// Explanation:
// The percentage of characters in s that equal the letter 'o' is 2 / 6 * 100% = 33% when rounded down, so we return 33.
// Example 2:

// Input: s = "jjjj", letter = "k"
// Output: 0
// Explanation:
// The percentage of characters in s that equal the letter 'k' is 0%, so we return 0.

// var percentageLetter = function(s, letter) {
//     let count =0;
//     for(let char of s){
//         if(char === letter){
//             count++;
//         }
//     }
//     return Math.floor((count*100)/s.length);
// };
// let s = "foobar", letter = "o";
// console.log("percentageLetter:",percentageLetter(s , letter));

// You are given a 0-indexed array words consisting of distinct strings.

// The string words[i] can be paired with the string words[j] if:

// The string words[i] is equal to the reversed string of words[j].
// 0 <= i < j < words.length.
// Return the maximum number of pairs that can be formed from the array words.

// Note that each string can belong in at most one pair.

 

// Example 1:

// Input: words = ["cd","ac","dc","ca","zz"]
// Output: 2
// Explanation: In this example, we can form 2 pair of strings in the following way:
// - We pair the 0th string with the 2nd string, as the reversed string of word[0] is "dc" and is equal to words[2].
// - We pair the 1st string with the 3rd string, as the reversed string of word[1] is "ca" and is equal to words[3].
// It can be proven that 2 is the maximum number of pairs that can be formed.

// function maximumNumberOfStringPairs(words){
//   let set = new Set();
//   let count = 0;

//   for(let word of words){
//     let rev = reverse(word);

//     // check the word is already present in the set
//     // if the present then incrment the count,
//     if(set.has(rev)){
//       count++;
//     }
//     //  otherwise add into the set
//     set.add(word);
//   }
//   return count;
// }
// let words = ["cd","ac","dc","ca","zz"];
// console.log("maximumNumberOfStringPairs:",maximumNumberOfStringPairs(words));

// function reverse(s){
//   return s.split("").reverse().join("");
// }

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false

// var isSubsequence = function(s, t) {
//     let i = 0;
//     for (let j = 0; j < t.length; j++) {
//         if (s[i] === t[j]) {
//             i++;
//         }
//     }
//     return i === s.length;
// };
// let s = "abc", t = "ahbgdc";
// console.log("isSubsequcenc:",isSubsequence(s,t));

// var countSegments = function(s) {
//     let count = 0;
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] !== " " && (i === 0 || s[i - 1] === " ")) {
//             count++;
//         }
//     }
//     return count;
    
// };
// let s = "Hello";
// console.log("Segement:",countSegments(s));

// var buddyStrings = function(s, goal) {
//    if (s.length !== goal.length) return false;

//     let arr = s.split("");

//     for (let i = 0; i < arr.length - 1; i++) {
//         let temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//     }

//     let newStr = arr.join("");

//     return newStr === goal;
// };

// optimal Approach
// var buddyStrings = function(s, goal) {
//    if (s.length !== goal.length) return false;

// //    if the both strings are equal
//     if(s === goal){
//         let set = new Set(s);
//         return set.size < s.length;
//     }
//     let diff = [];
//     for(let i =0; i<s.length; i++){
//         if(s[i] !== goal[i]){
//             diff.push(i);
//         }
//     }
//     return diff.length === 2 && (s[diff[0]] === goal[diff[1]]) && (s[diff[1]] === goal[diff[0]]);
// };
// let s = "aa", goal = "aa";
// console.log("budding String:",buddyStrings(s,goal));

// You are given a string s of length n consisting of lowercase English letters.

// Return the smallest index i such that s[i] == s[n - i - 1].

// If no such index exists, return -1.

 

// Example 1:

// Input: s = "abcacbd"

// Output: 1

// Explanation:

// At index i = 1, s[1] and s[5] are both 'b'.

// No smaller index satisfies the condition, so the answer is 1.

// var firstMatchingIndex = function(s) {
//     for(let i =0 ; i<s.length; i++){
//         if(s[i] === s[s.length - i-1]){
//             return i;
//         }
//     }
//     return -1;
// };
// let s = "abcacbd";
// console.log("firstMatchingIndex:",firstMatchingIndex(s));

// You are given a string s consisting of lowercase English letters, spaces, and digits.

// Let v be the number of vowels in s and c be the number of consonants in s.

// A vowel is one of the letters 'a', 'e', 'i', 'o', or 'u', while any other letter in the English alphabet is considered a consonant.

// The score of the string s is defined as follows:

// If c > 0, the score = floor(v / c) where floor denotes rounding down to the nearest integer.
// Otherwise, the score = 0.
// Return an integer denoting the score of the string.

// var vowelConsonantScore = function(s) {
//     let vowelCount = 0;
//     let consonantCount =0;
//     let vowels = "aeiou";
//     for(let i =0; i<s.length; i++){
//         let ch = s[i];
//         if(ch >= 'a' && ch <= 'z'){
//             if(vowels.includes(ch)){
//                 vowelCount++;
//             }else{
//             consonantCount++;
//             }    
//         }
//     }
//     if(consonantCount > 0){
//         return Math.floor(vowelCount/consonantCount)
//     }
//     return 0 ;
// };
// let s = "cooear";
// console.log("Score:",vowelConsonantScore(s));

// The value of an alphanumeric string can be defined as:

// The numeric representation of the string in base 10, if it comprises of digits only.
// The length of the string, otherwise.
// Given an array strs of alphanumeric strings, return the maximum value of any string in strs.

 

// Example 1:

// Input: strs = ["alic3","bob","3","4","00000"]
// Output: 5
// Explanation: 
// - "alic3" consists of both letters and digits, so its value is its length, i.e. 5.
// - "bob" consists only of letters, so its value is also its length, i.e. 3.
// - "3" consists only of digits, so its value is its numeric equivalent, i.e. 3.
// - "4" also consists only of digits, so its value is 4.
// - "00000" consists only of digits, so its value is 0.
// Hence, the maximum value is 5, of "alic3".

// var maximmumValue = function(strs){
//     let max =0;
//     for(let word of strs){
//         let hasLetter = /[a-z]/i.test(word);
//         let value;
//         if(hasLetter){
//             value = word.length;
//         }else{
//             value = Number(word);
//         }
//         max  = Math.max(max , value);
//     }
//     return max;
// };
// let strs = ["alic3","bob","3","4","00000"];
// console.log("maximumValue:",maximmumValue(strs));

// You are given a 0-indexed string array words.

// Two strings are similar if they consist of the same characters.

// For example, "abca" and "cba" are similar since both consist of characters 'a', 'b', and 'c'.
// However, "abacba" and "bcfd" are not similar since they do not consist of the same characters.
// Return the number of pairs (i, j) such that 0 <= i < j <= word.length - 1 and the two strings words[i] and words[j] are similar.

 

// Example 1:

// Input: words = ["aba","aabb","abcd","bac","aabc"]
// Output: 2
// Explanation: There are 2 pairs that satisfy the conditions:
// - i = 0 and j = 1 : both words[0] and words[1] only consist of characters 'a' and 'b'. 
// - i = 3 and j = 4 : both words[3] and words[4] only consist of characters 'a', 'b', and 'c'. 

// var similarPairs = function(words){
//     let map = new Map();
//     let count = 0;
//     for(let word of words){
//         let key = [...new Set(word)].sort().join("");
//         console.log("Key:",key);
//         if(map.has(key)){
//             count += map.get(key);
//         }
//         map.set(key , (map.get(key) || 0) + 1);
//     }
//     return count;
// };
// let words = ["aba","aabb","abcd","bac","aabc"];
// console.log("SimilarPairs:",similarPairs(words));

// Given a string s, calculate its reverse degree.

// The reverse degree is calculated as follows:

// For each character, multiply its position in the reversed alphabet ('a' = 26, 'b' = 25, ..., 'z' = 1) with its position in the string (1-indexed).
// Sum these products for all characters in the string.
// Return the reverse degree of s.

 

// Example 1:

// Input: s = "abc"

// Output: 148

// Explanation:

// Letter	Index in Reversed Alphabet	Index in String	Product
// 'a'	26	1	26
// 'b'	25	2	50
// 'c'	24	3	72
// The reversed degree is 26 + 50 + 72 = 148.

// Example 2:

// Input: s = "zaza"

// Output: 160

// Explanation:

// Letter	Index in Reversed Alphabet	Index in String	Product
// 'z'	1	1	1
// 'a'	26	2	52
// 'z'	1	3	3
// 'a'	26	4	104
// The reverse degree is 1 + 52 + 3 + 104 = 160.

// var reverseDegree = function(s){
//     let sum =0;
//     for(let i =0; i<s.length; i++){
//         let reverseValue = 26 - (s[i].charCodeAt(0) - 97);
//         let postions = i + 1;
//         sum += reverseValue * postions;
//     }
//     return sum;
// }
// let s = "abc";
// console.log("ReverseDegree:",reverseDegree(s));

// You are given a string s. The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.

// Return the score of s.

 

// Example 1:

// Input: s = "hello"

// Output: 13

// Explanation:

// The ASCII values of the characters in s are: 'h' = 104, 'e' = 101, 'l' = 108, 'o' = 111. So, the score of s would be |104 - 101| + |101 - 108| + |108 - 108| + |108 - 111| = 3 + 7 + 0 + 3 = 13.

// Example 2:

// var scoreOfString = function(s){
//     let sum = 0;
//     for(let i=1; i<s.length; i++){
//         sum += (Math.abs(s[i].charCodeAt(0) - (Math.abs(s[i-1].charCodeAt(0)))))
//     }
//     return sum;
// }
// let s = "hello";
// console.log("ScoreOfString:",scoreOfString(s));

// var getLucky = function(s, k) {
//     let res = "";
//     for(let i = 0; i<s.length; i++){
//         res += (s[i].charCodeAt(0)-96)
//     }
//     while(k>0){
//         let sum =0;
//         for(let ch of res){
//             sum += Number(ch);
//         }
//         res = sum.toString();
//         k--;
//     }
//     return Number(res);
// };
// let s = "iiii" , k=1;
// console.log("getLucky:",getLucky(s,k));

// Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

// For example:

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28 
// ...
 

// Example 1:

// Input: columnNumber = 1
// Output: "A"

// var convertToTitle = function(columnNumber){
//     let res = "";
//     while(columnNumber > 0){
//         columnNumber--;
//         let char = String.fromCharCode(65 + (columnNumber % 26));
//         res = char + res;
//         columnNumber = Math.floor(columnNumber/26);
//     }
//     return res;
// }
// let columnNumber = 1;
// console.log("ConvertToTile:",convertToTitle(columnNumber));

// You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

// Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

// Return true if a and b are alike. Otherwise, return false.

 

// Example 1:

// Input: s = "book"
// Output: true
// Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.

// var halvesAreAlike = function(s) {
//     let n = s.length;
//     let vowels = "aioueAEOUI";
//     let countA =0;
//     let countB =0 ;
//     let a =s.slice(0 , n/2);
//     console.log("A:",a);
//     let b =s.slice(n/2 , n);
//     console.log("b",b);
//     for(let char of a){
//         if(vowels.includes(char)){
//             countA++;
//         }
//     }
//     for(let char of b){
//         if(vowels.includes(char)){
//             countB++;
//         }
//     }
//     return countA === countB;
// };
// let s = "book";
// console.log("halvesAreAlike:",halvesAreAlike(s));

// var truncateSentence = function(s, k) {
//    let newS = s.split(" ");
//    let res = "";
//    for(let i=0; i<k; i++){
//         res += newS[i]+ " ";
//    }
//    return res.trim(); 
// };
// let s = "Hello how are you Contestant", k = 4
// console.log("truncateSentence:",truncateSentence(s,k));

// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.

// Example 1:
// Input: word = "USA"
// Output: true

// var detectCapitalUse = function(word) {
//    let splitChar = word.split("");
//    console.log("SplitChar:",splitChar);
   

// };
// let word = "FlaGe";
// console.log("DetectCapitalUse:",detectCapitalUse(word));

// var commonChars = function(words) {
//     let n = words.length;
//     let splitWord = words.split("");
//     let freq = {};
//     for(let char of splitWord){
//         freq[char] = (freq[word] || 0) + 1;
//     }
//     let ans =[];
//     for(let [key,value] of Object.entries(freq)){
//         if(value === n){
//             ans.push(key);
//         }
//     }
//     return ans;
// };
// let words =

// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

 

// Example 1:

// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"
// Example 2:

// Input: s = "abcd", k = 2
// Output: "bacd"

// var reverseStr = function(s, k) {
//     let n = s.length;
//     let rev = "";
//     let halfrev = "";
//     for(let i = n-1; i>=0; i--){
//         rev += s[i];
//     }
//     // rev->gfedcba;
//     let lastKRev ="";
//     for(let i= rev.length-k; i<rev.length; i++){
//         lastKRev += rev[i];
//     }
//     console.log("lastKRev:",lastKRev);
//     for(let i=rev.length-1-k; i>=0; i--){
//         halfrev += rev[i];

//     }
//     console.log("halfRev:",halfrev);
//     return lastKRev+halfrev;
// };

// optimized Appraoch
// var reverseStr = function(s, k) {
//     let arr = s.split("");
//     for(let i=0; i<arr.length; i += 2*k){
//         let left = i;
//         let right = Math.min(i+k-1 , arr.length);
//         while(left < right){
//             [arr[left] , arr[right]] = [arr[right] , arr[left]];
//             left++;
//             right--;
//         }
//     }
//     return arr.join("");
// };
// let s = "abcdefg", k = 2;
// console.log("reverseStr:",reverseStr(s,k));

// You are given a positive number n.

// Return the smallest number x greater than or equal to n, such that the binary representation of x contains only set bits

 

// Example 1:

// Input: n = 5

// Output: 7

// Explanation:

// The binary representation of 7 is "111".

var smallestNumber = function(n){
    let smallest = n.toString(2).length;
    return (1 << smallest) - 1;

}
let n = 5;
console.log("The Smalllest Set Bits:",smallestNumber(n));