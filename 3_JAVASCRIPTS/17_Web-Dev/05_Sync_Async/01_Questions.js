// syncronous (Blocking)-> it means code line by line excutes
// Each task wait for the previous task
// // examples
// console.log("A");
// console.log("B");
// console.log("C");

// Asyncronous Functions(Non-Blocking)->
// Taks likes Api call, setTimeout
// Each Task does not wait the previous task

// console.log("A");
// setTimeout(()=>{
//     console.log("B")
// },2000);
// console.log(Promise.resolve("true"));
// console.log("c");

// const promise = new Promise((resolve , reject)=>{
//     let success = true;
//     if(success){
//         resolve("true")
//     }else{
//         reject("false");
//     }
// });
// promise.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err)
// });

// Promise chaining
// Promise.resolve(1)
//   .then((res) => res + 1)
//   .then((res) => res + 1)
//   .then((res) => console.log(res));

// async / await -> always returns a Promise
// async function greet() {
//     console.log("Hello Sonu");
// }
// greet(); 

// async function sayBye() {
//     const res = await Promise.resolve("Data");
//     console.log(res)
    
// }
// sayBye();

// Error Handlings
// async function ErrorHandFunc() {
//     try {
//         const res = await Promise.reject("Error");
//         console.log(res);
//     } catch (error) {
//         console.log("Error:",error);
//     }
// }
// // call the functions
// ErrorHandFunc();

// Fetch Api
//  function fetchData() {
//     try {
//         fetch("https://jsonplaceholder.typicode.com/posts/1")
//         .then((res)=>res.json())
//         .then((data)=>console.log(data));
//     } catch (error) {
//         console.log("Error:",error);
//     }
    
// }
// // call the functions
// fetchData();

// async function fetchData() {
//     try {
//         const res = await fetch("https://jsonplaceholder.typicode.com/posts/1")
//         const data = await res.json();
//         console.log(data);
//     } catch (error) {
//         console.log("Error:",error);
//     }
    
// }
// // call the functions
// fetchData();



