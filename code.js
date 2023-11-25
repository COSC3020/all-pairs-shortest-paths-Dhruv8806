function allPairsShortestPaths(graph) {
    var numVertices = graph.length;
    var resultMatrix = Array(numVertices).fill().map(() => Array(numVertices).fill(Infinity));

    for (var i = 0; i < numVertices; i++) {
        for (var j = 0; j < numVertices; j++) {
            if (i !== j && graph[i][j] !== Infinity) {
                resultMatrix[i][j] = graph[i][j];
            }
        }
    }
    
    for (var k = 0; k < numVertices; k++) {
        for (var i = 0; i < numVertices; i++) {
            for (var j = 0; j < numVertices; j++) {
                if (resultMatrix[i][j] > resultMatrix[i][k] + resultMatrix[k][j]) {
                    resultMatrix[i][j] = resultMatrix[i][k] + resultMatrix[k][j];
                }
            }
        }
    }

    return resultMatrix;
}


// var testGraph = [
//     [0, 2, 5, 8],
//     [7, 0, 4, 6],
//     [9, 1, 0, 3],
//     [7, 9, 8, 0]
// ];


// var resultMatrix = allPairsShortestPaths(testGraph);
// console.log("Result Matrix:");
// console.log(resultMatrix);


/*
Sources Used:
ChatGPT - Used it to get help with test cases
https://www.youtube.com/watch?v=4NQ3HnhyNfQ&t=150s
*/
