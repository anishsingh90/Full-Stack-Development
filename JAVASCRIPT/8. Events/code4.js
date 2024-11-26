let btn1 = document.querySelector("#btn1");

//Add EventListerer
btn1.addEventListener("click", () => {
    console.log("button1 was clicked");
})

btn1.addEventListener("click", (evt) => {
    console.log("button1 was clicked - handler2");
})
