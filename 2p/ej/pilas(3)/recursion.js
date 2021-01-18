class Pila{
    constructor() {
        this.recursionPila=[]
    }
    add(x){
        this.recursionPila.push(x)
        return this.recursionPila
    }
    last(){
        console.log(this.recursionPila[(this.size())-1])
    }
    remove(){
        console.log(this.recursionPila.pop())

    }
    size(){
        return  this.recursionPila.length;
    }
    show(){
        console.log(this.recursionPila)
    }
    randomNumber(){
        recursionPila.add(Math.round(Math.random()*10));
    }
}
recursionPila = new Pila();

recursionPila.randomNumber();
recursionPila.randomNumber();
recursionPila.randomNumber();
recursionPila.randomNumber();

console.log("Numeros aleatorios por recursión");
recursionPila.show();

console.log("Removiendo los valores de la pila creada utilizando recursion")
todo()
function todo(){
    if(recursionPila.size()!=0) {
        recursionPila.remove()
        todo()
    }
    else{
        console.log("Done.")
    }
}