var saludos = factorial(5)/(factorial(5-2)*factorial(2))

console.log(saludos);

function factorial(n){
    var final = 1;

    for (var i= n; i>0;i--){
        final = final * i;
    }

    return final;
}


