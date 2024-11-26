let btn1 = document.querySelector("#btn1");

//Create EventListerer
btn1.addEventListener("click", (evt) => {
    console.log("button1 was clicked - handler1");
})

btn1.addEventListener("click", (evt) => {
    console.log("button1 was clicked - handler2");
})


//handler3
const handler3 = () => {
    console.log("button1 was clicked - handler3");
};
btn1.addEventListener("click", handler3);



btn1.addEventListener("click", (evt) => {
    console.log("button1 was clicked - handler4");
})


//Remove EventListener
btn1.removeEventListener("click", handler3);