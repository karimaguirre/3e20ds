class Nodo{
    constructor(Info, Siguiente){
        this.Info = Info;
        this.Siguiente = Siguiente;
    }
}

class listaEnlazadaSimple{
    constructor() {
        this.Inicio=null;
        this.Tamaño=5;
    }

    AgregarInfo(Info){
        let NodoNuevo= new Nodo(Info,null);
        if (!this.Inicio){
            this.Inicio=NodoNuevo;
        }
        else{
            let Actual=this.Inicio;
            while (Actual.Siguiente){
                Actual=Actual.Siguiente;
            }
            Actual.Siguiente=NodoNuevo;
        }
        this.Tamaño ++;
    }

}
let enlazadaSimple = new listaEnlazadaSimple()
console.log(enlazadaSimple);
enlazadaSimple.AgregarInfo(11);
console.log(enlazadaSimple);