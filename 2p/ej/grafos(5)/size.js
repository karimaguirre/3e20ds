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

    fill() {
        for (let i = 0; i < this.n.length; i++) {
            for (let j = 0; j < this.n.length; j++) {
                if (this.n[i][j] === undefined)
                    this.n[i][j] = 0;
            }
        }
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

    size() {//order
        console.log(this.n.length)
    }
}
let sizeX= new Grafo([])
sizeX.addVertex(0)
sizeX.addVertex(1)
sizeX.addVertex(2)

sizeX.addEdge(0,1)
sizeX.addEdge(0,2)
sizeX.addEdge(1,2)
sizeX.addEdge(2,0)

sizeX.fill()
sizeX.print()
sizeX.size()
