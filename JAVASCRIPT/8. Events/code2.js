let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
    console.log("Button 1 clicked");
    let a = 25;
    a++;
    console.log(a);
}

let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("You are inside div");
}