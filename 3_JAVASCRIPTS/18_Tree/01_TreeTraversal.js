// class TreeNode {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }

// //  Create Tree
// //        1
// //       / \
// //      2   3
// //     / \
// //    4   5

// let root = new TreeNode(1);
// root.left = new TreeNode(2);
// root.right = new TreeNode(3);
// root.left.left = new TreeNode(4);
// root.left.right = new TreeNode(5);

// //  Preorder: Root → Left → Right
// function preorder(root) {
//     if (!root) return;
//     process.stdout.write(root.val + " ");
//     preorder(root.left);
//     preorder(root.right);
// }

// //  Inorder: Left → Root → Right
// function inorder(root) {
//     if (!root) return;
//     inorder(root.left);
//     process.stdout.write(root.val + " ");
//     inorder(root.right);
// }

// // Postorder: Left → Right → Root
// function postorder(root) {
//     if (!root) return;
//     postorder(root.left);
//     postorder(root.right);
//     process.stdout.write(root.val + " ");
// }

// //  Display Output
// console.log("Preorder:");
// preorder(root);

// console.log("\nInorder:");
// inorder(root);

// console.log("\nPostorder:");
// postorder(root);

// Given the root of a binary tree, return the inorder traversal of its nodes' values.

 

// Example 1:

// Input: root = [1,null,2,3]

// Output: [1,3,2]

// Explanation:
// var inorderTraversal = function(root){
//     let result = [];
//     function dfs(node){
//         // base case
//         if(!node) return;
//         dfs(node.left);
//         result.push(node.val);
//         dfs(node.right);
//     }
//     dfs(root);
//     return result;
// }
// let root = [1,null,2,3];
// console.log("inorderTraversal:",inorderTraversal(root));

// var isSameTree = function(p, q) {
//     if (!p && !q) return true;
//     if (!p || !q) return false;
//     if (p.val !== q.val) return false;
//     return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
// };