// // Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
// // Example 1:
// // Input: num = 38
// // Output: 2
// // Explanation: The process is
// // 38 --> 3 + 8 --> 11
// // 11 --> 1 + 1 --> 2
// // Since 2 has only one digit, return it.

// // function addDigits(num) {
// //   while (num >= 10) {
// //     let sum = 0;
// //     // recursive call
// //     while (num > 0) {
// //       sum = sum + (num % 10);
// //       num = Math.floor(num / 10);
// //     }
// //     num=sum;
// //   }

// //   return num;
// // }
// // let num = 11;
// // console.log(addDigits(num));

// // check the power3
// // function isPower3(num){
// //     // base case
// //     if(num <=0) return false;
// //     while(num % 3 === 0){
// //         num = num / 3;
// //     }
// //     return num === 1;
// // };
// // let num=27;
// // console.log(isPower3(num));

// // check the power4
// // function isPower4(num){
// //     // base case
// //     if(num <=0) return false;
// //     while(num % 4 === 0){
// //         num = num / 4;
// //     }
// //     return num === 1;
// // };
// // let num=16;
// // console.log(isPower4(num));

// // check the power5
// // function isPower5(num){
// //     // base case
// //     if(num <=0) return false;
// //     while(num % 5 === 0){
// //         num = num / 5;
// //     }
// //     return num === 1;
// // };
// // let num=125;
// // console.log(isPower5(num));

// // find the tribonacci number
// // function tribonacci(n){
// //     // base case;
// //     if(n===0) return 0;
// //     if(n === 1 || n === 2) return 1;
// //     // recursive call
// //     let a=0,b=1,c=1;
// //     for(let i=3; i<=n; i++){
// //         let next = a+b+c;
// //         a=b;
// //         b=c;
// //         c=next;
// //     };
// //     return c;
// // };
// // let n=4;
// // console.log("The Tribonacci Number:",tribonacci(n));

// // check the number is the Valid Perfect Sqaure
// // function isPerfectSquare(num){
// //     // base case
// //     if(num <=0) return false;
// //     for(let i=1; i<=num; i++){
// //         if(num % i === 0 && i*i === num){
// //             return true;
// //         }
// //     }
// //     return false;

// // };
// // let num=2147483647;
// // console.log("The Number is Perfect or not:",isPerfectSquare(num))

// // 2nd Approach
// // function isPerfectSquare(num) {
// //   let left = 1,right = num;
// //   while (left <= right) {
// //     let mid = Math.floor((left + right) / 2);
// //     let sqaure = mid * mid;
// //     if (sqaure === num) return true;
// //     else if (sqaure < num) left = mid + 1;
// //     else if (sqaure > num) right = mid - 1;
// //   }
// //   return false;
// // }
// // let num = 144;
// // console.log("The Number is Perfect or not:", isPerfectSquare(num));

// // var mySqrt = function(num) {
// //     if (num < 2) return num;

// //     let left = 1;
// //     let right = Math.floor(num / 2);
// //     let ans = 0;

// //     while (left <= right) {
// //         let mid = Math.floor((left + right) / 2);
// //         let square = mid * mid;

// //         if (square === num) {
// //             return mid;
// //         } else if (square < num) {
// //             ans = mid;       // store possible answer
// //             left = mid + 1;
// //         } else {
// //             right = mid - 1;
// //         }
// //     }

// //     return ans;
// // };
// // let num = 4;
// // console.log("The Square Root of the Number:", mySqrt(num));

// // A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. A divisor of an integer x is an integer that can divide x evenly.

// // Given an integer n, return true if n is a perfect number, otherwise return false.

// // Example 1:

// // Input: num = 28
// // Output: true
// // Explanation: 28 = 1 + 2 + 4 + 7 + 14
// // 1, 2, 4, 7, and 14 are all divisors of 28.
// // Example 2:

// // Input: num = 7
// // Output: false
// // first approach:
// // var checkPerfectNumber = function(num) {
// //     let sum = 0;
// //     for(let i = 1; i < num; i++){
// //         if(num % i === 0){
// //             sum += i;
// //         }
// //     }
// //     if(sum === num){
// //         return true;
// //     }else{
// //         return false;
// //     }

// // };
// // let num = 6 ;
// // console.log("This Number is Perfect or not:",checkPerfectNumber(num));

// // 2nd Approach
// // var checkPerfectNumber = function (num) {

// //     if (num <= 1) return false;

// //     let sum = 1; // 1 is always divisor (except 1 itself)

// //     for (let i = 2; i * i <= num; i++) {
// //         if (num % i === 0) {
// //             sum += i;

// //             if (i !== num / i) {
// //                 sum += num / i;
// //             }
// //         }
// //     }

// //     return sum === num;
// // };
// // let num = 6;
// // console.log("This Number is Perfect or not:", checkPerfectNumber(num));

// // You are given a non-negative floating point number rounded to two decimal places celsius, that denotes the temperature in Celsius.

// // You should convert Celsius into Kelvin and Fahrenheit and return it as an array ans = [kelvin, fahrenheit].

// // Return the array ans. Answers within 10-5 of the actual answer will be accepted.

// // Note that:

// // Kelvin = Celsius + 273.15
// // Fahrenheit = Celsius * 1.80 + 32.00

// // Example 1:

// // Input: celsius = 36.50
// // Output: [309.65000,97.70000]
// // Explanation: Temperature at 36.50 Celsius converted in Kelvin is 309.65 and converted in Fahrenheit is 97.70.
// // Example 2:

// // Input: celsius = 122.11
// // Output: [395.26000,251.79800]
// // Explanation: Temperature at 122.11 Celsius converted in Kelvin is 395.26 and converted in Fahrenheit is 251.798.

// // var convertTemperature = function(celsius) {
// //     let ans = [];
// //     let Kelvin = celsius + 273.15;
// //     ans.push(Kelvin);
// //     let Fahrenheit = celsius * 1.80 + 32 ;
// //     ans.push(Fahrenheit);
// //     return ans;
// // };
// // let celsius = 36.50;
// // console.log(convertTemperature(celsius));

// // You are given an integer n. Your task is to compute the GCD (greatest common divisor) of two values:

// // sumOdd: the sum of the smallest n positive odd numbers.

// // sumEven: the sum of the smallest n positive even numbers.

// // Return the GCD of sumOdd and sumEven.

// // Example 1:

// // Input: n = 4

// // Output: 4

// // Explanation:

// // Sum of the first 4 odd numbers sumOdd = 1 + 3 + 5 + 7 = 16
// // Sum of the first 4 even numbers sumEven = 2 + 4 + 6 + 8 = 20
// // Hence, GCD(sumOdd, sumEven) = GCD(16, 20) = 4.

// // var gcdOfOddEvenSums = function(n) {
// //     let sumOdd = 0;
// //     let sumEven = 0;
// //     for(let i=1; i<=n; i++){
// //          sumOdd += 2*i -1;
// //          sumEven+= 2*i;
// //     }
// //     let a=sumEven,b=sumOdd;

// //     while(b !==0){
// //         [a , b ]= [b,a % b];
// //     }
// //     return a;
// // };
// // let n =9;
// // console.log("The GCD of SumOdd and SumEven:",gcdOfOddEvenSums(n));

// // Given an integer n, return true if n has exactly three positive divisors. Otherwise, return false.

// // An integer m is a divisor of n if there exists an integer k such that n = k * m.

// // Example 1:

// // Input: n = 2
// // Output: false
// // Explantion: 2 has only two divisors: 1 and 2.
// // Example 2:

// // Input: n = 4
// // Output: true
// // Explantion: 4 has three divisors: 1, 2, and 4.

// // var isThree = function(n) {
// //     let count = 0;
// //     for(let i = 1; i<=n; i++){
// //         if(n % i === 0){
// //             count++;
// //         }
// //     }
// //     return count === 3;

// // };
// // let n = 9;
// // console.log(isThree(n));

// // Given an integer n, return the number of trailing zeroes in n!.
// // Note that n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.

// // Example 1:
// // Input: n = 3
// // Output: 0
// // Explanation: 3! = 6, no trailing zero.

// // Example 2:
// // Input: n = 5
// // Output: 1
// // Explanation: 5! = 120, one trailing zero.

// // Example 3:
// // Input: n = 0
// // Output: 0

// // function trailingZeroes(n) {
// //   // base case
// //   if (n <= 1) return 0;

// //   let fact = 1;

// //   for (let i = 1; i <= n; i++) {
// //     fact *= i;
// //   }
// //   let count = 0;
// //   let temp = fact;
// //   while (temp % 10 === 0) {
// //     count += 1;
// //     temp = Math.floor(fact / 10);
// //   }
// //   return count;
// // }
// // let n = 7;
// // console.log("Number of Trailing Zeros are:", trailingZeroes(n));

// // 2nd Appraoch
// // function trailingZeroes(n) {
// //   let count = 0;
// //   while (n > 0) {
// //     n = Math.floor(n / 5);
// //     count += n;
// //   }
// //   return count;
// // }
// // let n = 7;
// // console.log("Number of Trailing Zeros are:", trailingZeroes(n));

// // Given an integer number n, return the difference between the product of its digits and the sum of its digits.

// // Example 1:

// // Input: n = 234
// // Output: 15
// // Explanation:
// // Product of digits = 2 * 3 * 4 = 24
// // Sum of digits = 2 + 3 + 4 = 9
// // Result = 24 - 9 = 15
// // Example 2:

// // Input: n = 4421
// // Output: 21
// // Explanation:
// // Product of digits = 4 * 4 * 2 * 1 = 32
// // Sum of digits = 4 + 4 + 2 + 1 = 11
// // Result = 32 - 11 = 21

// // var subtractProductAndSum = function(n) {
// //     let product = 1,sum = 0;
// //     while(n > 0){
// //         let lastDigit = n % 10 ;
// //         sum += lastDigit;
// //         product *= lastDigit;
// //         n = Math.floor(n/10);
// //     };
// //     return product - sum ;

// // };
// // let n = 234;
// // console.log("subtractProductAndSum:",subtractProductAndSum(n));

// // Given a binary array nums, return the maximum number of consecutive 1's in the array.

// // Example 1:

// // Input: nums = [1,1,0,1,1,1]
// // Output: 3
// // Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
// // Example 2:

// // Input: nums = [1,0,1,1,0,1]
// // Output: 2

// // function findMaxConsecutiveOnes(nums){
// //     let maxCount = 0;
// //     let currentCount = 0 ;
// //     for(let i =0; i<nums.length; i++){
// //         if(nums[i] === 1){
// //             currentCount++;
// //             maxCount = Math.max(maxCount , currentCount);
// //         }else{
// //             currentCount = 0;
// //         }
// //     }
// //     return maxCount;
// // };
// // let nums = [1,0,2,1,1,1,1];
// // console.log("The Max Consecutive ones:",findMaxConsecutiveOnes(nums));

// // Given an integer num, return the number of steps to reduce it to zero.

// // In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.
// // Example 1:

// // Input: num = 14
// // Output: 6
// // Explanation:
// // Step 1) 14 is even; divide by 2 and obtain 7.
// // Step 2) 7 is odd; subtract 1 and obtain 6.
// // Step 3) 6 is even; divide by 2 and obtain 3.
// // Step 4) 3 is odd; subtract 1 and obtain 2.
// // Step 5) 2 is even; divide by 2 and obtain 1.
// // Step 6) 1 is odd; subtract 1 and obtain 0.

// // function numberOfSteps(nums){
// //     let step = 0;
// //     while(nums > 0){
// //         if(nums % 2 === 0){
// //             step++;
// //             nums = nums /2
// //         }else if( nums %2 !==0){
// //             step++;
// //             nums = nums-1
// //         }
// //     }
// //     return step;

// // }
// // let nums = 123
// // console.log("The Number of Steps:",numberOfSteps(nums))

// // Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

// // Example 1:

// // Input: low = 3, high = 7
// // Output: 3
// // Explanation: The odd numbers between 3 and 7 are [3,5,7].
// // Example 2:

