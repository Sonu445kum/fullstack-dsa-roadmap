// Level 2: Intermediate (21–40)
// Function to flatten nested array
function flattenNestedArray(arr){
    let newArr = arr.flat(Infinity);
    newArr.sort((a,b)=>a-b);
    return newArr;

}
let arr = [1,4,[2,3],5,6,[0,8]];
console.log("Flatten Nested Array:",flattenNestedArray(arr));
// Function to debounce a function
// Function to throttle a function
// Function to implement map() manually
// Function to implement filter() manually
// Function to implement reduce() manually
// Function to deep clone an object
// Function to check if two objects are equal
// Function to group array objects by key
// Function to sort array of objects by property
// Function to find frequency of elements in array
// Function to remove falsy values
// Function to chunk array into smaller arrays
// Function to find intersection of two arrays
// Function to find union of two arrays
// Function to find difference of two arrays
// Function to shuffle array (Fisher-Yates)
// Function to convert array to object
// Function to invert object keys and values
// Function to find missing number in array

// Level 3: Functions Deep Dive (41–60)
// Write a closure example
// Counter using closure
// Private variable using closure
// Function currying example
// Infinite currying (sum(1)(2)(3)...)
// Function composition
// Pipe function implementation
// Memoization function
// Once function (runs only once)
// Function to cache results
// Polyfill for bind()
// Polyfill for call()
// Polyfill for apply()
// Function to detect if argument is function
// Function to convert arguments object to array
// Variadic sum function
// Function overloading simulation
// Higher-order function example
// Function returning function example
// Function to delay execution

// Level 4: Async Functions (61–75)

// Function using setTimeout
// Function using setInterval
// Custom sleep(ms) function
// Convert callback to Promise
// Promise chaining function
// Async/await example
// Parallel API calls using Promise.all
// Sequential API calls
// Retry failed promise function
// Timeout wrapper for promise
// Function to limit concurrency
// Function queue implementation
// Event loop demonstration function
// Function to cancel promise
// Debounce with async support

// Level 5: Advanced (76–90)
// Function to deep freeze object
// Function to detect circular reference
// Function to flatten object
// Function to unflatten object
// Function to generate unique ID
// Function to implement LRU cache
// Function to create event emitter
// Function to implement pub-sub system
// Function to convert object to query string
// Function to parse query string
// Function to validate email
// Function to validate password strength
// Function to implement retry with exponential backoff
// Function to merge deeply nested objects
// Function to track function execution time