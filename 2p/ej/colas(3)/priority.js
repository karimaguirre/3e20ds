function ColaPrioridad(){
    this.dato = Array.prototype.slice.call(arguments, 0);
    this.enCola=enCola;
    this.fueraCola=fueraCola;
    this.first=first;
    this.length= length;

    function enCola (element){
        this.dato.push(element);
    }
    function fueraCola(){
        let prioridad= this.dato[0].prioridad;
        let pItem=0;
        this.dato.forEach(function (item, ind){
            if(item.prioridad < prioridad){
                prioridad=item.prioridad;
                pItem=ind;
            }
        });
        return this.dato.splice(pItem, 1)[0]
    }
    function first(){
        return this.dato[0];
    }
    function length(){
        return this.dato.length
    }
}
function paciente(nombre, prioridad){
    this.nombre=nombre;
    this.prioridad=prioridad;

}

let n = new ColaPrioridad();
n.enCola(new paciente("Anguiano", 1));
n.enCola(new paciente("Silva", 4));
n.enCola(new paciente("González", 2));
n.enCola(new paciente("Rodriguez", 3));
n.enCola(new paciente("Cabello", 5));

console.log("La Cola tiene una longitud de: ");
console.log(n.length());
console.log("El primer objeto de la cola es: ");
console.log(n.first());
console.log("Sacando los objetos de la Cola en orden: ");
console.log(n.fueraCola());
console.log(n.fueraCola());
console.log(n.fueraCola());
console.log(n.fueraCola());