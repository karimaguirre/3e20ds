function fibonacciRecursivo(n){
    let valorActual = 1;
    let valorPrevio = 0;

    if (n ==1){
        return 1;
    }
    let contadorIteraciones = n -1;

    while(contadorIteraciones){
        valorActual += valorPrevio;
        valorPrevio = valorActual - valorPrevio;

        contadorIteraciones -=1;
    }

    return valorActual;
}

console.log(fibonacciRecursivo(12));