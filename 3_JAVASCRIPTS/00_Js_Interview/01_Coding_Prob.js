// Reverse a string
// let s ="sonu";
// first Appraoch
// let rev = s.split("").reverse().join("");
// console.log(rev);

// function reverese(s){
//     let rev = "";
//     for(let i=s.length-1; i>=0; i--){
//         rev += s[i];
//     }
//     return rev;
// }
// let s ="sonu";
// console.log("Reverse:",reverese(s));

// Check palindrome
// function palindrome(s){
//     let rev = "";
//     for(let i=s.length-1; i>=0; i--){
//         rev += s[i];
//     }
//     if( rev === s){
//         return true
//     }
//     return false;
// }
// let s ="nitin";
// console.log("Plaindrome:",palindrome(s));

// FizzBuzz

// Find max/min in array
// let arr =[4,3,2,5,6,1];
// let max = -Infinity;
// let min = Infinity;

// function minMax(arr){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i];
//         }else if(arr[i] < min){
//             min = arr[i];
//         }
//     }
//     return {min,max};
// }
// console.log("Min,Max:",minMax(arr));

// Remove duplicates from array
// let arr =[1,1,2,2,3,3,4,5,5,6];
// let set = new Set(arr);
// console.log(set);

// function removeDuplicate(arr){
//     let set = new Set();
//     for(let i=0; i<arr.length; i++){
//         if(!set.has(arr[i])){
//             set.add(arr[i]);
//         }
//     }
//     return set;
// }
// let arr =[1,1,2,2,3,3,4,5,5,6];
// console.log("remove Duplicate:",removeDuplicate(arr));

// Flatten array (1 level)

// Count vowels in string
// function countVowels(s){
//     let count = 0;
//     let vowels ="aioue";
//     for(let i=0; i<s.length; i++){
//         if(vowels.includes(s[i])){
//             count++;
//         }
//     }
//     return count;
// }
// let s ="applemango";
// console.log("Count Vowels:",countVowels(s));


// Find factorial (recursion + loop)
// // factorial with loops:
// function factorial(num){
//     let fact = 1;
//     for(let i = num; i>=1; i--){
//         fact *= i;
//     }
//     return fact;
// }
// let num =5;
// console.log("Factorial With Loops:",factorial(num));

// factorial with Recusions:
// function factorial(num){
//     // base case
//     if(num < 1) return 1;
//     return num*factorial(num - 1);
// }
// let num =5;
// console.log("Factorial With Recusions:",factorial(num));

// Check prime number
// function isPrime(num){
//     // base case
//     if(num === 1) return false;
//     if(num === 2) return true;
//     if(num % 2 === 0) return false;

//     // traversal
//     for(let i =3; i*i<=num; i++){
//         if(num % i === 0) return false;
//     }
//     return true;
// }
// let num = 59;
// console.log("Prime Number:",isPrime(num));

// Sum of digits
// function sumDigit(num){
//     let sum =0;
//     while(num > 0){
//         sum += num % 10;
//         num = Math.floor(num/10);
//     }
//     return sum;
// }
// let num = 1234; // o/p -> 10;
// console.log("Sum Digit:",sumDigit(num));

// Find missing number in array
// function missingNumber(arr){
//     let ans =[];
//     let set = new Set(arr);
//     for(let i =1; i<arr.length; i++){
//         if(!set.has(i)){
//             ans.push(i)
//         }
//         set.add(i);
//     }
//     return ans;

// }
// let arr = [1,2,2,3,4,7,8];
// console.log("Missing Number:",missingNumber(arr));
// Merge two arrays without duplicates

// Capitalize first letter of each word
// function capitalizesFirstLetter(sen){
//     let capitalizes = sen.split(" ").map((word)=>word[0].toUpperCase() + word.slice(1)).join(" ");
//     return capitalizes;
// }
// let sen = "hello how are you";
// console.log("Capitalizes:",capitalizesFirstLetter(sen));

// Find longest word in string
// function longestWord(s){
//     let max = -Infinity;
//     let str = s.split(" ");
//     let word = ""
//     console.log(str)
//     for(let i=0; i<str.length; i++){
//         if(str[i].length > max){
//             max = str[i].length;
//             word = str[i];
//         }
//     }
//     return {max,word};

// }
// let s = "Hello how are sonu";
// console.log("Longest Word:",longestWord(s));
// Convert string to camelCase

// Convert object to array
// let object = {
//     "1" : 2,
//     "2" : 3,
//     "3" : 4,
//     "4" : 5
// }
// let ans = Object.entries(object);
// console.log(ans);

// Swap two variables without temp
// function swapToNum(a,b){
//     console.log("Before Swapping Num:","a:",a,"b:",b);
//     a = a + b ;
//     b = a -b;
//     a = a - b;
//     console.log("Before Swapping Num:","a:",a,"b:",b);
// }
// let a = 5 , b = 10;
// swapToNum(a,b);

// Find second largest number

// function seondLargestNum(num){
//     let firstMax = -Infinity;
//     let secMax = -Infinity;
//     for(let n of num){
//         if( n > firstMax){
//             secMax = firstMax;
//             firstMax = n;
//         }else if(n < firstMax && n > secMax){
//             secMax = n;
//         }
//     }
//     return secMax;

// }
// let num = [10,2,34,1,90];
// console.log("Second Largest NUmber:",seondLargestNum(num));

// Count frequency of characters
// function countFrequency(s){
//     let freq = {};
//     for(let char of s){
//         freq[char] = (freq[char] || 0) + 1;
//     }
//     return freq;
// }
// let s ="aabnncccsdefde";
// console.log("Count Freq of Character:",countFrequency(s));

// Find intersection of two arrays

// Check anagram
// Chunk array
// Remove falsy values
// Repeat string N times

// Find unique values
// function uniqueValue(arr){
//     let ans = 0;
//     for(let i = 0; i<arr.length; i++){
//         ans ^= arr[i];
//     }
//     return ans;
// }
// let arr = [1,1,2,2,3,4,,4,5,5];
// console.log("Unique Values:",uniqueValue(arr));

// Reverse words in sentence
// function reverseWord(sen){
//     return sen.split(" ").map(word =>word.split("").reverse().join("")).join(" ")
// }
// let sen = "Hello how are you";
// console.log("Reverse Word:",reverseWord(sen));


// Find first non-repeating char
// function firstRepating(s){
//     let freq = {};
//     for(let char of s){
//         freq[char] = (freq[char] || 0) + 1;
//     }
//     for(let i=0; i<s.length; i++){
//         if(freq[s[i]] > 1){
//             return s[i];
//         }
//     }
// }
// let s ="abbcde";
// console.log("First Repating:",firstRepating(s));

// Sort array without sort()
// Convert number to binary
// function numToBinary(num){
//     let result = "";
//     while (num > 0) {
//         result = (num % 2) + result;
//         num = Math.floor(num / 2);
//     }
//     return result || "0";
// }
// let num = 12;
// console.log("Num To Binary:",numToBinary(num));
// Check if array is sorted