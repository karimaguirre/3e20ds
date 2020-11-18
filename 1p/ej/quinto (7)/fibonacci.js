function fibonacci(){
    var limite = 4;
        var fibo = [1,2]; 
        for(i=2; i <= limite; i++){
            fibo.push(fibo[i-1] + fibo[i-2]);	
        }
        console.log("El quinto número fibonacci es: " + fibo[4]);	
    }
    fibonacci();