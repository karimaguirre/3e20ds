class Cola{
    constructor() {
        this.algo=[];
    }
    add(element){
        this.algo.push(element)
        return this.algo;
    }
    remove(){
        return this.algo.shift();
    }
    first() {
        return this.algo[0];
    }
    show(){
        return this.algo;
    }
    empty(){
        if (this.algo.length == 0) {
            return true;
        }
        else {
            return false;
        }
    }
}

function Dancer(name, sex) {
    this.name = name;
    this.sex = sex;
}

function dance(m, f) {
    console.log("Pareja para bailar: \n");
    while (!f.empty() && !m.empty()) {
        person = f.remove();
        console.log("La chica es: " + person.name);
        person = m.remove();
        console.log(" y el chico es: " + person.name);
    }
    console.log();
}
let male = new Cola();
let female = new Cola();

male.add(new Dancer("Josue", "h"))
male.add(new Dancer("Dylan", "h"))
male.add(new Dancer("Alex", "h"))
male.add(new Dancer("Elias", "h"))
male.add(new Dancer("Daniel", "h"))

female.add(new Dancer("Alondra","m"))
female.add(new Dancer("Juana","m"))
female.add(new Dancer("Katy","m"))
female.add(new Dancer("Andrea","m"))

dance(male,female)
if (!female.empty()) {
    console.log(female.first().name + " está esperando.");
}
if (!male.empty()) {
    console.log(male.first().name + " está esperando.");
}