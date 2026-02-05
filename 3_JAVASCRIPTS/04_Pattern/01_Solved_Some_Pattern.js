// 1-> Star Square Problems
// * * * *
// * * * *
// * * * *
// * * * *
// let n=5;
// for(let i=1; i<=n; i++){
//     let row = "";
//     for(let j=0; j<=n; j++){
//         row = row + " * "
//     }
//     console.log(row);
// }

// 2->Right Anlged Triangle
// *
// * *
// * * *
// * * * *

// let n=5;
// for(let i=1; i<=n; i++){
//     let row="";
//     for(let j=1; j<=i; j++){
//         row+=" * "
//     };
//     console.log(row);
// }

// 3->Inverted Rigth Triangle
// * * * *
// * * *
// * *
// *

// let n=5;
// for(let i=n; i>=1; i--){
//     let row="";
//     for(let j=1; j<=i; j++){
//         row+=" * "
//     };
//     console.log(row);
// }

// 4-> Number Triangle
// 1
// 1 2
// 1 2 3
// 1 2 3 4

// let n=4;
// for(let i=1; i<=n; i++){
//     let row ="";
//     for(let j=1; j<=i; j++){
//         row+=j+" ";
//     }
//     console.log(row);
// }

// 5->Same Numer Pattern
// 1
// 2 2
// 3 3 3
// 4 4 4 4

// let n=4;
// for(let i=1; i<=n; i++){
//     let row ="";
//     for(let j=1; j<=i; j++){
//         row+=i+" ";
//     }
//     console.log(row);
// }

// 6-> Star Pyramid
//    *
//   * *
//  * * *
// * * * *
// let n = 5;
// for(let i=1; i<=n; i++){
//     let row = "";
//     // Spaces
//     for(let s=1; s<=n-i; s++){
//         row += " ";
//     }
//     // Stars
//     for(let j=1; j<=i; j++){
//         row += "* ";
//     }
//     console.log(row);
// }

// 7->Inverted Pyramid
// * * * *
//  * * *
//   * *
//    *
// let n=5;
// for(let i=n; i>=1; i--){
//     let row="";
//     // print spaces
//     for(let s=1; s<=n-i; s++){
//         row+=" ";
//     };
//     // print start with reverse order
//     for(let j=1; j<=i; j++){
//         row+="* "
//     };
//     console.log(row)
// }

// 8->Hollow Square
// * * * *
// *     *
// *     *
// * * * *
// let row=3;
// let cols=7;
// for(let i=1; i<=row; i++){
//     let line="";
//     // print spaces if j===0,i===0
//     for(let j=1; j<=cols; j++){
//         if(i===1 || i===row || j===1 || j===cols){
//             line+="*"
//         }else{
//             line+=" "
//         }
//     };
//     console.log(line);
// }

// 9-> Hollow Right Triangle
// *
// * *
// *   *
// *     *
// * * * * *

// let n=5;
// for(let i=1; i<=n; i++){
//     let lines="";
//     for(let j=1; j<=i; j++){
//         if(i===j || i===n || j ===1){
//             lines+="*"
//         }else{
//             lines+=" "
//         }
//     }
//     console.log(lines)
// }

// 10-> Hollow Inverted Right Triangle
// * * * * *
// *   *
// * *
// *

// let n=5;
// for(let i=n; i>=1; i--){
//     let lines="";
//     for(let j = 1; j <= i; j++){
//         if(i === j || i === n || j === 1){
//             lines+="*"
//         }else{
//             lines+=" "
//         }
//     }
//     console.log(lines)
// }

// 11-> Hollow Pyramid
//     *
//    * *
//   *   *
//  *     *
// * * * * *


// let n = 5;
// for (let i = 1; i <= n; i++) {
//     let line = "";
//     for (let j = 1; j <= 2 * n - 1; j++) {
//         if (j === (n - i + 1) || j === (n + i - 1) || i === n){
//             line += "*";
//         }else{
//             line += " ";
//         }
//     }
//     console.log(line);
// }




