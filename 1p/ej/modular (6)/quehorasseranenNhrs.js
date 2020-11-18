
function sisonlas10am(){
    

//n
var n1 = 10;
horasn = 2800;
var horasn1 = Math.round(horasn/24);
var horasn2 = (horasn/24) - horasn1;
var horasn3 = 24 * horasn2;
var dian = Math.round(n1 + horasn3);
console.log("¿Qué horas serán en " + horasn + " horas? " + dian+":00 hrs");

}
sisonlas10am();