// // Input: low = 8, high = 10
// // Output: 1
// // Explanation: The odd numbers between 8 and 10 are [9].

// // var countOdds = function(low, high) {
// //     // let count = 0;
// //     // for( let i = low; i <=high; i++){
// //     //     if(i % 2 !== 0){
// //     //         count = count + 1;
// //     //     }
// //     // }
// //     // return count;
// //     return Math.floor((high + 1) / 2) - Math.floor(low / 2);
// // };
// // let low = 3 ,high = 7
// // console.log("The number of Odds:",countOdds(low , high))

// // Given an array of positive integers arr, return the sum of all possible odd-length subarrays of arr.

// // A subarray is a contiguous subsequence of the array.

// // Example 1:

// // Input: arr = [1,4,2,5,3]
// // Output: 58
// // Explanation: The odd-length subarrays of arr and their sums are:
// // [1] = 1
// // [4] = 4
// // [2] = 2
// // [5] = 5
// // [3] = 3
// // [1,4,2] = 7
// // [4,2,5] = 11
// // [2,5,3] = 10
// // [1,4,2,5,3] = 15
// // If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58

// // var sumOddLengthSubarrays = function(arr) {
// //     let totalSum = 0;
// //     let n = arr.length;

// //     for (let i = 0; i < n; i++) {
// //         let totalSubarrays = (i + 1) * (n - i);
// //         let oddCount = Math.floor((totalSubarrays + 1) / 2);
// //         totalSum += arr[i] * oddCount;
// //     }

// //     return totalSum;
// // };
// // let arr = [1,4,2,5,3]
// // console.log("sumOddLengthSubarrays :",sumOddLengthSubarrays(arr))

// // You are given an integer array nums and an integer k.

// // In one operation, you can choose any index i where 0 <= i < nums.length and change nums[i] to nums[i] + x where x is an integer from the range [-k, k]. You can apply this operation at most once for each index i.

// // The score of nums is the difference between the maximum and minimum elements in nums.

// // Return the minimum score of nums after applying the mentioned operation at most once for each index in it.

// // Example 1:

// // Input: nums = [1], k = 0
// // Output: 0
// // Explanation: The score is max(nums) - min(nums) = 1 - 1 = 0.

// // var smallestRangeI = function(nums, k) {
// //     let minVal = Math.min(...nums);
// //     let maxVal = Math.max(...nums);

// //     return Math.max(0, maxVal - minVal - 2 * k);
// // };
// // let nums = [1], k = 0 ;
// // console.log(smallestRangeI(nums , k));

// // Given a positive integer num, return the number of positive integers less than or equal to num whose digit sums are even.

// // The digit sum of a positive integer is the sum of all its digits.

// // Example 1:

// // Input: num = 4
// // Output: 2
// // Explanation:
// // The only integers less than or equal to 4 whose digit sums are even are 2 and 4.
// // Example 2:

// // Input: num = 30
// // Output: 14
// // Explanation:
// // The 14 integers less than or equal to 30 whose digit sums are even are
// // 2, 4, 6, 8, 11, 13, 15, 17, 19, 20, 22, 24, 26, and 28.

// // function countEven(nums){
// //     let count = 0;
// //     // create a loop for the traaversal 2 to nums
// //     for(let i = 2; i<=nums; i++){
// //         let digitSum = 0 ;
// //         // store i in the temp varaibles because we dont cahnges the original values of i
// //         let temp = i ;
// //         while(temp > 0){
// //             let lastDigit = temp % 10 ;
// //             digitSum = digitSum + lastDigit ;
// //             temp = Math.floor(temp / 10);
// //         }
// //         // now we check the digitSum are divisble by 2 , then increase the count
// //         if(digitSum % 2 === 0){
// //             count++;
// //         }

// //     }
// //     // return count
// //     return count;
// // }
// // let nums = 4;
// // console.log("CountEven:",countEven(nums))

// // You are climbing a staircase. It takes n steps to reach the top.

// // Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// // Example 1:

// // Input: n = 2
// // Output: 2
// // Explanation: There are two ways to climb to the top.
// // 1. 1 step + 1 step
// // 2. 2 steps
// // Example 2:

// // Input: n = 3
// // Output: 3
// // Explanation: There are three ways to climb to the top.
// // 1. 1 step + 1 step + 1 step
// // 2. 1 step + 2 steps
// // 3. 2 steps + 1 step

// // function climbStairs(n){
// //     // base case
// //     if(n <=2) return n;

// //     // lete take two pointer
// //     let slow = 1;
// //     let fast = 2;

// //     // loop start from three
// //     for(let i = 3 ; i<=n; i++){
// //         let current = fast + slow;
// //         slow = fast;
// //         fast = current;
// //     }
// //     return fast;
// // }
// // let n = 8;
// // console.log("The Climbs Stairs:",climbStairs(n));

// // Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.

// // The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

// // Example 1:

// // Input: nums = [2,5,6,9,10]
// // Output: 2
// // Explanation:
// // The smallest number in nums is 2.
// // The largest number in nums is 10.
// // The greatest common divisor of 2 and 10 is 2.

// // function findGCD(nums){
// // // firstAppraoch
// // let maxValue = -Infinity , minValue = Infinity ;
// // // traverse Loops
// // for(let num of nums){
// //     // checking for the maxValue
// //     if(num > maxValue){
// //         maxValue = num
// //     }
// //     // checking for the minValue
// //     if(num < minValue){
// //         minValue = num;
// //     }
// // }
// // let a = maxValue , b =minValue ;
// // while(b!==0){
// //     [a , b] = [b , a%b]
// // }
// // return a;

// // 2ndAppraoch
// //     const max = Math.max(...nums);
// //     const min = Math.min(...nums);
// //     let a = max , b = min ;
// //     while(b !== 0){
// //         [a , b] = [b , a%b] ;
// //     }
// //     return a;
// // }
// // let nums = [2,5,6,9,10];
// // console.log("The GCD of the given Number:",findGCD(nums));

// // Given the binary representation of an integer as a string s, return the number of steps to reduce it to 1 under the following rules:

// // If the current number is even, you have to divide it by 2.

// // If the current number is odd, you have to add 1 to it.

// // It is guaranteed that you can always reach one for all test cases.

// // Example 1:

// // Input: s = "1101"
// // Output: 6
// // Explanation: "1101" corressponds to number 13 in their decimal representation.
// // Step 1) 13 is odd, add 1 and obtain 14.
// // Step 2) 14 is even, divide by 2 and obtain 7.
// // Step 3) 7 is odd, add 1 and obtain 8.
// // Step 4) 8 is even, divide by 2 and obtain 4.
// // Step 5) 4 is even, divide by 2 and obtain 2.
// // Step 6) 2 is even, divide by 2 and obtain 1.

// // function findNumStep(s){
// //     let step =0;
// //     let carry =0;
// //     for (let i = s.length - 1; i > 0; i--) {
// //         if ((Number(s[i]) + carry) % 2 === 0) {
// //             step += 1; // even → divide
// //         } else {
// //             step += 2; // odd → add + divide
// //             carry = 1;
// //         }
// //     }
// //     return step + carry;
// // }
// // let s ="1101";
// // console.log("The Number of Steps to Reduce 1:",findNumStep(s));

// // 2119. A Number After a Double Reversal
// // Solved
// // Easy
// // Topics
// // premium lock icon
// // Companies
// // Hint
// // Reversing an integer means to reverse all its digits.

// // For example, reversing 2021 gives 1202. Reversing 12300 gives 321 as the leading zeros are not retained.
// // Given an integer num, reverse num to get reversed1, then reverse reversed1 to get reversed2. Return true if reversed2 equals num. Otherwise return false.

// // Example 1:

// // Input: num = 526
// // Output: true
// // Explanation: Reverse num to get 625, then reverse 625 to get 526, which equals num.
// // Example 2:

// // Input: num = 1800
// // Output: false
// // Explanation: Reverse num to get 81, then reverse 81 to get 18, which does not equal num.
// // Example 3:

// // Input: num = 0
// // Output: true
// // Explanation: Reverse num to get 0, then reverse 0 to get 0, which equals num.

// // var isSameAfterReversals = function(num) {
// //     let sum =0;
// //     let newTemp = num;
// //     while(newTemp > 0){
// //         sum = sum*10 + newTemp % 10 ;
// //         newTemp = Math.floor(newTemp/10)
// //     }
// //     let newSum = 0;
// //     let temp = sum ;
// //     while(temp > 0){
// //         newSum = newSum* 10 + temp % 10 ;
// //         temp = Math.floor(temp / 10);
// //     }
// //     if(num === newSum){
// //         return true;
// //     }else{
// //         return false;
// //     }
// // };
// // let num = 526;
// // console.log("The Double Reverse Num:",isSameAfterReversals(num))

// // You are given two non-negative integers num1 and num2.

// // In one operation, if num1 >= num2, you must subtract num2 from num1, otherwise subtract num1 from num2.

// // For example, if num1 = 5 and num2 = 4, subtract num2 from num1, thus obtaining num1 = 1 and num2 = 4. However, if num1 = 4 and num2 = 5, after one operation, num1 = 4 and num2 = 1.
// // Return the number of operations required to make either num1 = 0 or num2 = 0.

// // Example 1:

// // Input: num1 = 2, num2 = 3
// // Output: 3
// // Explanation:
// // - Operation 1: num1 = 2, num2 = 3. Since num1 < num2, we subtract num1 from num2 and get num1 = 2, num2 = 3 - 2 = 1.
// // - Operation 2: num1 = 2, num2 = 1. Since num1 > num2, we subtract num2 from num1.
// // - Operation 3: num1 = 1, num2 = 1. Since num1 == num2, we subtract num2 from num1.
// // Now num1 = 0 and num2 = 1. Since num1 == 0, we do not need to perform any further operations.
// // So the total number of operations required is 3.

// // var countOperations = function(num1, num2) {
// //     let operations = 0;
// //     let temp1 = num1,temp2 =num2;
// //     while(temp1 !== 0 && temp2 !== 0){
// //         if(temp1 > temp2){
// //             temp1 = temp1 - temp2 ;
// //             operations++;
// //         }else{
// //             temp2 = temp2 - temp1;
// //             operations++;
// //         }
// //     }
// //     return operations;
// // };
// // // let num1 = 5 , num2 = 4;
// // let num1 = 2, num2 = 3 ;
// // console.log("The Count Operartions to Reduce Zero:",countOperations(num1 , num2));

// // Given a positive integer n, return the smallest positive integer that is a multiple of both 2 and n.

// // Example 1:

// // Input: n = 5
// // Output: 10
// // Explanation: The smallest multiple of both 5 and 2 is 10.
// // Example 2:

// // Input: n = 6
// // Output: 6
// // Explanation: The smallest multiple of both 6 and 2 is 6. Note that a number is a multiple of itself.
// // function smallestEvenMultiple(num){
// //     // base case
// //     if(num % 2 === 0) return num;
// //     return 2 * num;
// // }
// // let num = 5;
// // console.log("The Smallest Even Multiple:",smallestEvenMultiple(num))

// // var commonFactors = function(a, b) {
// //     let count =0;
// //     let limit =Math.min(a ,b);
// //     for (let i = 1; i <= limit; i++) {
// //         if (a % i === 0 && b % i === 0) {
// //             count++;
// //         }
// //     }
// //     return count;
// // };
// // let a = 12 , b = 6;
// // console.log(commonFactors(a , b));

// // You are given positive integers n and m.

// // Define two integers as follows:

// // num1: The sum of all integers in the range [1, n] (both inclusive) that are not divisible by m.
// // num2: The sum of all integers in the range [1, n] (both inclusive) that are divisible by m.
// // Return the integer num1 - num2.

// // Example 1:

// // Input: n = 10, m = 3
// // Output: 19
// // Explanation: In the given example:
// // - Integers in the range [1, 10] that are not divisible by 3 are [1,2,4,5,7,8,10], num1 is the sum of those integers = 37.
// // - Integers in the range [1, 10] that are divisible by 3 are [3,6,9], num2 is the sum of those integers = 18.
// // We return 37 - 18 = 19 as the answer.

