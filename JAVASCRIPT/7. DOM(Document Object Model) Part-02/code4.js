let newBtn = document.createElement("button");
newBtn.innerText = "Click Me!"
console.log(newBtn);

//access the div where create the button
let div = document.querySelector("div");

//Insert Element
div.append(newBtn); //adds at the end of node (inside)
div.prepend(newBtn); //adds at the start of node(inside)
div.before(newBtn); //adds before the node(outside)
div.after(newBtn); //adds after the node(outside)

//create new heading
let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi! I am new!</i>";

document.querySelector("body").prepend(newHeading);

//Delete Element
let para = document.querySelector("p");
para.remove(); //remove the class="para" from the web page

