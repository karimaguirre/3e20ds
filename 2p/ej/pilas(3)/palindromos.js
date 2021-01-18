class Pila{
    constructor() {
        this.pila=[]
        this.top=0;
    }
    add(algo){
        this.pila[this.top++] = algo
    }
    remove(){
        return this.pila[--this.top]
    }
    size(){
        return this.top;
    }
}
function esPalindromo(word) {
    let pila = new Pila();
    let control ="";
    for (let i = 0; i < word.length; i++) {
        pila.add(word[i]);
    }
    while (pila.size() >0) {
        control += pila.remove();
    }
    console.log(control)
    if (word == control) {
        console.log(word + " Es un Palindromo");
    }
    else {
        console.log("No es palindromo")
    }
}

let word="mariana";
esPalindromo(word);
console.log("");

word="macam";
esPalindromo(word);
console.log("");

word="juego";
esPalindromo(word);
console.log("");