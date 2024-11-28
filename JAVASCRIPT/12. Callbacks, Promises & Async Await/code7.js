const getPromise = () => {
    return new Promise((resolve, reject) =>{
        console.log("I am a promise");
        resolve("success");
        // reject("error"); //print error
    });
};


let promise = getPromise();
promise.then((res) => {
    console.log("promise fulfilled", res);  
});



promise.catch((err) =>{
    console.log("promise rejected", err);
})