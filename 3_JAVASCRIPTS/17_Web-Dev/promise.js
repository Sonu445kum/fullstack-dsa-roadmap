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
// Promise.resolve(2)
// .then((res)=>res*2)
// .then((res)=>res*3)
// .then((res)=>console.log(res));

// Promise.resolve(16)
// .then((num)=>num/2)
// .then((num)=>num/2)
// .then((num)=>num/2)
// .then((res)=>console.log(res));

// fetch user
// fetchUser().then((user)=>fetchOrder(user.id))
// .then((orders)=>console.log(orders));

// Promise.resolve("A")
// .then((s)=> s + "B")
// .then((s)=> s + "C")
// .then((res)=>console.log(res));

// Error Handling
// Promise.reject("error")
// .catch((error)=>console.log(error))

// throw inside then
// Promise.resolve()
// .then(()=>{
//     throw new Error("Something has Borken")
// }).catch((err)=>{
//     console.log(err.message)
// })

// Chain error
// Promise.resolve(10)
// .then((num)=>num/0)
// .then((res)=>console.log(res))
// .catch(err => console.log("Handled"));

// Proimse Methods
// Promise.all()
// Success
// Promise.all([
//     Promise.resolve(1),
//     Promise.resolve(3)
// ]).then((res)=>console.log(res));

// Failed
// Promise.all([
//     Promise.resolve(1),
//     Promise.reject("failed")
// ]).catch(console.log)

// Promise.all([
//     fetch("https://jsonplaceholder.typicode.com/posts"),
//     fetch("https://jsonplaceholder.typicode.com/users")
// ])
// .then((responses) => Promise.all(responses.map(res => res.json())))
// .then((data) => console.log(data));

// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then((res)=>res.json())
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err))

// const getPost = async ()=>{
//     return  await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((res)=>res.json());
// }
// getPost().then((data)=>console.log(data))

// Promise.race([
//     new Promise(resolve=>setTimeout(()=>resolve("First"),200)),
//     new Promise(resolve=>setTimeout(()=>resolve("Second"),200)),
// ]).then((res)=>console.log(res))

// Promise.race([
//   Promise.reject("Fail"),
//   Promise.resolve("Success")
// ]).catch(console.log);

// Promise.allSettled()
// Promise.allSettled([
//     Promise.resolve("sucess"),
//     Promise.reject("failed")
// ]).then(console.log)


// Promise.any([
//   Promise.reject("Fail"),
//   Promise.resolve("Success")
// ]).then(console.log);

// Promise.any([
//   Promise.reject("A"),
//   Promise.reject("B")
// ]).catch(console.log);

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({
//     title: "Hello",
//     body: "World",
//     userId: 1
//   })
// })
// .then(res => res.json())
// .then(data => console.log(data));

// const getData =  async ()=>{
//    try {
//     await fetch("https://jsonplaceholder.typicode.com/posts/1")
//         .then((res)=>res.json())
//         .then((data)=>console.log(data))
//    } catch (error) {
//         console.log(error)
//    }
// }
// getData();

// function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data received");
//     }, 2000);
//   });
// }

// getData().then((res) => console.log(res));

// function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("Error occurred");
//     }, 2000);
//   });
// }

// getData()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Done waiting");
    }, ms);
  });
}

delay(1000).then((res) => console.log(res));