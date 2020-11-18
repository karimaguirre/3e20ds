function senx(){
    var x = 3;
    var senArray = [3];
      
    senArray.push(x - Math.pow(x,3)/factorial(3));
    
    senArray.push(x - Math.pow(x,3)/factorial(3) + Math.pow(x,5)/factorial(5));
  
    senArray.push(x - Math.pow(x,3)/factorial(3) + Math.pow(x,5)/factorial(5) - Math.pow(x,7)/factorial(7));
  
    senArray.push(x - Math.pow(x,3)/factorial(3) + Math.pow(x,5)/factorial(5) - Math.pow(x,7)/factorial(7) + Math.pow(x,9)/factorial(9));
  
    senArray.push(x - Math.pow(x,3)/factorial(3) + Math.pow(x,5)/factorial(5) - Math.pow(x,7)/factorial(7) + Math.pow(x,9)/factorial(9) - Math.pow(x,11)/factorial(11));
  
    senArray.push(x - Math.pow(x,3)/factorial(3) + Math.pow(x,5)/factorial(5) - Math.pow(x,7)/factorial(7) + Math.pow(x,9)/factorial(9) - Math.pow(x,11)/factorial(11) + Math.pow(x,13)/factorial(13) );
  
    senArray.push(x - Math.pow(x,3)/factorial(3) + Math.pow(x,5)/factorial(5) - Math.pow(x,7)/factorial(7) + Math.pow(x,9)/factorial(9) - Math.pow(x,11)/factorial(11) + Math.pow(x,13)/factorial(13) - Math.pow(x,15)/factorial(15) );
  
    senArray.push(x - Math.pow(x,3)/factorial(3) + Math.pow(x,5)/factorial(5) - Math.pow(x,7)/factorial(7) + Math.pow(x,9)/factorial(9) - Math.pow(x,11)/factorial(11) + Math.pow(x,13)/factorial(13) - Math.pow(x,15)/factorial(15) + Math.pow(x,17)/factorial(17));
  
    senArray.push(x - Math.pow(x,3)/factorial(3) + Math.pow(x,5)/factorial(5) - Math.pow(x,7)/factorial(7) + Math.pow(x,9)/factorial(9) - Math.pow(x,11)/factorial(11) + Math.pow(x,13)/factorial(13) - Math.pow(x,15)/factorial(15) + Math.pow(x,17)/factorial(17) - Math.pow(x,19)/factorial(19));
  
    senArray.push(x - Math.pow(x,3)/factorial(3) + Math.pow(x,5)/factorial(5) - Math.pow(x,7)/factorial(7) + Math.pow(x,9)/factorial(9) - Math.pow(x,11)/factorial(11) + Math.pow(x,13)/factorial(13) - Math.pow(x,15)/factorial(15) + Math.pow(x,17)/factorial(17) - Math.pow(x,19)/factorial(19)+ Math.pow(x,21)/factorial(21) );
  
    console.log(senArray);
  }
  
  senx();
  
  function factorial(n){
    let s = 1;
    var n;
    var almacen = "";
    while (n >= 1) {
        s *= n;
     
        n--;
    }
    return s;
  }