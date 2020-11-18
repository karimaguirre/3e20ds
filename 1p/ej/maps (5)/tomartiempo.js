function tiempo10e4(){
    var inicio = new Date();
    var nombresAles = new Map();
    for (let index = 1; index <= 10000; index++) {
      nombresAles.set("Nombre " + index , "name" +  Math.round(Math.random()*10000));
    }
    
    console.log(nombresAles);
  

    var final = new Date() - inicio;
    console.info('Tiempo de ejecucion ', final/1000 + " segundos.");
}
tiempo10e4();

tiempo10e5();

function tiempo10e5(){
  var inicio = new Date();
  var nombresAles = new Map();
  for (let index = 1; index <= 100000; index++) {
    nombresAles.set("Nombre " + index , "name" +  Math.round(Math.random()*100000));
  }
  
  console.log(nombresAles);


  var final = new Date() - inicio;
  console.info('Tiempo de ejecucion ', final/1000 + " segundos.");
}
tiempo10e5();

function tiempo10e6(){
  var inicio = new Date();
  var nombresAles = new Map();
  for (let index = 1; index <= 1000000; index++) {
    nombresAles.set("Nombre " + index , "name" +  Math.round(Math.random()*1000000));
  }
  
  console.log(nombresAles);


  var final = new Date() - inicio;
  console.info('Tiempo de ejecucion ', final/1000 + " segundos.");
}
tiempo10e6();
    