// // var differenceOfSums = function(n, m) {
// //     let sumDiv = 0;
// //     let sumNotDiv =0;
// //     for(let i =1 ; i<=n;i++){
// //         // check num is divisble by 3 then sum of all number
// //         if(i % m ===0){
// //             sumDiv += i;
// //         }else{
// //             sumNotDiv += i;
// //         }
// //     }
// //     return sumNotDiv - sumDiv;
// // };
// // let n = 10 , m =3;
// // console.log("The Difference of sumNotDiv - sumDiv: ",differenceOfSums(n , m));

// // You are given an integer array nums.

// // You replace each element in nums with the sum of its digits.

// // Return the minimum element in nums after all replacements.

// // Example 1:

// // Input: nums = [10,12,13,14]

// // Output: 1

// // Explanation:

// // nums becomes [1, 3, 4, 5] after all replacements, with minimum element 1.

// // Example 2:

// // Input: nums = [1,2,3,4]

// // Output: 1

// // Explanation:

// // nums becomes [1, 2, 3, 4] after all replacements, with minimum element 1.

// // Example 3:

// // Input: nums = [999,19,199]

// // Output: 10

// // Explanation:

// // nums becomes [27, 10, 19] after all replacements, with minimum element 10.

// // firstAppraoch
// // function  minElement(num){
// //     for(let i = 0; i<num.length; i++){
// //         let sum =0;
// //         let temp = num[i];

// //         while(temp > 0){
// //             sum += temp % 10;
// //             temp = Math.floor(temp/10);
// //         }
// //         num[i] = sum;

// //     }
// //     let min =Math.min(...num);
// //     return min;
// // }

// // 2nd Approach
// // function minElement(nums) {
// //   let min = Infinity;
// //   for (let num of nums) {
// //     let sum = 0;
// //     let temp = num;

// //     while (temp > 0) {
// //       sum += temp % 10;
// //       temp = Math.floor(temp / 10);
// //     }
// //     min = Math.min(min, sum);
// //   }
// //   return min;
// // }
// // let nums = [999, 19, 199];
// // console.log("The MinElement:", minElement(nums));

// // var isHappy = function(n) {
// //     let seen = new Set();

// //     while (n !== 1 && !seen.has(n)) {
// //         seen.add(n);

// //         let sum = 0;
// //         let temp = n;

// //         while (temp > 0) {
// //             let digit = temp % 10;
// //             sum += digit * digit;
// //             temp = Math.floor(temp / 10);
// //         }

// //         n = sum;  // move to next number
// //     }

// //     return n === 1;
// // };
// // let n = 19 ;
// // console.log("is This Number Happy or not:",isHappy(n));

// // Given a 32-bit integer num, return a string representing its hexadecimal representation. For negative integers, two’s complement method is used.

// // All the letters in the answer string should be lowercase characters, and there should not be any leading zeros in the answer except for the zero itself.

// // Note: You are not allowed to use any built-in library method to directly solve this problem.

// // Example 1:

// // Input: num = 26
// // Output: "1a"
// // Example 2:

// // Input: num = -1
// // Output: "ffffffff"

// // function numberToHex(num){
// //     // base case
// //     if(num === "0") return "0" ;
// //     let result = "";
// //     let hexChar = "0123456789abcdef";
// //     // now shift num to unsinged 32 bits;
// //     num = num >>> 0 ;

// //     while(num > 0){
// //         let digit = num & 15 ;
// //         result = hexChar[digit] + result ;
// //         num = num >>> 4 ;
// //     }
// //     return result;
// // }
// // let num = 26;
// // console.log("ToHexaDecimal num:",numberToHex(num));

// // convert number to binary
// // function numToBinary(num){
// //     // base case
// //     if(num === 0) return "0";
// //     let result = "";
// //     while(num > 0){
// //         let digit = num % 2;
// //         result = digit + result ;
// //         num = Math.floor(num/2);
// //     }
// //     return result;
// // }
// // let num = 50 ;
// // console.log("The Number to Binary:",numToBinary(num));

// // function numToOctal(num){
// //     // base case
// //     if(num === 0) return "0";
// //     let result = "";
// //     while(num > 0){
// //         let digit = num % 8;
// //         result = digit + result ;
// //         num = Math.floor(num/8);
// //     }
// //     return result;
// // }
// // let num = 50 ;
// // console.log("The Number to Octal:",numToOctal(num));

// // convert binary to number
// // function binaryToNumber(binary){
// //     let result = 0;
// //     let n = binary.length;
// //     for(let i = 0 ; i<n; i++){
// //         let digit = Number(binary[i]);
// //         result += digit * Math.pow(2, n-i-1);

// //     }
// //     return result;

// // }
// // let binary ="1101";
// // console.log("The Binary To Number:",binaryToNumber(binary))

// // Convert Octal to Number

// // function OctalToNumber(binary){
// //     let result = 0;
// //     let n = binary.length;
// //     for(let i = 0 ; i<n; i++){
// //         let digit = Number(binary[i]);
// //         result += digit * Math.pow(8, n-i-1);

// //     }
// //     return result;

// // }
// // let octal="65";
// // console.log("The Binary To Number:",OctalToNumber(octal))

// // Convert HexaDecimal to Number

// // function OctalToNumber(hexadecimal){
// //     let result = 0;
// //     hexadecimal = hexadecimal.toLowerCase();

// //     for(char of hexadecimal){
// //         let value;
// //         if(char >="0" && char <="9"){
// //             value = char.charAtCode(0) - "0".charCodeAt(0);
// //         }else{
// //             value = char.charAtCode(0) - 'a'.charCodeAt(0) + 10;
// //         }
// //         result = result*16 + value;
// //     }
// //     return result;

// // }
// // let hexadecimal="ff";
// // console.log("The Binary To Number:",OctalToNumber(hexadecimal))

// // An integer divisible by the sum of its digits is said to be a Harshad number. You are given an integer x. Return the sum of the digits of x if x is a Harshad number, otherwise, return -1.
// // Example 1:

// // Input: x = 18

// // Output: 9

// // Explanation:

// // The sum of digits of x is 9. 18 is divisible by 9. So 18 is a Harshad number and the answer is 9.

// // Example 2:

// // Input: x = 23

// // Output: -1

// // Explanation:

// // The sum of digits of x is 5. 23 is not divisible by 5. So 23 is not a Harshad number and the answer is -1.

// // function sumOfTheDigitsOfHarshadNumber(x) {
// //   let sumDigit = 0 ;
// //     let temp = x ;
// //     while(temp > 0){
// //         let lastDigit = temp % 10 ;
// //         sumDigit = sumDigit + lastDigit ;
// //         temp = Math.floor(temp/10);
// //     }
// //     // now check sum is divisible by x;
// //     return x % sumDigit === 0 ? sumDigit : -1;
// // }
// // let x = 23;
// // console.log("sumOfTheDigitsOfHarshadNumber:", sumOfTheDigitsOfHarshadNumber(x));

// // var uniqueOccurrences = function(arr) {
// //     let occ = {} ;
// //     for( let newArr of arr){
// //         occ[newArr] = (occ[newArr] | 0) + 1;
// //     }
// //    let value = Object.values(occ);
// //    let set = new Set(value);
// //    return value.length === set.size;
// // };
// // let arr = [1,2,2,1,1,3];
// // console.log("The Number of Occurrences:",uniqueOccurrences(arr));

// // You are given a positive integer n.

// // Return the maximum product of any two digits in n.

// // Note: You may use the same digit twice if it appears more than once in n.

// // Example 1:

// // Input: n = 31

// // Output: 3

// // Explanation:

// // The digits of n are [3, 1].
// // The possible products of any two digits are: 3 * 1 = 3.
// // The maximum product is 3.

// // function maximumProduct(n) {
// //   let arr = [];
// //   let temp = n;
// //   while (temp> 0) {
// //     let lastDigit = temp % 10;
// //     arr.unshift(lastDigit);
// //     temp = Math.floor(temp / 10);
// //   }
// //   let maxProduct = 1;
// //   for (let i = 0; i < arr.length; i++) {
// //     maxProduct *= arr[i];
// //   }
// //   return maxProduct;
// // }
// // let n = 31;
// // console.log("The Maximum Product of the Digit:", maximumProduct(n));

// // You are given a positive integer n. Determine whether n is divisible by the sum of the following two values:

// // The digit sum of n (the sum of its digits).

// // The digit product of n (the product of its digits).

// // Return true if n is divisible by this sum; otherwise, return false.

// // Example 1:

// // Input: n = 99

// // Output: true

// // Explanation:

// // Since 99 is divisible by the sum (9 + 9 = 18) plus product (9 * 9 = 81) of its digits (total 99), the output is true.

// // Example 2:

// // Input: n = 23

// // Output: false

// // Explanation:

// // Since 23 is not divisible by the sum (2 + 3 = 5) plus product (2 * 3 = 6) of its digits (total 11), the output is false.

// // var checkDivisibility = function(n) {
// //    let sum = 0 ;
// //    let prod = 1;
// //    let temp = n;
// //    while(temp > 0){
// //     let lastDigit = temp%10;
// //     sum = sum + lastDigit;
// //     prod = prod * lastDigit ;
// //     temp = Math.floor(temp/10);
// //    }
// //     // check if sum + product is divible by n or not
// //     return n % (sum + prod) === 0 ? 1 : 0;
// // };
// // let n = 99;
// // console.log("checkDivisibility:",checkDivisibility(n));

// // Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

// // Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.
// // Example 1:
// // Input: num1 = "2", num2 = "3"
// // Output: "6"
// // Example 2:

// // Input: num1 = "123", num2 = "456"
// // Output: "56088"

// // function multiplyTwoString(num1,num2){
// //     return (BigInt(num1) * BigInt(num2)).toString();
// // };
// // let num1 ="4" ,num2 ="6";
// // console.log("The Multiply of Two String:",multiplyTwoString(num1,num2));

// // Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

// // The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.

// // Return the quotient after dividing dividend by divisor.

// // Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, if the quotient is strictly greater than 231 - 1, then return 231 - 1, and if the quotient is strictly less than -231, then return -231.

// // Example 1:

// // Input: dividend = 10, divisor = 3
// // Output: 3
// // Explanation: 10/3 = 3.33333.. which is truncated to 3.
// // Example 2:

// // Input: dividend = 7, divisor = -3
// // Output: -2
// // Explanation: 7/-3 = -2.33333.. which is truncated to -2.

// // var divide = function(dividend, divisor) {
// //     if(dividend === -2147483648 && divisor === -1){
// //         return 2147483647;
// //     }

// //     return Math.trunc(dividend / divisor);
// // };
// // // let dividend = -2147483648 , divisor = -1;
// // let dividend = 7, divisor = -3;
// // console.log("The Result:",divide(dividend , divisor));

// // Your task is to calculate ab mod 1337 where a is a positive integer and b is an extremely large positive integer given in the form of an array.

// // Example 1:

// // Input: a = 2, b = [3]
// // Output: 8
// // Example 2:

// // Input: a = 2, b = [1,0]
// // Output: 1024
// // Example 3:

// // Input: a = 1, b = [4,3,3,8,5,2]
// // Output: 1

// // function superPow(a,b){
// //    const mod = 1337;
// //     function modPow(x,n){
// //         let res = 1;
// //         x %=mod;

// //         while (n > 0) {
// //             if (n & 1) res = (res * x) % mod;
// //             x = (x * x) % mod;
// //             n >>= 1;
// //         }
// //         return res;
// //     }
// //     let result = 1;
// //         for(let digit of b){
// //             result = ((modPow(result,10)*modPow(a,digit)))%mod
// //         }
// //         return result;
// // }
// // // let a = 2,b =[3];
// // let a = 1 , b =[4,5,6,7,8];
// // console.log("The SuperPow of:",superPow(a,b));

// // For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

// // Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

// // Example 1:

// // Input: str1 = "ABCABC", str2 = "ABC"

