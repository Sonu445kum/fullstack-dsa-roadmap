// this method
// const user = {
//     name :"Sonu",
//     greet: function(){
//         console.log(this.name);
//     }
// }
// user.greet(); // sonu

// with call
function greet(){
    console.log("Hello",this.name);
}
// create an object
const user = {name :"monu"};
greet.call(user); // Hello monu