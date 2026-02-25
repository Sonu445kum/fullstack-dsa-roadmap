// Given the root of a binary tree, return the preorder traversal of its nodes' values.
// Example 1:

// Input: root = [1,null,2,3]

// Output: [1,2,3]

var preorderTraversal = function(root) {
    if (!root) return [];
    
    let stack = [root];
    let result = [];
    
    while (stack.length > 0) {
        let node = stack.pop();
        result.push(node.val);
        
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
    
    return result;
};

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

let root = new TreeNode(
    1,
    null,
    new TreeNode(
        2,
        new TreeNode(3),
        null
    )
);

console.log(preorderTraversal(root));