
function repetidos(){

var S=[3,1,4,2,3];
var leido = [];

S.forEach(function(S) {
  if (leido[S]){
    console.log("Si existen numeros repetidos, el número es: " + S);
}
else{
leido[S] = true;
}
});

}
repetidos();

