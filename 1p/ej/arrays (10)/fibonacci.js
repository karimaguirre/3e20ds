
function fibonacci(){
    var limite = 10;
        var fibo = [1,2];
        fibo.push(1); 
        for(i=2; i <= limite; i++){
            fibo.push(fibo[i-1] + fibo[i-2]);	
        }
        console.log(fibo);	
    }
    fibonacci();