// // Output: "ABC"

// // Example 2:

// // Input: str1 = "ABABAB", str2 = "ABAB"

// // Output: "AB"

// // Example 3:

// // Input: str1 = "LEET", str2 = "CODE"

// // Output: ""

// // function gcdToString(str1,str2){
// //     // base case
// //     if(str1 + str2 !== str1 + str2) return "";

// //     // create a function for find the gcd
// //     function gcd(a,b){
// //         while(b !==0){
// //         [a,b] = [b, a%b];
// //     }
// //     return a;
// //     }
// //     let len = gcd(str1.length ,str2.length);
// //     return str1.slice(0,len);
// // }
// // let str1 = "LEET", str2 = "CODE";
// // console.log("The GCD of Two String:",gcdToString(str1 , str2));

// // Given an integer n (in base 10) and a base k, return the sum of the digits of n after converting n from base 10 to base k.

// // After converting, each digit should be interpreted as a base 10 number, and the sum should be returned in base 10.

// // Example 1:

// // Input: n = 34, k = 6
// // Output: 9
// // Explanation: 34 (base 10) expressed in base 6 is 54. 5 + 4 = 9.
// // Example 2:

// // Input: n = 10, k = 10
// // Output: 1
// // Explanation: n is already in base 10. 1 + 0 = 1.

// // function sumBase(n ,k){
// //     let sum = 0;
// //     while(n > 0){
// //         sum += n % k ;
// //         n = Math.floor(n/k);
// //     }
// //     return sum;
// // };
// // let n = 95 , k = 8;
// // console.log("The Sum of Base:",sumBase(n , k));
// // let num = "521";

// // let newNum =(num.split("").join(','));
// // console.log((newNum));

// // Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// // Symbol       Value
// // I             1
// // V             5
// // X             10
// // L             50
// // C             100
// // D             500
// // M             1000
// // For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// // Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// // I can be placed before V (5) and X (10) to make 4 and 9.
// // X can be placed before L (50) and C (100) to make 40 and 90.
// // C can be placed before D (500) and M (1000) to make 400 and 900.
// // Given a roman numeral, convert it to an integer.

// // Example 1:

// // Input: s = "III"
// // Output: 3
// // Explanation: III = 3.
// // Example 2:

// // Input: s = "LVIII"
// // Output: 58
// // Explanation: L = 50, V= 5, III = 3.
// // Example 3:

// // Input: s = "MCMXCIV"
// // Output: 1994
// // Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// // var romanToInt = function(s) {
// //     const map = {
// //         I: 1,
// //         V: 5,
// //         X: 10,
// //         L: 50,
// //         C: 100,
// //         D: 500,
// //         M: 1000
// //     };

// //     let result = 0;

// //     for (let i = 0; i < s.length; i++) {
// //         let current = map[s[i]];
// //         let next = map[s[i + 1]];

// //         if (current < next) {
// //             result -= current;
// //         } else {
// //             result += current;
// //         }
// //     }

// //     return result;
// // };
// // let s ="MCMXCIV";
// // console.log("Roman To Integer:",romanToInt(s));

// // Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// // Example 1:

// // Input: nums = [3,0,1]

// // Output: 2

// // Explanation:

// // n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

// // Example 2:

// // Input: nums = [0,1]

// // Output: 2

// // var missingNumber = function(nums) {
// //     let n = nums.length;
// //     let expectedSum = (n * (n + 1)) / 2;

// //     let actualSum = 0;
// //     for (let num of nums) {
// //         actualSum += num;
// //     }

// //     return expectedSum - actualSum;
// // };
// // let nums = [0,1];
// // console.log("Missing Number:",missingNumber(nums));

// // The array-form of an integer num is an array representing its digits in left to right order.

// // For example, for num = 1321, the array form is [1,3,2,1].
// // Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k.

// // Example 1:

// // Input: num = [1,2,0,0], k = 34
// // Output: [1,2,3,4]
// // Explanation: 1200 + 34 = 1234

// // function addToArrayForm(num , k){
// //     let arr = [];
// //     let str = "";
// //     for(let i = 0; i<num.length; i++){
// //         str += num[i]
// //     }
// //     let ans = Number(str)  + k;
// //     // Conver number into array;
// //     let temp = ans;
// //     while(temp > 0){
// //         let lastDigit = temp %10;
// //         arr.push(lastDigit);
// //         temp = Math.floor(temp/10);
// //     }
// //     // reverse the array
// //     return arr.reverse();

// // }

// // 2nd Appraoch:
// // var addToArrayForm = function(num, k) {
// //     for (let i = num.length - 1; i >= 0; i--) {
// //         k += num[i];
// //         num[i] = k % 10;
// //         k = Math.floor(k / 10);
// //     }

// //     while (k > 0) {
// //         num.unshift(k % 10);
// //         k = Math.floor(k / 10);
// //     }

// //     return num;
// // };
// // let num = [1,2,0,0] ,  k = 34;
// // console.log("The Add To Array Form:",addToArrayForm(num , k));

// // You are given two positive integers n and k. A factor of an integer n is defined as an integer i where n % i == 0.

// // Consider a list of all factors of n sorted in ascending order, return the kth factor in this list or return -1 if n has less than k factors.

// // Example 1:

// // Input: n = 12, k = 3
// // Output: 3
// // Explanation: Factors list is [1, 2, 3, 4, 6, 12], the 3rd factor is 3.

// // var kthFactor = function(n, k) {
// //     let list = [];
// //     for(let i = 1; i<=n; i++){
// //         if((n % i === 0)){
// //             list.push(i);
// //         }
// //     }
// //     return list[k-1] || -1;
// // };
// // let n = 12, k = 3;
// // console.log("Kth Factor:",kthFactor(n , k));

// // Given an integer array nums, return the sum of divisors of the integers in that array that have exactly four divisors. If there is no such integer in the array, return 0.

// // Example 1:

// // Input: nums = [21,4,7]
// // Output: 32
// // Explanation:
// // 21 has 4 divisors: 1, 3, 7, 21
// // 4 has 3 divisors: 1, 2, 4
// // 7 has 2 divisors: 1, 7
// // The answer is the sum of divisors of 21 only.

// // brute force Approach
// // var sumFourDivisors = function(nums) {
// //     let totalSum =0;
// //     for(let i=0; i<nums.length; i++){
// //         let sum =0;
// //         let count =0;
// //         for(let j =1; j<=nums[i]; j++){
// //             if(nums[i]%j === 0){
// //                 sum +=j;
// //                 count++;
// //             }
// //             if(count > 4) break;
// //         }
// //         if(count === 4){
// //         totalSum +=sum;
// //     }
// //     }

// //     return totalSum;
// // };

// // Optimal Approach
// // var sumFourDivisors = function(nums) {
// //     let totalSum =0;
// //     for(let num of nums){
// //         let sum =0;
// //         let count =0;
// //         for(let j =1; j*j<=num; j++){
// //             if(num%j === 0){
// //                 let pair = num/j;
// //                 if(j === pair){
// //                     // Perfect case
// //                     count += 1;
// //                     sum += j;
// //                 }
// //                 // Perfect Divisor
// //                 else{
// //                     count +=2;
// //                     sum += j + pair;
// //                 }

// //             }
// //             if(count > 4) break;
// //         }
// //         if(count === 4){
// //         totalSum +=sum;
// //     }
// //     }

// //     return totalSum;
// // };
// // let nums = [21,4,7];
// // console.log("SumFourDivisor:",sumFourDivisors(nums));

// // You are given an integer array nums sorted in non-decreasing order.

// // Build and return an integer array result with the same length as nums such that result[i] is equal to the summation of absolute differences between nums[i] and all the other elements in the array.

// // In other words, result[i] is equal to sum(|nums[i]-nums[j]|) where 0 <= j < nums.length and j != i (0-indexed).

// // Example 1:

// // Input: nums = [2,3,5]
// // Output: [4,3,5]
// // Explanation: Assuming the arrays are 0-indexed, then
// // result[0] = |2-2| + |2-3| + |2-5| = 0 + 1 + 3 = 4,
// // result[1] = |3-2| + |3-3| + |3-5| = 1 + 0 + 2 = 3,
// // result[2] = |5-2| + |5-3| + |5-5| = 3 + 2 + 0 = 5.

// // function getSumAbsoluteDifferences(nums){
// //     let result =[];
// //     for(let i = 0; i<nums.length; i++){
// //         let sum =0;
// //         for(let j =0; j<nums.length; j++){
// //             sum = sum + Math.abs(nums[i] - nums[j]);
// //         }
// //         result.push(sum);
// //     }
// //     return result;

// // };
// // let nums = [2,3,5];
// // console.log("getSumAbsoluteDifferences:",getSumAbsoluteDifferences(nums))

// // You are given an integer array nums and an integer k.

// // For each index i where 0 <= i < nums.length, change nums[i] to be either nums[i] + k or nums[i] - k.

// // The score of nums is the difference between the maximum and minimum elements in nums.

// // Return the minimum score of nums after changing the values at each index.

// // Example 1:

// // Input: nums = [1], k = 0
// // Output: 0
// // Explanation: The score is max(nums) - min(nums) = 1 - 1 = 0.
// // Example 2:

// // Input: nums = [0,10], k = 2
// // Output: 6
// // Explanation: Change nums to be [2, 8]. The score is max(nums) - min(nums) = 8 - 2 = 6.
// // Example 3:

// // Input: nums = [1,3,6], k = 3
// // Output: 3
// // Explanation: Change nums to be [4, 6, 3]. The score is max(nums) - min(nums) = 6 - 3 = 3.

// // var smallestRangeII = function (nums, k) {
// //   let ans = nums[nums.length - 1] - k;
// //   console.log("ans:",ans);
// //   let newArr = [];
// //   for (let i = 0; i < nums.length - 1; i++) {
// //     let result = nums[i] + k;
// //     newArr.push(result);
// //   }
// //   newArr.push(ans);
// //   console.log("newArr:",newArr);

// //   let max = -Infinity , min = Infinity;
// //   for(let i =0 ; i<newArr.length; i++){
// //     if(newArr[i] > max){
// //         max = newArr[i];
// //     }else if (newArr[i] < min){
// //         min = newArr[i];
// //     }

// //   }
// //   let res = max - min;
// //   console.log("Max:",max,"Min:",min);
// //   return res;
// // };
// // nums = [0,10], k = 2;
// // console.log("SmallestRangeII:",smallestRangeII(nums , k));

// // Given an integer array nums of size n, return the minimum number of moves required to make all array elements equal.
// // In one move, you can increment n - 1 elements of the array by 1.

// // Example 1:

// // Input: nums = [1,2,3]
// // Output: 3
// // Explanation: Only three moves are needed (remember each move increments two elements):
// // [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
// // Example 2:

// // Input: nums = [1,1,1]
// // Output: 0

// // var minMoves = function(nums) {
// //     let min = Math.min(...nums);
// //     let moves =0;
// //     for(let num of nums){
// //         moves += (num - min)
// //     }
// //     return moves;

// // };
// // let nums = [1,2,3];
// // console.log("Minimum Moves:",minMoves(nums))

// // You are given two integers n and t. Return the smallest number greater than or equal to n such that the product of its digits is divisible by t.

// // Example 1:

// // Input: n = 10, t = 2

// // Output: 10

// // Explanation:

// // The digit product of 10 is 0, which is divisible by 2, making it the smallest number greater than or equal to 10 that satisfies the condition.

// // Example 2:

// // Input: n = 15, t = 3

// // Output: 16

// // Explanation:

// // The digit product of 16 is 6, which is divisible by 3, making it the smallest number greater than or equal to 15 that satisfies the condition.

// // var smallestNumber = function (n, t) {
// //   let prod = 1;
// //   function getProduct(n) {
// //     while (n > 0) {
// //       prod *= n % 10;
// //       n = Math.floor(n / 10);
// //     }
// //     return prod;
// //   }
// //   while (true) {
// //     if (getProduct(n) % t === 0) {
// //       return n;
// //     } else {
// //       n++;
// //     }
// //   }
// // };
// // let n = 10,
// //   t = 2;
// // console.log(smallestNumber(n, t));

