// function dfs(node, visited) {
//     if (!node || visited.has(node)) return;

//     visited.add(node);

//     for (let neighbor of node.neighbors) {
//         dfs(neighbor, visited);
//     }
// }

// Graph using Adjacency List
// const graph = {
//     0: [1, 2],
//     1: [3, 4],
//     2: [],
//     3: [],
//     4: []
// };

// function dfs(node, visited = new Set()) {
//     // Mark visited
//     visited.add(node);

//     // Process node
//     console.log(node);

//     // Visit neighbors
//     for (let neighbor of graph[node]) {
//         if (!visited.has(neighbor)) {
//             dfs(neighbor, visited);
//         }
//     }
// }

// // Run DFS from node 0
// dfs(0);

// const graph = {
//     0: [1, 2],
//     1: [3, 4],
//     2: [],
//     3: [],
//     4: []
// };

// function dfsIterative(start) {
//     let stack = [start];
//     let visited = new Set();

//     while (stack.length > 0) {
//         let node = stack.pop();

//         if (!visited.has(node)) {
//             console.log(node);
//             visited.add(node);

//             // Push neighbors (reverse for same order as recursion)
//             for (let i = graph[node].length - 1; i >= 0; i--) {
//                 stack.push(graph[node][i]);
//             }
//         }
//     }
// }

// dfsIterative(0);