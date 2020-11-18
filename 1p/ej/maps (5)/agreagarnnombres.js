function agregar10e6Nombres(){
    var nombresAles = new Map();
    for (let index = 1; index <= 10000000; index++) {
      nombresAles.set("Nombre " + index , "name" +  Math.round(Math.random()*100000));
    }
    
  console.log(nombresAles);
  }
  agregarn10e6Nombres();