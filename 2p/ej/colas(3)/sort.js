class Cola{
    constructor() {
        this.sortCola=[]
        this.vec=[]
    }
    add(element){
        this.sortCola.push(element);
    }
    order(){
        let remove;
        let auxiliar;
        let c=0
        while(this.sortCola.length>0){
            this.vec[c]=this.sortCola.shift()
            c++
        }
        remove=false;
        while (!remove){
            remove=true;
            for(let i=0; i<3; i++){
                if(this.vec[i]>this.vec[i+1]){
                    auxiliar=this.vec[i+1];
                    this.vec[i+1]=this.vec[i];
                    this.vec[i]= auxiliar
                    remove=false
                }
            }
        }
        for (let j=0;j<4;j++){
            this.sortCola.push(this.vec[j])

        }
    }
    mostrar(){
        return this.sortCola;
    }
}

sortCola=new Cola();
sortCola.add(88);
sortCola.add(11);
sortCola.add(77);
sortCola.add(33);
console.log("Cola 1.0");
console.log(sortCola.mostrar());
sortCola.order();
console.log("Cola ordenada 2.0");
console.log(sortCola.mostrar());