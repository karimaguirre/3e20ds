class Grafo {
    constructor(o) {
        this.n = o
    }
    addVertex(v) {
        this.n[v] = 0
    }
    addEdge(e, f) {
        if (typeof (this.n[e] === "number")) {
            this.n[e] = []
        }
        this.n[e][f] = 1
    }


    toString() {
        let s = "\n"
        for (let i = 0; i < this.n.length; i++) {
            s += "\n"
            for (let j = 0; j < this.n.length; j++) {
                s += this.n[i][j];
            }
        }
        return s;
    }

    print() {
        console.log(this.toString())
    }

    removeEdge(i, j) {
        this.n[i][j] = 0
        removeEdges.print()
        console.log("Arco "+i +" - " +j+" removido")

    }
}
let removeEdges = new Grafo([
    [0,1,0,0],
    [0,0,1,0],
    [0,0,0,1],
    [0,1,0,0],])

removeEdges.print();

removeEdges.removeEdge(1,2);