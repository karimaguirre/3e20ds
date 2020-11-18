function lucas(){
    var quintoLucas = [];
    var n1 = 2;
    var n2 = 1
    var n3;
        for(var i=2; i<= 6;i++){
            quintoLucas.push(n2);
            n3 = n2;
            n2 += n1;
            n1 = n3;
    }
    console.log("El quinto número de la sucesión de Lucas es: " + quintoLucas[4]);
    }
    lucas();
    