function iterativo10e6(){
    //10e6
    var inicio = new Date();
    var dieze6 = [];
      for (let index = 0; index <= 999999; index++) {
        dieze6.push(Math.round(Math.random()*1000000)); 
      }
    
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
    console.log(dieze6)
    console.log("Después de ordenar: ");
    console.log(ordenamientoInsercion(dieze6));
    
    
    console.log("¿Cuántas inversiones requiere cada uno en promedio? 999999 ya que se utiliza el método de inserción");
    
    var final = new Date() - inicio;
    console.info('Tiempo de ejecucion promedio: ', final/1000 + " segundos.");
    
    console.log("Se puede mejorar el tiempo de ejecución? Se puede mejorar el tiempo buscando otro método iterativo más efectivo o reduciendo la variable de números generados.")
    }
iterativo10e6();
