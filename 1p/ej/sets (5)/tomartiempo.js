function tiempo10e4(){
var inicio = new Date();
const num = 5;
const randomNameGenerator = num => {
   let res = '';
   for(let i = 0; i < num; i++){
      const random = Math.floor(Math.random() * 27);
      res += String.fromCharCode(97 + random);
   };
   return res;
};
for (let index = 0; index <= 100000; index++) {
   console.log(randomNameGenerator(num));
   
}
var final = new Date() - inicio;
console.info('Tiempo de ejecucion ', final/1000 + " segundos.");
}
tiempo10e4();
function tiempo10e5(){
   var inicio = new Date();
   const num = 5;
   const randomNameGenerator = num => {
      let res = '';
      for(let i = 0; i < num; i++){
         const random = Math.floor(Math.random() * 27);
         res += String.fromCharCode(97 + random);
      };
      return res;
   };
   for (let index = 0; index <= 1000000; index++) {
      console.log(randomNameGenerator(num));
      
   }
   var final = new Date() - inicio;
   console.info('Tiempo de ejecucion ', final/1000 + " segundos.");
}


function tiempo10e6(){
   var inicio = new Date();
   const num = 5;
   const randomNameGenerator = num => {
      let res = '';
      for(let i = 0; i < num; i++){
         const random = Math.floor(Math.random() * 27);
         res += String.fromCharCode(97 + random);
      };
      return res;
   };
   for (let index = 0; index <= 10000000; index++) {
      console.log(randomNameGenerator(num));
      
   }
   var final = new Date() - inicio;
   console.info('Tiempo de ejecucion ', final/1000 + " segundos.");
}


