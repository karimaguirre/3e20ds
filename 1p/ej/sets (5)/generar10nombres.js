function nombreAleatorios(){
    const nombres = ["Josue", "Carlos", "Pedro", "Indigo", "Jesús", "Pepe", "Alonso", "Juan", "Pancho", "Alan","Karina"];
    const nombresAleatorios = new Set();
    let i = 0;
  
        for(let i = 10; i > 0  ; i--){
            const j = Math.floor(Math.random() * i)
            const temp = nombres[i]
            nombres[i] = nombres[j]
            nombres[j] = temp
            nombresAleatorios.add(nombres[i]);
          }
  
            console.log(nombresAleatorios);
  
  }
  nombreAleatorios();