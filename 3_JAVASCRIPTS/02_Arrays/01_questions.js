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
function kthLargestNum(arr){
    
}

// Shuffle array
