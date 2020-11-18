
function serie1(){
var sucesion = [];
    let serie = 1;
    let contador = 1;
        do{
            sucesion.push(serie);
            serie = serie + 2; 
            contador++;
        }
    while(contador <= 10);
    console.log(sucesion);
}
serie1();
