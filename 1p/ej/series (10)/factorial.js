
function factorial(){
    let s = 1;
    var n = 10;
    var almacen = "";
    while (n >= 1) {
        s *= n;
        almacen += n + " * ";
        n--;
    }
    console.log(almacen + "= " + s);
}
factorial();

