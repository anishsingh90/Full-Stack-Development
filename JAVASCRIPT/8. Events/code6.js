/*
Qs. Create a toggle button that changes the screen to dark-mode when
clicked & light-mode when clicked again.
*/

let modeBtn = document.querySelector("#mode");
let currMode = "Light";

modeBtn.addEventListener("click", () => {
    if(currMode === "Light") {
        currMode = "Dark";
        document.body.style.backgroundColor = "black";
    }else{
        currMode = "Light";
        document.body.style.backgroundColor = "white";
    }
    console.log(currMode);
})