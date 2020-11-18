function alfabeto8(){
    console.log("De un alfabeto de 8 símbolos cuantas palabras de 8 símbolos podemos generar?");
    let s = 1;
    let n = 8;
    while (n > 1) {
        s *= n;
        n--;
    }
    console.log("La respuesta es: " + s);
    
    }
    alfabeto8();
    