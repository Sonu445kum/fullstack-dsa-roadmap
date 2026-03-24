// function dfs(node, visited) {
//     if (!node || visited.has(node)) return;

//     visited.add(node);

//     for (let neighbor of node.neighbors) {
//         dfs(neighbor, visited);
//     }
// }

// Graph using Adjacency List
const graph = {
    0: [1, 2],
    1: [3, 4],
    2: [],
    3: [],
    4: []
};

function dfs(node, visited = new Set()) {
    // Mark visited
    visited.add(node);

    // Process node
    console.log(node);

    // Visit neighbors
    for (let neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
            dfs(neighbor, visited);
        }
    }
}

// Run DFS from node 0
dfs(0);