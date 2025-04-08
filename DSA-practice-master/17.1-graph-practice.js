// A -> B,C           //     A
// B -> A,E,G         //   /   \
// C -> A,D,E,F       //  B -E - C
// D -> C,F,G         //   \     | \
// E -> B,C           //    G -- D -F
// F -> C,D           //
// G -> B,D           //

class Graph {
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = new Set();
    }
    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]) this.addVertex(vertex1)
        if(!this.adjacencyList[vertex2]) this.addVertex(vertex2)
        
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }
    
    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex + ' -> '+ [...this.adjacencyList[vertex]])
        }
    }

    BFS(start){
        let visited = new Set();
        visited.add(start);
        let queue = [start];
        while(queue.length > 0) {
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
    DFS(start,visited = new Set()){
        if(visited.has(start)) return null;
        visited.add(start);
        console.log(start)
        for(let neighbor of this.adjacencyList[start]){
            if(!visited.has(neighbor)) this.DFS(neighbor,visited)
        }
    }
    FSP(start,end){
        const visited = new Set();
        visited.add(start)
        const queue = [[start]];
        while(queue.length > 0){
            const path = queue.shift();
            const node = path[path.length-1];
            if(node === end) return path;
            for(let neighbor of this.adjacencyList[node]){
                if(!visited.has(neighbor)){
                    visited.add(neighbor);
                    queue.push([...path,neighbor])
                }
            }
        }

    }
    FAP(start,end){
        const result = [];
        const queue = [[start]];
        while(queue.length > 0){
            const path = queue.shift();
            const node = path[path.length-1];
            if(node === end) result.push(path)
            for(let neighbor of this.adjacencyList[node]){
                if(!path.includes(neighbor)){
                    queue.push([...path,neighbor])
                }
            }
        }
        return result;
    }

}

const graph = new Graph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')
graph.addVertex('G')

graph.addEdge('A','B')
graph.addEdge('A','C')
graph.addEdge('B','E')
graph.addEdge('B','G')
graph.addEdge('C','D')
graph.addEdge('C','E')
graph.addEdge('C','F')
graph.addEdge('D','F')
graph.addEdge('D','G')
graph.addEdge('F','H')

console.log('--------------------------')
{
console.log(`       A`);
console.log(`    /     \\`);
console.log(`  B - E - C`);
console.log(`    \\        | \\`);
console.log(`        G - D - F - H`);
}
console.log('--------------------------')
graph.display()
console.log('--------------------------')
graph.BFS('A')
console.log('--------------------------')
graph.DFS('A')
console.log('--------------------------')
console.log(graph.FSP('A','H'))
console.log('--------------------------')
console.log(graph.FAP('A','H'))
console.log('--------------------------')
