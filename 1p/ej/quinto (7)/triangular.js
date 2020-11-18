function triangular(){
    var triangularArray = [];
    var triangular= 0;
    for(var contador = 1; contador<=5; contador++){
        triangular = triangular + contador; 
        triangularArray.push(triangular);
    }
    console.log("El quinto número triangular es: " + triangularArray[4]);
    }
    triangular();