//select with Id
let heading = document.getElementById("heading");
console.dir(heading);
console.log(heading);

//select with class
let topic = document.getElementsByClassName("topic");
console.dir(topic);
console.log(topic);

//Select with tag
let paras = document.getElementsByTagName("p");
console.dir(paras);
console.log(paras);

// Select with query
let firstEl = document.querySelector("p"); //1st element
console.dir(firstEl);

// Select with queryAll
let allEl = document.querySelectorAll("p"); //all element
console.dir(allEl);