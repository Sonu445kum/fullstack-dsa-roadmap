// function test(...args) {
//   console.log(args);
// }
// test(1, 2, 3); // [1,2,3]

// const arr = [1, 2, 3];
// console.log(...arr); // 1,2,3

// const arr = [1, 2, 3];
// const newArr = [...arr];
// newArr.push(4);

// console.log(arr, newArr); // [1,2,3] [1,2,3,4]

// function sum(a, b, c) {
//   return a + b + c;
// }

// console.log(sum(...[1, 2, 3])); // 6

// const [a, ...b] = [10, 20, 30, 40];
// console.log(a, b); // 10 [10,20,30,40]

// const obj = { a: 1, b: 2 };
// const newObj = { ...obj, a: 5 };

// console.log(newObj); // {a:5 , b:2}

// const obj = { a: 1, b: 2 };
// const copy = obj; // {a:1 , b=2}

// copy.a = 10; // {a:10}

// console.log(obj.a); // 10 ->because still share same refrence to that memory

// const obj = { a: 1, b: 2 };
// const copy = { ...obj };

// copy.a = 10;

// console.log(obj.a); // 1 ->Because its created a shallow copy And Create New Object that's why it gives me 1 output

// function test(a, ...b, c) {
//   return b;
// } it is not valid

// function test(...args) {
//   return args.length;
// }

// console.log(test()); // 0

// const arr1 = [1, 2];
// const arr2 = [...arr1, 3, 4];

// console.log(arr2); // [1,2,3,4];

// const str = "hello";
// console.log([...str]); // ['h','e','l','l','o'] it converts into the array of characters;

// const obj1 = { a: 1 };
// const obj2 = { b: 2 };

// const result = { obj1, obj2 };

// console.log(result); // {obj1 :{a:1} , obj2 :{b:2}};

// const result = { ...{ a: 1 }, ...{ a: 2 } };
// console.log(result); // {a:2}

// function test(...args) {
//   args[0] = 100;
//   console.log(args);
// }

// test(1, 2, 3); // [100 , 2,3];

// function test(a, b, ...rest) {
//   console.log(rest);
// }
// test(1, 2); // []

// const arr = [1, 2, 3];
// const result = [0, ...arr, 4];

// console.log(result); // [0,1,2,3,4]

// const arr = [1, 2];
// const result = [...arr, ...[3, 4]];

// console.log(result); // [1,2,3,4]

// const obj = { a: 1, b: 2 };
// const result = { ...obj, b: undefined };

// console.log(result); // {a:1,b:undefined}

// function test(...args) {
//   console.log(typeof args);
// }

// test(1, 2, 3); // ObJect



