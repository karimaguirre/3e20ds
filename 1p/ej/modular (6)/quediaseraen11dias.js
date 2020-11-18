let s = ["Lunes", "Martes" ,"Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
let f = 0;
let n = 11;//Dias
let semana = 7;
let inicio = s[0]; //Empezando en Lunes

//Futuro
f = n/semana;

if (f == 1){

    console.log(inicio);

}else if (f > 1 ){
    let x = n%semana;
    x = Math.round(x);
    console.log("En 11 días será: " + s[x]);
}

