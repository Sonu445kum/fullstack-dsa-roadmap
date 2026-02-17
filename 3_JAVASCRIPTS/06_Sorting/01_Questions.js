// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.
// Example 1:
// Input: nums = [1,2,3]
// Output: 6

// Example 2:
// Input: nums = [1,2,3,4]
// Output: 24

// Example 3:
// Input: nums = [-1,-2,-3]
// Output: -6

// function maxProduct3(nums){
//     // base case
//     let n=nums.length;
//     if(n <3) return;
//     // if all the number is +ve
//     // sort all the number in the given array
//     nums.sort((a,b)=>a-b);
//     return Math.max(nums[n-1]*nums[n-2]*nums[n-3],nums[0]*nums[1]*nums[n-1])

// }
// // let nums = [1,2,3];
// // let nums = [1,2,3,4];
// let nums = [-1,-2,-3];
// console.log("The Maximum Product of Three Num:",maxProduct3(nums))

// 2nd Appraoch
function maxProduct3(nums){
    let max1 = -Infinity, max2 = -Infinity , max3 = -Infinity;
    let min1 =  Infinity, min2 =  Infinity;
    for( let num of nums){
        // check for the maximum
        if(num > max1){
            max3 = max2;
            max2 = max1;
            max1 = num;
        }else if(num > max2){
            max3 = max2;
            max2 = num;
        }else if(num > max3){
            max3 = num

        }

        // check for the minimum
        if(num < min1){
            min2 = min1;
            min1 = num
        }else if(num < min2){
            min2 = num
        }

    }
    return Math.max(max1 * max2 * max3 , max1 * min1 * min2)

}
let nums = [1,2,3];
// let nums = [1,2,3,4];
// let nums = [-1,-2,-3];
console.log("The Maximum Product of Three Num:",maxProduct3(nums))