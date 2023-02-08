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