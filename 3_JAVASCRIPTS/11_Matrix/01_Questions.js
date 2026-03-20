// function addMatrix(A, B) {
//   let result = [];

//   for (let i = 0; i < A.length; i++) {
//     result[i] = [];
//     for (let j = 0; j < A[0].length; j++) {
//       result[i][j] = A[i][j] + B[i][j];
//     }
//   }

//   return result;
// }
// let A = [[1, 2, 3]];
// let B = [[4, 5, 6]];

// console.log("A+B:", addMatrix(A, B));

function multiplyMatrix(A, B) {
  let result = Array.from({ length: A.length }, () =>
    Array(B[0].length).fill(0)
  );

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B[0].length; j++) {
      for (let k = 0; k < B.length; k++) {
        result[i][j] += A[i][k] * B[k][j];
      }
    }
  }

  return result;
}
let A = [[1, 2, 3]];
let B = [[4, 5, 6]];

console.log("A*B:", multiplyMatrix(A, B));

