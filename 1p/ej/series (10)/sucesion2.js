
function sucesion2 (){
    let serie = 1;
    let contador = 1;
    console.log(contador*-1);
        do{
            serie = serie + 2;
            if(serie == 1||serie ==5 ||serie ==9 ||serie ==13 ||serie ==17){
                obo = serie;
                obo *= -1; 
                console.log(obo);
            }
            else{
                console.log(serie);
            }
            contador++;
        }
    while(contador <= 9);
}
sucesion2();
