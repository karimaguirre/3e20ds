
function aleatorio(){
    var aleatorioArray = [];
    var aleatorio;
        for(var i = 1;i<=10;i++){
                aleatorio = Math.round(Math.random()*10);
                aleatorioArray.push(aleatorio)
        }
        console.log(aleatorioArray);
    }
    aleatorio();
