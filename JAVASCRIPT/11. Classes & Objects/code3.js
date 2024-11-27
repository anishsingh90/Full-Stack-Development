class ToyotaCar {
    start() {
        console.log("Start");
    }

    stop() {
        console.log("Stop");
    }

    setBrand(brand) {
        this.brand = brand;
    }
}

let fortuner = new ToyotaCar();
fortuner.setBrand("fortuner");
let lexus = new ToyotaCar();