// // You are given an integer array nums.

// // Return the smallest index i such that the sum of the digits of nums[i] is equal to i.

// // If no such index exists, return -1.

// // Example 1:

// // Input: nums = [1,3,2]

// // Output: 2

// // Explanation:

// // For nums[2] = 2, the sum of digits is 2, which is equal to index i = 2. Thus, the output is 2.
// // Example 2:

// // Input: nums = [1,10,11]

// // Output: 1

// // Explanation:

// // For nums[1] = 10, the sum of digits is 1 + 0 = 1, which is equal to index i = 1.
// // For nums[2] = 11, the sum of digits is 1 + 1 = 2, which is equal to index i = 2.
// // Since index 1 is the smallest, the output is 1.

// // function smallestIndex(nums){
// //     for(let i=0; i<nums.length; i++){
// //         let ans = nums[i];
// //         let sum = 0;
// //         while(ans > 0){
// //             sum += ans%10;
// //             ans = Math.floor(ans/10);
// //         }
// //         if(sum === i){
// //             return i;
// //         }
// //     }
// //     return -1;
// // };
// // let nums = [1,3,2];
// // console.log("SmallestIndex:",smallestIndex(nums));

// // Given an integer n, find the digit that occurs least frequently in its decimal representation. If multiple digits have the same frequency, choose the smallest digit.

// // Return the chosen digit as an integer.

// // The frequency of a digit x is the number of times it appears in the decimal representation of n.

// // Example 1:

// // Input: n = 1553322

// // Output: 1

// // Explanation:

// // The least frequent digit in n is 1, which appears only once. All other digits appear twice.

// // Example 2:

// // Input: n = 723344511

// // var getLeastFrequentDigit = function(n) {
// //    let freq = {};
// //    while(n >0){
// //     let digit = n%10;
// //     freq[digit] = (freq[digit] || 0) + 1;
// //     n = Math.floor(n/10);
// //    }
// //    let minValue = Infinity;
// //    let result = Infinity;
// //    for(let [key,value] of Object.entries(freq)){
// //     key = Number(key);
// //     if(value < minValue){
// //         minValue = value;
// //         result = key;
// //     }else if (value === minValue){
// //         result = Math.min(result ,key);
// //     }
// //    }
// //    return result;
// // };
// // let  n = 1553322;
// // console.log("getLeastFrequentDigit:",getLeastFrequentDigit(n));

// // Given a non-negative integer c, decide whether there're two integers a and b such that a2 + b2 = c.

// // Example 1:

// // Input: c = 5
// // Output: true
// // Explanation: 1 * 1 + 2 * 2 = 5
// // Example 2:

// // Input: c = 3
// // Output: false

// // function sumOfSquare(c){
// //     let left = 0;
// //     let right = Math.floor(Math.sqrt(c));
// //     while(left <= right){
// //         let sum = left*left + right*right;
// //         if(sum === c){
// //             return true;
// //         }else if(sum < c){
// //             left++;
// //         }else{
// //             right--;
// //         }
// //     }
// //     return false;
// // }
// // let c = 7;
// // console.log("The Sum Of Sqaure:",sumOfSquare(c));

// // You are given a positive integer n.

// // Return the integer obtained by removing all zeros from the decimal representation of n.

// // Example 1:

// // Input: n = 1020030

// // Output: 123

// // Explanation:

// // After removing all zeros from 1020030, we get 123.

// // var removeZeros = function(n) {
// //     let arr = [];
// //     while(n > 0){
// //         if(n % 10 !== 0){
// //             arr.push(n%10);
// //         }
// //         n = Math.floor(n/10);
// //     };
// //     console.log("Array:",arr);
// //     let ans = 0;
// //     for(let i = arr.length-1; i>=0; i--){
// //         console.log("arr[i]:",)
// //         ans = ans*10 + arr[i];
// //     }
// //     return ans;
// // };
// // let n = 1020030;
// // console.log("After the Removing Zero:",removeZeros(n))

// // You are given an integer array nums.

// // In one move, you may increase the value of any single element nums[i] by 1.

// // Return the minimum total number of moves required so that all elements in nums become equal.

// // Example 1:

// // Input: nums = [2,1,3]

// // Output: 3

// // Explanation:

// // To make all elements equal:

// // Increase nums[0] = 2 by 1 to make it 3.
// // Increase nums[1] = 1 by 1 to make it 2.
// // Increase nums[1] = 2 by 1 to make it 3.

// // var minMoves = function(nums) {
// //     let max =Math.max(...nums);
// //     let count = 0;
// //     for(let num of nums){
// //         count += (max - num);
// //     }
// //     return count;

// // };
// // let nums = [2,1,3];
// // console.log("minMoves:",minMoves(nums))

// // Given an integer n, count the total number of digit 1 appearing in all non-negative integers less than or equal to n.

// // Example 1:

// // Input: n = 13
// // Output: 6
// // Example 2:

// // Input: n = 0
// // Output: 0

// // function countDigitOnes(n){
// //     let count = 0;
// //     for(let place = 1; place <= n; place *= 10){
// //         let high = Math.floor(n/(place*10));
// //         let current = Math.floor((n/place) % 10);
// //         let low = n % 10;

// //         // current ===0
// //         if(current === 0){
// //             count += high * place;
// //         }else if (current === 1){
// //             count += (high * place) + (low + 1);
// //         }else{
// //             count += (high + 1) * place;
// //         }
// //     }
// //     return count;
// // }
// // let n = 13;
// // console.log("CountDigitOnes:",countDigitOnes(n));

// // function decimalTOBinary(n){
// //     let ans = "";
// //     while(n){
// //         ans = n % 2 + ans;
// //         n = Math.floor(n/2);
// //     }
// //     return ans;
// // };
// // let n = 13;
// // console.log("DecimalToBinary:",decimalTOBinary(n));

// // function decimalTOBinary(n){
// //     let ans = "";
// //     while(n > 0){
// //         ans = (n & 1) + ans;
// //         n = n >>> 1;
// //     }
// //     return ans || "0";
// // };
// // let n = 13;
// // console.log("DecimalToBinary:",decimalTOBinary(n));

// // Given two integers left and right, return the count of numbers in the inclusive range [left, right] having a prime number of set bits in their binary representation.

// // Recall that the number of set bits an integer has is the number of 1's present when written in binary.

// // For example, 21 written in binary is 10101, which has 3 set bits.

// // Example 1:

// // Input: left = 6, right = 10
// // Output: 4
// // Explanation:
// // 6  -> 110 (2 set bits, 2 is prime)
// // 7  -> 111 (3 set bits, 3 is prime)
// // 8  -> 1000 (1 set bit, 1 is not prime)
// // 9  -> 1001 (2 set bits, 2 is prime)
// // 10 -> 1010 (2 set bits, 2 is prime)
// // 4 numbers have a prime number of set bits.

// // var countPrimeSetBits = function(left, right){
// //     let result = 0 ;
// //     for(let num = left; num <= right; num++){
// //         let bits = countSetBits(num);

// //         // if countSetBits is prime then increment the result++;
// //         if(isPrime(bits)){
// //             result++;
// //         }
// //     }
// //     return result;

// // }

// // // functions for the count countSetBits
// // function countSetBits(n){
// //     let count = 0;
// //     while(n > 0){
// //         n = n & (n - 1); // its count number of ones bits
// //         count++;
// //     }
// //     return count;
// // }
// // // functions for check countSetBits(n) is prime or not
// // function isPrime(n){
// //     if(n < 2) return false;
// //     for(let i=2; i*i<=n; i++){
// //         if(n % i === 0) return false;
// //     }
// //     return true;
// // }

// // let left = 6, right = 10;
// // console.log("countPrimeSetBits:",countPrimeSetBits(left , right));

// // You are given a positive number n.

// // Return the smallest number x greater than or equal to n, such that the binary representation of x contains only set bits

// // Example 1:

// // Input: n = 5

// // Output: 7

// // Explanation:

// // The binary representation of 7 is "111"

// // var smallestNumber = function(n) {
// //     let count =0;
// //     while(n>0){
// //         n = n & (n-1);
// //         count++;
// //     }
// //     return count;

// //     // find the samllest number >= n (where n have only ones setbits);

// // };

// // let n = 5;
// // console.log("CountSetBits:",smallestNumber(n));

// // Given an integer array nums of size n, return the minimum number of moves required to make all array elements equal.

// // In one move, you can increment or decrement an element of the array by 1.

// // Test cases are designed so that the answer will fit in a 32-bit integer.

// // Example 1:

// // Input: nums = [1,2,3]
// // Output: 2
// // Explanation:
// // Only two moves are needed (remember each move increments or decrements one element):
// // [1,2,3]  =>  [2,2,3]  =>  [2,2,2]
// // Example 2:

// // Input: nums = [1,10,2,9]
// // Output: 16

// // function minMoves2(nums){
// //     // sort the elements
// //     // nums.sort((a,b)=>(a-b));
// //     // find the median
// //     let median = nums[Math.floor((nums.length)/2)];
// //     let moves = 0;
// //     for(let num of nums){
// //         moves += Math.abs(num - median);
// //     }
// //     return moves;
// // };
// // let nums = [1,2,3];
// // console.log("Minimum Moves to Equal All the Element:",minMoves2(nums));

// // You are given an integer array nums.

// // Return true if the frequency of any element of the array is prime, otherwise, return false.

// // The frequency of an element x is the number of times it occurs in the array.

// // A prime number is a natural number greater than 1 with only two factors, 1 and itself.

// // Example 1:

// // Input: nums = [1,2,3,4,5,4]

// // Output: true

// // Explanation:

// // 4 has a frequency of two, which is a prime number.

// // Example 2:

// // Input: nums = [1,2,3,4,5]

// // Output: false

// // Explanation:

// // All elements have a frequency of one.

// // Example 3:

// // Input: nums = [2,2,2,4,4]

// // Output: true

// // Explanation:

// // Both 2 and 4 have a prime frequency.

// // first Appraoch
// // function checkPrimeFrequency(nums){
// //     let freq = {};
// //     for(let num of nums){
// //         freq[num] = (freq[num] || 0) + 1;
// //     }
// //     for(let value of Object.entries(freq)){
// //         if(isPrime(value)){
// //             return true;
// //         }
// //     }
// //     return false;
// // }
// // // functions for check prime
// // function isPrime(n){
// //     if(n <= 1) return false;
// //     for(let i = 2; i*i <= n; i++){
// //         if(n % i === 0){
// //             return false;
// //         }
// //     }
// //     return true;
// // }
// // let  nums = [1,2,3,4,5,4];
// // console.log("checkPrimeFrequency:",checkPrimeFrequency(nums));

// // You are given an integer array nums.

// // Split nums into two arrays A and B using the following rule:

// // Elements at prime indices in nums must go into array A.
// // All other elements must go into array B.
// // Return the absolute difference between the sums of the two arrays: |sum(A) - sum(B)|.

// // Note: An empty array has a sum of 0.

// // Example 1:

// // Input: nums = [2,3,4]

// // Output: 1

// // Explanation:

// // The only prime index in the array is 2, so nums[2] = 4 is placed in array A.
// // The remaining elements, nums[0] = 2 and nums[1] = 3 are placed in array B.
// // sum(A) = 4, sum(B) = 2 + 3 = 5.
// // The absolute difference is |4 - 5| = 1.

// // var splitArray = function(nums) {
// //     let primeSum =0;
// //     let remSum = 0;
// //     for(let i =0; i<nums.length; i++){
// //         if(isPrimeIndex(i)){
// //             primeSum += nums[i];
// //         }else{
// //             remSum += nums[i];
// //         }
// //     }
// //     return Math.abs(primeSum - remSum);
// // };
// // function isPrimeIndex(n){
// //     if(n <= 1) return false;
// //     if(n === 2) return true;
// //     if(n % 2 === 0) return false;
// //     for(let i = 3; i*i <= n; i += 2){
// //         if(n % i === 0){
// //             return false;
// //         }
// //     }
// //     return true;
// // };
// // let nums = [-1,5,7,0];
// // console.log("splitArray:",splitArray(nums));

