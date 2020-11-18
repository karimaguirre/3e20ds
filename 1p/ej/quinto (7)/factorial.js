function factorial(){
    let s = 1;
    var n = 5;
    var almacen = "";
    while (n >= 1) {
        s *= n;
        almacen += n + " * ";
        n--;
    }
    console.log("El factorial de 5 es: " + almacen + "= " + s);
}
factorial();