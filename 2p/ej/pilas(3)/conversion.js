class Pila{
    constructor() {
        this.pila=[]
        this.top=0;
    }
    add(x){
        this.pila[this.top++] = x
    }
    remove(){
        return this.pila[--this.top]
    }
    size(){
        return this.top;
    }
}

function conversionPila(num, base) {
    let pila = new Pila();
    let num2=num;
    do {
        pila.add(num % base);
        num = Math.floor(num /= base);
    }
    while (num > 0);
    let converted = "";
    while (pila.size() > 0) {
        converted += pila.remove();
    }
    console.log(num2 +" la conversion a base "+ base + " es " + converted);
    return converted;
}

conversionPila(33,3);
conversionPila(111,7);
conversionPila(19,4);
conversionPila(200,10);