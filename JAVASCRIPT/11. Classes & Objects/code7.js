class Person{
    constructor(name){
        this.species = "homo sapiens";
        this.name = name;
    }

    eat(){
        console.log("I'm eating");
    }

}

class Engineer extends Person{
    constructor(name){
        super(name); //to invoke parent class constructor
    }
    work(){
        console.log("I'm working");
    }
}

let engObj = new Engineer("Anish");