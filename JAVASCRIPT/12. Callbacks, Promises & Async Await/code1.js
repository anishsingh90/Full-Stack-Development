function hello(){
    console.log("Hello");
}

setTimeout(hello, 2000); //timeout


//setTimeout without any function
setTimeout(()=>{
    console.log("Hello, Anish");
}, 4000);