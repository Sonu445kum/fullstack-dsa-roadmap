// Given the root of a binary tree, return the preorder traversal of its nodes' values.
// Example 1:

// Input: root = [1,null,2,3]

// Output: [1,2,3]

// var preorderTraversal = function(root) {
//     if (!root) return [];
    
//     let stack = [root];
//     let result = [];
    
//     while (stack.length > 0) {
//         let node = stack.pop();
//         result.push(node.val);
        
//         if (node.right) stack.push(node.right);
//         if (node.left) stack.push(node.left);
//     }
    
//     return result;
// };

// class TreeNode {
//     constructor(val, left = null, right = null) {
//         this.val = val;
//         this.left = left;
//         this.right = right;
//     }
// }

// let root = new TreeNode(
//     1,
//     null,
//     new TreeNode(
//         2,
//         new TreeNode(3),
//         null
//     )
// );

// console.log(preorderTraversal(root));

// var binaryTreePaths = function(root) {
//     let result = [];
    
//     function dfs(node, path) {
//         if (!node) return;
        
//         // Add current node to path
//         path += node.val;
        
//         // If leaf node → save path
//         if (!node.left && !node.right) {
//             result.push(path);
//             return;
//         }
        
//         // Continue DFS
//         path += "->";
//         dfs(node.left, path);
//         dfs(node.right, path);
//     }
    
//     dfs(root, "");
//     return result;
// };
// class TreeNode {
//     constructor(val, left = null, right = null) {
//         this.val = val;
//         this.left = left;
//         this.right = right;
//     }
// }

// let root = new TreeNode(
//     1,
//     null,
//     new TreeNode(
//         2,
//         new TreeNode(3),
//         null
//     )
// );
// console.log(binaryTreePaths(root))

// class Stack {
//   constructor(){
//     this.items = [];
//   }

//   push(element){
//     this.items.push(element);
//   }

//   pop(){
//     if(this.isEmpty()){
//         return "Stack is empty";
//     }
//     return this.items.pop();
//   }

//   peek(){
//     return this.items[this.items.length - 1];
//   }

//   isEmpty(){
//     return this.items.length === 0;
//   }

//   size(){
//     return this.items.length;
//   }
// }

// let stack = new Stack();

// stack.push(10);
// stack.push(20);
// stack.push(30);

// console.log(stack.peek()); // 30
// console.log(stack.pop());  // 30
// console.log(stack.size()); // 2

// Stack Using Array (Most Used in Interviews)
let stack = [];

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.pop()); // 30
console.log(stack[stack.length-1]); // peek