class Enlazada{
    constructor() {
        this.start=null;
        this.tamaño=0;
    }
    AgregarDato(dato){
        let nodoNuevo= new Nodo(dato,null);
        if (!this.start){
            this.start=nodoNuevo;
        }
        else{
            let actual=this.start;
            while (actual.next){
                actual=actual.next;
            }
            actual.next=nodoNuevo;
        }
        this.tamaño ++;
    }
    imp(){
        let actual=this.start;
        let resultado="";
        if(!this.tamaño){
            return null
        }
        for(let i=0;i<this.tamaño; i++){
            resultado=resultado + actual.dato + "->";
            actual=actual.next;
        }
        return resultado
    }
}

class Grafo{
    constructor(o) {
        this.n=o
    }
    addVertex(v){
        this.n[v]=0
    }
    addEdge(e,f){
        if(typeof(this.n[e]==="number")){
            this.n[e]=[]
        }
        this.n[e][f]=1
    }
    fill(){
        for(let i=0; i<this.n.length; i++) {
            for(let j=0; j<this.n.length; j++) {
                if(this.n[i][j]===undefined)
                    this.n[i][j]=0;
            }
        }
    }
    toString(){
        let s ="\n"
        for(let i=0; i<this.n.length; i++) {
            s += "\n"
            for(let j=0; j<this.n.length; j++) {
                s+=this.n[i][j];
            }
        }
        return s;
    }
    print(){
        console.log(this.toString())
    }
    list(x){
        let l= new Enlazada()
        let a=this.toString()
        console.log("Lista de "+x)
        for(let i=0; i<this.n.length; i++){
            if(this.n[x][i]==1){
                l.AgregarDato(i)
            }
            else{
                console.log(a)
            }
        }
        console.log(l.imp())
    }
}
class Nodo{
    constructor(dato, next){
        this.dato = dato;
        this.next = next;
    }
}

let g= new Grafo([
        [0,1,0,0],
        [1,0,1,0],
        [0,0,0,1],
        [0,1,0,0],
])
g.print()
g.list(1)