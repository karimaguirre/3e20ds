class Node{
    constructor(data, next, prev) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class listaEnlazadaDoble {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    addToHead(data){
        const newNodo= new Node(data, this.head, null)
        if (this.head){
            newNodo.next=this.head;
            this.head.prev=newNodo;
            this.head = newNodo;
        }
        else{
            this.head= newNodo;
            this.tail= newNodo;
        }
        this.size++;
    }
    addtotail(data){
        const newNodo=new Node(data,null,this.tail)
        if(this.tail){
            newNodo.prev = this.tail;
            this.tail.next = newNodo;
            this.tail=newNodo
        }
        else{
            this.tail=newNodo;
            this.head=newNodo;
        }
        this.size++;
    }
    insertAct(data, ind) {
        if (ind < 0 || ind > this.size) {
            return null;
        }
        const newNodo=new Node(data, null,null);
        let current=this.head;
        let previo;
        if (ind===0){
            newNodo.next=current;
            current.prev=newNodo;
            this.head=newNodo;
        }
        else{
            for(let i=0;i<ind;i++){
                previo=current;
                current=current.next;
            }
            newNodo.next=current;
            newNodo.prev=previo;
            current.prev=newNodo;
            previo.next=newNodo;
        }
        this.size++;
    }
    removeFromHead(){
        if(this.head){
            return null;
        }
        let valorToReturn=this.head.data;
        if(this.head===this.tail){
            this.head=null;
            this.tail=null;
        }
        else{
            this.head=this.head.next;
            this.head.prev=null;
        }
        this.size--;
        return valorToReturn;
    }

    remove(data){
        let current=this.head;
        let previo=null;
        while(current!==null){
            if(current.data==data){
                if (!previo){
                    this.removeFromHead()
                }
                else if(!current.next){
                    this.removeFromTail()
                }
                else{
                    previo.next=current.next;
                    current.next.prev=previo;
                }
                this.size--;
                return current.data;
            }
            previo=current;
            current=current.next;
        }
        return null;
    }

    print() {
        let current = this.head
        let resul="";
        while(current){
            resul+=current.data+"<>";
            current=current.next;
        }
        return resul+= "X"
    }

}

const enlazadaDoble= new listaEnlazadaDoble();
enlazadaDoble.addToHead(8);
enlazadaDoble.addToHead(7);
enlazadaDoble.addtotail(9);
console.log(enlazadaDoble.print());
enlazadaDoble.insertAct(33,2);
enlazadaDoble.insertAct(23,2);
console.log(enlazadaDoble.print());
console.log(enlazadaDoble.remove(7));