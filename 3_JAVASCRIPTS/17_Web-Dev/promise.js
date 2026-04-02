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