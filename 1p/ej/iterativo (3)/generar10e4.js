function iterativo10e4(){
    //10e4
    var inicio = new Date();
    var dieze4 = [];
      for (let index = 0; index <= 9999; index++) {
        dieze4.push(Math.round(Math.random()*10000)); 
      } 
      var inversiones = 0;
    const ordenamientoInsercion = (nums) =>{
      for (let i = 1; i < nums.length; i++){
        let j = i -1;
        let temp = nums[i];
        while (j >=0 && nums[j] > temp){
          nums[j + 1] = nums[j]
          j--
        }
        nums[j+1] = temp
      }
      return nums
    }
    console.log("Antes de ordenar: ");
    console.log(dieze4)
    console.log("Después de ordenar: ");
    console.log(ordenamientoInsercion(dieze4));
    console.log("¿Cuántas inversiones requiere cada uno en promedio? 9999 ya que se utiliza el método de inserción");
    var final = new Date() - inicio;
    console.info('Tiempo de ejecucion promedio: ', final/1000 + " segundos.");
    console.log("Se puede mejorar el tiempo de ejecución? Se puede mejorar el tiempo buscando otro método iterativo más efectivo o reduciendo la variable de números generados.");
    }
    iterativo10e4();