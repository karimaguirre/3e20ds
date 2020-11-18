function primos(){
    var primos = [];
        for (var i = 2; i <= 11; i++) {
            var primo = 1;
            var contador = 2;
            while(contador <= i/2 && primo) {
                if (i % contador === 0) {
                    primo = 0;
                }
                contador++;
            }
            if( primo ) {
                primos.push(i);
            }
        }
        console.log(primos[4]);
    }
    primos();