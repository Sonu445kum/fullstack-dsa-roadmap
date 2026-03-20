function addMatrix(A, B) {
  let result = [];

  for (let i = 0; i < A.length; i++) {
    result[i] = [];
    for (let j = 0; j < A[0].length; j++) {
      result[i][j] = A[i][j] + B[i][j];
    }
  }

  return result;
}
let A = [[1, 2, 3]];
let B = [[4, 5, 6]];

console.log("A+B:", addMatrix(A, B));
