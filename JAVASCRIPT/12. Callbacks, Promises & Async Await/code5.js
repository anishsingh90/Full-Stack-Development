//print data1 then data2 then data3 

function getData(dataId, getNextData){
    //2-second
    setTimeout(() =>{
        console.log("data", dataId);
        if(getNextData){
            getNextData();
        }
    }, 2000);
}

//Callback Hell(Nested Callback)
getData(1, ()=>{
    console.log("getting data2...");
    getData(2, ()=>{
        console.log("getting data3...");
        getData(3, ()=>{
            console.log("getting data4...");
            getData(4);
        });
    });
});