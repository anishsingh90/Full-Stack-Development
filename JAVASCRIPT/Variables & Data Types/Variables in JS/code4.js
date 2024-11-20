//var: Variable can be re-declared & updated. A global scope variable
var a = 4;
var a = 5;
console.log(a)

//let: Variable cannot be re-declared but can be updated. A block scope variable
let b = 5;
b = 6;
console.log(b);
    //OR
let d;
d = 45;
console.log(d)

//const: Variable cannot be re-declared or cannot be updated. A block scope variable
const c = 7;
console.log(c)

    //OR
//const e; //here is error because const alway be with value