// // Define its mirror distance as: abs(n - reverse(n))​​​​​​​ where reverse(n) is the integer formed by reversing the digits of n.

// // Return an integer denoting the mirror distance of n​​​​​​​.

// // abs(x) denotes the absolute value of x.

// // Example 1:

// // Input: n = 25

// // Output: 27

// // Explanation:

// // reverse(25) = 52.
// // Thus, the answer is abs(25 - 52) = 27.

// // var mirrorDistance = function(n) {
// //    return Math.abs(n - reverse(n));
// // };
// // function reverse(n){
// //     let rev = 0;
// //     while(n > 0){
// //         let lastDigit = n % 10;
// //         rev = lastDigit + rev*10;
// //         n = Math.floor(n/10);
// //     }
// //     return rev;
// // }
// // let n=25;
// // console.log("MirrorDistance:",mirrorDistance(n));

// // No-Zero integer is a positive integer that does not contain any 0 in its decimal representation.

// // Given an integer n, return a list of two integers [a, b] where:

// // a and b are No-Zero integers.
// // a + b = n
// // The test cases are generated so that there is at least one valid solution. If there are many valid solutions, you can return any of them.

// // Example 1:

// // Input: n = 2
// // Output: [1,1]
// // Explanation: Let a = 1 and b = 1.
// // Both a and b are no-zero integers, and a + b = 2 = n.
// // Example 2:

// // Input: n = 11
// // Output: [2,9]
// // Explanation: Let a = 2 and b = 9.
// // Both a and b are no-zero integers, and a + b = 11 = n.
// // Note that there are other valid answers as [8, 3] that can be accepted.

// // function getNoZeroInteger(n){
// //     function hasZero(num){
// //         return num.toString().includes('0');
// //     };
// //     for(let a = 1; a<=n; a++){
// //         let b = n - a;
// //         if(!hasZero(a) && !hasZero(b)){
// //             return [a,b];
// //         }
// //     }
// // };
// // let n=11;
// // console.log("GetN0ZeroInteger:",getNoZeroInteger(n));

// // You are given an array nums that consists of non-negative integers. Let us define rev(x) as the reverse of the non-negative integer x. For example, rev(123) = 321, and rev(120) = 21. A pair of indices (i, j) is nice if it satisfies all of the following conditions:

// // 0 <= i < j < nums.length
// // nums[i] + rev(nums[j]) == nums[j] + rev(nums[i])
// // Return the number of nice pairs of indices. Since that number can be too large, return it modulo 109 + 7.

// // Example 1:

// // Input: nums = [42,11,1,97]
// // Output: 2
// // Explanation: The two pairs are:
// //  - (0,3) : 42 + rev(97) = 42 + 79 = 121, 97 + rev(42) = 97 + 24 = 121.
// //  - (1,2) : 11 + rev(1) = 11 + 1 = 12, 1 + rev(11) = 1 + 11 = 12.
// // Example 2:

// // Input: nums = [13,10,35,24,76]
// // Output: 4

// // function countNicePairs(nums){
// //     let mod =1e9 + 7;
// //     let map = new Map();
// //     map.set(0,1);
// //     let count = 0;
// //     for(let num of nums){
// //         let key = num - rev(num);
// //         if(map.has(key)){
// //             count = (count + (map.get(key)))%mod;
// //         }
// //         map.set(key, (map.get(key)|| 0) + 1);
// //     }
// //     return count;
// // }
// // let nums = [13,10,35,24,76];
// // console.log("countNicePairs:",countNicePairs(nums));
// // function rev(n){
// // let reverse =0;
// // let temp = n;
// // while(temp> 0){
// //     let lastDigit = temp % 10;
// //     reverse = reverse*10 + lastDigit;
// //     temp = Math.floor(temp/10);
// // }
// // return reverse
// // }

// // Given an integer num, return three consecutive integers (as a sorted array) that sum to num. If num cannot be expressed as the sum of three consecutive integers, return an empty array.

// // Example 1:

// // Input: num = 33
// // Output: [10,11,12]
// // Explanation: 33 can be expressed as 10 + 11 + 12 = 33.
// // 10, 11, 12 are 3 consecutive integers, so we return [10, 11, 12].
// // Example 2:

// // Input: num = 4
// // Output: []
// // Explanation: There is no way to express 4 as the sum of 3 consecutive integers.

// // var sumOfThree = function(num) {
// //     if(num % 3 !== 0) return [];
// //     let mid = num/3;
// //     return [mid-1,mid,mid+1];
// // }
// // let num = 33;
// // console.log("sumOfThree:",sumOfThree(num));

// // The XOR total of an array is defined as the bitwise XOR of all its elements, or 0 if the array is empty.

// // For example, the XOR total of the array [2,5,6] is 2 XOR 5 XOR 6 = 1.
// // Given an array nums, return the sum of all XOR totals for every subset of nums.

// // Note: Subsets with the same elements should be counted multiple times.

// // An array a is a subset of an array b if a can be obtained from b by deleting some (possibly zero) elements of b.

// // Example 1:

// // Input: nums = [1,3]
// // Output: 6
// // Explanation: The 4 subsets of [1,3] are:
// // - The empty subset has an XOR total of 0.
// // - [1] has an XOR total of 1.
// // - [3] has an XOR total of 3.
// // - [1,3] has an XOR total of 1 XOR 3 = 2.
// // 0 + 1 + 3 + 2 = 6

// // function subsetXORSum(nums){
// //     let or  = 0;
// //     for(let num of nums){
// //         or |= num;
// //     }
// //     return or * (1 << (nums.length -1));
// // }
// // let nums =[1,3];
// // console.log("subsetsXorSum:",subsetXORSum(nums));

// // You are given an array nums1 of n distinct integers.

// // You want to construct another array nums2 of length n such that the elements in nums2 are either all odd or all even.

// // For each index i, you must choose exactly one of the following (in any order):

// // nums2[i] = nums1[i]
// // nums2[i] = nums1[i] - nums1[j], for an index j != i
// // Return true if it is possible to construct such an array, otherwise, return false.

// // Example 1:

// // Input: nums1 = [2,3]

// // Output: true

// // Explanation:

// // Choose nums2[0] = nums1[0] - nums1[1] = 2 - 3 = -1.
// // Choose nums2[1] = nums1[1] = 3.
// // nums2 = [-1, 3], and both elements are odd. Thus, the answer is true​​​​​​​.

// // var uniformArray = function(nums1) {
// //     let nums2 =[];
// //     for(let i =0; i<nums1.length; i++){
// //         nums2[i] = nums1[i] - nums1[i+1];
// //     };
// //     if(isOdd(nums2)){
// //         return true;
// //     }
// //     if(isEven(nums2)){
// //         return true;
// //     }
// //     return false;

// // };
// // let nums1 = [2,3];
// // console.log("UniformArray:",uniformArray(nums1));

// // function isOdd(arr){
// //     for(let i=0; i<arr.length; i++){
// //         if(arr[i]%2 !== 0){
// //             return true;
// //         }
// //     }

// //     return false;
// // }
// // function isEven(n){
// //     for(let i=0; i<arr.length; i++){
// //         if(arr[i]%2 === 0){
// //             return true;
// //         }
// //     }
// //     return false;
// // }

// // You are given an array nums1 of n distinct integers.

// // You want to construct another array nums2 of length n such that the elements in nums2 are either all odd or all even.

// // For each index i, you must choose exactly one of the following (in any order):

// // nums2[i] = nums1[i]​​​​​​​
// // nums2[i] = nums1[i] - nums1[j], for an index j != i, such that nums1[i] - nums1[j] >= 1
// // Return true if it is possible to construct such an array, otherwise return false.

// // Input: nums1 = [1,4,7]

// // Output: true

// // Explanation:​​​​​​​​​​​​​​

// // Set nums2[0] = nums1[0] = 1.
// // Set nums2[1] = nums1[1] - nums1[0] = 4 - 1 = 3.
// // Set nums2[2] = nums1[2] = 7.
// // nums2 = [1, 3, 7], and all elements are odd. Thus, the answer is true.

// // var uniformArray = function(nums1) {
// //     let nums2 =[];
// //     for(let i =0; i<nums1.length; i++){
// //         nums2[i] = nums1[i+1] - nums1[i];

// //     };
// //     console.log("nums2:",nums2)
// //     if(isOdd(nums2)){
// //         return true;
// //     }
// //     if(isEven(nums2)){
// //         return true;
// //     }
// //     return false;
// // };
// // let nums1 = [1,4,7];
// // console.log("uniformArray:",uniformArray(nums1))

// // function isOdd(arr){
// //     for(let i=0; i<arr.length; i++){
// //         if(arr[i]%2 !== 0){
// //             return true;
// //         }
// //     }

// //     return false;
// // }
// // function isEven(arr){
// //     for(let i=0; i<arr.length; i++){
// //         if(arr[i]%2 === 0){
// //             return true;
// //         }
// //     }
// //     return false;
// // }

// // You are given an integer array nums and an integer k. You can perform the following operation any number of times:

// // Select an index i and replace nums[i] with nums[i] - 1.
// // Return the minimum number of operations required to make the sum of the array divisible by k.

// // Example 1:

// // Input: nums = [3,9,7], k = 5

// // Output: 4

// // Explanation:

// // Perform 4 operations on nums[1] = 9. Now, nums = [3, 5, 7].
// // The sum is 15, which is divisible by 5.

// // var minOperations = function(nums, k) {
// //     let sum =0;
// //     for(let num of nums){
// //         sum += num;
// //     }
// //     return sum%k === 0 ? 0 : sum%k;
// // };
// // let nums = [3,9,7], k = 5;
// // console.log("minOperations:",minOperations(nums , k));

// // You are given an integer array nums containing positive integers. We define a function encrypt such that encrypt(x) replaces every digit in x with the largest digit in x. For example, encrypt(523) = 555 and encrypt(213) = 333.

// // Return the sum of encrypted elements.

// // Example 1:

// // Input: nums = [1,2,3]

// // Output: 6

// // Explanation: The encrypted elements are [1,2,3]. The sum of encrypted elements is 1 + 2 + 3 == 6.

// // Example 2:

// // Input: nums = [10,21,31]

// // Output: 66

// // Explanation: The encrypted elements are [11,22,33]. The sum of encrypted elements is 11 + 22 + 33 == 66.

// // var sumOfEncryptedInt = function(nums) {
// //     let sum =0;
// //     for(let i=0; i<nums.length; i++){
// //         sum += encrypt(nums[i]);
// //     }
// //     return sum;

// // };
// // let nums = [1,2,3];
// // console.log("sumOfEncryptInt:",sumOfEncryptedInt(nums));

// // function encrypt(num){
// //     let count = 0;
// //     let max = 0;
// //     while(num){
// //         let lastDigit = num % 10;
// //         count++;
// //         max = Math.max(max , lastDigit);
// //         num = Math.floor(num/10);
// //     }
// //     let ans ="";
// //     for(let i =1; i<=count; i++){
// //         ans += max;
// //     }
// //     return Number(ans);
// // }

// // You are given a 0-indexed integer array nums. A pair of indices i, j where 0 <= i < j < nums.length is called beautiful if the first digit of nums[i] and the last digit of nums[j] are coprime.

// // Return the total number of beautiful pairs in nums.

// // Two integers x and y are coprime if there is no integer greater than 1 that divides both of them. In other words, x and y are coprime if gcd(x, y) == 1, where gcd(x, y) is the greatest common divisor of x and y.

// // Example 1:

