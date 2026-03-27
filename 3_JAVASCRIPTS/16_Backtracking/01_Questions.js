// Given an integer array nums of unique elements, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]

// function subsets(nums){
//     let result = [];

//     function backtrack(index , path){
//         result.push([...path]);

//         for(let i = index; i<nums.length; i++){
//             path.push(nums[i]);
//             backtrack(i+1,path);
//             path.pop();
//         }
//     }
//     backtrack(0 , []);
//     return result;
// };
// let nums = [1,2,3];
// console.log("subsets:",subsets(nums));

// find the permutaions:
function permutations(nums){
    let result = [];

    function backtrack(path){
        if(path.length === nums.length){
            result.push([...path]);
            return;
        }

        for(let num of nums){
            if(path.includes(num)) continue;
            path.push(num);
            backtrack(path);
            path.pop();
        }
    }
    backtrack([]);
    return result;
};
let nums = [1,2,3];
console.log("Permutations:",permutations(nums));