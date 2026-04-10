// 👉 Definition

// A callback function is a function that is passed as an argument to another function and is executed later.

// 👉 Why callbacks exist?

// JavaScript is asynchronous, so callbacks help handle:

// API calls
// Timers
// Events

// function greet(name){
//     console.log("Hello:",name)
// };

// function processUserInput(callback){ // here callback are replace the greet functions and takes argument name
//     const name = "Sonu";
//     callback(name);
// }
// // call the functions that is processUserInput()
// processUserInput(greet); // here greet is callback functions

// Example 2 (Async Callback)
// setTimeout(()=>{
//     console.log("Hello Sonu");
// },2000);
//  functions runs after the delay ->callback

// Callbacks can lead to Callback Hell
// dosomething = ()=>{
//     dosomethingElse = ()=>{
//         dosomethingElseOther = ()=>{
//             console.log("Do something here..!!")
//         }
//     }
// }
// dosomething()(); // this is callback hell

// Solution → Promises / Async-Await


// Write a function that takes a name and a callback, and prints:
// function display(name , callback){
//     console.log("Hello",name);
//     callback();
// }
// function sayBye(){
//     console.log("Bye")
// }
// display("sonu",sayBye)

// Create a function calculate(a, b, callback) that returns result using callback.
// function calculate(a,b,callback){
//     return callback(a,b);
// }
// function add(a,b){
//     return a+b;
// }
// const res = calculate(2,3,add);
// console.log("Res:",res)

// Even/Odd Checker
// Pass a number and a callback that prints whether it's even or odd.
// function EvenOddChecker(num , callback){
//     return callback(num);
// }
// function isEvenOrOdd(num){
//     if(num % 2 === 0){
//         console.log(num,"Even");
//     }else{
//         console.log(num,"Odd");
//     }
// }
// // call the functions
// EvenOddChecker(20,isEvenOrOdd);

// Custom Map Function
// Implement your own map using callback.

// const res = customMap([1,2,3],num=>num*2);
// console.log("Res:",res);


// Higher Order Functions (HOF)
// 👉 Definition

// A Higher Order Function is a function that:

// Takes another function as input
// OR returns a function

// function operations(a,b,operate){
//     return operate(a,b);
// }
// function operate(a,b){
//     return a+b;
// };
// console.log(operations(2,3,operate))

// function multiply(factor){
//     return function(num){
//         return num * factor;
//     }
// }
// const double = multiply(2);
// console.log("Result:",double(5));

const arr = [1,2,3,4,5];
// map;->HOc
// const res = arr.map((num)=>num*2);
// console.log("Result:",res);

// filter ->HOC
// const even = arr.filter((num)=>num%2 === 0);
// console.log("Even:",even);

// forEach ->Hoc
// const odd = arr.filter((num)=>num%2 !==0);
// console.log("Odd:",odd);