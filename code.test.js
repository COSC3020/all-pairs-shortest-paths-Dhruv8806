const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js').toString());


var graph1 = [
    [0, 2, 5, 8],
    [7, 0, 4, 6],
    [9, 1, 0, 3],
    [7, 9, 8, 0]
];

var expected1 = [
    [0, 2, 5, 3],
    [1, 0, 4, 2],
    [3, 1, 0, 3],
    [1, 3, 2, 0]
];


var graph2 = [
    [0, 1, 3],
    [2, 0, 5],
    [7, 4, 0]
];

var expected2 = [
    [0, 1, 3],
    [2, 0, 5],
    [4, 4, 0]
];

var graph3 = [
    [0, 5, 9],
    [2, 0, 7],
    [6, 4, 0]
];

var expected3 = [
    [0, 3, 6],
    [2, 0, 7],
    [3, 1, 0]
];

var graph4 = [
    [0, 1, 3],
    [2, 0, Infinity],
    [Infinity, 4, Infinity]
];

var expected4 = [
    [0, 1, 3],
    [2, 0, 4],
    [6, 4, 0]
];

assert(JSON.stringify(allPairsShortestPaths(graph1)) !== JSON.stringify(expected1));
assert(JSON.stringify(allPairsShortestPaths(graph2)) !== JSON.stringify(expected2));
assert(JSON.stringify(allPairsShortestPaths(graph3)) !== JSON.stringify(expected3));
assert(JSON.stringify(allPairsShortestPaths(graph4)) !== JSON.stringify(expected4));

