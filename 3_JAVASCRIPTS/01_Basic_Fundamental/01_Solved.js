// 1. Basics & Fundamentals (20)

// Reverse a string
// let str='hello world';
// console.log(str.split('').reverse().join(''));

// Check palindrome string
// let str="aba";
// function isPalindrome(str){
//     for(let i=0; i<str.length; i++){
//         if(str[i] !==str[str.length-i-1]){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPalindrome(str));

// Find factorial of a number
// let n=5;
// function factorial(n){
//     if(n===0) return 1;
//     return n*factorial(n-1);
// };
// console.log("The Factorial is:",factorial(n));

// Generate Fibonacci series
// let n=5;
// function Fibbonacci_Series(n) {
//   let a = 0;
//   let b = 1;
//  console.log(a,b);
//   for (let i = 0; i < n; i++) {
//     let c = a + b;
//     a=b;
//     b=c;
//     console.log(c)
//   }

// }
// Fibbonacci_Series(n);

// Check prime number
// let n=6;
// function CheckPrime(n){
//     if(n===0 || n === 1) return false;
//     if(n === 2) return true;
//     if(n % 2 === 0) return false;
//     for(let i=3; i*i<=n ; i+=2){
//         if(n%i ===0){
//             return false;
//         }

//     }
//     return true;
// }
// console.log(CheckPrime(n));

// Find largest of three numbers
// let a=2,b=3,c=4;
// if(a>b && a > c){
//     console.log("A is the Largest:",a);
// }else if(b>a && b > c){
//     console.log("B is the Largest :",b);
// }else{
//     console.log("C is the Largest:",c);
// }
// Swap two variables without temp
// let a=5,b=10;
// console.log("A:",a,"B:",b);
// a=a-b;
// b=a+b;
// a=b-a;
// console.log("After the Swapping:","A:",a,"B:",b);

// Count vowels in a string
// let str ='sonuappleAIOUE';
// let vowels =['a','i','o','u','e','A','I','O','U','E'];
// let countVowels=0;
// function countVowel(str){
//     for(let i=0; i<str.length; i++){
//         if(vowels.includes(str[i])){
//             countVowels++;
//         }
//     }
//     return countVowels;

// }
// console.log(countVowel(str))

// Convert string to number
// let str="440";
// console.log(Number(str));

// // Convert number to string
// let n=220;
// console.log(n.toString());

// Check even or odd

// Find sum of digits
// let n = 1234;
// let sum = 0;
// function sumDigits(n) {
//   while (n > 0) {
//     sum +=n % 10;
//     n = Math.trunc(n / 10);
//   }
//   return sum;
// }
// console.log("The Sum Of Digits:",sumDigits(n));

// Reverse a number
// let n=1234;
// let rev=0;
// function reverse(n){
//     while(n>0){
//         rev  = rev*10 + n%10;
//         n    = Math.trunc(n/10);
//     }
//     return rev;
// }
// console.log("The Reverse Of the given Number:",reverse(n));

// Check leap year
// function isLeapYear(year) {
//   if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//     console.log(year + " is a Leap Year");
//   } else {
//     console.log(year + " is NOT a Leap Year");
//   }
// }

// // Example
// isLeapYear(2024);
// isLeapYear(1900);
// isLeapYear(2000);

// Generate random number in range
// let n=4;
// let random=0;
// for(let i=0; i<n; i++){
//     random = i*Math.random();
//     console.log(random);
// }

// Count words in string
// let str = "This is my Village";
// function countWord(str) {
//   let wordCount = str.trim().split(" ");
//   return wordCount.length;
// }
// console.log(countWord(str));

// Capitalize first letter of each word
// function capitalizeWords(str) {
//   return str
//     .trim()
//     .split(/\s+/)
//     .map((word) => word[0].toUpperCase() + word.slice(1))
//     .join(" ");
// }
// console.log(capitalizeWords("this is my village"));

// Remove whitespace from string
// function removeAllSpaces(str) {
//   return str.replace(/\s+/g, "");
// }

// console.log(removeAllSpaces("This is my Village"));

// Check if string contains substring
// function containsSubstring(str, sub) {
//   return str.includes(sub);
// }

// console.log(containsSubstring("This is my Village", "Village"));

// Find ASCII value of character
// function asciiValue(char) {
//   return char.charCodeAt(0);
// }

// console.log(asciiValue("A"));
// console.log(asciiValue("a"));
