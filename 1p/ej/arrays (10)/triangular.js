function triangular(){
    var triangularArray = [];
    var triangular= 0;
    for(var contador = 1; contador<=10; contador++){
        triangular = triangular + contador; 
        triangularArray.push(triangular);
    }
    console.log(triangularArray);
    }
    triangular();
