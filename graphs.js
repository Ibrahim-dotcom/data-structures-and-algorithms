class UndirectedGraph{
    constructor(){
        this.edges = {};
    }

    addVertex(vertex){
        this.edges[vertex] = {};
    }

    addEdge(vertex1, vertex2, weight=0){
        this.edges[vertex1][vertex2] = weight;
        this.edges[vertex2][vertex1] = weight;
    }
    removeEdge(vertex1, vertex2){
        if(this.edges[vertex1] && this.edges[vertex1][vertex2] != undefined)
            delete this.edges[vertex1][vertex2];
        if (this.edges[vertex2] && this.edges[vertex2][vertex1] != undefined)
            delete this.edges[vertex2][vertex1];

    }

    removeVertex(vertex){
        for (const neighbour in this.edges[vertex]) {
             this.removeEdge(neighbour ,vertex);
        }
        delete this.edges[vertex];
    }

}

class DirectedGraph{
    constructor(){
        this.edges = {}
    }

    addVertex(vertex){
        this.edges[vertex] = {};
    }

    addEdge(vertex1, vertex2, weight = 0){
        this.edges[vertex1][vertex2] = weight;
    }

    removeEdge(origVertex, destVertex){
        if (this.edges[origVertex] && this.edges[origVertex][destVertex] != undefined){
            delete this.edges[origVertex][destVertex];
        }
    }

    removeVertex(vertex){
        for(const neighbour in this.edges[vertex]){
            this.removeEdge(neighbour, vertex);
        }
        delete this.edges[vertex];
    }
}
let graph1 = new DirectedGraph();
graph1.addVertex(1);
graph1.addVertex(2);
graph1.addVertex(3);
graph1.addVertex(4);
graph1.addEdge(1,2,1)
graph1.addVertex(5);

graph1.addEdge(2,3,8)
graph1.addEdge(3,4,10)
graph1.addEdge(4,5,100)
graph1.addEdge(1,5,88)

console.log(graph1);