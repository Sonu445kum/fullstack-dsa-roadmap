// // A promise in javascripts is an Object that reperesent the result of asyncronous functions

// // exmaples of promise
// let myPromise = new Promise((resolve,reject)=>{
//     let success = true;

//     if(success){
//         resolve("Task completed Sucessfully")
//     }else{
//         reject("Error in task")
//     }
// });

// // Consuming a promise
// myPromise.then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })

// // Promise Chaining
// fetchData()
// .then((data)=>{
//     return processData(data)
// })
// .then((processs)=>{
//     return saveData(processs)
// })
// .catch((error)=>{
//     console.log("error")
// })

// simple promise
// let myPromise = new Promise((resolve , reject)=>{
//     resolve("Successs")
// });

// myPromise.then((res)=>console.log(res)).catch((error)=>{
//     console.log(error)
// })

// With Delay
// const promise = new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve("Data Recived:")
//     },2000)
// })
// promise.then((res)=>console.log(res));

// Failure Case
// const promise = new Promise((resolve , reject)=>{
//     reject("Failed")
// })
// promise.catch((error)=>console.log(error))

// States of Promise

// A Promise has 3 states:

// Pending → waiting
// Fulfilled → success
// Rejected → failure

// State Flow
// const promise = new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve("success")
//     },1000)
// });
// promise.then((res)=>console.log(res));

// Initially → Pending
// After 1 sec → Fulfilled

// Rejected State
// const promise = new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         reject("failed")
//     },1000)
// });
// promise.catch((error)=>console.log(error));

// Example 3: Real-life Analogy
// Order placed → Pending
// Food delivered → Fulfilled
// Order cancelled → Rejected

// Creating a Promise
// new Promise((resolve , reject)=>{});

// const p = new Promise((resolve , reject)=>{
//     let success = true;
//     setTimeout(() => {
//         success ? resolve("ok") : reject("Failed")
//     }, 1000);
// })
// p.then((res)=>{
//     console.log(res)
// }).catch((error)=>{
//     console.log(error)
// })

// create a functions to check num is greter than or not

// function checkNumber(num){
//     return new Promise((resolve , reject)=>{
//        setTimeout(()=>{
//          if(num > 10){
//             resolve("Greater")
//         }else{
//             reject("Less")
//         }
//        },1000);
//     })
// }
// checkNumber(11).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })

// create a function to fetch data
// const fetchData =()=>{
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//             resolve("fetch Data")
//         },1000)
//     })
// }
// fetchData().then((data)=>{
//     console.log(data);
// })

// Consuming a Promise

// Using:

// .then() → success
// .catch() → error
// .finally() → always runs

// const p = new Promise((resolve, reject)=>{
//     let sucess = true;
//     setTimeout(()=>{
//         if(sucess){
//         resolve("successs")
//     }else{
//         reject("failed")
//     }
//     },1000)
// })

// // now using all
// p.then((res)=>{
//     console.log(res)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("Always runs")
// })

// Promise Chaining
Promise.resolve(2)
.then((res)=>res*2)
.then((res)=>res*3)
.then((res)=>console.log(res));

Promise.resolve(16)
.then((num)=>num/2)
.then((num)=>num/2)
.then((num)=>num/2)
.then((res)=>console.log(res));