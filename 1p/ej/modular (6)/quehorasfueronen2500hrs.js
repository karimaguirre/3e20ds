function sisonlas10am(){
    
    var horas1 = Math.round(2500/24);
    var horas2 = (2500/24) - horas1;
    var horas3 = 24 * horas2;
    var dia1 = Math.round(10 + horas3);
    var dia2 = Math.round(10 - horas3);
    
    

    console.log("¿Qué horas fueron hace 2500 horas? " + dia2+":00 hrs");
}
sisonlas10am();