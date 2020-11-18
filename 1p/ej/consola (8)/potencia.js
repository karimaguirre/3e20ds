
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Bienvenido a potencia, ingrese (n): ', (n) => {
    rl.question('Ingrese (x): ', (x) => {

        for(var i=1; i<=n; i++){
            console.log(Math.pow(x,i));
        }
        

    rl.close();
  });
});
