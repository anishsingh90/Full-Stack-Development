class Person{
    constructor(){
        this.species = "homo sapiens";
    }

    eat(){
        console.log("I'm eating");
    }

    sleep(){
        console.log("I'm sleeping");
    }

    work(){
        console.log("Do nothing");
    }
}

class Engineer extends Person{
    work(){
        console.log("I'm working");
    }
}

let anishObj = new Engineer();