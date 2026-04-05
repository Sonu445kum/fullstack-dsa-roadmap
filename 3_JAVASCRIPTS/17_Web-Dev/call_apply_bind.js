// this method
// const user = {
//     name :"Sonu",
//     greet: function(){
//         console.log(this.name);
//     }
// }
// user.greet(); // sonu

// with call
// function greet(){
//     console.log("Hello",this.name);
// }
// // create an object
// const user = {name :"monu"};
// greet.call(user); // Hello monu

// with argurment and use call() methods
// function greet(age,city){
//     console.log("Hello",this.name ,age , city);
// }
// const user = {name:"Rahul"};
// // now using call()
// greet.call(user , 22 , "Delhi");

// with apply methods
// function applyFunc(){
//     console.log("Hello",this.name , this.address);
// }

// const user = {name :"jai Shree Ram" , address :"Gurugaon"};
// // now using apply methods
// applyFunc.apply(user);

// with Apply methods and aerguments
// function message(age,city,code){
//     console.log("Hello :",this.name , age , city ,code);
// }
// const person = {name:"raju"};
// message.apply(person,  [25, "Delhi","12002"]);

// const person1 = {
//     name :"Sonu",
//     greet :function(){
//         console.log("Hello" , this.name);
//     }
// }
// const person2 = {name:"Rahul"};
// const newFunc = person1.greet.bind(person2);
// newFunc();

// const person1 = {
//     name :"Sonu",
//     greet :function(){
//         console.log("Hello" , this.name);
//     }
// }
// const newFunc = person1.greet.bind(person1);
// newFunc();

// "use strict";
// function greet() {
//   console.log(this);
// }

// greet.call(null); // null

// "use strict";
// function greet() {
//   console.log(this);
// }

// greet.call(undefined); // return global object

// "use strict";
// function greet() {
//   console.log(this);
// }

// greet.call(23); // undefined

// function multiply(a, b) {
//   return a * b;
// }

// const double = multiply.bind(null, 2); // null set this
// const double= function(b){
//     return multiply(2 , b);
// }

// console.log(double(5)); // 10

// bind(null, 2)
// bind({}, 2)
// bind(undefined, 2)

//  All behave the same here

// function Person(name) {
//   this.name = name;
// }

// const Bound = Person.bind({});
// const p = new Bound("Sonu");

// console.log(p.name);

// const user = {
//   name: "Sonu",
//   greet: function () {
//     console.log(this.name);
//   }
// };

// setTimeout(user.greet.bind(user), 1000);

// function greet() {
//   console.log(this.name);
// }

// function wrapper() {
//   greet();
// }

// wrapper.call({ name: "Sonu" });

function greet() {
  console.log(this.name);
}

const user1 = { name: "Sonu" };
const user2 = { name: "Rahul" };

const fn = greet.bind(user1).bind(user2);
fn();