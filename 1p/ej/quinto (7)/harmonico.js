function harmonico(){
    var valor = 1;
    var frac = 0;
    for(var i=1;i <= 5; i++){
        frac += valor/i;
    }
    console.log("El quinto número harmónico es: " + frac);
}
harmonico();
