const set1 = new Set();
const objetoPrueba = {};
    set1.add("Karim");
    set1.add(3);
    set1.add(objetoPrueba);
console.log(set1);

    const weakset1 = new WeakSet();
    const objecto = {};
    
    weakset1.add(objecto);
console.log("Weak set contiene el objeto? " + weakset1.has(objecto));

console.log("A diferencia del set que se le puede guardar cualquier tipo de dato, el weakset solo puede almacenar objetos dentro él. ");

