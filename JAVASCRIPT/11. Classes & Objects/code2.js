const employee = {
    calcTax() {
        console.log("tax rate is 10%");
    },
};

const karanArjun = {
    salary: 50000,
    calcTax() {
        console.log("tax rete is 20%");
    }
};

//calclate the tax for employee 
karanArjun._proto_ = employee;