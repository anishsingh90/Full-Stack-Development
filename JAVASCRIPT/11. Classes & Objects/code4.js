class ToyotaCar {
    constructor(brand){
        console.log("creating new object");
        this.brand = brand;
    }
    start() {
        console.log("Start");
    }

    stop() {
        console.log("Stop");
    }
}

let fortuner = new ToyotaCar("fortuner"); //constructor
let lexus = new ToyotaCar(); //constructor