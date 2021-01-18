class seleccionado {
    siguiente = null;
    valor = null;
    constructor(valor) {
        this.valor = valor;
    }
}
class listaEnlazadaCircular {
    first = null;
    last = null;
    add = (valor) => {
        const elemento = new seleccionado(valor);
        if (!this.first) {
            this.first = elemento;
            this.last = elemento;
            return;
        }
        this.last.next = elemento;
        this.last = elemento;
        
    }
    show = (valor) => {
        return this.first
}
}
const enlazadaCircular = new listaEnlazadaCircular();
enlazadaCircular.add('x');
enlazadaCircular.add('y');
enlazadaCircular.add('z');
console.log(enlazadaCircular);