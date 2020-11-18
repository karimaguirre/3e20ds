
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Bienvenido a Factorial, ingrese (n): ', (n) => {

    let s = 1;
    while (n > 1) {
        s *= n;
        n--;
    }
    console.log(s);

    rl.close();
  });
