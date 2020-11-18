
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Bienvenido a primos, ingrese (n): ', (n) => {

        for (var i = 2; i <= n; i++) {
            var primo = 1;
            var contador = 2;
            while(contador <= i/2 && primo) {
                if (i % contador === 0) {
                    primo = 0;
                }
                contador++;
            }
            if( primo ) {
                console.log(i);
            }
        }
    rl.close();
  });
