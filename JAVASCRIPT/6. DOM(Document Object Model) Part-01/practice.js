/*
Qs1. Create a H2 heading element with text - "Hello JavaScript". Append "from Apna College student"
to this text using JS.
Qs2. Create 3 divs with common class name - "box". Access them & add some unique of them
*/


//Qs1.
let h2 = document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText = h2.innerText + "from Apna College Students";



//Qs2.
let divs = document.querySelectorAll(".box");
console.log(divs[0], divs[1], divs[2]);

divs[0].innerText = "new unique value 1";
divs[1].innerText = "new unique value 2";
divs[2].innerText = "new unique value 3";