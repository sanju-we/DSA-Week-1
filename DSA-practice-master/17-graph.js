




//=================================================================== Graph =============================================================================

// Type of representation of Graphes

adjacencyMatrix = [   //      A   B   C
    [0 , 1 , 0],      //  A  [0 , 1 , 0],   
    [1 , 0,  1],      //  B  [0 , 1 , 0],   
    [0 , 1 , 0],      //  C  [0 , 1 , 0],   
]

// console.log(adjacencyMatrix[0][1])
// console.log(adjacencyMatrix[1][0])
// console.log(adjacencyMatrix[1][2])
// console.log(adjacencyMatrix[2][1])

// ```````````````````````````````````````````

adjacencyList = {
    'A': 'B',
    'B': 'A,B',
    'C': 'B',
}

// console.log(adjacencyList['A'])
// console.log(adjacencyList['B'])
// console.log(adjacencyList['C'])

// ====================================================== Concept ============================================================

class Graph {
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = new Set();
    }
    addEdge(vertex1, vertex2){
        if(!this.adjacencyList[vertex1]) this.addVertex(vertex1);
        if(!this.adjacencyList[vertex2]) this.addVertex(vertex2);

        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex + ' -> ' + [...this.adjacencyList[vertex]])
        }
    }

    hasEdge(vertex1,vertex2){
        return this.adjacencyList[vertex1].has(vertex2) &&
                this.adjacencyList[vertex2].has(vertex1)
    }

    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex]) return;
        for(let neighbour of this.adjacencyList[vertex]){
            this.removeEdge(vertex, neighbour);
        }
        delete this.adjacencyList[vertex];
    }

    //  A -> B , C , D
    //  B -> A , C , F
    //  C -> A , B 
    //  D -> F , A
    //  E -> F 
    //  F -> B , E , D
    //  A

    DFS(start,visited = new Set()){
        if(visited.has(start)) return null;
        visited.add(start);
        console.log(start);
        for(let neighbor of this.adjacencyList[start]){ //B
            if(!visited.has(neighbor)) this.DFS(neighbor,visited);
        }
    }

    BFS(start){
        let visited = new Set();
        visited.add(start)
        let queue = [start];
        while(queue.length > 0){
            let node = queue.shift();
            console.log(node);
            for(let neighbor of this.adjacencyList[node]){
                if(!visited.has(neighbor)){
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
    }

    findShortestPath(){
        
    }
}




// const graph = new Graph();
// graph.addVertex('A')
// graph.addVertex('B')
// graph.addVertex('C')

// graph.addEdge('A','B')
// graph.addEdge('B','C')

// graph.display()
// console.log(graph.hasEdge('B','C'))
// console.log(graph.hasEdge('A','C'))

// graph.removeEdge('A','B')
// graph.display()

// graph.removeVertex('A')
// graph.display()

// console.log(graph)

//////        B
//////       / \
//////      A   C

//=====================================================================

//DFS -- practice;

const newGraph = new Graph();

newGraph.addVertex("A");
newGraph.addVertex("B");
newGraph.addVertex("C");
newGraph.addVertex("D");
newGraph.addVertex("E");
newGraph.addVertex("F");

newGraph.addEdge("A", "B");
newGraph.addEdge("C", "A");
newGraph.addEdge("C", "B");
newGraph.addEdge("B", "F");
newGraph.addEdge("E", "F");
newGraph.addEdge("F", "D");
newGraph.addEdge("A", "D");


newGraph.display()
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
newGraph.DFS('A');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
newGraph.BFS('A');
// console.log(newGraph)