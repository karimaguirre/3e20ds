function alfabeto3(){
    console.log("De un alfabeto de n símbolos cuantas palabras de r símbolos podemos generar?");
    let s = 1;
    let n = 3;
    while (n > 1) {
        s *= n;
        n--;
    }
    console.log("La respuesta es: " + s);
    
    }
    alfabeto3();
    