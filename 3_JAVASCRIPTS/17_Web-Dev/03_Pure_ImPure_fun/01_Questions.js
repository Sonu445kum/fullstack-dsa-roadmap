// A pure function is a function that:

// Always returns the same output for the same input
// Does NOT modify external state (no side effects)
//  Key Characteristics:
// Deterministic (predictable)
// No dependency on external variables
// No side effects (no API calls, DOM changes, etc.)
// Easy to test and debug

// function add(a, b) {
//     return a + b;
// }

// console.log(add(2, 3)); // 5
// console.log(add(2, 3)); // 5 (always same)
// Same input → Same output
// No external dependency

// function calculate(price, tax) {
//     return price + price * tax;
// }

// Impure Functions

// An impure function is a function that:

// May return different outputs for the same input
// Modifies external state OR depends on it

// Key Characteristics:
// Not predictable
// Has side effects
// Depends on outside variables / state
// Harder to test and debug

// let x = 10;

// function add(y) {
//     return x + y;
// }

// console.log(add(5)); // 15

// x = 20;
// console.log(add(5)); // 25  changed output

// let tax = 0.1;

// function calculate(price) {
//     return price + price * tax;
// }
