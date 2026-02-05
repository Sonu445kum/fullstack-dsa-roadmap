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

// Find first repeating character

// Check string rotation

// Replace all spaces with dash

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

// Check string endsWith manually

// Truncate string

// Repeat string N times

// Find all substrings

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
