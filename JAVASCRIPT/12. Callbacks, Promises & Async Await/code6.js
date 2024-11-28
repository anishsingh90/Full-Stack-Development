//Promises

let promise = new Promise((resolve, reject) => {
    console.log("I am a promise");
    resolve("Success");
    // reject("Unsuccess"); //return error
});

function getData(dataId, getNextData){
    return new Promise((resolve, reject)=>{
    })
}