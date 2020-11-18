
function serie2 (){
    var serie2Array = [];
    let serie = 1;
    let contador = 1;
    var obo;
    serie2Array.push(contador*-1);
        do{
            serie = serie + 2;
            if(serie == 1||serie ==5 ||serie ==9 ||serie ==13 ||serie ==17){
                obo = serie;
                obo *= -1; 
                serie2Array.push(obo);
            }
            else{
                serie2Array.push(serie);
            }
            contador++;
        }
    while(contador <= 9);
    console.log(serie2Array);
}
serie2();
