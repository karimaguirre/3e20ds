var saludos = factorial(3)/(factorial(3-2)*factorial(2))

console.log(saludos);

function factorial(n){
    var final = 1;

    for (var i= n; i>0;i--){
        final = final * i;
    }

    return final;

}