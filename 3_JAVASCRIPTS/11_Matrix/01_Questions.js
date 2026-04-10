// function addMatrix(A, B) {
//   let result = [];

//   for (let i = 0; i < A.length; i++) {
//     result[i] = [];
//     for (let j = 0; j < A[0].length; j++) {
//       result[i][j] = A[j][i] ;
//     }
//   }

//   return result;
// }
// let A = [[1, 2, 3]];
// let B = [[4, 5, 6]];

// console.log("A+B:", addMatrix(A, B));

// function multiplyMatrix(A, B) {
//   let result = Array.from({ length: A.length }, () =>
//     Array(B[0].length).fill(0)
//   );

//   for (let i = 0; i < A.length; i++) {
//     for (let j = 0; j < B[0].length; j++) {
//       for (let k = 0; k < B.length; k++) {
//         result[i][j] += A[i][k] * B[k][j];
//       }
//     }
//   }

//   return result;
// }
// let A = [[1, 2, 3]];
// let B = [[4, 5, 6]];

// console.log("A*B:", multiplyMatrix(A, B));

// function transposeMatrix(matrix){
//   let row = matrix.length;
//   let cols = matrix[0].length;
//   let result =[];
//   for(let i=0; i<cols; i++){
//     result[i] = [];
//     for(let j=0; j<row; j++){
//       result[i][j] = matrix[j][i];
//     }
//   }
//   return result;
// };
// let matrix = [[1,2,3],[4,5,6],[7,8,9]];
// console.log("Tranpose of a matrix:",transposeMatrix(matrix));

// You are given a 0-indexed 1-dimensional (1D) integer array original, and two integers, m and n. You are tasked with creating a 2-dimensional (2D) array with  m rows and n columns using all the elements from original.

// The elements from indices 0 to n - 1 (inclusive) of original should form the first row of the constructed 2D array, the elements from indices n to 2 * n - 1 (inclusive) should form the second row of the constructed 2D array, and so on.

// Return an m x n 2D array constructed according to the above procedure, or an empty 2D array if it is impossible.

// var construct2DArray = function(original, m, n) {
//     let twoDArr = [];
//     // base case
//     if(original.length !== m*n) return twoDArr;
//     let index =0;
//     for(let i =0; i< m; i++){
//         twoDArr[i] = [];
//         for(let j=0; j<n; j++){
//             twoDArr[i][j] = original[index++];
//         }
//     }
//     return twoDArr;
// };
// let original = [1,2,3,4], m = 2, n = 2;
// console.log("construct2DArray:",construct2DArray(original , m ,n));

var numSpecial = function(mat) {
    let m = mat.length;
    let n = mat[0].length;
    let rowCount = new Array(m).fill(0);
    let colCount = new Array(n).fill(0);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 1) {
                rowCount[i]++;
                colCount[j]++;
            }
        }
    }
    let count = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (
                mat[i][j] === 1 &&
                rowCount[i] === 1 &&
                colCount[j] === 1
            ) {
                count++;
            }
        }
    }

    return count;
};
let mat = [[1,0,0],[0,0,1],[1,0,0]];
console.log("numSpecial:",numSpecial(mat));
