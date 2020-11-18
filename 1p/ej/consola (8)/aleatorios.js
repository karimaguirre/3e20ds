const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Escriba número máximo aleatorio (n): ', (n) => {
    rl.question('Escriba el número de veces que se imprimirá (x): ', (x) => {
    var aleatorio;
                for(i = 1;i<=x;i++){
                        aleatorio = Math.round(Math.random()* n);
                        console.log(aleatorio);
                }

    rl.close();
  });
});



