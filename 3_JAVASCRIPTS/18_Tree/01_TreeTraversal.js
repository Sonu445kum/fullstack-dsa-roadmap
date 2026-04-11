class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

//  Create Tree
//        1
//       / \
//      2   3
//     / \
//    4   5

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

//  Preorder: Root → Left → Right
function preorder(root) {
    if (!root) return;
    process.stdout.write(root.val + " ");
    preorder(root.left);
    preorder(root.right);
}

//  Inorder: Left → Root → Right
function inorder(root) {
    if (!root) return;
    inorder(root.left);
    process.stdout.write(root.val + " ");
    inorder(root.right);
}

// Postorder: Left → Right → Root
function postorder(root) {
    if (!root) return;
    postorder(root.left);
    postorder(root.right);
    process.stdout.write(root.val + " ");
}

//  Display Output
console.log("Preorder:");
preorder(root);

console.log("\nInorder:");
inorder(root);

console.log("\nPostorder:");
postorder(root);