let marvelHeroes = ["thor", "spiderman", "ironman"];
let dcHeroes = ["superman", "batman"];

//concat method
let heroes = marvelHeroes.concat(dcHeroes);

console.log(heroes);

//unsift method
dcHeroes.unshift("antman"); //add from start
console.log(dcHeroes);

//shift method
dcHeroes.shift(); //delete from start & return
console.log(dcHeroes);