// // Input: nums = [2,5,1,4]
// // Output: 5
// // Explanation: There are 5 beautiful pairs in nums:
// // When i = 0 and j = 1: the first digit of nums[0] is 2, and the last digit of nums[1] is 5. We can confirm that 2 and 5 are coprime, since gcd(2,5) == 1.
// // When i = 0 and j = 2: the first digit of nums[0] is 2, and the last digit of nums[2] is 1. Indeed, gcd(2,1) == 1.
// // When i = 1 and j = 2: the first digit of nums[1] is 5, and the last digit of nums[2] is 1. Indeed, gcd(5,1) == 1.
// // When i = 1 and j = 3: the first digit of nums[1] is 5, and the last digit of nums[3] is 4. Indeed, gcd(5,4) == 1.
// // When i = 2 and j = 3: the first digit of nums[2] is 1, and the last digit of nums[3] is 4. Indeed, gcd(1,4) == 1.
// // Thus, we return 5.

// // var countBeautifulPairs = function(nums) {
// //     let count =0;
// //     for(let i=0; i<nums.length; i++){
// //         let first = getFirstDigit(nums[i]);
// //         for(let j=i+1; j<nums.length; j++){
// //             let second = nums[j]%10;
// //             if(gcd(first,second) === 1){
// //                 count++;
// //             }
// //         }
// //     }
// //     return count;
// // };
// // let nums = [2,5,1,4];
// // console.log("CountBeautifulPairs:",countBeautifulPairs(nums));

// // // functions for the find the first Number
// // function getFirstDigit(num){
// //     let first = num;
// //     while(first >=10){
// //         first = Math.floor(first/10);
// //     }
// //     return first;
// // }
// // // functions for the find the gcd ot two number
// // function gcd(a,b){
// //     while(b !=0){
// //         [a,b] =[b,a%b]
// //     }
// //     return a;
// // }
// // let a = 2 ,b = 5;
// // console.log("gcd:",gcd(a,b));

// // var intToRoman = function(num) {
// //      const values = [
// //         1000, 900, 500, 400,
// //         100, 90, 50, 40,
// //         10, 9, 5, 4,
// //         1
// //     ];

// //     const symbols = [
// //         "M", "CM", "D", "CD",
// //         "C", "XC", "L", "XL",
// //         "X", "IX", "V", "IV",
// //         "I"
// //     ];

// //     let result = "";

// //     for (let i = 0; i < values.length; i++) {
// //         while (num >= values[i]) {
// //             result += symbols[i];
// //             num -= values[i];
// //         }
// //     }

// //     return result;
// // };
// // let num = 3749;
// // console.log("Integer To Roman:",intToRoman(num));

// // var nthUglyNumber = function(n) {
// //     let ugly = new Array(n).fill(0);
// //     ugly[0] = 1;

// //     let i2 = 0, i3 = 0, i5 = 0;

// //     let next2 = 2, next3 = 3, next5 = 5;

// //     for (let i = 1; i < n; i++) {
// //         let nextUgly = Math.min(next2, next3, next5);
// //         ugly[i] = nextUgly;

// //         if (nextUgly === next2) {
// //             i2++;
// //             next2 = ugly[i2] * 2;
// //         }

// //         if (nextUgly === next3) {
// //             i3++;
// //             next3 = ugly[i3] * 3;
// //         }

// //         if (nextUgly === next5) {
// //             i5++;
// //             next5 = ugly[i5] * 5;
// //         }
// //     }

// //     return ugly[n - 1];
// // };

// // let n = 10;
// // console.log("nthUglyNumber:",nthUglyNumber(n));

// // Given two integers num1 and num2, return the sum of the two integers.

// // Example 1:

// // Input: num1 = 12, num2 = 5
// // Output: 17
// // Explanation: num1 is 12, num2 is 5, and their sum is 12 + 5 = 17, so 17 is returned.
// // Example 2:

// // Input: num1 = -10, num2 = 4
// // Output: -6
// // Explanation: num1 + num2 = -6, so -6 is returned.

// // var sum = function(num1, num2) {
// //     if(num1 >=0 && num2 >=0){
// //         return num1+num2;
// //     }else if( num1 <=0 && num2 <= 0){
// //         return -Math.abs(num1 + num2);
// //     }
// //     else if(num1 <=0 && num2 >= 0 && Math.abs(num1) > num2){
// //         return -Math.abs(num1 + num2);
// //     }else if (num1 >=0 && num2 <=0 &&  Math.abs(num2) > num1){
// //         return -Math.abs(num1 + num2);
// //     }else if (num1 <=0 && num2 >=0 && num2 > Math.abs(num1)){
// //         return num1 + num2;
// //     }else if (num1 >=0 && num2 <=0 && num1 > Math.abs(num2)){
// //         return num1 + num2;
// //     }else if (num1 <=0 && num2 >=0 && Math.abs(num1) === Math.abs(num2)){
// //         return 0;
// //     }else if (num1 >=0 && num2 <=0 && Math.abs(num1) === Math.abs(num2)){
// //         return 0;
// //     }
// // };
// // let num1 = 12, num2 = 5;
// // console.log("Sum:",sum(num1 , num2));

// // var punishmentNumber = function(n) {
// //     let total = 0;
// //     for(let i=1; i<=n; i++){
// //         let ans = i*i;
// //         if(sumDigit(ans) === i){
// //             total += ans;
// //         }
// //     }
// //     return total;

// // };
// // let n=10;
// // console.log("Punishment Number:",punishmentNumber(n));
// // // sum of the digit
// // function sumDigit(n){
// //     let sum =0;
// //     while(n>0){
// //         sum += n%10;
// //         n = Math.floor(n/10);
// //     }
// //     return sum;
// // }

// // In the town of Digitville, there was a list of numbers called nums containing integers from 0 to n - 1. Each number was supposed to appear exactly once in the list, however, two mischievous numbers sneaked in an additional time, making the list longer than usual.

// // As the town detective, your task is to find these two sneaky numbers. Return an array of size two containing the two numbers (in any order), so peace can return to Digitville.

// // Example 1:

// // Input: nums = [0,1,1,0]

// // Output: [0,1]

// // Explanation:

// // The numbers 0 and 1 each appear twice in the array.

// // var getSneakyNumbers = function(nums) {
// //     let freq ={};
// //     for(let num of nums){
// //         freq[num] = (freq[num] || 0) + 1;
// //     }
// //     let ans = [];
// // for(let [key ,value] of Object.entries(freq)){
// //     if(value === 2){
// //         ans.push(Number(key));
// //     }
// // }
// //     for(let key in freq){
// //         if(freq[key] === 2){
// //             ans.push(Number(key));
// //         }
// //     }
// //     return ans;
// // };
// // let nums = [0,1,1,0];
// // console.log("getSneakyNumber:",getSneakyNumbers(nums));
// // var nextGreaterElement = function(n) {
// //     let ans = reverse(n);
// //     console.log(ans);
// //     if(n <= ans){
// //         return ans;
// //     }
// //     return -1;
// // };
// //  function reverse(n){
// //     let rev = 0;
// //     while(n>0){
// //         let lastDigit = n%10;
// //         rev = rev*10 + lastDigit;
// //         n = Math.floor(n/10);
// //     }
// //     console.log("rev:",rev);
// //     return rev;
// // }
// // let n=101;
// // console.log("nextGreaterElement:",nextGreaterElement(n));

// // You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.

// // A substring is a contiguous sequence of characters within a string.

// // Example 1:

// // Input: num = "52"
// // Output: "5"
// // Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.

// // var largestOddNumber = function(num){
// //     for(let i =num.length - 1; i>=0; i--){
// //         if((num[i]- '0') % 2 !== 0){
// //             return num.substring(0,i+1);
// //         }
// //     }
// //     return "";
// // };
// // let num = "52";
// // console.log("LargestoddNumber:",largestOddNumber(num));

// // var countVowels = function (word) {
// //   let vowels = "aioue";
// //   let result = [];
// //   for (let i = 0; i < word.length; i++) {
// //     for (let j = i; j < word.length; j++) {
// //       result.push(word.substring(i, j + 1));
// //     }
// //   }
// //   let sum = 0;
// //   for (let str of result) {
// //     for (let ch of str) {
// //       if (vowels.includes(ch)) {
// //         sum++;
// //       }
// //     }
// //   }

// //   return sum;
// // };

// // optimized 
// // var countVowels = function(word) {
// //     let vowels = "aeiou";
// //     let n = word.length;
// //     let sum = 0;

// //     for (let i = 0; i < n; i++) {
// //         if (vowels.includes(word[i])) {
// //             sum += (i + 1) * (n - i);
// //         }
// //     }

// //     return sum;
// // };
// // let word = "aba";
// // console.log("countVowels:", countVowels(word));

// // You are given a 0-indexed integer array nums, where nums[i] is a digit between 0 and 9 (inclusive).

// // The triangular sum of nums is the value of the only element present in nums after the following process terminates:

// // Let nums comprise of n elements. If n == 1, end the process. Otherwise, create a new 0-indexed integer array newNums of length n - 1.
// // For each index i, where 0 <= i < n - 1, assign the value of newNums[i] as (nums[i] + nums[i+1]) % 10, where % denotes modulo operator.
// // Replace the array nums with newNums.
// // Repeat the entire process starting from step 1.
// // Return the triangular sum of nums.

 

// // Example 1:


// // You are given an integer array nums.

// // Return an integer that is the maximum distance between the indices of two (not necessarily different) prime numbers in nums.

 

// // Example 1:

// // Input: nums = [4,2,9,5,3]

// // Output: 3

// // Explanation: nums[1], nums[3], and nums[4] are prime. So the answer is |4 - 1| = 3.

// // Example 2:

// // Input: nums = [4,8,2,8]

// // Output: 0

// // Explanation: nums[2] is prime. Because there is just one prime number, the answer is |2 - 2| = 0.
// // var maximumPrimeDifference = function(nums) {
// //     let ans =[];
// //     for(let i =0; i<nums.length; i++){
// //         let isPrime = prime(nums[i])
// //         console.log("IsPrime:",i,isPrime);
// //         if(isPrime === true){
// //             ans.push(i);
// //         }
// //     }
// //     let max = Math.max(...ans);
// //     let min = Math.min(...ans);
// //     return Math.abs(max-min);
// // };
// // function prime(n){
// //     if(n <=1) return false;
// //     if(n === 2) return true;
// //     if(n % 2 === 0) return false;
// //     for(let i=3; i*i <= n; i+=2){
// //         if(n % i === 0) return false;
// //     }
// //     return true;
// // }
// // let nums = [4,2,9,5,3];
// // console.log("MaximumPrimeDiffernces:",maximumPrimeDifference(nums));

// // Given an integer n, return true if it is possible to represent n as the sum of distinct powers of three. Otherwise, return false.

// // An integer y is a power of three if there exists an integer x such that y == 3x.

 

// // Example 1:

// // Input: n = 12
// // Output: true
// // Explanation: 12 = 31 + 32
// // Example 2:

// // Input: n = 91
// // Output: true
// // Explanation: 91 = 30 + 32 + 34

// // var checkPowersOfThree = function(n) {
// //     let sum =0;
// //    let i=1;
// //     while(i*i <n){
// //         sum += Math.pow(i,3);
// //         console.log("Sum in loops:",sum,i);
// //         if(sum === n){
// //             return true;
// //         }else{
// //             i++;
// //         }
        
// //     }
// //     console.log("Sum:",sum);
    
// //     return false;
// // };
// // let n=12;
// // console.log("CheckPowerOf Three:",checkPowersOfThree(n));

// // var minMirrorPairDistance = function(nums) {
// //     let ans = [];
// //     for(let i =0; i<nums.length; i++){
// //         for(let j=i+1; j<nums.length; j++){
// //             if(reverse(nums[i]) === nums[j]){
// //                 ans.push(Math.abs(i-j));
// //             }
// //         }
// //     }
// //     let min = Infinity;
// //     let res = -1;
// //     for(let num of ans){
// //         if(num < min && res < min){
// //             min = num;
// //             res = min;
// //         }
// //     }
// //     return res;
// // };
// // let nums =[12,21,45,33,54];
// // console.log("minMirrorDistance:",minMirrorPairDistance(nums))
// // function reverse(n){
// //     let rev = 0;
// //     while(n>0){
// //         let lastDigit = n%10;
// //         rev = lastDigit +rev*10;
// //         n = Math.floor(n/10);
// //     }
// //     console.log("Rev:",rev);
// //     return rev;
// // }

// // Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

// // Integers in each row are sorted in ascending from left to right.
// // Integers in each column are sorted in ascending from top to bottom.
 

// // Example 1:


// // Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
// // Output: true

// // var searchMatrix2DArray = function(matrix , target){
// //     let row =0;
// //     let col = matrix[0].length - 1;
// //     while(row < matrix.length && col >= 0){
// //         if(matrix[row][col] === target){
// //             return true;
// //         }else if(matrix[row][col] > target){
// //             col--; // move left side;
// //         }else{
// //             row++;
// //         }
// //     }
// //     return false;
// // }
// // let matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5;
// // console.log("SearchMatrix2DArray:",searchMatrix2DArray(matrix , target));

// // You are given a 0-indexed array nums consisting of positive integers. You can choose two indices i and j, such that i != j, and the sum of digits of the number nums[i] is equal to that of nums[j].

// // Return the maximum value of nums[i] + nums[j] that you can obtain over all possible indices i and j that satisfy the conditions. If no such pair of indices exists, return -1.

 

// // Example 1:

// // Input: nums = [18,43,36,13,7]
// // Output: 54
// // Explanation: The pairs (i, j) that satisfy the conditions are:
// // - (0, 2), both numbers have a sum of digits equal to 9, and their sum is 18 + 36 = 54.
// // - (1, 4), both numbers have a sum of digits equal to 7, and their sum is 43 + 7 = 50.
// // So the maximum sum that we can obtain is 54.
// //  var maximumSum = function(nums){
// //     let map = new Map();
// //     let max = -1;

// //     for(let num of nums){
// //         let sum = sumDigit(num);
// //         if(map.has(sum)){
// //             max = Math.max(max , num + map.get(sum));
// //             map.set(sum , Math.max(map.get(sum)), num);
// //         }else{
// //             map.set(sum ,num);
// //         }
// //     }
// //     return max;

// // }
// // let nums = [18,43,36,13,7];
// // console.log("maximumSum:",maximumSum(nums));
// // function sumDigit(n){
// //     let sum =0;
// //     while(n > 0){
// //         let lastDigit = n % 10;
// //         sum += lastDigit;
// //         n = Math.floor(n/10);
// //     }
// //     return sum;
// // }

// // Given an array of integers arr of even length n and an integer k.

// // We want to divide the array into exactly n / 2 pairs such that the sum of each pair is divisible by k.

// // Return true If you can find a way to do that or false otherwise.

 

// // Example 1:

// // Input: arr = [1,2,3,4,5,10,6,7,8,9], k = 5
// // Output: true
// // Explanation: Pairs are (1,9),(2,8),(3,7),(4,6) and (5,10).

// // var canArrange = function(arr, k) {
//     // let n = arr.length;
//     // let count =0;
//     // let left = 0;
//     // let right = n-1;
//     // while(left < right){
//     //     if((arr[left] + arr[right]) % k === 0){
//     //         count++;
//     //         left++;
//     //         right--;
//     //     }
//     // }
//     // console.log("Count:",count);
//     // return count === n/2;
//     // let n = arr.length;
//     // let count =0;
//     // for(let i =0; i<n/2 ; i++){
//     //     if((Math.abs(arr[i])+Math.abs(arr[n-i-1])) % k === 0){
//     //         count++;
//     //     }
//     // }
//     // console.log("Count:",count);
//     // return count === n/2;

// //     let map = new Map();
// //     for(let num of arr){
// //         let rem = ((num % k) + k)%k;
// //         map.set(rem , (map.get(rem) || 0) + 1);
// //     }
// //     for(let [rem ,count] of map){
// //         if(rem === 0){
// //             if(count % 2 !==0) return false;
// //         }else{
// //             let other = k - rem;
// //             if((map.get(other) || 0) !==count) return false;
// //         }
// //     }
// //     return true;
// // };
// // let arr = [-1,1,-2,2,-3,3,-4,4], k = 5;
// // console.log("CanArrange:",canArrange(arr , k));

// // Given an array of strings, group the anagrams together.

// // var groupAnagram = function(strs){
// //     let map = new Map();
// //     for(let str of strs){
// //         let key= str.split('').sort().join('');
// //         console.log("Key:",key);
// //         if(!map.has(key)){
// //             map.set(key,[]);
// //         }
// //         console.log("map.get(key):",map.get(key))
// //         map.get(key).push(str);
// //     }
// //     return Array.from(map.values());
// // }
// // let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
// // console.log("groupAnagram:",groupAnagram(strs));

// // var maximumSum = function(nums) {
// //     let map = new Map();
// //     let max = -1;

// //     for (let num of nums) {
// //         let sum = 0;
// //         let temp = num;

// //         while (temp > 0) {
// //             sum += temp % 10;
// //             temp = Math.floor(temp / 10);
// //         }

// //         if (!map.has(sum)) {
// //             map.set(sum, []);
// //         }

// //         map.get(sum).push(num);
// //     }

// //     for (let arr of map.values()) {
// //         if (arr.length >= 2) {
// //             arr.sort((a, b) => b - a);
// //             let pairSum = arr[0] + arr[1];
// //             max = Math.max(max, pairSum);
// //         }
// //     }

// //     return max;
// // };
// // let nums = [18,43,36,13,7];
// // console.log("MaximumSum:",maximumSum(nums));

// // Group Even or Odd
// // var groupEvenOdd = function(nums){
// //     let map = new Map();
// //     for(num of nums){
// //         let key = num % 2 === 0 ? "even" :"odd";
// //         if(!map.has(key)){
// //             map.set(key,[]);
// //         }
// //         map.get(key).push(num);
// //     }
// //     return map;
// // }
// // let nums = [1,2,3,4,5,6,7,8];
// // console.log("GroupingEvenOdd:",groupEvenOdd(nums));

// Every element less than pivot appears before every element greater than pivot.
// Every element equal to pivot appears in between the elements less than and greater than pivot.
// The relative order of the elements less than pivot and the elements greater than pivot is maintained.
// More formally, consider every pi, pj where pi is the new position of the ith element and pj is the new position of the jth element. If i < j and both elements are smaller (or larger) than pivot, then pi < pj.
// Return nums after the rearrangement.

 

// Example 1:

// Input: nums = [9,12,5,10,14,3,10], pivot = 10
// Output: [9,5,3,10,10,12,14]
// Explanation: 
// The elements 9, 5, and 3 are less than the pivot so they are on the left side of the array.
// The elements 12 and 14 are greater than the pivot so they are on the right side

// var pivotArray = function(nums){
//     let less =[];
//     let eqaul = [];
//     let greater = [];
//     for(let num of nums){
//         if(num < pivot){
//             less.push(num);
//         }else if(num === pivot){
//             eqaul.push(num);
//         }else{
//             greater.push(num);
//         }
//     }
//     return [...less , ...eqaul , ...greater];
// }
// let nums = [9,12,5,10,14,3,10], pivot = 10;
// console.log("pivotArray:",pivotArray(nums));

// Given an integer n, return the nth digit of the infinite integer sequence [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...].

 

// Example 1:

// Input: n = 3
// Output: 3
// Example 2:

// Input: n = 11
// Output: 0
// Explanation: The 11th digit of the sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... is a 0, which is part of the number 10.

// var findNthDigit = function(n){
//     let digitLength = 9;
//     let count = 1;
//     let start = 1;

//     while(n > digitLength * count){
//         n -= digitLength*count;
//         count *= 10;
//         start *= 10;
//     }
//     // find the actual Number
//     let number = start + Math.floor((n-1)/digitLength);
//     // find the digitIndex
//     let digitIndex = (n-1)%digitLength;

//     return Number(String(number)[digitIndex]);
// }
// let n=11;
// console.log("FindNthDigit:",findNthDigit(n));

// You are given an integer array nums.

// A pair of indices (i, j) is called perfect if the following conditions are satisfied:

// i < j
// Let a = nums[i], b = nums[j]. Then:
// min(|a - b|, |a + b|) <= min(|a|, |b|)
// max(|a - b|, |a + b|) >= max(|a|, |b|)
// Return the number of distinct perfect pairs.

// Note: The absolute value |x| refers to the non-negative value of x.

 

// Example 1:

// Input: nums = [0,1,2,3]

// Output: 2

// var perfectPairs = function(nums){
//     // convert negative number into postive
//     nums.map((num)=>Math.abs(num));
//     // sort the number
//     nums.sort((a,b)=> a-b);

//     let left =0;
//     let count =0;
//     for(let right =0; right < nums.length; right++){
//         if(nums[right] > 2 *(nums[left])){
//             left++;
//         }
//         count += right - left;
//     }
//     return count;
// }
// let  nums = [0,1,2,3];
// console.log("perfectPairs:",perfectPairs(nums)); 

// var mostCommonWord = function(paragraph, banned) {
//     paragraph = paragraph.toLowerCase().replace(/[^a-z]/g, " ");

//     let words = paragraph.split(" ");
//     let freq = {};
//     let bannedSet = new Set(banned);

//     let maxCount = 0;
//     let result = "";

//     for (let word of words) {
//         if (word === "" || bannedSet.has(word)) continue;

//         freq[word] = (freq[word] || 0) + 1;

//         if (freq[word] > maxCount) {
//             maxCount = freq[word];
//             result = word;
//         }
//     }
//     return result;
// };
// let paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"];
// console.log("mostCommonWord:",mostCommonWord(paragraph, banned));

// var removeDuplicateLetters = function(s) {
//     let freq = {};
//     for(let char of s){
//         freq[char] = (freq[char] || 0) + 1;
//     }
//     let ans ="";
//     let set  = new Set();
//     for(let char in freq){
//         if(!set.has(char)){
//             ans += char;
//         }
//     }
//     // sort the character
//     let newArr = ans.split("").sort().join("");
   
//     return newArr;
// };
// let s = "bca";
// console.log("removeDuplicateLetter:",removeDuplicateLetters(s));

// You are given an integer n. We say that two integers x and y form a prime number pair if:

// 1 <= x <= y <= n
// x + y == n
// x and y are prime numbers
// Return the 2D sorted list of prime number pairs [xi, yi]. The list should be sorted in increasing order of xi. If there are no prime number pairs at all, return an empty array.

// Note: A prime number is a natural number greater than 1 with only two factors, itself and 1.

 

// Example 1:

// Input: n = 10
// Output: [[3,7],[5,5]]
// Explanation: In this example, there are two prime pairs that satisfy the criteria. 
// These pairs are [3,7] and [5,5], and we return them in the sorted order as described in the problem statement.

// var findThePrimePair = function(n){
//     let ans = [];
//     for(let i=2; i<=n/2; i++){
//         let j = n-i;
//         if(isPrime(i) && isPrime(j)){
//             ans.push([i,j]);
//         }
//     }
//     return ans;

// }
// let n=10;
// console.log("Find Prime Pairs:",findThePrimePair(n));
// function isPrime(n){
//     if(n <=1) return false;
//     if(n === 2) return true;
//     if(n%2 === 0) return false;

//     for(let i=3; i*i <= n; i+=2){
//         if(n%i === 0) return false;
//     }
//     return true;
// }

// Given a positive integer n, find the pivot integer x such that:

// The sum of all elements between 1 and x inclusively equals the sum of all elements between x and n inclusively.
// Return the pivot integer x. If no such integer exists, return -1. It is guaranteed that there will be at most one pivot index for the given input.

 

// Example 1:

// Input: n = 8
// Output: 6
// Explanation: 6 is the pivot integer since: 1 + 2 + 3 + 4 + 5 + 6 = 6 + 7 + 8 = 21.

var pivotInteger = function(n) {
    let total = n*(n+1)/2;
    let x  = Math.sqrt(total);
    return Number.isInteger(x) ? x : -1;
};
let n = 8;
console.log("PivotInteger:",pivotInteger(n));