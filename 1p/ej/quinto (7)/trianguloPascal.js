console.log("El quinto renglon del triangulo de pascal es: " + trianguloPascal(4));

function trianguloPascal(n) {
    if (n <= 0) return 1;
    return generarFila(trianguloPascal(n - 1))
  }
  
  function generarFila(ultimaFila) {
    let siguienteFila = []
    siguienteFila.push(1)
    for (let i = 0; i < ultimaFila.length - 1; i++) {
      siguienteFila.push(ultimaFila[i] + ultimaFila[i + 1])
    }
    siguienteFila.push(1)
    return siguienteFila
  }

  