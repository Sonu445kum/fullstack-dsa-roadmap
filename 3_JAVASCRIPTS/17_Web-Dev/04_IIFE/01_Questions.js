// What is an IIFE?
// An IIFE is a function in JavaScript that:
// Is defined as an expression
// Is executed immediately after creation
// In simple words:
// “Create a function and run it instantly.”

// (function() {
//     console.log("I run immediately!");
// })();

// ( function() { ... } )();
// () → converts function into an expression
// () → calls the function immediately

// Why Use IIFE?
// 1. Avoid Global Scope Pollution

// Variables inside IIFE don’t leak outside.

// (function() {
//     let secret = "hidden";
//     console.log(secret);
// })();

// // console.log(secret);  Error (not accessible)

// Create Private Variables (Encapsulation)
const counter = (function() {
    let count = 0;

    return function() {
        count++;
        console.log(count);
    };
})();

counter(); // 1
counter(); // 2

//  count is private and cannot be accessed directly.